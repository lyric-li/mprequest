const request = require("./request");
const InterceptorManager = require("./interceptor-manager");

class MpRequest {

  options = {
    header: { "content-type": "application/json" },
    method: "GET",
    dataType: "json",
    responseType: "text",
    timeout: 60000,
  }

  interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager(),
  }

  constructor(options) {
    this.options = Object.assign(this.options, options);
  }

  get(url, params, options) {
    options = Object.assign(options, { method: "GET" });
    return this.request(url, params, options);
  }

  post(url, params, options = {}) {
    options = Object.assign(options, { method: "POST" });
    return this.request(url, params, options);
  }

  request(
    url = "",
    params = {},
    options = {},
  ) {
    options = Object.assign(this.options, options);

    this.interceptors.request.foreach((fulfilledFn, rejectedFn) => {
      try {
        options = fulfilledFn(options);
      } catch (error) {
        rejectedFn(error);
        throw error;
      }
    });

    let promise = request(url, params, options);

    this.interceptors.response.foreach((fulfilledFn, rejectedFn) => {
      promise = promise.then(fulfilledFn, rejectedFn);
    });

    return promise;
  }

}

module.exports = MpRequest;

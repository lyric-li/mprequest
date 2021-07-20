const Request = require("./request");
const InterceptorManager = require("./interceptor-manager");
const CancelToken = require("./cancel-token");

class MpRequest {

  req = void 0;

  options = {
    baseUrl: "",
    header: { "content-type": "application/json" },
    method: "GET",
    dataType: "json",
    responseType: "text",
    timeout: 60000,
  };

  interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager(),
  };

  constructor(options) {
    this.req = new Request();
    this.options = Object.assign(this.options, options);
  }

  get(
    url,
    data,
    options = {},
  ) {
    options = Object.assign(options, { 
      url, 
      data: data.params, 
      method: "GET",
    });
    return this.request(options);
  }

  post(
    url,
    data,
    options = {},
  ) {
    options = Object.assign(options, { 
      url,
      data,
      method: "POST",
    });
    return this.request(options);
  }

  request(options = {}) {
    options = Object.assign(this.options, options);

    this.interceptors.request.foreach((fulfilledFn, rejectedFn) => {
      try {
        options = fulfilledFn(options);
      } catch (error) {
        rejectedFn(error);
        throw error;
      }
    });

    const { url } = options;
    if(!(url.indexOf("https") === 0 || url.indexOf("http") === 0)) {
      options.url = `${options.baseUrl}${url}`;
    }

    let promise = this.req.send(options);

    this.interceptors.response.foreach((fulfilledFn, rejectedFn) => {
      promise = promise.then(fulfilledFn, rejectedFn);
    });

    return promise;
  }

}

module.exports = MpRequest;
module.exports.CancelToken = CancelToken;

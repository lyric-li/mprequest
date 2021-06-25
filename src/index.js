import request from "./request";
import InterceptorManager from "./interceptor-manager";

class MpRequest {

  options = {
    header: { "content-type": "application/json" },
    method: "GET",
    dataType: "json",
    responseType: "text",
  }

  interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager(),
  }

  constructor(options) {
    this.options = Object.assign(this.options, options);
  }

  get(url, params, options) {
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

    let newOptions = options;
    const handlersReq = this.interceptors.request.handlers;
    while (handlersReq.length) {
      const { fulfilledFn, rejectedFn } = handlersReq.shift();
      try {
        newOptions = fulfilledFn(options);
      } catch (error) {
        rejectedFn(error);
        break;
      }
    }

    let promise = request(url, params, newOptions);

    const handlersRes = this.interceptors.response.handlers;
    while (handlersRes.length) {
      const { fulfilledFn, rejectedFn } = handlersRes.shift();
      promise = promise.then(fulfilledFn, rejectedFn);
    }

    return promise;
  }

}

module.exports = MpRequest;

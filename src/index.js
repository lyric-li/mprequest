import request from "./request";

class MpRequest {

  options = {
    header: { "content-type": "application/json" },
    method: "GET",
    dataType: "json",
    responseType: "text",
  }

  constructor(options) {
    this.options = Object.assign(this.options, options);
  }

  request(
    url = "",
    params = {},
    options = {},
  ) {
    options = Object.assign(this.options, options);
    return request(url, params, options);
  }

}

module.exports = MpRequest;

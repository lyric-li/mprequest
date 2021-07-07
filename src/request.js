class Request {

  send(
    url = "",
    data = {},
    options = {},
  ) {
    return new Promise((resolve, reject) => {
      const task = wx.request({
        url,
        data,
        ...options,
        success: (res) => {
          resolve(res);
        },
        fail: (err) => {
          reject(err);
        },
      });

      const { cancelToken } = options;
      if (cancelToken) {
        cancelToken.promise.then(() => {
          task.abort();
        });
      }
    });
  }
}

module.exports = Request;

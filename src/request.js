// 小程序请求
function request(
  url = "",
  data = {},
  options = {},
) {
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      data,
      header: options.header,
      method: options.method,
      dataType: options.dataType,
      responseType: options.responseType,
      success: (res) => {
        resolve(res);
      },
      fail: (err) => {
        reject(err);
      },
    });
  });
}

module.exports = request;

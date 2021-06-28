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
      ...options,
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

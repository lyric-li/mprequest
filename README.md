# mprequest

> Axios 风格的微信小程序网络请求工具


## 安装

```bash
git clone https://gitee.com/lyric-li/mprequest.git

npm install file:/full/path/mprequest -S
# OR
yarn add file:/full/path/mprequest
```

## 使用说明

### 导入

```javascript
import MpRequest from 'mprequest';
// OR
const MpRequest = require('mprequest');
```

### 创建实例

```javascript
const mpreq = new MpRequest({
  baseUrl: "https://xxx.xxx.xxx"
});
```

配置选项详见[微信小程序文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html)

### 执行请求

```javascript
mpreq.request('/user', {
  firstName: 'Fred',
  lastName: 'Flintstone'
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});
```

为方便起见，请求方法提供了别名

- mpreq.get(url[, params[, options]])
- mpreq.post(url[, params[, options]])


### 拦截器

在请求或响应被 `then` 或 `catch` 处理前拦截它们

```javascript
// 添加请求拦截器
mpreq.interceptors.request.use(function (options) {
  // 在发送请求之前做些什么
  return options;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
mpreq.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
```

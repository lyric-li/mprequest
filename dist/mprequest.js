/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// import request from \"./request\";\n// import InterceptorManager from \"./interceptor-manager\";\nvar _request = __webpack_require__(/*! ./request */ \"./src/request.js\");\n\nvar InterceptorManager = __webpack_require__(/*! ./interceptor-manager */ \"./src/interceptor-manager.js\");\n\nvar MpRequest = /*#__PURE__*/function () {\n  function MpRequest(options) {\n    _classCallCheck(this, MpRequest);\n\n    _defineProperty(this, \"options\", {\n      header: {\n        \"content-type\": \"application/json\"\n      },\n      method: \"GET\",\n      dataType: \"json\",\n      responseType: \"text\"\n    });\n\n    _defineProperty(this, \"interceptors\", {\n      request: new InterceptorManager(),\n      response: new InterceptorManager()\n    });\n\n    this.options = Object.assign(this.options, options);\n  }\n\n  _createClass(MpRequest, [{\n    key: \"get\",\n    value: function get(url, params, options) {\n      return this.request(url, params, options);\n    }\n  }, {\n    key: \"post\",\n    value: function post(url, params) {\n      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n      options = Object.assign(options, {\n        method: \"POST\"\n      });\n      return this.request(url, params, options);\n    }\n  }, {\n    key: \"request\",\n    value: function request() {\n      var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n      options = Object.assign(this.options, options);\n      this.interceptors.request.foreach(function (fulfilledFn, rejectedFn) {\n        try {\n          options = fulfilledFn(options);\n        } catch (error) {\n          rejectedFn(error);\n          throw error;\n        }\n      });\n\n      var promise = _request(url, params, options);\n\n      this.interceptors.response.foreach(function (fulfilledFn, rejectedFn) {\n        promise = promise.then(fulfilledFn, rejectedFn);\n      });\n      return promise;\n    }\n  }]);\n\n  return MpRequest;\n}();\n\nmodule.exports = MpRequest;\n\n//# sourceURL=webpack://mprequest/./src/index.js?");

/***/ }),

/***/ "./src/interceptor-manager.js":
/*!************************************!*\
  !*** ./src/interceptor-manager.js ***!
  \************************************/
/***/ ((module) => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar InterceptorManager = /*#__PURE__*/function () {\n  function InterceptorManager() {\n    _classCallCheck(this, InterceptorManager);\n\n    _defineProperty(this, \"handlers\", []);\n  }\n\n  _createClass(InterceptorManager, [{\n    key: \"use\",\n    value: function use(fulfilledFn, rejectedFn) {\n      this.handlers.push({\n        fulfilledFn: fulfilledFn,\n        rejectedFn: rejectedFn\n      });\n    }\n  }, {\n    key: \"foreach\",\n    value: function foreach(fn) {\n      var handlers = this.handlers;\n\n      while (handlers.length) {\n        var _handlers$shift = handlers.shift(),\n            fulfilledFn = _handlers$shift.fulfilledFn,\n            rejectedFn = _handlers$shift.rejectedFn;\n\n        try {\n          fn(fulfilledFn, rejectedFn);\n        } catch (error) {\n          break;\n        }\n      }\n    }\n  }]);\n\n  return InterceptorManager;\n}(); // export default InterceptorManager;\n\n\nmodule.exports = InterceptorManager;\n\n//# sourceURL=webpack://mprequest/./src/interceptor-manager.js?");

/***/ }),

/***/ "./src/request.js":
/*!************************!*\
  !*** ./src/request.js ***!
  \************************/
/***/ ((module) => {

eval("// 小程序请求\nfunction request() {\n  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n  return new Promise(function (resolve, reject) {\n    wx.request({\n      url: url,\n      data: data,\n      header: options.header,\n      method: options.method,\n      dataType: options.dataType,\n      responseType: options.responseType,\n      success: function success(res) {\n        resolve(res);\n      },\n      fail: function fail(err) {\n        reject(err);\n      }\n    });\n  });\n} // export default request;\n\n\nmodule.exports = request;\n\n//# sourceURL=webpack://mprequest/./src/request.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
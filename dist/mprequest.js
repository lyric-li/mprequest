/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mprequest"] = factory();
	else
		root["mprequest"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/cancel-token.js":
/*!*****************************!*\
  !*** ./src/cancel-token.js ***!
  \*****************************/
/***/ ((module) => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar CancelToken = function CancelToken(executor) {\n  var _this = this;\n\n  _classCallCheck(this, CancelToken);\n\n  if (typeof executor !== \"function\") {\n    throw new TypeError(\"executor must be a function.\");\n  }\n\n  this.promise = new Promise(function (resolve) {\n    _this.resolvePromise = resolve;\n  });\n  executor(function () {\n    _this.resolvePromise();\n  });\n};\n\nmodule.exports = CancelToken;\n\n//# sourceURL=webpack://mprequest/./src/cancel-token.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Request = __webpack_require__(/*! ./request */ \"./src/request.js\");\n\nvar InterceptorManager = __webpack_require__(/*! ./interceptor-manager */ \"./src/interceptor-manager.js\");\n\nvar CancelToken = __webpack_require__(/*! ./cancel-token */ \"./src/cancel-token.js\");\n\nvar MpRequest = /*#__PURE__*/function () {\n  function MpRequest(options) {\n    _classCallCheck(this, MpRequest);\n\n    _defineProperty(this, \"req\", void 0);\n\n    _defineProperty(this, \"options\", {\n      baseUrl: \"\",\n      header: {\n        \"content-type\": \"application/json\"\n      },\n      method: \"GET\",\n      dataType: \"json\",\n      responseType: \"text\",\n      timeout: 60000\n    });\n\n    _defineProperty(this, \"interceptors\", {\n      request: new InterceptorManager(),\n      response: new InterceptorManager()\n    });\n\n    this.req = new Request();\n    this.options = Object.assign(this.options, options);\n  }\n\n  _createClass(MpRequest, [{\n    key: \"get\",\n    value: function get(url, data) {\n      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n      options = Object.assign(options, {\n        url: url,\n        data: data.params,\n        method: \"GET\"\n      });\n      return this.request(options);\n    }\n  }, {\n    key: \"post\",\n    value: function post(url, data) {\n      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n      options = Object.assign(options, {\n        url: url,\n        data: data,\n        method: \"POST\"\n      });\n      return this.request(options);\n    }\n  }, {\n    key: \"request\",\n    value: function request() {\n      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n      options = Object.assign(this.options, options);\n      this.interceptors.request.foreach(function (fulfilledFn, rejectedFn) {\n        try {\n          options = fulfilledFn(options);\n        } catch (error) {\n          rejectedFn(error);\n          throw error;\n        }\n      });\n      var _options = options,\n          url = _options.url;\n\n      if (!(url.indexOf(\"https\") === 0 || url.indexOf(\"http\") === 0)) {\n        options.url = \"\".concat(options.baseUrl).concat(url);\n      }\n\n      var promise = this.req.send(options);\n      this.interceptors.response.foreach(function (fulfilledFn, rejectedFn) {\n        promise = promise.then(fulfilledFn, rejectedFn);\n      });\n      return promise;\n    }\n  }]);\n\n  return MpRequest;\n}();\n\nmodule.exports = MpRequest;\nmodule.exports.CancelToken = CancelToken;\n\n//# sourceURL=webpack://mprequest/./src/index.js?");

/***/ }),

/***/ "./src/interceptor-manager.js":
/*!************************************!*\
  !*** ./src/interceptor-manager.js ***!
  \************************************/
/***/ ((module) => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar InterceptorManager = /*#__PURE__*/function () {\n  function InterceptorManager() {\n    _classCallCheck(this, InterceptorManager);\n\n    _defineProperty(this, \"handlers\", []);\n  }\n\n  _createClass(InterceptorManager, [{\n    key: \"use\",\n    value: function use(fulfilledFn, rejectedFn) {\n      this.handlers.push({\n        fulfilledFn: fulfilledFn,\n        rejectedFn: rejectedFn\n      });\n      return this.handlers.length - 1;\n    }\n  }, {\n    key: \"eject\",\n    value: function eject(id) {\n      if (this.handlers[id]) {\n        this.handlers[id] = null;\n      }\n    }\n  }, {\n    key: \"foreach\",\n    value: function foreach(fn) {\n      var handlers = this.handlers;\n\n      while (handlers.length) {\n        var _handlers$shift = handlers.shift(),\n            fulfilledFn = _handlers$shift.fulfilledFn,\n            rejectedFn = _handlers$shift.rejectedFn;\n\n        try {\n          fn(fulfilledFn, rejectedFn);\n        } catch (error) {\n          break;\n        }\n      }\n    }\n  }]);\n\n  return InterceptorManager;\n}();\n\nmodule.exports = InterceptorManager;\n\n//# sourceURL=webpack://mprequest/./src/interceptor-manager.js?");

/***/ }),

/***/ "./src/request.js":
/*!************************!*\
  !*** ./src/request.js ***!
  \************************/
/***/ ((module) => {

eval("function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Request = /*#__PURE__*/function () {\n  function Request() {\n    _classCallCheck(this, Request);\n  }\n\n  _createClass(Request, [{\n    key: \"send\",\n    value: function send(options) {\n      return new Promise(function (resolve, reject) {\n        var task = wx.request(_objectSpread(_objectSpread({}, options), {}, {\n          success: function success(res) {\n            resolve(res);\n          },\n          fail: function fail(err) {\n            reject(err);\n          }\n        }));\n        var cancelToken = options.cancelToken;\n\n        if (cancelToken) {\n          cancelToken.promise.then(function () {\n            task.abort();\n          });\n        }\n      });\n    }\n  }]);\n\n  return Request;\n}();\n\nmodule.exports = Request;\n\n//# sourceURL=webpack://mprequest/./src/request.js?");

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
/******/ 	return __webpack_exports__;
/******/ })()
;
});
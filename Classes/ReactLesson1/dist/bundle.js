/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".bundle.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Timer/Timer.component.scss":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Timer/Timer.component.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"h2 {\\n  color: grey;\\n  font-size: 20px; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/Timer/Timer.component.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/TodoContainer/AddTodo/index.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/TodoContainer/AddTodo/index.scss ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".addTodoList {\\n  width: 70px;\\n  padding: 0px;\\n  background-color: greenyellow;\\n  border-radius: 5px;\\n  transition: all 0.3s ease-in; }\\n  .addTodoList:active {\\n    background-color: rosybrown;\\n    transform: scale(0.95); }\\n\\n.add-todo {\\n  height: 30px;\\n  font-size: 16px;\\n  padding-left: 10px; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/TodoContainer/AddTodo/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/TodoContainer/TodoContainer.component.scss":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/TodoContainer/TodoContainer.component.scss ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".listOfThings {\\n  font-size: 26px;\\n  text-transform: capitalize;\\n  color: blueviolet;\\n  font-family: \\\"Roboto\\\"; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/TodoContainer/TodoContainer.component.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/UserID/UserID.component.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/UserID/UserID.component.scss ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".Comment {\\n  background-color: goldenrod;\\n  border-radius: 10px;\\n  text-align: center;\\n  font-size: 20px;\\n  padding: 20px;\\n  margin: 10px auto; }\\n  .Comment .UserInfo .UserInfo-name {\\n    font-size: 25px; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/UserID/UserID.component.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/sass/style.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/sass/style.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../fonts/Roboto-Regular.ttf */ \"./src/styles/fonts/Roboto-Regular.ttf\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\nexports.push([module.i, \"@font-face {\\n  font-family: \\\"Roboto\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"truetype\\\"); }\\n\\ndiv.main {\\n  background-color: green;\\n  padding: 20px; }\\n\\n.wrapper {\\n  padding-top: 30px;\\n  margin: 0 auto;\\n  width: 600px; }\\n\\nnav {\\n  position: relative; }\\n  nav .timer {\\n    background-color: yellow;\\n    border-radius: 5px;\\n    position: absolute;\\n    top: 0;\\n    right: 30px;\\n    padding: 10px;\\n    box-shadow: 5px 5px rgba(0, 0, 0, 0.2); }\\n\\n.done {\\n  text-decoration: line-through; }\\n\\n.click {\\n  background-color: yellow;\\n  border-radius: 5px;\\n  text-align: center;\\n  height: auto;\\n  padding: 10px; }\\n  .click .toggleButton {\\n    padding: 0px; }\\n\\n.deletebox {\\n  width: 300px;\\n  height: 300px;\\n  border: 1px solid red; }\\n\\n.second {\\n  height: auto;\\n  padding: 30px;\\n  text-align: center; }\\n\\n.course {\\n  border: 2px solid #757575;\\n  padding: 10px; }\\n\\nbutton {\\n  padding: 20px;\\n  height: 40px;\\n  width: 200px; }\\n\\n.courseSubmit {\\n  height: auto;\\n  display: flex;\\n  justify-content: space-between; }\\n  .courseSubmit input {\\n    width: 100%;\\n    border-radius: 5px; }\\n  .courseSubmit button {\\n    background-color: #eb9d0d;\\n    padding: 0px;\\n    text-transform: uppercase;\\n    font-weight: 600;\\n    border-radius: 5px; }\\n    .courseSubmit button:active {\\n      background-color: #fd6a6a; }\\n\\n.todo-list-item {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center; }\\n  .todo-list-item .delete {\\n    padding: 0px;\\n    border-radius: 50%;\\n    margin: 0px;\\n    width: 20px;\\n    height: 20px; }\\n    .todo-list-item .delete:active {\\n      background-color: red; }\\n\\n.loader {\\n  margin: 0 auto;\\n  text-align: center; }\\n\\n.lds-ripple {\\n  display: inline-block;\\n  position: relative;\\n  width: 80px;\\n  height: 80px; }\\n\\n.lds-ripple div {\\n  position: absolute;\\n  border: 4px solid #04347c;\\n  opacity: 1;\\n  border-radius: 50%;\\n  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite; }\\n\\n.lds-ripple div:nth-child(2) {\\n  animation-delay: -0.5s; }\\n\\n@keyframes lds-ripple {\\n  0% {\\n    top: 36px;\\n    left: 36px;\\n    width: 0;\\n    height: 0;\\n    opacity: 1; }\\n  100% {\\n    top: 0px;\\n    left: 0px;\\n    width: 72px;\\n    height: 72px;\\n    opacity: 0; } }\\n\\n.modalWind {\\n  padding: 20px;\\n  text-align: center; }\\n  .modalWind button {\\n    font-family: sans-serif;\\n    cursor: pointer;\\n    text-decoration: none;\\n    background-color: #0f5e7e;\\n    border: none;\\n    padding: 0px;\\n    font-size: 18px;\\n    color: white;\\n    width: 300px;\\n    border-radius: 10px;\\n    height: 50px;\\n    transition: background-color 250ms ease-in-out, transform 150ms ease; }\\n    .modalWind button:hover, .modalWind button:focus {\\n      background-color: #0053ba; }\\n    .modalWind button:active {\\n      transform: scale(0.99); }\\n    .modalWind button:focus {\\n      outline: none; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles/sass/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/App/App.component.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/App/App.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"* {\\n    font-family: Arial, sans-serif;\\n}\\n\\nh1 {\\n    text-align: center;\\n    color: royalblue;\\n}\\n\\nul {\\n    list-style: none;\\n    padding: 0;\\n    margin: 0;\\n    max-height: 450px;\\n    overflow: auto;\\n    border: 2px solid orange;\\n}\\n\\nli {\\n    padding: 10px;\\n    font-size: 16px;\\n    color: royalblue;\\n    border-bottom: 1px solid lightslategrey;\\n}\\n\\nli i {\\n    color: slategrey;\\n}\\n.appContainer {\\n    text-align: center;\\n}\\n.title {\\n    text-transform: uppercase;\\n    letter-spacing: 2px;\\n    font-size: 30px;\\n    color: grey;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/App/App.component.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Modal/Modal.component.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Modal/Modal.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".modal {\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    bottom: 0;\\r\\n    right: 0;\\r\\n    left: 0;\\r\\n    background-color: rgba(0, 0, 0, 0.5);\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    padding-top: 5rem;\\r\\n}\\r\\n.modal-body {\\r\\n    padding: 2rem;\\r\\n    width: 400px;\\r\\n    border-radius: 5px;\\r\\n    background-color: aliceblue;\\r\\n    height: 200px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/Modal/Modal.component.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/components/App/App.component.css":
/*!**********************************************!*\
  !*** ./src/components/App/App.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./App.component.css */ \"./node_modules/css-loader/dist/cjs.js!./src/components/App/App.component.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/components/App/App.component.css?");

/***/ }),

/***/ "./src/components/App/App.component.js":
/*!*********************************************!*\
  !*** ./src/components/App/App.component.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.component.css */ \"./src/components/App/App.component.css\");\n/* harmony import */ var _App_component_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_component_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header_Header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header/Header.component */ \"./src/components/Header/Header.component.js\");\n/* harmony import */ var _TodoContainer_TodoContainer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TodoContainer/TodoContainer.component */ \"./src/components/TodoContainer/TodoContainer.component.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\nvar App = /*#__PURE__*/function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  var _super = _createSuper(App);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"appContainer\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header_Header_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n        className: \"title\"\n      }, \"To do work place\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Link\"], {\n        to: \"/\"\n      }, \"Home\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Link\"], {\n        to: \"/deleted\"\n      }, \"Deleted\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Switch\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Route\"], {\n        exact: true,\n        path: \"/\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TodoContainer_TodoContainer_component__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        status: true\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Route\"], {\n        path: \"/deleted\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TodoContainer_TodoContainer_component__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        status: false\n      }))));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/components/App/App.component.js?");

/***/ }),

/***/ "./src/components/Course/Course.component.js":
/*!***************************************************!*\
  !*** ./src/components/Course/Course.component.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Todo_Todolist_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Todo/Todolist.component */ \"./src/components/Todo/Todolist.component.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context */ \"./src/context.js\");\n/* harmony import */ var _Loader_Loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Loader/Loader.component */ \"./src/components/Loader/Loader.component.js\");\n/* harmony import */ var _Modal_Modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Modal/Modal.component */ \"./src/components/Modal/Modal.component.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nvar AddTodo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {\n  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../Todo/AddTodo.component */ \"./src/components/Todo/AddTodo.component.js\"));\n});\n\nfunction Course() {\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      todos = _React$useState2[0],\n      setTodos = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true),\n      _React$useState4 = _slicedToArray(_React$useState3, 2),\n      loading = _React$useState4[0],\n      setLoading = _React$useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    fetch(\"https://jsonplaceholder.typicode.com/todos?_limit=5\").then(function (response) {\n      return response.json();\n    }).then(function (todos) {\n      setTimeout(function () {\n        setTodos(todos);\n        setLoading(false);\n      }, 2000);\n    });\n  }, []);\n\n  function toggleTodo(id) {\n    setTodos(todos.map(function (todo) {\n      if (todo.id == id) {\n        todo.completed = !todo.completed;\n      }\n\n      return todo;\n    }));\n    console.log(\"todo id\", id);\n  }\n\n  function RemoveTodo(id) {\n    setTodos(todos.filter(function (item) {\n      return item.id !== id;\n    }));\n  }\n\n  function Addtodo(title) {\n    setTodos(todos.concat([{\n      title: title,\n      id: Date.now(),\n      completed: false\n    }]));\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Provider, {\n    value: {\n      RemoveTodo: RemoveTodo\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"React tutorial\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Suspense, {\n    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Loading\")\n  }, \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AddTodo, {\n    onCreate: Addtodo\n  }), \" \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"modalWind\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal_Modal_component__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"loader\"\n  }, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loader_Loader_component__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)), todos.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Todo_Todolist_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    todos: todos,\n    onToggle: toggleTodo\n  }) : loading ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"There are no todos.\")));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Course);\n\n//# sourceURL=webpack:///./src/components/Course/Course.component.js?");

/***/ }),

/***/ "./src/components/Header/Header.component.js":
/*!***************************************************!*\
  !*** ./src/components/Header/Header.component.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction Header(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, props.title);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./src/components/Header/Header.component.js?");

/***/ }),

/***/ "./src/components/Loader/Loader.component.js":
/*!***************************************************!*\
  !*** ./src/components/Loader/Loader.component.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"lds-ripple\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null));\n});\n\n//# sourceURL=webpack:///./src/components/Loader/Loader.component.js?");

/***/ }),

/***/ "./src/components/Login/Login.component.js":
/*!*************************************************!*\
  !*** ./src/components/Login/Login.component.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar LoginControl = /*#__PURE__*/function (_React$Component) {\n  _inherits(LoginControl, _React$Component);\n\n  var _super = _createSuper(LoginControl);\n\n  function LoginControl(props) {\n    var _this;\n\n    _classCallCheck(this, LoginControl);\n\n    _this = _super.call(this, props);\n    _this.handleLoginClick = _this.handleLoginClick.bind(_assertThisInitialized(_this));\n    _this.handleLogoutClick = _this.handleLogoutClick.bind(_assertThisInitialized(_this));\n    _this.state = {\n      isLoggedIn: false\n    };\n    return _this;\n  }\n\n  _createClass(LoginControl, [{\n    key: \"handleLoginClick\",\n    value: function handleLoginClick() {\n      this.setState({\n        isLoggedIn: true\n      });\n    }\n  }, {\n    key: \"handleLogoutClick\",\n    value: function handleLogoutClick() {\n      this.setState({\n        isLoggedIn: false\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var isLoggedIn = this.state.isLoggedIn;\n      var button = isLoggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LogoutButton, {\n        onClick: this.handleLogoutClick\n      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoginButton, {\n        onClick: this.handleLoginClick\n      });\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Greeting, {\n        isLoggedIn: isLoggedIn\n      }), button);\n    }\n  }]);\n\n  return LoginControl;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nfunction UserGreeting() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Welcome back! \");\n}\n\nfunction GuestGreeting() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Please sign up.\");\n}\n\nfunction Greeting(props) {\n  var isLoggedIn = props.isLoggedIn;\n  return isLoggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserGreeting, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GuestGreeting, null);\n}\n\nfunction LoginButton(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: props.onClick\n  }, \"Login\");\n}\n\nfunction LogoutButton(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: props.onClick\n  }, \"Logout\");\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginControl);\n\n//# sourceURL=webpack:///./src/components/Login/Login.component.js?");

/***/ }),

/***/ "./src/components/Modal/Modal.component.css":
/*!**************************************************!*\
  !*** ./src/components/Modal/Modal.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./Modal.component.css */ \"./node_modules/css-loader/dist/cjs.js!./src/components/Modal/Modal.component.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/components/Modal/Modal.component.css?");

/***/ }),

/***/ "./src/components/Modal/Modal.component.js":
/*!*************************************************!*\
  !*** ./src/components/Modal/Modal.component.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Modal; });\n/* harmony import */ var _Modal_component_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal.component.css */ \"./src/components/Modal/Modal.component.css\");\n/* harmony import */ var _Modal_component_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Modal_component_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\nvar Modal = /*#__PURE__*/function (_React$Component) {\n  _inherits(Modal, _React$Component);\n\n  var _super = _createSuper(Modal);\n\n  function Modal(props) {\n    var _this;\n\n    _classCallCheck(this, Modal);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      isOpen: false\n    };\n    return _this;\n  }\n\n  _createClass(Modal, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n        onClick: function onClick() {\n          _this2.setState({\n            isOpen: true\n          });\n        }\n      }, \"Open Modal\"), this.state.isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n        className: \"modal\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n        className: \"modal-body\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"h1\", null, \"Modal Title\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"p\", null, \"I am Modal\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n        onClick: function onClick() {\n          _this2.setState({\n            isOpen: false\n          });\n        }\n      }, \"Close modal\"))));\n    }\n  }]);\n\n  return Modal;\n}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);\n\n\n\n//# sourceURL=webpack:///./src/components/Modal/Modal.component.js?");

/***/ }),

/***/ "./src/components/Timer/Timer.component.js":
/*!*************************************************!*\
  !*** ./src/components/Timer/Timer.component.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Timer_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Timer.component.scss */ \"./src/components/Timer/Timer.component.scss\");\n/* harmony import */ var _Timer_component_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Timer_component_scss__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\nvar Timer = /*#__PURE__*/function (_React$Component) {\n  _inherits(Timer, _React$Component);\n\n  var _super = _createSuper(Timer);\n\n  function Timer(props) {\n    var _this;\n\n    _classCallCheck(this, Timer);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      date: new Date()\n    };\n    return _this;\n  }\n\n  _createClass(Timer, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      this.timerID = setInterval(function () {\n        return _this2.tick();\n      }, 1000);\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      clearInterval(this.timerID);\n    }\n  }, {\n    key: \"tick\",\n    value: function tick() {\n      this.setState({\n        date: new Date()\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Timer\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Now is:\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", null, \" \", this.state.date.toLocaleTimeString()), \".\"));\n    }\n  }]);\n\n  return Timer;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timer);\n\n//# sourceURL=webpack:///./src/components/Timer/Timer.component.js?");

/***/ }),

/***/ "./src/components/Timer/Timer.component.scss":
/*!***************************************************!*\
  !*** ./src/components/Timer/Timer.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./Timer.component.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Timer/Timer.component.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/components/Timer/Timer.component.scss?");

/***/ }),

/***/ "./src/components/Todo/TodoItem.component.js":
/*!***************************************************!*\
  !*** ./src/components/Todo/TodoItem.component.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context */ \"./src/context.js\");\n\n\n\nvar styles = {\n  li: {\n    display: \"flex\",\n    justifyContent: \"space-between\",\n    borderRadius: \"4px\",\n    border: \"1px solid grey\"\n  },\n  button: {\n    padding: \"0px\",\n    width: \"40px\",\n    height: \"40px\",\n    borderRadius: \"50%\"\n  },\n  input: {\n    marginRight: \"10px\"\n  }\n};\n\nfunction TodoItem(_ref) {\n  var todo = _ref.todo,\n      index = _ref.index,\n      _onChange = _ref.onChange;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_context__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n      RemoveTodo = _useContext.RemoveTodo;\n\n  var classes = [];\n\n  if (todo.completed == true) {\n    classes.push(\"done\");\n  }\n\n  console.log(todo);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    style: styles.li\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: classes.join(\" \")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    style: styles.input,\n    type: \"checkbox\",\n    checked: todo.completed,\n    onChange: function onChange() {\n      return _onChange(todo.id);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, index + 1), \"\\xA0\", todo.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    style: styles.button,\n    onClick: RemoveTodo.bind(null, todo.id)\n  }, \"\\xD7\"));\n} ///=============== one of options to delete\n// onClick={()=>RemoveTodo(todo.id)}\n\n\nTodoItem.propTypes = {\n  todo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,\n  index: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,\n  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoItem);\n\n//# sourceURL=webpack:///./src/components/Todo/TodoItem.component.js?");

/***/ }),

/***/ "./src/components/Todo/Todolist.component.js":
/*!***************************************************!*\
  !*** ./src/components/Todo/Todolist.component.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TodoItem_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoItem.component */ \"./src/components/Todo/TodoItem.component.js\");\n\n\n\nvar styles = {\n  ul: {\n    listStyle: \"none\",\n    color: \"red\",\n    border: \"none\"\n  }\n};\nTodoList.propTypes = {\n  todos: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,\n  onToggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n};\n\nfunction TodoList(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    style: styles.ul\n  }, props.todos.map(function (todo, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TodoItem_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      key: todo.id,\n      todo: todo,\n      index: index,\n      onChange: props.onToggle\n    });\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\n\n//# sourceURL=webpack:///./src/components/Todo/Todolist.component.js?");

/***/ }),

/***/ "./src/components/TodoContainer/AddTodo/index.js":
/*!*******************************************************!*\
  !*** ./src/components/TodoContainer/AddTodo/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ \"./src/components/TodoContainer/AddTodo/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n/* eslint-disable react/prop-types */\n\nvar AddTodo = /*#__PURE__*/function (_React$Component) {\n  _inherits(AddTodo, _React$Component);\n\n  var _super = _createSuper(AddTodo);\n\n  function AddTodo(props) {\n    var _this;\n\n    _classCallCheck(this, AddTodo);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      todo: \"\"\n    };\n    return _this;\n  }\n\n  _createClass(AddTodo, [{\n    key: \"onInputChange\",\n    value: function onInputChange(e) {\n      this.setState({\n        todo: e.target.value\n      });\n    }\n  }, {\n    key: \"onAddTodoBtnClick\",\n    value: function onAddTodoBtnClick(e) {\n      if (e.key && e.key === \"Enter\" || !e.key) {\n        if (this.state.todo.length > 1) {\n          this.props.onBtnClick(this.state.todo);\n          this.setState({\n            todo: \"\"\n          });\n          console.log(\"on button click\");\n        }\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var props = this.props,\n          state = this.state;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"todo-list-block\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        className: \"add-todo\",\n        onChange: this.onInputChange.bind(this),\n        value: state.todo,\n        onKeyPress: this.onAddTodoBtnClick.bind(this)\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        className: \"addTodoList\",\n        onClick: this.onAddTodoBtnClick.bind(this)\n      }, \"OK\"));\n    }\n  }]);\n\n  return AddTodo;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddTodo);\n\n//# sourceURL=webpack:///./src/components/TodoContainer/AddTodo/index.js?");

/***/ }),

/***/ "./src/components/TodoContainer/AddTodo/index.scss":
/*!*********************************************************!*\
  !*** ./src/components/TodoContainer/AddTodo/index.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/TodoContainer/AddTodo/index.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/components/TodoContainer/AddTodo/index.scss?");

/***/ }),

/***/ "./src/components/TodoContainer/ToDoItem/ToDoItem.component.js":
/*!*********************************************************************!*\
  !*** ./src/components/TodoContainer/ToDoItem/ToDoItem.component.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\n\n\nfunction ToDoItem(props) {\n  console.log(props.status);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: \"todo-list-item\",\n    key: props.id\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    to: \"/todo/\"\n  }, \" \", props.item.text), props.status ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      return props.DeleteItem(props.id);\n    },\n    className: \"delete\"\n  }, \"\\xD7\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      return props.ReturnItem(props.id);\n    },\n    className: \"delete\"\n  }, \"R\"), \" \");\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToDoItem);\n\n//# sourceURL=webpack:///./src/components/TodoContainer/ToDoItem/ToDoItem.component.js?");

/***/ }),

/***/ "./src/components/TodoContainer/ToDoList/index.js":
/*!********************************************************!*\
  !*** ./src/components/TodoContainer/ToDoList/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ToDoItem_ToDoItem_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ToDoItem/ToDoItem.component */ \"./src/components/TodoContainer/ToDoItem/ToDoItem.component.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n/* eslint-disable react/prop-types */\n\nvar ToDoList = /*#__PURE__*/function (_React$Component) {\n  _inherits(ToDoList, _React$Component);\n\n  var _super = _createSuper(ToDoList);\n\n  function ToDoList(props) {\n    _classCallCheck(this, ToDoList);\n\n    return _super.call(this, props);\n  }\n\n  _createClass(ToDoList, [{\n    key: \"DeleteItem\",\n    value: function DeleteItem(id) {\n      this.props.onBtnDelete(id);\n    }\n  }, {\n    key: \"ReturnItem\",\n    value: function ReturnItem(id) {\n      console.log(\"Delete item\", id);\n      this.props.onBtnReturn(id);\n    }\n  }, {\n    key: \"renderList\",\n    value: function renderList() {\n      var _this = this;\n\n      var data = this.props.data;\n\n      if (data) {\n        return data.map(function (item, i) {\n          if (item.status == 'not-buy' & _this.props.status) {\n            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ToDoItem_ToDoItem_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n              key: i,\n              id: item.id,\n              item: item,\n              DeleteItem: _this.DeleteItem.bind(_this),\n              status: _this.props.status\n            });\n          } else if (item.status == 'buy' & !_this.props.status) {\n            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ToDoItem_ToDoItem_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n              key: i,\n              id: item.id,\n              item: item,\n              ReturnItem: _this.ReturnItem.bind(_this),\n              status: _this.props.status\n            });\n          }\n\n          ;\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n        className: \"todo-list\"\n      }, this.renderList());\n    }\n  }]);\n\n  return ToDoList;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToDoList);\n\n//# sourceURL=webpack:///./src/components/TodoContainer/ToDoList/index.js?");

/***/ }),

/***/ "./src/components/TodoContainer/TodoContainer.component.js":
/*!*****************************************************************!*\
  !*** ./src/components/TodoContainer/TodoContainer.component.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _TodoContainer_TodoContainer_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TodoContainer/TodoContainer.component.scss */ \"./src/components/TodoContainer/TodoContainer.component.scss\");\n/* harmony import */ var _TodoContainer_TodoContainer_component_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_TodoContainer_TodoContainer_component_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AddTodo_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddTodo/index */ \"./src/components/TodoContainer/AddTodo/index.js\");\n/* harmony import */ var _ToDoList_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ToDoList/index */ \"./src/components/TodoContainer/ToDoList/index.js\");\n/* harmony import */ var _data_MOCK_DATA_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/MOCK_DATA.json */ \"./src/data/MOCK_DATA.json\");\nvar _data_MOCK_DATA_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/MOCK_DATA.json */ \"./src/data/MOCK_DATA.json\", 1);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n //  let data=[];\n\nvar TodoContainer = /*#__PURE__*/function (_React$Component) {\n  _inherits(TodoContainer, _React$Component);\n\n  var _super = _createSuper(TodoContainer);\n\n  function TodoContainer(props) {\n    var _this;\n\n    _classCallCheck(this, TodoContainer);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      data: _data_MOCK_DATA_json__WEBPACK_IMPORTED_MODULE_4__\n    };\n    return _this;\n  }\n\n  _createClass(TodoContainer, [{\n    key: \"onBtnClick\",\n    value: function onBtnClick(text) {\n      var data = this.state.data;\n      data.unshift({\n        id: Date.now(),\n        text: text,\n        status: \"not-buy\"\n      });\n      this.setState({\n        data: data\n      });\n    }\n  }, {\n    key: \"onBtnReturn\",\n    value: function onBtnReturn(id) {\n      console.log(\"Container\", id);\n      var data = this.state.data;\n      data = data.filter(function (item) {\n        if (item.id == id) {\n          item.status = 'not-buy';\n          return item;\n        } else return item;\n      });\n      console.log(data);\n      this.setState({\n        data: data\n      });\n    }\n  }, {\n    key: \"onBtnDelete\",\n    value: function onBtnDelete(id) {\n      console.log(\"Container\", id);\n      var data = this.state.data;\n      console.log(data);\n      data = data.filter(function (item) {\n        if (item.id == id) {\n          item.status = 'buy';\n          return item;\n        } else return item;\n      });\n      console.log(data);\n      this.setState({\n        data: data\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"container\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddTodo_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        onBtnClick: this.onBtnClick.bind(this)\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n        className: \"listOfThings\"\n      }, \"List of things to do\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ToDoList_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        data: this.state.data,\n        onBtnDelete: this.onBtnDelete.bind(this),\n        status: this.props.status,\n        onBtnReturn: this.onBtnReturn.bind(this)\n      }));\n    }\n  }]);\n\n  return TodoContainer;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoContainer);\n\n//# sourceURL=webpack:///./src/components/TodoContainer/TodoContainer.component.js?");

/***/ }),

/***/ "./src/components/TodoContainer/TodoContainer.component.scss":
/*!*******************************************************************!*\
  !*** ./src/components/TodoContainer/TodoContainer.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./TodoContainer.component.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/TodoContainer/TodoContainer.component.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/components/TodoContainer/TodoContainer.component.scss?");

/***/ }),

/***/ "./src/components/UserID/UserID.component.js":
/*!***************************************************!*\
  !*** ./src/components/UserID/UserID.component.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _UserID_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserID.component.scss */ \"./src/components/UserID/UserID.component.scss\");\n/* harmony import */ var _UserID_component_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_UserID_component_scss__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\nfunction formatDate(date) {\n  return date.toLocaleDateString();\n} //   UserID.propTypes = {\n//     author,text,date: PropTypes.string.isRequired,\n//   };\n\n/* eslint-disable react/prop-types */\n\n\nvar UserID = /*#__PURE__*/function (_React$Component) {\n  _inherits(UserID, _React$Component);\n\n  var _super = _createSuper(UserID);\n\n  function UserID(props) {\n    var _this;\n\n    _classCallCheck(this, UserID);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      isToggleOn: true\n    }; // Ця прив'язка необхідна, щоб `this` працював у функції зворотнього виклику\n\n    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(UserID, [{\n    key: \"handleClick\",\n    value: function handleClick() {\n      this.setState(function (state) {\n        return {\n          isToggleOn: !state.isToggleOn\n        };\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"Comment\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"UserInfo\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        className: \"Avatar\",\n        src: this.props.author.avatarUrl,\n        alt: this.props.author.name\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"UserInfo-name\"\n      }, this.props.author.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"Comment-text\"\n      }, this.props.text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"Comment-date\"\n      }, formatDate(this.props.date)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        className: \"toggleButton\",\n        onClick: this.handleClick\n      }, this.state.isToggleOn ? \" Toggle ON\" : \"OFF\"));\n    }\n  }]);\n\n  return UserID;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserID);\n\n//# sourceURL=webpack:///./src/components/UserID/UserID.component.js?");

/***/ }),

/***/ "./src/components/UserID/UserID.component.scss":
/*!*****************************************************!*\
  !*** ./src/components/UserID/UserID.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./UserID.component.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/UserID/UserID.component.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/components/UserID/UserID.component.scss?");

/***/ }),

/***/ "./src/context.js":
/*!************************!*\
  !*** ./src/context.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Context = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();\n/* harmony default export */ __webpack_exports__[\"default\"] = (Context);\n\n//# sourceURL=webpack:///./src/context.js?");

/***/ }),

/***/ "./src/data/MOCK_DATA.json":
/*!*********************************!*\
  !*** ./src/data/MOCK_DATA.json ***!
  \*********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"id\\\":1,\\\"text\\\":\\\"ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla\\\",\\\"status\\\":\\\"buy\\\",\\\"gender\\\":\\\"Male\\\",\\\"ip_address\\\":\\\"221.200.133.17\\\"},{\\\"id\\\":2,\\\"text\\\":\\\"in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient\\\",\\\"status\\\":\\\"buy\\\",\\\"gender\\\":\\\"Female\\\",\\\"ip_address\\\":\\\"206.136.57.248\\\"},{\\\"id\\\":3,\\\"text\\\":\\\"nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus\\\",\\\"status\\\":\\\"buy\\\",\\\"gender\\\":\\\"Female\\\",\\\"ip_address\\\":\\\"106.77.150.124\\\"},{\\\"id\\\":4,\\\"text\\\":\\\"tempus semper est quam pharetra magna ac consequat metus sapien ut\\\",\\\"status\\\":\\\"not-buy\\\",\\\"gender\\\":\\\"Male\\\",\\\"ip_address\\\":\\\"127.13.73.202\\\"},{\\\"id\\\":5,\\\"text\\\":\\\"feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst\\\",\\\"status\\\":\\\"delete\\\",\\\"gender\\\":\\\"Male\\\",\\\"ip_address\\\":\\\"136.184.19.135\\\"},{\\\"id\\\":6,\\\"text\\\":\\\"nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed\\\",\\\"status\\\":\\\"delete\\\",\\\"gender\\\":\\\"Male\\\",\\\"ip_address\\\":\\\"127.247.155.129\\\"},{\\\"id\\\":7,\\\"text\\\":\\\"suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla\\\",\\\"status\\\":\\\"delete\\\",\\\"gender\\\":\\\"Male\\\",\\\"ip_address\\\":\\\"150.218.95.137\\\"},{\\\"id\\\":8,\\\"text\\\":\\\"proin eu mi nulla ac enim in tempor turpis nec\\\",\\\"status\\\":\\\"not-buy\\\",\\\"gender\\\":\\\"Male\\\",\\\"ip_address\\\":\\\"143.198.50.90\\\"},{\\\"id\\\":9,\\\"text\\\":\\\"non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices\\\",\\\"status\\\":\\\"not-buy\\\",\\\"gender\\\":\\\"Male\\\",\\\"ip_address\\\":\\\"137.59.189.236\\\"},{\\\"id\\\":10,\\\"text\\\":\\\"eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi\\\",\\\"status\\\":\\\"delete\\\",\\\"gender\\\":\\\"Female\\\",\\\"ip_address\\\":\\\"66.113.225.240\\\"}]\");\n\n//# sourceURL=webpack:///./src/data/MOCK_DATA.json?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_App_App_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App/App.component */ \"./src/components/App/App.component.js\");\n/* harmony import */ var _styles_sass_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/sass/style.scss */ \"./src/styles/sass/style.scss\");\n/* harmony import */ var _styles_sass_style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_sass_style_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Timer_Timer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Timer/Timer.component */ \"./src/components/Timer/Timer.component.js\");\n/* harmony import */ var _components_UserID_UserID_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/UserID/UserID.component */ \"./src/components/UserID/UserID.component.js\");\n/* harmony import */ var _components_Course_Course_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Course/Course.component */ \"./src/components/Course/Course.component.js\");\n/* harmony import */ var _components_Login_Login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Login/Login.component */ \"./src/components/Login/Login.component.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\n\n\n\n\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Course_Course_component__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null), document.querySelector(\"#course\"));\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__[\"BrowserRouter\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App_App_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)), document.querySelector(\"#app\"));\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Timer_Timer_component__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), document.getElementById(\"root\"));\nvar comment = {\n  date: new Date(),\n  text: \"Some text\",\n  author: {\n    name: \"Convert end use DATA from Fetch\",\n    avatarUrl: \"https://placekitten.com/g/64/64\"\n  }\n};\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UserID_UserID_component__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n  date: comment.date,\n  text: comment.text,\n  author: comment.author\n}), document.getElementById(\"userID\"));\n/* eslint-disable react/prop-types */\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Login_Login_component__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null), document.getElementById(\"second\"));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/styles/fonts/Roboto-Regular.ttf":
/*!*********************************************!*\
  !*** ./src/styles/fonts/Roboto-Regular.ttf ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"03523cf578d69fa923226ff457b92d90.ttf\");\n\n//# sourceURL=webpack:///./src/styles/fonts/Roboto-Regular.ttf?");

/***/ }),

/***/ "./src/styles/sass/style.scss":
/*!************************************!*\
  !*** ./src/styles/sass/style.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/sass/style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/styles/sass/style.scss?");

/***/ })

/******/ });
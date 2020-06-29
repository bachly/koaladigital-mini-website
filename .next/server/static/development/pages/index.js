module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/workpiece.js":
/*!*********************************!*\
  !*** ./components/workpiece.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/Bly/bachly/koaladigital.com.au/components/workpiece.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction WorkPiece({\n  title,\n  description\n}) {\n  return __jsx(\"div\", {\n    className: \"w-full md:w-1/2 lg:w-1/3 mb-12 lg:pr-12\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 3,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"md:mr-3\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"relative pb-2/3 bg-gray-200 rounded\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 9\n    }\n  }), __jsx(\"h3\", {\n    className: \"text-2xl lg:text-3xl mt-4 mb-2 font-bold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  }, title), __jsx(\"p\", {\n    className: \"text-xl lg:text-2xl text-gray-900 leading-snug\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  }, description)));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WorkPiece);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3dvcmtwaWVjZS5qcz85NjM2Il0sIm5hbWVzIjpbIldvcmtQaWVjZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxTQUFTQSxTQUFULENBQW1CO0FBQUVDLE9BQUY7QUFBU0M7QUFBVCxDQUFuQixFQUEyQztBQUN6QyxTQUNFO0FBQUssYUFBUyxFQUFDLHlDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxxQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFJLGFBQVMsRUFBQywwQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTBERCxLQUExRCxDQUZGLEVBR0U7QUFBRyxhQUFTLEVBQUMsZ0RBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQyxXQURILENBSEYsQ0FERixDQURGO0FBV0Q7O0FBRWNGLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy93b3JrcGllY2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBXb3JrUGllY2UoeyB0aXRsZSwgZGVzY3JpcHRpb24gfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctMS8yIGxnOnctMS8zIG1iLTEyIGxnOnByLTEyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOm1yLTNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBwYi0yLzMgYmctZ3JheS0yMDAgcm91bmRlZFwiPjwvZGl2PlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgbGc6dGV4dC0zeGwgbXQtNCBtYi0yIGZvbnQtYm9sZFwiPnt0aXRsZX08L2gzPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIGxnOnRleHQtMnhsIHRleHQtZ3JheS05MDAgbGVhZGluZy1zbnVnXCI+XG4gICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgV29ya1BpZWNlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/workpiece.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_workpiece__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/workpiece */ \"./components/workpiece.js\");\nvar _jsxFileName = \"/Users/Bly/bachly/koaladigital.com.au/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\nconst sampleworks = [{\n  title: `ResMed`,\n  description: `ResMed is an ASX-listed, NASDAG-listed health company who\n        provides sleep-boosting products • We helped ResMed to refresh\n        online Clinician Portal • The new digital experience has helped\n        worldwide clinicians to better provide support to their patients`\n}, {\n  title: `CommSec`,\n  description: `CommSec is an ASX-listed online trading platform owned by the\n      Commonwealth Bank of Australia • We helped CommSec to develop\n      their new digital Onboarding Flow for new customers • The new\n      experience improved conversion rate by 40%`\n}, {\n  title: `Pepper Money`,\n  description: `Pepper Money is an Australia non-bank lender with a\n      down-to-earth approach • We helped Pepper to refresh their\n      website and online customer portal • The new digital experience\n      has helped Pepper gain more customers and provide better support\n      to existing customers`\n}, {\n  title: `Rowmark Australia`,\n  description: `Rowmark Australia is the Australia official distributor of the\n      world-renowned Rowmark laser engraving materials • We helped\n      Rowmark Australia to develop their ecommerce store and landing\n      pages to increase online sales and engage new markets`\n}, {\n  title: `Australia-iconic Online retailers and Education providers`,\n  description: `We have worked with iconic Australia retailers such as Paddy\n      Pallin, Bing Lee, Constume Box, Princess Polly improve their\n      existing online store • We also helped UTS, UNSW and ANMFSA to\n      improve their Online Learning and Survey system`\n}];\n\nfunction HomePage() {\n  return __jsx(\"div\", {\n    className: \"bg-white pt-12 text-gray-900\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 5\n    }\n  }, __jsx(\"header\", {\n    className: \"mt-6 lg:mt-64 bg-white px-3 lg:px-12\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"max-w-lg lg:max-w-full\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: \"text-3xl lg:text-6xl font-black leading-tight\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 11\n    }\n  }, \"KoalaDigital is a Web, Shopify and Designer service in the\", __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }\n  }, \"Ryde areas of Sydney Australia\")), __jsx(\"p\", {\n    className: \"mt-6 text-2xl lg:text-4xl leading-snug\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 11\n    }\n  }, \"We are a small team of web developer and designer \\u2022 We work with business of any size to improve their Websites, Shopify stores or Online Portals \\u2022 Our products do one thing well \\u2014\", __jsx(\"span\", {\n    className: \"font-bold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }\n  }, \"delight your customers\")))), __jsx(\"section\", {\n    className: \"mt-24 px-3 lg:mt-48 lg:px-12\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"mx-auto lg:max-w-full\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    className: \"text-3xl lg:text-5xl font-bold leading-tight\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 11\n    }\n  }, \"Sample work\"), __jsx(\"div\", {\n    className: \"flex flex-wrap mt-12 lg:mt-24\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 11\n    }\n  }, sampleworks.map((workpiece, index) => __jsx(_components_workpiece__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _extends({\n    key: index\n  }, workpiece, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 15\n    }\n  })))))), __jsx(\"section\", {\n    className: \"mt-24 lg:mt-48 px-3 lg:px-12 py-12 lg:py-24 bg-black text-gray-400\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"max-w-lg mx-auto lg:max-w-full\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    className: \"text-xl lg:text-5xl font-bold leading-tight\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 11\n    }\n  }, \"Whether you want to try a new idea, refresh an existing website, or simply need a webmaster who can look after your digital presence, feel free to drop us an email. First consultation is on us.\", ` `, __jsx(\"a\", {\n    className: \"text-gray-700\",\n    href: \"mailto:bach@koaladigital.com.au\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 13\n    }\n  }, \"Email us\")))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbInNhbXBsZXdvcmtzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwibWFwIiwid29ya3BpZWNlIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1BLFdBQVcsR0FBRyxDQUNsQjtBQUNFQyxPQUFLLEVBQUcsUUFEVjtBQUVFQyxhQUFXLEVBQUc7Ozs7QUFGaEIsQ0FEa0IsRUFRbEI7QUFDRUQsT0FBSyxFQUFHLFNBRFY7QUFFRUMsYUFBVyxFQUFHOzs7O0FBRmhCLENBUmtCLEVBZWxCO0FBQ0VELE9BQUssRUFBRyxjQURWO0FBRUVDLGFBQVcsRUFBRzs7Ozs7QUFGaEIsQ0Fma0IsRUF1QmxCO0FBQ0VELE9BQUssRUFBRyxtQkFEVjtBQUVFQyxhQUFXLEVBQUc7Ozs7QUFGaEIsQ0F2QmtCLEVBOEJsQjtBQUNFRCxPQUFLLEVBQUcsMkRBRFY7QUFFRUMsYUFBVyxFQUFHOzs7O0FBRmhCLENBOUJrQixDQUFwQjs7QUFzQ0EsU0FBU0MsUUFBVCxHQUFvQjtBQUNsQixTQUNFO0FBQUssYUFBUyxFQUFDLDhCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLGFBQVMsRUFBQyxzQ0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQywrQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1FQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBRkYsQ0FERixFQUtFO0FBQUcsYUFBUyxFQUFDLHdDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNE1BSUU7QUFBTSxhQUFTLEVBQUMsV0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFKRixDQUxGLENBREYsQ0FERixFQWdCRTtBQUFTLGFBQVMsRUFBQyw4QkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyw4Q0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBSUU7QUFBSyxhQUFTLEVBQUMsK0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSCxXQUFXLENBQUNJLEdBQVosQ0FBZ0IsQ0FBQ0MsU0FBRCxFQUFZQyxLQUFaLEtBQ2YsTUFBQyw2REFBRDtBQUFXLE9BQUcsRUFBRUE7QUFBaEIsS0FBMkJELFNBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERCxDQURILENBSkYsQ0FERixDQWhCRixFQTZCRTtBQUFTLGFBQVMsRUFBQyxvRUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGdDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyw2Q0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBNQUcrRCxHQUgvRCxFQUlFO0FBQUcsYUFBUyxFQUFDLGVBQWI7QUFBNkIsUUFBSSxFQUFDLGlDQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGLENBREYsQ0FERixDQTdCRixDQURGO0FBNENEOztBQUVjRix1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdvcmtQaWVjZSBmcm9tIFwiLi4vY29tcG9uZW50cy93b3JrcGllY2VcIjtcblxuY29uc3Qgc2FtcGxld29ya3MgPSBbXG4gIHtcbiAgICB0aXRsZTogYFJlc01lZGAsXG4gICAgZGVzY3JpcHRpb246IGBSZXNNZWQgaXMgYW4gQVNYLWxpc3RlZCwgTkFTREFHLWxpc3RlZCBoZWFsdGggY29tcGFueSB3aG9cbiAgICAgICAgcHJvdmlkZXMgc2xlZXAtYm9vc3RpbmcgcHJvZHVjdHMg4oCiIFdlIGhlbHBlZCBSZXNNZWQgdG8gcmVmcmVzaFxuICAgICAgICBvbmxpbmUgQ2xpbmljaWFuIFBvcnRhbCDigKIgVGhlIG5ldyBkaWdpdGFsIGV4cGVyaWVuY2UgaGFzIGhlbHBlZFxuICAgICAgICB3b3JsZHdpZGUgY2xpbmljaWFucyB0byBiZXR0ZXIgcHJvdmlkZSBzdXBwb3J0IHRvIHRoZWlyIHBhdGllbnRzYCxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBgQ29tbVNlY2AsXG4gICAgZGVzY3JpcHRpb246IGBDb21tU2VjIGlzIGFuIEFTWC1saXN0ZWQgb25saW5lIHRyYWRpbmcgcGxhdGZvcm0gb3duZWQgYnkgdGhlXG4gICAgICBDb21tb253ZWFsdGggQmFuayBvZiBBdXN0cmFsaWEg4oCiIFdlIGhlbHBlZCBDb21tU2VjIHRvIGRldmVsb3BcbiAgICAgIHRoZWlyIG5ldyBkaWdpdGFsIE9uYm9hcmRpbmcgRmxvdyBmb3IgbmV3IGN1c3RvbWVycyDigKIgVGhlIG5ld1xuICAgICAgZXhwZXJpZW5jZSBpbXByb3ZlZCBjb252ZXJzaW9uIHJhdGUgYnkgNDAlYCxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBgUGVwcGVyIE1vbmV5YCxcbiAgICBkZXNjcmlwdGlvbjogYFBlcHBlciBNb25leSBpcyBhbiBBdXN0cmFsaWEgbm9uLWJhbmsgbGVuZGVyIHdpdGggYVxuICAgICAgZG93bi10by1lYXJ0aCBhcHByb2FjaCDigKIgV2UgaGVscGVkIFBlcHBlciB0byByZWZyZXNoIHRoZWlyXG4gICAgICB3ZWJzaXRlIGFuZCBvbmxpbmUgY3VzdG9tZXIgcG9ydGFsIOKAoiBUaGUgbmV3IGRpZ2l0YWwgZXhwZXJpZW5jZVxuICAgICAgaGFzIGhlbHBlZCBQZXBwZXIgZ2FpbiBtb3JlIGN1c3RvbWVycyBhbmQgcHJvdmlkZSBiZXR0ZXIgc3VwcG9ydFxuICAgICAgdG8gZXhpc3RpbmcgY3VzdG9tZXJzYCxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBgUm93bWFyayBBdXN0cmFsaWFgLFxuICAgIGRlc2NyaXB0aW9uOiBgUm93bWFyayBBdXN0cmFsaWEgaXMgdGhlIEF1c3RyYWxpYSBvZmZpY2lhbCBkaXN0cmlidXRvciBvZiB0aGVcbiAgICAgIHdvcmxkLXJlbm93bmVkIFJvd21hcmsgbGFzZXIgZW5ncmF2aW5nIG1hdGVyaWFscyDigKIgV2UgaGVscGVkXG4gICAgICBSb3dtYXJrIEF1c3RyYWxpYSB0byBkZXZlbG9wIHRoZWlyIGVjb21tZXJjZSBzdG9yZSBhbmQgbGFuZGluZ1xuICAgICAgcGFnZXMgdG8gaW5jcmVhc2Ugb25saW5lIHNhbGVzIGFuZCBlbmdhZ2UgbmV3IG1hcmtldHNgLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IGBBdXN0cmFsaWEtaWNvbmljIE9ubGluZSByZXRhaWxlcnMgYW5kIEVkdWNhdGlvbiBwcm92aWRlcnNgLFxuICAgIGRlc2NyaXB0aW9uOiBgV2UgaGF2ZSB3b3JrZWQgd2l0aCBpY29uaWMgQXVzdHJhbGlhIHJldGFpbGVycyBzdWNoIGFzIFBhZGR5XG4gICAgICBQYWxsaW4sIEJpbmcgTGVlLCBDb25zdHVtZSBCb3gsIFByaW5jZXNzIFBvbGx5IGltcHJvdmUgdGhlaXJcbiAgICAgIGV4aXN0aW5nIG9ubGluZSBzdG9yZSDigKIgV2UgYWxzbyBoZWxwZWQgVVRTLCBVTlNXIGFuZCBBTk1GU0EgdG9cbiAgICAgIGltcHJvdmUgdGhlaXIgT25saW5lIExlYXJuaW5nIGFuZCBTdXJ2ZXkgc3lzdGVtYCxcbiAgfSxcbl07XG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHB0LTEyIHRleHQtZ3JheS05MDBcIj5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwibXQtNiBsZzptdC02NCBiZy13aGl0ZSBweC0zIGxnOnB4LTEyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctbGcgbGc6bWF4LXctZnVsbFwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBsZzp0ZXh0LTZ4bCBmb250LWJsYWNrIGxlYWRpbmctdGlnaHRcIj5cbiAgICAgICAgICAgIEtvYWxhRGlnaXRhbCBpcyBhIFdlYiwgU2hvcGlmeSBhbmQgRGVzaWduZXIgc2VydmljZSBpbiB0aGVcbiAgICAgICAgICAgIDxzcGFuPlJ5ZGUgYXJlYXMgb2YgU3lkbmV5IEF1c3RyYWxpYTwvc3Bhbj5cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTYgdGV4dC0yeGwgbGc6dGV4dC00eGwgbGVhZGluZy1zbnVnXCI+XG4gICAgICAgICAgICBXZSBhcmUgYSBzbWFsbCB0ZWFtIG9mIHdlYiBkZXZlbG9wZXIgYW5kIGRlc2lnbmVyIOKAoiBXZSB3b3JrIHdpdGhcbiAgICAgICAgICAgIGJ1c2luZXNzIG9mIGFueSBzaXplIHRvIGltcHJvdmUgdGhlaXIgV2Vic2l0ZXMsIFNob3BpZnkgc3RvcmVzIG9yXG4gICAgICAgICAgICBPbmxpbmUgUG9ydGFscyDigKIgT3VyIHByb2R1Y3RzIGRvIG9uZSB0aGluZyB3ZWxsIOKAlFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+ZGVsaWdodCB5b3VyIGN1c3RvbWVyczwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm10LTI0IHB4LTMgbGc6bXQtNDggbGc6cHgtMTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIGxnOm1heC13LWZ1bGxcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbGc6dGV4dC01eGwgZm9udC1ib2xkIGxlYWRpbmctdGlnaHRcIj5cbiAgICAgICAgICAgIFNhbXBsZSB3b3JrXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIG10LTEyIGxnOm10LTI0XCI+XG4gICAgICAgICAgICB7c2FtcGxld29ya3MubWFwKCh3b3JrcGllY2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxXb3JrUGllY2Uga2V5PXtpbmRleH0gey4uLndvcmtwaWVjZX0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibXQtMjQgbGc6bXQtNDggcHgtMyBsZzpweC0xMiBweS0xMiBsZzpweS0yNCBiZy1ibGFjayB0ZXh0LWdyYXktNDAwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctbGcgbXgtYXV0byBsZzptYXgtdy1mdWxsXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgbGc6dGV4dC01eGwgZm9udC1ib2xkIGxlYWRpbmctdGlnaHRcIj5cbiAgICAgICAgICAgIFdoZXRoZXIgeW91IHdhbnQgdG8gdHJ5IGEgbmV3IGlkZWEsIHJlZnJlc2ggYW4gZXhpc3Rpbmcgd2Vic2l0ZSwgb3JcbiAgICAgICAgICAgIHNpbXBseSBuZWVkIGEgd2VibWFzdGVyIHdobyBjYW4gbG9vayBhZnRlciB5b3VyIGRpZ2l0YWwgcHJlc2VuY2UsXG4gICAgICAgICAgICBmZWVsIGZyZWUgdG8gZHJvcCB1cyBhbiBlbWFpbC4gRmlyc3QgY29uc3VsdGF0aW9uIGlzIG9uIHVzLntgIGB9XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwXCIgaHJlZj1cIm1haWx0bzpiYWNoQGtvYWxhZGlnaXRhbC5jb20uYXVcIj5cbiAgICAgICAgICAgICAgRW1haWwgdXNcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Bly/bachly/koaladigital.com.au/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });
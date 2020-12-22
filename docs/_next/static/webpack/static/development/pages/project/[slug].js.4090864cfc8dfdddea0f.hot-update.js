webpackHotUpdate("static/development/pages/project/[slug].js",{

/***/ "./pages/project/[slug].js":
/*!*********************************!*\
  !*** ./pages/project/[slug].js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_markdown_with_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-markdown/with-html */ \"./node_modules/react-markdown/with-html.js\");\n/* harmony import */ var react_markdown_with_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_markdown_with_html__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Icons */ \"./components/Icons.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _jsxFileName = \"/Users/Bly/bachly/koaladigital-mini-website/pages/project/[slug].js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\nfunction ProjectPage(_ref) {\n  var project = _ref.project;\n  if (!project) return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 26\n    }\n  }, \"PROJECT NOT FOUND\");\n  var _project$attributes = project.attributes,\n      title = _project$attributes.title,\n      images = _project$attributes.images,\n      description = _project$attributes.description,\n      body = project.body;\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    pageName: \"ProjectPage\",\n    title: title,\n    description: description,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, __jsx(\"header\", {\n    \"class\": \"py-4 px-4 border-b border-gray-200\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    className: \"flex items-center hover:opacity-50 transition duration-200\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 21\n    }\n  }, __jsx(\"span\", {\n    className: \"w-6 h-6 mr-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 25\n    }\n  }, __jsx(_components_Icons__WEBPACK_IMPORTED_MODULE_5__[\"IconChevronLeft\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 56\n    }\n  })), \" Home\"))), __jsx(\"article\", {\n    className: \"jsx-3354048094\" + \" \" + \"my-8 max-w-2xl mx-auto\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-3354048094\" + \" \" + \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 17\n    }\n  }, __jsx(\"img\", {\n    src: images[0].src,\n    className: \"jsx-3354048094\" + \" \" + \"block\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 21\n    }\n  })), __jsx(\"div\", {\n    className: \"jsx-3354048094\" + \" \" + \"mt-8\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 17\n    }\n  }, __jsx(\"h1\", {\n    className: \"jsx-3354048094\" + \" \" + \"text-4xl leading-tight font-black mb-2 lg:mb-6\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 21\n    }\n  }, title), __jsx(\"div\", {\n    className: \"jsx-3354048094\" + \" \" + \"markdown-content leading-relaxed text-xl\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 21\n    }\n  }, __jsx(react_markdown_with_html__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    escapeHtml: false,\n    source: body //renderers={{ code: CodeBlock, image: MarkdownImage }}\n    ,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 25\n    }\n  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    id: \"3354048094\",\n    __self: this\n  }, \"\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9CbHkvYmFjaGx5L2tvYWxhZGlnaXRhbC1taW5pLXdlYnNpdGUvcGFnZXMvcHJvamVjdC9bc2x1Z10uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUM0QiIsImZpbGUiOiIvVXNlcnMvQmx5L2JhY2hseS9rb2FsYWRpZ2l0YWwtbWluaS13ZWJzaXRlL3BhZ2VzL3Byb2plY3QvW3NsdWddLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duL3dpdGgtaHRtbFwiO1xuaW1wb3J0IHsgSWNvbkNoZXZyb25MZWZ0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvSWNvbnNcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmZ1bmN0aW9uIFByb2plY3RQYWdlKHsgcHJvamVjdCB9KSB7XG4gICAgaWYgKCFwcm9qZWN0KSByZXR1cm4gPGRpdj5QUk9KRUNUIE5PVCBGT1VORDwvZGl2PjtcblxuICAgIGNvbnN0IHtcbiAgICAgICAgYXR0cmlidXRlczogeyB0aXRsZSwgaW1hZ2VzLCBkZXNjcmlwdGlvbiB9LFxuICAgICAgICBib2R5XG4gICAgfSA9IHByb2plY3Q7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0IHBhZ2VOYW1lPSdQcm9qZWN0UGFnZScgdGl0bGU9e3RpdGxlfSBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgPGhlYWRlciBjbGFzcz1cInB5LTQgcHgtNCBib3JkZXItYiBib3JkZXItZ3JheS0yMDBcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBob3ZlcjpvcGFjaXR5LTUwIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3LTYgaC02IG1yLTJcIj48SWNvbkNoZXZyb25MZWZ0IC8+PC9zcGFuPiBIb21lXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwibXktOCBtYXgtdy0yeGwgbXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYmxvY2tcIiBzcmM9e2ltYWdlc1swXS5zcmN9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBsZWFkaW5nLXRpZ2h0IGZvbnQtYmxhY2sgbWItMiBsZzptYi02XCI+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFya2Rvd24tY29udGVudCBsZWFkaW5nLXJlbGF4ZWQgdGV4dC14bFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlc2NhcGVIdG1sPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U9e2JvZHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3JlbmRlcmVycz17eyBjb2RlOiBDb2RlQmxvY2ssIGltYWdlOiBNYXJrZG93bkltYWdlIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbn1cblxuUHJvamVjdFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcXVlcnkgfSkgPT4ge1xuICAgIGNvbnN0IHsgc2x1ZyB9ID0gcXVlcnk7XG4gICAgY29uc3QgcHJvamVjdCA9IGF3YWl0IGltcG9ydChgLi4vLi4vY29udGVudC9wcm9qZWN0cy8ke3NsdWd9Lm1kYCk7XG4gICAgcmV0dXJuIHsgcHJvamVjdCwgYXR0cmlidXRlczogcHJvamVjdC5hdHRyaWJ1dGVzIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0UGFnZTsiXX0= */\\n/*@ sourceURL=/Users/Bly/bachly/koaladigital-mini-website/pages/project/[slug].js */\")));\n}\n\n_c = ProjectPage;\n\nProjectPage.getInitialProps = /*#__PURE__*/function () {\n  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {\n    var query, slug, project;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            query = _ref2.query;\n            slug = query.slug;\n            _context.next = 4;\n            return __webpack_require__(\"./content/projects lazy recursive ^\\\\.\\\\/.*\\\\.md$\")(\"./\".concat(slug, \".md\"));\n\n          case 4:\n            project = _context.sent;\n            return _context.abrupt(\"return\", {\n              project: project,\n              attributes: project.attributes\n            });\n\n          case 6:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProjectPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9qZWN0L1tzbHVnXS5qcz81YzFkIl0sIm5hbWVzIjpbIlByb2plY3RQYWdlIiwicHJvamVjdCIsImF0dHJpYnV0ZXMiLCJ0aXRsZSIsImltYWdlcyIsImRlc2NyaXB0aW9uIiwiYm9keSIsInNyYyIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5Iiwic2x1ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVCxPQUFrQztBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVztBQUM5QixNQUFJLENBQUNBLE9BQUwsRUFBYyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQVA7QUFEZ0IsNEJBTTFCQSxPQU4wQixDQUkxQkMsVUFKMEI7QUFBQSxNQUlaQyxLQUpZLHVCQUlaQSxLQUpZO0FBQUEsTUFJTEMsTUFKSyx1QkFJTEEsTUFKSztBQUFBLE1BSUdDLFdBSkgsdUJBSUdBLFdBSkg7QUFBQSxNQUsxQkMsSUFMMEIsR0FNMUJMLE9BTjBCLENBSzFCSyxJQUwwQjtBQVE5QixTQUNJLE1BQUMsMERBQUQ7QUFBUSxZQUFRLEVBQUMsYUFBakI7QUFBK0IsU0FBSyxFQUFFSCxLQUF0QztBQUE2QyxlQUFXLEVBQUVFLFdBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFRLGFBQU0sb0NBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUMsNERBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU0sYUFBUyxFQUFDLGNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBK0IsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQS9CLENBREosVUFESixDQURKLENBREosRUFRSTtBQUFBLHdDQUFtQix3QkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUEsd0NBQWUsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBdUIsT0FBRyxFQUFFRCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVHLEdBQXRDO0FBQUEsd0NBQWUsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQUlJO0FBQUEsd0NBQWUsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQSx3Q0FBYyxnREFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWdFSixLQUFoRSxDQURKLEVBRUk7QUFBQSx3Q0FBZSwwQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywrREFBRDtBQUNJLGNBQVUsRUFBRSxLQURoQjtBQUVJLFVBQU0sRUFBRUcsSUFGWixDQUdBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBRkosQ0FKSjtBQUFBO0FBQUE7QUFBQSx3Z0dBUkosQ0FESjtBQTZCSDs7S0FyQ1FOLFc7O0FBdUNUQSxXQUFXLENBQUNRLGVBQVo7QUFBQSwrTEFBOEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVNDLGlCQUFULFNBQVNBLEtBQVQ7QUFDbEJDLGdCQURrQixHQUNURCxLQURTLENBQ2xCQyxJQURrQjtBQUFBO0FBQUEsbUJBRUoseUVBQU8sWUFBMEJBLElBQWpDLFNBRkk7O0FBQUE7QUFFcEJULG1CQUZvQjtBQUFBLDZDQUduQjtBQUFFQSxxQkFBTyxFQUFQQSxPQUFGO0FBQVdDLHdCQUFVLEVBQUVELE9BQU8sQ0FBQ0M7QUFBL0IsYUFIbUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBOUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBTWVGLDBFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcHJvamVjdC9bc2x1Z10uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd24vd2l0aC1odG1sXCI7XG5pbXBvcnQgeyBJY29uQ2hldnJvbkxlZnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9JY29uc1wiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZnVuY3Rpb24gUHJvamVjdFBhZ2UoeyBwcm9qZWN0IH0pIHtcbiAgICBpZiAoIXByb2plY3QpIHJldHVybiA8ZGl2PlBST0pFQ1QgTk9UIEZPVU5EPC9kaXY+O1xuXG4gICAgY29uc3Qge1xuICAgICAgICBhdHRyaWJ1dGVzOiB7IHRpdGxlLCBpbWFnZXMsIGRlc2NyaXB0aW9uIH0sXG4gICAgICAgIGJvZHlcbiAgICB9ID0gcHJvamVjdDtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQgcGFnZU5hbWU9J1Byb2plY3RQYWdlJyB0aXRsZT17dGl0bGV9IGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzPVwicHktNCBweC00IGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMFwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGhvdmVyOm9wYWNpdHktNTAgdHJhbnNpdGlvbiBkdXJhdGlvbi0yMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInctNiBoLTYgbXItMlwiPjxJY29uQ2hldnJvbkxlZnQgLz48L3NwYW4+IEhvbWVcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJteS04IG1heC13LTJ4bCBteC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJibG9ja1wiIHNyYz17aW1hZ2VzWzBdLnNyY30gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LThcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGxlYWRpbmctdGlnaHQgZm9udC1ibGFjayBtYi0yIGxnOm1iLTZcIj57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJrZG93bi1jb250ZW50IGxlYWRpbmctcmVsYXhlZCB0ZXh0LXhsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVzY2FwZUh0bWw9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZT17Ym9keX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vcmVuZGVyZXJzPXt7IGNvZGU6IENvZGVCbG9jaywgaW1hZ2U6IE1hcmtkb3duSW1hZ2UgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICA8L0xheW91dD5cbiAgICApO1xufVxuXG5Qcm9qZWN0UGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBxdWVyeSB9KSA9PiB7XG4gICAgY29uc3QgeyBzbHVnIH0gPSBxdWVyeTtcbiAgICBjb25zdCBwcm9qZWN0ID0gYXdhaXQgaW1wb3J0KGAuLi8uLi9jb250ZW50L3Byb2plY3RzLyR7c2x1Z30ubWRgKTtcbiAgICByZXR1cm4geyBwcm9qZWN0LCBhdHRyaWJ1dGVzOiBwcm9qZWN0LmF0dHJpYnV0ZXMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/project/[slug].js\n");

/***/ })

})
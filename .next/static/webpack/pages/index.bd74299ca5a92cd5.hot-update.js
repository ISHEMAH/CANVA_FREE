"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Portfolio/portfolio.jsx":
/*!************************************************!*\
  !*** ./src/components/Portfolio/portfolio.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_initIsotope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/initIsotope */ \"./src/common/initIsotope.js\");\n/* harmony import */ var _projectCard_projectCard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../projectCard/projectCard.js */ \"./src/components/projectCard/projectCard.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\Users\\\\user\\\\OneDrive\\\\Desktop\\\\AgencyPortofolio-Vie-Theme-React\\\\AgencyPortofolio-Vie-Theme-React\\\\src\\\\components\\\\Portfolio\\\\portfolio.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n/* eslint-disable @next/next/no-img-element */\n\n\n\n\n\nvar projectsData = [{\n  imageUrl: \"/img/portfolio/portfolio/1/1.jpg\",\n  title: \"Creativity Demand\",\n  categories: [\"Creative\", \"Design\", \"WordPress\"]\n} // Add more project data as needed\n];\n\nvar Portfolio = function Portfolio(_ref) {\n  _s();\n\n  var grid = _ref.grid,\n      filterPosition = _ref.filterPosition;\n  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {\n    setTimeout(function () {\n      (0,_common_initIsotope__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    }, 1000);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"section\", {\n    className: \"portfolio section-padding pb-70\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: \"gallery full-width\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: \"row\",\n        children: projectsData.map(function (project, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_projectCard_projectCard_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            grid: grid,\n            data: project\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Portfolio, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Portfolio;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Portfolio);\n\nvar _c;\n\n$RefreshReg$(_c, \"Portfolio\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qb3J0Zm9saW8vcG9ydGZvbGlvLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUksWUFBWSxHQUFHLENBQ25CO0FBQ0VDLEVBQUFBLFFBQVEsRUFBRSxrQ0FEWjtBQUVFQyxFQUFBQSxLQUFLLEVBQUUsbUJBRlQ7QUFHRUMsRUFBQUEsVUFBVSxFQUFFLENBQUMsVUFBRCxFQUFhLFFBQWIsRUFBdUIsV0FBdkI7QUFIZCxDQURtQixDQU1uQjtBQU5tQixDQUFyQjs7QUFTQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUE4QjtBQUFBOztBQUFBLE1BQTNCQyxJQUEyQixRQUEzQkEsSUFBMkI7QUFBQSxNQUFyQkMsY0FBcUIsUUFBckJBLGNBQXFCO0FBQzlDVixFQUFBQSxzREFBQSxDQUFnQixZQUFNO0FBQ3BCWSxJQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNmVixNQUFBQSwrREFBVztBQUNaLEtBRlMsRUFFUCxJQUZPLENBQVY7QUFHRCxHQUpELEVBSUcsRUFKSDtBQU1BLHNCQUNFO0FBQVMsYUFBUyxFQUFDLGlDQUFuQjtBQUFBLDJCQUVFO0FBQUssZUFBUyxFQUFDLG9CQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSxrQkFDR0UsWUFBWSxDQUFDUyxHQUFiLENBQWlCLFVBQUNDLE9BQUQsRUFBVUMsS0FBVjtBQUFBLDhCQUNoQiw4REFBQyxtRUFBRDtBQUF5QixnQkFBSSxFQUFFTixJQUEvQjtBQUFxQyxnQkFBSSxFQUFFSztBQUEzQyxhQUFrQkMsS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEZ0I7QUFBQSxTQUFqQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBWUQsQ0FuQkQ7O0dBQU1QOztLQUFBQTtBQXFCTiwrREFBZUEsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qb3J0Zm9saW8vcG9ydGZvbGlvLmpzeD83ZDE2Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEBuZXh0L25leHQvbm8taW1nLWVsZW1lbnQgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBpbml0SXNvdG9wZSBmcm9tIFwiLi4vLi4vY29tbW9uL2luaXRJc290b3BlXCI7XHJcbmltcG9ydCBQcm9qZWN0Q2FyZCBmcm9tIFwiLi4vcHJvamVjdENhcmQvcHJvamVjdENhcmQuanNcIjtcclxuXHJcbmNvbnN0IHByb2plY3RzRGF0YSA9IFtcclxuICB7XHJcbiAgICBpbWFnZVVybDogXCIvaW1nL3BvcnRmb2xpby9wb3J0Zm9saW8vMS8xLmpwZ1wiLFxyXG4gICAgdGl0bGU6IFwiQ3JlYXRpdml0eSBEZW1hbmRcIixcclxuICAgIGNhdGVnb3JpZXM6IFtcIkNyZWF0aXZlXCIsIFwiRGVzaWduXCIsIFwiV29yZFByZXNzXCJdLFxyXG4gIH0sXHJcbiAgLy8gQWRkIG1vcmUgcHJvamVjdCBkYXRhIGFzIG5lZWRlZFxyXG5dO1xyXG5cclxuY29uc3QgUG9ydGZvbGlvID0gKHsgZ3JpZCwgZmlsdGVyUG9zaXRpb24gfSkgPT4ge1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaW5pdElzb3RvcGUoKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBvcnRmb2xpbyBzZWN0aW9uLXBhZGRpbmcgcGItNzBcIj5cclxuICAgICAgey8qIC4uLiAocmVzdCBvZiB0aGUgY29kZSkgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeSBmdWxsLXdpZHRoXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIHtwcm9qZWN0c0RhdGEubWFwKChwcm9qZWN0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8UHJvamVjdENhcmQga2V5PXtpbmRleH0gZ3JpZD17Z3JpZH0gZGF0YT17cHJvamVjdH0gLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9ydGZvbGlvOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJpbml0SXNvdG9wZSIsIlByb2plY3RDYXJkIiwicHJvamVjdHNEYXRhIiwiaW1hZ2VVcmwiLCJ0aXRsZSIsImNhdGVnb3JpZXMiLCJQb3J0Zm9saW8iLCJncmlkIiwiZmlsdGVyUG9zaXRpb24iLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwibWFwIiwicHJvamVjdCIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Portfolio/portfolio.jsx\n");

/***/ })

});
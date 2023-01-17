"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/counter",{

/***/ "./pages/counter.js":
/*!**************************!*\
  !*** ./pages/counter.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Counter; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Counter_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Counter.module.css */ \"./styles/Counter.module.css\");\n/* harmony import */ var _styles_Counter_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Counter_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Counter() {\n    _s();\n    const [number, setNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();\n    const isUser = searchParams.get(\"username\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        !isUser ? router.push(\"/\") : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n    }, [\n        isUser\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (_styles_Counter_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Counter_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Counter_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                        children: \"COUNTER PAGE\"\n                    }, void 0, false, {\n                        fileName: \"/Users/leyanpeng/Desktop/Dynamic Content Design/login-page-week2/pages/counter.js\",\n                        lineNumber: 22,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Counter_module_css__WEBPACK_IMPORTED_MODULE_4___default().greeting),\n                        children: [\n                            \"Welcome \",\n                            isUser\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/leyanpeng/Desktop/Dynamic Content Design/login-page-week2/pages/counter.js\",\n                        lineNumber: 23,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_styles_Counter_module_css__WEBPACK_IMPORTED_MODULE_4___default().value),\n                                children: number\n                            }, void 0, false, {\n                                fileName: \"/Users/leyanpeng/Desktop/Dynamic Content Design/login-page-week2/pages/counter.js\",\n                                lineNumber: 24,\n                                columnNumber: 26\n                            }, this),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/leyanpeng/Desktop/Dynamic Content Design/login-page-week2/pages/counter.js\",\n                        lineNumber: 24,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Counter_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttonSection),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_styles_Counter_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),\n                                onClick: ()=>setNumber(number + 1),\n                                children: \"Increment\"\n                            }, void 0, false, {\n                                fileName: \"/Users/leyanpeng/Desktop/Dynamic Content Design/login-page-week2/pages/counter.js\",\n                                lineNumber: 27,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_styles_Counter_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),\n                                onClick: ()=>setNumber(number - 1),\n                                children: \"Decrement\"\n                            }, void 0, false, {\n                                fileName: \"/Users/leyanpeng/Desktop/Dynamic Content Design/login-page-week2/pages/counter.js\",\n                                lineNumber: 28,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/leyanpeng/Desktop/Dynamic Content Design/login-page-week2/pages/counter.js\",\n                        lineNumber: 26,\n                        columnNumber: 1\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/leyanpeng/Desktop/Dynamic Content Design/login-page-week2/pages/counter.js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/leyanpeng/Desktop/Dynamic Content Design/login-page-week2/pages/counter.js\",\n            lineNumber: 20,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Counter, \"i0CrywzY7HuXOHIU2JfWIF9kQ8A=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Counter;\nvar _c;\n$RefreshReg$(_c, \"Counter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb3VudGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQTJDO0FBQ007QUFDVjtBQUNnQjtBQUV4QyxTQUFTSyxVQUFVOztJQUM5QixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR04sK0NBQVFBLENBQUM7SUFDckMsTUFBTU8sZUFBZU4sZ0VBQWVBO0lBQ3BDLE1BQU1PLFNBQVNELGFBQWFFLEdBQUcsQ0FBQztJQUNoQyxNQUFNQyxTQUFTUixzREFBU0E7SUFFeEJILGdEQUFTQSxDQUFDLElBQU07UUFDWixDQUFDUyxTQUFTRSxPQUFPQyxJQUFJLENBQUMscUJBQU8sNklBQUs7SUFDdEMsR0FBRztRQUFDSDtLQUFPO0lBR1gscUJBQ0k7a0JBQ0ksNEVBQUNJO1lBQUtDLFdBQVdWLHdFQUFpQjtzQkFDbEMsNEVBQUNXO2dCQUFJRCxXQUFXViw2RUFBc0I7O2tDQUN0Qyw4REFBQ1c7d0JBQUlELFdBQVdWLHlFQUFrQjtrQ0FBRTs7Ozs7O2tDQUNwQyw4REFBQ1c7d0JBQUlELFdBQVdWLDRFQUFxQjs7NEJBQUU7NEJBQVNLOzs7Ozs7O2tDQUN4Qyw4REFBQ007OzBDQUFJLDhEQUFDSTtnQ0FBS0wsV0FBV1YseUVBQWtCOzBDQUFHRTs7Ozs7OzRCQUFjOzs7Ozs7O2tDQUU3RSw4REFBQ1M7d0JBQUlELFdBQVdWLGlGQUEwQjs7MENBQ3RCLDhEQUFDa0I7Z0NBQU9SLFdBQVdWLDBFQUFtQjtnQ0FBRW1CLFNBQVMsSUFBTWhCLFVBQVVELFNBQVM7MENBQUk7Ozs7OzswQ0FDOUUsOERBQUNnQjtnQ0FBT1IsV0FBV1YsMEVBQW1CO2dDQUFFbUIsU0FBUyxJQUFNaEIsVUFBVUQsU0FBUzswQ0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWxHLENBQUM7R0EzQnVCRDs7UUFFQ0gsNERBQWVBO1FBRXJCQyxrREFBU0E7OztLQUpKRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb3VudGVyLmpzP2ZkYTUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQgY291bnRlclN0eWxlIGZyb20gJy4uL3N0eWxlcy9Db3VudGVyLm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvdW50ZXIoKSB7XG4gICAgY29uc3QgW251bWJlciwgc2V0TnVtYmVyXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICAgIGNvbnN0IGlzVXNlciA9IHNlYXJjaFBhcmFtcy5nZXQoJ3VzZXJuYW1lJyk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAhaXNVc2VyID8gcm91dGVyLnB1c2goJy8nKSA6IDw+PC8+XG4gICAgfSwgW2lzVXNlcl0pXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9e2NvdW50ZXJTdHlsZS5tYWlufT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb3VudGVyU3R5bGUuY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb3VudGVyU3R5bGUudGl0bGV9PkNPVU5URVIgUEFHRTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvdW50ZXJTdHlsZS5ncmVldGluZ30+V2VsY29tZSB7aXNVc2VyfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxzcGFuIGNsYXNzTmFtZT17Y291bnRlclN0eWxlLnZhbHVlfT57bnVtYmVyfTwvc3Bhbj4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgXG48ZGl2IGNsYXNzTmFtZT17Y291bnRlclN0eWxlLmJ1dHRvblNlY3Rpb259PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y291bnRlclN0eWxlLmJ1dHRvbn0gb25DbGljaz17KCkgPT4gc2V0TnVtYmVyKG51bWJlciArIDEpfT5JbmNyZW1lbnQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NvdW50ZXJTdHlsZS5idXR0b259IG9uQ2xpY2s9eygpID0+IHNldE51bWJlcihudW1iZXIgLSAxKX0+RGVjcmVtZW50PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC8+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVNlYXJjaFBhcmFtcyIsInVzZVJvdXRlciIsImNvdW50ZXJTdHlsZSIsIkNvdW50ZXIiLCJudW1iZXIiLCJzZXROdW1iZXIiLCJzZWFyY2hQYXJhbXMiLCJpc1VzZXIiLCJnZXQiLCJyb3V0ZXIiLCJwdXNoIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImNvbnRhaW5lciIsInRpdGxlIiwiZ3JlZXRpbmciLCJzcGFuIiwidmFsdWUiLCJidXR0b25TZWN0aW9uIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/counter.js\n"));

/***/ })

});
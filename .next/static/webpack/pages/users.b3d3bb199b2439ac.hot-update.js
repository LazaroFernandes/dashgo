"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users",{

/***/ "./src/components/Header/SearchBox.tsx":
/*!*********************************************!*\
  !*** ./src/components/Header/SearchBox.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SearchBox\": function() { return /* binding */ SearchBox; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ri */ \"./node_modules/react-icons/ri/index.esm.js\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction SearchBox() {\n    _s();\n    var searchInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n        as: \"label\",\n        flex: \"1\",\n        py: \"4\",\n        px: \"8\",\n        ml: \"6\",\n        maxWidth: 400,\n        alignSelf: \"center\",\n        color: \"gray.500\",\n        position: \"relative\",\n        bg: \"gray.800\",\n        borderRadius: \"full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                color: \"gray.500\",\n                variant: \"unstyled\",\n                px: \"4\",\n                mr: \"4\",\n                placeholder: \"Buscar na plataforma\",\n                _placeholder: {\n                    color: \"gray.400\"\n                },\n                value: searchInputRef.value,\n                onChange: function(event) {\n                    return setSearch(event.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"/var/www/html/RocketSeat/ReactJs/dashgo/src/components/Header/SearchBox.tsx\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {\n                as: react_icons_ri__WEBPACK_IMPORTED_MODULE_3__.RiSearchLine,\n                fontSize: \"20\"\n            }, void 0, false, {\n                fileName: \"/var/www/html/RocketSeat/ReactJs/dashgo/src/components/Header/SearchBox.tsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/var/www/html/RocketSeat/ReactJs/dashgo/src/components/Header/SearchBox.tsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this);\n}\n_s(SearchBox, \"1Huwt9f9sVQqX6JpiuuE0oS3qT8=\");\n_c = SearchBox;\nvar _c;\n$RefreshReg$(_c, \"SearchBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvU2VhcmNoQm94LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBcUQ7QUFDdEI7QUFDZTs7QUFFdkMsU0FBU0ssU0FBUyxHQUFFOztJQUV2QixJQUFNQyxjQUFjLEdBQUdILDZDQUFNLEVBQW9CO0lBRWpELHFCQUNJLDhEQUFDSCxrREFBSTtRQUNMTyxFQUFFLEVBQUMsT0FBTztRQUNWQyxJQUFJLEVBQUMsR0FBRztRQUNSQyxFQUFFLEVBQUMsR0FBRztRQUNOQyxFQUFFLEVBQUMsR0FBRztRQUNOQyxFQUFFLEVBQUMsR0FBRztRQUNOQyxRQUFRLEVBQUUsR0FBRztRQUNiQyxTQUFTLEVBQUMsUUFBUTtRQUNsQkMsS0FBSyxFQUFDLFVBQVU7UUFDaEJDLFFBQVEsRUFBQyxVQUFVO1FBQ25CQyxFQUFFLEVBQUMsVUFBVTtRQUNiQyxZQUFZLEVBQUMsTUFBTTs7MEJBRW5CLDhEQUFDZixtREFBSztnQkFDRlksS0FBSyxFQUFDLFVBQVU7Z0JBQ2hCSSxPQUFPLEVBQUMsVUFBVTtnQkFDbEJSLEVBQUUsRUFBQyxHQUFHO2dCQUNOUyxFQUFFLEVBQUMsR0FBRztnQkFDTkMsV0FBVyxFQUFDLHNCQUFzQjtnQkFDbENDLFlBQVksRUFBRTtvQkFBRVAsS0FBSyxFQUFFLFVBQVU7aUJBQUU7Z0JBQ25DUSxLQUFLLEVBQUVoQixjQUFjLENBQUNnQixLQUFLO2dCQUMzQkMsUUFBUSxFQUFFQyxTQUFBQSxLQUFLOzJCQUFJQyxTQUFTLENBQUNELEtBQUssQ0FBQ0UsTUFBTSxDQUFDSixLQUFLLENBQUM7aUJBQUE7Ozs7O29CQUNsRDswQkFDRiw4REFBQ3JCLGtEQUFJO2dCQUFDTSxFQUFFLEVBQUVILHdEQUFZO2dCQUFFdUIsUUFBUSxFQUFDLElBQUk7Ozs7O29CQUFHOzs7Ozs7WUFDckMsQ0FDTjtDQUNKO0dBL0JldEIsU0FBUztBQUFUQSxLQUFBQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9TZWFyY2hCb3gudHN4P2RlYzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxleCwgSWNvbiwgSW5wdXQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSaVNlYXJjaExpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvcmlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFNlYXJjaEJveCgpe1xuICAgIFxuICAgIGNvbnN0IHNlYXJjaElucHV0UmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KClcblxuICAgIHJldHVybihcbiAgICAgICAgPEZsZXhcbiAgICAgICAgYXM9XCJsYWJlbFwiXG4gICAgICAgIGZsZXg9XCIxXCJcbiAgICAgICAgcHk9XCI0XCJcbiAgICAgICAgcHg9XCI4XCJcbiAgICAgICAgbWw9XCI2XCJcbiAgICAgICAgbWF4V2lkdGg9ezQwMH1cbiAgICAgICAgYWxpZ25TZWxmPVwiY2VudGVyXCJcbiAgICAgICAgY29sb3I9XCJncmF5LjUwMFwiXG4gICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgICBiZz1cImdyYXkuODAwXCJcbiAgICAgICAgYm9yZGVyUmFkaXVzPVwiZnVsbFwiXG4gICAgPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIGNvbG9yPVwiZ3JheS41MDBcIlxuICAgICAgICAgICAgdmFyaWFudD1cInVuc3R5bGVkXCJcbiAgICAgICAgICAgIHB4PVwiNFwiXG4gICAgICAgICAgICBtcj1cIjRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJCdXNjYXIgbmEgcGxhdGFmb3JtYVwiXG4gICAgICAgICAgICBfcGxhY2Vob2xkZXI9e3sgY29sb3I6ICdncmF5LjQwMCcgfX1cbiAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hJbnB1dFJlZi52YWx1ZSB9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0U2VhcmNoKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxJY29uIGFzPXtSaVNlYXJjaExpbmV9IGZvbnRTaXplPVwiMjBcIiAvPlxuICAgIDwvRmxleD5cbiAgICApXG59Il0sIm5hbWVzIjpbIkZsZXgiLCJJY29uIiwiSW5wdXQiLCJ1c2VSZWYiLCJSaVNlYXJjaExpbmUiLCJTZWFyY2hCb3giLCJzZWFyY2hJbnB1dFJlZiIsImFzIiwiZmxleCIsInB5IiwicHgiLCJtbCIsIm1heFdpZHRoIiwiYWxpZ25TZWxmIiwiY29sb3IiLCJwb3NpdGlvbiIsImJnIiwiYm9yZGVyUmFkaXVzIiwidmFyaWFudCIsIm1yIiwicGxhY2Vob2xkZXIiLCJfcGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJzZXRTZWFyY2giLCJ0YXJnZXQiLCJmb250U2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Header/SearchBox.tsx\n");

/***/ })

});
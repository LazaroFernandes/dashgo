"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/contexts/SidebarDrawerContext.tsx":
/*!**********************************************************!*\
  !*** ./src/components/contexts/SidebarDrawerContext.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SidebarDrawerProvider\": function() { return /* binding */ SidebarDrawerProvider; },\n/* harmony export */   \"useSidebarDrawer\": function() { return /* binding */ useSidebarDrawer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar SidebarDrawerContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({});\nfunction SidebarDrawerProvider(param) {\n    var children = param.children;\n    _s();\n    var disclosure = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useDisclosure)();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    useEffect(function() {\n        disclosure.onClose;\n    }, [\n        router,\n        asPath\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SidebarDrawerContext.Provider, {\n        value: disclosure,\n        children: children\n    }, void 0, false, {\n        fileName: \"/var/www/html/RocketSeat/ReactJs/dashgo/src/components/contexts/SidebarDrawerContext.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n}\n_s(SidebarDrawerProvider, \"8Gecg9/0jsQNPSCCiLhNAJ9Sc7U=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useDisclosure,\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = SidebarDrawerProvider;\nvar useSidebarDrawer = function() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(SidebarDrawerContext);\n};\n_s1(useSidebarDrawer, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"SidebarDrawerProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb250ZXh0cy9TaWRlYmFyRHJhd2VyQ29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBc0U7QUFDOUI7QUFDcUI7O0FBUTdELElBQU1JLG9CQUFvQixpQkFBR0Ysb0RBQWEsQ0FBQyxFQUFFLENBQTZCO0FBRW5FLFNBQVNHLHFCQUFxQixDQUFDLEtBQXdDLEVBQUU7UUFBMUMsUUFBVSxHQUFWLEtBQXdDLENBQXRDQyxRQUFROztJQUM1QyxJQUFNQyxVQUFVLEdBQUdQLCtEQUFhLEVBQUU7SUFDbEMsSUFBTVEsTUFBTSxHQUFHUCxzREFBUyxFQUFFO0lBRTFCUSxTQUFTLENBQUUsV0FBTTtRQUNiRixVQUFVLENBQUNHLE9BQU87S0FDckIsRUFBRTtRQUFFRixNQUFNO1FBQUNHLE1BQU07S0FBQyxDQUFDO0lBRXBCLHFCQUNJLDhEQUFDUCxvQkFBb0IsQ0FBQ1EsUUFBUTtRQUFDQyxLQUFLLEVBQUVOLFVBQVU7a0JBQzNDRCxRQUFROzs7OztZQUNtQixDQUNuQztDQUNKO0dBYmVELHFCQUFxQjs7UUFDZEwsMkRBQWE7UUFDakJDLGtEQUFTOzs7QUFGWkksS0FBQUEscUJBQXFCO0FBZTlCLElBQU1TLGdCQUFnQixHQUFHLFdBQU1YOztJQUFBQSxPQUFBQSxpREFBVSxDQUFDQyxvQkFBb0IsQ0FBQztDQUFBO0lBQXpEVSxnQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29udGV4dHMvU2lkZWJhckRyYXdlckNvbnRleHQudHN4Pzk4NmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRGlzY2xvc3VyZSwgVXNlRGlzY2xvc3VyZVJldHVybiB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgU2lkZWJhckRyYXdlclByb3ZpZGVyUHJvcHMge1xuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGVcbn1cblxudHlwZSBTaWRlYmFyRHJhd2VyQ29udGV4dERhdGEgPSBVc2VEaXNjbG9zdXJlUmV0dXJuXG5cbmNvbnN0IFNpZGViYXJEcmF3ZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBTaWRlYmFyRHJhd2VyQ29udGV4dERhdGEpO1xuXG5leHBvcnQgZnVuY3Rpb24gU2lkZWJhckRyYXdlclByb3ZpZGVyKHsgY2hpbGRyZW4gfTogU2lkZWJhckRyYXdlclByb3ZpZGVyUHJvcHMpIHtcbiAgICBjb25zdCBkaXNjbG9zdXJlID0gdXNlRGlzY2xvc3VyZSgpXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICB1c2VFZmZlY3QgKCgpID0+IHtcbiAgICAgICAgZGlzY2xvc3VyZS5vbkNsb3NlXG4gICAgfSwgWyByb3V0ZXIsYXNQYXRoXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxTaWRlYmFyRHJhd2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17ZGlzY2xvc3VyZX0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvU2lkZWJhckRyYXdlckNvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufVxuXG5leHBvcnQgY29uc3QgdXNlU2lkZWJhckRyYXdlciA9ICgpID0+IHVzZUNvbnRleHQoU2lkZWJhckRyYXdlckNvbnRleHQpIl0sIm5hbWVzIjpbInVzZURpc2Nsb3N1cmUiLCJ1c2VSb3V0ZXIiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIlNpZGViYXJEcmF3ZXJDb250ZXh0IiwiU2lkZWJhckRyYXdlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJkaXNjbG9zdXJlIiwicm91dGVyIiwidXNlRWZmZWN0Iiwib25DbG9zZSIsImFzUGF0aCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VTaWRlYmFyRHJhd2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/contexts/SidebarDrawerContext.tsx\n");

/***/ })

});
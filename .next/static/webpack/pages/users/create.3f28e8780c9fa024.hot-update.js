"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users/create",{

/***/ "./src/components/ActiveLink.tsx":
/*!***************************************!*\
  !*** ./src/components/ActiveLink.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ActiveLink\": function() { return /* binding */ ActiveLink; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {};\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {};\n    var target = {};\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ActiveLink(_param) {\n    var children = _param.children, rest = _objectWithoutProperties(_param, [\n        \"children\"\n    ]);\n    _s();\n    var asPath = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().asPath;\n    var isActive = false;\n    if (asPath === rest.href || asPath === rest.as) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), _objectSpread({}, rest, {\n        children: /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.cloneElement)(children, {\n            color: isActive ? \"pink.400\" : \"gray.50\"\n        })\n    }), void 0, false, {\n        fileName: \"/var/www/html/RocketSeat/ReactJs/dashgo/src/components/ActiveLink.tsx\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, this);\n}\n_s(ActiveLink, \"9pMG9Ra3x5O/yaZiUz6XxVJ+Rds=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ActiveLink;\nvar _c;\n$RefreshReg$(_c, \"ActiveLink\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BY3RpdmVMaW5rLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDSjtBQUNXOztBQU01QyxTQUFTRyxVQUFVLENBQUMsTUFBc0MsRUFBRTtRQUF0Q0MsUUFBUSxHQUFWLE1BQXNDLENBQXBDQSxRQUFRLEVBQUtDLElBQUksNEJBQW5CLE1BQXNDO1FBQXBDRCxVQUFROzs7SUFDakMsSUFBTSxNQUFRLEdBQUtILHNEQUFTLEVBQUUsQ0FBdEJLLE1BQU07SUFFZCxJQUFJQyxRQUFRLEdBQUcsS0FBSztJQUVwQixJQUFJRCxNQUFNLEtBQUtELElBQUksQ0FBQ0csSUFBSSxJQUFJRixNQUFNLEtBQUtELElBQUksQ0FBQ0ksRUFBRSxFQUU5QyxxQkFDSSw4REFBQ1Qsa0RBQUksb0JBQUtLLElBQUk7a0JBQ1RILGNBQUFBLG1EQUFZLENBQUNFLFFBQVEsRUFBRTtZQUNwQk0sS0FBSyxFQUFFSCxRQUFRLEdBQUcsVUFBVSxHQUFHLFNBQVM7U0FDM0MsQ0FBQzs7Ozs7WUFDQyxDQUNWO0NBQ0o7R0FkZUosVUFBVTs7UUFDSEYsa0RBQVM7OztBQURoQkUsS0FBQUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BY3RpdmVMaW5rLnRzeD8zNWE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rLCB7IExpbmtQcm9wcyB9IGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgY2xvbmVFbGVtZW50LCBSZWFjdEVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIEFjdGl2ZUxpbmtQcm9wcyBleHRlbmRzIExpbmtQcm9wcyB7XG4gICAgY2hpbGRyZW46IFJlYWN0RWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEFjdGl2ZUxpbmsoeyBjaGlsZHJlbiwgLi4ucmVzdCB9OiBBY3RpdmVMaW5rUHJvcHMpIHtcbiAgICBjb25zdCB7IGFzUGF0aCB9ID0gdXNlUm91dGVyKClcblxuICAgIGxldCBpc0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgaWYoIGFzUGF0aCA9PT0gcmVzdC5ocmVmIHx8IGFzUGF0aCA9PT0gcmVzdC5hcylcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxMaW5rIHsuLi5yZXN0fT5cbiAgICAgICAgICAgIHtjbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogaXNBY3RpdmUgPyAncGluay40MDAnIDogJ2dyYXkuNTAnXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9MaW5rPlxuICAgIClcbn0iXSwibmFtZXMiOlsiTGluayIsInVzZVJvdXRlciIsImNsb25lRWxlbWVudCIsIkFjdGl2ZUxpbmsiLCJjaGlsZHJlbiIsInJlc3QiLCJhc1BhdGgiLCJpc0FjdGl2ZSIsImhyZWYiLCJhcyIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ActiveLink.tsx\n");

/***/ })

});
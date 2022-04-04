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

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/ri */ \"./node_modules/react-icons/ri/index.esm.js\");\n/* harmony import */ var _contexts_SidebarDrawerContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/SidebarDrawerContext */ \"./src/components/contexts/SidebarDrawerContext.tsx\");\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Logo */ \"./src/components/Header/Logo.tsx\");\n/* harmony import */ var _NotificationsNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NotificationsNav */ \"./src/components/Header/NotificationsNav.tsx\");\n/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Profile */ \"./src/components/Header/Profile.tsx\");\n/* harmony import */ var _SearchBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SearchBox */ \"./src/components/Header/SearchBox.tsx\");\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Header() {\n    _s();\n    var onOpen = (0,_contexts_SidebarDrawerContext__WEBPACK_IMPORTED_MODULE_1__.useSidebarDrawer)().onOpen;\n    var isWideVersion = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useBreakpointValue)({\n        base: false,\n        lg: true\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n        as: \"header\",\n        w: \"100%\",\n        maxWidth: 1480,\n        h: \"20\",\n        mx: \"auto\",\n        mt: \"4\",\n        px: \"6\",\n        align: \"center\",\n        children: [\n            !isWideVersion && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.IconButton, {\n                \"aria-label\": \"Open navigation\",\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Icon, {\n                    as: react_icons_ri__WEBPACK_IMPORTED_MODULE_7__.RiMenuLine\n                }, void 0, false, void 0, void 0),\n                fontSize: \"24\",\n                variant: \"unstyled\",\n                onClick: onOpen,\n                mr: \"2\"\n            }, void 0, false, {\n                fileName: \"/var/www/html/RocketSeat/ReactJs/dashgo/src/components/Header/index.tsx\",\n                lineNumber: 28,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_2__.Logo, {}, void 0, false, {\n                fileName: \"/var/www/html/RocketSeat/ReactJs/dashgo/src/components/Header/index.tsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this),\n            isWideVersion && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchBox__WEBPACK_IMPORTED_MODULE_5__.SearchBox, {}, void 0, false, {\n                fileName: \"/var/www/html/RocketSeat/ReactJs/dashgo/src/components/Header/index.tsx\",\n                lineNumber: 39,\n                columnNumber: 31\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                align: \"center\",\n                ml: \"auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NotificationsNav__WEBPACK_IMPORTED_MODULE_3__.NotificationsNav, {}, void 0, false, {\n                        fileName: \"/var/www/html/RocketSeat/ReactJs/dashgo/src/components/Header/index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Profile__WEBPACK_IMPORTED_MODULE_4__.Profile, {\n                        showProfileData: isWideVersion\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/RocketSeat/ReactJs/dashgo/src/components/Header/index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/var/www/html/RocketSeat/ReactJs/dashgo/src/components/Header/index.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/var/www/html/RocketSeat/ReactJs/dashgo/src/components/Header/index.tsx\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, this);\n}\n_s(Header, \"VdG2HzU5akaMP6mAHU8nvd6X3Go=\", false, function() {\n    return [\n        _contexts_SidebarDrawerContext__WEBPACK_IMPORTED_MODULE_1__.useSidebarDrawer,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useBreakpointValue\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE2RTtBQUNsQztBQUN3QjtBQUN0QztBQUN3QjtBQUNsQjtBQUNJOztBQUVoQyxTQUFTVSxNQUFNLEdBQUc7O0lBQ3JCLElBQU0sTUFBUSxHQUFLTCxnRkFBZ0IsRUFBRSxDQUE3Qk0sTUFBTTtJQUVkLElBQU1DLGFBQWEsR0FBR1Qsb0VBQWtCLENBQUM7UUFDckNVLElBQUksRUFBRSxLQUFLO1FBQ1hDLEVBQUUsRUFBRSxJQUFJO0tBQ1gsQ0FBQztJQUNGLHFCQUNJLDhEQUFDZCxrREFBSTtRQUNEZSxFQUFFLEVBQUMsUUFBUTtRQUNYQyxDQUFDLEVBQUMsTUFBTTtRQUNSQyxRQUFRLEVBQUUsSUFBSTtRQUNkQyxDQUFDLEVBQUMsSUFBSTtRQUNOQyxFQUFFLEVBQUMsTUFBTTtRQUNUQyxFQUFFLEVBQUMsR0FBRztRQUNOQyxFQUFFLEVBQUMsR0FBRztRQUNOQyxLQUFLLEVBQUMsUUFBUTs7WUFFYixDQUFFVixhQUFhLGtCQUNaLDhEQUFDVix3REFBVTtnQkFDUHFCLFlBQVUsRUFBQyxpQkFBaUI7Z0JBQzVCQyxJQUFJLGdCQUFFLDhEQUFDdkIsa0RBQUk7b0JBQUNjLEVBQUUsRUFBRVgsc0RBQVU7aURBQUc7Z0JBQzdCcUIsUUFBUSxFQUFDLElBQUk7Z0JBQ2JDLE9BQU8sRUFBQyxVQUFVO2dCQUNsQkMsT0FBTyxFQUFFaEIsTUFBTTtnQkFDZmlCLEVBQUUsRUFBQyxHQUFHOzs7OztvQkFDUjswQkFFTiw4REFBQ3RCLHVDQUFJOzs7O29CQUFHO1lBRVBNLGFBQWEsa0JBQUksOERBQUNILGlEQUFTOzs7O29CQUFHOzBCQUUvQiw4REFBQ1Qsa0RBQUk7Z0JBQUNzQixLQUFLLEVBQUMsUUFBUTtnQkFBQ08sRUFBRSxFQUFDLE1BQU07O2tDQUUxQiw4REFBQ3RCLCtEQUFnQjs7Ozs0QkFBRztrQ0FDcEIsOERBQUNDLDZDQUFPO3dCQUFDc0IsZUFBZSxFQUFFbEIsYUFBYTs7Ozs7NEJBQUk7Ozs7OztvQkFFeEM7Ozs7OztZQUNKLENBQ1Y7Q0FDSjtHQXhDZUYsTUFBTTs7UUFDQ0wsNEVBQWdCO1FBRWJGLGdFQUFrQjs7O0FBSDVCTyxLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3g/NDAwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbGV4LCBJY29uLCBJY29uQnV0dG9uLCB1c2VCcmVha3BvaW50VmFsdWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgUmlNZW51TGluZSB9IGZyb20gJ3JlYWN0LWljb25zL3JpJ1xuaW1wb3J0IHsgdXNlU2lkZWJhckRyYXdlciB9IGZyb20gJy4uL2NvbnRleHRzL1NpZGViYXJEcmF3ZXJDb250ZXh0J1xuaW1wb3J0IHsgTG9nbyB9IGZyb20gJy4vTG9nbydcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNOYXYgfSBmcm9tICcuL05vdGlmaWNhdGlvbnNOYXYnXG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSAnLi9Qcm9maWxlJ1xuaW1wb3J0IHsgU2VhcmNoQm94IH0gZnJvbSAnLi9TZWFyY2hCb3gnXG5cbmV4cG9ydCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gICAgY29uc3QgeyBvbk9wZW4gfSA9IHVzZVNpZGViYXJEcmF3ZXIoKVxuXG4gICAgY29uc3QgaXNXaWRlVmVyc2lvbiA9IHVzZUJyZWFrcG9pbnRWYWx1ZSh7XG4gICAgICAgIGJhc2U6IGZhbHNlLFxuICAgICAgICBsZzogdHJ1ZSxcbiAgICB9KVxuICAgIHJldHVybiAoXG4gICAgICAgIDxGbGV4XG4gICAgICAgICAgICBhcz1cImhlYWRlclwiXG4gICAgICAgICAgICB3PVwiMTAwJVwiXG4gICAgICAgICAgICBtYXhXaWR0aD17MTQ4MH1cbiAgICAgICAgICAgIGg9XCIyMFwiXG4gICAgICAgICAgICBteD1cImF1dG9cIlxuICAgICAgICAgICAgbXQ9XCI0XCJcbiAgICAgICAgICAgIHB4PVwiNlwiXG4gICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgID5cbiAgICAgICAgICAgIHshIGlzV2lkZVZlcnNpb24gJiYoXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b24gXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJPcGVuIG5hdmlnYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICBpY29uPXs8SWNvbiBhcz17UmlNZW51TGluZX0vPn1cbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCIyNFwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ1bnN0eWxlZFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgbXI9XCIyXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxMb2dvIC8+XG5cbiAgICAgICAgICAgIHtpc1dpZGVWZXJzaW9uICYmIDxTZWFyY2hCb3ggLz59XG5cbiAgICAgICAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCIgbWw9XCJhdXRvXCI+XG5cbiAgICAgICAgICAgICAgICA8Tm90aWZpY2F0aW9uc05hdiAvPlxuICAgICAgICAgICAgICAgIDxQcm9maWxlIHNob3dQcm9maWxlRGF0YT17aXNXaWRlVmVyc2lvbn0gLz5cblxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L0ZsZXg+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJGbGV4IiwiSWNvbiIsIkljb25CdXR0b24iLCJ1c2VCcmVha3BvaW50VmFsdWUiLCJSaU1lbnVMaW5lIiwidXNlU2lkZWJhckRyYXdlciIsIkxvZ28iLCJOb3RpZmljYXRpb25zTmF2IiwiUHJvZmlsZSIsIlNlYXJjaEJveCIsIkhlYWRlciIsIm9uT3BlbiIsImlzV2lkZVZlcnNpb24iLCJiYXNlIiwibGciLCJhcyIsInciLCJtYXhXaWR0aCIsImgiLCJteCIsIm10IiwicHgiLCJhbGlnbiIsImFyaWEtbGFiZWwiLCJpY29uIiwiZm9udFNpemUiLCJ2YXJpYW50Iiwib25DbGljayIsIm1yIiwibWwiLCJzaG93UHJvZmlsZURhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header/index.tsx\n");

/***/ })

});
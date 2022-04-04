"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/contexts/SidebarDrawerContext.tsx":
/*!**********************************************************!*\
  !*** ./src/components/contexts/SidebarDrawerContext.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SidebarDrawerProvider\": () => (/* binding */ SidebarDrawerProvider),\n/* harmony export */   \"useSidebarDrawer\": () => (/* binding */ useSidebarDrawer)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst SidebarDrawerContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)({});\nfunction SidebarDrawerProvider({ children  }) {\n    const disclosure = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useDisclosure)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        disclosure.onClose();\n    }, [\n        router.asPath\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SidebarDrawerContext.Provider, {\n        value: disclosure,\n        children: children\n    }, void 0, false, {\n        fileName: \"/var/www/html/RocketSeat/ReactJs/dashgo/src/components/contexts/SidebarDrawerContext.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n}\nconst useSidebarDrawer = ()=>(0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(SidebarDrawerContext)\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb250ZXh0cy9TaWRlYmFyRHJhd2VyQ29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXNFO0FBQzlCO0FBQ2dDO0FBUXhFLE1BQU1LLG9CQUFvQixpQkFBR0gsb0RBQWEsQ0FBQyxFQUFFLENBQTZCO0FBRW5FLFNBQVNJLHFCQUFxQixDQUFDLEVBQUVDLFFBQVEsR0FBOEIsRUFBRTtJQUM1RSxNQUFNQyxVQUFVLEdBQUdSLCtEQUFhLEVBQUU7SUFDbEMsTUFBTVMsTUFBTSxHQUFHUixzREFBUyxFQUFFO0lBRTFCRyxnREFBUyxDQUFFLElBQU07UUFDYkksVUFBVSxDQUFDRSxPQUFPLEVBQUU7S0FDdkIsRUFBRTtRQUFFRCxNQUFNLENBQUNFLE1BQU07S0FBQyxDQUFDO0lBRXBCLHFCQUNJLDhEQUFDTixvQkFBb0IsQ0FBQ08sUUFBUTtRQUFDQyxLQUFLLEVBQUVMLFVBQVU7a0JBQzNDRCxRQUFROzs7OztZQUNtQixDQUNuQztDQUNKO0FBRU0sTUFBTU8sZ0JBQWdCLEdBQUcsSUFBTVgsaURBQVUsQ0FBQ0Usb0JBQW9CLENBQUM7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Rhc2dvMS8uL3NyYy9jb21wb25lbnRzL2NvbnRleHRzL1NpZGViYXJEcmF3ZXJDb250ZXh0LnRzeD85ODZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZURpc2Nsb3N1cmUsIFVzZURpc2Nsb3N1cmVSZXR1cm4gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgU2lkZWJhckRyYXdlclByb3ZpZGVyUHJvcHMge1xuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGVcbn1cblxudHlwZSBTaWRlYmFyRHJhd2VyQ29udGV4dERhdGEgPSBVc2VEaXNjbG9zdXJlUmV0dXJuXG5cbmNvbnN0IFNpZGViYXJEcmF3ZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBTaWRlYmFyRHJhd2VyQ29udGV4dERhdGEpO1xuXG5leHBvcnQgZnVuY3Rpb24gU2lkZWJhckRyYXdlclByb3ZpZGVyKHsgY2hpbGRyZW4gfTogU2lkZWJhckRyYXdlclByb3ZpZGVyUHJvcHMpIHtcbiAgICBjb25zdCBkaXNjbG9zdXJlID0gdXNlRGlzY2xvc3VyZSgpXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICB1c2VFZmZlY3QgKCgpID0+IHtcbiAgICAgICAgZGlzY2xvc3VyZS5vbkNsb3NlKClcbiAgICB9LCBbIHJvdXRlci5hc1BhdGhdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFNpZGViYXJEcmF3ZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtkaXNjbG9zdXJlfT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9TaWRlYmFyRHJhd2VyQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG59XG5cbmV4cG9ydCBjb25zdCB1c2VTaWRlYmFyRHJhd2VyID0gKCkgPT4gdXNlQ29udGV4dChTaWRlYmFyRHJhd2VyQ29udGV4dCkiXSwibmFtZXMiOlsidXNlRGlzY2xvc3VyZSIsInVzZVJvdXRlciIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwiU2lkZWJhckRyYXdlckNvbnRleHQiLCJTaWRlYmFyRHJhd2VyUHJvdmlkZXIiLCJjaGlsZHJlbiIsImRpc2Nsb3N1cmUiLCJyb3V0ZXIiLCJvbkNsb3NlIiwiYXNQYXRoIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZVNpZGViYXJEcmF3ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/contexts/SidebarDrawerContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ \"./src/styles/theme.ts\");\n/* harmony import */ var _components_contexts_SidebarDrawerContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/contexts/SidebarDrawerContext */ \"./src/components/contexts/SidebarDrawerContext.tsx\");\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {\n        theme: _styles_theme__WEBPACK_IMPORTED_MODULE_2__.theme,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_contexts_SidebarDrawerContext__WEBPACK_IMPORTED_MODULE_3__.SidebarDrawerProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/var/www/html/RocketSeat/ReactJs/dashgo/src/pages/_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/var/www/html/RocketSeat/ReactJs/dashgo/src/pages/_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/var/www/html/RocketSeat/ReactJs/dashgo/src/pages/_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ2lEO0FBQ1Y7QUFDNEM7QUFFbkYsU0FBU0csS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFZLEVBQUU7SUFDakQscUJBQ0UsOERBQUNMLDREQUFjO1FBQUNDLEtBQUssRUFBRUEsZ0RBQUs7a0JBQzFCLDRFQUFDQyw0RkFBcUI7c0JBQ3BCLDRFQUFDRSxTQUFTO2dCQUFFLEdBQUdDLFNBQVM7Ozs7O29CQUFJOzs7OztnQkFDTjs7Ozs7WUFDVCxDQUNsQjtDQUVGO0FBRUQsaUVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNnbzEvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnXG5pbXBvcnQgeyBTaWRlYmFyRHJhd2VyUHJvdmlkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRleHRzL1NpZGViYXJEcmF3ZXJDb250ZXh0J1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPENoYWtyYVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8U2lkZWJhckRyYXdlclByb3ZpZGVyPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1NpZGViYXJEcmF3ZXJQcm92aWRlcj5cbiAgICA8L0NoYWtyYVByb3ZpZGVyPlxuICApXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJDaGFrcmFQcm92aWRlciIsInRoZW1lIiwiU2lkZWJhckRyYXdlclByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/theme.ts":
/*!*****************************!*\
  !*** ./src/styles/theme.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"theme\": () => (/* binding */ theme)\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({\n    colors: {\n        gray: {\n            \"900\": \"#181B23\",\n            \"800\": \"#1F2029\",\n            \"700\": \"#353646\",\n            \"600\": \"#4B4D63\",\n            \"500\": \"#616480\",\n            \"400\": \"#797D9A\",\n            \"300\": \"#9699B0\",\n            \"200\": \"#B3B5C6\",\n            \"100\": \"#D1D2DC\",\n            \"50\": \"#EEEEF2\"\n        }\n    },\n    fonts: {\n        heading: \"Roboto\",\n        body: \"Roboto\"\n    },\n    styles: {\n        global: {\n            body: {\n                bg: \"gray.900\",\n                color: \"gray.50\"\n            }\n        }\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3RoZW1lLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUV2QyxNQUFNQyxLQUFLLEdBQUdELDZEQUFXLENBQUM7SUFDN0JFLE1BQU0sRUFBRTtRQUNKQyxJQUFJLEVBQUU7WUFDRixLQUFLLEVBQUUsU0FBUztZQUNoQixLQUFLLEVBQUUsU0FBUztZQUNoQixLQUFLLEVBQUUsU0FBUztZQUNoQixLQUFLLEVBQUUsU0FBUztZQUNoQixLQUFLLEVBQUUsU0FBUztZQUNoQixLQUFLLEVBQUUsU0FBUztZQUNoQixLQUFLLEVBQUUsU0FBUztZQUNoQixLQUFLLEVBQUUsU0FBUztZQUNoQixLQUFLLEVBQUUsU0FBUztZQUNoQixJQUFJLEVBQUUsU0FBUztTQUNsQjtLQUNKO0lBQ0RDLEtBQUssRUFBQztRQUNGQyxPQUFPLEVBQUMsUUFBUTtRQUNoQkMsSUFBSSxFQUFDLFFBQVE7S0FDaEI7SUFFREMsTUFBTSxFQUFFO1FBQ0pDLE1BQU0sRUFBRTtZQUNKRixJQUFJLEVBQUU7Z0JBQ0ZHLEVBQUUsRUFBRSxVQUFVO2dCQUNkQyxLQUFLLEVBQUUsU0FBUzthQUNuQjtTQUNKO0tBQ0o7Q0FDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFzZ28xLy4vc3JjL3N0eWxlcy90aGVtZS50cz81MTYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4dGVuZFRoZW1lIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuZXhwb3J0IGNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoe1xuICAgIGNvbG9yczoge1xuICAgICAgICBncmF5OiB7XG4gICAgICAgICAgICBcIjkwMFwiOiBcIiMxODFCMjNcIixcbiAgICAgICAgICAgIFwiODAwXCI6IFwiIzFGMjAyOVwiLFxuICAgICAgICAgICAgXCI3MDBcIjogXCIjMzUzNjQ2XCIsXG4gICAgICAgICAgICBcIjYwMFwiOiBcIiM0QjRENjNcIixcbiAgICAgICAgICAgIFwiNTAwXCI6IFwiIzYxNjQ4MFwiLFxuICAgICAgICAgICAgXCI0MDBcIjogXCIjNzk3RDlBXCIsXG4gICAgICAgICAgICBcIjMwMFwiOiBcIiM5Njk5QjBcIixcbiAgICAgICAgICAgIFwiMjAwXCI6IFwiI0IzQjVDNlwiLFxuICAgICAgICAgICAgXCIxMDBcIjogXCIjRDFEMkRDXCIsXG4gICAgICAgICAgICBcIjUwXCI6IFwiI0VFRUVGMlwiLFxuICAgICAgICB9XG4gICAgfSxcbiAgICBmb250czp7XG4gICAgICAgIGhlYWRpbmc6J1JvYm90bycsXG4gICAgICAgIGJvZHk6J1JvYm90bycsXG4gICAgfSxcbiAgICBcbiAgICBzdHlsZXM6IHtcbiAgICAgICAgZ2xvYmFsOiB7XG4gICAgICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICAgICAgYmc6ICdncmF5LjkwMCcsXG4gICAgICAgICAgICAgICAgY29sb3I6ICdncmF5LjUwJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSkiXSwibmFtZXMiOlsiZXh0ZW5kVGhlbWUiLCJ0aGVtZSIsImNvbG9ycyIsImdyYXkiLCJmb250cyIsImhlYWRpbmciLCJib2R5Iiwic3R5bGVzIiwiZ2xvYmFsIiwiYmciLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/theme.ts\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
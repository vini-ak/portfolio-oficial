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

/***/ "./sections/contact/style.ts":
/*!***********************************!*\
  !*** ./sections/contact/style.ts ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ContactSection\": function() { return /* binding */ ContactSection; },\n/* harmony export */   \"FormContainer\": function() { return /* binding */ FormContainer; },\n/* harmony export */   \"FormField\": function() { return /* binding */ FormField; },\n/* harmony export */   \"ImageContainer\": function() { return /* binding */ ImageContainer; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _shared_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/colors */ \"./shared/colors.ts\");\n\n\nvar ContactSection = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"style__ContactSection\",\n  componentId: \"sc-1w4cpwx-0\"\n})([\"display:flex;padding-right:10vw;height:100vh;align-items:bottom;justify-content:space-between;\"]);\nvar ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"style__ImageContainer\",\n  componentId: \"sc-1w4cpwx-1\"\n})([\"position:relative;display:flex;overflow:hidden;width:41vw;max-width:700px;height:100%;& img{width:100% !important;}& > .social-media{position:absolute;bottom:15%;left:10vw;}\"]);\nvar FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"style__FormContainer\",\n  componentId: \"sc-1w4cpwx-2\"\n})([\"width:40vw;display:flex;flex-flow:column nowrap;justify-content:space-between;padding:10vh 0;& h1{margin-bottom:2rem;}& .button{margin-top:1rem;}\"]);\nvar FormField = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"style__FormField\",\n  componentId: \"sc-1w4cpwx-3\"\n})([\"& .input-label{color:\", \";margin-left:.4rem;margin-bottom:.75rem;font-size:.875rem;&.mandatory::after{content:'*';margin-left:.25rem;}}& > *{overflow:visible;}\"], _shared_colors__WEBPACK_IMPORTED_MODULE_0__[\"default\"].darkGrey);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZWN0aW9ucy9jb250YWN0L3N0eWxlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNRSxjQUFjLEdBQUdGLHdFQUFIO0FBQUE7QUFBQTtBQUFBLHNHQUFwQjtBQVFBLElBQU1JLGNBQWMsR0FBR0osd0VBQUg7QUFBQTtBQUFBO0FBQUEscUxBQXBCO0FBb0JBLElBQU1LLGFBQWEsR0FBR0wsd0VBQUg7QUFBQTtBQUFBO0FBQUEseUpBQW5CO0FBaUJBLElBQU1NLFNBQVMsR0FBR04sd0VBQUg7QUFBQTtBQUFBO0FBQUEsd0tBR0xDLCtEQUhLLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvY29udGFjdC9zdHlsZS50cz9hZjI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgQ29sb3JzIGZyb20gXCIuLi8uLi9zaGFyZWQvY29sb3JzXCI7XG5cbmV4cG9ydCBjb25zdCBDb250YWN0U2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYWxpZ24taXRlbXM6IGJvdHRvbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5gXG5cbmV4cG9ydCBjb25zdCBJbWFnZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogNDF2dztcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgICYgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICB9XG5cblxuICAgICYgPiAuc29jaWFsLW1lZGlhIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDE1JTtcbiAgICAgICAgbGVmdDogMTB2dztcbiAgICB9XG5gXG5cbmV4cG9ydCBjb25zdCBGb3JtQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogNDB2dztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMTB2aCAwO1xuXG4gICAgJiBoMSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgfVxuXG4gICAgJiAuYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICB9XG5cbmBcblxuZXhwb3J0IGNvbnN0IEZvcm1GaWVsZCA9IHN0eWxlZC5kaXZgXG5cbiAgICAmIC5pbnB1dC1sYWJlbCB7XG4gICAgICAgIGNvbG9yOiAke0NvbG9ycy5kYXJrR3JleX07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAuNHJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLjc1cmVtO1xuICAgICAgICBmb250LXNpemU6IC44NzVyZW07XG5cbiAgICAgICAgJi5tYW5kYXRvcnk6OmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcqJztcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAuMjVyZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmID4gKiB7XG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIH1cbmAiXSwibmFtZXMiOlsic3R5bGVkIiwiQ29sb3JzIiwiQ29udGFjdFNlY3Rpb24iLCJkaXYiLCJJbWFnZUNvbnRhaW5lciIsIkZvcm1Db250YWluZXIiLCJGb3JtRmllbGQiLCJkYXJrR3JleSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sections/contact/style.ts\n");

/***/ })

});
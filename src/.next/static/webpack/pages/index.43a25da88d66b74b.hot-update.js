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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ContactSection\": function() { return /* binding */ ContactSection; },\n/* harmony export */   \"FormContainer\": function() { return /* binding */ FormContainer; },\n/* harmony export */   \"FormField\": function() { return /* binding */ FormField; },\n/* harmony export */   \"ImageContainer\": function() { return /* binding */ ImageContainer; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _shared_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/colors */ \"./shared/colors.ts\");\n\n\nvar ContactSection = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"style__ContactSection\",\n  componentId: \"sc-1w4cpwx-0\"\n})([\"display:flex;padding-right:10vw;height:100vh;align-items:bottom;justify-content:space-between;\"]);\nvar ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"style__ImageContainer\",\n  componentId: \"sc-1w4cpwx-1\"\n})([\"position:relative;display:flex;align-items:end;justify-content:flex-end;overflow:hidden;width:41vw;max-width:700px;& > .social-media{position:absolute;bottom:15%;left:10vw;}\"]);\nvar FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"style__FormContainer\",\n  componentId: \"sc-1w4cpwx-2\"\n})([\"width:40vw;display:flex;flex-flow:column nowrap;justify-content:space-between;padding:10vh 0;& h1{margin-bottom:2rem;}& .button{margin-top:1rem;}\"]);\nvar FormField = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"style__FormField\",\n  componentId: \"sc-1w4cpwx-3\"\n})([\"& .input-label{color:\", \";margin-left:.4rem;margin-bottom:.75rem;font-size:.875rem;&.mandatory::after{content:'*';margin-left:.25rem;}}& > *{overflow:visible;}\"], _shared_colors__WEBPACK_IMPORTED_MODULE_0__[\"default\"].darkGrey);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZWN0aW9ucy9jb250YWN0L3N0eWxlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNRSxjQUFjLEdBQUdGLHdFQUFIO0FBQUE7QUFBQTtBQUFBLHNHQUFwQjtBQVFBLElBQU1JLGNBQWMsR0FBR0osd0VBQUg7QUFBQTtBQUFBO0FBQUEscUxBQXBCO0FBbUJBLElBQU1LLGFBQWEsR0FBR0wsd0VBQUg7QUFBQTtBQUFBO0FBQUEseUpBQW5CO0FBaUJBLElBQU1NLFNBQVMsR0FBR04sd0VBQUg7QUFBQTtBQUFBO0FBQUEsd0tBR0xDLCtEQUhLLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvY29udGFjdC9zdHlsZS50cz9hZjI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgQ29sb3JzIGZyb20gXCIuLi8uLi9zaGFyZWQvY29sb3JzXCI7XG5cbmV4cG9ydCBjb25zdCBDb250YWN0U2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYWxpZ24taXRlbXM6IGJvdHRvbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5gXG5cbmV4cG9ydCBjb25zdCBJbWFnZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGVuZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDQxdnc7XG4gICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXG5cblxuXG4gICAgJiA+IC5zb2NpYWwtbWVkaWEge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMTUlO1xuICAgICAgICBsZWZ0OiAxMHZ3O1xuICAgIH1cbmBcblxuZXhwb3J0IGNvbnN0IEZvcm1Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiA0MHZ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAxMHZoIDA7XG5cbiAgICAmIGgxIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICB9XG5cbiAgICAmIC5idXR0b24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIH1cblxuYFxuXG5leHBvcnQgY29uc3QgRm9ybUZpZWxkID0gc3R5bGVkLmRpdmBcblxuICAgICYgLmlucHV0LWxhYmVsIHtcbiAgICAgICAgY29sb3I6ICR7Q29sb3JzLmRhcmtHcmV5fTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC40cmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAuNzVyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogLjg3NXJlbTtcblxuICAgICAgICAmLm1hbmRhdG9yeTo6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogJyonO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC4yNXJlbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgPiAqIHtcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgfVxuYCJdLCJuYW1lcyI6WyJzdHlsZWQiLCJDb2xvcnMiLCJDb250YWN0U2VjdGlvbiIsImRpdiIsIkltYWdlQ29udGFpbmVyIiwiRm9ybUNvbnRhaW5lciIsIkZvcm1GaWVsZCIsImRhcmtHcmV5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sections/contact/style.ts\n");

/***/ })

});
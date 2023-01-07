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

/***/ "./sections/initial/style.ts":
/*!***********************************!*\
  !*** ./sections/initial/style.ts ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Description\": function() { return /* binding */ Description; },\n/* harmony export */   \"DescriptionText\": function() { return /* binding */ DescriptionText; },\n/* harmony export */   \"ImageContainer\": function() { return /* binding */ ImageContainer; },\n/* harmony export */   \"InitialSection\": function() { return /* binding */ InitialSection; },\n/* harmony export */   \"Name\": function() { return /* binding */ Name; },\n/* harmony export */   \"NameWrapper\": function() { return /* binding */ NameWrapper; },\n/* harmony export */   \"PurpleBall\": function() { return /* binding */ PurpleBall; },\n/* harmony export */   \"RoundedBorderSquare\": function() { return /* binding */ RoundedBorderSquare; },\n/* harmony export */   \"SocialMediaContainer\": function() { return /* binding */ SocialMediaContainer; },\n/* harmony export */   \"Subtitle\": function() { return /* binding */ Subtitle; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _shared_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/colors */ \"./shared/colors.ts\");\n\n\nvar InitialSection = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"style__InitialSection\",\n  componentId: \"sc-jet2je-0\"\n})([\"width:100%;display:flex;flex-flow:row wrap;justify-content:space-between;align-items:start;position:relative;margin-bottom:60px;& > *{display:block;}\"]);\nvar Description = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"style__Description\",\n  componentId: \"sc-jet2je-1\"\n})([\"width:470px;height:100vh;display:flex;flex-flow:column nowrap;justify-content:center;margin-left:10vw;@media only screen and (min-width:1920px){margin-left:0;}\"]);\nvar PurpleBall = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"style__PurpleBall\",\n  componentId: \"sc-jet2je-2\"\n})([\"border-radius:50%;width:calc(100px + 10vw);height:calc(100px + 10vw);background:rgba(62,6,136,1) 0% 0% no-repeat padding-box;opacity:0.29;position:absolute !important;bottom:0;left:-5vw;@media only screen and (min-width:1920px){top:calc(90vh - calc(200px + 5vw));right:calc(calc(200px + 10vw) + 5%);}\"]);\nvar RoundedBorderSquare = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"style__RoundedBorderSquare\",\n  componentId: \"sc-jet2je-3\"\n})([\"width:8.5rem;height:3rem;border-radius:60px 0px 60px 0px;background-color:\", \";margin-left:16px;\"], _shared_colors__WEBPACK_IMPORTED_MODULE_0__[\"default\"].primaryBlue);\nvar NameWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"style__NameWrapper\",\n  componentId: \"sc-jet2je-4\"\n})([\"width:100%;display:flex;flex-flow:row nowrap;align-items:center;justify-content:space-between;\"]);\nvar Name = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h1.withConfig({\n  displayName: \"style__Name\",\n  componentId: \"sc-jet2je-5\"\n})([\"font-size:3rem;font-weight:bold;\"]);\nvar Subtitle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h3.withConfig({\n  displayName: \"style__Subtitle\",\n  componentId: \"sc-jet2je-6\"\n})([\"font-size:2.5rem;font-weight:800;\"]);\nvar DescriptionText = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].p.withConfig({\n  displayName: \"style__DescriptionText\",\n  componentId: \"sc-jet2je-7\"\n})([\"font-size:1rem;margin:1rem 0;\"]);\nvar SocialMediaContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"style__SocialMediaContainer\",\n  componentId: \"sc-jet2je-8\"\n})([\"margin-left:-0.75rem;margin-top:1rem;\"]);\nvar ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"style__ImageContainer\",\n  componentId: \"sc-jet2je-9\"\n})([\"position:relative;overflow:visible;width:45vw;\"]);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZWN0aW9ucy9pbml0aWFsL3N0eWxlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNRSxjQUFjLEdBQUdGLHdFQUFIO0FBQUE7QUFBQTtBQUFBLDZKQUFwQjtBQW9CQSxJQUFNSSxXQUFXLEdBQUdKLHdFQUFIO0FBQUE7QUFBQTtBQUFBLHVLQUFqQjtBQWFBLElBQU1LLFVBQVUsR0FBR0wsd0VBQUg7QUFBQTtBQUFBO0FBQUEsb1RBQWhCO0FBZ0JBLElBQU1NLG1CQUFtQixHQUFHTix3RUFBSDtBQUFBO0FBQUE7QUFBQSx5R0FJUkMsa0VBSlEsQ0FBekI7QUFRQSxJQUFNTyxXQUFXLEdBQUdSLHdFQUFIO0FBQUE7QUFBQTtBQUFBLHNHQUFqQjtBQVFBLElBQU1TLElBQUksR0FBR1QsdUVBQUg7QUFBQTtBQUFBO0FBQUEsd0NBQVY7QUFLQSxJQUFNVyxRQUFRLEdBQUdYLHVFQUFIO0FBQUE7QUFBQTtBQUFBLHlDQUFkO0FBS0EsSUFBTWEsZUFBZSxHQUFHYixzRUFBSDtBQUFBO0FBQUE7QUFBQSxxQ0FBckI7QUFLQSxJQUFNZSxvQkFBb0IsR0FBR2Ysd0VBQUg7QUFBQTtBQUFBO0FBQUEsNkNBQTFCO0FBS0EsSUFBTWdCLGNBQWMsR0FBR2hCLHdFQUFIO0FBQUE7QUFBQTtBQUFBLHNEQUFwQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zZWN0aW9ucy9pbml0aWFsL3N0eWxlLnRzP2I4OGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBDb2xvcnMgZnJvbSBcIi4uLy4uL3NoYXJlZC9jb2xvcnNcIjtcblxuZXhwb3J0IGNvbnN0IEluaXRpYWxTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICAvKiBoZWlnaHQ6IDg1aDsgKi9cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcblxuICAgICYgPiAqIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLyogQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjE5MjBweCkge1xuICAgICAgICBoZWlnaHQ6IDkwdmg7XG4gICAgfSAqL1xuXG5gXG5cbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZC5kaXZgXG4gICAgd2lkdGg6IDQ3MHB4O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDEwdnc7XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTkyMHB4KSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cbmBcblxuZXhwb3J0IGNvbnN0IFB1cnBsZUJhbGwgPSBzdHlsZWQuZGl2YFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogY2FsYygxMDBweCArIDEwdncpO1xuICAgIGhlaWdodDogY2FsYygxMDBweCArIDEwdncpO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoNjIsIDYsIDEzNiwgMSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgIG9wYWNpdHk6IDAuMjk7XG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IC01dnc7XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTkyMHB4KSB7XG4gICAgICAgIHRvcDogY2FsYyg5MHZoIC0gY2FsYygyMDBweCArIDV2dykpO1xuICAgICAgICByaWdodDogY2FsYyhjYWxjKDIwMHB4ICsgMTB2dykgKyA1JSk7XG4gICAgfVxuYFxuXG5leHBvcnQgY29uc3QgUm91bmRlZEJvcmRlclNxdWFyZSA9IHN0eWxlZC5kaXZgXG4gICAgd2lkdGg6IDguNXJlbTtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNjBweCAwcHggNjBweCAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtDb2xvcnMucHJpbWFyeUJsdWV9O1xuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuYFxuXG5leHBvcnQgY29uc3QgTmFtZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYFxuXG5leHBvcnQgY29uc3QgTmFtZSA9IHN0eWxlZC5oMWBcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5gO1xuXG5leHBvcnQgY29uc3QgU3VidGl0bGUgPSBzdHlsZWQuaDNgXG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbmBcblxuZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uVGV4dCA9IHN0eWxlZC5wYFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBtYXJnaW46IDFyZW0gMDtcbmBcblxuZXhwb3J0IGNvbnN0IFNvY2lhbE1lZGlhQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICBtYXJnaW4tbGVmdDogLTAuNzVyZW07XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbmBcblxuZXhwb3J0IGNvbnN0IEltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgd2lkdGg6IDQ1dnc7XG5gIl0sIm5hbWVzIjpbInN0eWxlZCIsIkNvbG9ycyIsIkluaXRpYWxTZWN0aW9uIiwiZGl2IiwiRGVzY3JpcHRpb24iLCJQdXJwbGVCYWxsIiwiUm91bmRlZEJvcmRlclNxdWFyZSIsInByaW1hcnlCbHVlIiwiTmFtZVdyYXBwZXIiLCJOYW1lIiwiaDEiLCJTdWJ0aXRsZSIsImgzIiwiRGVzY3JpcHRpb25UZXh0IiwicCIsIlNvY2lhbE1lZGlhQ29udGFpbmVyIiwiSW1hZ2VDb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sections/initial/style.ts\n");

/***/ })

});
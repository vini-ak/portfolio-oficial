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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Description\": function() { return /* binding */ Description; },\n/* harmony export */   \"DescriptionText\": function() { return /* binding */ DescriptionText; },\n/* harmony export */   \"ImageContainer\": function() { return /* binding */ ImageContainer; },\n/* harmony export */   \"InitialSection\": function() { return /* binding */ InitialSection; },\n/* harmony export */   \"Name\": function() { return /* binding */ Name; },\n/* harmony export */   \"NameWrapper\": function() { return /* binding */ NameWrapper; },\n/* harmony export */   \"PurpleBall\": function() { return /* binding */ PurpleBall; },\n/* harmony export */   \"RoundedBorderSquare\": function() { return /* binding */ RoundedBorderSquare; },\n/* harmony export */   \"SocialMediaContainer\": function() { return /* binding */ SocialMediaContainer; },\n/* harmony export */   \"Subtitle\": function() { return /* binding */ Subtitle; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _shared_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/colors */ \"./shared/colors.ts\");\n\n\nvar InitialSection = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"style__InitialSection\",\n  componentId: \"sc-jet2je-0\"\n})([\"width:100%;display:flex;flex-flow:row wrap;justify-content:space-between;align-items:start;position:relative;margin-bottom:60px;& > *{display:block;}\"]);\nvar Description = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"style__Description\",\n  componentId: \"sc-jet2je-1\"\n})([\"width:470px;height:100vh;display:flex;flex-flow:column nowrap;justify-content:center;margin-left:10vw;\"]);\nvar PurpleBall = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"style__PurpleBall\",\n  componentId: \"sc-jet2je-2\"\n})([\"border-radius:50%;width:calc(100px + 10vw);height:calc(100px + 10vw);background:rgba(62,6,136,1) 0% 0% no-repeat padding-box;opacity:0.29;position:absolute !important;bottom:0;left:calc(-60px - 1vw);\"]);\nvar RoundedBorderSquare = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"style__RoundedBorderSquare\",\n  componentId: \"sc-jet2je-3\"\n})([\"width:8.5rem;height:3rem;border-radius:60px 0px 60px 0px;background-color:\", \";margin-left:16px;\"], _shared_colors__WEBPACK_IMPORTED_MODULE_0__[\"default\"].primaryBlue);\nvar NameWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"style__NameWrapper\",\n  componentId: \"sc-jet2je-4\"\n})([\"width:100%;display:flex;flex-flow:row nowrap;align-items:center;justify-content:space-between;\"]);\nvar Name = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h1.withConfig({\n  displayName: \"style__Name\",\n  componentId: \"sc-jet2je-5\"\n})([\"font-size:3rem;font-weight:bold;\"]);\nvar Subtitle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h3.withConfig({\n  displayName: \"style__Subtitle\",\n  componentId: \"sc-jet2je-6\"\n})([\"font-size:2.5rem;font-weight:800;\"]);\nvar DescriptionText = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].p.withConfig({\n  displayName: \"style__DescriptionText\",\n  componentId: \"sc-jet2je-7\"\n})([\"font-size:1rem;margin:1rem 0;\"]);\nvar SocialMediaContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"style__SocialMediaContainer\",\n  componentId: \"sc-jet2je-8\"\n})([\"margin-left:-0.75rem;margin-top:1rem;\"]);\nvar ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"style__ImageContainer\",\n  componentId: \"sc-jet2je-9\"\n})([\"position:relative;overflow:visible;display:flex;align-items:end;justify-content:flex-end;width:41vw;\"]);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZWN0aW9ucy9pbml0aWFsL3N0eWxlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNRSxjQUFjLEdBQUdGLHdFQUFIO0FBQUE7QUFBQTtBQUFBLDZKQUFwQjtBQW9CQSxJQUFNSSxXQUFXLEdBQUdKLHdFQUFIO0FBQUE7QUFBQTtBQUFBLDhHQUFqQjtBQWFBLElBQU1LLFVBQVUsR0FBR0wsd0VBQUg7QUFBQTtBQUFBO0FBQUEsK01BQWhCO0FBZ0JBLElBQU1NLG1CQUFtQixHQUFHTix3RUFBSDtBQUFBO0FBQUE7QUFBQSx5R0FJUkMsa0VBSlEsQ0FBekI7QUFRQSxJQUFNTyxXQUFXLEdBQUdSLHdFQUFIO0FBQUE7QUFBQTtBQUFBLHNHQUFqQjtBQVFBLElBQU1TLElBQUksR0FBR1QsdUVBQUg7QUFBQTtBQUFBO0FBQUEsd0NBQVY7QUFLQSxJQUFNVyxRQUFRLEdBQUdYLHVFQUFIO0FBQUE7QUFBQTtBQUFBLHlDQUFkO0FBS0EsSUFBTWEsZUFBZSxHQUFHYixzRUFBSDtBQUFBO0FBQUE7QUFBQSxxQ0FBckI7QUFLQSxJQUFNZSxvQkFBb0IsR0FBR2Ysd0VBQUg7QUFBQTtBQUFBO0FBQUEsNkNBQTFCO0FBS0EsSUFBTWdCLGNBQWMsR0FBR2hCLHdFQUFIO0FBQUE7QUFBQTtBQUFBLDRHQUFwQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zZWN0aW9ucy9pbml0aWFsL3N0eWxlLnRzP2I4OGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBDb2xvcnMgZnJvbSBcIi4uLy4uL3NoYXJlZC9jb2xvcnNcIjtcblxuZXhwb3J0IGNvbnN0IEluaXRpYWxTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICAvKiBoZWlnaHQ6IDg1aDsgKi9cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcblxuICAgICYgPiAqIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLyogQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjE5MjBweCkge1xuICAgICAgICBoZWlnaHQ6IDkwdmg7XG4gICAgfSAqL1xuXG5gXG5cbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZC5kaXZgXG4gICAgd2lkdGg6IDQ3MHB4O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDEwdnc7XG5cbiAgICAvKiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTkyMHB4KSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH0gKi9cbmBcblxuZXhwb3J0IGNvbnN0IFB1cnBsZUJhbGwgPSBzdHlsZWQuZGl2YFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogY2FsYygxMDBweCArIDEwdncpO1xuICAgIGhlaWdodDogY2FsYygxMDBweCArIDEwdncpO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoNjIsIDYsIDEzNiwgMSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgIG9wYWNpdHk6IDAuMjk7XG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IGNhbGMoLTYwcHggLSAxdncpO1xuXG4gICAgLyogQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjE5MjBweCkge1xuICAgICAgICB0b3A6IGNhbGMoOTB2aCAtIGNhbGMoMjAwcHggKyA1dncpKTtcbiAgICAgICAgcmlnaHQ6IGNhbGMoY2FsYygyMDBweCArIDEwdncpICsgNSUpO1xuICAgIH0gKi9cbmBcblxuZXhwb3J0IGNvbnN0IFJvdW5kZWRCb3JkZXJTcXVhcmUgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiA4LjVyZW07XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDYwcHggMHB4IDYwcHggMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Q29sb3JzLnByaW1hcnlCbHVlfTtcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcbmBcblxuZXhwb3J0IGNvbnN0IE5hbWVXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmBcblxuZXhwb3J0IGNvbnN0IE5hbWUgPSBzdHlsZWQuaDFgXG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuYDtcblxuZXhwb3J0IGNvbnN0IFN1YnRpdGxlID0gc3R5bGVkLmgzYFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG5gXG5cbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvblRleHQgPSBzdHlsZWQucGBcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbWFyZ2luOiAxcmVtIDA7XG5gXG5cbmV4cG9ydCBjb25zdCBTb2NpYWxNZWRpYUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgbWFyZ2luLWxlZnQ6IC0wLjc1cmVtO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG5gXG5cbmV4cG9ydCBjb25zdCBJbWFnZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGVuZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHdpZHRoOiA0MXZ3O1xuYCJdLCJuYW1lcyI6WyJzdHlsZWQiLCJDb2xvcnMiLCJJbml0aWFsU2VjdGlvbiIsImRpdiIsIkRlc2NyaXB0aW9uIiwiUHVycGxlQmFsbCIsIlJvdW5kZWRCb3JkZXJTcXVhcmUiLCJwcmltYXJ5Qmx1ZSIsIk5hbWVXcmFwcGVyIiwiTmFtZSIsImgxIiwiU3VidGl0bGUiLCJoMyIsIkRlc2NyaXB0aW9uVGV4dCIsInAiLCJTb2NpYWxNZWRpYUNvbnRhaW5lciIsIkltYWdlQ29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sections/initial/style.ts\n");

/***/ })

});
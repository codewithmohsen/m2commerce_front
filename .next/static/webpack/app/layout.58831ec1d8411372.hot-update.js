"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/features/counter/counterSlice.tsx":
/*!***************************************************!*\
  !*** ./src/app/features/counter/counterSlice.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   counterSlice: function() { return /* binding */ counterSlice; },\n/* harmony export */   decrement: function() { return /* binding */ decrement; },\n/* harmony export */   increment: function() { return /* binding */ increment; },\n/* harmony export */   incrementByAmount: function() { return /* binding */ incrementByAmount; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst [state, setstate] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n    function getInitialState() {\n        return localStorage.getItem(\"CounterState\") || \"\";\n    }\n    setstate(getInitialState());\n}, []);\nconst initialState = {\n    //value: 0,\n    value: state\n};\nconst counterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"counter\",\n    initialState,\n    reducers: {\n        increment: (state)=>{\n            // Redux Toolkit allows us to write \"mutating\" logic in reducers. It\n            // doesn't actually mutate the state because it uses the Immer library,\n            // which detects changes to a \"draft state\" and produces a brand new\n            // immutable state based off those changes\n            state.value += 1;\n        },\n        decrement: (state)=>{\n            state.value -= 1;\n        },\n        incrementByAmount: (state, action)=>{\n            state.value += action.payload;\n        }\n    }\n});\n// Action creators are generated for each case reducer function\nconst { increment, decrement, incrementByAmount } = counterSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (counterSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZmVhdHVyZXMvY291bnRlci9jb3VudGVyU2xpY2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDOEM7QUFFRjtBQUU1QyxNQUFNLENBQUNHLE9BQU9DLFNBQVMsR0FBR0YsK0NBQVFBO0FBQ2xDRCxnREFBU0EsQ0FBQztJQUNOLFNBQVNJO1FBQ0wsT0FBT0MsYUFBYUMsT0FBTyxDQUFDLG1CQUFtQjtJQUNuRDtJQUNBSCxTQUFTQztBQUNiLEdBQUcsRUFBRTtBQU1MLE1BQU1HLGVBQTZCO0lBRS9CLFdBQVc7SUFDWEMsT0FBT047QUFDWDtBQUVPLE1BQU1PLGVBQWVWLDZEQUFXQSxDQUFDO0lBQ3BDVyxNQUFNO0lBQ05IO0lBQ0FJLFVBQVU7UUFDTkMsV0FBVyxDQUFDVjtZQUNSLG9FQUFvRTtZQUNwRSx1RUFBdUU7WUFDdkUsb0VBQW9FO1lBQ3BFLDBDQUEwQztZQUMxQ0EsTUFBTU0sS0FBSyxJQUFJO1FBQ25CO1FBQ0FLLFdBQVcsQ0FBQ1g7WUFDUkEsTUFBTU0sS0FBSyxJQUFJO1FBQ25CO1FBQ0FNLG1CQUFtQixDQUFDWixPQUFPYTtZQUN2QmIsTUFBTU0sS0FBSyxJQUFJTyxPQUFPQyxPQUFPO1FBQ2pDO0lBQ0o7QUFDSixHQUFFO0FBRUYsK0RBQStEO0FBQ3hELE1BQU0sRUFBRUosU0FBUyxFQUFFQyxTQUFTLEVBQUVDLGlCQUFpQixFQUFFLEdBQUdMLGFBQWFRLE9BQU87QUFFL0UsK0RBQWVSLGFBQWFTLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9mZWF0dXJlcy9jb3VudGVyL2NvdW50ZXJTbGljZS50c3g/NTdiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcbmltcG9ydCB0eXBlIHsgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBbc3RhdGUsIHNldHN0YXRlXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcbnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0NvdW50ZXJTdGF0ZScpIHx8ICcnO1xuICAgIH1cbiAgICBzZXRzdGF0ZShnZXRJbml0aWFsU3RhdGUoKSk7XG59LCBbXSk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ291bnRlclN0YXRlIHtcbiAgICB2YWx1ZTogbnVtYmVyXG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogQ291bnRlclN0YXRlID0ge1xuXG4gICAgLy92YWx1ZTogMCxcbiAgICB2YWx1ZTogc3RhdGVcbn1cblxuZXhwb3J0IGNvbnN0IGNvdW50ZXJTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgICBuYW1lOiAnY291bnRlcicsXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIHJlZHVjZXJzOiB7XG4gICAgICAgIGluY3JlbWVudDogKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAvLyBSZWR1eCBUb29sa2l0IGFsbG93cyB1cyB0byB3cml0ZSBcIm11dGF0aW5nXCIgbG9naWMgaW4gcmVkdWNlcnMuIEl0XG4gICAgICAgICAgICAvLyBkb2Vzbid0IGFjdHVhbGx5IG11dGF0ZSB0aGUgc3RhdGUgYmVjYXVzZSBpdCB1c2VzIHRoZSBJbW1lciBsaWJyYXJ5LFxuICAgICAgICAgICAgLy8gd2hpY2ggZGV0ZWN0cyBjaGFuZ2VzIHRvIGEgXCJkcmFmdCBzdGF0ZVwiIGFuZCBwcm9kdWNlcyBhIGJyYW5kIG5ld1xuICAgICAgICAgICAgLy8gaW1tdXRhYmxlIHN0YXRlIGJhc2VkIG9mZiB0aG9zZSBjaGFuZ2VzXG4gICAgICAgICAgICBzdGF0ZS52YWx1ZSArPSAxXG4gICAgICAgIH0sXG4gICAgICAgIGRlY3JlbWVudDogKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS52YWx1ZSAtPSAxXG4gICAgICAgIH0sXG4gICAgICAgIGluY3JlbWVudEJ5QW1vdW50OiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXI+KSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS52YWx1ZSArPSBhY3Rpb24ucGF5bG9hZFxuICAgICAgICB9LFxuICAgIH0sXG59KVxuXG4vLyBBY3Rpb24gY3JlYXRvcnMgYXJlIGdlbmVyYXRlZCBmb3IgZWFjaCBjYXNlIHJlZHVjZXIgZnVuY3Rpb25cbmV4cG9ydCBjb25zdCB7IGluY3JlbWVudCwgZGVjcmVtZW50LCBpbmNyZW1lbnRCeUFtb3VudCB9ID0gY291bnRlclNsaWNlLmFjdGlvbnNcblxuZXhwb3J0IGRlZmF1bHQgY291bnRlclNsaWNlLnJlZHVjZXIiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0YXRlIiwic2V0c3RhdGUiLCJnZXRJbml0aWFsU3RhdGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaW5pdGlhbFN0YXRlIiwidmFsdWUiLCJjb3VudGVyU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJpbmNyZW1lbnQiLCJkZWNyZW1lbnQiLCJpbmNyZW1lbnRCeUFtb3VudCIsImFjdGlvbiIsInBheWxvYWQiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/features/counter/counterSlice.tsx\n"));

/***/ })

});
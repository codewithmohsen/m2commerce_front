"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/counter/page",{

/***/ "(app-pages-browser)/./src/app/features/counter/counterSlice.tsx":
/*!***************************************************!*\
  !*** ./src/app/features/counter/counterSlice.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   counterSlice: function() { return /* binding */ counterSlice; },\n/* harmony export */   decrement: function() { return /* binding */ decrement; },\n/* harmony export */   increment: function() { return /* binding */ increment; },\n/* harmony export */   incrementByAmount: function() { return /* binding */ incrementByAmount; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst [state, setstate] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n    function getInitialState() {\n        return +(localStorage.getItem(\"CounterState\") || 0);\n    }\n    setstate(getInitialState());\n}, []);\nconst initialState = {\n    //value: 0,\n    value: state\n};\nconst counterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"counter\",\n    initialState,\n    reducers: {\n        increment: (state)=>{\n            // Redux Toolkit allows us to write \"mutating\" logic in reducers. It\n            // doesn't actually mutate the state because it uses the Immer library,\n            // which detects changes to a \"draft state\" and produces a brand new\n            // immutable state based off those changes\n            state.value += 1;\n        },\n        decrement: (state)=>{\n            state.value -= 1;\n        },\n        incrementByAmount: (state, action)=>{\n            state.value += action.payload;\n        }\n    }\n});\n// Action creators are generated for each case reducer function\nconst { increment, decrement, incrementByAmount } = counterSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (counterSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZmVhdHVyZXMvY291bnRlci9jb3VudGVyU2xpY2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDOEM7QUFFRjtBQUU1QyxNQUFNLENBQUNHLE9BQU9DLFNBQVMsR0FBR0YsK0NBQVFBLENBQVM7QUFDM0NELGdEQUFTQSxDQUFDO0lBQ04sU0FBU0k7UUFDTCxPQUFPLENBQUVDLENBQUFBLGFBQWFDLE9BQU8sQ0FBQyxtQkFBbUI7SUFDckQ7SUFDQUgsU0FBU0M7QUFDYixHQUFHLEVBQUU7QUFNTCxNQUFNRyxlQUE2QjtJQUUvQixXQUFXO0lBQ1hDLE9BQU9OO0FBQ1g7QUFFTyxNQUFNTyxlQUFlViw2REFBV0EsQ0FBQztJQUNwQ1csTUFBTTtJQUNOSDtJQUNBSSxVQUFVO1FBQ05DLFdBQVcsQ0FBQ1Y7WUFDUixvRUFBb0U7WUFDcEUsdUVBQXVFO1lBQ3ZFLG9FQUFvRTtZQUNwRSwwQ0FBMEM7WUFDMUNBLE1BQU1NLEtBQUssSUFBSTtRQUNuQjtRQUNBSyxXQUFXLENBQUNYO1lBQ1JBLE1BQU1NLEtBQUssSUFBSTtRQUNuQjtRQUNBTSxtQkFBbUIsQ0FBQ1osT0FBT2E7WUFDdkJiLE1BQU1NLEtBQUssSUFBSU8sT0FBT0MsT0FBTztRQUNqQztJQUNKO0FBQ0osR0FBRTtBQUVGLCtEQUErRDtBQUN4RCxNQUFNLEVBQUVKLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxpQkFBaUIsRUFBRSxHQUFHTCxhQUFhUSxPQUFPO0FBRS9FLCtEQUFlUixhQUFhUyxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZmVhdHVyZXMvY291bnRlci9jb3VudGVyU2xpY2UudHN4PzU3YmEiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXG5pbXBvcnQgdHlwZSB7IFBheWxvYWRBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgW3N0YXRlLCBzZXRzdGF0ZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xudXNlRWZmZWN0KCgpID0+IHtcbiAgICBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICAgIHJldHVybiArKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdDb3VudGVyU3RhdGUnKSB8fCAwKTtcbiAgICB9XG4gICAgc2V0c3RhdGUoZ2V0SW5pdGlhbFN0YXRlKCkpO1xufSwgW10pO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvdW50ZXJTdGF0ZSB7XG4gICAgdmFsdWU6IG51bWJlclxufVxuXG5jb25zdCBpbml0aWFsU3RhdGU6IENvdW50ZXJTdGF0ZSA9IHtcblxuICAgIC8vdmFsdWU6IDAsXG4gICAgdmFsdWU6IHN0YXRlXG59XG5cbmV4cG9ydCBjb25zdCBjb3VudGVyU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogJ2NvdW50ZXInLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICByZWR1Y2Vyczoge1xuICAgICAgICBpbmNyZW1lbnQ6IChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgLy8gUmVkdXggVG9vbGtpdCBhbGxvd3MgdXMgdG8gd3JpdGUgXCJtdXRhdGluZ1wiIGxvZ2ljIGluIHJlZHVjZXJzLiBJdFxuICAgICAgICAgICAgLy8gZG9lc24ndCBhY3R1YWxseSBtdXRhdGUgdGhlIHN0YXRlIGJlY2F1c2UgaXQgdXNlcyB0aGUgSW1tZXIgbGlicmFyeSxcbiAgICAgICAgICAgIC8vIHdoaWNoIGRldGVjdHMgY2hhbmdlcyB0byBhIFwiZHJhZnQgc3RhdGVcIiBhbmQgcHJvZHVjZXMgYSBicmFuZCBuZXdcbiAgICAgICAgICAgIC8vIGltbXV0YWJsZSBzdGF0ZSBiYXNlZCBvZmYgdGhvc2UgY2hhbmdlc1xuICAgICAgICAgICAgc3RhdGUudmFsdWUgKz0gMVxuICAgICAgICB9LFxuICAgICAgICBkZWNyZW1lbnQ6IChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgc3RhdGUudmFsdWUgLT0gMVxuICAgICAgICB9LFxuICAgICAgICBpbmNyZW1lbnRCeUFtb3VudDogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyPikgPT4ge1xuICAgICAgICAgICAgc3RhdGUudmFsdWUgKz0gYWN0aW9uLnBheWxvYWRcbiAgICAgICAgfSxcbiAgICB9LFxufSlcblxuLy8gQWN0aW9uIGNyZWF0b3JzIGFyZSBnZW5lcmF0ZWQgZm9yIGVhY2ggY2FzZSByZWR1Y2VyIGZ1bmN0aW9uXG5leHBvcnQgY29uc3QgeyBpbmNyZW1lbnQsIGRlY3JlbWVudCwgaW5jcmVtZW50QnlBbW91bnQgfSA9IGNvdW50ZXJTbGljZS5hY3Rpb25zXG5cbmV4cG9ydCBkZWZhdWx0IGNvdW50ZXJTbGljZS5yZWR1Y2VyIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldHN0YXRlIiwiZ2V0SW5pdGlhbFN0YXRlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImluaXRpYWxTdGF0ZSIsInZhbHVlIiwiY291bnRlclNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiaW5jcmVtZW50IiwiZGVjcmVtZW50IiwiaW5jcmVtZW50QnlBbW91bnQiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/features/counter/counterSlice.tsx\n"));

/***/ })

});
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/board/create"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fhongseungjae%2FDesktop%2Flearning.js%2Fcodinghub%2Fsrc%2Fpages%2Fboard%2Fcreate%2Findex.tsx&page=%2Fboard%2Fcreate!":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fhongseungjae%2FDesktop%2Flearning.js%2Fcodinghub%2Fsrc%2Fpages%2Fboard%2Fcreate%2Findex.tsx&page=%2Fboard%2Fcreate! ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/board/create\",\n      function () {\n        return __webpack_require__(/*! ./src/pages/board/create/index.tsx */ \"./src/pages/board/create/index.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/board/create\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRmhvbmdzZXVuZ2phZSUyRkRlc2t0b3AlMkZsZWFybmluZy5qcyUyRmNvZGluZ2h1YiUyRnNyYyUyRnBhZ2VzJTJGYm9hcmQlMkZjcmVhdGUlMkZpbmRleC50c3gmcGFnZT0lMkZib2FyZCUyRmNyZWF0ZSEiLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyw4RUFBb0M7QUFDM0Q7QUFDQTtBQUNBLE9BQU8sSUFBVTtBQUNqQixNQUFNLFVBQVU7QUFDaEI7QUFDQSxPQUFPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvPzhkZjAiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9ib2FyZC9jcmVhdGVcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCIuL3NyYy9wYWdlcy9ib2FyZC9jcmVhdGUvaW5kZXgudHN4XCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5fX05FWFRfUC5wdXNoKFtcIi9ib2FyZC9jcmVhdGVcIl0pXG4gICAgICB9KTtcbiAgICB9XG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fhongseungjae%2FDesktop%2Flearning.js%2Fcodinghub%2Fsrc%2Fpages%2Fboard%2Fcreate%2Findex.tsx&page=%2Fboard%2Fcreate!\n"));

/***/ }),

/***/ "./src/atom.tsx":
/*!**********************!*\
  !*** ./src/atom.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   postStore: function() { return /* binding */ postStore; }\n/* harmony export */ });\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var recoil_persist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil-persist */ \"./node_modules/recoil-persist/dist/index.js\");\n\n\nconst localStorage =  true ? window.localStorage : 0;\nconst { persistAtom } = (0,recoil_persist__WEBPACK_IMPORTED_MODULE_1__.recoilPersist)({\n    key: \"post\",\n    storage: localStorage\n});\nconst postStore = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n    key: \"postStore\",\n    default: [],\n    effects_UNSTABLE: [\n        persistAtom\n    ]\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXRvbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThCO0FBQ2lCO0FBRS9DLE1BQU1FLGVBQWUsS0FBNkIsR0FBR0MsT0FBT0QsWUFBWSxHQUFHRSxDQUFTQTtBQUVwRixNQUFNLEVBQUVDLFdBQVcsRUFBRSxHQUFHSiw2REFBYUEsQ0FBQztJQUNsQ0ssS0FBSztJQUNMQyxTQUFTTDtBQUNiO0FBUU8sTUFBTU0sWUFBWVIsNENBQUlBLENBQWE7SUFDdENNLEtBQU07SUFDTkcsU0FBUyxFQUFFO0lBQ1hDLGtCQUFrQjtRQUFDTDtLQUFZO0FBQ25DLEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2F0b20udHN4PzgwMWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXRvbSB9IGZyb20gXCJyZWNvaWxcIjtcbmltcG9ydCB7IHJlY29pbFBlcnNpc3QgfSBmcm9tIFwicmVjb2lsLXBlcnNpc3RcIjtcblxuY29uc3QgbG9jYWxTdG9yYWdlID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5sb2NhbFN0b3JhZ2UgOiB1bmRlZmluZWQ7XG5cbmNvbnN0IHsgcGVyc2lzdEF0b20gfSA9IHJlY29pbFBlcnNpc3Qoe1xuICAgIGtleTogJ3Bvc3QnLFxuICAgIHN0b3JhZ2U6IGxvY2FsU3RvcmFnZVxufSlcblxuZXhwb3J0IGludGVyZmFjZSBQb3N0VHlwZSB7XG4gICAgdGl0bGU6IHN0cmluZ1xuICAgIGNvbnRlbnQ6IHN0cmluZ1xuICAgIGlkOiBudW1iZXJcbn1cblxuZXhwb3J0IGNvbnN0IHBvc3RTdG9yZSA9IGF0b208UG9zdFR5cGVbXT4oe1xuICAgIGtleTogYHBvc3RTdG9yZWAsXG4gICAgZGVmYXVsdDogW10sXG4gICAgZWZmZWN0c19VTlNUQUJMRTogW3BlcnNpc3RBdG9tXVxufSkiXSwibmFtZXMiOlsiYXRvbSIsInJlY29pbFBlcnNpc3QiLCJsb2NhbFN0b3JhZ2UiLCJ3aW5kb3ciLCJ1bmRlZmluZWQiLCJwZXJzaXN0QXRvbSIsImtleSIsInN0b3JhZ2UiLCJwb3N0U3RvcmUiLCJkZWZhdWx0IiwiZWZmZWN0c19VTlNUQUJMRSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/atom.tsx\n"));

/***/ }),

/***/ "./src/pages/board/create/index.tsx":
/*!******************************************!*\
  !*** ./src/pages/board/create/index.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Create; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _atom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../atom */ \"./src/atom.tsx\");\n/* harmony import */ var _pages_components_btn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/pages/components/btn */ \"./src/pages/components/btn.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Create() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [posts, setPosts] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_atom__WEBPACK_IMPORTED_MODULE_4__.postStore);\n    const handleTitleChange = (e)=>{\n        setTitle(e.target.value);\n    };\n    const handleContentChange = (e)=>{\n        setContent(e.target.value);\n    };\n    const handleClick = ()=>{\n        // 빈 값 입력시 alert\n        if (title === \"\") {\n            alert(\"제목을 입력하세요.\");\n            return;\n        } else if (content === \"\") {\n            alert(\"내용을 입력하세요.\");\n            return;\n        }\n        let tempPost = [\n            ...posts\n        ];\n        const id = posts.length === 0 ? 0 : posts[posts.length - 1].id + 1;\n        tempPost.push({\n            id: id,\n            title: title,\n            content: content\n        });\n        setPosts(tempPost);\n        router.push(\"/board/post/\".concat(id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"content\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center h-[20vh]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    value: title,\n                    placeholder: \"제목\",\n                    onChange: handleTitleChange,\n                    className: \"text-3xl w-full\"\n                }, void 0, false, {\n                    fileName: \"/Users/hongseungjae/Desktop/learning.js/codinghub/src/pages/board/create/index.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/codinghub/src/pages/board/create/index.tsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center h-[40vh]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    value: content,\n                    placeholder: \"내용을 입력하세요\",\n                    onChange: handleContentChange,\n                    className: \"text-lg w-full h-full\"\n                }, void 0, false, {\n                    fileName: \"/Users/hongseungjae/Desktop/learning.js/codinghub/src/pages/board/create/index.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/codinghub/src/pages/board/create/index.tsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_components_btn__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                msg: \"업로드\",\n                onClick: handleClick\n            }, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/codinghub/src/pages/board/create/index.tsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hongseungjae/Desktop/learning.js/codinghub/src/pages/board/create/index.tsx\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, this);\n}\n_s(Create, \"RzOni1q3gfv3oTQQF4Vcq7dkflQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState\n    ];\n});\n_c = Create;\nvar _c;\n$RefreshReg$(_c, \"Create\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYm9hcmQvY3JlYXRlL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDQTtBQUNNO0FBQ007QUFDWDtBQUUxQixTQUFTSzs7SUFDcEIsTUFBTUMsU0FBU04sc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ08sT0FBT0MsU0FBUyxHQUFHTiwrQ0FBUUEsQ0FBUztJQUMzQyxNQUFNLENBQUNPLFNBQVNDLFdBQVcsR0FBR1IsK0NBQVFBLENBQVM7SUFDL0MsTUFBTSxDQUFDUyxPQUFPQyxTQUFTLEdBQUdYLHNEQUFjQSxDQUFhRSw0Q0FBU0E7SUFFOUQsTUFBTVUsb0JBQW9CLENBQUNDO1FBQXdDTixTQUFTTSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFBQztJQUMzRixNQUFNQyxzQkFBc0IsQ0FBQ0g7UUFBd0NKLFdBQVdJLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUFDO0lBRS9GLE1BQU1FLGNBQWM7UUFDaEIsZ0JBQWdCO1FBQ2hCLElBQUdYLFVBQVUsSUFBSTtZQUNiWSxNQUFNO1lBQ047UUFDSixPQUFPLElBQUdWLFlBQVksSUFBSTtZQUN0QlUsTUFBTTtZQUNOO1FBQ0o7UUFFQSxJQUFJQyxXQUFzQjtlQUFJVDtTQUFNO1FBQ3BDLE1BQU1VLEtBQUtWLE1BQU1XLE1BQU0sS0FBSyxJQUFJLElBQUlYLEtBQUssQ0FBQ0EsTUFBTVcsTUFBTSxHQUFDLEVBQUUsQ0FBQ0QsRUFBRSxHQUFDO1FBRTdERCxTQUFTRyxJQUFJLENBQUM7WUFDVkYsSUFBSUE7WUFDSmQsT0FBT0E7WUFDUEUsU0FBU0E7UUFDYjtRQUNBRyxTQUFTUTtRQUNUZCxPQUFPaUIsSUFBSSxDQUFDLGVBQWtCLE9BQUhGO0lBQy9CO0lBRUEscUJBQ0ksOERBQUNHO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ0M7b0JBQ0dWLE9BQU9UO29CQUNQb0IsYUFBWTtvQkFDWkMsVUFBVWY7b0JBQ1ZZLFdBQVU7Ozs7Ozs7Ozs7OzBCQUdsQiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNDO29CQUNHVixPQUFPUDtvQkFDUGtCLGFBQVk7b0JBQ1pDLFVBQVVYO29CQUNWUSxXQUFVOzs7Ozs7Ozs7OzswQkFHbEIsOERBQUNyQiw2REFBR0E7Z0JBQUN5QixLQUFJO2dCQUFNQyxTQUFTWjs7Ozs7Ozs7Ozs7O0FBR3BDO0dBcER3QmI7O1FBQ0xMLGtEQUFTQTtRQUdFQyxrREFBY0E7OztLQUpwQkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2JvYXJkL2NyZWF0ZS9pbmRleC50c3g/MjY4NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjsgXG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gXCJyZWNvaWxcIjtcbmltcG9ydCB7IENoYW5nZUV2ZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUG9zdFR5cGUsIHBvc3RTdG9yZSB9IGZyb20gXCIuLi8uLi8uLi9hdG9tXCI7XG5pbXBvcnQgQnRuIGZyb20gXCJAL3BhZ2VzL2NvbXBvbmVudHMvYnRuXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZSgpIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gICAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVJlY29pbFN0YXRlPFBvc3RUeXBlW10+KHBvc3RTdG9yZSk7XG5cbiAgICBjb25zdCBoYW5kbGVUaXRsZUNoYW5nZSA9IChlOkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB7c2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfTtcbiAgICBjb25zdCBoYW5kbGVDb250ZW50Q2hhbmdlID0gKGU6Q2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pID0+IHtzZXRDb250ZW50KGUudGFyZ2V0LnZhbHVlKX07XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgLy8g67mIIOqwkiDsnoXroKXsi5wgYWxlcnRcbiAgICAgICAgaWYodGl0bGUgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwi7KCc66qp7J2EIOyeheugpe2VmOyEuOyalC5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZihjb250ZW50ID09PSBcIlwiKSB7XG4gICAgICAgICAgICBhbGVydChcIuuCtOyaqeydhCDsnoXroKXtlZjshLjsmpQuXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHRlbXBQb3N0OlBvc3RUeXBlW10gPSBbLi4ucG9zdHNdO1xuICAgICAgICBjb25zdCBpZCA9IHBvc3RzLmxlbmd0aCA9PT0gMCA/IDAgOiBwb3N0c1twb3N0cy5sZW5ndGgtMV0uaWQrMTtcblxuICAgICAgICB0ZW1wUG9zdC5wdXNoKHtcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnRcbiAgICAgICAgfSk7XG4gICAgICAgIHNldFBvc3RzKHRlbXBQb3N0KTtcbiAgICAgICAgcm91dGVyLnB1c2goYC9ib2FyZC9wb3N0LyR7aWR9YCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGgtWzIwdmhdXCI+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9IFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuygnOuqqVwiIFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVGl0bGVDaGFuZ2V9IFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTN4bCB3LWZ1bGxcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgaC1bNDB2aF1cIj5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb250ZW50fSBcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLrgrTsmqnsnYQg7J6F66Cl7ZWY7IS47JqUXCIgXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDb250ZW50Q2hhbmdlfSBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1sZyB3LWZ1bGwgaC1mdWxsXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8QnRuIG1zZz1cIuyXheuhnOuTnFwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZVJlY29pbFN0YXRlIiwidXNlU3RhdGUiLCJwb3N0U3RvcmUiLCJCdG4iLCJDcmVhdGUiLCJyb3V0ZXIiLCJ0aXRsZSIsInNldFRpdGxlIiwiY29udGVudCIsInNldENvbnRlbnQiLCJwb3N0cyIsInNldFBvc3RzIiwiaGFuZGxlVGl0bGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDb250ZW50Q2hhbmdlIiwiaGFuZGxlQ2xpY2siLCJhbGVydCIsInRlbXBQb3N0IiwiaWQiLCJsZW5ndGgiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwibXNnIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/board/create/index.tsx\n"));

/***/ }),

/***/ "./src/pages/components/btn.tsx":
/*!**************************************!*\
  !*** ./src/pages/components/btn.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Btn; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Btn(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"center items-center w-[5vw] h-[5vh] border rounded-lg hover nnn ml-3\",\n        onClick: ()=>props.onClick(),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"text-gray-500\",\n            children: props.msg\n        }, void 0, false, {\n            fileName: \"/Users/hongseungjae/Desktop/learning.js/codinghub/src/pages/components/btn.tsx\",\n            lineNumber: 13,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/hongseungjae/Desktop/learning.js/codinghub/src/pages/components/btn.tsx\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, this);\n}\n_c = Btn;\nvar _c;\n$RefreshReg$(_c, \"Btn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29tcG9uZW50cy9idG4udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLZSxTQUFTQSxJQUFJQyxLQUFZO0lBRXBDLHFCQUNJLDhEQUFDQztRQUNHQyxXQUFVO1FBQ1ZDLFNBQVMsSUFBTUgsTUFBTUcsT0FBTztrQkFFNUIsNEVBQUNDO1lBQUVGLFdBQVU7c0JBQ1JGLE1BQU1LLEdBQUc7Ozs7Ozs7Ozs7O0FBSTFCO0tBWndCTiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY29tcG9uZW50cy9idG4udHN4PzlhMTciXSwic291cmNlc0NvbnRlbnQiOlsidHlwZSBQcm9wcyA9IHtcbiAgICBtc2c6IHN0cmluZ1xuICAgIG9uQ2xpY2s6ICgpID0+IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnRuKHByb3BzOiBQcm9wcykge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNlbnRlciBpdGVtcy1jZW50ZXIgdy1bNXZ3XSBoLVs1dmhdIGJvcmRlciByb3VuZGVkLWxnIGhvdmVyIG5ubiBtbC0zXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2soKX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiID5cbiAgICAgICAgICAgICAgICB7cHJvcHMubXNnfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbiJdLCJuYW1lcyI6WyJCdG4iLCJwcm9wcyIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJwIiwibXNnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/components/btn.tsx\n"));

/***/ }),

/***/ "./node_modules/recoil-persist/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/recoil-persist/dist/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.recoilPersist = void 0;\n/**\n * Recoil module to persist state to storage\n *\n * @param config Optional configuration object\n * @param config.key Used as key in local storage, defaults to `recoil-persist`\n * @param config.storage Local storage to use, defaults to `localStorage`\n */\nconst recoilPersist = (config = {}) => {\n    if (typeof window === 'undefined') {\n        return {\n            persistAtom: () => { },\n        };\n    }\n    const { key = 'recoil-persist', storage = localStorage, converter = JSON } = config;\n    const persistAtom = ({ onSet, node, trigger, setSelf }) => {\n        if (trigger === 'get') {\n            const state = getState();\n            if (typeof state.then === 'function') {\n                state.then((s) => {\n                    if (s.hasOwnProperty(node.key)) {\n                        setSelf(s[node.key]);\n                    }\n                });\n            }\n            if (state.hasOwnProperty(node.key)) {\n                setSelf(state[node.key]);\n            }\n        }\n        onSet(async (newValue, _, isReset) => {\n            const state = getState();\n            if (typeof state.then === 'function') {\n                state.then((s) => updateState(newValue, s, node.key, isReset));\n            }\n            else {\n                updateState(newValue, state, node.key, isReset);\n            }\n        });\n    };\n    const updateState = (newValue, state, key, isReset) => {\n        if (isReset) {\n            delete state[key];\n        }\n        else {\n            state[key] = newValue;\n        }\n        setState(state);\n    };\n    const getState = () => {\n        const toParse = storage.getItem(key);\n        if (toParse === null || toParse === undefined) {\n            return {};\n        }\n        if (typeof toParse === 'string') {\n            return parseState(toParse);\n        }\n        if (typeof toParse.then === 'function') {\n            return toParse.then(parseState);\n        }\n        return {};\n    };\n    const parseState = (state) => {\n        if (state === undefined) {\n            return {};\n        }\n        try {\n            return converter.parse(state);\n        }\n        catch (e) {\n            console.error(e);\n            return {};\n        }\n    };\n    const setState = (state) => {\n        try {\n            if (typeof storage.mergeItem === 'function') {\n                storage.mergeItem(key, converter.stringify(state));\n            }\n            else {\n                storage.setItem(key, converter.stringify(state));\n            }\n        }\n        catch (e) {\n            console.error(e);\n        }\n    };\n    return { persistAtom };\n};\nexports.recoilPersist = recoilPersist;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmVjb2lsLXBlcnNpc3QvZGlzdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0EsWUFBWSxtRUFBbUU7QUFDL0UsMkJBQTJCLCtCQUErQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxxQkFBcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlY29pbC1wZXJzaXN0L2Rpc3QvaW5kZXguanM/ODIwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmVjb2lsUGVyc2lzdCA9IHZvaWQgMDtcbi8qKlxuICogUmVjb2lsIG1vZHVsZSB0byBwZXJzaXN0IHN0YXRlIHRvIHN0b3JhZ2VcbiAqXG4gKiBAcGFyYW0gY29uZmlnIE9wdGlvbmFsIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gKiBAcGFyYW0gY29uZmlnLmtleSBVc2VkIGFzIGtleSBpbiBsb2NhbCBzdG9yYWdlLCBkZWZhdWx0cyB0byBgcmVjb2lsLXBlcnNpc3RgXG4gKiBAcGFyYW0gY29uZmlnLnN0b3JhZ2UgTG9jYWwgc3RvcmFnZSB0byB1c2UsIGRlZmF1bHRzIHRvIGBsb2NhbFN0b3JhZ2VgXG4gKi9cbmNvbnN0IHJlY29pbFBlcnNpc3QgPSAoY29uZmlnID0ge30pID0+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBlcnNpc3RBdG9tOiAoKSA9PiB7IH0sXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHsga2V5ID0gJ3JlY29pbC1wZXJzaXN0Jywgc3RvcmFnZSA9IGxvY2FsU3RvcmFnZSwgY29udmVydGVyID0gSlNPTiB9ID0gY29uZmlnO1xuICAgIGNvbnN0IHBlcnNpc3RBdG9tID0gKHsgb25TZXQsIG5vZGUsIHRyaWdnZXIsIHNldFNlbGYgfSkgPT4ge1xuICAgICAgICBpZiAodHJpZ2dlciA9PT0gJ2dldCcpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3RhdGUudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHN0YXRlLnRoZW4oKHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMuaGFzT3duUHJvcGVydHkobm9kZS5rZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxmKHNbbm9kZS5rZXldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KG5vZGUua2V5KSkge1xuICAgICAgICAgICAgICAgIHNldFNlbGYoc3RhdGVbbm9kZS5rZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBvblNldChhc3luYyAobmV3VmFsdWUsIF8sIGlzUmVzZXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3RhdGUudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHN0YXRlLnRoZW4oKHMpID0+IHVwZGF0ZVN0YXRlKG5ld1ZhbHVlLCBzLCBub2RlLmtleSwgaXNSZXNldCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlU3RhdGUobmV3VmFsdWUsIHN0YXRlLCBub2RlLmtleSwgaXNSZXNldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgdXBkYXRlU3RhdGUgPSAobmV3VmFsdWUsIHN0YXRlLCBrZXksIGlzUmVzZXQpID0+IHtcbiAgICAgICAgaWYgKGlzUmVzZXQpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBzdGF0ZVtrZXldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3RhdGVba2V5XSA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHNldFN0YXRlKHN0YXRlKTtcbiAgICB9O1xuICAgIGNvbnN0IGdldFN0YXRlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0b1BhcnNlID0gc3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgICAgIGlmICh0b1BhcnNlID09PSBudWxsIHx8IHRvUGFyc2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdG9QYXJzZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZVN0YXRlKHRvUGFyc2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdG9QYXJzZS50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9QYXJzZS50aGVuKHBhcnNlU3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9O1xuICAgIGNvbnN0IHBhcnNlU3RhdGUgPSAoc3RhdGUpID0+IHtcbiAgICAgICAgaWYgKHN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnZlcnRlci5wYXJzZShzdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IHNldFN0YXRlID0gKHN0YXRlKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHN0b3JhZ2UubWVyZ2VJdGVtID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgc3RvcmFnZS5tZXJnZUl0ZW0oa2V5LCBjb252ZXJ0ZXIuc3RyaW5naWZ5KHN0YXRlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdG9yYWdlLnNldEl0ZW0oa2V5LCBjb252ZXJ0ZXIuc3RyaW5naWZ5KHN0YXRlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiB7IHBlcnNpc3RBdG9tIH07XG59O1xuZXhwb3J0cy5yZWNvaWxQZXJzaXN0ID0gcmVjb2lsUGVyc2lzdDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/recoil-persist/dist/index.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fhongseungjae%2FDesktop%2Flearning.js%2Fcodinghub%2Fsrc%2Fpages%2Fboard%2Fcreate%2Findex.tsx&page=%2Fboard%2Fcreate!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
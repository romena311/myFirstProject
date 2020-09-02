webpackHotUpdate_N_E("pages/index",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar */ "./components/navbar.js");
/* harmony import */ var _loginModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loginModal */ "./components/loginModal.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Romena Debnath\\Desktop\\myproject\\components\\layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Layout = function Layout(props) {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, "My NextJs Project"), __jsx("link", {
    rel: "stylesheet",
    href: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css",
    integrity: "sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z",
    crossorigin: "anonymous",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }), __jsx("script", {
    src: "https://code.jquery.com/jquery-3.5.1.slim.min.js",
    integrity: "sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj",
    crossorigin: "anonymous",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }), __jsx("script", {
    src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js",
    integrity: "sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN",
    crossorigin: "anonymous",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }), __jsx("script", {
    src: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js",
    integrity: "sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV",
    crossorigin: "anonymous",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  })), __jsx("section", {
    className: "text-dark t-font-big",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx(_navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }), __jsx(_loginModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, props.children)));
};

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwicHJvcHMiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FDWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixFQUVJO0FBQU0sT0FBRyxFQUFDLFlBQVY7QUFBdUIsUUFBSSxFQUFDLDBFQUE1QjtBQUF1RyxhQUFTLEVBQUMseUVBQWpIO0FBQTJMLGVBQVcsRUFBQyxXQUF2TTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSTtBQUFRLE9BQUcsRUFBQyxrREFBWjtBQUErRCxhQUFTLEVBQUMseUVBQXpFO0FBQW1KLGVBQVcsRUFBQyxXQUEvSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosRUFJSTtBQUFRLE9BQUcsRUFBQyxzRUFBWjtBQUFtRixhQUFTLEVBQUMseUVBQTdGO0FBQXVLLGVBQVcsRUFBQyxXQUFuTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosRUFLSTtBQUFRLE9BQUcsRUFBQyx3RUFBWjtBQUFxRixhQUFTLEVBQUMseUVBQS9GO0FBQXlLLGVBQVcsRUFBQyxXQUFyTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEosQ0FESixFQVFJO0FBQVMsYUFBUyxFQUFDLHNCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0EsS0FBSyxDQUFDQyxRQURYLENBSEosQ0FSSixDQURXO0FBQUEsQ0FBZjs7S0FBTUYsTTtBQW1CU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDk1ZGJmMGVhY2E0NzEwM2E3MGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9uYXZiYXInO1xyXG5pbXBvcnQgTG9naW4gZnJvbSAnLi9sb2dpbk1vZGFsJztcclxuXHJcblxyXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT5NeSBOZXh0SnMgUHJvamVjdDwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjIvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LUpjS2I4cTNpcUo2MWdOVjlLR2I4dGhTc05qcFNMMG44UEFSbjlIdVpPbkl4TjBob1ArVm1tREdNTjV0OVVKMFpcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiLz5cclxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMy41LjEuc2xpbS5taW4uanNcIiBpbnRlZ3JpdHk9XCJzaGEzODQtRGZYZHoyaHRQSDBsc1NTczVuQ1RwdWovenk0QytPR3BhbW9GVnkzOE1WQm5FK0liYlZZVWV3K09yQ1hhUmtmalwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9wb3BwZXIuanNAMS4xNi4xL2Rpc3QvdW1kL3BvcHBlci5taW4uanNcIiBpbnRlZ3JpdHk9XCJzaGEzODQtOS9yZUZUR0FXODNFVzJSRHUyUzBWS2FJemFwM0g2NmxaSDgxUG9ZbEZoYkdVKzZCWnA2RzduaXU3MzVTazdsTlwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjIvanMvYm9vdHN0cmFwLm1pbi5qc1wiIGludGVncml0eT1cInNoYTM4NC1CNGd0MWpyR0M3Smg0QWdUUFNkVXRPQnZmTzhzaHVmNTdCYWdocUZmUGxZeG9mdkw4L0tVRWZZaUpPTU1WK3JWXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGV4dC1kYXJrIHQtZm9udC1iaWdcIj5cclxuICAgICAgICAgICAgPE5hdmJhci8+XHJcbiAgICAgICAgICAgIDxMb2dpbi8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyJdLCJzb3VyY2VSb290IjoiIn0=
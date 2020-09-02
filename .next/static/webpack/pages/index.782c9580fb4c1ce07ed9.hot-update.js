webpackHotUpdate_N_E("pages/index",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navbar_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.module.css */ "./components/navbar.module.css");
/* harmony import */ var _navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_navbar_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Romena Debnath\\Desktop\\myproject\\components\\navbar.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Navbar() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      myNavbar = _useState[0],
      setNavbar = _useState[1];

  useE;

  var changeNavbar = function changeNavbar() {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeNavbar);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("nav", {
    id: "topNav",
    className: myNavbar ? 'navbar navbar-expand-md myNavbar scrolled fixed-top py-0 justify-content-around' : 'navbar navbar-expand-md myNavbar fixed-top py-0 justify-content-around',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "navbarBrand px-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "#",
    className: "navbar-brand text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, "Project Next.js"))), __jsx("button", {
    className: "navbar-toggler d-block d-md-none btn mx-4",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#maincontent",
    "aria-controls": "maincontent",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/menu.svg",
    alt: "menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  })), __jsx("div", {
    id: "maincontent",
    className: "navbar-collapse collapse",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: "navbar-nav mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "#introduction",
    className: "nav-link acive px-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "Introduction")), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "#work",
    className: "nav-link px-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, "My Works")), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "#contact",
    className: "nav-link px-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, "Contact Me"))), __jsx("ul", {
    className: "".concat(_navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.login, " navbar-nav"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx("li", {
    className: "nav-item text-nowrap text-md-center py-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx("button", {
    type: "button",
    className: "btn btn-outline-dark px-2 mx-4",
    "data-toggle": "modal",
    "data-target": "#loginModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, " ", "Login", " ")))))));
}

_s(Navbar, "X8VuVCT6KWdY+P3JuMIM4KlzgQI=");

_c = Navbar;
;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c;

$RefreshReg$(_c, "Navbar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIuanMiXSwibmFtZXMiOlsiTmF2YmFyIiwidXNlU3RhdGUiLCJteU5hdmJhciIsInNldE5hdmJhciIsInVzZUUiLCJjaGFuZ2VOYXZiYXIiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0eWxlcyIsImxvZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUEsa0JBQ2FDLHNEQUFRLENBQUMsS0FBRCxDQURyQjtBQUFBLE1BQ1RDLFFBRFM7QUFBQSxNQUNBQyxTQURBOztBQUVoQkMsTUFBSTs7QUFDSixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLFFBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxJQUFrQixFQUFyQixFQUF5QjtBQUN4QkosZUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNBLEtBRkQsTUFFTztBQUNMQSxlQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0Q7QUFDRixHQU5EOztBQU9BRyxRQUFNLENBQUNFLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDSCxZQUFsQztBQUNBLFNBQ0UsbUVBQ0E7QUFDQSxNQUFFLEVBQUMsUUFESDtBQUVBLGFBQVMsRUFBRUgsUUFBUSxHQUFHLGlGQUFILEdBQXVGLHdFQUYxRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0E7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQVksYUFBUyxFQUFDLDBCQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixDQURGLENBREYsRUFNRTtBQUNFLGFBQVMsRUFBQywyQ0FEWjtBQUVFLFFBQUksRUFBQyxRQUZQO0FBR0UsbUJBQVksVUFIZDtBQUlFLG1CQUFZLGNBSmQ7QUFLRSxxQkFBYyxhQUxoQjtBQU1FLHFCQUFjLE9BTmhCO0FBT0Usa0JBQVcsbUJBUGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFFO0FBQUssT0FBRyxFQUFDLFdBQVQ7QUFBcUIsT0FBRyxFQUFDLE1BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixDQU5GLEVBZ0JFO0FBQUssTUFBRSxFQUFDLGFBQVI7QUFBc0IsYUFBUyxFQUFDLDBCQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsb0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsUUFBSSxFQUFDLGVBQVI7QUFBd0IsYUFBUyxFQUFDLHFCQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLENBREYsRUFNRTtBQUFJLGFBQVMsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQyxPQUFSO0FBQWdCLGFBQVMsRUFBQyxlQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLENBTkYsRUFXRTtBQUFJLGFBQVMsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQyxVQUFSO0FBQW1CLGFBQVMsRUFBQyxlQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLENBWEYsQ0FERixFQWtCRTtBQUFJLGFBQVMsWUFBS08seURBQU0sQ0FBQ0MsS0FBWixnQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsMENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxhQUFTLEVBQUMsZ0NBRlo7QUFHRSxtQkFBWSxPQUhkO0FBSUUsbUJBQVksYUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0csR0FMSCxXQUthLEdBTGIsQ0FERixDQURGLENBbEJGLENBaEJGLENBSEEsQ0FEQSxDQURGO0FBdUREOztHQWxFUVYsTTs7S0FBQUEsTTtBQWtFUjtBQU1jQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43ODJjOTU4MGZiNGMxY2UwN2VkOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbmF2YmFyLm1vZHVsZS5jc3MnO1xyXG5cclxuZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gIGNvbnN0IFtteU5hdmJhcixzZXROYXZiYXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHVzZUVcclxuICBjb25zdCBjaGFuZ2VOYXZiYXIgPSAoKSA9PiB7XHJcbiAgICBpZih3aW5kb3cuc2Nyb2xsWSA+PSA4MCkge1xyXG4gICAgIHNldE5hdmJhcih0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldE5hdmJhcihmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgY2hhbmdlTmF2YmFyKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxuYXZcclxuICAgIGlkPVwidG9wTmF2XCJcclxuICAgIGNsYXNzTmFtZT17bXlOYXZiYXIgPyAnbmF2YmFyIG5hdmJhci1leHBhbmQtbWQgbXlOYXZiYXIgc2Nyb2xsZWQgZml4ZWQtdG9wIHB5LTAganVzdGlmeS1jb250ZW50LWFyb3VuZCcgOiAnbmF2YmFyIG5hdmJhci1leHBhbmQtbWQgbXlOYXZiYXIgZml4ZWQtdG9wIHB5LTAganVzdGlmeS1jb250ZW50LWFyb3VuZCd9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJCcmFuZCBweC00XCI+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxoNT5Qcm9qZWN0IE5leHQuanM8L2g1PlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlciBkLWJsb2NrIGQtbWQtbm9uZSBidG4gbXgtNFwiXHJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXHJcbiAgICAgICAgZGF0YS10YXJnZXQ9XCIjbWFpbmNvbnRlbnRcIlxyXG4gICAgICAgIGFyaWEtY29udHJvbHM9XCJtYWluY29udGVudFwiXHJcbiAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cclxuICAgICAgICA8aW1nIHNyYz1cIi9tZW51LnN2Z1wiIGFsdD1cIm1lbnVcIi8+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8ZGl2IGlkPVwibWFpbmNvbnRlbnRcIiBjbGFzc05hbWU9XCJuYXZiYXItY29sbGFwc2UgY29sbGFwc2VcIj5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBteC1hdXRvXCI+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNpbnRyb2R1Y3Rpb25cIiBjbGFzc05hbWU9XCJuYXYtbGluayBhY2l2ZSBweC00XCI+XHJcbiAgICAgICAgICAgICAgSW50cm9kdWN0aW9uXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiN3b3JrXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgcHgtNFwiPlxyXG4gICAgICAgICAgICAgIE15IFdvcmtzXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNjb250YWN0XCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgcHgtNFwiPlxyXG4gICAgICAgICAgICAgIENvbnRhY3QgTWVcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9e2Ake3N0eWxlcy5sb2dpbn0gbmF2YmFyLW5hdmB9PlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIHRleHQtbm93cmFwIHRleHQtbWQtY2VudGVyIHB5LTFcIj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYXJrIHB4LTIgbXgtNFwiXHJcbiAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjbG9naW5Nb2RhbFwiPlxyXG4gICAgICAgICAgICAgIHtcIiBcIn1Mb2dpbntcIiBcIn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uYXY+XHJcbiAgPC8+XHJcbiAgKTtcclxufTtcclxuICBcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
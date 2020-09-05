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
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./components/menu.js");
/* harmony import */ var _navbar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.module.css */ "./components/navbar.module.css");
/* harmony import */ var _navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_navbar_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Romena Debnath\\Desktop\\myproject\\components\\navbar.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Navbar() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      myNavbar = _useState[0],
      setNavbar = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      myBtn = _useState2[0],
      setButton = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener("scroll", changeNavbar);
    window.addEventListener("scroll", changeButton);
  }, []);

  var changeNavbar = function changeNavbar() {
    if (window.scrollY >= 540) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  var changeButton = function changeButton() {
    if (window.scrollY >= 540) {
      setButton(true);
    } else {
      setButton(false);
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("nav", {
    id: "topNav",
    className: myNavbar ? "navbar navbar-expand-lg myNavbar scrolled fixed-top py-0 justify-content-around" : "navbar navbar-expand-lg myNavbar fixed-top py-0 justify-content-around",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "navbarBrand px-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "#",
    className: "navbar-brand text-center tColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, "Project Next.js"))), __jsx("button", {
    className: myBtn ? "navbar-toggler d-block d-lg-none btn btn-outline-light mx-4" : "navbar-toggler d-block d-lg-none btn btn-outline-light mx-4",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#maincontent",
    "aria-controls": "maincontent",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx(_menu__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  })), __jsx("div", {
    id: "maincontent",
    className: "navbar-collapse collapse",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "navbar-nav mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#introduction",
    className: "nav-link acive px-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, "Introduction")), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#work",
    className: "nav-link px-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, "My Works")), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#contact",
    className: "nav-link px-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, "Contact Me"))), __jsx("ul", {
    className: "".concat(_navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.login, " navbar-nav"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "nav-item text-nowrap text-lg-center py-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }, __jsx("button", {
    className: myBtn ? "btn btn-outline-light px-2 mx-4" : "btn btn-outline-dark px-2 mx-4",
    type: "button",
    "data-toggle": "modal",
    "data-target": "#loginModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, " ", "Login", " ")))))));
}

_s(Navbar, "IwzK671h08E5BbIY8AtdrgIUJLc=");

_c = Navbar;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIuanMiXSwibmFtZXMiOlsiTmF2YmFyIiwidXNlU3RhdGUiLCJteU5hdmJhciIsInNldE5hdmJhciIsIm15QnRuIiwic2V0QnV0dG9uIiwidXNlRWZmZWN0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoYW5nZU5hdmJhciIsImNoYW5nZUJ1dHRvbiIsInNjcm9sbFkiLCJzdHlsZXMiLCJsb2dpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBLGtCQUNjQyxzREFBUSxDQUFDLEtBQUQsQ0FEdEI7QUFBQSxNQUNUQyxRQURTO0FBQUEsTUFDQ0MsU0FERDs7QUFBQSxtQkFFV0Ysc0RBQVEsQ0FBQyxLQUFELENBRm5CO0FBQUEsTUFFVEcsS0FGUztBQUFBLE1BRUZDLFNBRkU7O0FBSWhCQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0MsWUFBbEM7QUFDQUYsVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0UsWUFBbEM7QUFDRCxHQUhRLEVBR04sRUFITSxDQUFUOztBQUtBLE1BQU1ELFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekIsUUFBSUYsTUFBTSxDQUFDSSxPQUFQLElBQWtCLEdBQXRCLEVBQTJCO0FBQ3pCUixlQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0QsS0FGRCxNQUVPO0FBQ0xBLGVBQVMsQ0FBQyxLQUFELENBQVQ7QUFDRDtBQUNGLEdBTkQ7O0FBUUEsTUFBTU8sWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QixRQUFJSCxNQUFNLENBQUNJLE9BQVAsSUFBa0IsR0FBdEIsRUFBMkI7QUFDekJOLGVBQVMsQ0FBQyxJQUFELENBQVQ7QUFDRCxLQUZELE1BRU87QUFDTEEsZUFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNEO0FBQ0YsR0FORDs7QUFRQSxTQUNFLG1FQUNFO0FBQ0UsTUFBRSxFQUFDLFFBREw7QUFFRSxhQUFTLEVBQ1BILFFBQVEsR0FDSixpRkFESSxHQUVKLHdFQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRRTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBWSxhQUFTLEVBQUMsaUNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLENBREYsQ0FERixFQU1FO0FBQ0UsYUFBUyxFQUNQRSxLQUFLLEdBQ0QsNkRBREMsR0FFRCw2REFKUjtBQU1FLFFBQUksRUFBQyxRQU5QO0FBT0UsbUJBQVksVUFQZDtBQVFFLG1CQUFZLGNBUmQ7QUFTRSxxQkFBYyxhQVRoQjtBQVVFLHFCQUFjLE9BVmhCO0FBV0Usa0JBQVcsbUJBWGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWFFLE1BQUMsNkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJGLENBTkYsRUFxQkU7QUFBSyxNQUFFLEVBQUMsYUFBUjtBQUFzQixhQUFTLEVBQUMsMEJBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxvQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUMsZUFBUjtBQUF3QixhQUFTLEVBQUMscUJBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsQ0FERixFQU1FO0FBQUksYUFBUyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsUUFBSSxFQUFDLE9BQVI7QUFBZ0IsYUFBUyxFQUFDLGVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsQ0FORixFQVdFO0FBQUksYUFBUyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsUUFBSSxFQUFDLFVBQVI7QUFBbUIsYUFBUyxFQUFDLGVBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsQ0FYRixDQURGLEVBa0JFO0FBQUksYUFBUyxZQUFLUSx5REFBTSxDQUFDQyxLQUFaLGdCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQywwQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQ1BULEtBQUssR0FDRCxpQ0FEQyxHQUVELGdDQUpSO0FBTUUsUUFBSSxFQUFDLFFBTlA7QUFPRSxtQkFBWSxPQVBkO0FBUUUsbUJBQVksYUFSZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVUcsR0FWSCxXQVdRLEdBWFIsQ0FERixDQURGLENBbEJGLENBckJGLENBUkYsQ0FERixDQURGO0FBdUVEOztHQWhHUUosTTs7S0FBQUEsTTtBQWtHTUEscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzg4MjFiMTYzOTBkNDc3ZmExMDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJY29uTWVudSBmcm9tIFwiLi9tZW51XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vbmF2YmFyLm1vZHVsZS5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIE5hdmJhcigpIHtcclxuICBjb25zdCBbbXlOYXZiYXIsIHNldE5hdmJhcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW215QnRuLCBzZXRCdXR0b25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgY2hhbmdlTmF2YmFyKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGNoYW5nZUJ1dHRvbik7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBjaGFuZ2VOYXZiYXIgPSAoKSA9PiB7XHJcbiAgICBpZiAod2luZG93LnNjcm9sbFkgPj0gNTQwKSB7XHJcbiAgICAgIHNldE5hdmJhcih0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldE5hdmJhcihmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hhbmdlQnV0dG9uID0gKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID49IDU0MCkge1xyXG4gICAgICBzZXRCdXR0b24odHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRCdXR0b24oZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxuYXZcclxuICAgICAgICBpZD1cInRvcE5hdlwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgIG15TmF2YmFyXHJcbiAgICAgICAgICAgID8gXCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBteU5hdmJhciBzY3JvbGxlZCBmaXhlZC10b3AgcHktMCBqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kXCJcclxuICAgICAgICAgICAgOiBcIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG15TmF2YmFyIGZpeGVkLXRvcCBweS0wIGp1c3RpZnktY29udGVudC1hcm91bmRcIlxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhckJyYW5kIHB4LTRcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmQgdGV4dC1jZW50ZXIgdENvbG9yXCI+XHJcbiAgICAgICAgICAgICAgPGg1PlByb2plY3QgTmV4dC5qczwvaDU+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgIG15QnRuXHJcbiAgICAgICAgICAgICAgICA/IFwibmF2YmFyLXRvZ2dsZXIgZC1ibG9jayBkLWxnLW5vbmUgYnRuIGJ0bi1vdXRsaW5lLWxpZ2h0IG14LTRcIlxyXG4gICAgICAgICAgICAgICAgOiBcIm5hdmJhci10b2dnbGVyIGQtYmxvY2sgZC1sZy1ub25lIGJ0biBidG4tb3V0bGluZS1saWdodCBteC00XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXHJcbiAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI21haW5jb250ZW50XCJcclxuICAgICAgICAgICAgYXJpYS1jb250cm9scz1cIm1haW5jb250ZW50XCJcclxuICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25NZW51IC8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJtYWluY29udGVudFwiIGNsYXNzTmFtZT1cIm5hdmJhci1jb2xsYXBzZSBjb2xsYXBzZVwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2ludHJvZHVjdGlvblwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIGFjaXZlIHB4LTRcIj5cclxuICAgICAgICAgICAgICAgICAgSW50cm9kdWN0aW9uXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjd29ya1wiIGNsYXNzTmFtZT1cIm5hdi1saW5rIHB4LTRcIj5cclxuICAgICAgICAgICAgICAgICAgTXkgV29ya3NcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNjb250YWN0XCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgcHgtNFwiPlxyXG4gICAgICAgICAgICAgICAgICBDb250YWN0IE1lXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17YCR7c3R5bGVzLmxvZ2lufSBuYXZiYXItbmF2YH0+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIHRleHQtbm93cmFwIHRleHQtbGctY2VudGVyIHB5LTFcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICBteUJ0blxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBcImJ0biBidG4tb3V0bGluZS1saWdodCBweC0yIG14LTRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBcImJ0biBidG4tb3V0bGluZS1kYXJrIHB4LTIgbXgtNFwiXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNsb2dpbk1vZGFsXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICBMb2dpbntcIiBcIn1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uYXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
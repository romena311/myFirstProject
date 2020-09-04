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
    window.addEventListener('scroll', changeNavbar);
    window.addEventListener('scroll', changeButton);
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
    className: myNavbar ? 'navbar navbar-expand-lg myNavbar scrolled fixed-top py-0 justify-content-around' : 'navbar navbar-expand-lg myNavbar fixed-top py-0 justify-content-around',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "navbarBrand px-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "#",
    className: "navbar-brand text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, "Project Next.js"))), __jsx("button", {
    className: myBtn ? 'navbar-toggler d-block d-lg-none btn btn-outline-light mx-4' : 'navbar-toggler d-block d-lg-none btn btn-outline-dark mx-4',
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#maincontent",
    "aria-controls": "maincontent",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx(_menu__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  })), __jsx("div", {
    id: "maincontent",
    className: "navbar-collapse collapse",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: "navbar-nav mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "#introduction",
    className: "nav-link acive px-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, "Introduction")), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "#work",
    className: "nav-link px-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, "My Works")), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "#contact",
    className: "nav-link px-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, "Contact Me"))), __jsx("ul", {
    className: "".concat(_navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.login, " navbar-nav"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx("li", {
    className: "nav-item text-nowrap text-lg-center py-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, __jsx("button", {
    className: myBtn ? 'btn btn-outline-light px-2 mx-4' : 'btn btn-outline-dark px-2 mx-4',
    type: "button",
    "data-toggle": "modal",
    "data-target": "#loginModal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, " ", "Login", " ")))))));
}

_s(Navbar, "mykdMzS2SNw8/t+L3oxlTdHOvnE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIuanMiXSwibmFtZXMiOlsiTmF2YmFyIiwidXNlU3RhdGUiLCJteU5hdmJhciIsInNldE5hdmJhciIsIm15QnRuIiwic2V0QnV0dG9uIiwidXNlRWZmZWN0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoYW5nZU5hdmJhciIsImNoYW5nZUJ1dHRvbiIsInNjcm9sbFkiLCJzdHlsZXMiLCJsb2dpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBLGtCQUNhQyxzREFBUSxDQUFDLEtBQUQsQ0FEckI7QUFBQSxNQUNUQyxRQURTO0FBQUEsTUFDQUMsU0FEQTs7QUFBQSxtQkFFVUYsc0RBQVEsQ0FBQyxLQUFELENBRmxCO0FBQUEsTUFFVEcsS0FGUztBQUFBLE1BRUhDLFNBRkc7O0FBR2hCQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0MsWUFBbEM7QUFDQUYsVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0UsWUFBbEM7QUFDRCxHQUhRLEVBR1AsRUFITyxDQUFUOztBQUlBLE1BQU1ELFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekIsUUFBR0YsTUFBTSxDQUFDSSxPQUFQLElBQWtCLEdBQXJCLEVBQTBCO0FBQ3pCUixlQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0EsS0FGRCxNQUVPO0FBQ0xBLGVBQVMsQ0FBQyxLQUFELENBQVQ7QUFDRDtBQUNGLEdBTkQ7O0FBT0EsTUFBTU8sWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QixRQUFHSCxNQUFNLENBQUNJLE9BQVAsSUFBa0IsR0FBckIsRUFBMEI7QUFDekJOLGVBQVMsQ0FBQyxJQUFELENBQVQ7QUFDQSxLQUZELE1BRU87QUFDTEEsZUFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNEO0FBQ0YsR0FORDs7QUFPQSxTQUNFLG1FQUNBO0FBQ0EsTUFBRSxFQUFDLFFBREg7QUFFQSxhQUFTLEVBQUVILFFBQVEsR0FBRyxpRkFBSCxHQUF1Rix3RUFGMUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdBO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFZLGFBQVMsRUFBQywwQkFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsQ0FERixDQURGLEVBTUU7QUFDRSxhQUFTLEVBQUVFLEtBQUssR0FBRyw2REFBSCxHQUFtRSw0REFEckY7QUFFRSxRQUFJLEVBQUMsUUFGUDtBQUdFLG1CQUFZLFVBSGQ7QUFJRSxtQkFBWSxjQUpkO0FBS0UscUJBQWMsYUFMaEI7QUFNRSxxQkFBYyxPQU5oQjtBQU9FLGtCQUFXLG1CQVBiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRRSxNQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixDQU5GLEVBZ0JFO0FBQUssTUFBRSxFQUFDLGFBQVI7QUFBc0IsYUFBUyxFQUFDLDBCQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsb0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsUUFBSSxFQUFDLGVBQVI7QUFBd0IsYUFBUyxFQUFDLHFCQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLENBREYsRUFNRTtBQUFJLGFBQVMsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQyxPQUFSO0FBQWdCLGFBQVMsRUFBQyxlQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLENBTkYsRUFXRTtBQUFJLGFBQVMsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQyxVQUFSO0FBQW1CLGFBQVMsRUFBQyxlQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLENBWEYsQ0FERixFQWtCRTtBQUFJLGFBQVMsWUFBS1EseURBQU0sQ0FBQ0MsS0FBWixnQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsMENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsYUFBUyxFQUFFVCxLQUFLLEdBQUcsaUNBQUgsR0FBdUMsZ0NBQS9EO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxtQkFBWSxPQUZkO0FBR0UsbUJBQVksYUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUcsR0FKSCxXQUlhLEdBSmIsQ0FERixDQURGLENBbEJGLENBaEJGLENBSEEsQ0FEQSxDQURGO0FBc0REOztHQTNFUUosTTs7S0FBQUEsTTtBQTJFUjtBQU1jQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zNzM0ODQ1ZDQxZmQwZjM2ODI5Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIGNvbXBvIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSWNvbk1lbnUgZnJvbSAnLi9tZW51JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL25hdmJhci5tb2R1bGUuY3NzJztcclxuXHJcbmZ1bmN0aW9uIE5hdmJhcigpIHtcclxuICBjb25zdCBbbXlOYXZiYXIsc2V0TmF2YmFyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbXlCdG4sc2V0QnV0dG9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGNoYW5nZU5hdmJhcik7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgY2hhbmdlQnV0dG9uKTtcclxuICB9LFtdKTtcclxuICBjb25zdCBjaGFuZ2VOYXZiYXIgPSAoKSA9PiB7XHJcbiAgICBpZih3aW5kb3cuc2Nyb2xsWSA+PSA1NDApIHtcclxuICAgICBzZXROYXZiYXIodHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXROYXZiYXIoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgY2hhbmdlQnV0dG9uID0gKCkgPT4ge1xyXG4gICAgaWYod2luZG93LnNjcm9sbFkgPj0gNTQwKSB7XHJcbiAgICAgc2V0QnV0dG9uKHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0QnV0dG9uKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPG5hdlxyXG4gICAgaWQ9XCJ0b3BOYXZcIlxyXG4gICAgY2xhc3NOYW1lPXtteU5hdmJhciA/ICduYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBteU5hdmJhciBzY3JvbGxlZCBmaXhlZC10b3AgcHktMCBqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kJyA6ICduYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBteU5hdmJhciBmaXhlZC10b3AgcHktMCBqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kJ30+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhckJyYW5kIHB4LTRcIj5cclxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGg1PlByb2plY3QgTmV4dC5qczwvaDU+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT17bXlCdG4gPyAnbmF2YmFyLXRvZ2dsZXIgZC1ibG9jayBkLWxnLW5vbmUgYnRuIGJ0bi1vdXRsaW5lLWxpZ2h0IG14LTQnIDogJ25hdmJhci10b2dnbGVyIGQtYmxvY2sgZC1sZy1ub25lIGJ0biBidG4tb3V0bGluZS1kYXJrIG14LTQnfVxyXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxyXG4gICAgICAgIGRhdGEtdGFyZ2V0PVwiI21haW5jb250ZW50XCJcclxuICAgICAgICBhcmlhLWNvbnRyb2xzPVwibWFpbmNvbnRlbnRcIlxyXG4gICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgPEljb25NZW51Lz5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxkaXYgaWQ9XCJtYWluY29udGVudFwiIGNsYXNzTmFtZT1cIm5hdmJhci1jb2xsYXBzZSBjb2xsYXBzZVwiPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG14LWF1dG9cIj5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI2ludHJvZHVjdGlvblwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIGFjaXZlIHB4LTRcIj5cclxuICAgICAgICAgICAgICBJbnRyb2R1Y3Rpb25cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI3dvcmtcIiBjbGFzc05hbWU9XCJuYXYtbGluayBweC00XCI+XHJcbiAgICAgICAgICAgICAgTXkgV29ya3NcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI2NvbnRhY3RcIiBjbGFzc05hbWU9XCJuYXYtbGluayBweC00XCI+XHJcbiAgICAgICAgICAgICAgQ29udGFjdCBNZVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT17YCR7c3R5bGVzLmxvZ2lufSBuYXZiYXItbmF2YH0+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gdGV4dC1ub3dyYXAgdGV4dC1sZy1jZW50ZXIgcHktMVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17bXlCdG4gPyAnYnRuIGJ0bi1vdXRsaW5lLWxpZ2h0IHB4LTIgbXgtNCcgOiAnYnRuIGJ0bi1vdXRsaW5lLWRhcmsgcHgtMiBteC00J31cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNsb2dpbk1vZGFsXCI+XHJcbiAgICAgICAgICAgICAge1wiIFwifUxvZ2lue1wiIFwifVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L25hdj5cclxuICA8Lz5cclxuICApO1xyXG59O1xyXG4gIFxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
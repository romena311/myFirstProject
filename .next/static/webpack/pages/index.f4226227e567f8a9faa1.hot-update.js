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
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "navbarBrand px-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "#",
    className: "navbar-brand text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, "Project Next.js"))), __jsx("button", {
    className: myBtn ? 'navbar-toggler d-block d-lg-none btn btn-outline-dark mx-4' : 'navbar-toggler d-block d-lg-none btn btn-outline-light mx-4',
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#maincontent",
    "aria-controls": "maincontent",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/menu.svg",
    alt: "menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  })), __jsx("div", {
    id: "maincontent",
    className: "navbar-collapse collapse",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: "navbar-nav mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "#introduction",
    className: "nav-link acive px-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, "Introduction")), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "#work",
    className: "nav-link px-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, "My Works")), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "#contact",
    className: "nav-link px-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, "Contact Me"))), __jsx("ul", {
    className: "".concat(_navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.login, " navbar-nav"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx("li", {
    className: "nav-item text-nowrap text-lg-center py-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
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
      lineNumber: 66,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIuanMiXSwibmFtZXMiOlsiTmF2YmFyIiwidXNlU3RhdGUiLCJteU5hdmJhciIsInNldE5hdmJhciIsIm15QnRuIiwic2V0QnV0dG9uIiwidXNlRWZmZWN0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoYW5nZU5hdmJhciIsImNoYW5nZUJ1dHRvbiIsInNjcm9sbFkiLCJzdHlsZXMiLCJsb2dpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBLGtCQUNhQyxzREFBUSxDQUFDLEtBQUQsQ0FEckI7QUFBQSxNQUNUQyxRQURTO0FBQUEsTUFDQUMsU0FEQTs7QUFBQSxtQkFFVUYsc0RBQVEsQ0FBQyxLQUFELENBRmxCO0FBQUEsTUFFVEcsS0FGUztBQUFBLE1BRUhDLFNBRkc7O0FBR2hCQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0MsWUFBbEM7QUFDQUYsVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0UsWUFBbEM7QUFDRCxHQUhRLEVBR1AsRUFITyxDQUFUOztBQUlBLE1BQU1ELFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekIsUUFBR0YsTUFBTSxDQUFDSSxPQUFQLElBQWtCLEdBQXJCLEVBQTBCO0FBQ3pCUixlQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0EsS0FGRCxNQUVPO0FBQ0xBLGVBQVMsQ0FBQyxLQUFELENBQVQ7QUFDRDtBQUNGLEdBTkQ7O0FBT0EsTUFBTU8sWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QixRQUFHSCxNQUFNLENBQUNJLE9BQVAsSUFBa0IsR0FBckIsRUFBMEI7QUFDekJOLGVBQVMsQ0FBQyxJQUFELENBQVQ7QUFDQSxLQUZELE1BRU87QUFDTEEsZUFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNEO0FBQ0YsR0FORDs7QUFPQSxTQUNFLG1FQUNBO0FBQ0EsTUFBRSxFQUFDLFFBREg7QUFFQSxhQUFTLEVBQUVILFFBQVEsR0FBRyxpRkFBSCxHQUF1Rix3RUFGMUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdBO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFZLGFBQVMsRUFBQywwQkFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsQ0FERixDQURGLEVBTUU7QUFDRSxhQUFTLEVBQUVFLEtBQUssR0FBRyw0REFBSCxHQUFrRSw2REFEcEY7QUFFRSxRQUFJLEVBQUMsUUFGUDtBQUdFLG1CQUFZLFVBSGQ7QUFJRSxtQkFBWSxjQUpkO0FBS0UscUJBQWMsYUFMaEI7QUFNRSxxQkFBYyxPQU5oQjtBQU9FLGtCQUFXLG1CQVBiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRRTtBQUFLLE9BQUcsRUFBQyxXQUFUO0FBQXFCLE9BQUcsRUFBQyxNQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsQ0FORixFQWdCRTtBQUFLLE1BQUUsRUFBQyxhQUFSO0FBQXNCLGFBQVMsRUFBQywwQkFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLG9CQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQyxlQUFSO0FBQXdCLGFBQVMsRUFBQyxxQkFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixDQURGLEVBTUU7QUFBSSxhQUFTLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUMsT0FBUjtBQUFnQixhQUFTLEVBQUMsZUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQU5GLEVBV0U7QUFBSSxhQUFTLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUMsVUFBUjtBQUFtQixhQUFTLEVBQUMsZUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixDQVhGLENBREYsRUFrQkU7QUFBSSxhQUFTLFlBQUtRLHlEQUFNLENBQUNDLEtBQVosZ0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLDBDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBQyxRQURQO0FBRUUsYUFBUyxFQUFDLGdDQUZaO0FBR0UsbUJBQVksT0FIZDtBQUlFLG1CQUFZLGFBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtHLEdBTEgsV0FLYSxHQUxiLENBREYsQ0FERixDQWxCRixDQWhCRixDQUhBLENBREEsQ0FERjtBQXVERDs7R0E1RVFiLE07O0tBQUFBLE07QUE0RVI7QUFNY0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjQyMjYyMjdlNTY3ZjhhOWZhYTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbmF2YmFyLm1vZHVsZS5jc3MnO1xyXG5cclxuZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gIGNvbnN0IFtteU5hdmJhcixzZXROYXZiYXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtteUJ0bixzZXRCdXR0b25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgY2hhbmdlTmF2YmFyKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBjaGFuZ2VCdXR0b24pXHJcbiAgfSxbXSk7XHJcbiAgY29uc3QgY2hhbmdlTmF2YmFyID0gKCkgPT4ge1xyXG4gICAgaWYod2luZG93LnNjcm9sbFkgPj0gNTQwKSB7XHJcbiAgICAgc2V0TmF2YmFyKHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0TmF2YmFyKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGNoYW5nZUJ1dHRvbiA9ICgpID0+IHtcclxuICAgIGlmKHdpbmRvdy5zY3JvbGxZID49IDU0MCkge1xyXG4gICAgIHNldEJ1dHRvbih0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEJ1dHRvbihmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxuYXZcclxuICAgIGlkPVwidG9wTmF2XCJcclxuICAgIGNsYXNzTmFtZT17bXlOYXZiYXIgPyAnbmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbXlOYXZiYXIgc2Nyb2xsZWQgZml4ZWQtdG9wIHB5LTAganVzdGlmeS1jb250ZW50LWFyb3VuZCcgOiAnbmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbXlOYXZiYXIgZml4ZWQtdG9wIHB5LTAganVzdGlmeS1jb250ZW50LWFyb3VuZCd9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJCcmFuZCBweC00XCI+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxoNT5Qcm9qZWN0IE5leHQuanM8L2g1PlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBjbGFzc05hbWU9e215QnRuID8gJ25hdmJhci10b2dnbGVyIGQtYmxvY2sgZC1sZy1ub25lIGJ0biBidG4tb3V0bGluZS1kYXJrIG14LTQnIDogJ25hdmJhci10b2dnbGVyIGQtYmxvY2sgZC1sZy1ub25lIGJ0biBidG4tb3V0bGluZS1saWdodCBteC00J31cclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcclxuICAgICAgICBkYXRhLXRhcmdldD1cIiNtYWluY29udGVudFwiXHJcbiAgICAgICAgYXJpYS1jb250cm9scz1cIm1haW5jb250ZW50XCJcclxuICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiL21lbnUuc3ZnXCIgYWx0PVwibWVudVwiLz5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxkaXYgaWQ9XCJtYWluY29udGVudFwiIGNsYXNzTmFtZT1cIm5hdmJhci1jb2xsYXBzZSBjb2xsYXBzZVwiPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG14LWF1dG9cIj5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI2ludHJvZHVjdGlvblwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIGFjaXZlIHB4LTRcIj5cclxuICAgICAgICAgICAgICBJbnRyb2R1Y3Rpb25cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI3dvcmtcIiBjbGFzc05hbWU9XCJuYXYtbGluayBweC00XCI+XHJcbiAgICAgICAgICAgICAgTXkgV29ya3NcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI2NvbnRhY3RcIiBjbGFzc05hbWU9XCJuYXYtbGluayBweC00XCI+XHJcbiAgICAgICAgICAgICAgQ29udGFjdCBNZVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT17YCR7c3R5bGVzLmxvZ2lufSBuYXZiYXItbmF2YH0+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gdGV4dC1ub3dyYXAgdGV4dC1sZy1jZW50ZXIgcHktMVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhcmsgcHgtMiBteC00XCJcclxuICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNsb2dpbk1vZGFsXCI+XHJcbiAgICAgICAgICAgICAge1wiIFwifUxvZ2lue1wiIFwifVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L25hdj5cclxuICA8Lz5cclxuICApO1xyXG59O1xyXG4gIFxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
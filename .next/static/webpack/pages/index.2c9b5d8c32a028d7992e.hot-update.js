webpackHotUpdate_N_E("pages/index",{

/***/ "./components/menu.js":
/*!****************************!*\
  !*** ./components/menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "C:\\Users\\Romena Debnath\\Desktop\\myproject\\components\\menu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

 //Icon menu

var IconMenu = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(IconMenu, _Component);

  var _super = _createSuper(IconMenu);

  function IconMenu() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, IconMenu);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(IconMenu, [{
    key: "render",
    value: function render() {
      return __jsx("svg", {
        width: "1.5em",
        height: "1.5em",
        viewBox: "0 0 16 16",
        "class": "bi bi-justify",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 13
        }
      }, __jsx("path", {
        "fill-rule": "evenodd",
        d: "M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 17
        }
      }));
    }
  }]);

  return IconMenu;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (IconMenu);

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

/***/ }),

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
  }), __jsx("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZW51LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdmJhci5qcyJdLCJuYW1lcyI6WyJJY29uTWVudSIsIkNvbXBvbmVudCIsIk5hdmJhciIsInVzZVN0YXRlIiwibXlOYXZiYXIiLCJzZXROYXZiYXIiLCJteUJ0biIsInNldEJ1dHRvbiIsInVzZUVmZmVjdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGFuZ2VOYXZiYXIiLCJjaGFuZ2VCdXR0b24iLCJzY3JvbGxZIiwic3R5bGVzIiwibG9naW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztJQUNNQSxROzs7Ozs7Ozs7Ozs7OzZCQUNPO0FBQ0wsYUFDSTtBQUFLLGFBQUssRUFBQyxPQUFYO0FBQW1CLGNBQU0sRUFBQyxPQUExQjtBQUFrQyxlQUFPLEVBQUMsV0FBMUM7QUFBc0QsaUJBQU0sZUFBNUQ7QUFBNEUsWUFBSSxFQUFDLGNBQWpGO0FBQWdHLGFBQUssRUFBQyw0QkFBdEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQU0scUJBQVUsU0FBaEI7QUFBMEIsU0FBQyxFQUFDLHlQQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosQ0FESjtBQUtIOzs7O0VBUGtCQywrQzs7QUFVUkQsdUVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0UsTUFBVCxHQUFrQjtBQUFBOztBQUFBLGtCQUNhQyxzREFBUSxDQUFDLEtBQUQsQ0FEckI7QUFBQSxNQUNUQyxRQURTO0FBQUEsTUFDQUMsU0FEQTs7QUFBQSxtQkFFVUYsc0RBQVEsQ0FBQyxLQUFELENBRmxCO0FBQUEsTUFFVEcsS0FG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QUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLGFBQVMsRUFBRVQsS0FBSyxHQUFHLGlDQUFILEdBQXVDLGdDQUEvRDtBQUNFLFFBQUksRUFBQyxRQURQO0FBRUUsbUJBQVksT0FGZDtBQUdFLG1CQUFZLGFBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlHLEdBSkgsV0FJYSxHQUpiLENBREYsQ0FERixDQWxCRixDQWhCRixDQUhBLENBREEsQ0FERjtBQXNERDs7R0EzRVFKLE07O0tBQUFBLE07QUEyRVI7QUFNY0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmM5YjVkOGMzMmEwMjhkNzk5MmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vL0ljb24gbWVudVxyXG5jbGFzcyBJY29uTWVudSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjEuNWVtXCIgaGVpZ2h0PVwiMS41ZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgY2xhc3M9XCJiaSBiaS1qdXN0aWZ5XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTIgMTIuNWEuNS41IDAgMCAxIC41LS41aDExYS41LjUgMCAwIDEgMCAxaC0xMWEuNS41IDAgMCAxLS41LS41em0wLTNhLjUuNSAwIDAgMSAuNS0uNWgxMWEuNS41IDAgMCAxIDAgMWgtMTFhLjUuNSAwIDAgMS0uNS0uNXptMC0zYS41LjUgMCAwIDEgLjUtLjVoMTFhLjUuNSAwIDAgMSAwIDFoLTExYS41LjUgMCAwIDEtLjUtLjV6bTAtM2EuNS41IDAgMCAxIC41LS41aDExYS41LjUgMCAwIDEgMCAxaC0xMWEuNS41IDAgMCAxLS41LS41elwiLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSWNvbk1lbnU7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJY29uTWVudSBmcm9tICcuL21lbnUnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9uYXZiYXIubW9kdWxlLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBOYXZiYXIoKSB7XHJcbiAgY29uc3QgW215TmF2YmFyLHNldE5hdmJhcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW215QnRuLHNldEJ1dHRvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBjaGFuZ2VOYXZiYXIpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGNoYW5nZUJ1dHRvbik7XHJcbiAgfSxbXSk7XHJcbiAgY29uc3QgY2hhbmdlTmF2YmFyID0gKCkgPT4ge1xyXG4gICAgaWYod2luZG93LnNjcm9sbFkgPj0gNTQwKSB7XHJcbiAgICAgc2V0TmF2YmFyKHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0TmF2YmFyKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGNoYW5nZUJ1dHRvbiA9ICgpID0+IHtcclxuICAgIGlmKHdpbmRvdy5zY3JvbGxZID49IDU0MCkge1xyXG4gICAgIHNldEJ1dHRvbih0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEJ1dHRvbihmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxuYXZcclxuICAgIGlkPVwidG9wTmF2XCJcclxuICAgIGNsYXNzTmFtZT17bXlOYXZiYXIgPyAnbmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbXlOYXZiYXIgc2Nyb2xsZWQgZml4ZWQtdG9wIHB5LTAganVzdGlmeS1jb250ZW50LWFyb3VuZCcgOiAnbmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbXlOYXZiYXIgZml4ZWQtdG9wIHB5LTAganVzdGlmeS1jb250ZW50LWFyb3VuZCd9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJCcmFuZCBweC00XCI+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxoNT5Qcm9qZWN0IE5leHQuanM8L2g1PlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBjbGFzc05hbWU9e215QnRuID8gJ25hdmJhci10b2dnbGVyIGQtYmxvY2sgZC1sZy1ub25lIGJ0biBidG4tb3V0bGluZS1saWdodCBteC00JyA6ICduYXZiYXItdG9nZ2xlciBkLWJsb2NrIGQtbGctbm9uZSBidG4gYnRuLW91dGxpbmUtZGFyayBteC00J31cclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcclxuICAgICAgICBkYXRhLXRhcmdldD1cIiNtYWluY29udGVudFwiXHJcbiAgICAgICAgYXJpYS1jb250cm9scz1cIm1haW5jb250ZW50XCJcclxuICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxyXG4gICAgICAgIFxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGRpdiBpZD1cIm1haW5jb250ZW50XCIgY2xhc3NOYW1lPVwibmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlXCI+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjaW50cm9kdWN0aW9uXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgYWNpdmUgcHgtNFwiPlxyXG4gICAgICAgICAgICAgIEludHJvZHVjdGlvblxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjd29ya1wiIGNsYXNzTmFtZT1cIm5hdi1saW5rIHB4LTRcIj5cclxuICAgICAgICAgICAgICBNeSBXb3Jrc1xyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjY29udGFjdFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIHB4LTRcIj5cclxuICAgICAgICAgICAgICBDb250YWN0IE1lXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtgJHtzdHlsZXMubG9naW59IG5hdmJhci1uYXZgfT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSB0ZXh0LW5vd3JhcCB0ZXh0LWxnLWNlbnRlciBweS0xXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtteUJ0biA/ICdidG4gYnRuLW91dGxpbmUtbGlnaHQgcHgtMiBteC00JyA6ICdidG4gYnRuLW91dGxpbmUtZGFyayBweC0yIG14LTQnfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI2xvZ2luTW9kYWxcIj5cclxuICAgICAgICAgICAgICB7XCIgXCJ9TG9naW57XCIgXCJ9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvbmF2PlxyXG4gIDwvPlxyXG4gICk7XHJcbn07XHJcbiAgXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
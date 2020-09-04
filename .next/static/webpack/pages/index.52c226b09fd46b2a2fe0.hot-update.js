webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/home.module.css */ "./styles/home.module.css");
/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_downArrow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/downArrow */ "./components/downArrow.js");
/* harmony import */ var _components_send__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/send */ "./components/send.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "C:\\Users\\Romena Debnath\\Desktop\\myproject\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var HomePage = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HomePage, _Component);

  var _super = _createSuper(HomePage);

  function HomePage() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HomePage);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HomePage, [{
    key: "render",
    value: function render() {
      var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(false),
          readMore = _useState[0],
          setreadMore = _useState[1];

      var extraContent = document.getElementById("Div");
      var dots = document.getElementById("dots");
      Object(react__WEBPACK_IMPORTED_MODULE_9__["useEffect"])(function () {}, []);

      var changereadMore = function changereadMore() {
        if (dots.style) {
          setreadMore(true);
        } else {
          setreadMore(false);
        }
      };

      return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 7
        }
      }, __jsx("section", {
        id: "hero",
        className: "parallax",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "hpInner text-center text-light",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.intro,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }
      }, __jsx("h2", {
        className: "Title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 15
        }
      }, "Welcome to My Project"), __jsx("h4", {
        className: "subTitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 15
        }
      }, "I created this project with Next.js......"))), __jsx("div", {
        className: "".concat(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.down, " introText"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }
      }, __jsx("a", {
        href: "#introduction",
        className: "navbar-nav down text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }
      }, __jsx(_components_downArrow__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 15
        }
      })))), __jsx("section", {
        id: "introduction",
        className: "py-md-5 mt-md-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "container py-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 15
        }
      }, __jsx("img", {
        src: "/picture16.jpg",
        className: "".concat(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.pic, " img-fluid"),
        alt: "photo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 17
        }
      }, __jsx("h2", {
        className: "pt-3 pt-md-0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 19
        }
      }, " Introduction "), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 19
        }
      }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, eos. Doloremque natus nobis in hic voluptatum, corporis quisquam esse deserunt alias placeat magni, aspernatur et suscipit quasi odio culpa delectus!"), __jsx("button", {
        className: "".concat(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.more, " btn btn-primary"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 19
        }
      }, "Read More")))))), __jsx("section", {
        id: "work",
        className: "parallax text-light py-5 mt-2 mb-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "container py-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "row work",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "col-12 text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 15
        }
      }, __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 17
        }
      }, " My Works "), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 17
        }
      }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odio quia incidunt ratione tenetur provident laudantium voluptatibus similique eum recusandae quis beatae? Deserunt, exercitationem iusto sit perferendis non eos magni."))))), __jsx("section", {
        className: "gallery",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "container-fluid",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "row mx-auto text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "col-lg-3 col-sm-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 15
        }
      }, __jsx("img", {
        src: "/picture1.jpg",
        className: "img-fluid",
        alt: "photo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 17
        }
      }), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 17
        }
      }, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit similique officiis sunt in iste itaque adipisci porro, ullam animi voluptas provident maiores dolorum sint, quas eum ipsum dignissimos veritatis obcaecati.")), __jsx("div", {
        className: "col-lg-3 col-sm-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 15
        }
      }, __jsx("img", {
        src: "/picture1.jpg",
        className: "img-fluid",
        alt: "photo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 17
        }
      }), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 17
        }
      }, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit similique officiis sunt in iste itaque adipisci porro, ullam animi voluptas provident maiores dolorum sint, quas eum ipsum dignissimos veritatis obcaecati.")), __jsx("div", {
        className: "col-lg-3 col-sm-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 15
        }
      }, __jsx("img", {
        src: "/picture1.jpg",
        className: "img-fluid",
        alt: "photo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 17
        }
      }), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 17
        }
      }, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit similique officiis sunt in iste itaque adipisci porro, ullam animi voluptas provident maiores dolorum sint, quas eum ipsum dignissimos veritatis obcaecati.")), __jsx("div", {
        className: "col-lg-3 col-sm-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 15
        }
      }, __jsx("img", {
        src: "/picture1.jpg",
        className: "img-fluid",
        alt: "photo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 17
        }
      }), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 17
        }
      }, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit similique officiis sunt in iste itaque adipisci porro, ullam animi voluptas provident maiores dolorum sint, quas eum ipsum dignissimos veritatis obcaecati."))))), __jsx("section", {
        id: "contact",
        className: "parallax text-light py-5 mt-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "container pt-5 pb-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "col-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 15
        }
      }, __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 17
        }
      }, " Contact Me "), __jsx("hr", {
        className: "bg-light",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 17
        }
      }), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 17
        }
      }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, incidunt aut doloremque dignissimos iste culpa dicta velit assumenda placeat voluptatum nam beatae sit voluptate totam veritatis deserunt itaque veniam maxime?")), __jsx("div", {
        className: "col-12 col-md-5 col-lg-5 col-xl-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 15
        }
      }, __jsx("p", {
        className: "px-sm-3 text-justify",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 17
        }
      }, "Contact us and I'll be in touch within 24 hours."), __jsx("p", {
        className: "px-sm-3 text-justify",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 17
        }
      }, __jsx("img", {
        src: "/location.svg",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 19
        }
      }), __jsx("span", {
        className: "pl-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 19
        }
      }, "Siliguri, West Bengal, India")), __jsx("p", {
        className: "px-sm-3 text-justify",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 17
        }
      }, __jsx("img", {
        src: "/phone.svg",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 19
        }
      }), __jsx("span", {
        className: "pl-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 19
        }
      }, "+916253435363")), __jsx("p", {
        className: "px-sm-3 text-justify",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 17
        }
      }, __jsx("img", {
        src: "/email.svg",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 19
        }
      }), __jsx("span", {
        className: "pl-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 19
        }
      }, "projectemail@gmail.com"))), __jsx("div", {
        className: "col-12 col-md-7 col-lg-7 col-xl-7",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-12 col-md-6 col-lg-6 col-xl-6 form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 19
        }
      }, __jsx("input", {
        type: "text",
        className: "form-control",
        placeholder: "Enter your name",
        id: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-12 col-md-6 col-lg-6 col-xl-6 form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 19
        }
      }, __jsx("input", {
        type: "email",
        className: "form-control",
        placeholder: "Enter your email address",
        id: "Email",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 21
        }
      }))), __jsx("textarea", {
        className: "form-control",
        placeholder: "Comment",
        name: "comments",
        id: "comments",
        cols: "40",
        rows: "5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 17
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 17
        }
      }), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-sm-12 form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 19
        }
      }, __jsx("button", {
        className: "btn btn-outline-light",
        type: "submit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 21
        }
      }, __jsx(_components_send__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 23
        }
      })))))))));
    }
  }]);

  return HomePage;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJ1c2VTdGF0ZSIsInJlYWRNb3JlIiwic2V0cmVhZE1vcmUiLCJleHRyYUNvbnRlbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZG90cyIsInVzZUVmZmVjdCIsImNoYW5nZXJlYWRNb3JlIiwic3R5bGUiLCJzdHlsZXMiLCJpbnRybyIsImRvd24iLCJwaWMiLCJtb3JlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLFE7Ozs7Ozs7Ozs7Ozs7NkJBQ0s7QUFBQSxzQkFDeUJDLHNEQUFRLENBQUMsS0FBRCxDQURqQztBQUFBLFVBQ0FDLFFBREE7QUFBQSxVQUNVQyxXQURWOztBQUVQLFVBQU1DLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQXhCLENBQXJCO0FBQ0EsVUFBTUMsSUFBSSxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBYjtBQUVBRSw2REFBUyxDQUFDLFlBQU0sQ0FFYixDQUZNLEVBRUosRUFGSSxDQUFUOztBQUdBLFVBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUN6QixZQUFJRixJQUFJLENBQUNHLEtBQVQsRUFBZ0I7QUFDWlAscUJBQVcsQ0FBQyxJQUFELENBQVg7QUFDSCxTQUZELE1BRU87QUFDSEEscUJBQVcsQ0FBQyxLQUFELENBQVg7QUFDSDtBQUNKLE9BTkQ7O0FBT0EsYUFDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFTLFVBQUUsRUFBQyxNQUFaO0FBQW1CLGlCQUFTLEVBQUMsVUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBQyxnQ0FB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RUUsbUJBQVcsRUFBQyxTQUZkO0FBR0UsWUFBSSxFQUFDLFVBSFA7QUFJRSxVQUFFLEVBQUMsVUFKTDtBQUtFLFlBQUksRUFBQyxJQUxQO0FBTUUsWUFBSSxFQUFDLEdBTlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQW5CRixFQTJCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBM0JGLEVBNEJFO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGlCQUFTLEVBQUMsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQVEsaUJBQVMsRUFBQyx1QkFBbEI7QUFBMEMsWUFBSSxFQUFDLFFBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixDQURGLENBREYsQ0E1QkYsQ0E1QkYsQ0FERixDQURGLENBcEdGLENBREY7QUE0S0Q7Ozs7RUE1TG9CQywrQzs7QUErTFJoQix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41MmMyMjZiMDlmZDQ2YjJhMmZlMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2hvbWUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xyXG5pbXBvcnQgSWNvbmRvd25BcnJvdyBmcm9tIFwiLi4vY29tcG9uZW50cy9kb3duQXJyb3dcIjtcclxuaW1wb3J0IEljb25TZW5kIGZyb20gXCIuLi9jb21wb25lbnRzL3NlbmRcIjtcclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jbGFzcyBIb21lUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgW3JlYWRNb3JlLCBzZXRyZWFkTW9yZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBleHRyYUNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkRpdlwiKTtcclxuICAgIGNvbnN0IGRvdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvdHNcIik7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBcclxuICAgICAgfSwgW10pO1xyXG4gICAgY29uc3QgY2hhbmdlcmVhZE1vcmUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGRvdHMuc3R5bGUpIHtcclxuICAgICAgICAgICAgc2V0cmVhZE1vcmUodHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0cmVhZE1vcmUoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJoZXJvXCIgY2xhc3NOYW1lPVwicGFyYWxsYXhcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaHBJbm5lciB0ZXh0LWNlbnRlciB0ZXh0LWxpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW50cm99PlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJUaXRsZVwiPldlbGNvbWUgdG8gTXkgUHJvamVjdDwvaDI+XHJcbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInN1YlRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICBJIGNyZWF0ZWQgdGhpcyBwcm9qZWN0IHdpdGggTmV4dC5qcy4uLi4uLlxyXG4gICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmRvd259IGludHJvVGV4dGB9PlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI2ludHJvZHVjdGlvblwiIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgZG93biB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxJY29uZG93bkFycm93IC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbiBpZD1cImludHJvZHVjdGlvblwiIGNsYXNzTmFtZT1cInB5LW1kLTUgbXQtbWQtNVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHktNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiL3BpY3R1cmUxNi5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5waWN9IGltZy1mbHVpZGB9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cInBob3RvXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInB0LTMgcHQtbWQtMFwiPiBJbnRyb2R1Y3Rpb24gPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIsIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAgICAgICAgICAgICAgICAgQWNjdXNhbXVzLCBlb3MuIERvbG9yZW1xdWUgbmF0dXMgbm9iaXMgaW4gaGljIHZvbHVwdGF0dW0sXHJcbiAgICAgICAgICAgICAgICAgICAgY29ycG9yaXMgcXVpc3F1YW0gZXNzZSBkZXNlcnVudCBhbGlhcyBwbGFjZWF0IG1hZ25pLFxyXG4gICAgICAgICAgICAgICAgICAgIGFzcGVybmF0dXIgZXQgc3VzY2lwaXQgcXVhc2kgb2RpbyBjdWxwYSBkZWxlY3R1cyFcclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLm1vcmV9IGJ0biBidG4tcHJpbWFyeWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWQgTW9yZVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbiBpZD1cIndvcmtcIiBjbGFzc05hbWU9XCJwYXJhbGxheCB0ZXh0LWxpZ2h0IHB5LTUgbXQtMiBtYi01XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBweS01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHdvcmtcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPiBNeSBXb3JrcyA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG4gICAgICAgICAgICAgICAgICBBY2N1c2FudGl1bSwgb2RpbyBxdWlhIGluY2lkdW50IHJhdGlvbmUgdGVuZXR1ciBwcm92aWRlbnRcclxuICAgICAgICAgICAgICAgICAgbGF1ZGFudGl1bSB2b2x1cHRhdGlidXMgc2ltaWxpcXVlIGV1bSByZWN1c2FuZGFlIHF1aXMgYmVhdGFlP1xyXG4gICAgICAgICAgICAgICAgICBEZXNlcnVudCwgZXhlcmNpdGF0aW9uZW0gaXVzdG8gc2l0IHBlcmZlcmVuZGlzIG5vbiBlb3MgbWFnbmkuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImdhbGxlcnlcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG14LWF1dG8gdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9waWN0dXJlMS5qcGdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBhbHQ9XCJwaG90b1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAgICAgICAgICAgICAgIEltcGVkaXQgc2ltaWxpcXVlIG9mZmljaWlzIHN1bnQgaW4gaXN0ZSBpdGFxdWUgYWRpcGlzY2kgcG9ycm8sXHJcbiAgICAgICAgICAgICAgICAgIHVsbGFtIGFuaW1pIHZvbHVwdGFzIHByb3ZpZGVudCBtYWlvcmVzIGRvbG9ydW0gc2ludCwgcXVhcyBldW1cclxuICAgICAgICAgICAgICAgICAgaXBzdW0gZGlnbmlzc2ltb3MgdmVyaXRhdGlzIG9iY2FlY2F0aS5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9waWN0dXJlMS5qcGdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBhbHQ9XCJwaG90b1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAgICAgICAgICAgICAgIEltcGVkaXQgc2ltaWxpcXVlIG9mZmljaWlzIHN1bnQgaW4gaXN0ZSBpdGFxdWUgYWRpcGlzY2kgcG9ycm8sXHJcbiAgICAgICAgICAgICAgICAgIHVsbGFtIGFuaW1pIHZvbHVwdGFzIHByb3ZpZGVudCBtYWlvcmVzIGRvbG9ydW0gc2ludCwgcXVhcyBldW1cclxuICAgICAgICAgICAgICAgICAgaXBzdW0gZGlnbmlzc2ltb3MgdmVyaXRhdGlzIG9iY2FlY2F0aS5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9waWN0dXJlMS5qcGdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBhbHQ9XCJwaG90b1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAgICAgICAgICAgICAgIEltcGVkaXQgc2ltaWxpcXVlIG9mZmljaWlzIHN1bnQgaW4gaXN0ZSBpdGFxdWUgYWRpcGlzY2kgcG9ycm8sXHJcbiAgICAgICAgICAgICAgICAgIHVsbGFtIGFuaW1pIHZvbHVwdGFzIHByb3ZpZGVudCBtYWlvcmVzIGRvbG9ydW0gc2ludCwgcXVhcyBldW1cclxuICAgICAgICAgICAgICAgICAgaXBzdW0gZGlnbmlzc2ltb3MgdmVyaXRhdGlzIG9iY2FlY2F0aS5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9waWN0dXJlMS5qcGdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBhbHQ9XCJwaG90b1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAgICAgICAgICAgICAgIEltcGVkaXQgc2ltaWxpcXVlIG9mZmljaWlzIHN1bnQgaW4gaXN0ZSBpdGFxdWUgYWRpcGlzY2kgcG9ycm8sXHJcbiAgICAgICAgICAgICAgICAgIHVsbGFtIGFuaW1pIHZvbHVwdGFzIHByb3ZpZGVudCBtYWlvcmVzIGRvbG9ydW0gc2ludCwgcXVhcyBldW1cclxuICAgICAgICAgICAgICAgICAgaXBzdW0gZGlnbmlzc2ltb3MgdmVyaXRhdGlzIG9iY2FlY2F0aS5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJjb250YWN0XCIgY2xhc3NOYW1lPVwicGFyYWxsYXggdGV4dC1saWdodCBweS01IG10LTVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB0LTUgcGItMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+IENvbnRhY3QgTWUgPC9oMj5cclxuICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJiZy1saWdodFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuICAgICAgICAgICAgICAgICAgTWluaW1hLCBpbmNpZHVudCBhdXQgZG9sb3JlbXF1ZSBkaWduaXNzaW1vcyBpc3RlIGN1bHBhIGRpY3RhXHJcbiAgICAgICAgICAgICAgICAgIHZlbGl0IGFzc3VtZW5kYSBwbGFjZWF0IHZvbHVwdGF0dW0gbmFtIGJlYXRhZSBzaXQgdm9sdXB0YXRlXHJcbiAgICAgICAgICAgICAgICAgIHRvdGFtIHZlcml0YXRpcyBkZXNlcnVudCBpdGFxdWUgdmVuaWFtIG1heGltZT9cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNSBjb2wtbGctNSBjb2wteGwtNVwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHgtc20tMyB0ZXh0LWp1c3RpZnlcIj5cclxuICAgICAgICAgICAgICAgICAgQ29udGFjdCB1cyBhbmQgSSdsbCBiZSBpbiB0b3VjaCB3aXRoaW4gMjQgaG91cnMuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJweC1zbS0zIHRleHQtanVzdGlmeVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9sb2NhdGlvbi5zdmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwbC0yXCI+U2lsaWd1cmksIFdlc3QgQmVuZ2FsLCBJbmRpYTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB4LXNtLTMgdGV4dC1qdXN0aWZ5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3Bob25lLnN2Z1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBsLTJcIj4rOTE2MjUzNDM1MzYzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHgtc20tMyB0ZXh0LWp1c3RpZnlcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZW1haWwuc3ZnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGwtMlwiPnByb2plY3RlbWFpbEBnbWFpbC5jb208L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTcgY29sLWxnLTcgY29sLXhsLTdcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02IGNvbC1sZy02IGNvbC14bC02IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNiBjb2wteGwtNiBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb21tZW50XCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbW1lbnRzXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJjb21tZW50c1wiXHJcbiAgICAgICAgICAgICAgICAgIGNvbHM9XCI0MFwiXHJcbiAgICAgICAgICAgICAgICAgIHJvd3M9XCI1XCJcclxuICAgICAgICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtbGlnaHRcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SWNvblNlbmQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
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
        if (dots.style.display === "none") {
          extraContent.style.display === "block";
          setreadMore(true);
        } else {
          extraContent.style.display === "none";
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
      }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, eos. Doloremque natus nobis in hic voluptatum, corporis quisquam esse deserunt alias placeat magni, aspernatur et suscipit quasi odio culpa delectus!", __jsx("div", {
        id: "dots",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }
      }, "....")), __jsx("div", {
        id: "Div",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 25
        }
      }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quibusdam, cumque eligendi consequatur eaque quidem ipsam libero ab? Ipsum ea laudantium maxime obcaecati temporibus eius facere rem debitis, est odio?"), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 25
        }
      }, "Esse error molestiae, beatae dignissimos in ut aspernatur? Obcaecati enim cumque non maiores nulla similique corrupti reprehenderit laborum earum fugiat! Libero dicta tenetur praesentium aperiam ut molestiae veniam neque placeat!"), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 25
        }
      }, "Iste facilis ducimus eius inventore autem ullam libero, quidem voluptatum blanditiis deleniti reiciendis earum, labore iure quibusdam voluptatibus id. Corrupti, deleniti veritatis distinctio harum exercitationem dolores saepe obcaecati corporis atque?")), __jsx("button", {
        className: "".concat(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.more, " btn btn-primary"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 19
        }
      }, "Read More")))))), __jsx("section", {
        id: "work",
        className: "parallax text-light py-5 mt-2 mb-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "container py-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "row work",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "col-12 text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 15
        }
      }, __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 17
        }
      }, " My Works "), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 17
        }
      }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odio quia incidunt ratione tenetur provident laudantium voluptatibus similique eum recusandae quis beatae? Deserunt, exercitationem iusto sit perferendis non eos magni."))))), __jsx("section", {
        className: "gallery",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "container-fluid",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "row mx-auto text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "col-lg-3 col-sm-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 15
        }
      }, __jsx("img", {
        src: "/picture1.jpg",
        className: "img-fluid",
        alt: "photo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 17
        }
      }), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 17
        }
      }, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit similique officiis sunt in iste itaque adipisci porro, ullam animi voluptas provident maiores dolorum sint, quas eum ipsum dignissimos veritatis obcaecati.")), __jsx("div", {
        className: "col-lg-3 col-sm-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 15
        }
      }, __jsx("img", {
        src: "/picture1.jpg",
        className: "img-fluid",
        alt: "photo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 17
        }
      }), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 17
        }
      }, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit similique officiis sunt in iste itaque adipisci porro, ullam animi voluptas provident maiores dolorum sint, quas eum ipsum dignissimos veritatis obcaecati.")), __jsx("div", {
        className: "col-lg-3 col-sm-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 15
        }
      }, __jsx("img", {
        src: "/picture1.jpg",
        className: "img-fluid",
        alt: "photo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 17
        }
      }), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 17
        }
      }, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit similique officiis sunt in iste itaque adipisci porro, ullam animi voluptas provident maiores dolorum sint, quas eum ipsum dignissimos veritatis obcaecati.")), __jsx("div", {
        className: "col-lg-3 col-sm-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 15
        }
      }, __jsx("img", {
        src: "/picture1.jpg",
        className: "img-fluid",
        alt: "photo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 17
        }
      }), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 17
        }
      }, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit similique officiis sunt in iste itaque adipisci porro, ullam animi voluptas provident maiores dolorum sint, quas eum ipsum dignissimos veritatis obcaecati."))))), __jsx("section", {
        id: "contact",
        className: "parallax text-light py-5 mt-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "container pt-5 pb-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "col-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 15
        }
      }, __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 17
        }
      }, " Contact Me "), __jsx("hr", {
        className: "bg-light",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 17
        }
      }), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 17
        }
      }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, incidunt aut doloremque dignissimos iste culpa dicta velit assumenda placeat voluptatum nam beatae sit voluptate totam veritatis deserunt itaque veniam maxime?")), __jsx("div", {
        className: "col-12 col-md-5 col-lg-5 col-xl-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 15
        }
      }, __jsx("p", {
        className: "px-sm-3 text-justify",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 17
        }
      }, "Contact us and I'll be in touch within 24 hours."), __jsx("p", {
        className: "px-sm-3 text-justify",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 17
        }
      }, __jsx("img", {
        src: "/location.svg",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 19
        }
      }), __jsx("span", {
        className: "pl-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 19
        }
      }, "Siliguri, West Bengal, India")), __jsx("p", {
        className: "px-sm-3 text-justify",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 17
        }
      }, __jsx("img", {
        src: "/phone.svg",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 19
        }
      }), __jsx("span", {
        className: "pl-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 19
        }
      }, "+916253435363")), __jsx("p", {
        className: "px-sm-3 text-justify",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 17
        }
      }, __jsx("img", {
        src: "/email.svg",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 19
        }
      }), __jsx("span", {
        className: "pl-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 19
        }
      }, "projectemail@gmail.com"))), __jsx("div", {
        className: "col-12 col-md-7 col-lg-7 col-xl-7",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-12 col-md-6 col-lg-6 col-xl-6 form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
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
          lineNumber: 179,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "col-12 col-md-6 col-lg-6 col-xl-6 form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
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
          lineNumber: 187,
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
          lineNumber: 195,
          columnNumber: 17
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 17
        }
      }), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-sm-12 form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 19
        }
      }, __jsx("button", {
        className: "btn btn-outline-light",
        type: "submit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 21
        }
      }, __jsx(_components_send__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJ1c2VTdGF0ZSIsInJlYWRNb3JlIiwic2V0cmVhZE1vcmUiLCJleHRyYUNvbnRlbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZG90cyIsInVzZUVmZmVjdCIsImNoYW5nZXJlYWRNb3JlIiwic3R5bGUiLCJkaXNwbGF5Iiwic3R5bGVzIiwiaW50cm8iLCJkb3duIiwicGljIiwibW9yZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxROzs7Ozs7Ozs7Ozs7OzZCQUNLO0FBQUEsc0JBQ3lCQyxzREFBUSxDQUFDLEtBQUQsQ0FEakM7QUFBQSxVQUNBQyxRQURBO0FBQUEsVUFDVUMsV0FEVjs7QUFFUCxVQUFNQyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUF4QixDQUFyQjtBQUNBLFVBQU1DLElBQUksR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQWI7QUFFQUUsNkRBQVMsQ0FBQyxZQUFNLENBQUUsQ0FBVCxFQUFXLEVBQVgsQ0FBVDs7QUFDQSxVQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0IsWUFBSUYsSUFBSSxDQUFDRyxLQUFMLENBQVdDLE9BQVgsS0FBdUIsTUFBM0IsRUFBbUM7QUFDakNQLHNCQUFZLENBQUNNLEtBQWIsQ0FBbUJDLE9BQW5CLEtBQStCLE9BQS9CO0FBQ0FSLHFCQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0QsU0FIRCxNQUdPO0FBQ0hDLHNCQUFZLENBQUNNLEtBQWIsQ0FBbUJDLE9BQW5CLEtBQStCLE1BQS9CO0FBQ0ZSLHFCQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0Q7QUFDRixPQVJEOztBQVNBLGFBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBUyxVQUFFLEVBQUMsTUFBWjtBQUFtQixpQkFBUyxFQUFDLFVBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGlCQUFTLEVBQUMsZ0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBRVMsOERBQU0sQ0FBQ0MsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUksaUJBQVMsRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREYsRUFFRTtBQUFJLGlCQUFTLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFEQUZGLENBREYsQ0FERixFQVNFO0FBQUssaUJBQVMsWUFBS0QsOERBQU0sQ0FBQ0UsSUFBWixlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFHLFlBQUksRUFBQyxlQUFSO0FBQXdCLGlCQUFTLEVBQUMsNkJBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixDQURGLENBVEYsQ0FERixFQWdCRTtBQUFTLFVBQUUsRUFBQyxjQUFaO0FBQTJCLGlCQUFTLEVBQUMsaUJBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGlCQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGlCQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFDRSxX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RDs7OztFQWxOb0JDLCtDOztBQXFOUmpCLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjI3M2Y3YjZmZjFjMTMwMDdiYjkxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvaG9tZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XHJcbmltcG9ydCBJY29uZG93bkFycm93IGZyb20gXCIuLi9jb21wb25lbnRzL2Rvd25BcnJvd1wiO1xyXG5pbXBvcnQgSWNvblNlbmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2VuZFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jbGFzcyBIb21lUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgW3JlYWRNb3JlLCBzZXRyZWFkTW9yZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBleHRyYUNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkRpdlwiKTtcclxuICAgIGNvbnN0IGRvdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvdHNcIik7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHt9LCBbXSk7XHJcbiAgICBjb25zdCBjaGFuZ2VyZWFkTW9yZSA9ICgpID0+IHtcclxuICAgICAgaWYgKGRvdHMuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcclxuICAgICAgICBleHRyYUNvbnRlbnQuc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiO1xyXG4gICAgICAgIHNldHJlYWRNb3JlKHRydWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZXh0cmFDb250ZW50LnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiXHJcbiAgICAgICAgc2V0cmVhZE1vcmUoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8c2VjdGlvbiBpZD1cImhlcm9cIiBjbGFzc05hbWU9XCJwYXJhbGxheFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJocElubmVyIHRleHQtY2VudGVyIHRleHQtbGlnaHRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnRyb30+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIlRpdGxlXCI+V2VsY29tZSB0byBNeSBQcm9qZWN0PC9oMj5cclxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwic3ViVGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIEkgY3JlYXRlZCB0aGlzIHByb2plY3Qgd2l0aCBOZXh0LmpzLi4uLi4uXHJcbiAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuZG93bn0gaW50cm9UZXh0YH0+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjaW50cm9kdWN0aW9uXCIgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBkb3duIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPEljb25kb3duQXJyb3cgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uIGlkPVwiaW50cm9kdWN0aW9uXCIgY2xhc3NOYW1lPVwicHktbWQtNSBtdC1tZC01XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBweS01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvcGljdHVyZTE2LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnBpY30gaW1nLWZsdWlkYH1cclxuICAgICAgICAgICAgICAgICAgYWx0PVwicGhvdG9cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicHQtMyBwdC1tZC0wXCI+IEludHJvZHVjdGlvbiA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciwgYWRpcGlzaWNpbmcgZWxpdC5cclxuICAgICAgICAgICAgICAgICAgICBBY2N1c2FtdXMsIGVvcy4gRG9sb3JlbXF1ZSBuYXR1cyBub2JpcyBpbiBoaWMgdm9sdXB0YXR1bSxcclxuICAgICAgICAgICAgICAgICAgICBjb3Jwb3JpcyBxdWlzcXVhbSBlc3NlIGRlc2VydW50IGFsaWFzIHBsYWNlYXQgbWFnbmksXHJcbiAgICAgICAgICAgICAgICAgICAgYXNwZXJuYXR1ciBldCBzdXNjaXBpdCBxdWFzaSBvZGlvIGN1bHBhIGRlbGVjdHVzIVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJkb3RzXCI+Li4uLjwvZGl2PiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiRGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFF1YWVyYXQgcXVpYnVzZGFtLCBjdW1xdWUgZWxpZ2VuZGkgY29uc2VxdWF0dXIgZWFxdWUgcXVpZGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpcHNhbSBsaWJlcm8gYWI/IElwc3VtIGVhIGxhdWRhbnRpdW0gbWF4aW1lIG9iY2FlY2F0aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcG9yaWJ1cyBlaXVzIGZhY2VyZSByZW0gZGViaXRpcywgZXN0IG9kaW8/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFc3NlIGVycm9yIG1vbGVzdGlhZSwgYmVhdGFlIGRpZ25pc3NpbW9zIGluIHV0IGFzcGVybmF0dXI/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmNhZWNhdGkgZW5pbSBjdW1xdWUgbm9uIG1haW9yZXMgbnVsbGEgc2ltaWxpcXVlIGNvcnJ1cHRpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXByZWhlbmRlcml0IGxhYm9ydW0gZWFydW0gZnVnaWF0ISBMaWJlcm8gZGljdGEgdGVuZXR1clxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJhZXNlbnRpdW0gYXBlcmlhbSB1dCBtb2xlc3RpYWUgdmVuaWFtIG5lcXVlIHBsYWNlYXQhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJc3RlIGZhY2lsaXMgZHVjaW11cyBlaXVzIGludmVudG9yZSBhdXRlbSB1bGxhbSBsaWJlcm8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWlkZW0gdm9sdXB0YXR1bSBibGFuZGl0aWlzIGRlbGVuaXRpIHJlaWNpZW5kaXMgZWFydW0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJvcmUgaXVyZSBxdWlidXNkYW0gdm9sdXB0YXRpYnVzIGlkLiBDb3JydXB0aSwgZGVsZW5pdGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcml0YXRpcyBkaXN0aW5jdGlvIGhhcnVtIGV4ZXJjaXRhdGlvbmVtIGRvbG9yZXMgc2FlcGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iY2FlY2F0aSBjb3Jwb3JpcyBhdHF1ZT9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLm1vcmV9IGJ0biBidG4tcHJpbWFyeWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWQgTW9yZVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbiBpZD1cIndvcmtcIiBjbGFzc05hbWU9XCJwYXJhbGxheCB0ZXh0LWxpZ2h0IHB5LTUgbXQtMiBtYi01XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBweS01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHdvcmtcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPiBNeSBXb3JrcyA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG4gICAgICAgICAgICAgICAgICBBY2N1c2FudGl1bSwgb2RpbyBxdWlhIGluY2lkdW50IHJhdGlvbmUgdGVuZXR1ciBwcm92aWRlbnRcclxuICAgICAgICAgICAgICAgICAgbGF1ZGFudGl1bSB2b2x1cHRhdGlidXMgc2ltaWxpcXVlIGV1bSByZWN1c2FuZGFlIHF1aXMgYmVhdGFlP1xyXG4gICAgICAgICAgICAgICAgICBEZXNlcnVudCwgZXhlcmNpdGF0aW9uZW0gaXVzdG8gc2l0IHBlcmZlcmVuZGlzIG5vbiBlb3MgbWFnbmkuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImdhbGxlcnlcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG14LWF1dG8gdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9waWN0dXJlMS5qcGdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBhbHQ9XCJwaG90b1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAgICAgICAgICAgICAgIEltcGVkaXQgc2ltaWxpcXVlIG9mZmljaWlzIHN1bnQgaW4gaXN0ZSBpdGFxdWUgYWRpcGlzY2kgcG9ycm8sXHJcbiAgICAgICAgICAgICAgICAgIHVsbGFtIGFuaW1pIHZvbHVwdGFzIHByb3ZpZGVudCBtYWlvcmVzIGRvbG9ydW0gc2ludCwgcXVhcyBldW1cclxuICAgICAgICAgICAgICAgICAgaXBzdW0gZGlnbmlzc2ltb3MgdmVyaXRhdGlzIG9iY2FlY2F0aS5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9waWN0dXJlMS5qcGdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBhbHQ9XCJwaG90b1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAgICAgICAgICAgICAgIEltcGVkaXQgc2ltaWxpcXVlIG9mZmljaWlzIHN1bnQgaW4gaXN0ZSBpdGFxdWUgYWRpcGlzY2kgcG9ycm8sXHJcbiAgICAgICAgICAgICAgICAgIHVsbGFtIGFuaW1pIHZvbHVwdGFzIHByb3ZpZGVudCBtYWlvcmVzIGRvbG9ydW0gc2ludCwgcXVhcyBldW1cclxuICAgICAgICAgICAgICAgICAgaXBzdW0gZGlnbmlzc2ltb3MgdmVyaXRhdGlzIG9iY2FlY2F0aS5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9waWN0dXJlMS5qcGdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBhbHQ9XCJwaG90b1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAgICAgICAgICAgICAgIEltcGVkaXQgc2ltaWxpcXVlIG9mZmljaWlzIHN1bnQgaW4gaXN0ZSBpdGFxdWUgYWRpcGlzY2kgcG9ycm8sXHJcbiAgICAgICAgICAgICAgICAgIHVsbGFtIGFuaW1pIHZvbHVwdGFzIHByb3ZpZGVudCBtYWlvcmVzIGRvbG9ydW0gc2ludCwgcXVhcyBldW1cclxuICAgICAgICAgICAgICAgICAgaXBzdW0gZGlnbmlzc2ltb3MgdmVyaXRhdGlzIG9iY2FlY2F0aS5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9waWN0dXJlMS5qcGdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBhbHQ9XCJwaG90b1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAgICAgICAgICAgICAgIEltcGVkaXQgc2ltaWxpcXVlIG9mZmljaWlzIHN1bnQgaW4gaXN0ZSBpdGFxdWUgYWRpcGlzY2kgcG9ycm8sXHJcbiAgICAgICAgICAgICAgICAgIHVsbGFtIGFuaW1pIHZvbHVwdGFzIHByb3ZpZGVudCBtYWlvcmVzIGRvbG9ydW0gc2ludCwgcXVhcyBldW1cclxuICAgICAgICAgICAgICAgICAgaXBzdW0gZGlnbmlzc2ltb3MgdmVyaXRhdGlzIG9iY2FlY2F0aS5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJjb250YWN0XCIgY2xhc3NOYW1lPVwicGFyYWxsYXggdGV4dC1saWdodCBweS01IG10LTVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB0LTUgcGItMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+IENvbnRhY3QgTWUgPC9oMj5cclxuICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJiZy1saWdodFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuICAgICAgICAgICAgICAgICAgTWluaW1hLCBpbmNpZHVudCBhdXQgZG9sb3JlbXF1ZSBkaWduaXNzaW1vcyBpc3RlIGN1bHBhIGRpY3RhXHJcbiAgICAgICAgICAgICAgICAgIHZlbGl0IGFzc3VtZW5kYSBwbGFjZWF0IHZvbHVwdGF0dW0gbmFtIGJlYXRhZSBzaXQgdm9sdXB0YXRlXHJcbiAgICAgICAgICAgICAgICAgIHRvdGFtIHZlcml0YXRpcyBkZXNlcnVudCBpdGFxdWUgdmVuaWFtIG1heGltZT9cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNSBjb2wtbGctNSBjb2wteGwtNVwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHgtc20tMyB0ZXh0LWp1c3RpZnlcIj5cclxuICAgICAgICAgICAgICAgICAgQ29udGFjdCB1cyBhbmQgSSdsbCBiZSBpbiB0b3VjaCB3aXRoaW4gMjQgaG91cnMuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJweC1zbS0zIHRleHQtanVzdGlmeVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9sb2NhdGlvbi5zdmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwbC0yXCI+U2lsaWd1cmksIFdlc3QgQmVuZ2FsLCBJbmRpYTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB4LXNtLTMgdGV4dC1qdXN0aWZ5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3Bob25lLnN2Z1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBsLTJcIj4rOTE2MjUzNDM1MzYzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHgtc20tMyB0ZXh0LWp1c3RpZnlcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZW1haWwuc3ZnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGwtMlwiPnByb2plY3RlbWFpbEBnbWFpbC5jb208L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTcgY29sLWxnLTcgY29sLXhsLTdcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02IGNvbC1sZy02IGNvbC14bC02IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNiBjb2wteGwtNiBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb21tZW50XCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbW1lbnRzXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJjb21tZW50c1wiXHJcbiAgICAgICAgICAgICAgICAgIGNvbHM9XCI0MFwiXHJcbiAgICAgICAgICAgICAgICAgIHJvd3M9XCI1XCJcclxuICAgICAgICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtbGlnaHRcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SWNvblNlbmQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
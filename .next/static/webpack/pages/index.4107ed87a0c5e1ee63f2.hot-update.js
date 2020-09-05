webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/home.module.css */ "./styles/home.module.css");
/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_downArrow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/downArrow */ "./components/downArrow.js");
/* harmony import */ var _components_send__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/send */ "./components/send.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Romena Debnath\\Desktop\\myproject\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;






function HomePage() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      readMore = _useState[0],
      setreadMore = _useState[1];

  var changereadMore = function changereadMore() {
    var extraContent = document.getElementById("Div");
    var dots = document.getElementById("dots");
    var btnText = document.getElementById("BTN");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML;
      extraContent.style.display = "none";
      setreadMore(true);
    } else {
      extraContent.style.display = "block";
      setreadMore(false);
    }
  };

  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
    className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.intro,
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
    className: "".concat(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.down, " introText"),
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
  }, __jsx(_components_downArrow__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
    className: "".concat(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.pic, " img-fluid"),
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
    className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.dsply,
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
    className: readMore ? "".concat(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.more, " btn btn-primary") : "".concat(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.less, " btn btn-secondary"),
    onClick: changereadMore,
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
  }, __jsx(_components_send__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 23
    }
  })))))))));
}

_s(HomePage, "5RGAeIdQUAgFy80txDSqYKaLuc4=");

_c = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJ1c2VTdGF0ZSIsInJlYWRNb3JlIiwic2V0cmVhZE1vcmUiLCJjaGFuZ2VyZWFkTW9yZSIsImV4dHJhQ29udGVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkb3RzIiwiYnRuVGV4dCIsInN0eWxlIiwiZGlzcGxheSIsImlubmVySFRNTCIsInN0eWxlcyIsImludHJvIiwiZG93biIsInBpYyIsImRzcGx5IiwibW9yZSIsImxlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQSxrQkFDZ0JDLHNEQUFRLENBQUMsS0FBRCxDQUR4QjtBQUFBLE1BQ1RDLFFBRFM7QUFBQSxNQUNDQyxXQUREOztBQUVoQixNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0IsUUFBTUMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBckI7QUFDQSxRQUFNQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUFiO0FBQ0EsUUFBTUUsT0FBTyxHQUFHSCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBaEI7O0FBQ0EsUUFBSUMsSUFBSSxDQUFDRSxLQUFMLENBQVdDLE9BQVgsS0FBdUIsTUFBM0IsRUFBbUM7QUFDakNILFVBQUksQ0FBQ0UsS0FBTCxDQUFXQyxPQUFYLEdBQXFCLFFBQXJCO0FBQ0FGLGFBQU8sQ0FBQ0csU0FBUjtBQUNBUCxrQkFBWSxDQUFDSyxLQUFiLENBQW1CQyxPQUFuQixHQUE2QixNQUE3QjtBQUNBUixpQkFBVyxDQUFDLElBQUQsQ0FBWDtBQUNELEtBTEQsTUFLTztBQUNIRSxrQkFBWSxDQUFDSyxLQUFiLENBQW1CQyxPQUFuQixHQUE2QixPQUE3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QTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsQ0E1QkYsQ0E1QkYsQ0FERixDQURGLENBMUhGLENBREY7QUFrTUg7O0dBbE5RSixROztLQUFBQSxRO0FBb05NQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40MTA3ZWQ4N2EwYzVlMWVlNjNmMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2hvbWUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xyXG5pbXBvcnQgSWNvbmRvd25BcnJvdyBmcm9tIFwiLi4vY29tcG9uZW50cy9kb3duQXJyb3dcIjtcclxuaW1wb3J0IEljb25TZW5kIGZyb20gXCIuLi9jb21wb25lbnRzL3NlbmRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICAgIGNvbnN0IFtyZWFkTW9yZSwgc2V0cmVhZE1vcmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgY2hhbmdlcmVhZE1vcmUgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGV4dHJhQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiRGl2XCIpO1xyXG4gICAgICBjb25zdCBkb3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkb3RzXCIpO1xyXG4gICAgICBjb25zdCBidG5UZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJCVE5cIik7XHJcbiAgICAgIGlmIChkb3RzLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XHJcbiAgICAgICAgZG90cy5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjtcclxuICAgICAgICBidG5UZXh0LmlubmVySFRNTFxyXG4gICAgICAgIGV4dHJhQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgc2V0cmVhZE1vcmUodHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBleHRyYUNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgIHNldHJlYWRNb3JlKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJoZXJvXCIgY2xhc3NOYW1lPVwicGFyYWxsYXhcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaHBJbm5lciB0ZXh0LWNlbnRlciB0ZXh0LWxpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW50cm99PlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJUaXRsZVwiPldlbGNvbWUgdG8gTXkgUHJvamVjdDwvaDI+XHJcbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInN1YlRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICBJIGNyZWF0ZWQgdGhpcyBwcm9qZWN0IHdpdGggTmV4dC5qcy4uLi4uLlxyXG4gICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmRvd259IGludHJvVGV4dGB9PlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI2ludHJvZHVjdGlvblwiIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgZG93biB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxJY29uZG93bkFycm93IC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbiBpZD1cImludHJvZHVjdGlvblwiIGNsYXNzTmFtZT1cInB5LW1kLTUgbXQtbWQtNVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHktNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiL3BpY3R1cmUxNi5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5waWN9IGltZy1mbHVpZGB9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cInBob3RvXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInB0LTMgcHQtbWQtMFwiPiBJbnRyb2R1Y3Rpb24gPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIsIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAgICAgICAgICAgICAgICAgQWNjdXNhbXVzLCBlb3MuIERvbG9yZW1xdWUgbmF0dXMgbm9iaXMgaW4gaGljIHZvbHVwdGF0dW0sXHJcbiAgICAgICAgICAgICAgICAgICAgY29ycG9yaXMgcXVpc3F1YW0gZXNzZSBkZXNlcnVudCBhbGlhcyBwbGFjZWF0IG1hZ25pLFxyXG4gICAgICAgICAgICAgICAgICAgIGFzcGVybmF0dXIgZXQgc3VzY2lwaXQgcXVhc2kgb2RpbyBjdWxwYSBkZWxlY3R1cyFcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZG90c1wiPi4uLi48L2Rpdj4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIkRpdlwiY2xhc3NOYW1lPXtzdHlsZXMuZHNwbHl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBRdWFlcmF0IHF1aWJ1c2RhbSwgY3VtcXVlIGVsaWdlbmRpIGNvbnNlcXVhdHVyIGVhcXVlIHF1aWRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXBzYW0gbGliZXJvIGFiPyBJcHN1bSBlYSBsYXVkYW50aXVtIG1heGltZSBvYmNhZWNhdGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBvcmlidXMgZWl1cyBmYWNlcmUgcmVtIGRlYml0aXMsIGVzdCBvZGlvP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRXNzZSBlcnJvciBtb2xlc3RpYWUsIGJlYXRhZSBkaWduaXNzaW1vcyBpbiB1dCBhc3Blcm5hdHVyP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JjYWVjYXRpIGVuaW0gY3VtcXVlIG5vbiBtYWlvcmVzIG51bGxhIHNpbWlsaXF1ZSBjb3JydXB0aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwcmVoZW5kZXJpdCBsYWJvcnVtIGVhcnVtIGZ1Z2lhdCEgTGliZXJvIGRpY3RhIHRlbmV0dXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByYWVzZW50aXVtIGFwZXJpYW0gdXQgbW9sZXN0aWFlIHZlbmlhbSBuZXF1ZSBwbGFjZWF0IVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSXN0ZSBmYWNpbGlzIGR1Y2ltdXMgZWl1cyBpbnZlbnRvcmUgYXV0ZW0gdWxsYW0gbGliZXJvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVpZGVtIHZvbHVwdGF0dW0gYmxhbmRpdGlpcyBkZWxlbml0aSByZWljaWVuZGlzIGVhcnVtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFib3JlIGl1cmUgcXVpYnVzZGFtIHZvbHVwdGF0aWJ1cyBpZC4gQ29ycnVwdGksIGRlbGVuaXRpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJpdGF0aXMgZGlzdGluY3RpbyBoYXJ1bSBleGVyY2l0YXRpb25lbSBkb2xvcmVzIHNhZXBlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmNhZWNhdGkgY29ycG9yaXMgYXRxdWU/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3JlYWRNb3JlID8gYCR7c3R5bGVzLm1vcmV9IGJ0biBidG4tcHJpbWFyeWAgOiBgJHtzdHlsZXMubGVzc30gYnRuIGJ0bi1zZWNvbmRhcnlgfSBvbkNsaWNrPXtjaGFuZ2VyZWFkTW9yZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgUmVhZCBNb3JlXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uIGlkPVwid29ya1wiIGNsYXNzTmFtZT1cInBhcmFsbGF4IHRleHQtbGlnaHQgcHktNSBtdC0yIG1iLTVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB5LTVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgd29ya1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+IE15IFdvcmtzIDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAgICAgICAgICAgICAgIEFjY3VzYW50aXVtLCBvZGlvIHF1aWEgaW5jaWR1bnQgcmF0aW9uZSB0ZW5ldHVyIHByb3ZpZGVudFxyXG4gICAgICAgICAgICAgICAgICBsYXVkYW50aXVtIHZvbHVwdGF0aWJ1cyBzaW1pbGlxdWUgZXVtIHJlY3VzYW5kYWUgcXVpcyBiZWF0YWU/XHJcbiAgICAgICAgICAgICAgICAgIERlc2VydW50LCBleGVyY2l0YXRpb25lbSBpdXN0byBzaXQgcGVyZmVyZW5kaXMgbm9uIGVvcyBtYWduaS5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZ2FsbGVyeVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXgtYXV0byB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BpY3R1cmUxLmpwZ1wiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIGFsdD1cInBob3RvXCIgLz5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciwgc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuICAgICAgICAgICAgICAgICAgSW1wZWRpdCBzaW1pbGlxdWUgb2ZmaWNpaXMgc3VudCBpbiBpc3RlIGl0YXF1ZSBhZGlwaXNjaSBwb3JybyxcclxuICAgICAgICAgICAgICAgICAgdWxsYW0gYW5pbWkgdm9sdXB0YXMgcHJvdmlkZW50IG1haW9yZXMgZG9sb3J1bSBzaW50LCBxdWFzIGV1bVxyXG4gICAgICAgICAgICAgICAgICBpcHN1bSBkaWduaXNzaW1vcyB2ZXJpdGF0aXMgb2JjYWVjYXRpLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BpY3R1cmUxLmpwZ1wiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIGFsdD1cInBob3RvXCIgLz5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciwgc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuICAgICAgICAgICAgICAgICAgSW1wZWRpdCBzaW1pbGlxdWUgb2ZmaWNpaXMgc3VudCBpbiBpc3RlIGl0YXF1ZSBhZGlwaXNjaSBwb3JybyxcclxuICAgICAgICAgICAgICAgICAgdWxsYW0gYW5pbWkgdm9sdXB0YXMgcHJvdmlkZW50IG1haW9yZXMgZG9sb3J1bSBzaW50LCBxdWFzIGV1bVxyXG4gICAgICAgICAgICAgICAgICBpcHN1bSBkaWduaXNzaW1vcyB2ZXJpdGF0aXMgb2JjYWVjYXRpLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BpY3R1cmUxLmpwZ1wiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIGFsdD1cInBob3RvXCIgLz5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciwgc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuICAgICAgICAgICAgICAgICAgSW1wZWRpdCBzaW1pbGlxdWUgb2ZmaWNpaXMgc3VudCBpbiBpc3RlIGl0YXF1ZSBhZGlwaXNjaSBwb3JybyxcclxuICAgICAgICAgICAgICAgICAgdWxsYW0gYW5pbWkgdm9sdXB0YXMgcHJvdmlkZW50IG1haW9yZXMgZG9sb3J1bSBzaW50LCBxdWFzIGV1bVxyXG4gICAgICAgICAgICAgICAgICBpcHN1bSBkaWduaXNzaW1vcyB2ZXJpdGF0aXMgb2JjYWVjYXRpLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BpY3R1cmUxLmpwZ1wiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIGFsdD1cInBob3RvXCIgLz5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciwgc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuICAgICAgICAgICAgICAgICAgSW1wZWRpdCBzaW1pbGlxdWUgb2ZmaWNpaXMgc3VudCBpbiBpc3RlIGl0YXF1ZSBhZGlwaXNjaSBwb3JybyxcclxuICAgICAgICAgICAgICAgICAgdWxsYW0gYW5pbWkgdm9sdXB0YXMgcHJvdmlkZW50IG1haW9yZXMgZG9sb3J1bSBzaW50LCBxdWFzIGV1bVxyXG4gICAgICAgICAgICAgICAgICBpcHN1bSBkaWduaXNzaW1vcyB2ZXJpdGF0aXMgb2JjYWVjYXRpLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbiBpZD1cImNvbnRhY3RcIiBjbGFzc05hbWU9XCJwYXJhbGxheCB0ZXh0LWxpZ2h0IHB5LTUgbXQtNVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHQtNSBwYi0yXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgIDxoMj4gQ29udGFjdCBNZSA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG4gICAgICAgICAgICAgICAgICBNaW5pbWEsIGluY2lkdW50IGF1dCBkb2xvcmVtcXVlIGRpZ25pc3NpbW9zIGlzdGUgY3VscGEgZGljdGFcclxuICAgICAgICAgICAgICAgICAgdmVsaXQgYXNzdW1lbmRhIHBsYWNlYXQgdm9sdXB0YXR1bSBuYW0gYmVhdGFlIHNpdCB2b2x1cHRhdGVcclxuICAgICAgICAgICAgICAgICAgdG90YW0gdmVyaXRhdGlzIGRlc2VydW50IGl0YXF1ZSB2ZW5pYW0gbWF4aW1lP1xyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC01IGNvbC1sZy01IGNvbC14bC01XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJweC1zbS0zIHRleHQtanVzdGlmeVwiPlxyXG4gICAgICAgICAgICAgICAgICBDb250YWN0IHVzIGFuZCBJJ2xsIGJlIGluIHRvdWNoIHdpdGhpbiAyNCBob3Vycy5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB4LXNtLTMgdGV4dC1qdXN0aWZ5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2xvY2F0aW9uLnN2Z1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBsLTJcIj5TaWxpZ3VyaSwgV2VzdCBCZW5nYWwsIEluZGlhPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHgtc20tMyB0ZXh0LWp1c3RpZnlcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcGhvbmUuc3ZnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGwtMlwiPis5MTYyNTM0MzUzNjM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJweC1zbS0zIHRleHQtanVzdGlmeVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9lbWFpbC5zdmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwbC0yXCI+cHJvamVjdGVtYWlsQGdtYWlsLmNvbTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyBjb2wtbGctNyBjb2wteGwtN1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTYgY29sLWxnLTYgY29sLXhsLTYgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02IGNvbC1sZy02IGNvbC14bC02IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsIGFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbW1lbnRcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiY29tbWVudHNcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cImNvbW1lbnRzXCJcclxuICAgICAgICAgICAgICAgICAgY29scz1cIjQwXCJcclxuICAgICAgICAgICAgICAgICAgcm93cz1cIjVcIlxyXG4gICAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1saWdodFwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJY29uU2VuZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
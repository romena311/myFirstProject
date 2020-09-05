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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      readMore = _useState[0],
      setreadMore = _useState[1];

  var changereadMore = function changereadMore() {
    var extraContent = document.getElementById("Div");
    var dots = document.getElementById("dots");
    var btnText = document.getElementById("BTN");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read More";
      extraContent.style.display = "none";
      setreadMore(true);
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read Less";
      extraContent.style.display = "inline";
      setreadMore(false);
    }
  };

  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("section", {
    id: "hero",
    className: "parallax",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "hpInner text-center text-light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.intro,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "Title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  }, "Welcome to My Project"), __jsx("h4", {
    className: "subTitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }, "I created this project with Next.js......")))), __jsx("div", {
    className: "".concat(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.down, " introText"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "#introduction",
    className: "navbar-nav down text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx(_components_downArrow__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  })))), __jsx("section", {
    id: "introduction",
    className: "py-md-5 mt-md-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container py-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/picture16.jpg",
    className: "".concat(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.pic, " img-fluid"),
    alt: "photo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "pt-3 pt-md-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 19
    }
  }, " Introduction "), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 19
    }
  }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, eos. Doloremque natus nobis in hic voluptatum, corporis quisquam esse deserunt alias placeat magni, aspernatur et suscipit quasi odio culpa delectus!", __jsx("span", {
    id: "dots",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }, "....")), __jsx("div", {
    id: "Div",
    className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.dsply,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quibusdam, cumque eligendi consequatur eaque quidem ipsam libero ab? Ipsum ea laudantium maxime obcaecati temporibus eius facere rem debitis, est odio?"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  }, "Esse error molestiae, beatae dignissimos in ut aspernatur? Obcaecati enim cumque non maiores nulla similique corrupti reprehenderit laborum earum fugiat! Libero dicta tenetur praesentium aperiam ut molestiae veniam neque placeat!"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 25
    }
  }, "Iste facilis ducimus eius inventore autem ullam libero, quidem voluptatum blanditiis deleniti reiciendis earum, labore iure quibusdam voluptatibus id. Corrupti, deleniti veritatis distinctio harum exercitationem dolores saepe obcaecati corporis atque?")), __jsx("button", {
    id: "BTN",
    className: readMore ? "btn btn-primary" : "btn btn-secondary",
    onClick: changereadMore,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 19
    }
  }, "Read More")))))), __jsx("section", {
    id: "work",
    className: "parallax text-light py-5 mt-2 mb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container py-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row work",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-12 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 15
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }, " My Works "), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odio quia incidunt ratione tenetur provident laudantium voluptatibus similique eum recusandae quis beatae? Deserunt, exercitationem iusto sit perferendis non eos magni."))))), __jsx("section", {
    className: "gallery",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row mx-auto text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-lg-3 col-sm-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/picture1.jpg",
    className: "img-fluid",
    alt: "photo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit similique officiis sunt in iste itaque adipisci porro, ullam animi voluptas provident maiores dolorum sint, quas eum ipsum dignissimos veritatis obcaecati.")), __jsx("div", {
    className: "col-lg-3 col-sm-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/picture1.jpg",
    className: "img-fluid",
    alt: "photo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit similique officiis sunt in iste itaque adipisci porro, ullam animi voluptas provident maiores dolorum sint, quas eum ipsum dignissimos veritatis obcaecati.")), __jsx("div", {
    className: "col-lg-3 col-sm-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/picture1.jpg",
    className: "img-fluid",
    alt: "photo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit similique officiis sunt in iste itaque adipisci porro, ullam animi voluptas provident maiores dolorum sint, quas eum ipsum dignissimos veritatis obcaecati.")), __jsx("div", {
    className: "col-lg-3 col-sm-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/picture1.jpg",
    className: "img-fluid",
    alt: "photo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 17
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit similique officiis sunt in iste itaque adipisci porro, ullam animi voluptas provident maiores dolorum sint, quas eum ipsum dignissimos veritatis obcaecati."))))), __jsx("section", {
    id: "contact",
    className: "parallax text-light py-5 mt-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container pt-5 pb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 15
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 17
    }
  }, " Contact Me "), __jsx("hr", {
    className: "bg-light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 17
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, incidunt aut doloremque dignissimos iste culpa dicta velit assumenda placeat voluptatum nam beatae sit voluptate totam veritatis deserunt itaque veniam maxime?")), __jsx("div", {
    className: "col-12 col-md-5 col-lg-5 col-xl-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "px-sm-3 text-justify",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 17
    }
  }, "Contact us and I'll be in touch within 24 hours."), __jsx("p", {
    className: "px-sm-3 text-justify",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/location.svg",
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
  }, "Siliguri, West Bengal, India")), __jsx("p", {
    className: "px-sm-3 text-justify",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/phone.svg",
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
  }, "+916253435363")), __jsx("p", {
    className: "px-sm-3 text-justify",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/email.svg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 19
    }
  }), __jsx("span", {
    className: "pl-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 19
    }
  }, "projectemail@gmail.com"))), __jsx("div", {
    className: "col-12 col-md-7 col-lg-7 col-xl-7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-12 col-md-6 col-lg-6 col-xl-6 form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
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
      lineNumber: 183,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "col-12 col-md-6 col-lg-6 col-xl-6 form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
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
      lineNumber: 191,
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
      lineNumber: 199,
      columnNumber: 17
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-sm-12 form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "btn btn-outline-light",
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 21
    }
  }, __jsx(_components_send__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 23
    }
  })))))))));
}

_s(HomePage, "GWX+2tCshR1tycGDfoxOwUq9nr4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJ1c2VTdGF0ZSIsInJlYWRNb3JlIiwic2V0cmVhZE1vcmUiLCJjaGFuZ2VyZWFkTW9yZSIsImV4dHJhQ29udGVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkb3RzIiwiYnRuVGV4dCIsInN0eWxlIiwiZGlzcGxheSIsImlubmVySFRNTCIsInN0eWxlcyIsImludHJvIiwiZG93biIsInBpYyIsImRzcGx5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQUEsa0JBQ2dCQyxzREFBUSxDQUFDLElBQUQsQ0FEeEI7QUFBQSxNQUNUQyxRQURTO0FBQUEsTUFDQ0MsV0FERDs7QUFFaEIsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCLFFBQU1DLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQXhCLENBQXJCO0FBQ0EsUUFBTUMsSUFBSSxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBYjtBQUNBLFFBQU1FLE9BQU8sR0FBR0gsUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQXhCLENBQWhCOztBQUNBLFFBQUlDLElBQUksQ0FBQ0UsS0FBTCxDQUFXQyxPQUFYLEtBQXVCLE1BQTNCLEVBQW1DO0FBQ2pDSCxVQUFJLENBQUNFLEtBQUwsQ0FBV0MsT0FBWCxHQUFxQixRQUFyQjtBQUNBRixhQUFPLENBQUNHLFNBQVIsR0FBb0IsV0FBcEI7QUFDQVAsa0JBQVksQ0FBQ0ssS0FBYixDQUFtQkMsT0FBbkIsR0FBNkIsTUFBN0I7QUFDQVIsaUJBQVcsQ0FBQyxJQUFELENBQVg7QUFDRCxLQUxELE1BS087QUFDSEssVUFBSSxDQUFDRSxLQUFMLENBQVdDLE9BQVgsR0FBcUIsTUFBckI7QUFD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QyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxhQUFTLEVBQUMsdUJBQWxCO0FBQTBDLFFBQUksRUFBQyxRQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQURGLENBNUJGLENBNUJGLENBREYsQ0FERixDQTVIRixDQURGO0FBb01IOztHQXROUUosUTs7S0FBQUEsUTtBQXdOTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGIzM2YyOThlZjMwYmI5NzYzZWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9ob21lLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcclxuaW1wb3J0IEljb25kb3duQXJyb3cgZnJvbSBcIi4uL2NvbXBvbmVudHMvZG93bkFycm93XCI7XHJcbmltcG9ydCBJY29uU2VuZCBmcm9tIFwiLi4vY29tcG9uZW50cy9zZW5kXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XHJcbiAgICBjb25zdCBbcmVhZE1vcmUsIHNldHJlYWRNb3JlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgY2hhbmdlcmVhZE1vcmUgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGV4dHJhQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiRGl2XCIpO1xyXG4gICAgICBjb25zdCBkb3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkb3RzXCIpO1xyXG4gICAgICBjb25zdCBidG5UZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJCVE5cIik7XHJcbiAgICAgIGlmIChkb3RzLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XHJcbiAgICAgICAgZG90cy5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjtcclxuICAgICAgICBidG5UZXh0LmlubmVySFRNTCA9IFwiUmVhZCBNb3JlXCI7XHJcbiAgICAgICAgZXh0cmFDb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBzZXRyZWFkTW9yZSh0cnVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRvdHMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgYnRuVGV4dC5pbm5lckhUTUwgPSBcIlJlYWQgTGVzc1wiO1xyXG4gICAgICAgICAgZXh0cmFDb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiO1xyXG4gICAgICAgICAgc2V0cmVhZE1vcmUoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8c2VjdGlvbiBpZD1cImhlcm9cIiBjbGFzc05hbWU9XCJwYXJhbGxheFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhwSW5uZXIgdGV4dC1jZW50ZXIgdGV4dC1saWdodFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmludHJvfT5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiVGl0bGVcIj5XZWxjb21lIHRvIE15IFByb2plY3Q8L2gyPlxyXG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJzdWJUaXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgSSBjcmVhdGVkIHRoaXMgcHJvamVjdCB3aXRoIE5leHQuanMuLi4uLi5cclxuICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmRvd259IGludHJvVGV4dGB9PlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI2ludHJvZHVjdGlvblwiIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgZG93biB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxJY29uZG93bkFycm93IC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbiBpZD1cImludHJvZHVjdGlvblwiIGNsYXNzTmFtZT1cInB5LW1kLTUgbXQtbWQtNVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHktNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiL3BpY3R1cmUxNi5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5waWN9IGltZy1mbHVpZGB9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cInBob3RvXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInB0LTMgcHQtbWQtMFwiPiBJbnRyb2R1Y3Rpb24gPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIsIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAgICAgICAgICAgICAgICAgQWNjdXNhbXVzLCBlb3MuIERvbG9yZW1xdWUgbmF0dXMgbm9iaXMgaW4gaGljIHZvbHVwdGF0dW0sXHJcbiAgICAgICAgICAgICAgICAgICAgY29ycG9yaXMgcXVpc3F1YW0gZXNzZSBkZXNlcnVudCBhbGlhcyBwbGFjZWF0IG1hZ25pLFxyXG4gICAgICAgICAgICAgICAgICAgIGFzcGVybmF0dXIgZXQgc3VzY2lwaXQgcXVhc2kgb2RpbyBjdWxwYSBkZWxlY3R1cyFcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImRvdHNcIj4uLi4uPC9zcGFuPiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiRGl2XCJjbGFzc05hbWU9e3N0eWxlcy5kc3BseX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFF1YWVyYXQgcXVpYnVzZGFtLCBjdW1xdWUgZWxpZ2VuZGkgY29uc2VxdWF0dXIgZWFxdWUgcXVpZGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpcHNhbSBsaWJlcm8gYWI/IElwc3VtIGVhIGxhdWRhbnRpdW0gbWF4aW1lIG9iY2FlY2F0aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcG9yaWJ1cyBlaXVzIGZhY2VyZSByZW0gZGViaXRpcywgZXN0IG9kaW8/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFc3NlIGVycm9yIG1vbGVzdGlhZSwgYmVhdGFlIGRpZ25pc3NpbW9zIGluIHV0IGFzcGVybmF0dXI/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmNhZWNhdGkgZW5pbSBjdW1xdWUgbm9uIG1haW9yZXMgbnVsbGEgc2ltaWxpcXVlIGNvcnJ1cHRpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXByZWhlbmRlcml0IGxhYm9ydW0gZWFydW0gZnVnaWF0ISBMaWJlcm8gZGljdGEgdGVuZXR1clxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJhZXNlbnRpdW0gYXBlcmlhbSB1dCBtb2xlc3RpYWUgdmVuaWFtIG5lcXVlIHBsYWNlYXQhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJc3RlIGZhY2lsaXMgZHVjaW11cyBlaXVzIGludmVudG9yZSBhdXRlbSB1bGxhbSBsaWJlcm8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWlkZW0gdm9sdXB0YXR1bSBibGFuZGl0aWlzIGRlbGVuaXRpIHJlaWNpZW5kaXMgZWFydW0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJvcmUgaXVyZSBxdWlidXNkYW0gdm9sdXB0YXRpYnVzIGlkLiBDb3JydXB0aSwgZGVsZW5pdGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcml0YXRpcyBkaXN0aW5jdGlvIGhhcnVtIGV4ZXJjaXRhdGlvbmVtIGRvbG9yZXMgc2FlcGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iY2FlY2F0aSBjb3Jwb3JpcyBhdHF1ZT9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiQlROXCIgY2xhc3NOYW1lPXtyZWFkTW9yZSA/IGBidG4gYnRuLXByaW1hcnlgIDogYGJ0biBidG4tc2Vjb25kYXJ5YH0gb25DbGljaz17Y2hhbmdlcmVhZE1vcmV9PlxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWQgTW9yZVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbiBpZD1cIndvcmtcIiBjbGFzc05hbWU9XCJwYXJhbGxheCB0ZXh0LWxpZ2h0IHB5LTUgbXQtMiBtYi01XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBweS01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHdvcmtcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPiBNeSBXb3JrcyA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG4gICAgICAgICAgICAgICAgICBBY2N1c2FudGl1bSwgb2RpbyBxdWlhIGluY2lkdW50IHJhdGlvbmUgdGVuZXR1ciBwcm92aWRlbnRcclxuICAgICAgICAgICAgICAgICAgbGF1ZGFudGl1bSB2b2x1cHRhdGlidXMgc2ltaWxpcXVlIGV1bSByZWN1c2FuZGFlIHF1aXMgYmVhdGFlP1xyXG4gICAgICAgICAgICAgICAgICBEZXNlcnVudCwgZXhlcmNpdGF0aW9uZW0gaXVzdG8gc2l0IHBlcmZlcmVuZGlzIG5vbiBlb3MgbWFnbmkuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImdhbGxlcnlcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG14LWF1dG8gdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9waWN0dXJlMS5qcGdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBhbHQ9XCJwaG90b1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAgICAgICAgICAgICAgIEltcGVkaXQgc2ltaWxpcXVlIG9mZmljaWlzIHN1bnQgaW4gaXN0ZSBpdGFxdWUgYWRpcGlzY2kgcG9ycm8sXHJcbiAgICAgICAgICAgICAgICAgIHVsbGFtIGFuaW1pIHZvbHVwdGFzIHByb3ZpZGVudCBtYWlvcmVzIGRvbG9ydW0gc2ludCwgcXVhcyBldW1cclxuICAgICAgICAgICAgICAgICAgaXBzdW0gZGlnbmlzc2ltb3MgdmVyaXRhdGlzIG9iY2FlY2F0aS5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9waWN0dXJlMS5qcGdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBhbHQ9XCJwaG90b1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAgICAgICAgICAgICAgIEltcGVkaXQgc2ltaWxpcXVlIG9mZmljaWlzIHN1bnQgaW4gaXN0ZSBpdGFxdWUgYWRpcGlzY2kgcG9ycm8sXHJcbiAgICAgICAgICAgICAgICAgIHVsbGFtIGFuaW1pIHZvbHVwdGFzIHByb3ZpZGVudCBtYWlvcmVzIGRvbG9ydW0gc2ludCwgcXVhcyBldW1cclxuICAgICAgICAgICAgICAgICAgaXBzdW0gZGlnbmlzc2ltb3MgdmVyaXRhdGlzIG9iY2FlY2F0aS5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9waWN0dXJlMS5qcGdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBhbHQ9XCJwaG90b1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAgICAgICAgICAgICAgIEltcGVkaXQgc2ltaWxpcXVlIG9mZmljaWlzIHN1bnQgaW4gaXN0ZSBpdGFxdWUgYWRpcGlzY2kgcG9ycm8sXHJcbiAgICAgICAgICAgICAgICAgIHVsbGFtIGFuaW1pIHZvbHVwdGFzIHByb3ZpZGVudCBtYWlvcmVzIGRvbG9ydW0gc2ludCwgcXVhcyBldW1cclxuICAgICAgICAgICAgICAgICAgaXBzdW0gZGlnbmlzc2ltb3MgdmVyaXRhdGlzIG9iY2FlY2F0aS5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9waWN0dXJlMS5qcGdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBhbHQ9XCJwaG90b1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAgICAgICAgICAgICAgIEltcGVkaXQgc2ltaWxpcXVlIG9mZmljaWlzIHN1bnQgaW4gaXN0ZSBpdGFxdWUgYWRpcGlzY2kgcG9ycm8sXHJcbiAgICAgICAgICAgICAgICAgIHVsbGFtIGFuaW1pIHZvbHVwdGFzIHByb3ZpZGVudCBtYWlvcmVzIGRvbG9ydW0gc2ludCwgcXVhcyBldW1cclxuICAgICAgICAgICAgICAgICAgaXBzdW0gZGlnbmlzc2ltb3MgdmVyaXRhdGlzIG9iY2FlY2F0aS5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJjb250YWN0XCIgY2xhc3NOYW1lPVwicGFyYWxsYXggdGV4dC1saWdodCBweS01IG10LTVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB0LTUgcGItMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+IENvbnRhY3QgTWUgPC9oMj5cclxuICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJiZy1saWdodFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuICAgICAgICAgICAgICAgICAgTWluaW1hLCBpbmNpZHVudCBhdXQgZG9sb3JlbXF1ZSBkaWduaXNzaW1vcyBpc3RlIGN1bHBhIGRpY3RhXHJcbiAgICAgICAgICAgICAgICAgIHZlbGl0IGFzc3VtZW5kYSBwbGFjZWF0IHZvbHVwdGF0dW0gbmFtIGJlYXRhZSBzaXQgdm9sdXB0YXRlXHJcbiAgICAgICAgICAgICAgICAgIHRvdGFtIHZlcml0YXRpcyBkZXNlcnVudCBpdGFxdWUgdmVuaWFtIG1heGltZT9cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNSBjb2wtbGctNSBjb2wteGwtNVwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHgtc20tMyB0ZXh0LWp1c3RpZnlcIj5cclxuICAgICAgICAgICAgICAgICAgQ29udGFjdCB1cyBhbmQgSSdsbCBiZSBpbiB0b3VjaCB3aXRoaW4gMjQgaG91cnMuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJweC1zbS0zIHRleHQtanVzdGlmeVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9sb2NhdGlvbi5zdmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwbC0yXCI+U2lsaWd1cmksIFdlc3QgQmVuZ2FsLCBJbmRpYTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB4LXNtLTMgdGV4dC1qdXN0aWZ5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3Bob25lLnN2Z1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBsLTJcIj4rOTE2MjUzNDM1MzYzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHgtc20tMyB0ZXh0LWp1c3RpZnlcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZW1haWwuc3ZnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGwtMlwiPnByb2plY3RlbWFpbEBnbWFpbC5jb208L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTcgY29sLWxnLTcgY29sLXhsLTdcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02IGNvbC1sZy02IGNvbC14bC02IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNiBjb2wteGwtNiBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb21tZW50XCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbW1lbnRzXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJjb21tZW50c1wiXHJcbiAgICAgICAgICAgICAgICAgIGNvbHM9XCI0MFwiXHJcbiAgICAgICAgICAgICAgICAgIHJvd3M9XCI1XCJcclxuICAgICAgICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtbGlnaHRcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SWNvblNlbmQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
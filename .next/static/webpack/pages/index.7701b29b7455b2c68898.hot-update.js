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

    if (dots.style.display === "block") {
      extraContent.style.display === "block";
      setreadMore(false);
    } else {
      extraContent.style.display === "none";
      setreadMore(false);
    }
  };

  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("section", {
    id: "hero",
    className: "parallax",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "hpInner text-center text-light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.intro,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "Title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }, "Welcome to My Project"), __jsx("h4", {
    className: "subTitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, "I created this project with Next.js......"))), __jsx("div", {
    className: "".concat(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.down, " introText"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "#introduction",
    className: "navbar-nav down text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx(_components_downArrow__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  })))), __jsx("section", {
    id: "introduction",
    className: "py-md-5 mt-md-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container py-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/picture16.jpg",
    className: "".concat(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.pic, " img-fluid"),
    alt: "photo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "pt-3 pt-md-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 19
    }
  }, " Introduction "), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 19
    }
  }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, eos. Doloremque natus nobis in hic voluptatum, corporis quisquam esse deserunt alias placeat magni, aspernatur et suscipit quasi odio culpa delectus!", __jsx("div", {
    id: "dots",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, "....")), __jsx("div", {
    id: "Div",
    className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.dsply,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quibusdam, cumque eligendi consequatur eaque quidem ipsam libero ab? Ipsum ea laudantium maxime obcaecati temporibus eius facere rem debitis, est odio?"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 25
    }
  }, "Esse error molestiae, beatae dignissimos in ut aspernatur? Obcaecati enim cumque non maiores nulla similique corrupti reprehenderit laborum earum fugiat! Libero dicta tenetur praesentium aperiam ut molestiae veniam neque placeat!"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 25
    }
  }, "Iste facilis ducimus eius inventore autem ullam libero, quidem voluptatum blanditiis deleniti reiciendis earum, labore iure quibusdam voluptatibus id. Corrupti, deleniti veritatis distinctio harum exercitationem dolores saepe obcaecati corporis atque?")), __jsx("button", {
    className: readMore ? "".concat(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.more, " btn btn-primary") : "".concat(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.less, " btn btn-secondary"),
    onClick: changereadMore,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 19
    }
  }, "Read More")))))), __jsx("section", {
    id: "work",
    className: "parallax text-light py-5 mt-2 mb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container py-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row work",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-12 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }, " My Works "), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odio quia incidunt ratione tenetur provident laudantium voluptatibus similique eum recusandae quis beatae? Deserunt, exercitationem iusto sit perferendis non eos magni."))))), __jsx("section", {
    className: "gallery",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row mx-auto text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-lg-3 col-sm-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/picture1.jpg",
    className: "img-fluid",
    alt: "photo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit similique officiis sunt in iste itaque adipisci porro, ullam animi voluptas provident maiores dolorum sint, quas eum ipsum dignissimos veritatis obcaecati.")), __jsx("div", {
    className: "col-lg-3 col-sm-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/picture1.jpg",
    className: "img-fluid",
    alt: "photo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit similique officiis sunt in iste itaque adipisci porro, ullam animi voluptas provident maiores dolorum sint, quas eum ipsum dignissimos veritatis obcaecati.")), __jsx("div", {
    className: "col-lg-3 col-sm-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/picture1.jpg",
    className: "img-fluid",
    alt: "photo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 17
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit similique officiis sunt in iste itaque adipisci porro, ullam animi voluptas provident maiores dolorum sint, quas eum ipsum dignissimos veritatis obcaecati.")), __jsx("div", {
    className: "col-lg-3 col-sm-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/picture1.jpg",
    className: "img-fluid",
    alt: "photo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 17
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit similique officiis sunt in iste itaque adipisci porro, ullam animi voluptas provident maiores dolorum sint, quas eum ipsum dignissimos veritatis obcaecati."))))), __jsx("section", {
    id: "contact",
    className: "parallax text-light py-5 mt-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container pt-5 pb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 15
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  }, " Contact Me "), __jsx("hr", {
    className: "bg-light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 17
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, incidunt aut doloremque dignissimos iste culpa dicta velit assumenda placeat voluptatum nam beatae sit voluptate totam veritatis deserunt itaque veniam maxime?")), __jsx("div", {
    className: "col-12 col-md-5 col-lg-5 col-xl-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "px-sm-3 text-justify",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 17
    }
  }, "Contact us and I'll be in touch within 24 hours."), __jsx("p", {
    className: "px-sm-3 text-justify",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/location.svg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 19
    }
  }), __jsx("span", {
    className: "pl-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 19
    }
  }, "Siliguri, West Bengal, India")), __jsx("p", {
    className: "px-sm-3 text-justify",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/phone.svg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 19
    }
  }), __jsx("span", {
    className: "pl-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 19
    }
  }, "+916253435363")), __jsx("p", {
    className: "px-sm-3 text-justify",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/email.svg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 19
    }
  }), __jsx("span", {
    className: "pl-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 19
    }
  }, "projectemail@gmail.com"))), __jsx("div", {
    className: "col-12 col-md-7 col-lg-7 col-xl-7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-12 col-md-6 col-lg-6 col-xl-6 form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
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
      lineNumber: 176,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "col-12 col-md-6 col-lg-6 col-xl-6 form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
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
      lineNumber: 184,
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
      lineNumber: 192,
      columnNumber: 17
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-sm-12 form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "btn btn-outline-light",
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 21
    }
  }, __jsx(_components_send__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJ1c2VTdGF0ZSIsInJlYWRNb3JlIiwic2V0cmVhZE1vcmUiLCJjaGFuZ2VyZWFkTW9yZSIsImV4dHJhQ29udGVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkb3RzIiwic3R5bGUiLCJkaXNwbGF5Iiwic3R5bGVzIiwiaW50cm8iLCJkb3duIiwicGljIiwiZHNwbHkiLCJtb3JlIiwibGVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBLGtCQUNnQkMsc0RBQVEsQ0FBQyxLQUFELENBRHhCO0FBQUEsTUFDVEMsUUFEUztBQUFBLE1BQ0NDLFdBREQ7O0FBRWhCLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQixRQUFNQyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUF4QixDQUFyQjtBQUNBLFFBQU1DLElBQUksR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQWI7O0FBQ0EsUUFBSUMsSUFBSSxDQUFDQyxLQUFMLENBQVdDLE9BQVgsS0FBdUIsT0FBM0IsRUFBb0M7QUFDbENMLGtCQUFZLENBQUNJLEtBQWIsQ0FBbUJDLE9BQW5CLEtBQStCLE9BQS9CO0FBQ0FQLGlCQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0QsS0FIRCxNQUdPO0FBQ0hFLGtCQUFZLENBQUNJLEtBQWIsQ0FBbUJDLE9BQW5CLEtBQStCLE1BQS9CO0FBQ0FQLGlCQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0g7QUFDRixHQVZEOztBQVdBLFNBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUyxNQUFFLEVBQUMsTUFBWjtBQUFtQixhQUFTLEVBQUMsVUFB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QUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljc3MDFiMjliNzQ1NWIyYzY4ODk4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvaG9tZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XHJcbmltcG9ydCBJY29uZG93bkFycm93IGZyb20gXCIuLi9jb21wb25lbnRzL2Rvd25BcnJvd1wiO1xyXG5pbXBvcnQgSWNvblNlbmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2VuZFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gICAgY29uc3QgW3JlYWRNb3JlLCBzZXRyZWFkTW9yZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBjaGFuZ2VyZWFkTW9yZSA9ICgpID0+IHtcclxuICAgICAgY29uc3QgZXh0cmFDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJEaXZcIik7XHJcbiAgICAgIGNvbnN0IGRvdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvdHNcIik7XHJcbiAgICAgIGlmIChkb3RzLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xyXG4gICAgICAgIGV4dHJhQ29udGVudC5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCI7XHJcbiAgICAgICAgc2V0cmVhZE1vcmUoZmFsc2UpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZXh0cmFDb250ZW50LnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiO1xyXG4gICAgICAgICAgc2V0cmVhZE1vcmUoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8c2VjdGlvbiBpZD1cImhlcm9cIiBjbGFzc05hbWU9XCJwYXJhbGxheFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJocElubmVyIHRleHQtY2VudGVyIHRleHQtbGlnaHRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnRyb30+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIlRpdGxlXCI+V2VsY29tZSB0byBNeSBQcm9qZWN0PC9oMj5cclxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwic3ViVGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIEkgY3JlYXRlZCB0aGlzIHByb2plY3Qgd2l0aCBOZXh0LmpzLi4uLi4uXHJcbiAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuZG93bn0gaW50cm9UZXh0YH0+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjaW50cm9kdWN0aW9uXCIgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBkb3duIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPEljb25kb3duQXJyb3cgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uIGlkPVwiaW50cm9kdWN0aW9uXCIgY2xhc3NOYW1lPVwicHktbWQtNSBtdC1tZC01XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBweS01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvcGljdHVyZTE2LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnBpY30gaW1nLWZsdWlkYH1cclxuICAgICAgICAgICAgICAgICAgYWx0PVwicGhvdG9cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicHQtMyBwdC1tZC0wXCI+IEludHJvZHVjdGlvbiA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciwgYWRpcGlzaWNpbmcgZWxpdC5cclxuICAgICAgICAgICAgICAgICAgICBBY2N1c2FtdXMsIGVvcy4gRG9sb3JlbXF1ZSBuYXR1cyBub2JpcyBpbiBoaWMgdm9sdXB0YXR1bSxcclxuICAgICAgICAgICAgICAgICAgICBjb3Jwb3JpcyBxdWlzcXVhbSBlc3NlIGRlc2VydW50IGFsaWFzIHBsYWNlYXQgbWFnbmksXHJcbiAgICAgICAgICAgICAgICAgICAgYXNwZXJuYXR1ciBldCBzdXNjaXBpdCBxdWFzaSBvZGlvIGN1bHBhIGRlbGVjdHVzIVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJkb3RzXCI+Li4uLjwvZGl2PiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiRGl2XCJjbGFzc05hbWU9e3N0eWxlcy5kc3BseX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFF1YWVyYXQgcXVpYnVzZGFtLCBjdW1xdWUgZWxpZ2VuZGkgY29uc2VxdWF0dXIgZWFxdWUgcXVpZGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpcHNhbSBsaWJlcm8gYWI/IElwc3VtIGVhIGxhdWRhbnRpdW0gbWF4aW1lIG9iY2FlY2F0aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcG9yaWJ1cyBlaXVzIGZhY2VyZSByZW0gZGViaXRpcywgZXN0IG9kaW8/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFc3NlIGVycm9yIG1vbGVzdGlhZSwgYmVhdGFlIGRpZ25pc3NpbW9zIGluIHV0IGFzcGVybmF0dXI/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmNhZWNhdGkgZW5pbSBjdW1xdWUgbm9uIG1haW9yZXMgbnVsbGEgc2ltaWxpcXVlIGNvcnJ1cHRpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXByZWhlbmRlcml0IGxhYm9ydW0gZWFydW0gZnVnaWF0ISBMaWJlcm8gZGljdGEgdGVuZXR1clxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJhZXNlbnRpdW0gYXBlcmlhbSB1dCBtb2xlc3RpYWUgdmVuaWFtIG5lcXVlIHBsYWNlYXQhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJc3RlIGZhY2lsaXMgZHVjaW11cyBlaXVzIGludmVudG9yZSBhdXRlbSB1bGxhbSBsaWJlcm8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWlkZW0gdm9sdXB0YXR1bSBibGFuZGl0aWlzIGRlbGVuaXRpIHJlaWNpZW5kaXMgZWFydW0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJvcmUgaXVyZSBxdWlidXNkYW0gdm9sdXB0YXRpYnVzIGlkLiBDb3JydXB0aSwgZGVsZW5pdGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcml0YXRpcyBkaXN0aW5jdGlvIGhhcnVtIGV4ZXJjaXRhdGlvbmVtIGRvbG9yZXMgc2FlcGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iY2FlY2F0aSBjb3Jwb3JpcyBhdHF1ZT9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17cmVhZE1vcmUgPyBgJHtzdHlsZXMubW9yZX0gYnRuIGJ0bi1wcmltYXJ5YCA6IGAke3N0eWxlcy5sZXNzfSBidG4gYnRuLXNlY29uZGFyeWB9IG9uQ2xpY2s9e2NoYW5nZXJlYWRNb3JlfT5cclxuICAgICAgICAgICAgICAgICAgICBSZWFkIE1vcmVcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJ3b3JrXCIgY2xhc3NOYW1lPVwicGFyYWxsYXggdGV4dC1saWdodCBweS01IG10LTIgbWItNVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHktNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB3b3JrXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMj4gTXkgV29ya3MgPC9oMj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuICAgICAgICAgICAgICAgICAgQWNjdXNhbnRpdW0sIG9kaW8gcXVpYSBpbmNpZHVudCByYXRpb25lIHRlbmV0dXIgcHJvdmlkZW50XHJcbiAgICAgICAgICAgICAgICAgIGxhdWRhbnRpdW0gdm9sdXB0YXRpYnVzIHNpbWlsaXF1ZSBldW0gcmVjdXNhbmRhZSBxdWlzIGJlYXRhZT9cclxuICAgICAgICAgICAgICAgICAgRGVzZXJ1bnQsIGV4ZXJjaXRhdGlvbmVtIGl1c3RvIHNpdCBwZXJmZXJlbmRpcyBub24gZW9zIG1hZ25pLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJnYWxsZXJ5XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBteC1hdXRvIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcGljdHVyZTEuanBnXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgYWx0PVwicGhvdG9cIiAvPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yLCBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG4gICAgICAgICAgICAgICAgICBJbXBlZGl0IHNpbWlsaXF1ZSBvZmZpY2lpcyBzdW50IGluIGlzdGUgaXRhcXVlIGFkaXBpc2NpIHBvcnJvLFxyXG4gICAgICAgICAgICAgICAgICB1bGxhbSBhbmltaSB2b2x1cHRhcyBwcm92aWRlbnQgbWFpb3JlcyBkb2xvcnVtIHNpbnQsIHF1YXMgZXVtXHJcbiAgICAgICAgICAgICAgICAgIGlwc3VtIGRpZ25pc3NpbW9zIHZlcml0YXRpcyBvYmNhZWNhdGkuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcGljdHVyZTEuanBnXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgYWx0PVwicGhvdG9cIiAvPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yLCBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG4gICAgICAgICAgICAgICAgICBJbXBlZGl0IHNpbWlsaXF1ZSBvZmZpY2lpcyBzdW50IGluIGlzdGUgaXRhcXVlIGFkaXBpc2NpIHBvcnJvLFxyXG4gICAgICAgICAgICAgICAgICB1bGxhbSBhbmltaSB2b2x1cHRhcyBwcm92aWRlbnQgbWFpb3JlcyBkb2xvcnVtIHNpbnQsIHF1YXMgZXVtXHJcbiAgICAgICAgICAgICAgICAgIGlwc3VtIGRpZ25pc3NpbW9zIHZlcml0YXRpcyBvYmNhZWNhdGkuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcGljdHVyZTEuanBnXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgYWx0PVwicGhvdG9cIiAvPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yLCBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG4gICAgICAgICAgICAgICAgICBJbXBlZGl0IHNpbWlsaXF1ZSBvZmZpY2lpcyBzdW50IGluIGlzdGUgaXRhcXVlIGFkaXBpc2NpIHBvcnJvLFxyXG4gICAgICAgICAgICAgICAgICB1bGxhbSBhbmltaSB2b2x1cHRhcyBwcm92aWRlbnQgbWFpb3JlcyBkb2xvcnVtIHNpbnQsIHF1YXMgZXVtXHJcbiAgICAgICAgICAgICAgICAgIGlwc3VtIGRpZ25pc3NpbW9zIHZlcml0YXRpcyBvYmNhZWNhdGkuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcGljdHVyZTEuanBnXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgYWx0PVwicGhvdG9cIiAvPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yLCBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG4gICAgICAgICAgICAgICAgICBJbXBlZGl0IHNpbWlsaXF1ZSBvZmZpY2lpcyBzdW50IGluIGlzdGUgaXRhcXVlIGFkaXBpc2NpIHBvcnJvLFxyXG4gICAgICAgICAgICAgICAgICB1bGxhbSBhbmltaSB2b2x1cHRhcyBwcm92aWRlbnQgbWFpb3JlcyBkb2xvcnVtIHNpbnQsIHF1YXMgZXVtXHJcbiAgICAgICAgICAgICAgICAgIGlwc3VtIGRpZ25pc3NpbW9zIHZlcml0YXRpcyBvYmNhZWNhdGkuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uIGlkPVwiY29udGFjdFwiIGNsYXNzTmFtZT1cInBhcmFsbGF4IHRleHQtbGlnaHQgcHktNSBtdC01XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwdC01IHBiLTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPiBDb250YWN0IE1lIDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiYmctbGlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAgICAgICAgICAgICAgIE1pbmltYSwgaW5jaWR1bnQgYXV0IGRvbG9yZW1xdWUgZGlnbmlzc2ltb3MgaXN0ZSBjdWxwYSBkaWN0YVxyXG4gICAgICAgICAgICAgICAgICB2ZWxpdCBhc3N1bWVuZGEgcGxhY2VhdCB2b2x1cHRhdHVtIG5hbSBiZWF0YWUgc2l0IHZvbHVwdGF0ZVxyXG4gICAgICAgICAgICAgICAgICB0b3RhbSB2ZXJpdGF0aXMgZGVzZXJ1bnQgaXRhcXVlIHZlbmlhbSBtYXhpbWU/XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTUgY29sLWxnLTUgY29sLXhsLTVcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB4LXNtLTMgdGV4dC1qdXN0aWZ5XCI+XHJcbiAgICAgICAgICAgICAgICAgIENvbnRhY3QgdXMgYW5kIEknbGwgYmUgaW4gdG91Y2ggd2l0aGluIDI0IGhvdXJzLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHgtc20tMyB0ZXh0LWp1c3RpZnlcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvbG9jYXRpb24uc3ZnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGwtMlwiPlNpbGlndXJpLCBXZXN0IEJlbmdhbCwgSW5kaWE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJweC1zbS0zIHRleHQtanVzdGlmeVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9waG9uZS5zdmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwbC0yXCI+KzkxNjI1MzQzNTM2Mzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB4LXNtLTMgdGV4dC1qdXN0aWZ5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2VtYWlsLnN2Z1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBsLTJcIj5wcm9qZWN0ZW1haWxAZ21haWwuY29tPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC03IGNvbC1sZy03IGNvbC14bC03XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNiBjb2wteGwtNiBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTYgY29sLWxnLTYgY29sLXhsLTYgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWwgYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29tbWVudFwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb21tZW50c1wiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiY29tbWVudHNcIlxyXG4gICAgICAgICAgICAgICAgICBjb2xzPVwiNDBcIlxyXG4gICAgICAgICAgICAgICAgICByb3dzPVwiNVwiXHJcbiAgICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTIgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWxpZ2h0XCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEljb25TZW5kIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
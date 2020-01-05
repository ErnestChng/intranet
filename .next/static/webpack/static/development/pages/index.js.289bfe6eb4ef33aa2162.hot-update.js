webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Layout/AdminFooter.js":
/*!******************************************!*\
  !*** ./components/Layout/AdminFooter.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ernestchng/Desktop/ErnestChng/School/NUS/BusinessAnalytics/SHMweb/adminlte/components/Layout/AdminFooter.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var AdminFooter = function AdminFooter(props) {
  if (!props.leftContent && !props.rightContent) {
    return null;
  }

  return __jsx("footer", {
    className: "main-footer clearfix",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.rightContent && __jsx("div", {
    className: "float-right d-none d-sm-inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.rightContent), props.leftContent && props.leftContent);
};

AdminFooter.propTypes = {
  leftContent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,
  rightContent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (AdminFooter);

/***/ }),

/***/ "./components/Layout/AdminLayoutHoc.js":
/*!*********************************************!*\
  !*** ./components/Layout/AdminLayoutHoc.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/styles.scss */ "./styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Layout_AdminHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Layout/AdminHeader */ "./components/Layout/AdminHeader.js");
/* harmony import */ var _components_Layout_AdminSidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Layout/AdminSidebar */ "./components/Layout/AdminSidebar.js");
/* harmony import */ var _components_Layout_AdminControlSidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Layout/AdminControlSidebar */ "./components/Layout/AdminControlSidebar.js");
/* harmony import */ var _components_Layout_AdminContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Layout/AdminContent */ "./components/Layout/AdminContent.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Layout_AdminFooter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Layout/AdminFooter */ "./components/Layout/AdminFooter.js");





var _jsxFileName = "/Users/ernestchng/Desktop/ErnestChng/School/NUS/BusinessAnalytics/SHMweb/adminlte/components/Layout/AdminLayoutHoc.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;







/**
 * Main admin layout - A Higher Order Component
 */

var AdminLayoutHoc =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AdminLayoutHoc, _React$Component);

  function AdminLayoutHoc() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AdminLayoutHoc);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AdminLayoutHoc).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AdminLayoutHoc, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, __jsx(_components_Layout_AdminHeader__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }), __jsx(_components_Layout_AdminSidebar__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), __jsx(_components_Layout_AdminContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: this.props.contentTitle,
        titleButton: this.props.contentTitleButton,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, this.props.children), __jsx(_components_Layout_AdminControlSidebar__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), __jsx(_components_Layout_AdminFooter__WEBPACK_IMPORTED_MODULE_12__["default"], {
        rightContent: "Some text for the footer",
        leftContent: __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, "I must be an element"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }));
    }
  }]);

  return AdminLayoutHoc;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

AdminLayoutHoc.propTypes = {
  contentTitle: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
  contentTitleButton: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.element
};
/* harmony default export */ __webpack_exports__["default"] = (AdminLayoutHoc);

/***/ })

})
//# sourceMappingURL=index.js.289bfe6eb4ef33aa2162.hot-update.js.map
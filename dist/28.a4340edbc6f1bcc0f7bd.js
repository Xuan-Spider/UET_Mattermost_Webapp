(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./components/header_footer_template/header_footer_template.jsx":
/*!**********************************************************************!*\
  !*** ./components/header_footer_template/header_footer_template.jsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NotLoggedIn; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.



class NotLoggedIn extends react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent {
  componentDidMount() {
    document.body.classList.add('sticky');
    document.getElementById('root').classList.add('container-fluid');
  }

  componentWillUnmount() {
    document.body.classList.remove('sticky');
    document.getElementById('root').classList.remove('container-fluid');
  }

  render() {
    const content = [];

    if (this.props.config.AboutLink) {
      content.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        key: "about_link",
        id: "about_link",
        className: "footer-link",
        target: "_blank",
        rel: "noopener noreferrer",
        href: this.props.config.AboutLink
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "web.footer.about"
      })));
    }

    if (this.props.config.PrivacyPolicyLink) {
      content.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        key: "privacy_link",
        id: "privacy_link",
        className: "footer-link",
        target: "_blank",
        rel: "noopener noreferrer",
        href: this.props.config.PrivacyPolicyLink
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "web.footer.privacy"
      })));
    }

    if (this.props.config.TermsOfServiceLink) {
      content.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        key: "terms_link",
        id: "terms_link",
        className: "footer-link",
        target: "_blank",
        rel: "noopener noreferrer",
        href: this.props.config.TermsOfServiceLink
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "web.footer.terms"
      })));
    }

    if (this.props.config.HelpLink) {
      content.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        key: "help_link",
        id: "help_link",
        className: "footer-link",
        target: "_blank",
        rel: "noopener noreferrer",
        href: this.props.config.HelpLink
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "web.footer.help"
      })));
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "inner-wrap"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row content"
    }, this.props.children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row footer"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "footer_section",
      className: "footer-pane col-xs-12"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-xs-12"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      id: "company_name",
      className: "pull-right footer-site-name"
    }, 'Mattermost')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-xs-12"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      id: "copyright",
      className: "pull-right footer-link copyright"
    }, "\xA9 2015-".concat(new Date().getFullYear(), " Mattermost, Inc.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "pull-right"
    }, content)))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(NotLoggedIn, "propTypes", {
  /*
   * Content of the page
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,

  /*
   * Mattermost configuration
   */
  config: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(NotLoggedIn, "NotLoggedIn", "/home/pdxuan/Desktop/mattermost-webapp/components/header_footer_template/header_footer_template.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/header_footer_template/index.js":
/*!****************************************************!*\
  !*** ./components/header_footer_template/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mattermost-redux/selectors/entities/general */ "./node_modules/mattermost-redux/selectors/entities/general.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header_footer_template_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header_footer_template.jsx */ "./components/header_footer_template/header_footer_template.jsx");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.




function mapStateToProps(state) {
  return {
    config: Object(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_1__["getConfig"])(state)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(_header_footer_template_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/header_footer_template/index.js");
  reactHotLoader.register(_default, "default", "/home/pdxuan/Desktop/mattermost-webapp/components/header_footer_template/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=28.a4340edbc6f1bcc0f7bd.js.map
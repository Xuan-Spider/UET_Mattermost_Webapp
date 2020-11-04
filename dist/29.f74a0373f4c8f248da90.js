(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./components/password_reset_form/index.js":
/*!*************************************************!*\
  !*** ./components/password_reset_form/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/selectors/entities/general */ "./node_modules/mattermost-redux/selectors/entities/general.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mattermost-redux/actions/users */ "./node_modules/mattermost-redux/actions/users.js");
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _password_reset_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./password_reset_form */ "./components/password_reset_form/password_reset_form.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






const mapStateToProps = state => {
  const {
    SiteName: siteName
  } = Object(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_2__["getConfig"])(state);
  return {
    siteName
  };
};

const mapDispatchToProps = dispatch => ({
  actions: Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])({
    resetUserPassword: mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_3__["resetUserPassword"]
  }, dispatch)
});

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_password_reset_form__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/password_reset_form/index.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/password_reset_form/index.js");
  reactHotLoader.register(_default, "default", "/home/pdxuan/Desktop/mattermost-webapp/components/password_reset_form/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/password_reset_form/password_reset_form.js":
/*!***************************************************************!*\
  !*** ./components/password_reset_form/password_reset_form.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PasswordResetForm; });
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.url */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var utils_browser_history__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/browser_history */ "./utils/browser_history.jsx");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/constants */ "./utils/constants.jsx");
/* harmony import */ var components_localized_input_localized_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/localized_input/localized_input */ "./components/localized_input/localized_input.tsx");
/* harmony import */ var utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/i18n.jsx */ "./utils/i18n.jsx");





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







class PasswordResetForm extends react__WEBPACK_IMPORTED_MODULE_5___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "handlePasswordReset", async e => {
      e.preventDefault();
      const password = this.passwordInput.current.value;

      if (!password || password.length < utils_constants__WEBPACK_IMPORTED_MODULE_8__["default"].MIN_PASSWORD_LENGTH) {
        this.setState({
          error: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
            id: "password_form.error",
            defaultMessage: "Please enter at least {chars} characters.",
            values: {
              chars: utils_constants__WEBPACK_IMPORTED_MODULE_8__["default"].MIN_PASSWORD_LENGTH
            }
          })
        });
        return;
      }

      this.setState({
        error: null
      });
      const token = new URLSearchParams(this.props.location.search).get('token');
      const {
        data,
        error
      } = await this.props.actions.resetUserPassword(token, password);

      if (data) {
        utils_browser_history__WEBPACK_IMPORTED_MODULE_7__["browserHistory"].push('/login?extra=' + utils_constants__WEBPACK_IMPORTED_MODULE_8__["default"].PASSWORD_CHANGE);
        this.setState({
          error: null
        });
      } else if (error) {
        this.setState({
          error: error.message
        });
      }
    });

    this.state = {
      error: null
    };
    this.passwordInput = react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();
  }

  render() {
    let error = null;

    if (this.state.error) {
      error = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group has-error"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        className: "control-label"
      }, this.state.error));
    }

    let formClass = 'form-group';

    if (error) {
      formClass += ' has-error';
    }

    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "col-sm-12"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "signup-team__container"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "password_form.title",
      defaultMessage: "Password Reset"
    })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
      onSubmit: this.handlePasswordReset
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "password_form.enter",
      defaultMessage: "Enter a new password for your {siteName} account.",
      values: {
        siteName: this.props.siteName
      }
    })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: formClass
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_localized_input_localized_input__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: "resetPasswordInput",
      type: "password",
      className: "form-control",
      name: "password",
      ref: this.passwordInput,
      placeholder: {
        id: Object(utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_10__["t"])('password_form.pwd'),
        defaultMessage: 'Password'
      },
      spellCheck: "false",
      autoFocus: true
    })), error, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
      id: "resetPasswordButton",
      type: "submit",
      className: "btn btn-primary"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "password_form.change",
      defaultMessage: "Change my password"
    })))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(PasswordResetForm, "propTypes", {
  location: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,
  siteName: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    resetUserPassword: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired
  }).isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PasswordResetForm, "PasswordResetForm", "/home/pdxuan/Desktop/mattermost-webapp/components/password_reset_form/password_reset_form.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=29.f74a0373f4c8f248da90.js.map
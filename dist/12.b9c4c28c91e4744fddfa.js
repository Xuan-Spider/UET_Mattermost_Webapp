(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./components/claim/claim_controller.jsx":
/*!***********************************************!*\
  !*** ./components/claim/claim_controller.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ClaimController; });
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var images_logo_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! images/logo.png */ "./images/logo.png");
/* harmony import */ var images_logo_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(images_logo_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_common_back_button_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/common/back_button.jsx */ "./components/common/back_button.jsx");
/* harmony import */ var components_claim_components_oauth_to_email__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/claim/components/oauth_to_email */ "./components/claim/components/oauth_to_email.jsx");
/* harmony import */ var components_claim_components_email_to_oauth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/claim/components/email_to_oauth */ "./components/claim/components/email_to_oauth.jsx");
/* harmony import */ var components_claim_components_ldap_to_email__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/claim/components/ldap_to_email */ "./components/claim/components/ldap_to_email.jsx");
/* harmony import */ var components_claim_components_email_to_ldap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/claim/components/email_to_ldap */ "./components/claim/components/email_to_ldap.jsx");





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









class ClaimController extends react__WEBPACK_IMPORTED_MODULE_5___default.a.PureComponent {
  render() {
    const email = new URLSearchParams(this.props.location.search).get('email');
    const newType = new URLSearchParams(this.props.location.search).get('new_type');
    const currentType = new URLSearchParams(this.props.location.search).get('old_type');
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_common_back_button_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "col-sm-12"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "signup-team__container"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
      alt: 'signup logo',
      className: "signup-team-logo",
      src: images_logo_png__WEBPACK_IMPORTED_MODULE_7___default.a
    }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      id: "claim"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
      path: "".concat(this.props.match.url, "/oauth_to_email"),
      render: () => react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_claim_components_oauth_to_email__WEBPACK_IMPORTED_MODULE_9__["default"], {
        currentType: currentType,
        email: email,
        siteName: this.props.siteName,
        passwordConfig: this.props.passwordConfig
      })
    }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
      path: "".concat(this.props.match.url, "/email_to_oauth"),
      render: () => react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_claim_components_email_to_oauth__WEBPACK_IMPORTED_MODULE_10__["default"], {
        newType: newType,
        email: email,
        siteName: this.props.siteName
      })
    }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
      path: "".concat(this.props.match.url, "/ldap_to_email"),
      render: () => react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_claim_components_ldap_to_email__WEBPACK_IMPORTED_MODULE_11__["default"], {
        email: email,
        passwordConfig: this.props.passwordConfig,
        switchLdapToEmail: this.props.actions.switchLdapToEmail
      })
    }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
      path: "".concat(this.props.match.url, "/email_to_ldap"),
      render: () => react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_claim_components_email_to_ldap__WEBPACK_IMPORTED_MODULE_12__["default"], {
        email: email,
        siteName: this.props.siteName,
        ldapLoginFieldName: this.props.ldapLoginFieldName
      })
    }))))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(ClaimController, "propTypes", {
  location: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,
  siteName: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  ldapLoginFieldName: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  passwordConfig: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /*
   * Object from react-router
   */
  match: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    url: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired
  }).isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    switchLdapToEmail: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired
  }).isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ClaimController, "ClaimController", "/home/pdxuan/Desktop/mattermost-webapp/components/claim/claim_controller.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/claim/components/email_to_ldap.jsx":
/*!*******************************************************!*\
  !*** ./components/claim/components/email_to_ldap.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EmailToLDAP; });
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var actions_admin_actions_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! actions/admin_actions.jsx */ "./actions/admin_actions.jsx");
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");
/* harmony import */ var utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/i18n.jsx */ "./utils/i18n.jsx");
/* harmony import */ var components_login_login_mfa_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/login/login_mfa.jsx */ "./components/login/login_mfa.jsx");
/* harmony import */ var components_localized_input_localized_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/localized_input/localized_input */ "./components/localized_input/localized_input.tsx");


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








class EmailToLDAP extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "preSubmit", e => {
      e.preventDefault();
      var state = {
        passwordError: '',
        ldapError: '',
        ldapPasswordError: '',
        serverError: ''
      };
      const password = this.emailPasswordInput.current.value;

      if (!password) {
        state.passwordError = utils_utils_jsx__WEBPACK_IMPORTED_MODULE_5__["localizeMessage"]('claim.email_to_ldap.pwdError', 'Please enter your password.');
        this.setState(state);
        return;
      }

      const ldapId = this.ldapIdInput.current.value.trim();

      if (!ldapId) {
        state.ldapError = utils_utils_jsx__WEBPACK_IMPORTED_MODULE_5__["localizeMessage"]('claim.email_to_ldap.ldapIdError', 'Please enter your AD/LDAP ID.');
        this.setState(state);
        return;
      }

      const ldapPassword = this.ldapPassword.current.value;

      if (!ldapPassword) {
        state.ldapPasswordError = utils_utils_jsx__WEBPACK_IMPORTED_MODULE_5__["localizeMessage"]('claim.email_to_ldap.ldapPasswordError', 'Please enter your AD/LDAP password.');
        this.setState(state);
        return;
      }

      state.password = password;
      state.ldapId = ldapId;
      state.ldapPassword = ldapPassword;
      this.setState(state);
      this.submit(this.props.email, password, '', ldapId, ldapPassword);
    });

    _defineProperty(this, "submit", (loginId, password, token, ldapId, ldapPassword) => {
      Object(actions_admin_actions_jsx__WEBPACK_IMPORTED_MODULE_4__["emailToLdap"])(loginId, password, token, ldapId || this.state.ldapId, ldapPassword || this.state.ldapPassword, data => {
        if (data.follow_link) {
          window.location.href = data.follow_link;
        }
      }, err => {
        if (!this.state.showMfa && err.server_error_id === 'mfa.validate_token.authenticate.app_error') {
          this.setState({
            showMfa: true
          });
        } else {
          switch (err.id) {
            case 'ent.ldap.do_login.user_not_registered.app_error':
            case 'ent.ldap.do_login.user_filtered.app_error':
            case 'ent.ldap.do_login.matched_to_many_users.app_error':
              this.setState({
                ldapError: err.message,
                showMfa: false
              });
              break;

            case 'ent.ldap.do_login.invalid_password.app_error':
              this.setState({
                ldapPasswordError: err.message,
                showMfa: false
              });
              break;

            case 'api.user.check_user_password.invalid.app_error':
              this.setState({
                passwordError: err.message,
                showMfa: false
              });
              break;

            default:
              this.setState({
                serverError: err.message,
                showMfa: false
              });
          }
        }
      });
    });

    this.state = {
      passwordError: '',
      ldapError: '',
      ldapPasswordError: '',
      serverError: '',
      showMfa: false
    };
    this.emailPasswordInput = react__WEBPACK_IMPORTED_MODULE_2___default.a.createRef();
    this.ldapIdInput = react__WEBPACK_IMPORTED_MODULE_2___default.a.createRef();
    this.ldapPassword = react__WEBPACK_IMPORTED_MODULE_2___default.a.createRef();
  }

  render() {
    let serverError = null;
    let formClass = 'form-group';

    if (this.state.serverError) {
      serverError = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "form-group has-error"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "control-label"
      }, this.state.serverError));
      formClass += ' has-error';
    }

    let passwordError = null;
    let passwordClass = 'form-group';

    if (this.state.passwordError) {
      passwordError = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "form-group has-error"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "control-label"
      }, this.state.passwordError));
      passwordClass += ' has-error';
    }

    let ldapError = null;
    let ldapClass = 'form-group';

    if (this.state.ldapError) {
      ldapError = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "form-group has-error"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "control-label"
      }, this.state.ldapError));
      ldapClass += ' has-error';
    }

    let ldapPasswordError = null;
    let ldapPasswordClass = 'form-group';

    if (this.state.ldapPasswordError) {
      ldapPasswordError = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "form-group has-error"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "control-label"
      }, this.state.ldapPasswordError));
      ldapPasswordClass += ' has-error';
    }

    let loginPlaceholder;

    if (this.props.ldapLoginFieldName) {
      loginPlaceholder = this.props.ldapLoginFieldName;
    } else {
      loginPlaceholder = utils_utils_jsx__WEBPACK_IMPORTED_MODULE_5__["localizeMessage"]('claim.email_to_ldap.ldapId', 'AD/LDAP ID');
    }

    let content;

    if (this.state.showMfa) {
      content = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_login_login_mfa_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
        loginId: this.props.email,
        password: this.state.password,
        submit: this.submit
      });
    } else {
      content = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
        onSubmit: this.preSubmit,
        className: formClass
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "claim.email_to_ldap.ssoType",
        defaultMessage: "Upon claiming your account, you will only be able to login with AD/LDAP"
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "claim.email_to_ldap.ssoNote",
        defaultMessage: "You must already have a valid AD/LDAP account"
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "claim.email_to_ldap.enterPwd",
        defaultMessage: "Enter the password for your {site} email account",
        values: {
          site: this.props.siteName
        }
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "text",
        style: style.usernameInput,
        name: "fakeusernameremembered"
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: passwordClass
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_localized_input_localized_input__WEBPACK_IMPORTED_MODULE_8__["default"], {
        type: "password",
        className: "form-control",
        name: "emailPassword",
        ref: this.emailPasswordInput,
        autoComplete: "off",
        placeholder: {
          id: Object(utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_6__["t"])('claim.email_to_ldap.pwd'),
          defaultMessage: 'Password'
        },
        spellCheck: "false"
      })), passwordError, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "claim.email_to_ldap.enterLdapPwd",
        defaultMessage: "Enter the ID and password for your AD/LDAP account"
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: ldapClass
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        name: "ldapId",
        ref: this.ldapIdInput,
        autoComplete: "off",
        placeholder: loginPlaceholder,
        spellCheck: "false"
      })), ldapError, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: ldapPasswordClass
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_localized_input_localized_input__WEBPACK_IMPORTED_MODULE_8__["default"], {
        type: "password",
        className: "form-control",
        name: "ldapPassword",
        ref: this.ldapPasswordInput,
        autoComplete: "off",
        placeholder: {
          id: Object(utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_6__["t"])('claim.email_to_ldap.ldapPwd'),
          defaultMessage: 'AD/LDAP Password'
        },
        spellCheck: "false"
      })), ldapPasswordError, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-primary"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "claim.email_to_ldap.switchTo",
        defaultMessage: "Switch account to AD/LDAP"
      })), serverError);
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "claim.email_to_ldap.title",
      defaultMessage: "Switch Email/Password Account to AD/LDAP"
    })), content);
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(EmailToLDAP, "propTypes", {
  email: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  siteName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  ldapLoginFieldName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
});

const style = {
  usernameInput: {
    display: 'none'
  }
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(EmailToLDAP, "EmailToLDAP", "/home/pdxuan/Desktop/mattermost-webapp/components/claim/components/email_to_ldap.jsx");
  reactHotLoader.register(style, "style", "/home/pdxuan/Desktop/mattermost-webapp/components/claim/components/email_to_ldap.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/claim/components/email_to_oauth.jsx":
/*!********************************************************!*\
  !*** ./components/claim/components/email_to_oauth.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EmailToOAuth; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var actions_admin_actions_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! actions/admin_actions.jsx */ "./actions/admin_actions.jsx");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/constants */ "./utils/constants.jsx");
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");
/* harmony import */ var utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/i18n.jsx */ "./utils/i18n.jsx");
/* harmony import */ var components_login_login_mfa_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/login/login_mfa.jsx */ "./components/login/login_mfa.jsx");
/* harmony import */ var components_localized_input_localized_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/localized_input/localized_input */ "./components/localized_input/localized_input.tsx");
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









class EmailToOAuth extends react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "preSubmit", e => {
      e.preventDefault();
      var state = {};
      var password = this.passwordInput.current.value;

      if (!password) {
        state.error = utils_utils_jsx__WEBPACK_IMPORTED_MODULE_5__["localizeMessage"]('claim.email_to_oauth.pwdError', 'Please enter your password.');
        this.setState(state);
        return;
      }

      this.setState({
        password
      });
      state.error = null;
      this.setState(state);
      this.submit(this.props.email, password, '');
    });

    _defineProperty(this, "submit", (loginId, password, token) => {
      Object(actions_admin_actions_jsx__WEBPACK_IMPORTED_MODULE_3__["emailToOAuth"])(loginId, password, token, this.props.newType, data => {
        if (data.follow_link) {
          window.location.href = data.follow_link;
        }
      }, err => {
        if (!this.state.showMfa && err.server_error_id === 'mfa.validate_token.authenticate.app_error') {
          this.setState({
            showMfa: true
          });
        } else {
          this.setState({
            error: err.message,
            showMfa: false
          });
        }
      });
    });

    this.state = {
      showMfa: false,
      password: ''
    };
    this.passwordInput = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
  }

  render() {
    var error = null;

    if (this.state.error) {
      error = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-group has-error"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        className: "control-label"
      }, this.state.error));
    }

    var formClass = 'form-group';

    if (error) {
      formClass += ' has-error';
    }

    const type = this.props.newType === utils_constants__WEBPACK_IMPORTED_MODULE_4__["default"].SAML_SERVICE ? utils_constants__WEBPACK_IMPORTED_MODULE_4__["default"].SAML_SERVICE.toUpperCase() : utils_utils_jsx__WEBPACK_IMPORTED_MODULE_5__["toTitleCase"](this.props.newType);
    const uiType = "".concat(type, " SSO");
    let content;

    if (this.state.showMfa) {
      content = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_login_login_mfa_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
        loginId: this.props.email,
        password: this.state.password,
        submit: this.submit
      });
    } else {
      content = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        onSubmit: this.preSubmit
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "claim.email_to_oauth.ssoType",
        defaultMessage: "Upon claiming your account, you will only be able to login with {type} SSO",
        values: {
          type
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "claim.email_to_oauth.ssoNote",
        defaultMessage: "You must already have a valid {type} account",
        values: {
          type
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "claim.email_to_oauth.enterPwd",
        defaultMessage: "Enter the password for your {site} account",
        values: {
          site: this.props.siteName
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: formClass
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_localized_input_localized_input__WEBPACK_IMPORTED_MODULE_8__["default"], {
        type: "password",
        className: "form-control",
        name: "password",
        ref: this.passwordInput,
        placeholder: {
          id: Object(utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_6__["t"])('claim.email_to_oauth.pwd'),
          defaultMessage: 'Password'
        },
        spellCheck: "false"
      })), error, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-primary"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "claim.email_to_oauth.switchTo",
        defaultMessage: "Switch account to {uiType}",
        values: {
          uiType
        }
      })));
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "claim.email_to_oauth.title",
      defaultMessage: "Switch Email/Password Account to {uiType}",
      values: {
        uiType
      }
    })), content);
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(EmailToOAuth, "propTypes", {
  newType: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  email: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  siteName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(EmailToOAuth, "EmailToOAuth", "/home/pdxuan/Desktop/mattermost-webapp/components/claim/components/email_to_oauth.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/claim/components/ldap_to_email.jsx":
/*!*******************************************************!*\
  !*** ./components/claim/components/ldap_to_email.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LDAPToEmail; });
/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.starts-with */ "./node_modules/core-js/modules/es.string.starts-with.js");
/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");
/* harmony import */ var utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/i18n.jsx */ "./utils/i18n.jsx");
/* harmony import */ var components_login_login_mfa_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/login/login_mfa.jsx */ "./components/login/login_mfa.jsx");
/* harmony import */ var components_localized_input_localized_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/localized_input/localized_input */ "./components/localized_input/localized_input.tsx");


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







class LDAPToEmail extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "preSubmit", e => {
      e.preventDefault();
      var state = {
        passwordError: '',
        confirmError: '',
        ldapPasswordError: '',
        serverError: ''
      };
      const ldapPassword = this.ldapPasswordInput.current.value;

      if (!ldapPassword) {
        state.ldapPasswordError = utils_utils_jsx__WEBPACK_IMPORTED_MODULE_4__["localizeMessage"]('claim.ldap_to_email.ldapPasswordError', 'Please enter your AD/LDAP password.');
        this.setState(state);
        return;
      }

      const password = this.passwordInput.current.value;

      if (!password) {
        state.passwordError = utils_utils_jsx__WEBPACK_IMPORTED_MODULE_4__["localizeMessage"]('claim.ldap_to_email.pwdError', 'Please enter your password.');
        this.setState(state);
        return;
      }

      const {
        valid,
        error
      } = utils_utils_jsx__WEBPACK_IMPORTED_MODULE_4__["isValidPassword"](password, this.props.passwordConfig);

      if (!valid && error) {
        this.setState({
          passwordError: error
        });
        return;
      }

      const confirmPassword = this.passwordConfirmInput.current.value;

      if (!confirmPassword || password !== confirmPassword) {
        state.confirmError = utils_utils_jsx__WEBPACK_IMPORTED_MODULE_4__["localizeMessage"]('claim.ldap_to_email.pwdNotMatch', 'Passwords do not match.');
        this.setState(state);
        return;
      }

      state.password = password;
      state.ldapPassword = ldapPassword;
      this.setState(state);
      this.submit(this.props.email, password, '', ldapPassword);
    });

    _defineProperty(this, "submit", (loginId, password, token, ldapPassword) => {
      this.props.switchLdapToEmail(ldapPassword || this.state.ldapPassword, this.props.email, password, token).then(({
        data,
        error: err
      }) => {
        if (data && data.follow_link) {
          window.location.href = data.follow_link;
        } else if (err) {
          if (err.server_error_id.startsWith('model.user.is_valid.pwd')) {
            this.setState({
              passwordError: err.message,
              showMfa: false
            });
          } else if (err.server_error_id === 'ent.ldap.do_login.invalid_password.app_error') {
            this.setState({
              ldapPasswordError: err.message,
              showMfa: false
            });
          } else if (!this.state.showMfa && err.server_error_id === 'mfa.validate_token.authenticate.app_error') {
            this.setState({
              showMfa: true
            });
          } else {
            this.setState({
              serverError: err.message,
              showMfa: false
            });
          }
        }
      });
    });

    this.state = {
      passwordError: '',
      confirmError: '',
      ldapPasswordError: '',
      serverError: ''
    };
    this.ldapPasswordInput = react__WEBPACK_IMPORTED_MODULE_2___default.a.createRef();
    this.passwordInput = react__WEBPACK_IMPORTED_MODULE_2___default.a.createRef();
    this.passwordConfirmInput = react__WEBPACK_IMPORTED_MODULE_2___default.a.createRef();
  }

  render() {
    let serverError = null;
    let formClass = 'form-group';

    if (this.state.serverError) {
      serverError = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "form-group has-error"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "control-label"
      }, this.state.serverError));
      formClass += ' has-error';
    }

    let passwordError = null;
    let passwordClass = 'form-group';

    if (this.state.passwordError) {
      passwordError = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "form-group has-error"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "control-label"
      }, this.state.passwordError));
      passwordClass += ' has-error';
    }

    let ldapPasswordError = null;
    let ldapPasswordClass = 'form-group';

    if (this.state.ldapPasswordError) {
      ldapPasswordError = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "form-group has-error"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "control-label"
      }, this.state.ldapPasswordError));
      ldapPasswordClass += ' has-error';
    }

    let confirmError = null;
    let confimClass = 'form-group';

    if (this.state.confirmError) {
      confirmError = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "form-group has-error"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "control-label"
      }, this.state.confirmError));
      confimClass += ' has-error';
    }

    const passwordPlaceholder = utils_utils_jsx__WEBPACK_IMPORTED_MODULE_4__["localizeMessage"]('claim.ldap_to_email.ldapPwd', 'AD/LDAP Password');
    let content;

    if (this.state.showMfa) {
      content = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_login_login_mfa_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
        loginId: this.props.email,
        password: this.state.password,
        submit: this.submit
      });
    } else {
      content = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
        onSubmit: this.preSubmit,
        className: formClass
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "claim.ldap_to_email.email",
        defaultMessage: "After switching your authentication method, you will use {email} to login. Your AD/LDAP credentials will no longer allow access to Mattermost.",
        values: {
          email: this.props.email
        }
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "claim.ldap_to_email.enterLdapPwd",
        defaultMessage: "{ldapPassword}:",
        values: {
          ldapPassword: passwordPlaceholder
        }
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: ldapPasswordClass
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "password",
        className: "form-control",
        name: "ldapPassword",
        ref: this.ldapPasswordInput,
        placeholder: passwordPlaceholder,
        spellCheck: "false"
      })), ldapPasswordError, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "claim.ldap_to_email.enterPwd",
        defaultMessage: "New email login password:"
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: passwordClass
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_localized_input_localized_input__WEBPACK_IMPORTED_MODULE_7__["default"], {
        type: "password",
        className: "form-control",
        name: "password",
        ref: this.passwordInput,
        placeholder: {
          id: Object(utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_5__["t"])('claim.ldap_to_email.pwd'),
          defaultMessage: 'Password'
        },
        spellCheck: "false"
      })), passwordError, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: confimClass
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_localized_input_localized_input__WEBPACK_IMPORTED_MODULE_7__["default"], {
        type: "password",
        className: "form-control",
        name: "passwordconfirm",
        ref: this.passwordConfirmInput,
        placeholder: {
          id: Object(utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_5__["t"])('claim.ldap_to_email.confirm'),
          defaultMessage: 'Confirm Password'
        },
        spellCheck: "false"
      })), confirmError, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-primary"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "claim.ldap_to_email.switchTo",
        defaultMessage: "Switch account to email/password"
      })), serverError);
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "claim.ldap_to_email.title",
      defaultMessage: "Switch AD/LDAP Account to Email/Password"
    })), content);
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(LDAPToEmail, "propTypes", {
  email: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  passwordConfig: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  switchLdapToEmail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LDAPToEmail, "LDAPToEmail", "/home/pdxuan/Desktop/mattermost-webapp/components/claim/components/ldap_to_email.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/claim/components/oauth_to_email.jsx":
/*!********************************************************!*\
  !*** ./components/claim/components/oauth_to_email.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OAuthToEmail; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var actions_admin_actions_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! actions/admin_actions.jsx */ "./actions/admin_actions.jsx");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/constants */ "./utils/constants.jsx");
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");
/* harmony import */ var utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/i18n.jsx */ "./utils/i18n.jsx");
/* harmony import */ var components_localized_input_localized_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/localized_input/localized_input */ "./components/localized_input/localized_input.tsx");
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








class OAuthToEmail extends react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "submit", e => {
      e.preventDefault();
      const state = {};
      const password = this.passwordInput.current.value;

      if (!password) {
        state.error = utils_utils_jsx__WEBPACK_IMPORTED_MODULE_5__["localizeMessage"]('claim.oauth_to_email.enterPwd', 'Please enter a password.');
        this.setState(state);
        return;
      }

      const {
        valid,
        error
      } = utils_utils_jsx__WEBPACK_IMPORTED_MODULE_5__["isValidPassword"](password, this.props.passwordConfig);

      if (!valid && error) {
        this.setState({
          error
        });
        return;
      }

      const confirmPassword = this.passwordConfirmInput.current.value;

      if (!confirmPassword || password !== confirmPassword) {
        state.error = utils_utils_jsx__WEBPACK_IMPORTED_MODULE_5__["localizeMessage"]('claim.oauth_to_email.pwdNotMatch', 'Passwords do not match.');
        this.setState(state);
        return;
      }

      state.error = null;
      this.setState(state);
      Object(actions_admin_actions_jsx__WEBPACK_IMPORTED_MODULE_3__["oauthToEmail"])(this.props.currentType, this.props.email, password, data => {
        if (data.follow_link) {
          window.location.href = data.follow_link;
        }
      }, err => {
        this.setState({
          error: err.message
        });
      });
    });

    this.state = {};
    this.passwordInput = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    this.passwordConfirmInput = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
  }

  render() {
    var error = null;

    if (this.state.error) {
      error = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-group has-error"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        className: "control-label"
      }, this.state.error));
    }

    var formClass = 'form-group';

    if (error) {
      formClass += ' has-error';
    }

    const uiType = "".concat(this.props.currentType === utils_constants__WEBPACK_IMPORTED_MODULE_4__["default"].SAML_SERVICE ? utils_constants__WEBPACK_IMPORTED_MODULE_4__["default"].SAML_SERVICE.toUpperCase() : utils_utils_jsx__WEBPACK_IMPORTED_MODULE_5__["toTitleCase"](this.props.currentType), " SSO");
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "claim.oauth_to_email.title",
      defaultMessage: "Switch {type} Account to Email",
      values: {
        type: uiType
      }
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      onSubmit: this.submit
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "claim.oauth_to_email.description",
      defaultMessage: "Upon changing your account type, you will only be able to login with your email and password."
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "claim.oauth_to_email.enterNewPwd",
      defaultMessage: "Enter a new password for your {site} email account",
      values: {
        site: this.props.siteName
      }
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: formClass
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_localized_input_localized_input__WEBPACK_IMPORTED_MODULE_7__["default"], {
      type: "password",
      className: "form-control",
      name: "password",
      ref: this.passwordInput,
      placeholder: {
        id: Object(utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_6__["t"])('claim.oauth_to_email.newPwd'),
        defaultMessage: 'New Password'
      },
      spellCheck: "false"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: formClass
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_localized_input_localized_input__WEBPACK_IMPORTED_MODULE_7__["default"], {
      type: "password",
      className: "form-control",
      name: "passwordconfirm",
      ref: this.passwordConfirmInput,
      placeholder: {
        id: Object(utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_6__["t"])('claim.oauth_to_email.confirm'),
        defaultMessage: 'Confirm Password'
      },
      spellCheck: "false"
    })), error, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      type: "submit",
      className: "btn btn-primary"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "claim.oauth_to_email.switchTo",
      defaultMessage: "Switch {type} to email and password",
      values: {
        type: uiType
      }
    }))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(OAuthToEmail, "propTypes", {
  currentType: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  email: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  siteName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  passwordConfig: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(OAuthToEmail, "OAuthToEmail", "/home/pdxuan/Desktop/mattermost-webapp/components/claim/components/oauth_to_email.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/claim/index.js":
/*!***********************************!*\
  !*** ./components/claim/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/actions/users */ "./node_modules/mattermost-redux/actions/users.js");
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mattermost-redux/selectors/entities/general */ "./node_modules/mattermost-redux/selectors/entities/general.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");
/* harmony import */ var _claim_controller_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./claim_controller.jsx */ "./components/claim/claim_controller.jsx");
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
  const config = Object(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_3__["getConfig"])(state);
  const siteName = config.SiteName;
  const ldapLoginFieldName = config.LdapLoginFieldName;
  return {
    siteName,
    ldapLoginFieldName,
    passwordConfig: Object(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_4__["getPasswordConfig"])(config)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
      switchLdapToEmail: mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__["switchLdapToEmail"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_claim_controller_jsx__WEBPACK_IMPORTED_MODULE_5__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/claim/index.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/claim/index.js");
  reactHotLoader.register(_default, "default", "/home/pdxuan/Desktop/mattermost-webapp/components/claim/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/common/back_button.jsx":
/*!*******************************************!*\
  !*** ./components/common/back_button.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BackButton; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
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




class BackButton extends react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "back_button",
      className: "signup-header"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      onClick: this.props.onClick,
      to: this.props.url
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "generic_icons.back",
      defaultMessage: "Back Icon"
    }, title => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      id: "back_button_icon",
      className: "fa fa-1x fa-angle-left",
      title: title
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "web.header.back",
      defaultMessage: "Back"
    })));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(BackButton, "propTypes", {
  /**
   * URL to return to
   */
  url: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * An optional click handler that will trigger when the user clicks on the back button
   */
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
});

_defineProperty(BackButton, "defaultProps", {
  url: '/'
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BackButton, "BackButton", "/home/pdxuan/Desktop/mattermost-webapp/components/common/back_button.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/login/login_mfa.jsx":
/*!****************************************!*\
  !*** ./components/login/login_mfa.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginMfa; });
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");
/* harmony import */ var utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/i18n.jsx */ "./utils/i18n.jsx");
/* harmony import */ var components_save_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/save_button */ "./components/save_button.tsx");
/* harmony import */ var components_localized_input_localized_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/localized_input/localized_input */ "./components/localized_input/localized_input.tsx");



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







class LoginMfa extends react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleChange", e => {
      e.preventDefault();
      const token = e.target.value.trim().replace(/\s/g, '');

      if (token !== this.state.token) {
        this.setState({
          token
        });
      }
    });

    _defineProperty(this, "handleSubmit", e => {
      e.preventDefault();
      const state = {};
      state.serverError = '';
      state.saving = true;
      this.setState(state);
      this.props.submit(this.props.loginId, this.props.password, this.state.token);
    });

    this.state = {
      saving: false,
      token: '',
      serverError: ''
    };
  }

  render() {
    let serverError;
    let errorClass = '';

    if (this.state.serverError) {
      serverError = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
        className: "control-label"
      }, this.state.serverError);
      errorClass = ' has-error';
    }

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", {
      onSubmit: this.handleSubmit
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "signup__email-container"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "login_mfa.enterToken",
      defaultMessage: "To complete the sign in process, please enter a token from your smartphone's authenticator"
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: 'form-group' + errorClass
    }, serverError), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: 'form-group' + errorClass
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_localized_input_localized_input__WEBPACK_IMPORTED_MODULE_8__["default"], {
      type: "text",
      className: "form-control",
      name: "token",
      placeholder: {
        id: Object(utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_6__["t"])('login_mfa.token'),
        defaultMessage: 'MFA Token'
      },
      spellCheck: "false",
      autoComplete: "off",
      autoFocus: true,
      onChange: this.handleChange
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_save_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      saving: this.state.saving,
      disabled: this.state.saving,
      onClick: this.handleSubmit,
      defaultMessage: Object(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_5__["localizeMessage"])('login_mfa.submit', 'Submit'),
      savingMessage: Object(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_5__["localizeMessage"])('login_mfa.submitting', 'Submitting...')
    }))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(LoginMfa, "propTypes", {
  /*
   * User's login ID
   */
  loginId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /*
   * User's password
   */
  password: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /*
   * Function to call when submitting user credentials
   */
  submit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LoginMfa, "LoginMfa", "/home/pdxuan/Desktop/mattermost-webapp/components/login/login_mfa.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./images/logo.png":
/*!*************************!*\
  !*** ./images/logo.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "files/77de51bb9d8c3e0ae1c9fba08495fcc7.png";

/***/ })

}]);
//# sourceMappingURL=12.b9c4c28c91e4744fddfa.js.map
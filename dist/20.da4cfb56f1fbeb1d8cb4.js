(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

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

/***/ "./components/signup/signup_controller/index.js":
/*!******************************************************!*\
  !*** ./components/signup/signup_controller/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.url */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mattermost-redux/selectors/entities/general */ "./node_modules/mattermost-redux/selectors/entities/general.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mattermost-redux/selectors/entities/users */ "./node_modules/mattermost-redux/selectors/entities/users.js");
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var mattermost_redux_actions_teams__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mattermost-redux/actions/teams */ "./node_modules/mattermost-redux/actions/teams.js");
/* harmony import */ var mattermost_redux_actions_teams__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_teams__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var selectors_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! selectors/storage */ "./selectors/storage.js");
/* harmony import */ var actions_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! actions/storage */ "./actions/storage.js");
/* harmony import */ var actions_team_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! actions/team_actions */ "./actions/team_actions.jsx");
/* harmony import */ var _signup_controller_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signup_controller.jsx */ "./components/signup/signup_controller/signup_controller.jsx");




(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.










function mapStateToProps(state, ownProps) {
  const license = Object(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_5__["getLicense"])(state);
  const config = Object(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_5__["getConfig"])(state);
  const isLicensed = license && license.IsLicensed === 'true';
  const enableOpenServer = config.EnableOpenServer === 'true';
  const noAccounts = config.NoAccounts === 'true';
  const enableSignUpWithEmail = config.EnableSignUpWithEmail === 'true';
  const enableSignUpWithGitLab = config.EnableSignUpWithGitLab === 'true';
  const enableSignUpWithGoogle = config.EnableSignUpWithGoogle === 'true';
  const enableSignUpWithOffice365 = config.EnableSignUpWithOffice365 === 'true';
  const enableLDAP = config.EnableLdap === 'true';
  const enableSAML = config.EnableSaml === 'true';
  const samlLoginButtonText = config.SamlLoginButtonText;
  const ldapLoginFieldName = config.LdapLoginFieldName;
  const siteName = config.SiteName;
  let usedBefore;

  if (ownProps.location.search) {
    const params = new URLSearchParams(ownProps.location.search);
    let token = params.get('t');

    if (token == null) {
      token = '';
    }

    usedBefore = Object(selectors_storage__WEBPACK_IMPORTED_MODULE_8__["getGlobalItem"])(state, token, null);
  }

  return {
    loggedIn: Boolean(Object(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_6__["getCurrentUserId"])(state)),
    isLicensed,
    enableOpenServer,
    noAccounts,
    enableSignUpWithEmail,
    enableSignUpWithGitLab,
    enableSignUpWithGoogle,
    enableSignUpWithOffice365,
    enableLDAP,
    enableSAML,
    samlLoginButtonText,
    ldapLoginFieldName,
    siteName,
    usedBefore
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])({
      removeGlobalItem: actions_storage__WEBPACK_IMPORTED_MODULE_9__["removeGlobalItem"],
      getTeamInviteInfo: mattermost_redux_actions_teams__WEBPACK_IMPORTED_MODULE_7__["getTeamInviteInfo"],
      addUserToTeamFromInvite: actions_team_actions__WEBPACK_IMPORTED_MODULE_10__["addUserToTeamFromInvite"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(_signup_controller_jsx__WEBPACK_IMPORTED_MODULE_11__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/signup/signup_controller/index.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/signup/signup_controller/index.js");
  reactHotLoader.register(_default, "default", "/home/pdxuan/Desktop/mattermost-webapp/components/signup/signup_controller/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/signup/signup_controller/signup_controller.jsx":
/*!*******************************************************************!*\
  !*** ./components/signup/signup_controller/signup_controller.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignupController; });
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.url */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var mattermost_redux_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mattermost-redux/client */ "./node_modules/mattermost-redux/client/index.js");
/* harmony import */ var mattermost_redux_client__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_client__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var utils_browser_history__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/browser_history */ "./utils/browser_history.jsx");
/* harmony import */ var actions_global_actions_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! actions/global_actions.jsx */ "./actions/global_actions.jsx");
/* harmony import */ var images_logo_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! images/logo.png */ "./images/logo.png");
/* harmony import */ var images_logo_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(images_logo_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var components_announcement_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/announcement_bar */ "./components/announcement_bar/index.js");
/* harmony import */ var components_common_back_button_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/common/back_button.jsx */ "./components/common/back_button.jsx");
/* harmony import */ var components_form_error__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/form_error */ "./components/form_error.tsx");
/* harmony import */ var components_loading_screen__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/loading_screen */ "./components/loading_screen.tsx");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! utils/constants */ "./utils/constants.jsx");






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













class SignupController extends react__WEBPACK_IMPORTED_MODULE_6___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "addUserToTeamFromInvite", async (token, inviteId) => {
      const {
        data: team,
        error
      } = await this.props.actions.addUserToTeamFromInvite(token, inviteId);

      if (team) {
        utils_browser_history__WEBPACK_IMPORTED_MODULE_10__["browserHistory"].push('/' + team.name + "/channels/".concat(utils_constants__WEBPACK_IMPORTED_MODULE_17__["Constants"].DEFAULT_CHANNEL));
      } else if (error) {
        this.handleInvalidInvite(error);
      }
    });

    _defineProperty(this, "getInviteInfo", async inviteId => {
      const {
        data,
        error
      } = await this.props.actions.getTeamInviteInfo(inviteId);

      if (data) {
        this.setState({
          serverError: '',
          loading: false
        });
      } else if (error) {
        this.handleInvalidInvite(error);
      }
    });

    _defineProperty(this, "handleInvalidInvite", err => {
      let serverError;

      if (err.server_error_id === 'store.sql_user.save.max_accounts.app_error') {
        serverError = err.message;
      } else if (err.server_error_id === 'api.team.add_user_to_team_from_invite.guest.app_error') {
        serverError = err.message;
      } else {
        serverError = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          id: "signup_user_completed.invalid_invite",
          defaultMessage: "The invite link was invalid.  Please speak with your Administrator to receive an invitation."
        });
      }

      this.setState({
        noOpenServerError: true,
        loading: false,
        serverError
      });
    });

    _defineProperty(this, "renderSignupControls", () => {
      const {
        formatMessage
      } = this.context.intl;
      let signupControls = [];

      if (this.props.enableSignUpWithEmail) {
        signupControls.push(react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
          className: "btn btn-custom-login btn--full email",
          key: "email",
          to: '/signup_email' + window.location.search
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "icon fa fa-envelope",
          title: formatMessage({
            id: 'signup.email.icon',
            defaultMessage: 'Email Icon'
          })
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          id: "signup.email",
          defaultMessage: "Email and Password"
        }))));
      }

      if (this.props.enableSignUpWithGitLab) {
        signupControls.push(react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          className: "btn btn-custom-login btn--full gitlab",
          key: "gitlab",
          href: mattermost_redux_client__WEBPACK_IMPORTED_MODULE_9__["Client4"].getOAuthRoute() + '/gitlab/signup' + window.location.search
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "icon"
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          id: "signup.gitlab",
          defaultMessage: "GitLab Single Sign-On"
        })))));
      }

      if (this.props.isLicensed && this.props.enableSignUpWithGoogle) {
        signupControls.push(react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          className: "btn btn-custom-login btn--full google",
          key: "google",
          href: mattermost_redux_client__WEBPACK_IMPORTED_MODULE_9__["Client4"].getOAuthRoute() + '/google/signup' + window.location.search
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "icon"
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          id: "signup.google",
          defaultMessage: "Google Account"
        })))));
      }

      if (this.props.isLicensed && this.props.enableSignUpWithOffice365) {
        signupControls.push(react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          className: "btn btn-custom-login btn--full office365",
          key: "office365",
          href: mattermost_redux_client__WEBPACK_IMPORTED_MODULE_9__["Client4"].getOAuthRoute() + '/office365/signup' + window.location.search
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "icon"
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          id: "signup.office365",
          defaultMessage: "Office 365"
        })))));
      }

      if (this.props.isLicensed && this.props.enableLDAP) {
        const params = new URLSearchParams(this.props.location.search);
        params.append('extra', 'create_ldap');
        const query = '?' + params.toString();
        let LDAPText = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          id: "signup.ldap",
          defaultMessage: "AD/LDAP Credentials"
        });

        if (this.props.ldapLoginFieldName) {
          LDAPText = this.props.ldapLoginFieldName;
        }

        signupControls.push(react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
          className: "btn btn-custom-login btn--full ldap",
          key: "ldap",
          to: '/login' + query
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "icon fa fa-folder-open fa--margin-top",
          title: formatMessage({
            id: 'signup.ldap.icon',
            defaultMessage: 'AD/LDAP Icon'
          })
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, LDAPText))));
      }

      if (this.props.isLicensed && this.props.enableSAML) {
        let query = '';

        if (window.location.search) {
          query = '&action=signup';
        } else {
          query = '?action=signup';
        }

        signupControls.push(react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
          className: "btn btn-custom-login btn--full saml",
          key: "saml",
          to: '/login/sso/saml' + window.location.search + query
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "icon fa fa-lock fa--margin-top",
          title: formatMessage({
            id: 'signup.saml.icon',
            defaultMessage: 'SAML Icon'
          })
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, this.props.samlLoginButtonText))));
      }

      if (signupControls.length === 0) {
        const signupDisabledError = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          id: "signup_user_completed.none",
          defaultMessage: "No user creation method has been enabled. Please contact an administrator for access."
        });
        signupControls = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_form_error__WEBPACK_IMPORTED_MODULE_15__["default"], {
          error: signupDisabledError,
          margin: true
        });
      } else if (signupControls.length === 1) {
        if (this.props.enableSignUpWithEmail) {
          return utils_browser_history__WEBPACK_IMPORTED_MODULE_10__["browserHistory"].push('/signup_email' + window.location.search);
        } else if (this.props.isLicensed && this.props.enableLDAP) {
          return utils_browser_history__WEBPACK_IMPORTED_MODULE_10__["browserHistory"].push('/login' + window.location.search);
        }
      }

      return signupControls;
    });

    let loading = false;
    let _serverError = '';
    let noOpenServerError = false;
    let usedBefore = false;

    if (this.props.location.search) {
      const params = new URLSearchParams(this.props.location.search);
      let token = params.get('t');

      if (token == null) {
        token = '';
      }

      let inviteId = params.get('id');

      if (inviteId == null) {
        inviteId = '';
      }

      if (inviteId) {
        loading = true;
      } else if (!this.props.loggedIn) {
        usedBefore = props.usedBefore;
      } else if (!inviteId && !this.props.enableOpenServer && !this.props.noAccounts) {
        noOpenServerError = true;
        _serverError = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          id: "signup_user_completed.no_open_server",
          defaultMessage: "This server does not allow open signups.  Please speak with your Administrator to receive an invitation."
        });
      }
    }

    this.state = {
      loading,
      serverError: _serverError,
      noOpenServerError,
      usedBefore
    };
  }

  componentDidMount() {
    this.props.actions.removeGlobalItem('team');

    if (this.props.location.search) {
      const params = new URLSearchParams(this.props.location.search);
      const token = params.get('t') || '';
      const inviteId = params.get('id') || '';
      const userLoggedIn = this.props.loggedIn;

      if ((inviteId || token) && userLoggedIn) {
        this.addUserToTeamFromInvite(token, inviteId);
      } else if (inviteId) {
        this.getInviteInfo(inviteId);
      } else if (userLoggedIn) {
        actions_global_actions_jsx__WEBPACK_IMPORTED_MODULE_11__["redirectUserToDefaultTeam"]();
      }
    }
  }

  render() {
    if (this.state.loading) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_loading_screen__WEBPACK_IMPORTED_MODULE_16__["default"], null);
    }

    if (this.state.usedBefore) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
        id: "signup_user_completed.expired",
        defaultMessage: "You've already completed the signup process for this invitation or this invitation has expired."
      }));
    }

    let serverError = null;

    if (this.state.serverError) {
      serverError = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: 'form-group has-error'
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        className: "control-label"
      }, this.state.serverError));
    }

    let signupControls;

    if (this.state.noOpenServerError || this.state.usedBefore) {
      signupControls = null;
    } else {
      signupControls = this.renderSignupControls();
    }

    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_announcement_bar__WEBPACK_IMPORTED_MODULE_13__["default"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_common_back_button_jsx__WEBPACK_IMPORTED_MODULE_14__["default"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "col-sm-12"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "signup-team__container"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
      alt: 'signup team logo',
      className: "signup-team-logo",
      src: images_logo_png__WEBPACK_IMPORTED_MODULE_12___default.a
    }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "signup__content"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", null, this.props.siteName), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
      className: "color--light"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
      id: "web.root.signup_info"
    })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "margin--extra"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h5", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
      id: "signup.title",
      defaultMessage: "Create an account with:"
    })))), signupControls, serverError), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
      className: "color--light"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
      id: "signup_user_completed.haveAccount",
      defaultMessage: "Already have an account?"
    }), ' ', react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
      to: '/login' + this.props.location.search
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
      id: "signup_user_completed.signIn",
      defaultMessage: "Click here to sign in."
    }))))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(SignupController, "propTypes", {
  location: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  loggedIn: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool.isRequired,
  isLicensed: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool.isRequired,
  enableOpenServer: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool.isRequired,
  noAccounts: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool.isRequired,
  enableSignUpWithEmail: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool.isRequired,
  enableSignUpWithGitLab: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool.isRequired,
  enableSignUpWithGoogle: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool.isRequired,
  enableSignUpWithOffice365: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool.isRequired,
  enableLDAP: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool.isRequired,
  enableSAML: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool.isRequired,
  samlLoginButtonText: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  siteName: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  usedBefore: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  ldapLoginFieldName: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
    removeGlobalItem: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
    getTeamInviteInfo: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
    addUserToTeamFromInvite: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
  }).isRequired
});

_defineProperty(SignupController, "contextTypes", {
  intl: react_intl__WEBPACK_IMPORTED_MODULE_7__["intlShape"].isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SignupController, "SignupController", "/home/pdxuan/Desktop/mattermost-webapp/components/signup/signup_controller/signup_controller.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

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
//# sourceMappingURL=20.da4cfb56f1fbeb1d8cb4.js.map
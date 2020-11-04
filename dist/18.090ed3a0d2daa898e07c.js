(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./actions/views/login.js":
/*!********************************!*\
  !*** ./actions/views/login.js ***!
  \********************************/
/*! exports provided: login, loginById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginById", function() { return loginById; });
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mattermost-redux/actions/users */ "./node_modules/mattermost-redux/actions/users.js");
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_1__);


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

function login(loginId, password, mfaToken) {
  return dispatch => {
    return ignoreMfaRequiredError(dispatch(mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_1__["login"](loginId, password, mfaToken)));
  };
}
function loginById(userId, password, mfaToken) {
  return dispatch => {
    return ignoreMfaRequiredError(dispatch(mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_1__["loginById"](userId, password, mfaToken)));
  };
}

async function ignoreMfaRequiredError(promise) {
  let result = await promise;

  if (result.error && result.error.server_error_id === 'api.context.mfa_required.app_error') {
    result = {
      data: true
    };
  }

  return result;
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(login, "login", "/home/pdxuan/Desktop/mattermost-webapp/actions/views/login.js");
  reactHotLoader.register(loginById, "loginById", "/home/pdxuan/Desktop/mattermost-webapp/actions/views/login.js");
  reactHotLoader.register(ignoreMfaRequiredError, "ignoreMfaRequiredError", "/home/pdxuan/Desktop/mattermost-webapp/actions/views/login.js");
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

/***/ "./components/common/site_name_and_description.jsx":
/*!*********************************************************!*\
  !*** ./components/common/site_name_and_description.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiteNameAndDescription; });
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



class SiteNameAndDescription extends react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent {
  render() {
    const {
      customDescriptionText,
      siteName
    } = this.props;
    let description = null;

    if (customDescriptionText) {
      description = customDescriptionText;
    } else {
      description = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "web.root.signup_info",
        defaultMessage: "All team communication in one place, searchable and accessible anywhere"
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      id: "site_name"
    }, siteName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
      id: "site_description",
      className: "color--light"
    }, description));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(SiteNameAndDescription, "propTypes", {
  customDescriptionText: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  siteName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
});

_defineProperty(SiteNameAndDescription, "defaultProps", {
  siteName: 'Mattermost'
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SiteNameAndDescription, "SiteNameAndDescription", "/home/pdxuan/Desktop/mattermost-webapp/components/common/site_name_and_description.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/signup/signup_email/index.js":
/*!*************************************************!*\
  !*** ./components/signup/signup_email/index.js ***!
  \*************************************************/
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
/* harmony import */ var mattermost_redux_actions_teams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mattermost-redux/actions/teams */ "./node_modules/mattermost-redux/actions/teams.js");
/* harmony import */ var mattermost_redux_actions_teams__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_teams__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var actions_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! actions/storage */ "./actions/storage.js");
/* harmony import */ var actions_views_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! actions/views/login */ "./actions/views/login.js");
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");
/* harmony import */ var _signup_email_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup_email.jsx */ "./components/signup/signup_email/signup_email.jsx");
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
  const enableSignUpWithEmail = config.EnableSignUpWithEmail === 'true';
  const siteName = config.SiteName;
  const termsOfServiceLink = config.TermsOfServiceLink;
  const privacyPolicyLink = config.PrivacyPolicyLink;
  const customDescriptionText = config.CustomDescriptionText;
  return {
    enableSignUpWithEmail,
    siteName,
    termsOfServiceLink,
    privacyPolicyLink,
    customDescriptionText,
    passwordConfig: Object(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_7__["getPasswordConfig"])(config)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
      createUser: mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__["createUser"],
      loginById: actions_views_login__WEBPACK_IMPORTED_MODULE_6__["loginById"],
      setGlobalItem: actions_storage__WEBPACK_IMPORTED_MODULE_5__["setGlobalItem"],
      getTeamInviteInfo: mattermost_redux_actions_teams__WEBPACK_IMPORTED_MODULE_4__["getTeamInviteInfo"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_signup_email_jsx__WEBPACK_IMPORTED_MODULE_8__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/signup/signup_email/index.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/signup/signup_email/index.js");
  reactHotLoader.register(_default, "default", "/home/pdxuan/Desktop/mattermost-webapp/components/signup/signup_email/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/signup/signup_email/signup_email.jsx":
/*!*********************************************************!*\
  !*** ./components/signup/signup_email/signup_email.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignupEmail; });
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2__);
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
/* harmony import */ var mattermost_redux_utils_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mattermost-redux/utils/helpers */ "./node_modules/mattermost-redux/utils/helpers.js");
/* harmony import */ var mattermost_redux_utils_helpers__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_utils_helpers__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var actions_diagnostics_actions_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! actions/diagnostics_actions.jsx */ "./actions/diagnostics_actions.jsx");
/* harmony import */ var actions_global_actions_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! actions/global_actions.jsx */ "./actions/global_actions.jsx");
/* harmony import */ var utils_browser_history__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! utils/browser_history */ "./utils/browser_history.jsx");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! utils/constants */ "./utils/constants.jsx");
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");
/* harmony import */ var images_logo_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! images/logo.png */ "./images/logo.png");
/* harmony import */ var images_logo_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(images_logo_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var components_common_back_button_jsx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/common/back_button.jsx */ "./components/common/back_button.jsx");
/* harmony import */ var components_loading_screen__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/loading_screen */ "./components/loading_screen.tsx");
/* harmony import */ var components_common_site_name_and_description__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! components/common/site_name_and_description */ "./components/common/site_name_and_description.jsx");
/* harmony import */ var components_formatted_markdown_message_jsx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! components/formatted_markdown_message.jsx */ "./components/formatted_markdown_message.jsx");






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















class SignupEmail extends react__WEBPACK_IMPORTED_MODULE_6___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "setDocumentTitle", siteName => {
      if (siteName) {
        document.title = siteName;
      }
    });

    _defineProperty(this, "getTokenData", (token, data) => {
      const parsedData = JSON.parse(data);
      return {
        loading: false,
        token,
        email: parsedData.email,
        teamName: parsedData.name
      };
    });

    _defineProperty(this, "getInviteInfo", async inviteId => {
      const {
        data,
        error
      } = await this.props.actions.getTeamInviteInfo(inviteId);

      if (data) {
        this.setState({
          loading: false,
          noOpenServerError: false,
          serverError: '',
          teamName: data.name
        });
      } else if (error) {
        this.setState({
          loading: false,
          noOpenServerError: true,
          serverError: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
            id: "signup_user_completed.invalid_invite",
            defaultMessage: "The invite link was invalid.  Please speak with your Administrator to receive an invitation."
          })
        });
      }
    });

    _defineProperty(this, "handleSignupSuccess", (user, data) => {
      Object(actions_diagnostics_actions_jsx__WEBPACK_IMPORTED_MODULE_10__["trackEvent"])('signup', 'signup_user_02_complete');
      this.props.actions.loginById(data.id, user.password, '').then(({
        error
      }) => {
        if (error) {
          if (error.server_error_id === 'api.user.login.not_verified.app_error') {
            utils_browser_history__WEBPACK_IMPORTED_MODULE_12__["browserHistory"].push('/should_verify_email?email=' + encodeURIComponent(user.email) + '&teamname=' + encodeURIComponent(this.state.teamName));
          } else {
            this.setState({
              serverError: error.message,
              isSubmitting: false
            });
          }

          return;
        }

        if (this.state.token > 0) {
          this.props.actions.setGlobalItem(this.state.token, JSON.stringify({
            usedBefore: true
          }));
        }

        const redirectTo = new URLSearchParams(this.props.location.search).get('redirect_to');

        if (redirectTo) {
          utils_browser_history__WEBPACK_IMPORTED_MODULE_12__["browserHistory"].push(redirectTo);
        } else {
          actions_global_actions_jsx__WEBPACK_IMPORTED_MODULE_11__["redirectUserToDefaultTeam"]();
        }
      });
    });

    _defineProperty(this, "isUserValid", () => {
      const providedEmail = this.refs.email.value.trim();

      if (!providedEmail) {
        this.setState({
          nameError: '',
          emailError: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
            id: "signup_user_completed.required"
          }),
          passwordError: '',
          serverError: ''
        });
        return false;
      }

      if (!Object(mattermost_redux_utils_helpers__WEBPACK_IMPORTED_MODULE_9__["isEmail"])(providedEmail)) {
        this.setState({
          nameError: '',
          emailError: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
            id: "signup_user_completed.validEmail"
          }),
          passwordError: '',
          serverError: ''
        });
        return false;
      }

      const providedUsername = this.refs.name.value.trim().toLowerCase();

      if (!providedUsername) {
        this.setState({
          nameError: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
            id: "signup_user_completed.required"
          }),
          emailError: '',
          passwordError: '',
          serverError: ''
        });
        return false;
      }

      const usernameError = utils_utils_jsx__WEBPACK_IMPORTED_MODULE_14__["isValidUsername"](providedUsername);

      if (usernameError === 'Cannot use a reserved word as a username.') {
        this.setState({
          nameError: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
            id: "signup_user_completed.reserved"
          }),
          emailError: '',
          passwordError: '',
          serverError: ''
        });
        return false;
      } else if (usernameError) {
        this.setState({
          nameError: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
            id: "signup_user_completed.usernameLength",
            values: {
              min: utils_constants__WEBPACK_IMPORTED_MODULE_13__["default"].MIN_USERNAME_LENGTH,
              max: utils_constants__WEBPACK_IMPORTED_MODULE_13__["default"].MAX_USERNAME_LENGTH
            }
          }),
          emailError: '',
          passwordError: '',
          serverError: ''
        });
        return false;
      }

      const providedPassword = this.refs.password.value;
      const {
        valid,
        error
      } = utils_utils_jsx__WEBPACK_IMPORTED_MODULE_14__["isValidPassword"](providedPassword, this.props.passwordConfig);

      if (!valid && error) {
        this.setState({
          nameError: '',
          emailError: '',
          passwordError: error,
          serverError: ''
        });
        return false;
      }

      return true;
    });

    _defineProperty(this, "handleSubmit", e => {
      e.preventDefault(); // bail out if a submission is already in progress

      if (this.state.isSubmitting) {
        return;
      }

      if (this.isUserValid()) {
        this.setState({
          nameError: '',
          emailError: '',
          passwordError: '',
          serverError: '',
          isSubmitting: true
        });
        const user = {
          email: this.refs.email.value.trim(),
          username: this.refs.name.value.trim().toLowerCase(),
          password: this.refs.password.value,
          allow_marketing: true
        };
        this.props.actions.createUser(user, this.state.token, this.state.inviteId).then(result => {
          if (result.error) {
            this.setState({
              serverError: result.error.message,
              isSubmitting: false
            });
            return;
          }

          this.handleSignupSuccess(user, result.data);
        });
      }
    });

    _defineProperty(this, "renderEmailSignup", () => {
      let emailError = null;
      let emailHelpText = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        id: "valid_email",
        className: "help-block"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
        id: "signup_user_completed.emailHelp",
        defaultMessage: "Valid email required for sign-up"
      }));
      let emailDivStyle = 'form-group';

      if (this.state.emailError) {
        emailError = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
          className: "control-label"
        }, this.state.emailError);
        emailHelpText = '';
        emailDivStyle += ' has-error';
      }

      let nameError = null;
      let nameHelpText = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        id: "valid_name",
        className: "help-block"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
        id: "signup_user_completed.userHelp",
        defaultMessage: "You can use lowercase letters, numbers, periods, dashes, and underscores."
      }));
      let nameDivStyle = 'form-group';

      if (this.state.nameError) {
        nameError = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
          className: "control-label"
        }, this.state.nameError);
        nameHelpText = '';
        nameDivStyle += ' has-error';
      }

      let passwordError = null;
      let passwordDivStyle = 'form-group';

      if (this.state.passwordError) {
        passwordError = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
          className: "control-label"
        }, this.state.passwordError);
        passwordDivStyle += ' has-error';
      }

      let yourEmailIs = null;

      if (this.state.email) {
        yourEmailIs = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_formatted_markdown_message_jsx__WEBPACK_IMPORTED_MODULE_19__["default"], {
          id: "signup_user_completed.emailIs",
          defaultMessage: "Your email address is **{email}**. You'll use this address to sign in to {siteName}.",
          values: {
            email: this.state.email,
            siteName: this.props.siteName
          }
        });
      }

      let emailContainerStyle = 'margin--extra';

      if (this.state.email) {
        emailContainerStyle = 'hidden';
      }

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "inner__content"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: emailContainerStyle
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h5", {
        id: "email_label"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
        id: "signup_user_completed.whatis",
        defaultMessage: "What's your email address?"
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: emailDivStyle
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        id: "email",
        type: "email",
        ref: "email",
        className: "form-control",
        defaultValue: this.state.email,
        placeholder: "",
        maxLength: "128",
        autoFocus: true,
        spellCheck: "false",
        autoCapitalize: "off"
      }), emailError, emailHelpText)), yourEmailIs, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "margin--extra"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h5", {
        id: "name_label"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
        id: "signup_user_completed.chooseUser",
        defaultMessage: "Choose your username"
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: nameDivStyle
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        id: "name",
        type: "text",
        ref: "name",
        className: "form-control",
        placeholder: "",
        maxLength: utils_constants__WEBPACK_IMPORTED_MODULE_13__["default"].MAX_USERNAME_LENGTH,
        spellCheck: "false",
        autoCapitalize: "off"
      }), nameError, nameHelpText)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "margin--extra"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h5", {
        id: "password_label"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
        id: "signup_user_completed.choosePwd",
        defaultMessage: "Choose your password"
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: passwordDivStyle
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        id: "password",
        type: "password",
        ref: "password",
        className: "form-control",
        placeholder: "",
        maxLength: "128",
        spellCheck: "false"
      }), passwordError)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "margin--extra"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        id: "createAccountButton",
        type: "submit",
        onClick: this.handleSubmit,
        className: "btn-primary btn",
        disabled: this.state.isSubmitting
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
        id: "signup_user_completed.create",
        defaultMessage: "Create Account"
      })))));
    });

    const _data = new URLSearchParams(this.props.location.search).get('d');

    const _token = new URLSearchParams(this.props.location.search).get('t');

    const _inviteId = new URLSearchParams(this.props.location.search).get('id');

    this.state = {};

    if (_token && _token.length > 0) {
      this.state = this.getTokenData(_token, _data);
    } else if (_inviteId && _inviteId.length > 0) {
      this.state = {
        loading: true,
        inviteId: _inviteId
      };
    }
  }

  componentDidMount() {
    Object(actions_diagnostics_actions_jsx__WEBPACK_IMPORTED_MODULE_10__["trackEvent"])('signup', 'signup_user_01_welcome');
    this.setDocumentTitle(this.props.siteName);
    const {
      inviteId
    } = this.state;

    if (inviteId && inviteId.length > 0) {
      this.getInviteInfo(inviteId);
    }
  }

  componentDidUpdate() {
    this.setDocumentTitle(this.props.siteName);
  }

  render() {
    const {
      customDescriptionText,
      enableSignUpWithEmail,
      location,
      privacyPolicyLink,
      siteName,
      termsOfServiceLink
    } = this.props;
    let serverError = null;

    if (this.state.serverError) {
      serverError = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "existingEmailErrorContainer",
        className: 'form-group has-error'
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        className: "control-label"
      }, this.state.serverError));
    }

    if (this.state.loading) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_loading_screen__WEBPACK_IMPORTED_MODULE_17__["default"], null);
    }

    let emailSignup;

    if (enableSignUpWithEmail) {
      emailSignup = this.renderEmailSignup();
    } else {
      return null;
    }

    let terms = null;

    if (!this.state.noOpenServerError && emailSignup) {
      terms = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        id: "signup_agreement"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_formatted_markdown_message_jsx__WEBPACK_IMPORTED_MODULE_19__["default"], {
        id: "create_team.agreement",
        defaultMessage: "By proceeding to create your account and use {siteName}, you agree to our [Terms of Service]({TermsOfServiceLink}) and [Privacy Policy]({PrivacyPolicyLink}). If you do not agree, you cannot use {siteName}.",
        values: {
          siteName,
          TermsOfServiceLink: termsOfServiceLink,
          PrivacyPolicyLink: privacyPolicyLink
        }
      }));
    }

    if (this.state.noOpenServerError) {
      emailSignup = null;
    }

    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_common_back_button_jsx__WEBPACK_IMPORTED_MODULE_16__["default"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      id: "signup_email_section",
      className: "col-sm-12"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "signup-team__container padding--less"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
      alt: 'signup team logo',
      className: "signup-team-logo",
      src: images_logo_png__WEBPACK_IMPORTED_MODULE_15___default.a
    }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_common_site_name_and_description__WEBPACK_IMPORTED_MODULE_18__["default"], {
      customDescriptionText: customDescriptionText,
      siteName: siteName
    }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
      id: "create_account",
      className: "color--light"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
      id: "signup_user_completed.lets",
      defaultMessage: "Let's create your account"
    })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
      id: "signin_account",
      className: "color--light"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
      id: "signup_user_completed.haveAccount",
      defaultMessage: "Already have an account?"
    }), ' ', react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
      id: "signin_account_link",
      to: '/login' + location.search
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
      id: "signup_user_completed.signIn",
      defaultMessage: "Click here to sign in."
    }))), emailSignup, serverError, terms)));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(SignupEmail, "propTypes", {
  location: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  enableSignUpWithEmail: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool.isRequired,
  siteName: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  termsOfServiceLink: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  privacyPolicyLink: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  customDescriptionText: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  passwordConfig: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
    createUser: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
    loginById: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
    setGlobalItem: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
    getTeamInviteInfo: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
  }).isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SignupEmail, "SignupEmail", "/home/pdxuan/Desktop/mattermost-webapp/components/signup/signup_email/signup_email.jsx");
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
//# sourceMappingURL=18.090ed3a0d2daa898e07c.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

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

/***/ "./components/login/login_controller/index.js":
/*!****************************************************!*\
  !*** ./components/login/login_controller/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/selectors/entities/general */ "./node_modules/mattermost-redux/selectors/entities/general.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mattermost-redux/selectors/entities/teams */ "./node_modules/mattermost-redux/selectors/entities/teams.js");
/* harmony import */ var mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mattermost-redux/selectors/entities/users */ "./node_modules/mattermost-redux/selectors/entities/users.js");
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mattermost-redux/constants */ "./node_modules/mattermost-redux/constants/index.js");
/* harmony import */ var mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var actions_team_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! actions/team_actions */ "./actions/team_actions.jsx");
/* harmony import */ var actions_views_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! actions/views/login */ "./actions/views/login.js");
/* harmony import */ var _login_controller_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login_controller.jsx */ "./components/login/login_controller/login_controller.jsx");
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
  const config = Object(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_2__["getConfig"])(state);
  const license = Object(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_2__["getLicense"])(state);
  const isLicensed = license.IsLicensed === 'true';
  const customBrandText = config.CustomBrandText;
  const customDescriptionText = config.CustomDescriptionText;
  const enableCustomBrand = config.EnableCustomBrand === 'true';
  const enableLdap = config.EnableLdap === 'true';
  const enableOpenServer = config.EnableOpenServer === 'true';
  const enableSaml = config.EnableSaml === 'true';
  const enableSignInWithEmail = config.EnableSignInWithEmail === 'true';
  const enableSignInWithUsername = config.EnableSignInWithUsername === 'true';
  const enableSignUpWithEmail = config.EnableSignUpWithEmail === 'true';
  const enableSignUpWithGitLab = config.EnableSignUpWithGitLab === 'true';
  const enableSignUpWithGoogle = config.EnableSignUpWithGoogle === 'true';
  const enableSignUpWithOffice365 = config.EnableSignUpWithOffice365 === 'true';
  const ldapLoginFieldName = config.LdapLoginFieldName;
  const samlLoginButtonText = config.SamlLoginButtonText;
  const siteName = config.SiteName;
  const initializing = state.requests.users.logout.status === mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_5__["RequestStatus"].SUCCESS || !state.storage.initialized; // Only set experimental team if user is on that team

  let experimentalPrimaryTeam = config.ExperimentalPrimaryTeam;

  if (experimentalPrimaryTeam) {
    const team = Object(mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_3__["getTeamByName"])(state, experimentalPrimaryTeam);

    if (team) {
      const member = Object(mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_3__["getMyTeamMember"])(state, team.id);

      if (!member || !member.team_id) {
        experimentalPrimaryTeam = null;
      }
    } else {
      experimentalPrimaryTeam = null;
    }
  }

  return {
    currentUser: Object(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_4__["getCurrentUser"])(state),
    isLicensed,
    customBrandText,
    customDescriptionText,
    enableCustomBrand,
    enableLdap,
    enableOpenServer,
    enableSaml,
    enableSignInWithEmail,
    enableSignInWithUsername,
    enableSignUpWithEmail,
    enableSignUpWithGitLab,
    enableSignUpWithGoogle,
    enableSignUpWithOffice365,
    experimentalPrimaryTeam,
    ldapLoginFieldName,
    samlLoginButtonText,
    siteName,
    initializing
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
      login: actions_views_login__WEBPACK_IMPORTED_MODULE_7__["login"],
      addUserToTeamFromInvite: actions_team_actions__WEBPACK_IMPORTED_MODULE_6__["addUserToTeamFromInvite"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_login_controller_jsx__WEBPACK_IMPORTED_MODULE_8__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/login/login_controller/index.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/login/login_controller/index.js");
  reactHotLoader.register(_default, "default", "/home/pdxuan/Desktop/mattermost-webapp/components/login/login_controller/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/login/login_controller/login_controller.jsx":
/*!****************************************************************!*\
  !*** ./components/login/login_controller/login_controller.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.url */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var mattermost_redux_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mattermost-redux/client */ "./node_modules/mattermost-redux/client/index.js");
/* harmony import */ var mattermost_redux_client__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_client__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var actions_global_actions_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! actions/global_actions.jsx */ "./actions/global_actions.jsx");
/* harmony import */ var stores_local_storage_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! stores/local_storage_store */ "./stores/local_storage_store.jsx");
/* harmony import */ var utils_browser_history__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! utils/browser_history */ "./utils/browser_history.jsx");
/* harmony import */ var utils_constants_jsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! utils/constants.jsx */ "./utils/constants.jsx");
/* harmony import */ var utils_message_html_to_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! utils/message_html_to_component */ "./utils/message_html_to_component.jsx");
/* harmony import */ var utils_text_formatting_jsx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! utils/text_formatting.jsx */ "./utils/text_formatting.jsx");
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");
/* harmony import */ var utils_notifications__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! utils/notifications */ "./utils/notifications.tsx");
/* harmony import */ var utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! utils/i18n.jsx */ "./utils/i18n.jsx");
/* harmony import */ var images_logo_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! images/logo.png */ "./images/logo.png");
/* harmony import */ var images_logo_png__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(images_logo_png__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var components_common_site_name_and_description__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! components/common/site_name_and_description */ "./components/common/site_name_and_description.jsx");
/* harmony import */ var components_announcement_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! components/announcement_bar */ "./components/announcement_bar/index.js");
/* harmony import */ var components_form_error__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! components/form_error */ "./components/form_error.tsx");
/* harmony import */ var components_formatted_markdown_message_jsx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! components/formatted_markdown_message.jsx */ "./components/formatted_markdown_message.jsx");
/* harmony import */ var components_common_back_button_jsx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! components/common/back_button.jsx */ "./components/common/back_button.jsx");
/* harmony import */ var components_loading_screen__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! components/loading_screen */ "./components/loading_screen.tsx");
/* harmony import */ var components_widgets_loading_loading_wrapper__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! components/widgets/loading/loading_wrapper */ "./components/widgets/loading/loading_wrapper.tsx");
/* harmony import */ var components_widgets_icons_fa_success_icon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! components/widgets/icons/fa_success_icon */ "./components/widgets/icons/fa_success_icon.jsx");
/* harmony import */ var components_widgets_icons_fa_warning_icon__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! components/widgets/icons/fa_warning_icon */ "./components/widgets/icons/fa_warning_icon.tsx");
/* harmony import */ var components_localized_input_localized_input__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! components/localized_input/localized_input */ "./components/localized_input/localized_input.tsx");
/* harmony import */ var _login_mfa_jsx__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../login_mfa.jsx */ "./components/login/login_mfa.jsx");








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



























class LoginController extends react__WEBPACK_IMPORTED_MODULE_8___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "configureTitle", () => {
      if (this.state.sessionExpired) {
        document.title = this.props.intl.formatMessage({
          id: 'login.session_expired.title',
          defaultMessage: '* {siteName} - Session Expired'
        }, {
          siteName: this.props.siteName
        });
      } else {
        document.title = this.props.siteName;
      }
    });

    _defineProperty(this, "showSessionExpiredNotificationIfNeeded", () => {
      if (this.state.sessionExpired && !this.closeSessionExpiredNotification) {
        Object(utils_notifications__WEBPACK_IMPORTED_MODULE_19__["showNotification"])({
          title: this.props.siteName,
          body: utils_utils_jsx__WEBPACK_IMPORTED_MODULE_18__["localizeMessage"]('login.session_expired.notification', 'Session Expired: Please sign in to continue receiving notifications.'),
          requireInteraction: true,
          silent: false,
          onClick: () => {
            window.focus();

            if (this.closeSessionExpiredNotification()) {
              this.closeSessionExpiredNotification();
              this.closeSessionExpiredNotification = null;
            }
          }
        }).then(closeNotification => {
          this.closeSessionExpiredNotification = closeNotification;
        }).catch(() => {// Ignore the failure to display the notification.
        });
      } else if (!this.state.sessionExpired && this.closeSessionExpiredNotification) {
        this.closeSessionExpiredNotification();
        this.closeSessionExpiredNotification = null;
      }
    });

    _defineProperty(this, "preSubmit", e => {
      e.preventDefault(); // Discard any session expiry notice once the user interacts with the login page.

      this.onDismissSessionExpired();
      const {
        location
      } = this.props;
      const newQuery = location.search.replace(/(extra=password_change)&?/i, '');

      if (newQuery !== location.search) {
        utils_browser_history__WEBPACK_IMPORTED_MODULE_14__["browserHistory"].replace("".concat(location.pathname).concat(newQuery).concat(location.hash));
      } // password managers don't always call onInput handlers for form fields so it's possible
      // for the state to get out of sync with what the user sees in the browser


      let loginId = this.state.loginId;

      if (this.loginIdInput.current) {
        loginId = this.loginIdInput.current.value;

        if (loginId !== this.state.loginId) {
          this.setState({
            loginId
          });
        }
      }

      let password = this.state.password;

      if (this.passwordInput.current) {
        password = this.passwordInput.current.value;

        if (password !== this.state.password) {
          this.setState({
            password
          });
        }
      } // don't trim the password since we support spaces in passwords


      loginId = loginId.trim().toLowerCase();

      if (!loginId) {
        Object(utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_20__["t"])('login.noEmail');
        Object(utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_20__["t"])('login.noEmailLdapUsername');
        Object(utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_20__["t"])('login.noEmailUsername');
        Object(utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_20__["t"])('login.noEmailUsernameLdapUsername');
        Object(utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_20__["t"])('login.noLdapUsername');
        Object(utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_20__["t"])('login.noUsername');
        Object(utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_20__["t"])('login.noUsernameLdapUsername'); // it's slightly weird to be constructing the message ID, but it's a bit nicer than triply nested if statements

        let msgId = 'login.no';

        if (this.state.emailSigninEnabled) {
          msgId += 'Email';
        }

        if (this.state.usernameSigninEnabled) {
          msgId += 'Username';
        }

        if (this.state.ldapEnabled) {
          msgId += 'LdapUsername';
        }

        this.setState({
          serverError: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
            id: msgId,
            values: {
              ldapUsername: this.props.ldapLoginFieldName || utils_utils_jsx__WEBPACK_IMPORTED_MODULE_18__["localizeMessage"]('login.ldapUsernameLower', 'AD/LDAP username')
            }
          })
        });
        return;
      }

      if (!password) {
        this.setState({
          serverError: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
            id: "login.noPassword",
            defaultMessage: "Please enter your password"
          })
        });
        return;
      }

      this.submit(loginId, password, '');
    });

    _defineProperty(this, "submit", (loginId, password, token) => {
      this.setState({
        serverError: null,
        loading: true
      });
      this.props.actions.login(loginId, password, token).then(async ({
        error
      }) => {
        if (error) {
          if (error.server_error_id === 'api.user.login.not_verified.app_error') {
            utils_browser_history__WEBPACK_IMPORTED_MODULE_14__["browserHistory"].push('/should_verify_email?&email=' + encodeURIComponent(loginId));
          } else if (error.server_error_id === 'store.sql_user.get_for_login.app_error' || error.server_error_id === 'ent.ldap.do_login.user_not_registered.app_error') {
            this.setState({
              showMfa: false,
              loading: false,
              serverError: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
                id: "login.userNotFound",
                defaultMessage: "We couldn't find an account matching your login credentials."
              })
            });
          } else if (error.server_error_id === 'api.user.check_user_password.invalid.app_error' || error.server_error_id === 'ent.ldap.do_login.invalid_password.app_error') {
            this.setState({
              showMfa: false,
              loading: false,
              serverError: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
                id: "login.invalidPassword",
                defaultMessage: "Your password is incorrect."
              })
            });
          } else if (!this.state.showMfa && error.server_error_id === 'mfa.validate_token.authenticate.app_error') {
            this.setState({
              showMfa: true
            });
          } else {
            this.setState({
              showMfa: false,
              serverError: error.message,
              loading: false
            });
          }

          return;
        } // check for query params brought over from signup_user_complete


        const params = new URLSearchParams(this.props.location.search);
        const inviteToken = params.get('t') || '';
        const inviteId = params.get('id') || '';

        if (inviteId || inviteToken) {
          const {
            data: team
          } = await this.props.actions.addUserToTeamFromInvite(inviteToken, inviteId);

          if (team) {
            this.finishSignin(team);
          } else {
            // there's not really a good way to deal with this, so just let the user log in like normal
            this.finishSignin();
          }
        } else {
          this.finishSignin();
        }
      });
    });

    _defineProperty(this, "finishSignin", team => {
      const experimentalPrimaryTeam = this.props.experimentalPrimaryTeam;
      const query = new URLSearchParams(this.props.location.search);
      const redirectTo = query.get('redirect_to');
      utils_utils_jsx__WEBPACK_IMPORTED_MODULE_18__["setCSRFFromCookie"](); // Record a successful login to local storage. If an unintentional logout occurs, e.g.
      // via session expiration, this bit won't get reset and we can notify the user as such.

      stores_local_storage_store__WEBPACK_IMPORTED_MODULE_13__["default"].setWasLoggedIn(true);

      if (redirectTo && redirectTo.match(/^\/([^/]|$)/)) {
        utils_browser_history__WEBPACK_IMPORTED_MODULE_14__["browserHistory"].push(redirectTo);
      } else if (team) {
        utils_browser_history__WEBPACK_IMPORTED_MODULE_14__["browserHistory"].push("/".concat(team.name));
      } else if (experimentalPrimaryTeam) {
        utils_browser_history__WEBPACK_IMPORTED_MODULE_14__["browserHistory"].push("/".concat(experimentalPrimaryTeam));
      } else {
        actions_global_actions_jsx__WEBPACK_IMPORTED_MODULE_12__["redirectUserToDefaultTeam"]();
      }
    });

    _defineProperty(this, "handleLoginIdChange", e => {
      this.setState({
        loginId: e.target.value
      });
    });

    _defineProperty(this, "handlePasswordChange", e => {
      this.setState({
        password: e.target.value
      });
    });

    _defineProperty(this, "handleBrandImageError", () => {
      this.setState({
        brandImageError: true
      });
    });

    _defineProperty(this, "createCustomLogin", () => {
      if (this.props.enableCustomBrand) {
        const text = this.props.customBrandText || '';
        const formattedText = utils_text_formatting_jsx__WEBPACK_IMPORTED_MODULE_17__["formatText"](text);
        const brandImageUrl = mattermost_redux_client__WEBPACK_IMPORTED_MODULE_11__["Client4"].getBrandImageUrl(0);
        const brandImageStyle = this.state.brandImageError ? {
          display: 'none'
        } : {};
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
          alt: 'brand image',
          src: brandImageUrl,
          onError: this.handleBrandImageError,
          style: brandImageStyle
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, Object(utils_message_html_to_component__WEBPACK_IMPORTED_MODULE_16__["default"])(formattedText, false, {
          mentions: false,
          imagesMetadata: null
        })));
      }

      return null;
    });

    _defineProperty(this, "createLoginPlaceholder", () => {
      const ldapEnabled = this.state.ldapEnabled;
      const usernameSigninEnabled = this.state.usernameSigninEnabled;
      const emailSigninEnabled = this.state.emailSigninEnabled;
      const loginPlaceholders = [];

      if (emailSigninEnabled) {
        loginPlaceholders.push(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_18__["localizeMessage"]('login.email', 'Email'));
      }

      if (usernameSigninEnabled) {
        loginPlaceholders.push(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_18__["localizeMessage"]('login.username', 'Username'));
      }

      if (ldapEnabled) {
        if (this.props.ldapLoginFieldName) {
          loginPlaceholders.push(this.props.ldapLoginFieldName);
        } else {
          loginPlaceholders.push(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_18__["localizeMessage"]('login.ldapUsername', 'AD/LDAP Username'));
        }
      }

      if (loginPlaceholders.length >= 2) {
        return loginPlaceholders.slice(0, loginPlaceholders.length - 1).join(', ') + utils_utils_jsx__WEBPACK_IMPORTED_MODULE_18__["localizeMessage"]('login.placeholderOr', ' or ') + loginPlaceholders[loginPlaceholders.length - 1];
      } else if (loginPlaceholders.length === 1) {
        return loginPlaceholders[0];
      }

      return '';
    });

    _defineProperty(this, "checkSignUpEnabled", () => {
      return this.props.enableSignUpWithEmail || this.props.enableSignUpWithGitLab || this.props.enableSignUpWithOffice365 || this.props.enableSignUpWithGoogle || this.props.enableLdap || this.props.enableSaml;
    });

    _defineProperty(this, "onDismissSessionExpired", () => {
      stores_local_storage_store__WEBPACK_IMPORTED_MODULE_13__["default"].setWasLoggedIn(false);
      this.setState({
        sessionExpired: false
      });
    });

    _defineProperty(this, "createExtraText", () => {
      const extraParam = new URLSearchParams(this.props.location.search).get('extra');

      if (this.state.sessionExpired) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "alert alert-warning"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(components_widgets_icons_fa_warning_icon__WEBPACK_IMPORTED_MODULE_30__["default"], null), ' ', react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
          id: "login.session_expired",
          defaultMessage: "Your session has expired. Please log in again."
        }), ' ', react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Link"], {
          className: "btn-close",
          to: "/login",
          onClick: this.onDismissSessionExpired
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, '×')));
      }

      if (extraParam === utils_constants_jsx__WEBPACK_IMPORTED_MODULE_15__["default"].GET_TERMS_ERROR) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "alert has-error no-padding"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
          className: "control-label"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
          id: "login.get_terms_error",
          defaultMessage: "Unable to load terms of service. If this issue persists, contact your System Administrator."
        })));
      } else if (extraParam === utils_constants_jsx__WEBPACK_IMPORTED_MODULE_15__["default"].TERMS_REJECTED) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "alert alert-warning"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(components_widgets_icons_fa_warning_icon__WEBPACK_IMPORTED_MODULE_30__["default"], null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(components_formatted_markdown_message_jsx__WEBPACK_IMPORTED_MODULE_25__["default"], {
          id: "login.terms_rejected",
          defaultMessage: "You must agree to the terms of service before accessing {siteName}. Please contact your System Administrator for more details.",
          values: {
            siteName: this.props.siteName
          }
        }));
      } else if (extraParam === utils_constants_jsx__WEBPACK_IMPORTED_MODULE_15__["default"].SIGNIN_CHANGE) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "alert alert-success"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(components_widgets_icons_fa_success_icon__WEBPACK_IMPORTED_MODULE_29__["default"], null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
          id: "login.changed",
          defaultMessage: " Sign-in method changed successfully"
        }));
      } else if (extraParam === utils_constants_jsx__WEBPACK_IMPORTED_MODULE_15__["default"].SIGNIN_VERIFIED) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "alert alert-success"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(components_widgets_icons_fa_success_icon__WEBPACK_IMPORTED_MODULE_29__["default"], null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
          id: "login.verified",
          defaultMessage: " Email Verified"
        }));
      } else if (extraParam === utils_constants_jsx__WEBPACK_IMPORTED_MODULE_15__["default"].PASSWORD_CHANGE) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          id: "passwordUpdatedSuccess",
          className: "alert alert-success"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(components_widgets_icons_fa_success_icon__WEBPACK_IMPORTED_MODULE_29__["default"], null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
          id: "login.passwordChanged",
          defaultMessage: " Password updated successfully"
        }));
      } else if (extraParam === utils_constants_jsx__WEBPACK_IMPORTED_MODULE_15__["default"].CREATE_LDAP) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "alert alert-grey"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
          id: "login.ldapCreate",
          defaultMessage: " Enter your AD/LDAP username and password to create an account."
        }));
      }

      return null;
    });

    _defineProperty(this, "createLoginOptions", () => {
      const loginControls = [];
      const ldapEnabled = this.state.ldapEnabled;
      const gitlabSigninEnabled = this.props.enableSignUpWithGitLab;
      const googleSigninEnabled = this.props.enableSignUpWithGoogle;
      const office365SigninEnabled = this.props.enableSignUpWithOffice365;
      const samlSigninEnabled = this.state.samlEnabled;
      const usernameSigninEnabled = this.state.usernameSigninEnabled;
      const emailSigninEnabled = this.state.emailSigninEnabled;

      if (emailSigninEnabled || usernameSigninEnabled || ldapEnabled) {
        let errorClass = '';

        if (this.state.serverError) {
          errorClass = ' has-error';
        }

        loginControls.push(react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("form", {
          key: "loginBoxes",
          onSubmit: this.preSubmit
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "signup__email-container"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(components_form_error__WEBPACK_IMPORTED_MODULE_24__["default"], {
          error: this.state.serverError,
          margin: true
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: 'form-group' + errorClass
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
          id: "loginId",
          className: "form-control",
          ref: this.loginIdInput,
          name: "loginId",
          value: this.state.loginId,
          onChange: this.handleLoginIdChange,
          placeholder: this.createLoginPlaceholder(),
          spellCheck: "false",
          autoCapitalize: "off",
          autoFocus: true
        })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: 'form-group' + errorClass
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(components_localized_input_localized_input__WEBPACK_IMPORTED_MODULE_31__["default"], {
          id: "loginPassword",
          type: "password",
          className: "form-control",
          ref: this.passwordInput,
          name: "password",
          value: this.state.password,
          onChange: this.handlePasswordChange,
          placeholder: {
            id: Object(utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_20__["t"])('login.password'),
            defaultMessage: 'Password'
          },
          spellCheck: "false"
        })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "form-group"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
          id: "loginButton",
          type: "submit",
          className: "btn btn-primary"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(components_widgets_loading_loading_wrapper__WEBPACK_IMPORTED_MODULE_28__["default"], {
          id: "login_button_signing",
          loading: this.state.loading,
          text: utils_utils_jsx__WEBPACK_IMPORTED_MODULE_18__["localizeMessage"]('login.signInLoading', 'Signing in...')
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
          id: "login.signIn",
          defaultMessage: "Sign in"
        })))))));
      }

      if (this.props.enableOpenServer && this.checkSignUpEnabled()) {
        loginControls.push(react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "form-group",
          key: "signup"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
          id: "login.noAccount",
          defaultMessage: "Don't have an account? "
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Link"], {
          id: "signup",
          to: '/signup_user_complete' + this.props.location.search,
          className: "signup-team-login"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
          id: "login.create",
          defaultMessage: "Create one now"
        })))));
      }

      if (usernameSigninEnabled || emailSigninEnabled) {
        loginControls.push(react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          id: "login_forgot",
          key: "forgotPassword",
          className: "form-group"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Link"], {
          to: '/reset_password'
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
          id: "login.forgot",
          defaultMessage: "I forgot my password"
        }))));
      }

      if ((emailSigninEnabled || usernameSigninEnabled || ldapEnabled) && (gitlabSigninEnabled || googleSigninEnabled || samlSigninEnabled || office365SigninEnabled)) {
        loginControls.push(react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          key: "divider",
          className: "or__container"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
          id: "login.or",
          defaultMessage: "or"
        })));
        loginControls.push(react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h5", {
          key: "oauthHeader"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
          id: "login.signInWith",
          defaultMessage: "Sign in with:"
        })));
      }

      if (gitlabSigninEnabled) {
        loginControls.push(react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          className: "btn btn-custom-login gitlab",
          key: "gitlab",
          href: mattermost_redux_client__WEBPACK_IMPORTED_MODULE_11__["Client4"].getOAuthRoute() + '/gitlab/login' + this.props.location.search
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          className: "icon"
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
          id: "login.gitlab",
          defaultMessage: "GitLab"
        })))));
      }

      if (googleSigninEnabled) {
        loginControls.push(react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          className: "btn btn-custom-login google",
          key: "google",
          href: mattermost_redux_client__WEBPACK_IMPORTED_MODULE_11__["Client4"].getOAuthRoute() + '/google/login' + this.props.location.search
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          className: "icon"
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
          id: "login.google",
          defaultMessage: "Google Apps"
        })))));
      }

      if (office365SigninEnabled) {
        loginControls.push(react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          className: "btn btn-custom-login office365",
          key: "office365",
          href: mattermost_redux_client__WEBPACK_IMPORTED_MODULE_11__["Client4"].getOAuthRoute() + '/office365/login' + this.props.location.search
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          className: "icon"
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
          id: "login.office365",
          defaultMessage: "Office 365"
        })))));
      }

      if (samlSigninEnabled) {
        loginControls.push(react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          className: "btn btn-custom-login saml",
          key: "saml",
          href: mattermost_redux_client__WEBPACK_IMPORTED_MODULE_11__["Client4"].getUrl() + '/login/sso/saml' + this.props.location.search
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          className: "icon fa fa-lock fa--margin-top",
          title: "Saml icon"
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, this.props.samlLoginButtonText))));
      }

      if (loginControls.length === 0) {
        loginControls.push(react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(components_form_error__WEBPACK_IMPORTED_MODULE_24__["default"], {
          key: "noMethods",
          error: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
            id: "login.noMethods",
            defaultMessage: "No sign-in methods are enabled. Please contact your System Administrator."
          }),
          margin: true
        }));
      }

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, this.createExtraText(), loginControls);
    });

    _defineProperty(this, "hideMfa", () => {
      this.setState({
        showMfa: false
      });
    });

    let _loginId = '';

    if (new URLSearchParams(this.props.location.search).get('extra') === utils_constants_jsx__WEBPACK_IMPORTED_MODULE_15__["default"].SIGNIN_VERIFIED && new URLSearchParams(this.props.location.search).get('email')) {
      _loginId = new URLSearchParams(this.props.location.search).get('email');
    }

    this.state = {
      ldapEnabled: this.props.isLicensed && this.props.enableLdap,
      usernameSigninEnabled: this.props.enableSignInWithUsername,
      emailSigninEnabled: this.props.enableSignInWithEmail,
      samlEnabled: this.props.isLicensed && this.props.enableSaml,
      loginId: _loginId,
      password: '',
      showMfa: false,
      loading: false,
      sessionExpired: false,
      brandImageError: false
    };
    this.loginIdInput = react__WEBPACK_IMPORTED_MODULE_8___default.a.createRef();
    this.passwordInput = react__WEBPACK_IMPORTED_MODULE_8___default.a.createRef();
  }

  componentDidMount() {
    this.configureTitle();

    if (this.props.currentUser) {
      actions_global_actions_jsx__WEBPACK_IMPORTED_MODULE_12__["redirectUserToDefaultTeam"]();
      return;
    }

    const search = new URLSearchParams(this.props.location.search);
    const extra = search.get('extra');
    const email = search.get('email');

    if (extra === utils_constants_jsx__WEBPACK_IMPORTED_MODULE_15__["default"].SIGNIN_VERIFIED && email) {
      this.passwordInput.current.focus();
    } // Determine if the user was unexpectedly logged out.


    if (stores_local_storage_store__WEBPACK_IMPORTED_MODULE_13__["default"].getWasLoggedIn()) {
      if (extra === utils_constants_jsx__WEBPACK_IMPORTED_MODULE_15__["default"].SIGNIN_CHANGE) {
        // Assume that if the user triggered a sign in change, it was intended to logout.
        // We can't preflight this, since in some flows it's the server that invalidates
        // our session after we use it to complete the sign in change.
        stores_local_storage_store__WEBPACK_IMPORTED_MODULE_13__["default"].setWasLoggedIn(false);
      } else {
        // Although the authority remains the local sessionExpired bit on the state, set this
        // extra field in the querystring to signal the desktop app. And although eslint
        // complains about this, it is allowed: https://reactjs.org/docs/react-component.html#componentdidmount.
        // eslint-disable-next-line react/no-did-mount-set-state
        this.setState({
          sessionExpired: true
        });
        search.set('extra', utils_constants_jsx__WEBPACK_IMPORTED_MODULE_15__["default"].SESSION_EXPIRED);
        utils_browser_history__WEBPACK_IMPORTED_MODULE_14__["browserHistory"].replace("".concat(this.props.location.pathname, "?").concat(search));
      }
    }

    this.showSessionExpiredNotificationIfNeeded();
  }

  componentDidUpdate() {
    this.configureTitle();
    this.showSessionExpiredNotificationIfNeeded();
  }

  componentWillUnmount() {
    if (this.closeSessionExpiredNotification) {
      this.closeSessionExpiredNotification();
      this.closeSessionExpiredNotification = null;
    }
  }

  render() {
    const {
      customDescriptionText,
      siteName,
      initializing
    } = this.props;

    if (initializing) {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(components_loading_screen__WEBPACK_IMPORTED_MODULE_27__["default"], null);
    }

    let content;
    let customContent;
    let customClass;
    let backButton;

    if (this.state.showMfa) {
      content = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_login_mfa_jsx__WEBPACK_IMPORTED_MODULE_32__["default"], {
        loginId: this.state.loginId,
        password: this.state.password,
        submit: this.submit
      });
      backButton = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(components_common_back_button_jsx__WEBPACK_IMPORTED_MODULE_26__["default"], {
        onClick: this.hideMfa
      });
    } else {
      content = this.createLoginOptions();
      customContent = this.createCustomLogin();

      if (customContent) {
        customClass = 'branded';
      }
    }

    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(components_announcement_bar__WEBPACK_IMPORTED_MODULE_23__["default"], null), backButton, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
      id: "login_section",
      className: "col-sm-12"
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
      className: 'signup-team__container ' + customClass
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
      className: "signup__markdown"
    }, customContent), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
      alt: 'signup team logo',
      className: "signup-team-logo",
      src: images_logo_png__WEBPACK_IMPORTED_MODULE_21___default.a
    }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
      className: "signup__content"
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(components_common_site_name_and_description__WEBPACK_IMPORTED_MODULE_22__["default"], {
      customDescriptionText: customDescriptionText,
      siteName: siteName
    }), content))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(LoginController, "propTypes", {
  intl: react_intl__WEBPACK_IMPORTED_MODULE_9__["intlShape"].isRequired,
  location: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired,
  isLicensed: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool.isRequired,
  currentUser: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  customBrandText: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  customDescriptionText: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  enableCustomBrand: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool.isRequired,
  enableLdap: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool.isRequired,
  enableOpenServer: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool.isRequired,
  enableSaml: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool.isRequired,
  enableSignInWithEmail: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool.isRequired,
  enableSignInWithUsername: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool.isRequired,
  enableSignUpWithEmail: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool.isRequired,
  enableSignUpWithGitLab: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool.isRequired,
  enableSignUpWithGoogle: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool.isRequired,
  enableSignUpWithOffice365: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool.isRequired,
  experimentalPrimaryTeam: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  ldapLoginFieldName: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  samlLoginButtonText: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  siteName: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  initializing: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.shape({
    login: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,
    addUserToTeamFromInvite: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired
  }).isRequired
});

const _default = Object(react_intl__WEBPACK_IMPORTED_MODULE_9__["injectIntl"])(LoginController);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LoginController, "LoginController", "/home/pdxuan/Desktop/mattermost-webapp/components/login/login_controller/login_controller.jsx");
  reactHotLoader.register(_default, "default", "/home/pdxuan/Desktop/mattermost-webapp/components/login/login_controller/login_controller.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

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
//# sourceMappingURL=15.d4d51a0defd08626e38c.js.map
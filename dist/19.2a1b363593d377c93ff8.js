(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

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

/***/ "./components/do_verify_email/do_verify_email.jsx":
/*!********************************************************!*\
  !*** ./components/do_verify_email/do_verify_email.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DoVerifyEmail; });
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
/* harmony import */ var actions_diagnostics_actions_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! actions/diagnostics_actions.jsx */ "./actions/diagnostics_actions.jsx");
/* harmony import */ var utils_browser_history__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/browser_history */ "./utils/browser_history.jsx");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/constants */ "./utils/constants.jsx");
/* harmony import */ var images_logo_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! images/logo.png */ "./images/logo.png");
/* harmony import */ var images_logo_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(images_logo_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var components_common_back_button_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/common/back_button.jsx */ "./components/common/back_button.jsx");
/* harmony import */ var components_loading_screen__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/loading_screen */ "./components/loading_screen.tsx");
/* harmony import */ var actions_global_actions_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! actions/global_actions.jsx */ "./actions/global_actions.jsx");





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










class DoVerifyEmail extends react__WEBPACK_IMPORTED_MODULE_5___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "verifyEmail", async () => {
      const {
        actions: {
          verifyUserEmail
        }
      } = this.props;
      const verify = await verifyUserEmail(new URLSearchParams(this.props.location.search).get('token'));

      if (verify && verify.data) {
        this.handleSuccess();
      } else if (verify && verify.error) {
        this.handleError(utils_constants__WEBPACK_IMPORTED_MODULE_9__["VerifyEmailErrors"].FAILED_EMAIL_VERIFICATION);
      }
    });

    this.state = {
      verifyStatus: 'pending',
      serverError: ''
    };
  }

  componentDidMount() {
    this.verifyEmail();
  }

  handleRedirect() {
    if (this.props.isLoggedIn) {
      actions_global_actions_jsx__WEBPACK_IMPORTED_MODULE_13__["redirectUserToDefaultTeam"]();
    } else {
      utils_browser_history__WEBPACK_IMPORTED_MODULE_8__["browserHistory"].push('/login?extra=verified&email=' + encodeURIComponent(new URLSearchParams(this.props.location.search).get('email')));
    }
  }

  handleSuccess() {
    this.setState({
      verifyStatus: 'success'
    });
    this.props.actions.clearErrors();

    if (this.props.isLoggedIn) {
      this.props.actions.logError({
        message: utils_constants__WEBPACK_IMPORTED_MODULE_9__["AnnouncementBarMessages"].EMAIL_VERIFIED,
        type: utils_constants__WEBPACK_IMPORTED_MODULE_9__["AnnouncementBarTypes"].SUCCESS
      }, true);
      Object(actions_diagnostics_actions_jsx__WEBPACK_IMPORTED_MODULE_7__["trackEvent"])('settings', 'verify_email');
      this.props.actions.getMe().then(({
        data,
        error: err
      }) => {
        if (data) {
          this.handleRedirect();
        } else if (err) {
          this.handleError(utils_constants__WEBPACK_IMPORTED_MODULE_9__["VerifyEmailErrors"].FAILED_USER_STATE_GET);
        }
      });
    } else {
      this.handleRedirect();
    }
  }

  handleError(type) {
    let serverError = '';

    if (type === utils_constants__WEBPACK_IMPORTED_MODULE_9__["VerifyEmailErrors"].FAILED_EMAIL_VERIFICATION) {
      serverError = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
        id: "signup_user_completed.invalid_invite",
        defaultMessage: "The invite link was invalid. Please speak with your Administrator to receive an invitation."
      });
    } else if (type === utils_constants__WEBPACK_IMPORTED_MODULE_9__["VerifyEmailErrors"].FAILED_USER_STATE_GET) {
      serverError = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
        id: "signup_user_completed.failed_update_user_state",
        defaultMessage: "Please clear your cache and try to log in."
      });
    }

    this.setState({
      verifyStatus: 'failure',
      serverError
    });
  }

  render() {
    if (this.state.verifyStatus !== 'failure') {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_loading_screen__WEBPACK_IMPORTED_MODULE_12__["default"], null);
    }

    let serverError = null;

    if (this.state.serverError) {
      serverError = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: 'form-group has-error'
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        className: "control-label"
      }, this.state.serverError));
    }

    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_common_back_button_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "col-sm-12"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "signup-team__container"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
      alt: 'signup team logo',
      className: "signup-team-logo",
      src: images_logo_png__WEBPACK_IMPORTED_MODULE_10___default.a
    }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "signup__content"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, this.props.siteName), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
      className: "color--light"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "web.root.signup_info",
      defaultMessage: "All team communication in one place, searchable and accessible anywhere"
    })), serverError))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(DoVerifyEmail, "propTypes", {
  /**
   * Object with validation parameters given in link
   */
  location: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,

  /**
   * Title of the app or site.
   */
  siteName: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /*
   * Object with redux action creators
   */
  actions: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    /*
     * Action creator to verify the user's email
     */
    verifyUserEmail: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,

    /*
     * Action creator to update the user in the redux store
     */
    getMe: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
    logError: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
    clearErrors: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired
  }).isRequired,

  /**
   * Object reprenseting the current user
   */
  user: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    email_verified: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
  }),
  isLoggedIn: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool.isRequired
});

DoVerifyEmail.defaultProps = {
  location: {}
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DoVerifyEmail, "DoVerifyEmail", "/home/pdxuan/Desktop/mattermost-webapp/components/do_verify_email/do_verify_email.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/do_verify_email/index.js":
/*!*********************************************!*\
  !*** ./components/do_verify_email/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/actions/users */ "./node_modules/mattermost-redux/actions/users.js");
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mattermost-redux/selectors/entities/general */ "./node_modules/mattermost-redux/selectors/entities/general.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mattermost-redux/selectors/entities/users */ "./node_modules/mattermost-redux/selectors/entities/users.js");
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mattermost_redux_actions_errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mattermost-redux/actions/errors */ "./node_modules/mattermost-redux/actions/errors.js");
/* harmony import */ var mattermost_redux_actions_errors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_errors__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _do_verify_email_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./do_verify_email.jsx */ "./components/do_verify_email/do_verify_email.jsx");
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
  return {
    isLoggedIn: Boolean(Object(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_4__["getCurrentUserId"])(state)),
    siteName,
    user: Object(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_4__["getCurrentUser"])(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])({
      verifyUserEmail: mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__["verifyUserEmail"],
      getMe: mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__["getMe"],
      logError: mattermost_redux_actions_errors__WEBPACK_IMPORTED_MODULE_5__["logError"],
      clearErrors: mattermost_redux_actions_errors__WEBPACK_IMPORTED_MODULE_5__["clearErrors"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_do_verify_email_jsx__WEBPACK_IMPORTED_MODULE_6__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/do_verify_email/index.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/do_verify_email/index.js");
  reactHotLoader.register(_default, "default", "/home/pdxuan/Desktop/mattermost-webapp/components/do_verify_email/index.js");
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
//# sourceMappingURL=19.2a1b363593d377c93ff8.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./components/terms_of_service/index.js":
/*!**********************************************!*\
  !*** ./components/terms_of_service/index.js ***!
  \**********************************************/
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
/* harmony import */ var _terms_of_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./terms_of_service */ "./components/terms_of_service/terms_of_service.jsx");
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
  return {
    termsEnabled: config.EnableCustomTermsOfService === 'true'
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
      getTermsOfService: mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__["getTermsOfService"],
      updateMyTermsOfServiceStatus: mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__["updateMyTermsOfServiceStatus"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_terms_of_service__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/terms_of_service/index.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/terms_of_service/index.js");
  reactHotLoader.register(_default, "default", "/home/pdxuan/Desktop/mattermost-webapp/components/terms_of_service/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/terms_of_service/terms_of_service.jsx":
/*!**********************************************************!*\
  !*** ./components/terms_of_service/terms_of_service.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TermsOfService; });
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var mattermost_redux_utils_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mattermost-redux/utils/helpers */ "./node_modules/mattermost-redux/utils/helpers.js");
/* harmony import */ var mattermost_redux_utils_helpers__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_utils_helpers__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var actions_global_actions_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! actions/global_actions.jsx */ "./actions/global_actions.jsx");
/* harmony import */ var components_announcement_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/announcement_bar */ "./components/announcement_bar/index.js");
/* harmony import */ var components_loading_screen__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/loading_screen */ "./components/loading_screen.tsx");
/* harmony import */ var components_widgets_loading_loading_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/widgets/loading/loading_spinner */ "./components/widgets/loading/loading_spinner.tsx");
/* harmony import */ var components_widgets_icons_fa_logout_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/widgets/icons/fa_logout_icon */ "./components/widgets/icons/fa_logout_icon.jsx");
/* harmony import */ var components_widgets_icons_fa_warning_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/widgets/icons/fa_warning_icon */ "./components/widgets/icons/fa_warning_icon.tsx");
/* harmony import */ var utils_browser_history__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! utils/browser_history */ "./utils/browser_history.jsx");
/* harmony import */ var utils_message_html_to_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! utils/message_html_to_component */ "./utils/message_html_to_component.jsx");
/* harmony import */ var utils_text_formatting_jsx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! utils/text_formatting.jsx */ "./utils/text_formatting.jsx");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! utils/constants */ "./utils/constants.jsx");






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















class TermsOfService extends react__WEBPACK_IMPORTED_MODULE_6___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "getTermsOfService", async () => {
      this.setState({
        customTermsOfServiceId: '',
        customTermsOfServiceText: '',
        loading: true
      });
      const {
        data
      } = await this.props.actions.getTermsOfService();

      if (data) {
        this.setState({
          customTermsOfServiceId: data.id,
          customTermsOfServiceText: data.text,
          loading: false
        });
      } else {
        actions_global_actions_jsx__WEBPACK_IMPORTED_MODULE_10__["emitUserLoggedOutEvent"]("/login?extra=".concat(utils_constants__WEBPACK_IMPORTED_MODULE_19__["Constants"].GET_TERMS_ERROR));
      }
    });

    _defineProperty(this, "handleLogoutClick", e => {
      e.preventDefault();
      actions_global_actions_jsx__WEBPACK_IMPORTED_MODULE_10__["emitUserLoggedOutEvent"]('/login');
    });

    _defineProperty(this, "handleAcceptTerms", () => {
      this.setState({
        loadingAgree: true,
        serverError: null
      });
      this.registerUserAction(true, () => {
        const query = new URLSearchParams(this.props.location.search);
        const redirectTo = query.get('redirect_to');

        if (redirectTo && redirectTo.match(/^\/([^/]|$)/)) {
          utils_browser_history__WEBPACK_IMPORTED_MODULE_16__["browserHistory"].push(redirectTo);
        } else {
          actions_global_actions_jsx__WEBPACK_IMPORTED_MODULE_10__["redirectUserToDefaultTeam"]();
        }
      });
    });

    _defineProperty(this, "handleRejectTerms", () => {
      this.setState({
        loadingDisagree: true,
        serverError: null
      });
      this.registerUserAction(false, () => {
        actions_global_actions_jsx__WEBPACK_IMPORTED_MODULE_10__["emitUserLoggedOutEvent"]("/login?extra=".concat(utils_constants__WEBPACK_IMPORTED_MODULE_19__["Constants"].TERMS_REJECTED));
      });
    });

    _defineProperty(this, "registerUserAction", async (accepted, success) => {
      const {
        data
      } = await this.props.actions.updateMyTermsOfServiceStatus(this.state.customTermsOfServiceId, accepted);

      if (data) {
        success(data);
      } else {
        this.setState({
          loadingAgree: false,
          loadingDisagree: false,
          serverError: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
            id: "terms_of_service.api_error",
            defaultMessage: "Unable to complete the request. If this issue persists, contact your System Administrator."
          })
        });
      }
    });

    this.state = {
      customTermsOfServiceId: '',
      customTermsOfServiceText: '',
      loading: true,
      loadingAgree: false,
      loadingDisagree: false,
      serverError: null
    };
    this.formattedText = Object(mattermost_redux_utils_helpers__WEBPACK_IMPORTED_MODULE_9__["memoizeResult"])(text => Object(utils_text_formatting_jsx__WEBPACK_IMPORTED_MODULE_18__["formatText"])(text));
  }

  componentDidMount() {
    if (this.props.termsEnabled) {
      this.getTermsOfService();
    } else {
      actions_global_actions_jsx__WEBPACK_IMPORTED_MODULE_10__["redirectUserToDefaultTeam"]();
    }
  }

  render() {
    if (this.state.loading) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_loading_screen__WEBPACK_IMPORTED_MODULE_12__["default"], null);
    }

    let termsMarkdownClasses = 'terms-of-service__markdown';

    if (this.state.serverError) {
      termsMarkdownClasses += ' terms-of-service-error__height--fill';
    } else {
      termsMarkdownClasses += ' terms-of-service__height--fill';
    }

    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_announcement_bar__WEBPACK_IMPORTED_MODULE_11__["default"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "signup-header"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
      href: "#",
      onClick: this.handleLogoutClick
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_widgets_icons_fa_logout_icon__WEBPACK_IMPORTED_MODULE_14__["default"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
      id: "web.header.logout",
      defaultMessage: "Logout"
    }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "signup-team__container terms-of-service__container"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: termsMarkdownClasses
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "medium-center"
    }, Object(utils_message_html_to_component__WEBPACK_IMPORTED_MODULE_17__["default"])(this.formattedText(this.state.customTermsOfServiceText), false, {
      mentions: false
    }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "terms-of-service__footer medium-center"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ButtonGroup"], {
      className: "terms-of-service__button-group"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      bsStyle: 'primary',
      disabled: this.state.loadingAgree || this.state.loadingDisagree,
      id: "acceptTerms",
      onClick: this.handleAcceptTerms,
      type: "submit"
    }, this.state.loadingAgree && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_widgets_loading_loading_spinner__WEBPACK_IMPORTED_MODULE_13__["default"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
      id: "terms_of_service.agreeButton",
      defaultMessage: 'I Agree'
    })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      bsStyle: 'link',
      disabled: this.state.loadingAgree || this.state.loadingDisagree,
      id: "rejectTerms",
      onClick: this.handleRejectTerms,
      type: "reset"
    }, this.state.loadingDisagree && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_widgets_loading_loading_spinner__WEBPACK_IMPORTED_MODULE_13__["default"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
      id: "terms_of_service.disagreeButton",
      defaultMessage: 'I Disagree'
    }))), Boolean(this.state.serverError) && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "terms-of-service__server-error alert alert-warning"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_widgets_icons_fa_warning_icon__WEBPACK_IMPORTED_MODULE_15__["default"], null), ' ', this.state.serverError)))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(TermsOfService, "propTypes", {
  location: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  termsEnabled: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool.isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
    getTermsOfService: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
    updateMyTermsOfServiceStatus: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
  }).isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TermsOfService, "TermsOfService", "/home/pdxuan/Desktop/mattermost-webapp/components/terms_of_service/terms_of_service.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/widgets/icons/fa_logout_icon.jsx":
/*!*****************************************************!*\
  !*** ./components/widgets/icons/fa_logout_icon.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LogoutIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.


class LogoutIcon extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "generic_icons.logout",
      defaultMessage: "Logout Icon"
    }, title => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-1x fa-angle-left",
      title: title
    }));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LogoutIcon, "LogoutIcon", "/home/pdxuan/Desktop/mattermost-webapp/components/widgets/icons/fa_logout_icon.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=25.4634187025fc8ed552e8.js.map
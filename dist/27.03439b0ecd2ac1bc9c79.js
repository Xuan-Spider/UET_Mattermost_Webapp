(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./components/authorize/authorize.jsx":
/*!********************************************!*\
  !*** ./components/authorize/authorize.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Authorize; });
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.starts-with */ "./node_modules/core-js/modules/es.string.starts-with.js");
/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.url */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var images_icon50x50_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! images/icon50x50.png */ "./images/icon50x50.png");
/* harmony import */ var images_icon50x50_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(images_icon50x50_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var components_form_error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/form_error */ "./components/form_error.tsx");
/* harmony import */ var utils_browser_history__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/browser_history */ "./utils/browser_history.jsx");
/* harmony import */ var components_formatted_markdown_message_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/formatted_markdown_message.jsx */ "./components/formatted_markdown_message.jsx");






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







class Authorize extends react__WEBPACK_IMPORTED_MODULE_6___default.a.Component {
  static get propTypes() {
    return {
      location: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,
      actions: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
        getOAuthAppInfo: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
        allowOAuth2: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
      }).isRequired
    };
  }

  constructor(props) {
    super(props);

    _defineProperty(this, "handleAllow", () => {
      const searchParams = new URLSearchParams(this.props.location.search);
      const params = {
        responseType: searchParams.get('response_type'),
        clientId: searchParams.get('client_id'),
        redirectUri: searchParams.get('redirect_uri'),
        state: searchParams.get('state'),
        scope: searchParams.get('store')
      };
      this.props.actions.allowOAuth2(params).then(({
        data,
        error
      }) => {
        if (data && data.redirect) {
          window.location.href = data.redirect;
        } else if (error) {
          this.setState({
            error: error.message
          });
        }
      });
    });

    _defineProperty(this, "handleDeny", () => {
      const redirectUri = new URLSearchParams(this.props.location.search).get('redirect_uri');

      if (redirectUri.startsWith('https://') || redirectUri.startsWith('http://')) {
        window.location.href = redirectUri + '?error=access_denied';
        return;
      }

      utils_browser_history__WEBPACK_IMPORTED_MODULE_10__["browserHistory"].replace('/error');
    });

    this.state = {};
  }

  UNSAFE_componentWillMount() {
    // eslint-disable-line camelcase
    const clientId = new URLSearchParams(this.props.location.search).get('client_id');

    if (!/^[a-z0-9]+$/.test(clientId)) {
      return;
    }

    this.props.actions.getOAuthAppInfo(clientId).then(({
      data
    }) => {
      if (data) {
        this.setState({
          app: data
        });
      }
    });
  }

  componentDidMount() {
    // if we get to this point remove the antiClickjack blocker
    const blocker = document.getElementById('antiClickjack');

    if (blocker) {
      blocker.parentNode.removeChild(blocker);
    }
  }

  render() {
    const app = this.state.app;

    if (!app) {
      return null;
    }

    let icon;

    if (app.icon_url) {
      icon = app.icon_url;
    } else {
      icon = images_icon50x50_png__WEBPACK_IMPORTED_MODULE_8___default.a;
    }

    let error;

    if (this.state.error) {
      error = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "prompt__error form-group"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_form_error__WEBPACK_IMPORTED_MODULE_9__["default"], {
        error: this.state.error
      }));
    }

    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "container-fluid"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "prompt"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "prompt__heading"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "prompt__app-icon"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
      alt: 'prompt icon',
      src: icon,
      width: "50",
      height: "50"
    })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "text"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_formatted_markdown_message_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], {
      id: "authorize.title",
      defaultMessage: "**{appName}** would like to connect to your **Mattermost** user account",
      values: {
        appName: app.name
      }
    }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_formatted_markdown_message_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], {
      id: "authorize.app",
      defaultMessage: "The app **{appName}** would like the ability to access and modify your basic information.",
      values: {
        appName: app.name
      }
    })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
      className: "prompt__allow"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_formatted_markdown_message_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], {
      id: "authorize.access",
      defaultMessage: "Allow **{appName}** access?",
      values: {
        appName: app.name
      }
    })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "prompt__buttons"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
      type: "submit",
      className: "btn btn-link authorize-btn",
      onClick: this.handleDeny
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
      id: "authorize.deny",
      defaultMessage: "Deny"
    })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
      type: "submit",
      className: "btn btn-primary authorize-btn",
      onClick: this.handleAllow
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
      id: "authorize.allow",
      defaultMessage: "Allow"
    }))), error));
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

  reactHotLoader.register(Authorize, "Authorize", "/home/pdxuan/Desktop/mattermost-webapp/components/authorize/authorize.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/authorize/index.js":
/*!***************************************!*\
  !*** ./components/authorize/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var actions_admin_actions_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! actions/admin_actions.jsx */ "./actions/admin_actions.jsx");
/* harmony import */ var _authorize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authorize */ "./components/authorize/authorize.jsx");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
      getOAuthAppInfo: actions_admin_actions_jsx__WEBPACK_IMPORTED_MODULE_2__["getOAuthAppInfo"],
      allowOAuth2: actions_admin_actions_jsx__WEBPACK_IMPORTED_MODULE_2__["allowOAuth2"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(null, mapDispatchToProps)(_authorize__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/authorize/index.js");
  reactHotLoader.register(_default, "default", "/home/pdxuan/Desktop/mattermost-webapp/components/authorize/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=27.03439b0ecd2ac1bc9c79.js.map
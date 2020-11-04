(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./actions/views/mfa.js":
/*!******************************!*\
  !*** ./actions/views/mfa.js ***!
  \******************************/
/*! exports provided: activateMfa, deactivateMfa, generateMfaSecret */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activateMfa", function() { return activateMfa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deactivateMfa", function() { return deactivateMfa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateMfaSecret", function() { return generateMfaSecret; });
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mattermost-redux/actions/users */ "./node_modules/mattermost-redux/actions/users.js");
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mattermost-redux/selectors/entities/users */ "./node_modules/mattermost-redux/selectors/entities/users.js");
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_1__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.


function activateMfa(code) {
  return (dispatch, getState) => {
    const currentUserId = Object(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_1__["getCurrentUserId"])(getState());
    return dispatch(mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_0__["updateUserMfa"](currentUserId, true, code));
  };
}
function deactivateMfa() {
  return (dispatch, getState) => {
    const currentUserId = Object(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_1__["getCurrentUserId"])(getState());
    return dispatch(mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_0__["updateUserMfa"](currentUserId, false));
  };
}
function generateMfaSecret() {
  return (dispatch, getState) => {
    const currentUserId = Object(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_1__["getCurrentUserId"])(getState());
    return dispatch(mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_0__["generateMfaSecret"](currentUserId));
  };
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(activateMfa, "activateMfa", "/home/pdxuan/Desktop/mattermost-webapp/actions/views/mfa.js");
  reactHotLoader.register(deactivateMfa, "deactivateMfa", "/home/pdxuan/Desktop/mattermost-webapp/actions/views/mfa.js");
  reactHotLoader.register(generateMfaSecret, "generateMfaSecret", "/home/pdxuan/Desktop/mattermost-webapp/actions/views/mfa.js");
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

/***/ "./components/mfa/confirm.jsx":
/*!************************************!*\
  !*** ./components/mfa/confirm.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Confirm; });
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/constants */ "./utils/constants.jsx");
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");
/* harmony import */ var actions_global_actions_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! actions/global_actions.jsx */ "./actions/global_actions.jsx");
/* harmony import */ var components_formatted_markdown_message_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/formatted_markdown_message.jsx */ "./components/formatted_markdown_message.jsx");


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






const KeyCodes = utils_constants__WEBPACK_IMPORTED_MODULE_3__["default"].KeyCodes;
class Confirm extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "submit", e => {
      e.preventDefault();
      Object(actions_global_actions_jsx__WEBPACK_IMPORTED_MODULE_5__["redirectUserToDefaultTeam"])();
    });

    _defineProperty(this, "onKeyPress", e => {
      if (Object(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_4__["isKeyPressed"])(e, KeyCodes.ENTER)) {
        this.submit(e);
      }
    });
  }

  componentDidMount() {
    document.body.addEventListener('keydown', this.onKeyPress);
  }

  componentWillUnmount() {
    document.body.removeEventListener('keydown', this.onKeyPress);
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      onSubmit: this.submit,
      onKeyPress: this.onKeyPress,
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_formatted_markdown_message_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: "mfa.confirm.complete",
      defaultMessage: "**Set up complete!**"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "mfa.confirm.secure",
      defaultMessage: "Your account is now secure. Next time you sign in, you will be asked to enter a code from the Google Authenticator app on your phone."
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      type: "submit",
      className: "btn btn-primary"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "mfa.confirm.okay",
      defaultMessage: "Okay"
    }))));
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

  reactHotLoader.register(KeyCodes, "KeyCodes", "/home/pdxuan/Desktop/mattermost-webapp/components/mfa/confirm.jsx");
  reactHotLoader.register(Confirm, "Confirm", "/home/pdxuan/Desktop/mattermost-webapp/components/mfa/confirm.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/mfa/mfa_controller/index.js":
/*!************************************************!*\
  !*** ./components/mfa/mfa_controller/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mattermost-redux/selectors/entities/general */ "./node_modules/mattermost-redux/selectors/entities/general.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mfa_controller_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mfa_controller.jsx */ "./components/mfa/mfa_controller/mfa_controller.jsx");
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
  const license = Object(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_1__["getLicense"])(state);
  const config = Object(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_1__["getConfig"])(state);
  const mfa = license.MFA === 'true';
  const enableMultifactorAuthentication = config.EnableMultifactorAuthentication === 'true';
  const enforceMultifactorAuthentication = config.EnforceMultifactorAuthentication === 'true';
  return {
    mfa,
    enableMultifactorAuthentication,
    enforceMultifactorAuthentication
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(_mfa_controller_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/mfa/mfa_controller/index.js");
  reactHotLoader.register(_default, "default", "/home/pdxuan/Desktop/mattermost-webapp/components/mfa/mfa_controller/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/mfa/mfa_controller/mfa_controller.jsx":
/*!**********************************************************!*\
  !*** ./components/mfa/mfa_controller/mfa_controller.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MFAController; });
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var actions_global_actions_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! actions/global_actions.jsx */ "./actions/global_actions.jsx");
/* harmony import */ var images_logo_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! images/logo.png */ "./images/logo.png");
/* harmony import */ var images_logo_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(images_logo_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_common_back_button_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/common/back_button.jsx */ "./components/common/back_button.jsx");
/* harmony import */ var components_widgets_icons_fa_logout_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/widgets/icons/fa_logout_icon */ "./components/widgets/icons/fa_logout_icon.jsx");
/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../setup */ "./components/mfa/setup/index.js");
/* harmony import */ var _confirm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../confirm */ "./components/mfa/confirm.jsx");



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










class MFAController extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleOnClick", e => {
      e.preventDefault();
      Object(actions_global_actions_jsx__WEBPACK_IMPORTED_MODULE_6__["emitUserLoggedOutEvent"])('/login');
    });
  }

  componentDidMount() {
    document.body.classList.add('sticky');
    document.getElementById('root').classList.add('container-fluid');

    if (!this.props.enableMultifactorAuthentication) {
      this.props.history.push('/');
    }
  }

  componentWillUnmount() {
    document.body.classList.remove('sticky');
    document.getElementById('root').classList.remove('container-fluid');
  }

  render() {
    let backButton;

    if (this.props.mfa && this.props.enforceMultifactorAuthentication) {
      backButton = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "signup-header"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
        className: "style--none color--link",
        onClick: this.handleOnClick
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_widgets_icons_fa_logout_icon__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "web.header.logout",
        defaultMessage: "Logout"
      })));
    } else {
      backButton = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_common_back_button_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], null);
    }

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "inner-wrap"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "row content"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, backButton, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "col-sm-12"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "signup-team__container"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "mfa.setupTitle",
      defaultMessage: "Multi-factor Authentication Setup"
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
      alt: 'signup team logo',
      className: "signup-team-logo",
      src: images_logo_png__WEBPACK_IMPORTED_MODULE_7___default.a
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      id: "mfa"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
      path: "".concat(this.props.match.url, "/setup"),
      render: props => react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_setup__WEBPACK_IMPORTED_MODULE_10__["default"], Object.assign({
        state: this.state,
        updateParent: this.updateParent
      }, props))
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
      path: "".concat(this.props.match.url, "/confirm"),
      render: props => react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_confirm__WEBPACK_IMPORTED_MODULE_11__["default"], Object.assign({
        state: this.state,
        updateParent: this.updateParent
      }, props))
    }))))))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}
MFAController.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  mfa: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  enableMultifactorAuthentication: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  enforceMultifactorAuthentication: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,

  /*
   * Object from react-router
   */
  match: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    url: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
  }).isRequired
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MFAController, "MFAController", "/home/pdxuan/Desktop/mattermost-webapp/components/mfa/mfa_controller/mfa_controller.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/mfa/setup/index.js":
/*!***************************************!*\
  !*** ./components/mfa/setup/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/selectors/entities/general */ "./node_modules/mattermost-redux/selectors/entities/general.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mattermost-redux/selectors/entities/users */ "./node_modules/mattermost-redux/selectors/entities/users.js");
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var actions_views_mfa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! actions/views/mfa */ "./actions/views/mfa.js");
/* harmony import */ var _setup_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setup.jsx */ "./components/mfa/setup/setup.jsx");
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
  const siteName = config.SiteName;
  const enforceMultifactorAuthentication = config.EnforceMultifactorAuthentication === 'true';
  return {
    currentUser: Object(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_3__["getCurrentUser"])(state),
    siteName,
    enforceMultifactorAuthentication
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
      activateMfa: actions_views_mfa__WEBPACK_IMPORTED_MODULE_4__["activateMfa"],
      generateMfaSecret: actions_views_mfa__WEBPACK_IMPORTED_MODULE_4__["generateMfaSecret"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_setup_jsx__WEBPACK_IMPORTED_MODULE_5__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/mfa/setup/index.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/mfa/setup/index.js");
  reactHotLoader.register(_default, "default", "/home/pdxuan/Desktop/mattermost-webapp/components/mfa/setup/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/mfa/setup/setup.jsx":
/*!****************************************!*\
  !*** ./components/mfa/setup/setup.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Setup; });
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");
/* harmony import */ var utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/i18n.jsx */ "./utils/i18n.jsx");
/* harmony import */ var components_formatted_markdown_message_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/formatted_markdown_message.jsx */ "./components/formatted_markdown_message.jsx");
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







class Setup extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "submit", e => {
      e.preventDefault();
      const code = this.input.current.value.replace(/\s/g, '');

      if (!code || code.length === 0) {
        this.setState({
          error: utils_utils_jsx__WEBPACK_IMPORTED_MODULE_4__["localizeMessage"]('mfa.setup.codeError', 'Please enter the code from Google Authenticator.')
        });
        return;
      }

      this.setState({
        error: null
      });
      this.props.actions.activateMfa(code).then(({
        error
      }) => {
        if (error) {
          if (error.server_error_id === 'ent.mfa.activate.authenticate.app_error') {
            this.setState({
              error: utils_utils_jsx__WEBPACK_IMPORTED_MODULE_4__["localizeMessage"]('mfa.setup.badCode', 'Invalid code. If this issue persists, contact your System Administrator.')
            });
          } else {
            this.setState({
              error: error.message
            });
          }

          return;
        }

        this.props.history.push('/mfa/confirm');
      });
    });

    this.state = {
      secret: '',
      qrCode: ''
    };
    this.input = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
  }

  componentDidMount() {
    const user = this.props.currentUser;

    if (!user || user.mfa_active) {
      this.props.history.push('/');
      return;
    }

    this.props.actions.generateMfaSecret().then(({
      data,
      error
    }) => {
      if (error) {
        this.setState({
          serverError: error.message
        });
        return;
      }

      this.setState({
        secret: data.secret,
        qrCode: data.qr_code
      });
    });
  }

  render() {
    let formClass = 'form-group';
    let errorContent;

    if (this.state.error) {
      errorContent = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-group has-error"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        className: "control-label"
      }, this.state.error));
      formClass += ' has-error';
    }

    let mfaRequired;

    if (this.props.enforceMultifactorAuthentication) {
      mfaRequired = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_formatted_markdown_message_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: "mfa.setup.required",
        defaultMessage: "**Multi-factor authentication is required on {siteName}.**",
        values: {
          siteName: this.props.siteName
        }
      }));
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      onSubmit: this.submit,
      className: formClass
    }, mfaRequired, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_formatted_markdown_message_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: "mfa.setup.step1",
      defaultMessage: "**Step 1: **On your phone, download Google Authenticator from [iTunes](!https://itunes.apple.com/us/app/google-authenticator/id388497605?mt=8') or [Google Play](!https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en)"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_formatted_markdown_message_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: "mfa.setup.step2",
      defaultMessage: "**Step 2: **Use Google Authenticator to scan this QR code, or manually type in the secret key"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-sm-12"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      alt: 'qr code image',
      style: style.qrCode,
      src: 'data:image/png;base64,' + this.state.qrCode
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "col-sm-12"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "mfa.setup.secret",
      defaultMessage: "Secret: {secret}",
      values: {
        secret: this.state.secret
      }
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_formatted_markdown_message_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: "mfa.setup.step3",
      defaultMessage: "**Step 3: **Enter the code generated by Google Authenticator"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_localized_input_localized_input__WEBPACK_IMPORTED_MODULE_7__["default"], {
      ref: this.input,
      className: "form-control",
      placeholder: {
        id: Object(utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_5__["t"])('mfa.setup.code'),
        defaultMessage: 'MFA Code'
      },
      autoFocus: true
    })), errorContent, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      type: "submit",
      className: "btn btn-primary"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "mfa.setup.save",
      defaultMessage: "Save"
    }))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(Setup, "propTypes", {
  currentUser: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  siteName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  enforceMultifactorAuthentication: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    activateMfa: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
    generateMfaSecret: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
  }).isRequired
});

const style = {
  qrCode: {
    maxHeight: 170
  }
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Setup, "Setup", "/home/pdxuan/Desktop/mattermost-webapp/components/mfa/setup/setup.jsx");
  reactHotLoader.register(style, "style", "/home/pdxuan/Desktop/mattermost-webapp/components/mfa/setup/setup.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

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
//# sourceMappingURL=11.ecc1840d50ea751f8240.js.map
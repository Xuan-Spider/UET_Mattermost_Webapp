(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

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

/***/ "./components/create_team/components/display_name.jsx":
/*!************************************************************!*\
  !*** ./components/create_team/components/display_name.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TeamSignupDisplayNamePage; });
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var actions_diagnostics_actions_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! actions/diagnostics_actions.jsx */ "./actions/diagnostics_actions.jsx");
/* harmony import */ var utils_constants_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/constants.jsx */ "./utils/constants.jsx");
/* harmony import */ var utils_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/url */ "./utils/url.tsx");
/* harmony import */ var images_logo_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! images/logo.png */ "./images/logo.png");
/* harmony import */ var images_logo_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(images_logo_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var components_widgets_icons_fa_next_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/widgets/icons/fa_next_icon */ "./components/widgets/icons/fa_next_icon.tsx");


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









class TeamSignupDisplayNamePage extends react__WEBPACK_IMPORTED_MODULE_2___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "submitNext", e => {
      e.preventDefault();
      var displayName = react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.findDOMNode(this.refs.name).value.trim();

      if (!displayName) {
        this.setState({
          nameError: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
            id: "create_team.display_name.required",
            defaultMessage: "This field is required"
          })
        });
        return;
      } else if (displayName.length < utils_constants_jsx__WEBPACK_IMPORTED_MODULE_6__["default"].MIN_TEAMNAME_LENGTH || displayName.length > utils_constants_jsx__WEBPACK_IMPORTED_MODULE_6__["default"].MAX_TEAMNAME_LENGTH) {
        this.setState({
          nameError: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
            id: "create_team.display_name.charLength",
            defaultMessage: "Name must be {min} or more characters up to a maximum of {max}. You can add a longer team description later.",
            values: {
              min: utils_constants_jsx__WEBPACK_IMPORTED_MODULE_6__["default"].MIN_TEAMNAME_LENGTH,
              max: utils_constants_jsx__WEBPACK_IMPORTED_MODULE_6__["default"].MAX_TEAMNAME_LENGTH
            }
          })
        });
        return;
      }

      const newState = this.props.state;
      newState.wizard = 'team_url';
      newState.team.display_name = displayName;
      newState.team.name = Object(utils_url__WEBPACK_IMPORTED_MODULE_7__["cleanUpUrlable"])(displayName);
      this.props.updateParent(newState);
    });

    _defineProperty(this, "handleFocus", e => {
      e.preventDefault();
      e.currentTarget.select();
    });

    this.state = {};
  }

  componentDidMount() {
    Object(actions_diagnostics_actions_jsx__WEBPACK_IMPORTED_MODULE_5__["trackEvent"])('signup', 'signup_team_01_name');
  }

  render() {
    var nameError = null;
    var nameDivClass = 'form-group';

    if (this.state.nameError) {
      nameError = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "control-label"
      }, this.state.nameError);
      nameDivClass += ' has-error';
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      alt: 'signup logo',
      className: "signup-team-logo",
      src: images_logo_png__WEBPACK_IMPORTED_MODULE_8___default.a
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "create_team.display_name.teamName",
      defaultMessage: "Team Name"
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: nameDivClass
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "col-sm-9"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      id: "teamNameInput",
      type: "text",
      ref: "name",
      className: "form-control",
      placeholder: "",
      maxLength: "128",
      defaultValue: this.props.state.team.display_name,
      autoFocus: true,
      onFocus: this.handleFocus,
      spellCheck: "false"
    }))), nameError), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "create_team.display_name.nameHelp",
      defaultMessage: "Name your team in any language. Your team name shows in menus and headings."
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      id: "teamNameNextButton",
      type: "submit",
      className: "btn btn-primary margin--extra",
      onClick: this.submitNext
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "create_team.display_name.next",
      defaultMessage: "Next"
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_widgets_icons_fa_next_icon__WEBPACK_IMPORTED_MODULE_9__["default"], null))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(TeamSignupDisplayNamePage, "propTypes", {
  /*
   * Object containing team's display_name and name
   */
  state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /*
   * Function that updates parent component with state props
   */
  updateParent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TeamSignupDisplayNamePage, "TeamSignupDisplayNamePage", "/home/pdxuan/Desktop/mattermost-webapp/components/create_team/components/display_name.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/create_team/components/team_url/index.js":
/*!*************************************************************!*\
  !*** ./components/create_team/components/team_url/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var mattermost_redux_actions_teams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/actions/teams */ "./node_modules/mattermost-redux/actions/teams.js");
/* harmony import */ var mattermost_redux_actions_teams__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_teams__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _team_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team_url */ "./components/create_team/components/team_url/team_url.jsx");
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
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])({
      checkIfTeamExists: mattermost_redux_actions_teams__WEBPACK_IMPORTED_MODULE_2__["checkIfTeamExists"],
      createTeam: mattermost_redux_actions_teams__WEBPACK_IMPORTED_MODULE_2__["createTeam"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(_team_url__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/create_team/components/team_url/index.js");
  reactHotLoader.register(_default, "default", "/home/pdxuan/Desktop/mattermost-webapp/components/create_team/components/team_url/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/create_team/components/team_url/team_url.jsx":
/*!*****************************************************************!*\
  !*** ./components/create_team/components/team_url/team_url.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TeamUrl; });
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var actions_diagnostics_actions_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! actions/diagnostics_actions.jsx */ "./actions/diagnostics_actions.jsx");
/* harmony import */ var utils_constants_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/constants.jsx */ "./utils/constants.jsx");
/* harmony import */ var utils_url__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/url */ "./utils/url.tsx");
/* harmony import */ var images_logo_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! images/logo.png */ "./images/logo.png");
/* harmony import */ var images_logo_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(images_logo_png__WEBPACK_IMPORTED_MODULE_10__);
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










class TeamUrl extends react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "submitBack", e => {
      e.preventDefault();
      const newState = this.props.state;
      newState.wizard = 'display_name';
      this.props.updateParent(newState);
    });

    _defineProperty(this, "submitNext", async e => {
      e.preventDefault();
      const name = react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.findDOMNode(this.refs.name).value.trim();
      const cleanedName = utils_url__WEBPACK_IMPORTED_MODULE_9__["cleanUpUrlable"](name);
      const urlRegex = /^[a-z]+([a-z\-0-9]+|(__)?)[a-z0-9]+$/g;
      const {
        actions: {
          checkIfTeamExists,
          createTeam
        }
      } = this.props;

      if (!name) {
        this.setState({
          nameError: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
            id: "create_team.team_url.required",
            defaultMessage: "This field is required"
          })
        });
        return;
      }

      if (cleanedName.length < utils_constants_jsx__WEBPACK_IMPORTED_MODULE_8__["default"].MIN_TEAMNAME_LENGTH || cleanedName.length > utils_constants_jsx__WEBPACK_IMPORTED_MODULE_8__["default"].MAX_TEAMNAME_LENGTH) {
        this.setState({
          nameError: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
            id: "create_team.team_url.charLength",
            defaultMessage: "Name must be {min} or more characters up to a maximum of {max}",
            values: {
              min: utils_constants_jsx__WEBPACK_IMPORTED_MODULE_8__["default"].MIN_TEAMNAME_LENGTH,
              max: utils_constants_jsx__WEBPACK_IMPORTED_MODULE_8__["default"].MAX_TEAMNAME_LENGTH
            }
          })
        });
        return;
      }

      if (cleanedName !== name || !urlRegex.test(name)) {
        this.setState({
          nameError: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
            id: "create_team.team_url.regex",
            defaultMessage: "Use only lower case letters, numbers and dashes. Must start with a letter and can't end in a dash."
          })
        });
        return;
      }

      for (let index = 0; index < utils_constants_jsx__WEBPACK_IMPORTED_MODULE_8__["default"].RESERVED_TEAM_NAMES.length; index++) {
        if (cleanedName.indexOf(utils_constants_jsx__WEBPACK_IMPORTED_MODULE_8__["default"].RESERVED_TEAM_NAMES[index]) === 0) {
          this.setState({
            nameError: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_formatted_markdown_message_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], {
              id: "create_team.team_url.taken",
              defaultMessage: "This URL [starts with a reserved word](!https://docs.mattermost.com/help/getting-started/creating-teams.html#team-url) or is unavailable. Please try another."
            })
          });
          return;
        }
      }

      this.setState({
        isLoading: true
      });
      var teamSignup = JSON.parse(JSON.stringify(this.props.state));
      teamSignup.team.type = 'O';
      teamSignup.team.name = name;
      const {
        exists
      } = await checkIfTeamExists(name);

      if (exists) {
        this.setState({
          nameError: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
            id: "create_team.team_url.unavailable",
            defaultMessage: "This URL is taken or unavailable. Please try another."
          })
        });
        this.setState({
          isLoading: false
        });
        return;
      }

      const {
        data,
        error
      } = await createTeam(teamSignup.team);

      if (data) {
        this.props.history.push('/' + data.name + '/channels/' + utils_constants_jsx__WEBPACK_IMPORTED_MODULE_8__["default"].DEFAULT_CHANNEL);
        Object(actions_diagnostics_actions_jsx__WEBPACK_IMPORTED_MODULE_7__["trackEvent"])('signup', 'signup_team_03_complete');
      } else if (error) {
        this.setState({
          nameError: error.message
        });
        this.setState({
          isLoading: false
        });
      }
    });

    _defineProperty(this, "handleFocus", e => {
      e.preventDefault();
      e.currentTarget.select();
    });

    this.state = {
      nameError: '',
      isLoading: false
    };
  }

  componentDidMount() {
    Object(actions_diagnostics_actions_jsx__WEBPACK_IMPORTED_MODULE_7__["trackEvent"])('signup', 'signup_team_02_url');
  }

  render() {
    let nameError = null;
    let nameDivClass = 'form-group';

    if (this.state.nameError) {
      nameError = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
        className: "control-label"
      }, this.state.nameError);
      nameDivClass += ' has-error';
    }

    const title = "".concat(utils_url__WEBPACK_IMPORTED_MODULE_9__["getSiteURL"](), "/");
    const urlTooltip = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
      id: "urlTooltip"
    }, title);
    let finishMessage = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "create_team.team_url.finish",
      defaultMessage: "Finish"
    });

    if (this.state.isLoading) {
      finishMessage = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
        id: "create_team.team_url.creatingTeam",
        defaultMessage: "Creating team..."
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
      alt: 'signup team logo',
      className: "signup-team-logo",
      src: images_logo_png__WEBPACK_IMPORTED_MODULE_10___default.a
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "create_team.team_url.teamUrl",
      defaultMessage: "Team URL"
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: nameDivClass
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "col-sm-11"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "input-group input-group--limit"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["OverlayTrigger"], {
      delayShow: utils_constants_jsx__WEBPACK_IMPORTED_MODULE_8__["default"].OVERLAY_TIME_DELAY,
      placement: "top",
      overlay: urlTooltip
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "input-group-addon"
    }, title)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
      id: "teamURLInput",
      type: "text",
      ref: "name",
      className: "form-control",
      placeholder: "",
      maxLength: "128",
      defaultValue: this.props.state.team.name,
      autoFocus: true,
      onFocus: this.handleFocus,
      spellCheck: "false"
    })))), nameError), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "create_team.team_url.webAddress",
      defaultMessage: "Choose the web address of your new team:"
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
      className: "color--light"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "create_team.team_url.hint1",
      defaultMessage: "Short and memorable is best"
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "create_team.team_url.hint2",
      defaultMessage: "Use lowercase letters, numbers and dashes"
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "create_team.team_url.hint3",
      defaultMessage: "Must start with a letter and can't end in a dash"
    }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "margin--extra"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      id: "teamURLFinishButton",
      type: "submit",
      bsStyle: "primary",
      disabled: this.state.isLoading,
      onClick: this.submitNext
    }, finishMessage)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "margin--extra"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      href: "#",
      onClick: this.submitBack
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "create_team.team_url.back",
      defaultMessage: "Back to previous step"
    })))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(TeamUrl, "propTypes", {
  /*
   * Object containing team's display_name and name
   */
  state: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /*
   * Function that updates parent component with state props
   */
  updateParent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /*
   * Object with redux action creators
   */
  actions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    /*
     * Action creator to check if a team already exists
     */
    checkIfTeamExists: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,

    /*
     * Action creator to create a new team
     */
    createTeam: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
  }).isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TeamUrl, "TeamUrl", "/home/pdxuan/Desktop/mattermost-webapp/components/create_team/components/team_url/team_url.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/create_team/create_team.jsx":
/*!************************************************!*\
  !*** ./components/create_team/create_team.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateTeam; });
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var components_announcement_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/announcement_bar */ "./components/announcement_bar/index.js");
/* harmony import */ var components_common_back_button_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/common/back_button.jsx */ "./components/common/back_button.jsx");
/* harmony import */ var components_create_team_components_display_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/create_team/components/display_name */ "./components/create_team/components/display_name.jsx");
/* harmony import */ var components_common_site_name_and_description__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/common/site_name_and_description */ "./components/common/site_name_and_description.jsx");
/* harmony import */ var components_create_team_components_team_url__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/create_team/components/team_url */ "./components/create_team/components/team_url/index.js");


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








class CreateTeam extends react__WEBPACK_IMPORTED_MODULE_2___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "updateParent", state => {
      this.setState(state);
      this.props.history.push('/create_team/' + state.wizard);
    });

    const _state = {};
    _state.team = {};
    _state.wizard = 'display_name';
    this.state = _state;
  }

  render() {
    const {
      currentChannel,
      currentTeam,
      customDescriptionText,
      match,
      siteName
    } = this.props;
    let url = '/select_team';

    if (currentTeam) {
      url = "/".concat(currentTeam.name);

      if (currentChannel) {
        url += "/channels/".concat(currentChannel.name);
      }
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_announcement_bar__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_common_back_button_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
      url: url
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "col-sm-12"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "signup-team__container"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_common_site_name_and_description__WEBPACK_IMPORTED_MODULE_7__["default"], {
      customDescriptionText: customDescriptionText,
      siteName: siteName
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "signup__content"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      path: "".concat(this.props.match.url, "/display_name"),
      render: props => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_create_team_components_display_name__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({
        state: this.state,
        updateParent: this.updateParent
      }, props))
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      path: "".concat(this.props.match.url, "/team_url"),
      render: props => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_create_team_components_team_url__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({
        state: this.state,
        updateParent: this.updateParent
      }, props))
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
      to: "".concat(match.url, "/display_name")
    }))))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(CreateTeam, "propTypes", {
  /*
   * Object containing information on the current team, used to define BackButton's url
   */
  currentTeam: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /*
   * Object containing information on the current selected channel, used to define BackButton's url
   */
  currentChannel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /*
   * String containing the custom branding's text
   */
  customDescriptionText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /*
   * String containing the custom branding's Site Name
   */
  siteName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /*
   * Object from react-router
   */
  match: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CreateTeam, "CreateTeam", "/home/pdxuan/Desktop/mattermost-webapp/components/create_team/create_team.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/create_team/index.js":
/*!*****************************************!*\
  !*** ./components/create_team/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mattermost-redux/selectors/entities/general */ "./node_modules/mattermost-redux/selectors/entities/general.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mattermost_redux_selectors_entities_channels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/selectors/entities/channels */ "./node_modules/mattermost-redux/selectors/entities/channels.js");
/* harmony import */ var mattermost_redux_selectors_entities_channels__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_channels__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mattermost-redux/selectors/entities/teams */ "./node_modules/mattermost-redux/selectors/entities/teams.js");
/* harmony import */ var mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _create_team__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create_team */ "./components/create_team/create_team.jsx");
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
  const config = Object(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_1__["getConfig"])(state);
  const currentChannel = Object(mattermost_redux_selectors_entities_channels__WEBPACK_IMPORTED_MODULE_2__["getCurrentChannel"])(state);
  const currentTeam = Object(mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_3__["getCurrentTeam"])(state);
  const customDescriptionText = config.CustomDescriptionText;
  const siteName = config.SiteName;
  return {
    currentChannel,
    currentTeam,
    customDescriptionText,
    siteName
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(_create_team__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/create_team/index.js");
  reactHotLoader.register(_default, "default", "/home/pdxuan/Desktop/mattermost-webapp/components/create_team/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/widgets/icons/fa_next_icon.tsx":
/*!***************************************************!*\
  !*** ./components/widgets/icons/fa_next_icon.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NextIcon; });
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


class NextIcon extends react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent {
  render() {
    const {
      formatMessage
    } = this.context.intl;
    const className = 'fa fa-1x fa-angle-right' + (this.props.additionalClassName ? ' ' + this.props.additionalClassName : '');
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: className,
      title: formatMessage({
        id: 'generic_icons.next',
        defaultMessage: 'Next Icon'
      })
    });
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(NextIcon, "propTypes", {
  additionalClassName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf([null])])
});

_defineProperty(NextIcon, "contextTypes", {
  intl: react_intl__WEBPACK_IMPORTED_MODULE_2__["intlShape"].isRequired
});

_defineProperty(NextIcon, "defaultProps", {
  additionalClassName: null
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(NextIcon, "NextIcon", "/home/pdxuan/Desktop/mattermost-webapp/components/widgets/icons/fa_next_icon.tsx");
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
//# sourceMappingURL=13.33b169bf0c2e6d3fb1f6.js.map
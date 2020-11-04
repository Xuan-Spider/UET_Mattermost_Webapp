(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./actions/integration_actions.jsx":
/*!*****************************************!*\
  !*** ./actions/integration_actions.jsx ***!
  \*****************************************/
/*! exports provided: loadIncomingHooksAndProfilesForTeam, loadProfilesForIncomingHooks, loadOutgoingHooksAndProfilesForTeam, loadProfilesForOutgoingHooks, loadCommandsAndProfilesForTeam, loadProfilesForCommands, loadOAuthAppsAndProfiles, loadProfilesForOAuthApps, getYoutubeVideoInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadIncomingHooksAndProfilesForTeam", function() { return loadIncomingHooksAndProfilesForTeam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProfilesForIncomingHooks", function() { return loadProfilesForIncomingHooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadOutgoingHooksAndProfilesForTeam", function() { return loadOutgoingHooksAndProfilesForTeam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProfilesForOutgoingHooks", function() { return loadProfilesForOutgoingHooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCommandsAndProfilesForTeam", function() { return loadCommandsAndProfilesForTeam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProfilesForCommands", function() { return loadProfilesForCommands; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadOAuthAppsAndProfiles", function() { return loadOAuthAppsAndProfiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProfilesForOAuthApps", function() { return loadProfilesForOAuthApps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getYoutubeVideoInfo", function() { return getYoutubeVideoInfo; });
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! superagent */ "./node_modules/superagent/lib/client.js");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/actions/integrations */ "./node_modules/mattermost-redux/actions/integrations.js");
/* harmony import */ var mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mattermost-redux/actions/users */ "./node_modules/mattermost-redux/actions/users.js");
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mattermost-redux/selectors/entities/users */ "./node_modules/mattermost-redux/selectors/entities/users.js");
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_4__);


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.




const DEFAULT_PAGE_SIZE = 100;
function loadIncomingHooksAndProfilesForTeam(teamId, page = 0, perPage = DEFAULT_PAGE_SIZE) {
  return async dispatch => {
    const {
      data
    } = await dispatch(mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_2__["getIncomingHooks"](teamId, page, perPage));

    if (data) {
      dispatch(loadProfilesForIncomingHooks(data));
    }
  };
}
function loadProfilesForIncomingHooks(hooks) {
  return async (dispatch, getState) => {
    const state = getState();
    const profilesToLoad = {};

    for (let i = 0; i < hooks.length; i++) {
      const hook = hooks[i];

      if (!Object(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_4__["getUser"])(state, hook.user_id)) {
        profilesToLoad[hook.user_id] = true;
      }
    }

    const list = Object.keys(profilesToLoad);

    if (list.length === 0) {
      return;
    }

    dispatch(Object(mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_3__["getProfilesByIds"])(list));
  };
}
function loadOutgoingHooksAndProfilesForTeam(teamId, page = 0, perPage = DEFAULT_PAGE_SIZE) {
  return async dispatch => {
    const {
      data
    } = await dispatch(mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_2__["getOutgoingHooks"]('', teamId, page, perPage));

    if (data) {
      dispatch(loadProfilesForOutgoingHooks(data));
    }
  };
}
function loadProfilesForOutgoingHooks(hooks) {
  return async (dispatch, getState) => {
    const state = getState();
    const profilesToLoad = {};

    for (let i = 0; i < hooks.length; i++) {
      const hook = hooks[i];

      if (!Object(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_4__["getUser"])(state, hook.creator_id)) {
        profilesToLoad[hook.creator_id] = true;
      }
    }

    const list = Object.keys(profilesToLoad);

    if (list.length === 0) {
      return;
    }

    dispatch(Object(mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_3__["getProfilesByIds"])(list));
  };
}
function loadCommandsAndProfilesForTeam(teamId) {
  return async dispatch => {
    const {
      data
    } = await dispatch(mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_2__["getCustomTeamCommands"](teamId));

    if (data) {
      dispatch(loadProfilesForCommands(data));
    }
  };
}
function loadProfilesForCommands(commands) {
  return async (dispatch, getState) => {
    const state = getState();
    const profilesToLoad = {};

    for (let i = 0; i < commands.length; i++) {
      const command = commands[i];

      if (!Object(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_4__["getUser"])(state, command.creator_id)) {
        profilesToLoad[command.creator_id] = true;
      }
    }

    const list = Object.keys(profilesToLoad);

    if (list.length === 0) {
      return;
    }

    dispatch(Object(mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_3__["getProfilesByIds"])(list));
  };
}
function loadOAuthAppsAndProfiles(page = 0, perPage = DEFAULT_PAGE_SIZE) {
  return async dispatch => {
    const {
      data
    } = await dispatch(mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_2__["getOAuthApps"](page, perPage));

    if (data) {
      dispatch(loadProfilesForOAuthApps(data));
    }
  };
}
function loadProfilesForOAuthApps(apps) {
  return async (dispatch, getState) => {
    const state = getState();
    const profilesToLoad = {};

    for (let i = 0; i < apps.length; i++) {
      const app = apps[i];

      if (!Object(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_4__["getUser"])(state, app.creator_id)) {
        profilesToLoad[app.creator_id] = true;
      }
    }

    const list = Object.keys(profilesToLoad);

    if (list.length === 0) {
      return;
    }

    dispatch(Object(mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_3__["getProfilesByIds"])(list));
  };
}
function getYoutubeVideoInfo(googleKey, videoId, success, error) {
  superagent__WEBPACK_IMPORTED_MODULE_1___default.a.get('https://www.googleapis.com/youtube/v3/videos').query({
    part: 'snippet',
    id: videoId,
    key: googleKey
  }).end((err, res) => {
    if (err) {
      return error(err);
    }

    if (!res.body) {
      console.error('Missing response body for getYoutubeVideoInfo'); // eslint-disable-line no-console
    }

    return success(res.body);
  });
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DEFAULT_PAGE_SIZE, "DEFAULT_PAGE_SIZE", "/home/pdxuan/Desktop/mattermost-webapp/actions/integration_actions.jsx");
  reactHotLoader.register(loadIncomingHooksAndProfilesForTeam, "loadIncomingHooksAndProfilesForTeam", "/home/pdxuan/Desktop/mattermost-webapp/actions/integration_actions.jsx");
  reactHotLoader.register(loadProfilesForIncomingHooks, "loadProfilesForIncomingHooks", "/home/pdxuan/Desktop/mattermost-webapp/actions/integration_actions.jsx");
  reactHotLoader.register(loadOutgoingHooksAndProfilesForTeam, "loadOutgoingHooksAndProfilesForTeam", "/home/pdxuan/Desktop/mattermost-webapp/actions/integration_actions.jsx");
  reactHotLoader.register(loadProfilesForOutgoingHooks, "loadProfilesForOutgoingHooks", "/home/pdxuan/Desktop/mattermost-webapp/actions/integration_actions.jsx");
  reactHotLoader.register(loadCommandsAndProfilesForTeam, "loadCommandsAndProfilesForTeam", "/home/pdxuan/Desktop/mattermost-webapp/actions/integration_actions.jsx");
  reactHotLoader.register(loadProfilesForCommands, "loadProfilesForCommands", "/home/pdxuan/Desktop/mattermost-webapp/actions/integration_actions.jsx");
  reactHotLoader.register(loadOAuthAppsAndProfiles, "loadOAuthAppsAndProfiles", "/home/pdxuan/Desktop/mattermost-webapp/actions/integration_actions.jsx");
  reactHotLoader.register(loadProfilesForOAuthApps, "loadProfilesForOAuthApps", "/home/pdxuan/Desktop/mattermost-webapp/actions/integration_actions.jsx");
  reactHotLoader.register(getYoutubeVideoInfo, "getYoutubeVideoInfo", "/home/pdxuan/Desktop/mattermost-webapp/actions/integration_actions.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/backstage/backstage_controller.jsx":
/*!*******************************************************!*\
  !*** ./components/backstage/backstage_controller.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BackstageController; });
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var components_integrations_bots__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/integrations/bots */ "./components/integrations/bots/index.js");
/* harmony import */ var components_integrations_bots_add_bot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/integrations/bots/add_bot */ "./components/integrations/bots/add_bot/index.js");
/* harmony import */ var plugins_pluggable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! plugins/pluggable */ "./plugins/pluggable/index.js");
/* harmony import */ var components_announcement_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/announcement_bar */ "./components/announcement_bar/index.js");
/* harmony import */ var components_system_notice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/system_notice */ "./components/system_notice/index.js");
/* harmony import */ var components_integrations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/integrations */ "./components/integrations/index.js");
/* harmony import */ var components_emoji__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/emoji */ "./components/emoji/index.js");
/* harmony import */ var components_emoji_add_emoji__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/emoji/add_emoji */ "./components/emoji/add_emoji/index.js");
/* harmony import */ var components_integrations_installed_incoming_webhooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/integrations/installed_incoming_webhooks */ "./components/integrations/installed_incoming_webhooks/index.js");
/* harmony import */ var components_integrations_add_incoming_webhook__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/integrations/add_incoming_webhook */ "./components/integrations/add_incoming_webhook/index.js");
/* harmony import */ var components_integrations_edit_incoming_webhook__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/integrations/edit_incoming_webhook */ "./components/integrations/edit_incoming_webhook/index.js");
/* harmony import */ var components_integrations_installed_outgoing_webhooks__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/integrations/installed_outgoing_webhooks */ "./components/integrations/installed_outgoing_webhooks/index.js");
/* harmony import */ var components_integrations_add_outgoing_webhook__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/integrations/add_outgoing_webhook */ "./components/integrations/add_outgoing_webhook/index.js");
/* harmony import */ var components_integrations_edit_outgoing_webhook__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! components/integrations/edit_outgoing_webhook */ "./components/integrations/edit_outgoing_webhook/index.js");
/* harmony import */ var components_integrations_installed_oauth_apps__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! components/integrations/installed_oauth_apps */ "./components/integrations/installed_oauth_apps/index.js");
/* harmony import */ var components_integrations_add_oauth_app__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! components/integrations/add_oauth_app */ "./components/integrations/add_oauth_app/index.js");
/* harmony import */ var components_integrations_edit_oauth_app__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! components/integrations/edit_oauth_app */ "./components/integrations/edit_oauth_app/index.js");
/* harmony import */ var components_integrations_commands_container__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! components/integrations/commands_container */ "./components/integrations/commands_container/index.js");
/* harmony import */ var components_integrations_confirm_integration__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! components/integrations/confirm_integration */ "./components/integrations/confirm_integration/index.js");
/* harmony import */ var _components_backstage_sidebar_jsx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/backstage_sidebar.jsx */ "./components/backstage/components/backstage_sidebar.jsx");
/* harmony import */ var _components_backstage_navbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/backstage_navbar */ "./components/backstage/components/backstage_navbar.jsx");



(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

























const BackstageRoute = (_ref) => {
  let {
    component: Component,
    extraProps
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["component", "extraProps"]);

  return (//eslint-disable-line react/prop-types
    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], Object.assign({}, rest, {
      render: props => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object.assign({}, extraProps, props))
    }))
  );
};

class BackstageController extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "scrollToTop", () => {
      if (this.listRef) {
        this.listRef.scrollTop = 0;
      }
    });

    _defineProperty(this, "setListRef", ref => {
      this.listRef = ref;
    });
  }

  render() {
    if (this.props.team == null || this.props.user == null) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null);
    }

    const extraProps = {
      team: this.props.team,
      user: this.props.user,
      scrollToTop: this.scrollToTop
    };
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "backstage"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_announcement_bar__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_system_notice__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_backstage_navbar__WEBPACK_IMPORTED_MODULE_25__["default"], {
      team: this.props.team,
      siteName: this.props.siteName
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(plugins_pluggable__WEBPACK_IMPORTED_MODULE_7__["default"], {
      pluggableName: "Root"
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "backstage-body",
      ref: this.setListRef
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_backstage_sidebar_jsx__WEBPACK_IMPORTED_MODULE_24__["default"], {
      team: this.props.team,
      user: this.props.user,
      enableCustomEmoji: this.props.enableCustomEmoji,
      enableIncomingWebhooks: this.props.enableIncomingWebhooks,
      enableOutgoingWebhooks: this.props.enableOutgoingWebhooks,
      enableCommands: this.props.enableCommands,
      enableOAuthServiceProvider: this.props.enableOAuthServiceProvider,
      canCreateOrDeleteCustomEmoji: this.props.canCreateOrDeleteCustomEmoji
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BackstageRoute, {
      extraProps: extraProps,
      exact: true,
      path: '/:team/integrations',
      component: components_integrations__WEBPACK_IMPORTED_MODULE_10__["default"]
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BackstageRoute, {
      extraProps: extraProps,
      exact: true,
      path: "".concat(this.props.match.url, "/incoming_webhooks"),
      component: components_integrations_installed_incoming_webhooks__WEBPACK_IMPORTED_MODULE_13__["default"]
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BackstageRoute, {
      extraProps: extraProps,
      path: "".concat(this.props.match.url, "/incoming_webhooks/add"),
      component: components_integrations_add_incoming_webhook__WEBPACK_IMPORTED_MODULE_14__["default"]
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BackstageRoute, {
      extraProps: extraProps,
      path: "".concat(this.props.match.url, "/incoming_webhooks/edit"),
      component: components_integrations_edit_incoming_webhook__WEBPACK_IMPORTED_MODULE_15__["default"]
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BackstageRoute, {
      extraProps: extraProps,
      exact: true,
      path: "".concat(this.props.match.url, "/outgoing_webhooks"),
      component: components_integrations_installed_outgoing_webhooks__WEBPACK_IMPORTED_MODULE_16__["default"]
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BackstageRoute, {
      extraProps: extraProps,
      path: "".concat(this.props.match.url, "/outgoing_webhooks/add"),
      component: components_integrations_add_outgoing_webhook__WEBPACK_IMPORTED_MODULE_17__["default"]
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BackstageRoute, {
      extraProps: extraProps,
      path: "".concat(this.props.match.url, "/outgoing_webhooks/edit"),
      component: components_integrations_edit_outgoing_webhook__WEBPACK_IMPORTED_MODULE_18__["default"]
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BackstageRoute, {
      extraProps: extraProps,
      path: "".concat(this.props.match.url, "/commands"),
      component: components_integrations_commands_container__WEBPACK_IMPORTED_MODULE_22__["default"]
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BackstageRoute, {
      extraProps: extraProps,
      exact: true,
      path: "".concat(this.props.match.url, "/oauth2-apps"),
      component: components_integrations_installed_oauth_apps__WEBPACK_IMPORTED_MODULE_19__["default"]
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BackstageRoute, {
      extraProps: extraProps,
      path: "".concat(this.props.match.url, "/oauth2-apps/add"),
      component: components_integrations_add_oauth_app__WEBPACK_IMPORTED_MODULE_20__["default"]
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BackstageRoute, {
      extraProps: extraProps,
      path: "".concat(this.props.match.url, "/oauth2-apps/edit"),
      component: components_integrations_edit_oauth_app__WEBPACK_IMPORTED_MODULE_21__["default"]
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BackstageRoute, {
      extraProps: extraProps,
      path: "".concat(this.props.match.url, "/confirm"),
      component: components_integrations_confirm_integration__WEBPACK_IMPORTED_MODULE_23__["default"]
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BackstageRoute, {
      extraProps: extraProps,
      exact: true,
      path: '/:team/emoji',
      component: components_emoji__WEBPACK_IMPORTED_MODULE_11__["default"]
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BackstageRoute, {
      extraProps: extraProps,
      path: "".concat(this.props.match.url, "/add"),
      component: components_emoji_add_emoji__WEBPACK_IMPORTED_MODULE_12__["default"]
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BackstageRoute, {
      extraProps: extraProps,
      path: "".concat(this.props.match.url, "/bots/add"),
      component: components_integrations_bots_add_bot__WEBPACK_IMPORTED_MODULE_6__["default"]
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BackstageRoute, {
      extraProps: extraProps,
      path: "".concat(this.props.match.url, "/bots/edit"),
      component: components_integrations_bots_add_bot__WEBPACK_IMPORTED_MODULE_6__["default"]
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BackstageRoute, {
      extraProps: extraProps,
      path: "".concat(this.props.match.url, "/bots"),
      component: components_integrations_bots__WEBPACK_IMPORTED_MODULE_5__["default"]
    }))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(BackstageController, "propTypes", {
  /**
   * Current user.
   */
  user: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * Current team.
   */
  team: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * Object from react-router
   */
  match: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    url: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired
  }).isRequired,
  siteName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  enableCustomEmoji: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  enableIncomingWebhooks: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  enableOutgoingWebhooks: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  enableCommands: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  enableOAuthServiceProvider: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  canCreateOrDeleteCustomEmoji: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BackstageRoute, "BackstageRoute", "/home/pdxuan/Desktop/mattermost-webapp/components/backstage/backstage_controller.jsx");
  reactHotLoader.register(BackstageController, "BackstageController", "/home/pdxuan/Desktop/mattermost-webapp/components/backstage/backstage_controller.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/backstage/components/backstage_category.jsx":
/*!****************************************************************!*\
  !*** ./components/backstage/components/backstage_category.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BackstageCategory; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.



class BackstageCategory extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  static get propTypes() {
    return {
      name: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
      title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node.isRequired,
      icon: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
      parentLink: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
      children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.element)
    };
  }

  static get defaultProps() {
    return {
      parentLink: '',
      children: []
    };
  }

  static get contextTypes() {
    return {
      router: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired
    };
  }

  render() {
    const {
      name,
      title,
      icon,
      parentLink,
      children
    } = this.props;
    const link = parentLink + '/' + name;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "backstage-sidebar__category"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
      to: link,
      className: "category-title",
      activeClassName: "category-title--active"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: 'fa ' + icon
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "category-title__text"
    }, title)), children && children.length > 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: link,
      render: () => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "sections"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.map(children, child => {
        if (!child) {
          return child;
        }

        return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(child, {
          parentLink: link
        });
      }))
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

  reactHotLoader.register(BackstageCategory, "BackstageCategory", "/home/pdxuan/Desktop/mattermost-webapp/components/backstage/components/backstage_category.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/backstage/components/backstage_header.jsx":
/*!**************************************************************!*\
  !*** ./components/backstage/components/backstage_header.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BackstageHeader; });
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



class BackstageHeader extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    const children = [];
    const {
      formatMessage
    } = this.context.intl;
    react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.forEach(this.props.children, (child, index) => {
      if (index !== 0) {
        children.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          key: 'divider' + index,
          className: "backstage-header__divider"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
          className: "fa fa-angle-right",
          title: formatMessage({
            id: 'generic_icons.breadcrumb',
            defaultMessage: 'Breadcrumb Icon'
          })
        })));
      }

      children.push(child);
    });
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "backstage-header"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, children));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(BackstageHeader, "propTypes", {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node
});

_defineProperty(BackstageHeader, "contextTypes", {
  intl: react_intl__WEBPACK_IMPORTED_MODULE_2__["intlShape"].isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BackstageHeader, "BackstageHeader", "/home/pdxuan/Desktop/mattermost-webapp/components/backstage/components/backstage_header.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/backstage/components/backstage_list.jsx":
/*!************************************************************!*\
  !*** ./components/backstage/components/backstage_list.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BackstageList; });
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");
/* harmony import */ var components_loading_screen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/loading_screen */ "./components/loading_screen.tsx");
/* harmony import */ var components_widgets_icons_fa_search_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/widgets/icons/fa_search_icon */ "./components/widgets/icons/fa_search_icon.jsx");



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






class BackstageList extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "updateFilter", e => {
      this.setState({
        filter: e.target.value
      });
    });

    this.state = {
      filter: ''
    };
  }

  render() {
    const filter = this.state.filter.toLowerCase();
    let children;

    if (this.props.loading) {
      children = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_loading_screen__WEBPACK_IMPORTED_MODULE_6__["default"], null);
    } else {
      children = this.props.children;
      let hasChildren = true;

      if (typeof children === 'function') {
        [children, hasChildren] = children(filter);
      }

      children = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.map(children, child => {
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(child, {
          filter
        });
      });

      if (children.length === 0 || !hasChildren) {
        if (!filter) {
          if (this.props.emptyText) {
            children = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
              className: "backstage-list__item backstage-list__empty"
            }, this.props.emptyText);
          }
        } else if (this.props.emptyTextSearch) {
          children = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
            className: "backstage-list__item backstage-list__empty",
            id: "emptySearchResultsMessage"
          }, react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(this.props.emptyTextSearch, {
            values: {
              searchTerm: filter
            }
          }));
        }
      }
    }

    let addLink = null;

    if (this.props.addLink && this.props.addText) {
      addLink = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
        className: "add-link",
        to: this.props.addLink
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
        type: "button",
        className: "btn btn-primary",
        id: this.props.addButtonId
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, this.props.addText)));
    }

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "backstage-content"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "backstage-header"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", null, this.props.header), addLink), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "backstage-filters"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "backstage-filter__search"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_widgets_icons_fa_search_icon__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
      type: "search",
      className: "form-control",
      placeholder: this.props.searchPlaceholder,
      value: this.state.filter,
      onChange: this.updateFilter,
      style: style.search,
      id: "searchInput"
    }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "backstage-list__help"
    }, this.props.helpText), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "backstage-list"
    }, children));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(BackstageList, "propTypes", {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func]),
  header: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,
  addLink: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  addText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  addButtonId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  emptyText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  emptyTextSearch: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  helpText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  searchPlaceholder: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
});

_defineProperty(BackstageList, "defaultProps", {
  searchPlaceholder: utils_utils_jsx__WEBPACK_IMPORTED_MODULE_5__["localizeMessage"]('backstage_list.search', 'Search')
});

const style = {
  search: {
    flexGrow: 0,
    flexShrink: 0
  }
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BackstageList, "BackstageList", "/home/pdxuan/Desktop/mattermost-webapp/components/backstage/components/backstage_list.jsx");
  reactHotLoader.register(style, "style", "/home/pdxuan/Desktop/mattermost-webapp/components/backstage/components/backstage_list.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/backstage/components/backstage_navbar.jsx":
/*!**************************************************************!*\
  !*** ./components/backstage/components/backstage_navbar.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BackstageNavbar; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var components_widgets_icons_fa_back_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/widgets/icons/fa_back_icon */ "./components/widgets/icons/fa_back_icon.jsx");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





class BackstageNavbar extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  static get propTypes() {
    return {
      team: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired,
      siteName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
    };
  }

  render() {
    if (!this.props.team) {
      return null;
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "backstage-navbar"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      className: "backstage-navbar__back",
      to: "/".concat(this.props.team.name)
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_widgets_icons_fa_back_icon__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "backstage_navbar.backToMattermost",
      defaultMessage: "Back to {siteName}",
      values: {
        siteName: this.props.siteName
      }
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

  reactHotLoader.register(BackstageNavbar, "BackstageNavbar", "/home/pdxuan/Desktop/mattermost-webapp/components/backstage/components/backstage_navbar.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/backstage/components/backstage_section.jsx":
/*!***************************************************************!*\
  !*** ./components/backstage/components/backstage_section.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BackstageSection; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.



class BackstageSection extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  static get propTypes() {
    return {
      name: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
      title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node.isRequired,
      parentLink: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
      subsection: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
      children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.element),
      id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
    };
  }

  static get defaultProps() {
    return {
      parentLink: '',
      subsection: false,
      children: []
    };
  }

  static get contextTypes() {
    return {
      router: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired
    };
  }

  getLink() {
    return this.props.parentLink + '/' + this.props.name;
  }

  render() {
    const {
      title,
      subsection,
      children
    } = this.props;
    const link = this.getLink();
    let clonedChildren = null;

    if (children.length > 0) {
      clonedChildren = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "subsections"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.map(children, child => {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(child, {
          parentLink: link,
          subsection: true
        });
      }));
    }

    let className = 'section';

    if (subsection) {
      className = 'subsection';
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: className,
      id: this.props.id
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
      className: "".concat(className, "-title"),
      activeClassName: "".concat(className, "-title--active"),
      to: link
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "".concat(className, "-title__text")
    }, title)), clonedChildren);
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

  reactHotLoader.register(BackstageSection, "BackstageSection", "/home/pdxuan/Desktop/mattermost-webapp/components/backstage/components/backstage_section.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/backstage/components/backstage_sidebar.jsx":
/*!***************************************************************!*\
  !*** ./components/backstage/components/backstage_sidebar.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BackstageSidebar; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mattermost-redux/constants */ "./node_modules/mattermost-redux/constants/index.js");
/* harmony import */ var mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_permissions_gates_system_permission_gate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/permissions_gates/system_permission_gate */ "./components/permissions_gates/system_permission_gate/index.js");
/* harmony import */ var components_permissions_gates_team_permission_gate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/permissions_gates/team_permission_gate */ "./components/permissions_gates/team_permission_gate/index.js");
/* harmony import */ var _backstage_category_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./backstage_category.jsx */ "./components/backstage/components/backstage_category.jsx");
/* harmony import */ var _backstage_section_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./backstage_section.jsx */ "./components/backstage/components/backstage_section.jsx");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








class BackstageSidebar extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  static get propTypes() {
    return {
      team: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired,
      user: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired,
      enableCustomEmoji: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
      enableIncomingWebhooks: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
      enableOutgoingWebhooks: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
      enableCommands: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
      enableOAuthServiceProvider: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
      canCreateOrDeleteCustomEmoji: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired
    };
  }

  renderCustomEmoji() {
    if (!this.props.enableCustomEmoji || !this.props.canCreateOrDeleteCustomEmoji) {
      return null;
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_backstage_category_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
      name: "emoji",
      parentLink: '/' + this.props.team.name,
      icon: "fa-smile-o",
      title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "backstage_sidebar.emoji",
        defaultMessage: "Custom Emoji"
      })
    });
  }

  renderIntegrations() {
    let incomingWebhooks = null;

    if (this.props.enableIncomingWebhooks) {
      incomingWebhooks = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_permissions_gates_team_permission_gate__WEBPACK_IMPORTED_MODULE_5__["default"], {
        permissions: [mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_3__["Permissions"].MANAGE_INCOMING_WEBHOOKS],
        teamId: this.props.team.id
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_backstage_section_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
        name: "incoming_webhooks",
        parentLink: '/' + this.props.team.name + '/integrations',
        title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          id: "backstage_sidebar.integrations.incoming_webhooks",
          defaultMessage: "Incoming Webhooks"
        }),
        id: "incomingWebhooks"
      }));
    }

    let outgoingWebhooks = null;

    if (this.props.enableOutgoingWebhooks) {
      outgoingWebhooks = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_permissions_gates_team_permission_gate__WEBPACK_IMPORTED_MODULE_5__["default"], {
        permissions: [mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_3__["Permissions"].MANAGE_OUTGOING_WEBHOOKS],
        teamId: this.props.team.id
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_backstage_section_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
        name: "outgoing_webhooks",
        parentLink: '/' + this.props.team.name + '/integrations',
        title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          id: "backstage_sidebar.integrations.outgoing_webhooks",
          defaultMessage: "Outgoing Webhooks"
        }),
        id: "outgoingWebhooks"
      }));
    }

    let commands = null;

    if (this.props.enableCommands) {
      commands = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_permissions_gates_team_permission_gate__WEBPACK_IMPORTED_MODULE_5__["default"], {
        permissions: [mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_3__["Permissions"].MANAGE_SLASH_COMMANDS],
        teamId: this.props.team.id
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_backstage_section_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
        name: "commands",
        parentLink: '/' + this.props.team.name + '/integrations',
        title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          id: "backstage_sidebar.integrations.commands",
          defaultMessage: "Slash Commands"
        }),
        id: "slashCommands"
      }));
    }

    let oauthApps = null;

    if (this.props.enableOAuthServiceProvider) {
      oauthApps = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_permissions_gates_system_permission_gate__WEBPACK_IMPORTED_MODULE_4__["default"], {
        permissions: [mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_3__["Permissions"].MANAGE_OAUTH]
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_backstage_section_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
        name: "oauth2-apps",
        parentLink: '/' + this.props.team.name + '/integrations',
        title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          id: "backstage_sidebar.integrations.oauthApps",
          defaultMessage: "OAuth 2.0 Applications"
        }),
        id: "oauthApps"
      }));
    }

    const botAccounts = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_permissions_gates_system_permission_gate__WEBPACK_IMPORTED_MODULE_4__["default"], {
      permissions: ['manage_bots']
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_backstage_section_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "bots",
      parentLink: '/' + this.props.team.name + '/integrations',
      title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "backstage_sidebar.bots",
        defaultMessage: "Bot Accounts"
      }),
      id: "botAccounts"
    }));
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_permissions_gates_team_permission_gate__WEBPACK_IMPORTED_MODULE_5__["default"], {
      permissions: [mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_3__["Permissions"].MANAGE_INCOMING_WEBHOOKS, mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_3__["Permissions"].MANAGE_OUTGOING_WEBHOOKS, mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_3__["Permissions"].MANAGE_SLASH_COMMANDS, mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_3__["Permissions"].MANAGE_OAUTH],
      teamId: this.props.team.id
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_backstage_category_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
      name: "integrations",
      icon: "fa-link",
      parentLink: '/' + this.props.team.name,
      title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "backstage_sidebar.integrations",
        defaultMessage: "Integrations"
      })
    }, incomingWebhooks, outgoingWebhooks, commands, oauthApps, botAccounts));
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "backstage-sidebar"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, this.renderCustomEmoji(), this.renderIntegrations()));
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

  reactHotLoader.register(BackstageSidebar, "BackstageSidebar", "/home/pdxuan/Desktop/mattermost-webapp/components/backstage/components/backstage_sidebar.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/backstage/index.js":
/*!***************************************!*\
  !*** ./components/backstage/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mattermost-redux/selectors/entities/users */ "./node_modules/mattermost-redux/selectors/entities/users.js");
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mattermost-redux/selectors/entities/teams */ "./node_modules/mattermost-redux/selectors/entities/teams.js");
/* harmony import */ var mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mattermost-redux/selectors/entities/general */ "./node_modules/mattermost-redux/selectors/entities/general.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mattermost_redux_selectors_entities_roles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mattermost-redux/selectors/entities/roles */ "./node_modules/mattermost-redux/selectors/entities/roles.js");
/* harmony import */ var mattermost_redux_selectors_entities_roles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_roles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mattermost-redux/constants */ "./node_modules/mattermost-redux/constants/index.js");
/* harmony import */ var mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _backstage_controller_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./backstage_controller.jsx */ "./components/backstage/backstage_controller.jsx");


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
  const user = Object(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_3__["getCurrentUser"])(state);
  const team = Object(mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_4__["getCurrentTeam"])(state);
  const config = Object(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_5__["getConfig"])(state);
  const siteName = config.SiteName;
  const enableCustomEmoji = config.EnableCustomEmoji === 'true';
  const enableIncomingWebhooks = config.EnableIncomingWebhooks === 'true';
  const enableOutgoingWebhooks = config.EnableOutgoingWebhooks === 'true';
  const enableCommands = config.EnableCommands === 'true';
  const enableOAuthServiceProvider = config.EnableOAuthServiceProvider === 'true';
  let canCreateOrDeleteCustomEmoji = Object(mattermost_redux_selectors_entities_roles__WEBPACK_IMPORTED_MODULE_6__["haveISystemPermission"])(state, {
    permission: mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_7__["Permissions"].CREATE_EMOJIS
  }) || Object(mattermost_redux_selectors_entities_roles__WEBPACK_IMPORTED_MODULE_6__["haveISystemPermission"])(state, {
    permission: mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_7__["Permissions"].DELETE_EMOJIS
  });

  if (!canCreateOrDeleteCustomEmoji) {
    for (const t of Object(mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_4__["getMyTeams"])(state)) {
      if (Object(mattermost_redux_selectors_entities_roles__WEBPACK_IMPORTED_MODULE_6__["haveITeamPermission"])(state, {
        team: t.id,
        permission: mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_7__["Permissions"].CREATE_EMOJIS
      }) || Object(mattermost_redux_selectors_entities_roles__WEBPACK_IMPORTED_MODULE_6__["haveITeamPermission"])(state, {
        team: t.id,
        permission: mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_7__["Permissions"].DELETE_EMOJIS
      })) {
        canCreateOrDeleteCustomEmoji = true;
        break;
      }
    }
  }

  return {
    user,
    team,
    siteName,
    enableCustomEmoji,
    enableIncomingWebhooks,
    enableOutgoingWebhooks,
    enableCommands,
    enableOAuthServiceProvider,
    canCreateOrDeleteCustomEmoji
  };
}

const _default = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(_backstage_controller_jsx__WEBPACK_IMPORTED_MODULE_8__["default"]));

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/backstage/index.js");
  reactHotLoader.register(_default, "default", "/home/pdxuan/Desktop/mattermost-webapp/components/backstage/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/channel_select/channel_select.jsx":
/*!******************************************************!*\
  !*** ./components/channel_select/channel_select.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChannelSelect; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/constants */ "./utils/constants.jsx");
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.




class ChannelSelect extends react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent {
  static get propTypes() {
    return {
      channels: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array.isRequired,
      onChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
      value: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
      selectOpen: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
      selectPrivate: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
      selectDm: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired
    };
  }

  static get defaultProps() {
    return {
      selectOpen: false,
      selectPrivate: false,
      selectDm: false
    };
  }

  render() {
    const options = [react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      key: "",
      value: ""
    }, utils_utils_jsx__WEBPACK_IMPORTED_MODULE_3__["localizeMessage"]('channel_select.placeholder', '--- Select a channel ---'))];
    this.props.channels.forEach(channel => {
      const channelName = channel.display_name || channel.name;

      if (channel.type === utils_constants__WEBPACK_IMPORTED_MODULE_2__["default"].OPEN_CHANNEL && this.props.selectOpen) {
        options.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          key: channel.id,
          value: channel.id
        }, channelName));
      } else if (channel.type === utils_constants__WEBPACK_IMPORTED_MODULE_2__["default"].PRIVATE_CHANNEL && this.props.selectPrivate) {
        options.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          key: channel.id,
          value: channel.id
        }, channelName));
      } else if (channel.type === utils_constants__WEBPACK_IMPORTED_MODULE_2__["default"].DM_CHANNEL && this.props.selectDm) {
        options.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          key: channel.id,
          value: channel.id
        }, channelName));
      }
    });
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
      className: "form-control",
      value: this.props.value,
      onChange: this.props.onChange,
      id: "channelSelect"
    }, options);
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

  reactHotLoader.register(ChannelSelect, "ChannelSelect", "/home/pdxuan/Desktop/mattermost-webapp/components/channel_select/channel_select.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/channel_select/index.js":
/*!********************************************!*\
  !*** ./components/channel_select/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var mattermost_redux_selectors_entities_channels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mattermost-redux/selectors/entities/channels */ "./node_modules/mattermost-redux/selectors/entities/channels.js");
/* harmony import */ var mattermost_redux_selectors_entities_channels__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_channels__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mattermost_redux_selectors_entities_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mattermost-redux/selectors/entities/i18n */ "./node_modules/mattermost-redux/selectors/entities/i18n.js");
/* harmony import */ var mattermost_redux_selectors_entities_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mattermost_redux_utils_channel_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mattermost-redux/utils/channel_utils */ "./node_modules/mattermost-redux/utils/channel_utils.js");
/* harmony import */ var mattermost_redux_utils_channel_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_utils_channel_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _channel_select_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./channel_select.jsx */ "./components/channel_select/channel_select.jsx");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






const getMyChannelsSorted = Object(reselect__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(mattermost_redux_selectors_entities_channels__WEBPACK_IMPORTED_MODULE_3__["getMyChannels"], mattermost_redux_selectors_entities_i18n__WEBPACK_IMPORTED_MODULE_4__["getCurrentUserLocale"], (channels, locale) => {
  return [...channels].sort(mattermost_redux_utils_channel_utils__WEBPACK_IMPORTED_MODULE_5__["sortChannelsByTypeAndDisplayName"].bind(null, locale));
});

function mapStateToProps(state) {
  return {
    channels: getMyChannelsSorted(state)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(_channel_select_jsx__WEBPACK_IMPORTED_MODULE_6__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getMyChannelsSorted, "getMyChannelsSorted", "/home/pdxuan/Desktop/mattermost-webapp/components/channel_select/index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/channel_select/index.js");
  reactHotLoader.register(_default, "default", "/home/pdxuan/Desktop/mattermost-webapp/components/channel_select/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/copy_text.tsx":
/*!**********************************!*\
  !*** ./components/copy_text.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CopyText; });
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/constants */ "./utils/constants.jsx");
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");



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





class CopyText extends react__WEBPACK_IMPORTED_MODULE_2___default.a.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "copyText", e => {
      e.preventDefault();
      Object(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_6__["copyToClipboard"])(this.props.value);
    });
  }

  render() {
    if (!document.queryCommandSupported('copy')) {
      return null;
    }

    const tooltip = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
      id: "copy"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: this.props.idMessage,
      defaultMessage: this.props.defaultMessage
    }));
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["OverlayTrigger"], {
      delayShow: utils_constants__WEBPACK_IMPORTED_MODULE_5__["default"].OVERLAY_TIME_DELAY,
      placement: "top",
      overlay: tooltip
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "#",
      className: "fa fa-copy margin-left",
      onClick: this.copyText
    }));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(CopyText, "propTypes", {
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  defaultMessage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  idMessage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
});

_defineProperty(CopyText, "defaultProps", {
  defaultMessage: 'Copy',
  idMessage: 'integrations.copy'
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CopyText, "CopyText", "/home/pdxuan/Desktop/mattermost-webapp/components/copy_text.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/delete_modal_trigger.jsx":
/*!*********************************************!*\
  !*** ./components/delete_modal_trigger.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DeleteModalTrigger; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/constants */ "./utils/constants.jsx");
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");
/* harmony import */ var _confirm_modal_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./confirm_modal.jsx */ "./components/confirm_modal.jsx");
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





class DeleteModalTrigger extends react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleOpenModal", e => {
      e.preventDefault();
      this.setState({
        showDeleteModal: true
      });
    });

    _defineProperty(this, "handleConfirm", () => {
      this.props.onDelete();
    });

    _defineProperty(this, "handleCancel", () => {
      this.setState({
        showDeleteModal: false
      });
    });

    _defineProperty(this, "handleKeyDown", e => {
      if (utils_utils_jsx__WEBPACK_IMPORTED_MODULE_3__["isKeyPressed"](e, utils_constants__WEBPACK_IMPORTED_MODULE_2__["default"].KeyCodes.ENTER)) {
        this.handleConfirm(e);
      }
    });

    if (this.constructor === DeleteModalTrigger) {
      throw new TypeError('Can not construct abstract class.');
    }

    this.state = {
      showDeleteModal: false
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "color--link style--none",
      onClick: this.handleOpenModal
    }, this.triggerTitle), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_confirm_modal_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
      show: this.state.showDeleteModal,
      title: this.modalTitle,
      message: this.modalMessage,
      confirmButtonText: this.modalConfirmButton,
      onConfirm: this.handleConfirm,
      onCancel: this.handleCancel,
      onKeyDown: this.handleKeyDown
    }));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(DeleteModalTrigger, "propTypes", {
  onDelete: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DeleteModalTrigger, "DeleteModalTrigger", "/home/pdxuan/Desktop/mattermost-webapp/components/delete_modal_trigger.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/emoji/add_emoji/add_emoji.jsx":
/*!**************************************************!*\
  !*** ./components/emoji/add_emoji/add_emoji.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddEmoji; });
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_ends_with__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.ends-with */ "./node_modules/core-js/modules/es.string.ends-with.js");
/* harmony import */ var core_js_modules_es_string_ends_with__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_ends_with__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.starts-with */ "./node_modules/core-js/modules/es.string.starts-with.js");
/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var components_backstage_components_backstage_header_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/backstage/components/backstage_header.jsx */ "./components/backstage/components/backstage_header.jsx");
/* harmony import */ var components_form_error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/form_error */ "./components/form_error.tsx");
/* harmony import */ var components_spinner_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/spinner_button */ "./components/spinner_button.tsx");
/* harmony import */ var utils_browser_history__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! utils/browser_history */ "./utils/browser_history.jsx");
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");





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









class AddEmoji extends react__WEBPACK_IMPORTED_MODULE_5___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleSubmit", async e => {
      const {
        actions,
        emojiMap,
        user,
        team
      } = this.props;
      const {
        image,
        name,
        saving
      } = this.state;
      e.preventDefault();

      if (saving) {
        return;
      }

      this.setState({
        saving: true,
        error: null
      });
      const emoji = {
        creator_id: user.id,
        name: name.trim().toLowerCase()
      }; // trim surrounding colons if the user accidentally included them in the name

      if (emoji.name.startsWith(':') && emoji.name.endsWith(':')) {
        emoji.name = emoji.name.substring(1, emoji.name.length - 1);
      }

      if (!emoji.name) {
        this.setState({
          saving: false,
          error: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
            id: "add_emoji.nameRequired",
            defaultMessage: "A name is required for the emoji"
          })
        });
        return;
      } else if (/[^a-z0-9_-]/.test(emoji.name)) {
        this.setState({
          saving: false,
          error: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
            id: "add_emoji.nameInvalid",
            defaultMessage: "An emoji's name can only contain lowercase letters, numbers, and the symbols '-' and '_'."
          })
        });
        return;
      } else if (emojiMap.hasSystemEmoji(emoji.name)) {
        this.setState({
          saving: false,
          error: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
            id: "add_emoji.nameTaken",
            defaultMessage: "This name is already in use by a system emoji. Please choose another name."
          })
        });
        return;
      }

      if (!image) {
        this.setState({
          saving: false,
          error: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
            id: "add_emoji.imageRequired",
            defaultMessage: "An image is required for the emoji"
          })
        });
        return;
      }

      const {
        error
      } = await actions.createCustomEmoji(emoji, image);

      if (error) {
        this.setState({
          saving: false,
          error: error.message
        });
        return;
      }

      utils_browser_history__WEBPACK_IMPORTED_MODULE_11__["browserHistory"].push('/' + team.name + '/emoji');
    });

    _defineProperty(this, "updateName", e => {
      this.setState({
        name: e.target.value
      });
    });

    _defineProperty(this, "updateImage", e => {
      if (e.target.files.length === 0) {
        this.setState({
          image: null,
          imageUrl: ''
        });
        return;
      }

      const image = e.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.setState({
          image,
          imageUrl: reader.result
        });
      };

      reader.readAsDataURL(image);
    });

    this.state = {
      name: '',
      image: null,
      imageUrl: '',
      saving: false,
      error: null
    };
  }

  render() {
    let filename = null;

    if (this.state.image) {
      filename = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "add-emoji__filename"
      }, this.state.image.name);
    }

    let preview = null;

    if (this.state.imageUrl) {
      preview = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        className: "control-label col-sm-4",
        htmlFor: "preview"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
        id: "add_emoji.preview",
        defaultMessage: "Preview"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-5 col-sm-8 add-emoji__preview"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
        id: "add_emoji.preview.sentence",
        defaultMessage: "This is a sentence with {image} in it.",
        values: {
          image: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
            className: "emoticon",
            style: {
              backgroundImage: 'url(' + this.state.imageUrl + ')'
            }
          })
        }
      })));
    }

    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "backstage-content row"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_backstage_components_backstage_header_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
      to: '/' + this.props.team.name + '/emoji'
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "emoji_list.header",
      defaultMessage: "Custom Emoji"
    })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "add_emoji.header",
      defaultMessage: "Add"
    })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "backstage-form"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
      className: "form-horizontal",
      onSubmit: this.handleSubmit
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "name"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "add_emoji.name",
      defaultMessage: "Name"
    })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
      id: "name",
      type: "text",
      maxLength: "64",
      className: "form-control",
      value: this.state.name,
      onChange: this.updateName
    }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "form__help"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "add_emoji.name.help",
      defaultMessage: "Choose a name for your emoji made of up to 64 characters consisting of lowercase letters, numbers, and the symbols '-' and '_'."
    })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "image"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "add_emoji.image",
      defaultMessage: "Image"
    })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "add-emoji__upload"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
      className: "btn btn-primary"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "add_emoji.image.button",
      defaultMessage: "Select"
    })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
      id: "select-emoji",
      type: "file",
      accept: ".jpg,.png,.gif",
      multiple: false,
      onChange: this.updateImage
    })), filename, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "form__help"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "add_emoji.image.help",
      defaultMessage: "Choose the image for your emoji. The image can be a gif, png, or jpeg file with a max size of 64 KB and dimensions up to 128 by 128 pixels."
    }))))), preview, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "backstage-form__footer"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_form_error__WEBPACK_IMPORTED_MODULE_9__["default"], {
      type: "backstage",
      error: this.state.error
    }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
      className: "btn btn-link btn-sm",
      to: '/' + this.props.team.name + '/emoji'
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "add_emoji.cancel",
      defaultMessage: "Cancel"
    })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_spinner_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
      className: "btn btn-primary",
      type: "submit",
      spinning: this.state.saving,
      spinningText: Object(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_12__["localizeMessage"])('add_emoji.saving', 'Saving...'),
      onClick: this.handleSubmit
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "add_emoji.save",
      defaultMessage: "Save"
    }))))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(AddEmoji, "propTypes", {
  actions: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    createCustomEmoji: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired
  }).isRequired,
  emojiMap: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,
  team: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  user: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
});

_defineProperty(AddEmoji, "contextTypes", {
  router: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AddEmoji, "AddEmoji", "/home/pdxuan/Desktop/mattermost-webapp/components/emoji/add_emoji/add_emoji.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/emoji/add_emoji/index.js":
/*!*********************************************!*\
  !*** ./components/emoji/add_emoji/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var mattermost_redux_actions_emojis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/actions/emojis */ "./node_modules/mattermost-redux/actions/emojis.js");
/* harmony import */ var mattermost_redux_actions_emojis__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_emojis__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var selectors_emojis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! selectors/emojis */ "./selectors/emojis.js");
/* harmony import */ var _add_emoji_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add_emoji.jsx */ "./components/emoji/add_emoji/add_emoji.jsx");
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
  return {
    emojiMap: Object(selectors_emojis__WEBPACK_IMPORTED_MODULE_3__["getEmojiMap"])(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])({
      createCustomEmoji: mattermost_redux_actions_emojis__WEBPACK_IMPORTED_MODULE_2__["createCustomEmoji"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_add_emoji_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/emoji/add_emoji/index.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/emoji/add_emoji/index.js");
  reactHotLoader.register(_default, "default", "/home/pdxuan/Desktop/mattermost-webapp/components/emoji/add_emoji/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/emoji/delete_emoji_modal.jsx":
/*!*************************************************!*\
  !*** ./components/emoji/delete_emoji_modal.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DeleteEmoji; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var components_delete_modal_trigger_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/delete_modal_trigger.jsx */ "./components/delete_modal_trigger.jsx");
/* harmony import */ var components_widgets_icons_fa_warning_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/widgets/icons/fa_warning_icon */ "./components/widgets/icons/fa_warning_icon.tsx");
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





class DeleteEmoji extends components_delete_modal_trigger_jsx__WEBPACK_IMPORTED_MODULE_3__["default"] {
  get triggerTitle() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "emoji_list.delete",
      defaultMessage: "Delete"
    });
  }

  get modalTitle() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "emoji_list.delete.confirm.title",
      defaultMessage: "Delete Custom Emoji"
    });
  }

  get modalMessage() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "alert alert-warning"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_widgets_icons_fa_warning_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      additionalClassName: "fa-margin--right"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "emoji_list.delete.confirm.msg",
      defaultMessage: "This action permanently deletes the custom emoji. Are you sure you want to delete it?"
    }));
  }

  get modalConfirmButton() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "emoji_list.delete.confirm.button",
      defaultMessage: "Delete"
    });
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(DeleteEmoji, "propTypes", {
  onDelete: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DeleteEmoji, "DeleteEmoji", "/home/pdxuan/Desktop/mattermost-webapp/components/emoji/delete_emoji_modal.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/emoji/emoji_list/emoji_list.jsx":
/*!****************************************************!*\
  !*** ./components/emoji/emoji_list/emoji_list.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EmojiList; });
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mattermost-redux/constants */ "./node_modules/mattermost-redux/constants/index.js");
/* harmony import */ var mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_loading_screen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/loading_screen */ "./components/loading_screen.tsx");
/* harmony import */ var components_save_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/save_button */ "./components/save_button.tsx");
/* harmony import */ var components_emoji_emoji_list_item__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/emoji/emoji_list_item */ "./components/emoji/emoji_list_item/index.js");
/* harmony import */ var components_widgets_icons_fa_next_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/widgets/icons/fa_next_icon */ "./components/widgets/icons/fa_next_icon.tsx");
/* harmony import */ var components_widgets_icons_fa_previous_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/widgets/icons/fa_previous_icon */ "./components/widgets/icons/fa_previous_icon.tsx");
/* harmony import */ var components_widgets_icons_fa_search_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/widgets/icons/fa_search_icon */ "./components/widgets/icons/fa_search_icon.jsx");
/* harmony import */ var components_localized_input_localized_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/localized_input/localized_input */ "./components/localized_input/localized_input.tsx");
/* harmony import */ var utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! utils/i18n.jsx */ "./utils/i18n.jsx");





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












const EMOJI_PER_PAGE = 50;
const EMOJI_SEARCH_DELAY_MILLISECONDS = 200;
class EmojiList extends react__WEBPACK_IMPORTED_MODULE_4___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "nextPage", e => {
      if (e) {
        e.preventDefault();
      }

      const next = this.state.page + 1;
      this.setState({
        nextLoading: true
      });
      this.props.actions.getCustomEmojis(next, EMOJI_PER_PAGE, mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_7__["Emoji"].SORT_BY_NAME, true).then(({
        data
      }) => {
        this.setState({
          page: next,
          nextLoading: false
        });

        if (data && data.length < EMOJI_PER_PAGE) {
          this.setState({
            missingPages: false
          });
        }

        this.props.scrollToTop();
      });
    });

    _defineProperty(this, "previousPage", e => {
      if (e) {
        e.preventDefault();
      }

      this.setState({
        page: this.state.page - 1,
        nextLoading: false
      });
      this.props.scrollToTop();
    });

    _defineProperty(this, "onSearchChange", e => {
      if (!e || !e.target) {
        return;
      }

      const term = e.target.value || '';
      clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(async () => {
        if (term.trim() === '') {
          this.setState({
            searchEmojis: null,
            page: 0
          });
          return;
        }

        this.setState({
          loading: true
        });
        const {
          data
        } = await this.props.actions.searchCustomEmojis(term, {}, true);

        if (data) {
          this.setState({
            searchEmojis: data.map(em => em.id),
            loading: false
          });
        } else {
          this.setState({
            searchEmojis: [],
            loading: false
          });
        }
      }, EMOJI_SEARCH_DELAY_MILLISECONDS);
    });

    _defineProperty(this, "deleteFromSearch", emojiId => {
      if (!this.state.searchEmojis) {
        return;
      }

      const index = this.state.searchEmojis.indexOf(emojiId);

      if (index < 0) {
        return;
      }

      const newSearchEmojis = [...this.state.searchEmojis];
      newSearchEmojis.splice(index, 1);
      this.setState({
        searchEmojis: newSearchEmojis
      });
    });

    this.searchTimeout = null;
    this.state = {
      loading: true,
      page: 0,
      nextLoading: false,
      searchEmojis: null,
      missingPages: true
    };
  }

  componentDidMount() {
    this.props.actions.getCustomEmojis(0, EMOJI_PER_PAGE + 1, mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_7__["Emoji"].SORT_BY_NAME, true).then(({
      data
    }) => {
      this.setState({
        loading: false
      });

      if (data && data.length < EMOJI_PER_PAGE) {
        this.setState({
          missingPages: false
        });
      }
    });
  }

  render() {
    const searchEmojis = this.state.searchEmojis;
    const emojis = [];
    let nextButton;
    let previousButton;

    if (this.state.loading) {
      emojis.push(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", {
        key: "loading",
        className: "backstage-list__item backstage-list__empty"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
        colSpan: "4"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_loading_screen__WEBPACK_IMPORTED_MODULE_8__["default"], {
        key: "loading"
      }))));
    } else if (this.props.emojiIds.length === 0 || searchEmojis && searchEmojis.length === 0) {
      emojis.push(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", {
        key: "empty",
        className: "backstage-list__item backstage-list__empty"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
        colSpan: "4"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
        id: "emoji_list.empty",
        defaultMessage: "No custom emoji found"
      }))));
    } else if (searchEmojis) {
      searchEmojis.forEach(emojiId => {
        emojis.push(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_emoji_emoji_list_item__WEBPACK_IMPORTED_MODULE_10__["default"], {
          key: 'emoji_search_item' + emojiId,
          emojiId: emojiId,
          onDelete: this.deleteFromSearch
        }));
      });
    } else {
      const pageStart = this.state.page * EMOJI_PER_PAGE;
      const pageEnd = pageStart + EMOJI_PER_PAGE;
      const emojisToDisplay = this.props.emojiIds.slice(pageStart, pageEnd);
      emojisToDisplay.forEach(emojiId => {
        emojis.push(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_emoji_emoji_list_item__WEBPACK_IMPORTED_MODULE_10__["default"], {
          key: 'emoji_list_item' + emojiId,
          emojiId: emojiId
        }));
      });

      if (this.state.missingPages) {
        const buttonContents = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "filtered_user_list.next",
          defaultMessage: "Next"
        }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_widgets_icons_fa_next_icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
          additionalClassName: "margin-left"
        }));
        nextButton = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_save_button__WEBPACK_IMPORTED_MODULE_9__["default"], {
          btnClass: "btn-link",
          extraClasses: "pull-right",
          onClick: this.nextPage,
          saving: this.state.nextLoading,
          disabled: this.state.nextLoading,
          defaultMessage: buttonContents,
          savingMessage: buttonContents
        });
      }

      if (this.state.page > 0) {
        previousButton = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
          className: "btn btn-link",
          onClick: this.previousPage
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_widgets_icons_fa_previous_icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
          additionalClassName: "margin-right"
        }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "filtered_user_list.prev",
          defaultMessage: "Previous"
        }));
      }
    }

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "backstage-filters"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "backstage-filter__search"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_widgets_icons_fa_search_icon__WEBPACK_IMPORTED_MODULE_13__["default"], null), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_localized_input_localized_input__WEBPACK_IMPORTED_MODULE_14__["default"], {
      type: "search",
      className: "form-control",
      placeholder: {
        id: Object(utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_15__["t"])('emoji_list.search'),
        defaultMessage: 'Search Custom Emoji'
      },
      onChange: this.onSearchChange,
      style: style.search
    }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "backstage-list__help"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "emoji_list.help",
      defaultMessage: "Custom emoji are available to everyone on your server. Type ':' followed by two characters in a message box to bring up the emoji selection menu."
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "emoji_list.help2",
      defaultMessage: "Tip: If you add #, ##, or ### as the first character on a new line containing emoji, you can use larger sized emoji. To try it out, send a message such as: '# :smile:'."
    }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "backstage-list"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("table", {
      className: "emoji-list__table"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", {
      className: "backstage-list__item emoji-list__table-header"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
      className: "emoji-list__name"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "emoji_list.name",
      defaultMessage: "Name"
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
      className: "emoji-list__image"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "emoji_list.image",
      defaultMessage: "Image"
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
      className: "emoji-list__creator"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "emoji_list.creator",
      defaultMessage: "Creator"
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
      className: "emoji-list_actions"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "emoji_list.actions",
      defaultMessage: "Actions"
    })))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tbody", null, emojis))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "filter-controls padding-top x2"
    }, previousButton, nextButton));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(EmojiList, "propTypes", {
  /**
   * Custom emojis on the system.
   */
  emojiIds: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string).isRequired,

  /**
   * Function to scroll list to top.
   */
  scrollToTop: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
    /**
     * Get pages of custom emojis.
     */
    getCustomEmojis: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,

    /**
     * Search custom emojis.
     */
    searchCustomEmojis: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
  }).isRequired
});

const style = {
  search: {
    flexGrow: 0,
    flexShrink: 0
  }
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(EMOJI_PER_PAGE, "EMOJI_PER_PAGE", "/home/pdxuan/Desktop/mattermost-webapp/components/emoji/emoji_list/emoji_list.jsx");
  reactHotLoader.register(EMOJI_SEARCH_DELAY_MILLISECONDS, "EMOJI_SEARCH_DELAY_MILLISECONDS", "/home/pdxuan/Desktop/mattermost-webapp/components/emoji/emoji_list/emoji_list.jsx");
  reactHotLoader.register(EmojiList, "EmojiList", "/home/pdxuan/Desktop/mattermost-webapp/components/emoji/emoji_list/emoji_list.jsx");
  reactHotLoader.register(style, "style", "/home/pdxuan/Desktop/mattermost-webapp/components/emoji/emoji_list/emoji_list.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/emoji/emoji_list/index.js":
/*!**********************************************!*\
  !*** ./components/emoji/emoji_list/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var mattermost_redux_selectors_entities_emojis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/selectors/entities/emojis */ "./node_modules/mattermost-redux/selectors/entities/emojis.js");
/* harmony import */ var mattermost_redux_selectors_entities_emojis__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_emojis__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mattermost_redux_actions_emojis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mattermost-redux/actions/emojis */ "./node_modules/mattermost-redux/actions/emojis.js");
/* harmony import */ var mattermost_redux_actions_emojis__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_emojis__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emoji_list_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./emoji_list.jsx */ "./components/emoji/emoji_list/emoji_list.jsx");
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
  return {
    emojiIds: Object(mattermost_redux_selectors_entities_emojis__WEBPACK_IMPORTED_MODULE_2__["getCustomEmojiIdsSortedByName"])(state) || []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
      getCustomEmojis: mattermost_redux_actions_emojis__WEBPACK_IMPORTED_MODULE_3__["getCustomEmojis"],
      searchCustomEmojis: mattermost_redux_actions_emojis__WEBPACK_IMPORTED_MODULE_3__["searchCustomEmojis"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_emoji_list_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/emoji/emoji_list/index.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/emoji/emoji_list/index.js");
  reactHotLoader.register(_default, "default", "/home/pdxuan/Desktop/mattermost-webapp/components/emoji/emoji_list/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/emoji/emoji_list_item/emoji_list_item.jsx":
/*!**************************************************************!*\
  !*** ./components/emoji/emoji_list_item/emoji_list_item.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EmojiListItem; });
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mattermost_redux_constants_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mattermost-redux/constants/permissions */ "./node_modules/mattermost-redux/constants/permissions.js");
/* harmony import */ var mattermost_redux_constants_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_constants_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mattermost_redux_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mattermost-redux/client */ "./node_modules/mattermost-redux/client/index.js");
/* harmony import */ var mattermost_redux_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_emoji_delete_emoji_modal_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/emoji/delete_emoji_modal.jsx */ "./components/emoji/delete_emoji_modal.jsx");
/* harmony import */ var components_permissions_gates_any_team_permission_gate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/permissions_gates/any_team_permission_gate */ "./components/permissions_gates/any_team_permission_gate/index.js");


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






class EmojiListItem extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleDelete", () => {
      if (this.props.onDelete) {
        this.props.onDelete(this.props.emoji.id);
      }

      this.props.actions.deleteCustomEmoji(this.props.emoji.id);
    });
  }

  render() {
    const emoji = this.props.emoji;
    const creatorUsername = this.props.creatorUsername;
    let creatorDisplayName = this.props.creatorDisplayName;

    if (creatorUsername && creatorUsername !== creatorDisplayName) {
      creatorDisplayName += ' (@' + creatorUsername + ')';
    }

    let deleteButton = null;

    if (emoji.creator_id === this.props.currentUserId) {
      deleteButton = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_permissions_gates_any_team_permission_gate__WEBPACK_IMPORTED_MODULE_6__["default"], {
        permissions: [mattermost_redux_constants_permissions__WEBPACK_IMPORTED_MODULE_3___default.a.DELETE_EMOJIS]
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_emoji_delete_emoji_modal_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onDelete: this.handleDelete
      }));
    } else {
      deleteButton = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_permissions_gates_any_team_permission_gate__WEBPACK_IMPORTED_MODULE_6__["default"], {
        permissions: [mattermost_redux_constants_permissions__WEBPACK_IMPORTED_MODULE_3___default.a.DELETE_EMOJIS]
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_permissions_gates_any_team_permission_gate__WEBPACK_IMPORTED_MODULE_6__["default"], {
        permissions: [mattermost_redux_constants_permissions__WEBPACK_IMPORTED_MODULE_3___default.a.DELETE_OTHERS_EMOJIS]
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_emoji_delete_emoji_modal_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onDelete: this.handleDelete
      })));
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
      className: "backstage-list__item"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      className: "emoji-list__name"
    }, ':' + emoji.name + ':'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      className: "emoji-list__image"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "emoticon",
      style: {
        backgroundImage: 'url(' + mattermost_redux_client__WEBPACK_IMPORTED_MODULE_4__["Client4"].getCustomEmojiImageUrl(emoji.id) + ')'
      }
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      className: "emoji-list__creator"
    }, creatorDisplayName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      className: "emoji-list-item_actions"
    }, deleteButton));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(EmojiListItem, "propTypes", {
  emoji: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  currentUserId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  creatorDisplayName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  creatorUsername: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  currentTeam: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  onDelete: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    deleteCustomEmoji: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
  }).isRequired
});

_defineProperty(EmojiListItem, "defaultProps", {
  emoji: {},
  currentUserId: '',
  currentTeam: {},
  creatorDisplayName: ''
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(EmojiListItem, "EmojiListItem", "/home/pdxuan/Desktop/mattermost-webapp/components/emoji/emoji_list_item/emoji_list_item.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/emoji/emoji_list_item/index.js":
/*!***************************************************!*\
  !*** ./components/emoji/emoji_list_item/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/selectors/entities/users */ "./node_modules/mattermost-redux/selectors/entities/users.js");
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mattermost-redux/selectors/entities/teams */ "./node_modules/mattermost-redux/selectors/entities/teams.js");
/* harmony import */ var mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mattermost_redux_actions_emojis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mattermost-redux/actions/emojis */ "./node_modules/mattermost-redux/actions/emojis.js");
/* harmony import */ var mattermost_redux_actions_emojis__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_emojis__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");
/* harmony import */ var _emoji_list_item_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./emoji_list_item.jsx */ "./components/emoji/emoji_list_item/emoji_list_item.jsx");
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
  const emoji = state.entities.emojis.customEmoji[ownProps.emojiId];
  const creator = Object(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_2__["getUser"])(state, emoji.creator_id);
  return {
    emoji,
    creatorDisplayName: Object(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_5__["getDisplayNameByUser"])(creator),
    creatorUsername: creator ? creator.username : '',
    currentUserId: Object(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_2__["getCurrentUserId"])(state),
    currentTeam: Object(mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_3__["getCurrentTeam"])(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
      deleteCustomEmoji: mattermost_redux_actions_emojis__WEBPACK_IMPORTED_MODULE_4__["deleteCustomEmoji"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_emoji_list_item_jsx__WEBPACK_IMPORTED_MODULE_6__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/emoji/emoji_list_item/index.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/emoji/emoji_list_item/index.js");
  reactHotLoader.register(_default, "default", "/home/pdxuan/Desktop/mattermost-webapp/components/emoji/emoji_list_item/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/emoji/emoji_page.jsx":
/*!*****************************************!*\
  !*** ./components/emoji/emoji_page.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EmojiPage; });
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var mattermost_redux_constants_permissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mattermost-redux/constants/permissions */ "./node_modules/mattermost-redux/constants/permissions.js");
/* harmony import */ var mattermost_redux_constants_permissions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_constants_permissions__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");
/* harmony import */ var components_permissions_gates_any_team_permission_gate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/permissions_gates/any_team_permission_gate */ "./components/permissions_gates/any_team_permission_gate/index.js");
/* harmony import */ var _emoji_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./emoji_list */ "./components/emoji/emoji_list/index.js");


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








class EmojiPage extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "updateTitle", () => {
      document.title = utils_utils_jsx__WEBPACK_IMPORTED_MODULE_6__["localizeMessage"]('custom_emoji.header', 'Custom Emoji') + ' - ' + this.props.teamDisplayName + ' ' + this.props.siteName;
    });
  }

  componentDidMount() {
    this.updateTitle();
    this.props.actions.loadRolesIfNeeded(['system_admin', 'team_admin', 'system_user', 'team_user']);
  }

  componentDidUpdate(prevProps) {
    if (this.props.siteName !== prevProps.siteName) {
      this.updateTitle();
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "backstage-content emoji-list"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "backstage-header"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "emoji_list.header",
      defaultMessage: "Custom Emoji"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_permissions_gates_any_team_permission_gate__WEBPACK_IMPORTED_MODULE_7__["default"], {
      permissions: [mattermost_redux_constants_permissions__WEBPACK_IMPORTED_MODULE_5___default.a.CREATE_EMOJIS]
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      className: "add-link",
      to: '/' + this.props.teamName + '/emoji/add'
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      type: "button",
      className: "btn btn-primary"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "emoji_list.add",
      defaultMessage: "Add Custom Emoji"
    }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_emoji_list__WEBPACK_IMPORTED_MODULE_8__["default"], {
      scrollToTop: this.props.scrollToTop
    }));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(EmojiPage, "propTypes", {
  teamId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  teamName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  teamDisplayName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  siteName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  scrollToTop: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    loadRolesIfNeeded: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
  }).isRequired
});

_defineProperty(EmojiPage, "defaultProps", {
  teamName: '',
  teamDisplayName: '',
  siteName: ''
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(EmojiPage, "EmojiPage", "/home/pdxuan/Desktop/mattermost-webapp/components/emoji/emoji_page.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/emoji/index.js":
/*!***********************************!*\
  !*** ./components/emoji/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/selectors/entities/teams */ "./node_modules/mattermost-redux/selectors/entities/teams.js");
/* harmony import */ var mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mattermost_redux_actions_roles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mattermost-redux/actions/roles */ "./node_modules/mattermost-redux/actions/roles.js");
/* harmony import */ var mattermost_redux_actions_roles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_roles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emoji_page_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./emoji_page.jsx */ "./components/emoji/emoji_page.jsx");
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
  const team = Object(mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_2__["getCurrentTeam"])(state) || {};
  return {
    teamId: team.id,
    teamName: team.name,
    teamDisplayName: team.display_name,
    siteName: state.entities.general.config.SiteName
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
      loadRolesIfNeeded: mattermost_redux_actions_roles__WEBPACK_IMPORTED_MODULE_3__["loadRolesIfNeeded"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_emoji_page_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/emoji/index.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/emoji/index.js");
  reactHotLoader.register(_default, "default", "/home/pdxuan/Desktop/mattermost-webapp/components/emoji/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/abstract_command.jsx":
/*!******************************************************!*\
  !*** ./components/integrations/abstract_command.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbstractCommand; });
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var components_backstage_components_backstage_header_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/backstage/components/backstage_header.jsx */ "./components/backstage/components/backstage_header.jsx");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/constants */ "./utils/constants.jsx");
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");
/* harmony import */ var components_form_error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/form_error */ "./components/form_error.tsx");
/* harmony import */ var components_spinner_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/spinner_button */ "./components/spinner_button.tsx");
/* harmony import */ var components_localized_input_localized_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/localized_input/localized_input */ "./components/localized_input/localized_input.tsx");
/* harmony import */ var utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! utils/i18n.jsx */ "./utils/i18n.jsx");



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











const REQUEST_POST = 'P';
const REQUEST_GET = 'G';
class AbstractCommand extends react__WEBPACK_IMPORTED_MODULE_2___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "getStateFromCommand", command => {
      return {
        displayName: command.display_name || '',
        description: command.description || '',
        trigger: command.trigger || '',
        url: command.url || '',
        method: command.method || REQUEST_POST,
        username: command.username || '',
        iconUrl: command.icon_url || '',
        autocomplete: command.auto_complete || false,
        autocompleteHint: command.auto_complete_hint || '',
        autocompleteDescription: command.auto_complete_desc || '',
        saving: false,
        clientError: null
      };
    });

    _defineProperty(this, "handleSubmit", e => {
      e.preventDefault();

      if (this.state.saving) {
        return;
      }

      this.setState({
        saving: true,
        clientError: ''
      });
      let triggerWord = this.state.trigger.trim().toLowerCase();

      if (triggerWord.indexOf('/') === 0) {
        triggerWord = triggerWord.substr(1);
      }

      const command = {
        display_name: this.state.displayName,
        description: this.state.description,
        trigger: triggerWord,
        url: this.state.url.trim(),
        method: this.state.method,
        username: this.state.username,
        icon_url: this.state.iconUrl,
        auto_complete: this.state.autocomplete,
        team_id: this.props.team.id
      };

      if (command.auto_complete) {
        command.auto_complete_desc = this.state.autocompleteDescription;
        command.auto_complete_hint = this.state.autocompleteHint;
      }

      if (!command.trigger) {
        this.setState({
          saving: false,
          clientError: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
            id: "add_command.triggerRequired",
            defaultMessage: "A trigger word is required"
          })
        });
        return;
      }

      if (command.trigger.indexOf('/') === 0) {
        this.setState({
          saving: false,
          clientError: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
            id: "add_command.triggerInvalidSlash",
            defaultMessage: "A trigger word cannot begin with a /"
          })
        });
        return;
      }

      if (command.trigger.indexOf(' ') !== -1) {
        this.setState({
          saving: false,
          clientError: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
            id: "add_command.triggerInvalidSpace",
            defaultMessage: "A trigger word must not contain spaces"
          })
        });
        return;
      }

      if (command.trigger.length < utils_constants__WEBPACK_IMPORTED_MODULE_7__["default"].MIN_TRIGGER_LENGTH || command.trigger.length > utils_constants__WEBPACK_IMPORTED_MODULE_7__["default"].MAX_TRIGGER_LENGTH) {
        this.setState({
          saving: false,
          clientError: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
            id: "add_command.triggerInvalidLength",
            defaultMessage: "A trigger word must contain between {min} and {max} characters",
            values: {
              min: utils_constants__WEBPACK_IMPORTED_MODULE_7__["default"].MIN_TRIGGER_LENGTH,
              max: utils_constants__WEBPACK_IMPORTED_MODULE_7__["default"].MAX_TRIGGER_LENGTH
            }
          })
        });
        return;
      }

      if (!command.url) {
        this.setState({
          saving: false,
          clientError: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
            id: "add_command.urlRequired",
            defaultMessage: "A request URL is required"
          })
        });
        return;
      }

      this.props.action(command).then(() => this.setState({
        saving: false
      }));
    });

    _defineProperty(this, "updateDisplayName", e => {
      this.setState({
        displayName: e.target.value
      });
    });

    _defineProperty(this, "updateDescription", e => {
      this.setState({
        description: e.target.value
      });
    });

    _defineProperty(this, "updateTrigger", e => {
      this.setState({
        trigger: e.target.value
      });
    });

    _defineProperty(this, "updateUrl", e => {
      this.setState({
        url: e.target.value
      });
    });

    _defineProperty(this, "updateMethod", e => {
      this.setState({
        method: e.target.value
      });
    });

    _defineProperty(this, "updateUsername", e => {
      this.setState({
        username: e.target.value
      });
    });

    _defineProperty(this, "updateIconUrl", e => {
      this.setState({
        iconUrl: e.target.value
      });
    });

    _defineProperty(this, "updateAutocomplete", e => {
      this.setState({
        autocomplete: e.target.checked
      });
    });

    _defineProperty(this, "updateAutocompleteHint", e => {
      this.setState({
        autocompleteHint: e.target.value
      });
    });

    _defineProperty(this, "updateAutocompleteDescription", e => {
      this.setState({
        autocompleteDescription: e.target.value
      });
    });

    this.state = this.getStateFromCommand(this.props.initialCommand || {});
  }

  render() {
    let autocompleteHint = null;
    let autocompleteDescription = null;

    if (this.state.autocomplete) {
      autocompleteHint = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "control-label col-sm-4",
        htmlFor: "autocompleteHint"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "add_command.autocompleteHint",
        defaultMessage: "Autocomplete Hint"
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "col-md-5 col-sm-8"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_localized_input_localized_input__WEBPACK_IMPORTED_MODULE_11__["default"], {
        id: "autocompleteHint",
        type: "text",
        maxLength: "1024",
        className: "form-control",
        value: this.state.autocompleteHint,
        onChange: this.updateAutocompleteHint,
        placeholder: {
          id: Object(utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_12__["t"])('add_command.autocompleteHint.placeholder'),
          defaultMessage: 'Example: [Patient Name]'
        }
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "form__help"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "add_command.autocompleteHint.help",
        defaultMessage: "(Optional) Arguments associated with your slash command, displayed as help in the autocomplete list."
      }))));
      autocompleteDescription = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "control-label col-sm-4",
        htmlFor: "autocompleteDescription"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "add_command.autocompleteDescription",
        defaultMessage: "Autocomplete Description"
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "col-md-5 col-sm-8"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_localized_input_localized_input__WEBPACK_IMPORTED_MODULE_11__["default"], {
        id: "description",
        type: "text",
        maxLength: "128",
        className: "form-control",
        value: this.state.autocompleteDescription,
        onChange: this.updateAutocompleteDescription,
        placeholder: {
          id: Object(utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_12__["t"])('add_command.autocompleteDescription.placeholder'),
          defaultMessage: 'Example: "Returns search results for patient records"'
        }
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "form__help"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "add_command.autocompleteDescription.help",
        defaultMessage: "(Optional) Short description of slash command for the autocomplete list."
      }))));
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "backstage-content row"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_backstage_components_backstage_header_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: '/' + this.props.team.name + '/integrations/commands'
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "installed_command.header",
      defaultMessage: "Slash Commands"
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: this.props.header.id,
      defaultMessage: this.props.header.defaultMessage
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "backstage-form"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
      className: "form-horizontal",
      onSubmit: this.handleSubmit
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "displayName"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "add_command.displayName",
      defaultMessage: "Title"
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      id: "displayName",
      type: "text",
      maxLength: "64",
      className: "form-control",
      value: this.state.displayName,
      onChange: this.updateDisplayName
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "form__help"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "add_command.displayName.help",
      defaultMessage: "Choose a title to be displayed on the slash command settings page. Maximum 64 characters."
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "description"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "add_command.description",
      defaultMessage: "Description"
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      id: "description",
      type: "text",
      maxLength: "128",
      className: "form-control",
      value: this.state.description,
      onChange: this.updateDescription
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "form__help"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "add_command.description.help",
      defaultMessage: "Description for your incoming webhook."
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "trigger"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "add_command.trigger",
      defaultMessage: "Command Trigger Word"
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_localized_input_localized_input__WEBPACK_IMPORTED_MODULE_11__["default"], {
      id: "trigger",
      type: "text",
      maxLength: utils_constants__WEBPACK_IMPORTED_MODULE_7__["default"].MAX_TRIGGER_LENGTH,
      className: "form-control",
      value: this.state.trigger,
      onChange: this.updateTrigger,
      placeholder: {
        id: Object(utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_12__["t"])('add_command.trigger.placeholder'),
        defaultMessage: 'Command trigger e.g. "hello" not including the slash'
      }
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "form__help"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "add_command.trigger.help",
      defaultMessage: "Trigger word must be unique, and cannot begin with a slash or contain any spaces."
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "form__help"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "add_command.trigger.helpExamples",
      defaultMessage: "Examples: client, employee, patient, weather"
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "form__help"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "add_command.trigger.helpReserved",
      defaultMessage: "Reserved: {link}",
      values: {
        link: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
          href: "https://docs.mattermost.com/help/messaging/executing-commands.html#built-in-commands",
          target: "_blank",
          rel: "noopener noreferrer"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          id: "add_command.trigger.helpReservedLinkText",
          defaultMessage: "see list of built-in slash commands"
        }))
      }
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "url"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "add_command.url",
      defaultMessage: "Request URL"
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_localized_input_localized_input__WEBPACK_IMPORTED_MODULE_11__["default"], {
      id: "url",
      type: "text",
      maxLength: "1024",
      className: "form-control",
      value: this.state.url,
      onChange: this.updateUrl,
      placeholder: {
        id: Object(utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_12__["t"])('add_command.url.placeholder'),
        defaultMessage: 'Must start with http:// or https://'
      }
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "form__help"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "add_command.url.help",
      defaultMessage: "The callback URL to receive the HTTP POST or GET event request when the slash command is run."
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "method"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "add_command.method",
      defaultMessage: "Request Method"
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("select", {
      id: "method",
      className: "form-control",
      value: this.state.method,
      onChange: this.updateMethod
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
      value: REQUEST_POST
    }, utils_utils_jsx__WEBPACK_IMPORTED_MODULE_8__["localizeMessage"]('add_command.method.post', 'POST')), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
      value: REQUEST_GET
    }, utils_utils_jsx__WEBPACK_IMPORTED_MODULE_8__["localizeMessage"]('add_command.method.get', 'GET'))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "form__help"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "add_command.method.help",
      defaultMessage: "The type of command request issued to the Request URL."
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "username"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "add_command.username",
      defaultMessage: "Response Username"
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_localized_input_localized_input__WEBPACK_IMPORTED_MODULE_11__["default"], {
      id: "username",
      type: "text",
      maxLength: "64",
      className: "form-control",
      value: this.state.username,
      onChange: this.updateUsername,
      placeholder: {
        id: Object(utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_12__["t"])('add_command.username.placeholder'),
        defaultMessage: 'Username'
      }
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "form__help"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "add_command.username.help",
      defaultMessage: "(Optional) Choose a username override for responses for this slash command. Usernames can consist of up to 22 characters consisting of lowercase letters, numbers and they symbols \"-\", \"_\", and \".\" ."
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "iconUrl"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "add_command.iconUrl",
      defaultMessage: "Response Icon"
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_localized_input_localized_input__WEBPACK_IMPORTED_MODULE_11__["default"], {
      id: "iconUrl",
      type: "text",
      maxLength: "1024",
      className: "form-control",
      value: this.state.iconUrl,
      onChange: this.updateIconUrl,
      placeholder: {
        id: Object(utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_12__["t"])('add_command.iconUrl.placeholder'),
        defaultMessage: 'https://www.example.com/myicon.png'
      }
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "form__help"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "add_command.iconUrl.help",
      defaultMessage: "(Optional) Choose a profile picture override for the post responses to this slash command. Enter the URL of a .png or .jpg file at least 128 pixels by 128 pixels."
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "autocomplete"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "add_command.autocomplete",
      defaultMessage: "Autocomplete"
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "col-md-5 col-sm-8 checkbox"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      id: "autocomplete",
      type: "checkbox",
      checked: this.state.autocomplete,
      onChange: this.updateAutocomplete
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "form__help"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "add_command.autocomplete.help",
      defaultMessage: "(Optional) Show slash command in autocomplete list."
    })))), autocompleteHint, autocompleteDescription, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "backstage-form__footer"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_form_error__WEBPACK_IMPORTED_MODULE_9__["default"], {
      type: "backstage",
      errors: [this.props.serverError, this.state.clientError]
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      className: "btn btn-link btn-sm",
      to: '/' + this.props.team.name + '/integrations/commands'
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "add_command.cancel",
      defaultMessage: "Cancel"
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_spinner_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
      className: "btn btn-primary",
      type: "submit",
      spinning: this.state.saving,
      spinningText: utils_utils_jsx__WEBPACK_IMPORTED_MODULE_8__["localizeMessage"](this.props.loading.id, this.props.loading.defaultMessage),
      onClick: this.handleSubmit,
      id: "saveCommand"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: this.props.footer.id,
      defaultMessage: this.props.footer.defaultMessage
    })), this.props.renderExtra))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(AbstractCommand, "propTypes", {
  /**
  * The current team
  */
  team: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
  * The header text to render, has id and defaultMessage
  */
  header: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
  * The footer text to render, has id and defaultMessage
  */
  footer: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
  * The spinner loading text to render, has id and defaultMessage
  */
  loading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * Any extra component/node to render
   */
  renderExtra: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node.isRequired,

  /**
  * The server error text after a failed action
  */
  serverError: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,

  /**
  * The Command used to set the initial state
  */
  initialCommand: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
  * The async function to run when the action button is pressed
  */
  action: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(REQUEST_POST, "REQUEST_POST", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/abstract_command.jsx");
  reactHotLoader.register(REQUEST_GET, "REQUEST_GET", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/abstract_command.jsx");
  reactHotLoader.register(AbstractCommand, "AbstractCommand", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/abstract_command.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/abstract_incoming_webhook.jsx":
/*!***************************************************************!*\
  !*** ./components/integrations/abstract_incoming_webhook.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbstractIncomingWebhook; });
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var components_backstage_components_backstage_header_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/backstage/components/backstage_header.jsx */ "./components/backstage/components/backstage_header.jsx");
/* harmony import */ var components_channel_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/channel_select */ "./components/channel_select/index.js");
/* harmony import */ var components_form_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/form_error */ "./components/form_error.tsx");
/* harmony import */ var components_spinner_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/spinner_button */ "./components/spinner_button.tsx");
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");


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









class AbstractIncomingWebhook extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "getStateFromHook", hook => {
      return {
        displayName: hook.display_name || '',
        description: hook.description || '',
        channelId: hook.channel_id || '',
        channelLocked: hook.channel_locked || false,
        username: hook.username || '',
        iconURL: hook.icon_url || '',
        saving: false,
        serverError: '',
        clientError: null
      };
    });

    _defineProperty(this, "handleSubmit", e => {
      e.preventDefault();

      if (this.state.saving) {
        return;
      }

      this.setState({
        saving: true,
        serverError: '',
        clientError: ''
      });

      if (!this.state.channelId) {
        this.setState({
          saving: false,
          clientError: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
            id: "add_incoming_webhook.channelRequired",
            defaultMessage: "A valid channel is required"
          })
        });
        return;
      }

      const hook = {
        channel_id: this.state.channelId,
        channel_locked: this.state.channelLocked,
        display_name: this.state.displayName,
        description: this.state.description,
        username: this.state.username,
        icon_url: this.state.iconURL
      };
      this.props.action(hook).then(() => this.setState({
        saving: false
      }));
    });

    _defineProperty(this, "updateDisplayName", e => {
      this.setState({
        displayName: e.target.value
      });
    });

    _defineProperty(this, "updateDescription", e => {
      this.setState({
        description: e.target.value
      });
    });

    _defineProperty(this, "updateChannelId", e => {
      this.setState({
        channelId: e.target.value
      });
    });

    _defineProperty(this, "updateChannelLocked", e => {
      this.setState({
        channelLocked: e.target.checked
      });
    });

    _defineProperty(this, "updateUsername", e => {
      this.setState({
        username: e.target.value
      });
    });

    _defineProperty(this, "updateIconURL", e => {
      this.setState({
        iconURL: e.target.value
      });
    });

    this.state = this.getStateFromHook(this.props.initialHook || {});
  }

  render() {
    var headerToRender = this.props.header;
    var footerToRender = this.props.footer;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "backstage-content"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_backstage_components_backstage_header_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/".concat(this.props.team.name, "/integrations/incoming_webhooks")
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "installed_incoming_webhooks.header",
      defaultMessage: "Incoming Webhooks"
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: headerToRender.id,
      defaultMessage: headerToRender.defaultMessage
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "backstage-form"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
      className: "form-horizontal",
      onSubmit: this.handleSubmit
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "displayName"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "add_incoming_webhook.displayName",
      defaultMessage: "Title"
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      id: "displayName",
      type: "text",
      maxLength: "64",
      className: "form-control",
      value: this.state.displayName,
      onChange: this.updateDisplayName
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "form__help"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "add_incoming_webhook.displayName.help",
      defaultMessage: "Choose a title to be displayed on the webhook settings page. Maximum 64 characters."
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "description"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "add_incoming_webhook.description",
      defaultMessage: "Description"
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      id: "description",
      type: "text",
      maxLength: "500",
      className: "form-control",
      value: this.state.description,
      onChange: this.updateDescription
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "form__help"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "add_incoming_webhook.description.help",
      defaultMessage: "Description for your incoming webhook."
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "channelId"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "add_incoming_webhook.channel",
      defaultMessage: "Channel"
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_channel_select__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: "channelId",
      value: this.state.channelId,
      onChange: this.updateChannelId,
      selectOpen: true,
      selectPrivate: true
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "form__help"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "add_incoming_webhook.channel.help",
      defaultMessage: "The default public or private channel that receives the webhook payloads. You must belong to the private channel when setting up the webhook."
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "channelLocked"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "add_incoming_webhook.channelLocked",
      defaultMessage: "Lock to this channel"
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "col-md-5 col-sm-8 checkbox"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      id: "channelLocked",
      type: "checkbox",
      checked: this.state.channelLocked,
      onChange: this.updateChannelLocked
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "form__help"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "add_incoming_webhook.channelLocked.help",
      defaultMessage: "If set, the incoming webhook can only post to the channel selected above."
    })))), this.props.enablePostUsernameOverride && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "username"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "add_incoming_webhook.username",
      defaultMessage: "Username"
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      id: "username",
      type: "text",
      maxLength: "22",
      className: "form-control",
      value: this.state.username,
      onChange: this.updateUsername
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "form__help"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "add_incoming_webhook.username.help",
      defaultMessage: "Choose the username this integration will post as. Usernames can be up to 22 characters, and may contain lowercase letters, numbers and the symbols \"-\", \"_\", and \".\"."
    })))), this.props.enablePostIconOverride && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "iconURL"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "add_incoming_webhook.icon_url",
      defaultMessage: "Profile Picture"
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      id: "iconURL",
      type: "text",
      maxLength: "1024",
      className: "form-control",
      value: this.state.iconURL,
      onChange: this.updateIconURL
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "form__help"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "add_incoming_webhook.icon_url.help",
      defaultMessage: "Choose the profile picture this integration will use when posting. Enter the URL of a .png or .jpg file at least 128 pixels by 128 pixels."
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "backstage-form__footer"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_form_error__WEBPACK_IMPORTED_MODULE_7__["default"], {
      type: "backstage",
      errors: [this.props.serverError, this.state.clientError]
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      className: "btn btn-link btn-sm",
      to: "/".concat(this.props.team.name, "/integrations/incoming_webhooks")
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "add_incoming_webhook.cancel",
      defaultMessage: "Cancel"
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_spinner_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: "btn btn-primary",
      type: "submit",
      spinning: this.state.saving,
      spinningText: Object(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_9__["localizeMessage"])(this.props.loading.id, this.props.loading.defaultMessage),
      onClick: this.handleSubmit,
      id: "saveWebhook"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: footerToRender.id,
      defaultMessage: footerToRender.defaultMessage
    }))))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(AbstractIncomingWebhook, "propTypes", {
  /**
  * The current team
  */
  team: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,

  /**
  * The header text to render, has id and defaultMessage
  */
  header: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,

  /**
  * The footer text to render, has id and defaultMessage
  */
  footer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,

  /**
  * The spinner loading text to render, has id and defaultMessage
  */
  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,

  /**
  * The server error text after a failed action
  */
  serverError: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,

  /**
  * The hook used to set the initial state
  */
  initialHook: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
  * Whether to allow configuration of the default post username.
  */
  enablePostUsernameOverride: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,

  /**
  * Whether to allow configuration of the default post icon.
  */
  enablePostIconOverride: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,

  /**
  * The async function to run when the action button is pressed
  */
  action: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AbstractIncomingWebhook, "AbstractIncomingWebhook", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/abstract_incoming_webhook.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/abstract_oauth_app.jsx":
/*!********************************************************!*\
  !*** ./components/integrations/abstract_oauth_app.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbstractOAuthApp; });
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mattermost-redux/constants */ "./node_modules/mattermost-redux/constants/index.js");
/* harmony import */ var mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");
/* harmony import */ var components_backstage_components_backstage_header_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/backstage/components/backstage_header.jsx */ "./components/backstage/components/backstage_header.jsx");
/* harmony import */ var components_form_error__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/form_error */ "./components/form_error.tsx");
/* harmony import */ var components_spinner_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/spinner_button */ "./components/spinner_button.tsx");
/* harmony import */ var components_permissions_gates_system_permission_gate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/permissions_gates/system_permission_gate */ "./components/permissions_gates/system_permission_gate/index.js");





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










class AbstractOAuthApp extends react__WEBPACK_IMPORTED_MODULE_4___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "getStateFromApp", app => {
      return {
        name: app.name || '',
        description: app.description || '',
        homepage: app.homepage || '',
        icon_url: app.icon_url || '',
        callbackUrls: app.callback_urls ? app.callback_urls.join('\n') : '',
        is_trusted: app.is_trusted || false,
        has_icon: Boolean(app.icon_url),
        saving: false,
        clientError: null
      };
    });

    _defineProperty(this, "imageLoaded", () => {
      this.setState({
        has_icon: true,
        icon_url: this.refs.icon_url.value
      });
    });

    _defineProperty(this, "handleSubmit", e => {
      e.preventDefault();

      if (this.state.saving) {
        return;
      }

      this.setState({
        saving: true,
        clientError: ''
      });

      if (!this.state.name) {
        this.setState({
          saving: false,
          clientError: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
            id: "add_oauth_app.nameRequired",
            defaultMessage: "Name for the OAuth 2.0 application is required."
          })
        });
        return;
      }

      if (!this.state.description) {
        this.setState({
          saving: false,
          clientError: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
            id: "add_oauth_app.descriptionRequired",
            defaultMessage: "Description for the OAuth 2.0 application is required."
          })
        });
        return;
      }

      if (!this.state.homepage) {
        this.setState({
          saving: false,
          clientError: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
            id: "add_oauth_app.homepageRequired",
            defaultMessage: "Homepage for the OAuth 2.0 application is required."
          })
        });
        return;
      }

      const callbackUrls = [];

      for (let callbackUrl of this.state.callbackUrls.split('\n')) {
        callbackUrl = callbackUrl.trim();

        if (callbackUrl.length > 0) {
          callbackUrls.push(callbackUrl);
        }
      }

      if (callbackUrls.length === 0) {
        this.setState({
          saving: false,
          clientError: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
            id: "add_oauth_app.callbackUrlsRequired",
            defaultMessage: "One or more callback URLs are required."
          })
        });
        return;
      }

      const app = {
        name: this.state.name,
        callback_urls: callbackUrls,
        homepage: this.state.homepage,
        description: this.state.description,
        is_trusted: this.state.is_trusted,
        icon_url: this.state.icon_url
      };
      this.props.action(app).then(() => this.setState({
        saving: false
      }));
    });

    _defineProperty(this, "updateName", e => {
      this.setState({
        name: e.target.value
      });
    });

    _defineProperty(this, "updateTrusted", e => {
      this.setState({
        is_trusted: e.target.value === 'true'
      });
    });

    _defineProperty(this, "updateDescription", e => {
      this.setState({
        description: e.target.value
      });
    });

    _defineProperty(this, "updateHomepage", e => {
      this.setState({
        homepage: e.target.value
      });
    });

    _defineProperty(this, "updateIconUrl", e => {
      this.setState({
        has_icon: false,
        icon_url: e.target.value
      });
      this.image.src = e.target.value;
    });

    _defineProperty(this, "updateCallbackUrls", e => {
      this.setState({
        callbackUrls: e.target.value
      });
    });

    this.image = new Image();
    this.image.onload = this.imageLoaded;
    this.state = this.getStateFromApp(this.props.initialApp || {});
  }

  render() {
    const headerToRender = this.props.header;
    const footerToRender = this.props.footer;
    const renderExtra = this.props.renderExtra;
    let icon;

    if (this.state.has_icon) {
      icon = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "integration__icon"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
        alt: 'integration icon',
        src: this.state.icon_url
      }));
    }

    const trusted = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_permissions_gates_system_permission_gate__WEBPACK_IMPORTED_MODULE_13__["default"], {
      permissions: [mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_8__["Permissions"].MANAGE_SYSTEM]
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "is_trusted"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "installed_oauth_apps.trusted",
      defaultMessage: "Is Trusted"
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
      className: "radio-inline"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
      type: "radio",
      value: "true",
      name: "is_trusted",
      checked: this.state.is_trusted,
      onChange: this.updateTrusted
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "installed_oauth_apps.trusted.yes",
      defaultMessage: "Yes"
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
      className: "radio-inline"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
      type: "radio",
      value: "false",
      name: "is_trusted",
      checked: !this.state.is_trusted,
      onChange: this.updateTrusted
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "installed_oauth_apps.trusted.no",
      defaultMessage: "No"
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "form__help"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "add_oauth_app.trusted.help",
      defaultMessage: "When true, the OAuth 2.0 application is considered trusted by the Mattermost server and doesn't require the user to accept authorization. When false, an additional window will appear, asking the user to accept or deny the authorization."
    })))));
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "backstage-content"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_backstage_components_backstage_header_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
      to: "/".concat(this.props.team.name, "/integrations/oauth2-apps")
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "installed_oauth_apps.header",
      defaultMessage: "Installed OAuth2 Apps"
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: headerToRender.id,
      defaultMessage: headerToRender.defaultMessage
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "backstage-form"
    }, icon, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("form", {
      className: "form-horizontal"
    }, trusted, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "name"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "installed_oauth_apps.name",
      defaultMessage: "Display Name"
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
      id: "name",
      type: "text",
      maxLength: "64",
      className: "form-control",
      value: this.state.name,
      onChange: this.updateName
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "form__help"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "add_oauth_app.name.help",
      defaultMessage: "Display name for your OAuth 2.0 application made of up to 64 characters."
    })))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "description"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "installed_oauth_apps.description",
      defaultMessage: "Description"
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
      id: "description",
      type: "text",
      maxLength: "512",
      className: "form-control",
      value: this.state.description,
      onChange: this.updateDescription
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "form__help"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "add_oauth_app.description.help",
      defaultMessage: "Description for your OAuth 2.0 application."
    })))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "homepage"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "installed_oauth_apps.homepage",
      defaultMessage: "Homepage"
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
      id: "homepage",
      type: "url",
      maxLength: "256",
      className: "form-control",
      value: this.state.homepage,
      onChange: this.updateHomepage
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "form__help"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "add_oauth_app.homepage.help",
      defaultMessage: "The URL for the homepage of the OAuth 2.0 application. Make sure you use HTTP or HTTPS in your URL depending on your server configuration."
    })))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "icon_url"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "installed_oauth_apps.iconUrl",
      defaultMessage: "Icon URL"
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
      id: "icon_url",
      ref: "icon_url",
      type: "url",
      maxLength: "512",
      className: "form-control",
      value: this.state.icon_url,
      onChange: this.updateIconUrl
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "form__help"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "add_oauth_app.icon.help",
      defaultMessage: "The URL for the homepage of the OAuth 2.0 application. Make sure you use HTTP or HTTPS in your URL depending on your server configuration."
    })))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "callbackUrls"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "installed_oauth_apps.callbackUrls",
      defaultMessage: "Callback URLs (One Per Line)"
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("textarea", {
      id: "callbackUrls",
      rows: "3",
      maxLength: "1024",
      className: "form-control",
      value: this.state.callbackUrls,
      onChange: this.updateCallbackUrls
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "form__help"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "add_oauth_app.callbackUrls.help",
      defaultMessage: "The redirect URIs to which the service will redirect users after accepting or denying authorization of your application, and which will handle authorization codes or access tokens. Must be a valid URL and start with http:// or https://."
    })))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "backstage-form__footer"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_form_error__WEBPACK_IMPORTED_MODULE_11__["default"], {
      type: "backstage",
      errors: [this.props.serverError, this.state.clientError]
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
      className: "btn btn-link btn-sm",
      to: "/".concat(this.props.team.name, "/integrations/oauth2-apps")
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "installed_oauth_apps.cancel",
      defaultMessage: "Cancel"
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_spinner_button__WEBPACK_IMPORTED_MODULE_12__["default"], {
      className: "btn btn-primary",
      type: "submit",
      spinning: this.state.saving,
      spinningText: Object(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_9__["localizeMessage"])(this.props.loading.id, this.props.loading.defaultMessage),
      onClick: this.handleSubmit,
      id: "saveOauthApp"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: footerToRender.id,
      defaultMessage: footerToRender.defaultMessage
    })), renderExtra))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(AbstractOAuthApp, "propTypes", {
  /**
  * The current team
  */
  team: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,

  /**
  * The header text to render, has id and defaultMessage
  */
  header: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,

  /**
  * The footer text to render, has id and defaultMessage
  */
  footer: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,

  /**
  * The spinner loading text to render, has id and defaultMessage
  */
  loading: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,

  /**
   * Any extra component/node to render
   */
  renderExtra: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node.isRequired,

  /**
  * The server error text after a failed action
  */
  serverError: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,

  /**
  * The OAuthApp used to set the initial state
  */
  initialApp: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,

  /**
  * The async function to run when the action button is pressed
  */
  action: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AbstractOAuthApp, "AbstractOAuthApp", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/abstract_oauth_app.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/abstract_outgoing_webhook.jsx":
/*!***************************************************************!*\
  !*** ./components/integrations/abstract_outgoing_webhook.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbstractOutgoingWebhook; });
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");
/* harmony import */ var components_backstage_components_backstage_header_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/backstage/components/backstage_header.jsx */ "./components/backstage/components/backstage_header.jsx");
/* harmony import */ var components_channel_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/channel_select */ "./components/channel_select/index.js");
/* harmony import */ var components_form_error__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/form_error */ "./components/form_error.tsx");
/* harmony import */ var components_spinner_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/spinner_button */ "./components/spinner_button.tsx");





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









class AbstractOutgoingWebhook extends react__WEBPACK_IMPORTED_MODULE_5___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "getStateFromHook", hook => {
      let triggerWords = '';

      if (hook.trigger_words) {
        let i = 0;

        for (i = 0; i < hook.trigger_words.length; i++) {
          triggerWords += hook.trigger_words[i] + '\n';
        }
      }

      let callbackUrls = '';

      if (hook.callback_urls) {
        let i = 0;

        for (i = 0; i < hook.callback_urls.length; i++) {
          callbackUrls += hook.callback_urls[i] + '\n';
        }
      }

      return {
        displayName: hook.display_name || '',
        description: hook.description || '',
        contentType: hook.content_type || 'application/x-www-form-urlencoded',
        channelId: hook.channel_id || '',
        triggerWords,
        triggerWhen: hook.trigger_when || 0,
        callbackUrls,
        saving: false,
        clientError: null,
        username: hook.username || '',
        iconURL: hook.icon_url || ''
      };
    });

    _defineProperty(this, "handleSubmit", e => {
      e.preventDefault();

      if (this.state.saving) {
        return;
      }

      this.setState({
        saving: true,
        clientError: ''
      });
      const triggerWords = [];

      if (this.state.triggerWords) {
        for (let triggerWord of this.state.triggerWords.split('\n')) {
          triggerWord = triggerWord.trim();

          if (triggerWord.length > 0) {
            triggerWords.push(triggerWord);
          }
        }
      }

      if (!this.state.channelId && triggerWords.length === 0) {
        this.setState({
          saving: false,
          clientError: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
            id: "add_outgoing_webhook.triggerWordsOrChannelRequired",
            defaultMessage: "A valid channel or a list of trigger words is required"
          })
        });
        return;
      }

      const callbackUrls = [];

      for (let callbackUrl of this.state.callbackUrls.split('\n')) {
        callbackUrl = callbackUrl.trim();

        if (callbackUrl.length > 0) {
          callbackUrls.push(callbackUrl);
        }
      }

      if (callbackUrls.length === 0) {
        this.setState({
          saving: false,
          clientError: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
            id: "add_outgoing_webhook.callbackUrlsRequired",
            defaultMessage: "One or more callback URLs are required"
          })
        });
        return;
      }

      const hook = {
        team_id: this.props.team.id,
        channel_id: this.state.channelId,
        trigger_words: triggerWords,
        trigger_when: parseInt(this.state.triggerWhen, 10),
        callback_urls: callbackUrls,
        display_name: this.state.displayName,
        content_type: this.state.contentType,
        description: this.state.description,
        username: this.state.username,
        icon_url: this.state.iconURL
      };
      this.props.action(hook).then(() => this.setState({
        saving: false
      }));
    });

    _defineProperty(this, "updateDisplayName", e => {
      this.setState({
        displayName: e.target.value
      });
    });

    _defineProperty(this, "updateDescription", e => {
      this.setState({
        description: e.target.value
      });
    });

    _defineProperty(this, "updateContentType", e => {
      this.setState({
        contentType: e.target.value
      });
    });

    _defineProperty(this, "updateChannelId", e => {
      this.setState({
        channelId: e.target.value
      });
    });

    _defineProperty(this, "updateTriggerWords", e => {
      this.setState({
        triggerWords: e.target.value
      });
    });

    _defineProperty(this, "updateTriggerWhen", e => {
      this.setState({
        triggerWhen: e.target.value
      });
    });

    _defineProperty(this, "updateCallbackUrls", e => {
      this.setState({
        callbackUrls: e.target.value
      });
    });

    _defineProperty(this, "updateUsername", e => {
      this.setState({
        username: e.target.value
      });
    });

    _defineProperty(this, "updateIconURL", e => {
      this.setState({
        iconURL: e.target.value
      });
    });

    this.state = this.getStateFromHook(this.props.initialHook || {});
  }

  render() {
    const contentTypeOption1 = 'application/x-www-form-urlencoded';
    const contentTypeOption2 = 'application/json';
    var headerToRender = this.props.header;
    var footerToRender = this.props.footer;
    var renderExtra = this.props.renderExtra;
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "backstage-content"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_backstage_components_backstage_header_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
      to: "/".concat(this.props.team.name, "/integrations/outgoing_webhooks")
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "installed_outgoing_webhooks.header",
      defaultMessage: "Outgoing Webhooks"
    })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: headerToRender.id,
      defaultMessage: headerToRender.defaultMessage
    })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "backstage-form"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
      className: "form-horizontal",
      onSubmit: this.handleSubmit
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "displayName"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "add_outgoing_webhook.displayName",
      defaultMessage: "Title"
    })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
      id: "displayName",
      type: "text",
      maxLength: "64",
      className: "form-control",
      value: this.state.displayName,
      onChange: this.updateDisplayName
    }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "form__help"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "add_outgoing_webhook.displayName.help",
      defaultMessage: "Choose a title to be displayed on the webhook settings page. Maximum 64 characters."
    })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "description"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "add_outgoing_webhook.description",
      defaultMessage: "Description"
    })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
      id: "description",
      type: "text",
      maxLength: "500",
      className: "form-control",
      value: this.state.description,
      onChange: this.updateDescription
    }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "form__help"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "add_outgoing_webhook.description.help",
      defaultMessage: "Description for your incoming webhook."
    })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "contentType"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "add_outgoing_webhook.content_Type",
      defaultMessage: "Content Type"
    })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("select", {
      className: "form-control",
      value: this.state.contentType,
      onChange: this.updateContentType
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
      value: contentTypeOption1
    }, contentTypeOption1), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
      value: contentTypeOption2
    }, contentTypeOption2)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "form__help"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "add_outgoing_webhook.contentType.help1",
      defaultMessage: "Choose the content type by which the request will be sent."
    })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "form__help"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "add_outgoing_webhook.contentType.help2",
      defaultMessage: "If application/x-www-form-urlencoded is chosen, the server will encode the parameters in a URL format in the request body."
    })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "form__help"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "add_outgoing_webhook.contentType.help3",
      defaultMessage: "If application/json is chosen, the server will format the request body as JSON."
    })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "channelId"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "add_outgoing_webhook.channel",
      defaultMessage: "Channel"
    })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_channel_select__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: "channelId",
      value: this.state.channelId,
      onChange: this.updateChannelId,
      selectOpen: true
    }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "form__help"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "add_outgoing_webhook.channel.help",
      defaultMessage: "Public channel that delivers payload to webhook. Optional if at least one Trigger Word is specified."
    })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "triggerWords"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "add_outgoing_webhook.triggerWords",
      defaultMessage: "Trigger Words (One Per Line)"
    })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("textarea", {
      id: "triggerWords",
      rows: "3",
      maxLength: "1000",
      className: "form-control",
      value: this.state.triggerWords,
      onChange: this.updateTriggerWords
    }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "form__help"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "add_outgoing_webhook.triggerWords.help",
      defaultMessage: "Messages that start with one of the specified words will trigger the outgoing webhook. Optional if Channel is selected."
    })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "triggerWords"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "add_outgoing_webhook.triggerWordsTriggerWhen",
      defaultMessage: "Trigger When"
    })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("select", {
      className: "form-control",
      value: this.state.triggerWhen,
      onChange: this.updateTriggerWhen
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
      value: "0"
    }, Object(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_8__["localizeMessage"])('add_outgoing_webhook.triggerWordsTriggerWhenFullWord', 'First word matches a trigger word exactly')), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
      value: "1"
    }, Object(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_8__["localizeMessage"])('add_outgoing_webhook.triggerWordsTriggerWhenStartsWith', 'First word starts with a trigger word'))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "form__help"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "add_outgoing_webhook.triggerWordsTriggerWhen.help",
      defaultMessage: "Choose when to trigger the outgoing webhook; if the first word of a message matches a Trigger Word exactly, or if it starts with a Trigger Word."
    })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "callbackUrls"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "add_outgoing_webhook.callbackUrls",
      defaultMessage: "Callback URLs (One Per Line)"
    })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("textarea", {
      id: "callbackUrls",
      rows: "3",
      maxLength: "1000",
      className: "form-control",
      value: this.state.callbackUrls,
      onChange: this.updateCallbackUrls
    }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "form__help"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "add_outgoing_webhook.callbackUrls.help",
      defaultMessage: "The URL that messages will be sent to. If the URL is private, add it as a {link}.",
      values: {
        link: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: "https://about.mattermost.com/default-allow-internal-connections-settings-documentation/",
          target: "_blank",
          rel: "noopener noreferrer"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          id: "add_outgoing_webhook.callbackUrls.helpLinkText",
          defaultMessage: "trusted internal connection"
        }))
      }
    })))), this.props.enablePostUsernameOverride && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "username"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "add_outgoing_webhook.username",
      defaultMessage: "Username"
    })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
      id: "username",
      type: "text",
      maxLength: "22",
      className: "form-control",
      value: this.state.username,
      onChange: this.updateUsername
    }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "form__help"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "add_outgoing_webhook.username.help",
      defaultMessage: "Choose the username this integration will post as. Usernames can be up to 22 characters, and may contain lowercase letters, numbers and the symbols \"-\", \"_\", and \".\"."
    })))), this.props.enablePostIconOverride && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "iconURL"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "add_outgoing_webhook.icon_url",
      defaultMessage: "Profile Picture"
    })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
      id: "iconURL",
      type: "text",
      maxLength: "1024",
      className: "form-control",
      value: this.state.iconURL,
      onChange: this.updateIconURL
    }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "form__help"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "add_outgoing_webhook.icon_url.help",
      defaultMessage: "Choose the profile picture this integration will use when posting. Enter the URL of a .png or .jpg file at least 128 pixels by 128 pixels."
    })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "backstage-form__footer"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_form_error__WEBPACK_IMPORTED_MODULE_11__["default"], {
      type: "backstage",
      errors: [this.props.serverError, this.state.clientError]
    }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
      className: "btn btn-link btn-sm",
      to: "/".concat(this.props.team.name, "/integrations/outgoing_webhooks")
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "add_outgoing_webhook.cancel",
      defaultMessage: "Cancel"
    })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_spinner_button__WEBPACK_IMPORTED_MODULE_12__["default"], {
      className: "btn btn-primary",
      type: "submit",
      spinning: this.state.saving,
      spinningText: Object(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_8__["localizeMessage"])(this.props.loading.id, this.props.loading.defaultMessage),
      onClick: this.handleSubmit,
      id: "saveWebhook"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: footerToRender.id,
      defaultMessage: footerToRender.defaultMessage
    })), renderExtra))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(AbstractOutgoingWebhook, "propTypes", {
  /**
   * The current team
   */
  team: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,

  /**
   * The header text to render, has id and defaultMessage
   */
  header: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,

  /**
   * The footer text to render, has id and defaultMessage
   */
  footer: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,

  /**
  * The spinner loading text to render, has id and defaultMessage
  */
  loading: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,

  /**
   * Any extra component/node to render
   */
  renderExtra: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node.isRequired,

  /**
   * The server error text after a failed action
   */
  serverError: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,

  /**
   * The hook used to set the initial state
   */
  initialHook: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * The async function to run when the action button is pressed
   */
  action: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,

  /**
   * Whether to allow configuration of the default post username.
   */
  enablePostUsernameOverride: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool.isRequired,

  /**
   * Whether to allow configuration of the default post icon.
   */
  enablePostIconOverride: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool.isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AbstractOutgoingWebhook, "AbstractOutgoingWebhook", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/abstract_outgoing_webhook.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/add_command/add_command.jsx":
/*!*************************************************************!*\
  !*** ./components/integrations/add_command/add_command.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddCommand; });
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_browser_history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/browser_history */ "./utils/browser_history.jsx");
/* harmony import */ var utils_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/i18n */ "./utils/i18n.jsx");
/* harmony import */ var _abstract_command_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../abstract_command.jsx */ "./components/integrations/abstract_command.jsx");


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





const HEADER = {
  id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('integrations.add'),
  defaultMessage: 'Add'
};
const FOOTER = {
  id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('add_command.save'),
  defaultMessage: 'Save'
};
const LOADING = {
  id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('add_command.saving'),
  defaultMessage: 'Saving...'
};
class AddCommand extends react__WEBPACK_IMPORTED_MODULE_2___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "addCommand", async command => {
      this.setState({
        serverError: ''
      });
      const {
        data,
        error
      } = await this.props.actions.addCommand(command);

      if (data) {
        utils_browser_history__WEBPACK_IMPORTED_MODULE_3__["browserHistory"].push("/".concat(this.props.team.name, "/integrations/commands/confirm?type=commands&id=").concat(data.id));
        return;
      }

      if (error) {
        this.setState({
          serverError: error.message
        });
      }
    });

    this.state = {
      serverError: ''
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_abstract_command_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
      team: this.props.team,
      header: HEADER,
      footer: FOOTER,
      loading: LOADING,
      renderExtra: '',
      action: this.addCommand,
      serverError: this.state.serverError
    });
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(AddCommand, "propTypes", {
  /**
  * The team data
  */
  team: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    /**
    * The function to call to add new command
    */
    addCommand: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  }).isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(HEADER, "HEADER", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/add_command/add_command.jsx");
  reactHotLoader.register(FOOTER, "FOOTER", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/add_command/add_command.jsx");
  reactHotLoader.register(LOADING, "LOADING", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/add_command/add_command.jsx");
  reactHotLoader.register(AddCommand, "AddCommand", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/add_command/add_command.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/add_command/index.js":
/*!******************************************************!*\
  !*** ./components/integrations/add_command/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/actions/integrations */ "./node_modules/mattermost-redux/actions/integrations.js");
/* harmony import */ var mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _add_command_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add_command.jsx */ "./components/integrations/add_command/add_command.jsx");
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
      addCommand: mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_2__["addCommand"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(null, mapDispatchToProps)(_add_command_jsx__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/add_command/index.js");
  reactHotLoader.register(_default, "default", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/add_command/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/add_incoming_webhook/add_incoming_webhook.jsx":
/*!*******************************************************************************!*\
  !*** ./components/integrations/add_incoming_webhook/add_incoming_webhook.jsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddIncomingWebhook; });
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_browser_history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/browser_history */ "./utils/browser_history.jsx");
/* harmony import */ var utils_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/i18n */ "./utils/i18n.jsx");
/* harmony import */ var components_integrations_abstract_incoming_webhook_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/integrations/abstract_incoming_webhook.jsx */ "./components/integrations/abstract_incoming_webhook.jsx");


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





const HEADER = {
  id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('integrations.add'),
  defaultMessage: 'Add'
};
const FOOTER = {
  id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('add_incoming_webhook.save'),
  defaultMessage: 'Save'
};
const LOADING = {
  id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('add_incoming_webhook.saving'),
  defaultMessage: 'Saving...'
};
class AddIncomingWebhook extends react__WEBPACK_IMPORTED_MODULE_2___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "addIncomingHook", async hook => {
      this.setState({
        serverError: ''
      });
      const {
        data
      } = await this.props.actions.createIncomingHook(hook);

      if (data) {
        utils_browser_history__WEBPACK_IMPORTED_MODULE_3__["browserHistory"].push("/".concat(this.props.team.name, "/integrations/confirm?type=incoming_webhooks&id=").concat(data.id));
        return;
      }

      if (this.props.createIncomingHookRequest.error) {
        this.setState({
          serverError: this.props.createIncomingHookRequest.error.message
        });
      }
    });

    this.state = {
      serverError: ''
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_integrations_abstract_incoming_webhook_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
      team: this.props.team,
      header: HEADER,
      footer: FOOTER,
      loading: LOADING,
      enablePostUsernameOverride: this.props.enablePostUsernameOverride,
      enablePostIconOverride: this.props.enablePostIconOverride,
      action: this.addIncomingHook,
      serverError: this.state.serverError
    });
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(AddIncomingWebhook, "propTypes", {
  /**
  * The current team
  */
  team: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,

  /**
  * The request state for createIncomingHook action. Contains status and error
  */
  createIncomingHookRequest: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,

  /**
  * Whether to allow configuration of the default post username.
  */
  enablePostUsernameOverride: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,

  /**
  * Whether to allow configuration of the default post icon.
  */
  enablePostIconOverride: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    /**
    * The function to call to add a new incoming webhook
    */
    createIncomingHook: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  }).isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(HEADER, "HEADER", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/add_incoming_webhook/add_incoming_webhook.jsx");
  reactHotLoader.register(FOOTER, "FOOTER", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/add_incoming_webhook/add_incoming_webhook.jsx");
  reactHotLoader.register(LOADING, "LOADING", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/add_incoming_webhook/add_incoming_webhook.jsx");
  reactHotLoader.register(AddIncomingWebhook, "AddIncomingWebhook", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/add_incoming_webhook/add_incoming_webhook.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/add_incoming_webhook/index.js":
/*!***************************************************************!*\
  !*** ./components/integrations/add_incoming_webhook/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/actions/integrations */ "./node_modules/mattermost-redux/actions/integrations.js");
/* harmony import */ var mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mattermost-redux/selectors/entities/general */ "./node_modules/mattermost-redux/selectors/entities/general.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _add_incoming_webhook_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add_incoming_webhook.jsx */ "./components/integrations/add_incoming_webhook/add_incoming_webhook.jsx");
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
  const enablePostUsernameOverride = config.EnablePostUsernameOverride === 'true';
  const enablePostIconOverride = config.EnablePostIconOverride === 'true';
  return {
    createIncomingHookRequest: state.requests.integrations.createIncomingHook,
    enablePostUsernameOverride,
    enablePostIconOverride
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
      createIncomingHook: mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_2__["createIncomingHook"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_add_incoming_webhook_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/add_incoming_webhook/index.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/add_incoming_webhook/index.js");
  reactHotLoader.register(_default, "default", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/add_incoming_webhook/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/add_oauth_app/add_oauth_app.jsx":
/*!*****************************************************************!*\
  !*** ./components/integrations/add_oauth_app/add_oauth_app.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddOAuthApp; });
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_browser_history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/browser_history */ "./utils/browser_history.jsx");
/* harmony import */ var utils_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/i18n */ "./utils/i18n.jsx");
/* harmony import */ var _abstract_oauth_app_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../abstract_oauth_app.jsx */ "./components/integrations/abstract_oauth_app.jsx");


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





const HEADER = {
  id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('add_oauth_app.header'),
  defaultMessage: 'Add'
};
const FOOTER = {
  id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('installed_oauth_apps.save'),
  defaultMessage: 'Save'
};
const LOADING = {
  id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('installed_oauth_apps.saving'),
  defaultMessage: 'Saving...'
};
class AddOAuthApp extends react__WEBPACK_IMPORTED_MODULE_2___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "addOAuthApp", async app => {
      this.setState({
        serverError: ''
      });
      const {
        data
      } = await this.props.actions.addOAuthApp(app);

      if (data) {
        utils_browser_history__WEBPACK_IMPORTED_MODULE_3__["browserHistory"].push("/".concat(this.props.team.name, "/integrations/confirm?type=oauth2-apps&id=").concat(data.id));
        return;
      }

      if (this.props.addOAuthAppRequest.error) {
        this.setState({
          serverError: this.props.addOAuthAppRequest.error.message
        });
      }
    });

    this.state = {
      serverError: ''
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_abstract_oauth_app_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
      team: this.props.team,
      header: HEADER,
      footer: FOOTER,
      loading: LOADING,
      renderExtra: '',
      action: this.addOAuthApp,
      serverError: this.state.serverError
    });
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(AddOAuthApp, "propTypes", {
  /**
  * The team data
  */
  team: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
  * The request state for addOAuthApp action. Contains status and error
  */
  addOAuthAppRequest: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    /**
    * The function to call to add new OAuthApp
    */
    addOAuthApp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  }).isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(HEADER, "HEADER", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/add_oauth_app/add_oauth_app.jsx");
  reactHotLoader.register(FOOTER, "FOOTER", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/add_oauth_app/add_oauth_app.jsx");
  reactHotLoader.register(LOADING, "LOADING", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/add_oauth_app/add_oauth_app.jsx");
  reactHotLoader.register(AddOAuthApp, "AddOAuthApp", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/add_oauth_app/add_oauth_app.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/add_oauth_app/index.js":
/*!********************************************************!*\
  !*** ./components/integrations/add_oauth_app/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/actions/integrations */ "./node_modules/mattermost-redux/actions/integrations.js");
/* harmony import */ var mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _add_oauth_app_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add_oauth_app.jsx */ "./components/integrations/add_oauth_app/add_oauth_app.jsx");
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
  return {
    addOAuthAppRequest: state.requests.integrations.addOAuthApp
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
      addOAuthApp: mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_2__["addOAuthApp"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_add_oauth_app_jsx__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/add_oauth_app/index.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/add_oauth_app/index.js");
  reactHotLoader.register(_default, "default", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/add_oauth_app/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/add_outgoing_webhook/add_outgoing_webhook.jsx":
/*!*******************************************************************************!*\
  !*** ./components/integrations/add_outgoing_webhook/add_outgoing_webhook.jsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddOutgoingWebhook; });
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_browser_history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/browser_history */ "./utils/browser_history.jsx");
/* harmony import */ var utils_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/i18n */ "./utils/i18n.jsx");
/* harmony import */ var components_integrations_abstract_outgoing_webhook_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/integrations/abstract_outgoing_webhook.jsx */ "./components/integrations/abstract_outgoing_webhook.jsx");


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





const HEADER = {
  id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('integrations.add'),
  defaultMessage: 'Add'
};
const FOOTER = {
  id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('add_outgoing_webhook.save'),
  defaultMessage: 'Save'
};
const LOADING = {
  id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('add_outgoing_webhook.saving'),
  defaultMessage: 'Saving...'
};
class AddOutgoingWebhook extends react__WEBPACK_IMPORTED_MODULE_2___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "addOutgoingHook", async hook => {
      this.setState({
        serverError: ''
      });
      const {
        data
      } = await this.props.actions.createOutgoingHook(hook);

      if (data) {
        utils_browser_history__WEBPACK_IMPORTED_MODULE_3__["browserHistory"].push("/".concat(this.props.team.name, "/integrations/confirm?type=outgoing_webhooks&id=").concat(data.id));
        return;
      }

      if (this.props.createOutgoingHookRequest.error) {
        this.setState({
          serverError: this.props.createOutgoingHookRequest.error.message
        });
      }
    });

    this.state = {
      serverError: ''
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_integrations_abstract_outgoing_webhook_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
      team: this.props.team,
      header: HEADER,
      footer: FOOTER,
      loading: LOADING,
      renderExtra: '',
      action: this.addOutgoingHook,
      serverError: this.state.serverError,
      enablePostUsernameOverride: this.props.enablePostUsernameOverride,
      enablePostIconOverride: this.props.enablePostIconOverride
    });
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(AddOutgoingWebhook, "propTypes", {
  /**
   * The current team
   */
  team: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,

  /**
   * The request state for createOutgoingHook action. Contains status and error
   */
  createOutgoingHookRequest: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    /**
     * The function to call to add a new outgoing webhook
     */
    createOutgoingHook: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  }).isRequired,

  /**
   * Whether to allow configuration of the default post username.
   */
  enablePostUsernameOverride: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,

  /**
   * Whether to allow configuration of the default post icon.
   */
  enablePostIconOverride: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(HEADER, "HEADER", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/add_outgoing_webhook/add_outgoing_webhook.jsx");
  reactHotLoader.register(FOOTER, "FOOTER", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/add_outgoing_webhook/add_outgoing_webhook.jsx");
  reactHotLoader.register(LOADING, "LOADING", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/add_outgoing_webhook/add_outgoing_webhook.jsx");
  reactHotLoader.register(AddOutgoingWebhook, "AddOutgoingWebhook", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/add_outgoing_webhook/add_outgoing_webhook.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/add_outgoing_webhook/index.js":
/*!***************************************************************!*\
  !*** ./components/integrations/add_outgoing_webhook/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/actions/integrations */ "./node_modules/mattermost-redux/actions/integrations.js");
/* harmony import */ var mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mattermost-redux/selectors/entities/general */ "./node_modules/mattermost-redux/selectors/entities/general.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _add_outgoing_webhook_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add_outgoing_webhook.jsx */ "./components/integrations/add_outgoing_webhook/add_outgoing_webhook.jsx");
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
  const enablePostUsernameOverride = config.EnablePostUsernameOverride === 'true';
  const enablePostIconOverride = config.EnablePostIconOverride === 'true';
  return {
    createOutgoingHookRequest: state.requests.integrations.createOutgoingHook,
    enablePostUsernameOverride,
    enablePostIconOverride
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
      createOutgoingHook: mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_2__["createOutgoingHook"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_add_outgoing_webhook_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/add_outgoing_webhook/index.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/add_outgoing_webhook/index.js");
  reactHotLoader.register(_default, "default", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/add_outgoing_webhook/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/bots/add_bot/add_bot.jsx":
/*!**********************************************************!*\
  !*** ./components/integrations/bots/add_bot/add_bot.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddBot; });
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.url */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var mattermost_redux_utils_user_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mattermost-redux/utils/user_utils */ "./node_modules/mattermost-redux/utils/user_utils.js");
/* harmony import */ var mattermost_redux_utils_user_utils__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_utils_user_utils__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! mattermost-redux/constants */ "./node_modules/mattermost-redux/constants/index.js");
/* harmony import */ var mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var images_bot_default_icon_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! images/bot_default_icon.png */ "./images/bot_default_icon.png");
/* harmony import */ var images_bot_default_icon_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(images_bot_default_icon_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var utils_browser_history__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! utils/browser_history */ "./utils/browser_history.jsx");
/* harmony import */ var components_backstage_components_backstage_header_jsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/backstage/components/backstage_header.jsx */ "./components/backstage/components/backstage_header.jsx");
/* harmony import */ var components_spinner_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/spinner_button */ "./components/spinner_button.tsx");
/* harmony import */ var components_formatted_markdown_message_jsx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/formatted_markdown_message.jsx */ "./components/formatted_markdown_message.jsx");
/* harmony import */ var components_form_error__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! components/form_error */ "./components/form_error.tsx");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! utils/constants */ "./utils/constants.jsx");
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");
/* harmony import */ var utils_file_utils_jsx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! utils/file_utils.jsx */ "./utils/file_utils.jsx");







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
















const roleOptionSystemAdmin = 'System Admin';
const roleOptionMember = 'Member';
class AddBot extends react__WEBPACK_IMPORTED_MODULE_7___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "updateUsername", e => {
      this.setState({
        username: e.target.value
      });
    });

    _defineProperty(this, "updateDisplayName", e => {
      this.setState({
        displayName: e.target.value
      });
    });

    _defineProperty(this, "updateDescription", e => {
      this.setState({
        description: e.target.value
      });
    });

    _defineProperty(this, "updateRole", e => {
      this.setState({
        role: e.target.value
      });
    });

    _defineProperty(this, "updatePostAll", e => {
      this.setState({
        postAll: e.target.checked
      });
    });

    _defineProperty(this, "updatePostChannels", e => {
      this.setState({
        postChannels: e.target.checked
      });
    });

    _defineProperty(this, "updatePicture", e => {
      if (e.target.files && e.target.files[0]) {
        const pictureFile = e.target.files[0];
        this.previewBlob = URL.createObjectURL(pictureFile);
        var reader = new FileReader();

        reader.onload = e2 => {
          const orientation = utils_file_utils_jsx__WEBPACK_IMPORTED_MODULE_21__["getExifOrientation"](e2.target.result);
          const orientationStyles = utils_file_utils_jsx__WEBPACK_IMPORTED_MODULE_21__["getOrientationStyles"](orientation);
          this.setState({
            image: this.previewBlob,
            orientationStyles
          });
        };

        reader.readAsArrayBuffer(pictureFile);
        e.target.value = null;
        this.setState({
          pictureFile
        });
      } else {
        this.setState({
          pictureFile: null,
          image: null
        });
      }
    });

    _defineProperty(this, "setDefault", () => {
      this.setState({
        pictureFile: 'default',
        image: images_bot_default_icon_png__WEBPACK_IMPORTED_MODULE_13___default.a
      });
    });

    _defineProperty(this, "updateRoles", async data => {
      let roles = mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_12__["General"].SYSTEM_USER_ROLE;

      if (this.state.role === roleOptionSystemAdmin) {
        roles += ' ' + mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_12__["General"].SYSTEM_ADMIN_ROLE;
      } else if (this.state.postAll) {
        roles += ' ' + mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_12__["General"].SYSTEM_POST_ALL_ROLE;
      } else if (this.state.postChannels) {
        roles += ' ' + mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_12__["General"].SYSTEM_POST_ALL_PUBLIC_ROLE;
      }

      const rolesResult = await this.props.actions.updateUserRoles(data.user_id, roles);

      if (rolesResult) {
        return rolesResult.error;
      }

      return null;
    });

    _defineProperty(this, "handleSubmit", async e => {
      e.preventDefault();

      if (this.state.adding) {
        return;
      }

      if (!this.state.username || this.state.username.length < 3) {
        this.setState({
          error: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
            id: "bots.manage.add.invalid_username",
            defaultMessage: "Usernames have to begin with a lowercase letter and be 3-22 characters long. You can use lowercase letters, numbers, periods, dashes, and underscores."
          })
        });
        return;
      }

      if (this.state.pictureFile) {
        if (!utils_constants__WEBPACK_IMPORTED_MODULE_19__["AcceptedProfileImageTypes"].includes(this.state.pictureFile.type)) {
          this.setState({
            error: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
              id: "user.settings.general.validImage",
              defaultMessage: "Only BMP, JPG or PNG images may be used for profile pictures"
            })
          });
        } else if (this.state.pictureFile.size > this.props.maxFileSize) {
          this.setState({
            error: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
              id: "user.settings.general.imageTooLarge",
              defaultMessage: "Unable to upload profile image. File is too large."
            })
          });
        }
      }

      this.setState({
        adding: true,
        error: ''
      });
      const bot = {
        username: this.state.username.toLowerCase().trim(),
        display_name: this.state.displayName,
        description: this.state.description
      };
      let data;
      let error;

      if (this.props.bot) {
        const result = await this.props.actions.patchBot(this.props.bot.user_id, bot);

        if (result) {
          data = result.data;
          error = result.error;
        } else {
          error = utils_utils_jsx__WEBPACK_IMPORTED_MODULE_20__["localizeMessage"]('bot.edit_failed', 'Failed to edit bot');
        }

        if (!error) {
          if (this.state.pictureFile && this.state.pictureFile !== 'default') {
            const imageResult = await this.props.actions.uploadProfileImage(data.user_id, this.state.pictureFile);
            error = imageResult.error;
          } else if (this.state.pictureFile && this.state.pictureFile === 'default') {
            await this.props.actions.setDefaultProfileImage(data.user_id);
          }
        }

        if (!error && data) {
          error = this.updateRoles(data);
        }

        if (data) {
          utils_browser_history__WEBPACK_IMPORTED_MODULE_14__["browserHistory"].push("/".concat(this.props.team.name, "/integrations/bots"));
          return;
        }
      } else {
        const usernameError = utils_utils_jsx__WEBPACK_IMPORTED_MODULE_20__["isValidBotUsername"](bot.username);

        if (usernameError) {
          this.setState({
            adding: false,
            error: usernameError
          });
          return;
        }

        const result = await this.props.actions.createBot(bot);

        if (result) {
          data = result.data;
          error = result.error;
        } else {
          error = utils_utils_jsx__WEBPACK_IMPORTED_MODULE_20__["localizeMessage"]('bot.create_failed', 'Failed to create bot');
        }

        let token = '';

        if (!error) {
          if (this.state.pictureFile && this.state.pictureFile !== 'default') {
            await this.props.actions.uploadProfileImage(data.user_id, this.state.pictureFile);
          } else {
            await this.props.actions.setDefaultProfileImage(data.user_id);
          }

          const tokenResult = await this.props.actions.createUserAccessToken(data.user_id, utils_utils_jsx__WEBPACK_IMPORTED_MODULE_20__["localizeMessage"]('bot.token.default.description', 'Default Token')); // On error just skip the confirmation because we have a bot without a token.

          if (!tokenResult || tokenResult.error) {
            utils_browser_history__WEBPACK_IMPORTED_MODULE_14__["browserHistory"].push("/".concat(this.props.team.name, "/integrations/bots"));
            return;
          }

          token = tokenResult.data.token;
        }

        if (!error && data) {
          error = this.updateRoles(data);
        }

        if (data) {
          utils_browser_history__WEBPACK_IMPORTED_MODULE_14__["browserHistory"].push("/".concat(this.props.team.name, "/integrations/confirm?type=bots&id=").concat(data.user_id, "&token=").concat(token));
          return;
        }
      }

      this.setState({
        adding: false
      });

      if (error) {
        this.setState({
          error: error.message
        });
      }
    });

    this.state = {
      error: '',
      username: '',
      displayName: '',
      description: '',
      adding: false,
      image: images_bot_default_icon_png__WEBPACK_IMPORTED_MODULE_13___default.a,
      role: roleOptionMember,
      postAll: false,
      postChannels: false
    };

    if (this.props.bot) {
      this.state.username = this.props.bot.username;
      this.state.displayName = this.props.bot.display_name;
      this.state.description = this.props.bot.description;
      this.state.role = mattermost_redux_utils_user_utils__WEBPACK_IMPORTED_MODULE_11__["isSystemAdmin"](this.props.roles || '') ? roleOptionSystemAdmin : roleOptionMember;
      this.state.postAll = mattermost_redux_utils_user_utils__WEBPACK_IMPORTED_MODULE_11__["hasPostAllRole"](this.props.roles || '');
      this.state.postChannels = mattermost_redux_utils_user_utils__WEBPACK_IMPORTED_MODULE_11__["hasPostAllPublicRole"](this.props.roles || '');
    }
  }

  render() {
    let subtitle = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
      id: "bots.manage.add",
      defaultMessage: "Add"
    });
    let buttonText = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
      id: "bots.manage.add.create",
      defaultMessage: "Create Bot Account"
    });
    let buttonActiveText = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
      id: "bots.manage.add.creating",
      defaultMessage: "Creating..."
    }); // If we are editing

    if (this.props.bot) {
      subtitle = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
        id: "bots.manage.edit",
        defaultMessage: "Edit"
      });
      buttonText = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
        id: "bots.manage.edit.title",
        defaultMessage: "Update"
      });
      buttonActiveText = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
        id: "bots.manage.edit.editing",
        defaultMessage: "Updating..."
      });
    }

    let imageURL = '';
    let removeImageIcon = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["OverlayTrigger"], {
      delayShow: utils_constants__WEBPACK_IMPORTED_MODULE_19__["Constants"].OVERLAY_TIME_DELAY,
      placement: "right",
      overlay: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Tooltip"], {
        id: "removeIcon"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
        id: "bot.remove_profile_picture",
        defaultMessage: "Remove Bot Icon"
      }))
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
      className: 'bot-profile__remove',
      onClick: this.setDefault
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, '×')));
    let imageStyles = null;

    if (this.props.bot && !this.state.pictureFile) {
      imageURL = utils_utils_jsx__WEBPACK_IMPORTED_MODULE_20__["imageURLForUser"](this.props.bot.user_id);
    } else {
      imageURL = this.state.image;
      imageStyles = this.state.orientationStyles;

      if (this.state.image === images_bot_default_icon_png__WEBPACK_IMPORTED_MODULE_13___default.a) {
        removeImageIcon = null;
      }
    }

    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "backstage-content"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(components_backstage_components_backstage_header_jsx__WEBPACK_IMPORTED_MODULE_15__["default"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
      to: "/".concat(this.props.team.name, "/integrations/bots")
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
      id: "bots.manage.header",
      defaultMessage: "Bot Accounts"
    })), subtitle), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "backstage-form"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
      className: "form-horizontal",
      onSubmit: this.handleSubmit
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "username"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
      id: "bots.add.username",
      defaultMessage: "Username"
    })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
      id: "username",
      type: "text",
      maxLength: "22",
      className: "form-control",
      value: this.state.username,
      onChange: this.updateUsername
    }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "form__help"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
      id: "bot.add.username.help",
      defaultMessage: "You can use lowercase letters, numbers, periods, dashes, and underscores."
    })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "boticon"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
      id: "bots.add.icon",
      defaultMessage: "Bot Icon"
    })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: 'bot-img-container'
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
      className: 'bot-img',
      alt: 'bot image',
      src: imageURL,
      style: imageStyles
    }), removeImageIcon), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "btn btn-sm btn-primary btn-file sel-btn"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
      id: "bots.image.upload",
      defaultMessage: "Upload an image"
    }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
      accept: ".jpg,.png,.bmp",
      type: "file",
      onChange: this.updatePicture
    })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "displayName"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
      id: "bots.add.displayName",
      defaultMessage: "Display Name"
    })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
      id: "displayName",
      type: "text",
      maxLength: "64",
      className: "form-control",
      value: this.state.displayName,
      onChange: this.updateDisplayName
    }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "form__help"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
      id: "bot.add.display_name.help",
      defaultMessage: '(Optional) You can choose to display your bot\'s full name rather than its username.'
    })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "description"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
      id: "bot.add.description",
      defaultMessage: "Description"
    })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
      id: "description",
      type: "text",
      maxLength: "1024",
      className: "form-control",
      value: this.state.description,
      onChange: this.updateDescription
    }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "form__help"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
      id: "bot.add.description.help",
      defaultMessage: "(Optional) Let others know what this bot does."
    })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "role"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
      id: "bot.add.role",
      defaultMessage: "Role"
    })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("select", {
      className: "form-control",
      value: this.state.role,
      disabled: !this.props.editingUserHasManageSystem,
      onChange: this.updateRole
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
      value: roleOptionMember
    }, roleOptionMember), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
      value: roleOptionSystemAdmin
    }, roleOptionSystemAdmin)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "form__help"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
      id: "bot.add.role.help",
      defaultMessage: "Choose what role the bot should have."
    })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "row bot-profile__section"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "col-md-5 col-sm-8 col-sm-offset-4"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(components_formatted_markdown_message_jsx__WEBPACK_IMPORTED_MODULE_17__["default"], {
      id: "admin.manage_roles.additionalRoles",
      defaultMessage: "Select additional permissions for the account. [Read more about roles and permissions](!https://about.mattermost.com/default-permissions)."
    }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "postAll"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
      id: "bot.add.post_all",
      defaultMessage: "post:all"
    })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "col-md-5 col-sm-8 checkbox"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "checkbox no-padding"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
      htmlFor: "postAll"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
      id: "postAll",
      type: "checkbox",
      checked: this.state.postAll || this.state.role === roleOptionSystemAdmin,
      onChange: this.updatePostAll,
      disabled: !this.props.editingUserHasManageSystem || this.state.role === roleOptionSystemAdmin
    }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
      id: "bot.add.post_all.enabled",
      defaultMessage: "Enabled"
    }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "form__help"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
      id: "bot.add.post_all.help",
      defaultMessage: "Bot will have access to post to all Mattermost channels including direct messages."
    })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "postChannels"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
      id: "bot.add.post_channels",
      defaultMessage: "post:channels"
    })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "col-md-5 col-sm-8 checkbox"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "checkbox no-padding"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
      htmlFor: "postChannels"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
      id: "postChannels",
      type: "checkbox",
      checked: this.state.postChannels || this.state.role === roleOptionSystemAdmin || this.state.postAll,
      onChange: this.updatePostChannels,
      disabled: !this.props.editingUserHasManageSystem || this.state.role === roleOptionSystemAdmin || this.state.postAll
    }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
      id: "bot.add.post_channels.enabled",
      defaultMessage: "Enabled"
    }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "form__help"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
      id: "bot.add.post_channels.help",
      defaultMessage: "Bot will have access to post to all Mattermost public channels."
    })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "backstage-form__footer"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(components_form_error__WEBPACK_IMPORTED_MODULE_18__["default"], {
      type: "backstage",
      errors: [this.state.error]
    }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
      className: "btn btn-link btn-sm",
      to: "/".concat(this.props.team.name, "/integrations/bots")
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
      id: "bots.manage.add.cancel",
      defaultMessage: "Cancel"
    })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(components_spinner_button__WEBPACK_IMPORTED_MODULE_16__["default"], {
      className: "btn btn-primary",
      type: "submit",
      spinning: this.state.adding,
      spinningText: buttonActiveText,
      onClick: this.handleSubmit,
      id: "saveBot"
    }, buttonText)))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(AddBot, "propTypes", {
  /**
  *  Only used for routing since backstage is team based.
  */
  team: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired,

  /**
  *  Bot to edit (if editing)
  */
  bot: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,

  /**
  *  Roles of the bot to edit (if editing)
  */
  roles: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,

  /**
  * Maximum upload file size (for bot account profile picture)
  */
  maxFileSize: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number.isRequired,

  /**
   * Editing user has the MANAGE_SYSTEM permission
  */
  editingUserHasManageSystem: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool.isRequired,

  /**
  * Bot to edit
  */
  actions: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape({
    /**
    * Creates a new bot account.
    */
    createBot: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,

    /**
    * Patches an existing bot account.
    */
    patchBot: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,

    /**
    * Uploads a user profile image
    */
    uploadProfileImage: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,

    /**
    * Set profile image to default
    */
    setDefaultProfileImage: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,

    /**
    * For creating default access token
    */
    createUserAccessToken: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,

    /**
    * For creating setting bot to system admin or special posting permissions
    */
    updateUserRoles: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired
  })
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(roleOptionSystemAdmin, "roleOptionSystemAdmin", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/bots/add_bot/add_bot.jsx");
  reactHotLoader.register(roleOptionMember, "roleOptionMember", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/bots/add_bot/add_bot.jsx");
  reactHotLoader.register(AddBot, "AddBot", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/bots/add_bot/add_bot.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/bots/add_bot/index.js":
/*!*******************************************************!*\
  !*** ./components/integrations/bots/add_bot/index.js ***!
  \*******************************************************/
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
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mattermost-redux/actions/users */ "./node_modules/mattermost-redux/actions/users.js");
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mattermost_redux_actions_bots__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mattermost-redux/actions/bots */ "./node_modules/mattermost-redux/actions/bots.js");
/* harmony import */ var mattermost_redux_actions_bots__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_bots__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var mattermost_redux_selectors_entities_bots__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mattermost-redux/selectors/entities/bots */ "./node_modules/mattermost-redux/selectors/entities/bots.js");
/* harmony import */ var mattermost_redux_selectors_entities_bots__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_bots__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mattermost-redux/selectors/entities/general */ "./node_modules/mattermost-redux/selectors/entities/general.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var mattermost_redux_selectors_entities_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mattermost-redux/selectors/entities/common */ "./node_modules/mattermost-redux/selectors/entities/common.js");
/* harmony import */ var mattermost_redux_selectors_entities_common__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_common__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var mattermost_redux_selectors_entities_roles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mattermost-redux/selectors/entities/roles */ "./node_modules/mattermost-redux/selectors/entities/roles.js");
/* harmony import */ var mattermost_redux_selectors_entities_roles__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_roles__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mattermost-redux/constants */ "./node_modules/mattermost-redux/constants/index.js");
/* harmony import */ var mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _add_bot_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add_bot.jsx */ "./components/integrations/bots/add_bot/add_bot.jsx");




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
  const config = Object(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_8__["getConfig"])(state);
  const botId = new URLSearchParams(ownProps.location.search).get('id');
  const bots = Object(mattermost_redux_selectors_entities_bots__WEBPACK_IMPORTED_MODULE_7__["getBotAccounts"])(state);
  const bot = bots ? bots[botId] : null;
  const user = bot ? Object(mattermost_redux_selectors_entities_common__WEBPACK_IMPORTED_MODULE_9__["getUsers"])(state)[bot.user_id] : null;
  const roles = user ? user.roles : null;
  return {
    maxFileSize: parseInt(config.MaxFileSize, 10),
    bot,
    roles,
    editingUserHasManageSystem: Object(mattermost_redux_selectors_entities_roles__WEBPACK_IMPORTED_MODULE_10__["haveISystemPermission"])(state, {
      permission: mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_11__["Permissions"].MANAGE_SYSTEM
    })
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])({
      createBot: mattermost_redux_actions_bots__WEBPACK_IMPORTED_MODULE_6__["createBot"],
      patchBot: mattermost_redux_actions_bots__WEBPACK_IMPORTED_MODULE_6__["patchBot"],
      uploadProfileImage: mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_5__["uploadProfileImage"],
      setDefaultProfileImage: mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_5__["setDefaultProfileImage"],
      createUserAccessToken: mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_5__["createUserAccessToken"],
      updateUserRoles: mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_5__["updateUserRoles"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(_add_bot_jsx__WEBPACK_IMPORTED_MODULE_12__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/bots/add_bot/index.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/bots/add_bot/index.js");
  reactHotLoader.register(_default, "default", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/bots/add_bot/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/bots/bot.jsx":
/*!**********************************************!*\
  !*** ./components/integrations/bots/bot.jsx ***!
  \**********************************************/
/*! exports provided: matchesFilter, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchesFilter", function() { return matchesFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bot; });
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var components_confirm_modal_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/confirm_modal.jsx */ "./components/confirm_modal.jsx");
/* harmony import */ var components_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/markdown */ "./components/markdown/index.js");
/* harmony import */ var components_save_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/save_button */ "./components/save_button.tsx");
/* harmony import */ var components_widgets_icons_fa_warning_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/widgets/icons/fa_warning_icon */ "./components/widgets/icons/fa_warning_icon.tsx");
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");



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









function matchesFilter(bot, filter, owner) {
  if (!filter) {
    return true;
  }

  const username = bot.username || '';
  const description = bot.description || '';
  const displayName = bot.display_name || '';
  let ownerUsername = 'plugin';

  if (owner && owner.username) {
    ownerUsername = owner.username;
  }

  return !(username.toLowerCase().indexOf(filter) === -1 && displayName.toLowerCase().indexOf(filter) === -1 && description.toLowerCase().indexOf(filter) === -1 && ownerUsername.toLowerCase().indexOf(filter) === -1);
}
class Bot extends react__WEBPACK_IMPORTED_MODULE_2___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "enableBot", () => {
      this.props.actions.enableBot(this.props.bot.user_id);
    });

    _defineProperty(this, "disableBot", () => {
      this.props.actions.disableBot(this.props.bot.user_id);
    });

    _defineProperty(this, "enableUserAccessToken", id => {
      this.props.actions.enableUserAccessToken(id);
    });

    _defineProperty(this, "disableUserAccessToken", id => {
      this.props.actions.disableUserAccessToken(id);
    });

    _defineProperty(this, "confirmRevokeToken", id => {
      this.setState({
        confirmingId: id
      });
    });

    _defineProperty(this, "revokeTokenConfirmed", () => {
      this.props.actions.revokeUserAccessToken(this.state.confirmingId);
      this.closeConfirm();
    });

    _defineProperty(this, "closeConfirm", () => {
      this.setState({
        confirmingId: ''
      });
    });

    _defineProperty(this, "openCreateToken", () => {
      this.setState({
        creatingTokenState: 'OPEN',
        token: {
          description: ''
        }
      });
    });

    _defineProperty(this, "closeCreateToken", () => {
      this.setState({
        creatingTokenState: 'CLOSED',
        token: {
          description: ''
        }
      });
    });

    _defineProperty(this, "handleUpdateDescription", e => {
      this.setState({
        token: Object.assign({}, this.state.token, {
          description: e.target.value
        })
      });
    });

    _defineProperty(this, "handleCreateToken", async e => {
      e.preventDefault();

      if (this.state.token.description === '') {
        this.setState({
          error: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
            id: "bot.token.error.description",
            defaultMessage: "Please enter a description."
          })
        });
        return;
      }

      const {
        data,
        error
      } = await this.props.actions.createUserAccessToken(this.props.bot.user_id, this.state.token.description);

      if (data) {
        this.setState({
          creatingTokenState: 'CREATED',
          token: data
        });
      } else if (error) {
        this.setState({
          error: error.message
        });
      }
    });

    this.state = {
      confirmingId: '',
      creatingTokenState: 'CLOSED',
      token: {},
      error: ''
    };
  }

  render() {
    const username = this.props.bot.username || '';
    const description = this.props.bot.description || '';
    const displayName = this.props.bot.display_name || '';
    let ownerUsername = 'plugin';

    if (this.props.owner && this.props.owner.username) {
      ownerUsername = this.props.owner.username;
    }

    const filter = this.props.filter ? this.props.filter.toLowerCase() : '';

    if (!matchesFilter(this.props.bot, filter, this.props.owner)) {
      return null;
    }

    const tokenList = [];
    Object.values(this.props.accessTokens).forEach(token => {
      let activeLink;
      let disableClass = '';
      let disabledText;

      if (token.is_active) {
        activeLink = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
          name: token.id + '_deactivate',
          href: "#",
          onClick: e => {
            e.preventDefault();
            this.disableUserAccessToken(token.id);
          }
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          id: "user.settings.tokens.deactivate",
          defaultMessage: "Disable"
        }));
      } else {
        disableClass = 'light';
        disabledText = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
          className: "margin-right light"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          id: "user.settings.tokens.deactivatedWarning",
          defaultMessage: "(Disabled)"
        }));
        activeLink = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
          name: token.id + '_activate',
          href: "#",
          onClick: e => {
            e.preventDefault();
            this.enableUserAccessToken(token.id);
          }
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          id: "user.settings.tokens.activate",
          defaultMessage: "Enable"
        }));
      }

      tokenList.push(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        key: token.id,
        className: "bot-list__item"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "item-details__row d-flex justify-content-between"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: disableClass
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "whitespace--nowrap overflow--ellipsis"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: "user.settings.tokens.tokenDesc",
        defaultMessage: "Token Description: "
      })), token.description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "setting-box__token-id whitespace--nowrap overflow--ellipsis"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: "user.settings.tokens.tokenId",
        defaultMessage: "Token ID: "
      })), token.id)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, disabledText, activeLink, ' - ', react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        name: token.id + '_delete',
        href: "#",
        onClick: e => {
          e.preventDefault();
          this.confirmRevokeToken(token.id);
        }
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: "user.settings.tokens.delete",
        defaultMessage: "Delete"
      }))))));
    });
    let options;

    if (ownerUsername !== 'plugin') {
      options = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "item-actions"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        id: "createToken",
        className: "style--none color--link",
        onClick: this.openCreateToken
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: "bot.manage.create_token",
        defaultMessage: "Create New Token"
      })), ' - ', react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
        to: "/".concat(this.props.team.name, "/integrations/bots/edit?id=").concat(this.props.bot.user_id)
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: "bots.manage.edit",
        defaultMessage: "Edit"
      })), ' - ', react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        className: "style--none color--link",
        onClick: this.disableBot
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: "bot.manage.disable",
        defaultMessage: "Disable"
      })));
    }

    if (this.props.bot.delete_at !== 0) {
      options = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "item-actions"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        className: "style--none color--link",
        onClick: this.enableBot
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: "bot.manage.enable",
        defaultMessage: "Enable"
      })));
    }

    if (this.state.creatingTokenState === 'OPEN') {
      tokenList.push(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        key: 'create',
        className: "bot-list__item"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        key: 'create'
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
        className: "form-horizontal",
        onSubmit: this.handleCreateToken
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "col-sm-auto control-label"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: "user.settings.tokens.name",
        defaultMessage: "Token Description: "
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "col-sm-4"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        autoFocus: true,
        className: "form-control form-sm",
        type: "text",
        maxLength: 64,
        value: this.state.token.description,
        onChange: this.handleUpdateDescription
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "padding-top padding-bottom"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: "user.settings.tokens.nameHelp",
        defaultMessage: "Enter a description for your token to remember what it does."
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        id: "clientError",
        className: "has-error is-empty"
      }, this.state.error), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "margin-top"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_save_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        btnClass: "btn-sm btn-primary",
        savingMessage: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          id: "user.settings.tokens.save",
          defaultMessage: "Save"
        }),
        saving: false
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        className: "btn btn-sm btn-link",
        onClick: this.closeCreateToken
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: "user.settings.tokens.cancel",
        defaultMessage: "Cancel"
      }))))))));
    } else if (this.state.creatingTokenState === 'CREATED') {
      tokenList.push(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        key: 'created',
        className: "bot-list__item alert alert-warning"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "margin-bottom"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_widgets_icons_fa_warning_icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
        additionalClassName: "margin-right"
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: "user.settings.tokens.copy",
        defaultMessage: "Please copy the access token below. You won't be able to see it again!"
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "whitespace--nowrap overflow--ellipsis"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: "user.settings.tokens.name",
        defaultMessage: "Token Description: "
      }), this.state.token.description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "whitespace--nowrap overflow--ellipsis"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: "user.settings.tokens.id",
        defaultMessage: "Token ID: "
      }), this.state.token.id), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", {
        className: "word-break--all"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: "user.settings.tokens.token",
        defaultMessage: "Access Token: "
      }), this.state.token.token), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "margin-top"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        className: "btn btn-sm btn-primary",
        onClick: this.closeCreateToken
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: "bot.create_token.close",
        defaultMessage: "Close"
      })))));
    }

    const imageURL = utils_utils_jsx__WEBPACK_IMPORTED_MODULE_10__["imageURLForUser"](this.props.bot.user_id);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "backstage-list__item"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: 'bot-list-img-container'
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      className: 'bot-list-img',
      alt: 'bot image',
      src: imageURL
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "item-details"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "item-details__row d-flex flex-column flex-md-row justify-content-between"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", {
      className: "item-details__name"
    }, displayName + ' (@' + username + ')'), options), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "bot-details__description"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_markdown__WEBPACK_IMPORTED_MODULE_7__["default"], {
      message: description
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "light small"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: "bots.managed_by",
      defaultMessage: "Managed by "
    }), ownerUsername), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "bot-list is-empty"
    }, tokenList)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_confirm_modal_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: "bots.token.delete",
        defaultMessage: "Delete Token"
      }),
      message: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: "bots.token.confirm_text",
        defaultMessage: "Are you sure you want to delete the token?"
      }),
      confirmButtonText: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: "bots.token.confirm",
        defaultMessage: "Delete"
      }),
      show: this.state.confirmingId !== '',
      onConfirm: this.revokeTokenConfirmed,
      onCancel: this.closeConfirm
    }));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(Bot, "propTypes", {
  /**
  *  Bot that we are displaying
  */
  bot: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
  * Owner of the bot we are displaying
  */
  owner: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
  * The access tokens of the bot user
  */
  accessTokens: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
  * String used for filtering bot items
  */
  filter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    /**
    * Disable a bot
    */
    disableBot: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,

    /**
    * Enable a bot
    */
    enableBot: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,

    /**
    * Access token managment
    */
    createUserAccessToken: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
    revokeUserAccessToken: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
    enableUserAccessToken: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
    disableUserAccessToken: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
  }),

  /**
  *  Only used for routing since backstage is team based.
  */
  team: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(matchesFilter, "matchesFilter", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/bots/bot.jsx");
  reactHotLoader.register(Bot, "Bot", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/bots/bot.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/bots/bots.jsx":
/*!***********************************************!*\
  !*** ./components/integrations/bots/bots.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bots; });
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var utils_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/url */ "./utils/url.tsx");
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");
/* harmony import */ var components_backstage_components_backstage_list_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/backstage/components/backstage_list.jsx */ "./components/backstage/components/backstage_list.jsx");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/constants */ "./utils/constants.jsx");
/* harmony import */ var components_formatted_markdown_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/formatted_markdown_message */ "./components/formatted_markdown_message.jsx");
/* harmony import */ var _bot_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bot.jsx */ "./components/integrations/bots/bot.jsx");



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









class Bots extends react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "botToJSX", bot => {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_bot_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
        key: bot.user_id,
        bot: bot,
        owner: this.props.owners[bot.user_id],
        accessTokens: this.props.accessTokens[bot.user_id] || {},
        actions: this.props.actions,
        team: this.props.team
      });
    });

    _defineProperty(this, "bots", filter => {
      const bots = Object.values(this.props.bots).sort((a, b) => a.username.localeCompare(b.username));

      const match = bot => Object(_bot_jsx__WEBPACK_IMPORTED_MODULE_10__["matchesFilter"])(bot, filter, this.props.owners[bot.user_id]);

      const enabledBots = bots.filter(bot => bot.delete_at === 0).filter(match).map(this.botToJSX);
      const disabledBots = bots.filter(bot => bot.delete_at > 0).filter(match).map(this.botToJSX);
      const sections = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        key: "sections"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(this.EnabledSection, {
        enabledBots: enabledBots
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(this.DisabledSection, {
        hasDisabled: disabledBots.length > 0,
        disabledBots: disabledBots
      }));
      return [sections, enabledBots.length > 0 || disabledBots.length > 0];
    });

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.props.actions.loadBots(utils_constants__WEBPACK_IMPORTED_MODULE_8__["default"].Integrations.START_PAGE_NUM, utils_constants__WEBPACK_IMPORTED_MODULE_8__["default"].Integrations.PAGE_SIZE).then(result => {
      if (result.data) {
        const promises = [];

        for (const bot of result.data) {
          // We don't need to wait for this and we need to accept failure in the case where bot.owner_id is a plugin id
          this.props.actions.getUser(bot.owner_id); // We want to wait for these.

          promises.push(this.props.actions.getUser(bot.user_id));
          promises.push(this.props.actions.getUserAccessTokensForUser(bot.user_id));
        }

        Promise.all(promises).then(() => {
          this.setState({
            loading: false
          });
        });
      }
    });
  }

  DisabledSection(props) {
    if (!props.hasDisabled) {
      return null;
    }

    const botsToDisplay = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.map(props.disabledBots, child => {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(child, {
        filter: props.filter
      });
    });
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "bot-disabled"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "bots.disabled",
      defaultMessage: "Disabled"
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "bot-list__disabled"
    }, botsToDisplay));
  }

  EnabledSection(props) {
    const botsToDisplay = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.map(props.enabledBots, child => {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(child, {
        filter: props.filter
      });
    });
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, botsToDisplay);
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_backstage_components_backstage_list_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
      header: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "bots.manage.header",
        defaultMessage: "Bot Accounts"
      }),
      addText: this.props.createBots && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "bots.manage.add",
        defaultMessage: "Add Bot Account"
      }),
      addLink: '/' + this.props.team.name + '/integrations/bots/add',
      addButtonId: "addBotAccount",
      emptyText: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "bots.manage.empty",
        defaultMessage: "No bot accounts found"
      }),
      emptyTextSearch: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_formatted_markdown_message__WEBPACK_IMPORTED_MODULE_9__["default"], {
        id: "bots.manage.emptySearch",
        defaultMessage: "No bot accounts match **{searchTerm}**"
      }),
      helpText: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "bots.manage.help1",
        defaultMessage: "Use {botAccounts} to integrate with Mattermost through plugins or the API. Bot accounts are available to everyone on your server. ",
        values: {
          botAccounts: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://mattermost.com/pl/default-bot-accounts"
          }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
            id: "bots.manage.bot_accounts",
            defaultMessage: "Bot Accounts"
          }))
        }
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_formatted_markdown_message__WEBPACK_IMPORTED_MODULE_9__["default"], {
        id: "bots.manage.help2",
        defaultMessage: 'Enable bot account creation in the [System Console]({siteURL}/admin_console/integrations/bot_accounts).',
        values: {
          siteURL: Object(utils_url__WEBPACK_IMPORTED_MODULE_5__["getSiteURL"])()
        }
      })),
      searchPlaceholder: utils_utils_jsx__WEBPACK_IMPORTED_MODULE_6__["localizeMessage"]('bots.manage.search', 'Search Bot Accounts'),
      loading: this.state.loading
    }, this.bots);
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(Bots, "propTypes", {
  /**
  *  Map from botUserId to bot.
  */
  bots: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,

  /**
  *  Map from botUserId to accessTokens.
  */
  accessTokens: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,

  /**
  *  Map from botUserId to owner.
  */
  owners: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  createBots: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    /**
    * Ensure we have bot accounts
    */
    loadBots: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,

    /**
    * Load access tokens for bot accounts
    */
    getUserAccessTokensForUser: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,

    /**
    * Access token managment
    */
    createUserAccessToken: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
    revokeUserAccessToken: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
    enableUserAccessToken: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
    disableUserAccessToken: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,

    /**
    * Load owner of bot account
    */
    getUser: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,

    /**
    * Disable a bot
    */
    disableBot: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,

    /**
    * Enable a bot
    */
    enableBot: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
  }),

  /**
  *  Only used for routing since backstage is team based.
  */
  team: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Bots, "Bots", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/bots/bots.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/bots/index.js":
/*!***********************************************!*\
  !*** ./components/integrations/bots/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var mattermost_redux_selectors_entities_bots__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/selectors/entities/bots */ "./node_modules/mattermost-redux/selectors/entities/bots.js");
/* harmony import */ var mattermost_redux_selectors_entities_bots__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_bots__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mattermost-redux/selectors/entities/general */ "./node_modules/mattermost-redux/selectors/entities/general.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mattermost_redux_actions_bots__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mattermost-redux/actions/bots */ "./node_modules/mattermost-redux/actions/bots.js");
/* harmony import */ var mattermost_redux_actions_bots__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_bots__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mattermost-redux/actions/users */ "./node_modules/mattermost-redux/actions/users.js");
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mattermost-redux/selectors/entities/users */ "./node_modules/mattermost-redux/selectors/entities/users.js");
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _bots_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bots.jsx */ "./components/integrations/bots/bots.jsx");
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
  const createBots = config.EnableBotAccountCreation === 'true';
  const bots = Object(mattermost_redux_selectors_entities_bots__WEBPACK_IMPORTED_MODULE_2__["getBotAccounts"])(state);
  const owners = Object.values(bots).reduce((result, bot) => {
    result[bot.user_id] = mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_6__["getUser"](state, bot.owner_id);
    return result;
  }, {});
  return {
    createBots,
    bots,
    accessTokens: state.entities.admin.userAccessTokensByUser,
    owners
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
      loadBots: mattermost_redux_actions_bots__WEBPACK_IMPORTED_MODULE_4__["loadBots"],
      getUserAccessTokensForUser: mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_5__["getUserAccessTokensForUser"],
      createUserAccessToken: mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_5__["createUserAccessToken"],
      revokeUserAccessToken: mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_5__["revokeUserAccessToken"],
      enableUserAccessToken: mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_5__["enableUserAccessToken"],
      disableUserAccessToken: mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_5__["disableUserAccessToken"],
      getUser: mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_5__["getUser"],
      disableBot: mattermost_redux_actions_bots__WEBPACK_IMPORTED_MODULE_4__["disableBot"],
      enableBot: mattermost_redux_actions_bots__WEBPACK_IMPORTED_MODULE_4__["enableBot"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_bots_jsx__WEBPACK_IMPORTED_MODULE_7__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/bots/index.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/bots/index.js");
  reactHotLoader.register(_default, "default", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/bots/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/commands_container/commands_container.jsx":
/*!***************************************************************************!*\
  !*** ./components/integrations/commands_container/commands_container.jsx ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CommandsContainer; });
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var components_integrations_installed_commands__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/integrations/installed_commands */ "./components/integrations/installed_commands/index.js");
/* harmony import */ var components_integrations_add_command__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/integrations/add_command */ "./components/integrations/add_command/index.js");
/* harmony import */ var components_integrations_edit_command__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/integrations/edit_command */ "./components/integrations/edit_command/index.js");
/* harmony import */ var components_integrations_confirm_integration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/integrations/confirm_integration */ "./components/integrations/confirm_integration/index.js");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








const CommandRoute = (_ref) => {
  let {
    component: Component,
    extraProps
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["component", "extraProps"]);

  return (//eslint-disable-line react/prop-types
    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], Object.assign({}, rest, {
      render: props => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object.assign({}, extraProps, props))
    }))
  );
};

class CommandsContainer extends react__WEBPACK_IMPORTED_MODULE_2___default.a.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    if (this.props.enableCommands) {
      this.props.actions.loadCommandsAndProfilesForTeam(this.props.team.id).then(() => this.setState({
        loading: false
      }));
    }
  }

  render() {
    const extraProps = {
      loading: this.state.loading,
      commands: this.props.commands || [],
      users: this.props.users,
      team: this.props.team,
      user: this.props.user
    };
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      exact: true,
      path: "".concat(this.props.match.url, "/"),
      render: () => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
        to: "".concat(this.props.match.url, "/installed")
      })
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CommandRoute, {
      extraProps: extraProps,
      path: "".concat(this.props.match.url, "/installed"),
      component: components_integrations_installed_commands__WEBPACK_IMPORTED_MODULE_4__["default"]
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CommandRoute, {
      extraProps: extraProps,
      path: "".concat(this.props.match.url, "/add"),
      component: components_integrations_add_command__WEBPACK_IMPORTED_MODULE_5__["default"]
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CommandRoute, {
      extraProps: extraProps,
      path: "".concat(this.props.match.url, "/edit"),
      component: components_integrations_edit_command__WEBPACK_IMPORTED_MODULE_6__["default"]
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CommandRoute, {
      extraProps: extraProps,
      path: "".concat(this.props.match.url, "/confirm"),
      component: components_integrations_confirm_integration__WEBPACK_IMPORTED_MODULE_7__["default"]
    })));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(CommandsContainer, "propTypes", {
  /**
  * The team data needed to pass into child components
  */
  team: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
  * The user data needed to pass into child components
  */
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
  * The users collection
  */
  users: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
  * Installed slash commands to display
  */
  commands: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

  /**
  * Object from react-router
  */
  match: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    /**
    * The function to call to fetch team commands
    */
    loadCommandsAndProfilesForTeam: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  }).isRequired,

  /**
  * Whether or not commands are enabled.
  */
  enableCommands: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CommandRoute, "CommandRoute", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/commands_container/commands_container.jsx");
  reactHotLoader.register(CommandsContainer, "CommandsContainer", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/commands_container/commands_container.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/commands_container/index.js":
/*!*************************************************************!*\
  !*** ./components/integrations/commands_container/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var mattermost_redux_selectors_entities_integrations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/selectors/entities/integrations */ "./node_modules/mattermost-redux/selectors/entities/integrations.js");
/* harmony import */ var mattermost_redux_selectors_entities_integrations__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_integrations__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mattermost-redux/selectors/entities/users */ "./node_modules/mattermost-redux/selectors/entities/users.js");
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mattermost-redux/selectors/entities/general */ "./node_modules/mattermost-redux/selectors/entities/general.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var actions_integration_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! actions/integration_actions */ "./actions/integration_actions.jsx");
/* harmony import */ var _commands_container_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./commands_container.jsx */ "./components/integrations/commands_container/commands_container.jsx");
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
  const config = Object(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_4__["getConfig"])(state);
  const enableCommands = config.EnableCommands === 'true';
  return {
    commands: Object.values(Object(mattermost_redux_selectors_entities_integrations__WEBPACK_IMPORTED_MODULE_2__["getCommands"])(state)),
    users: Object(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_3__["getUsers"])(state),
    enableCommands
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
      loadCommandsAndProfilesForTeam: actions_integration_actions__WEBPACK_IMPORTED_MODULE_5__["loadCommandsAndProfilesForTeam"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_commands_container_jsx__WEBPACK_IMPORTED_MODULE_6__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/commands_container/index.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/commands_container/index.js");
  reactHotLoader.register(_default, "default", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/commands_container/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/confirm_integration/confirm_integration.jsx":
/*!*****************************************************************************!*\
  !*** ./components/integrations/confirm_integration/confirm_integration.jsx ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConfirmIntegration; });
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var utils_browser_history__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/browser_history */ "./utils/browser_history.jsx");
/* harmony import */ var utils_constants_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/constants.jsx */ "./utils/constants.jsx");
/* harmony import */ var components_copy_text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/copy_text */ "./components/copy_text.tsx");
/* harmony import */ var components_backstage_components_backstage_header_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/backstage/components/backstage_header.jsx */ "./components/backstage/components/backstage_header.jsx");
/* harmony import */ var utils_url__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! utils/url */ "./utils/url.tsx");
/* harmony import */ var components_formatted_markdown_message__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/formatted_markdown_message */ "./components/formatted_markdown_message.jsx");





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










class ConfirmIntegration extends react__WEBPACK_IMPORTED_MODULE_5___default.a.Component {
  static get propTypes() {
    return {
      team: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
      location: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
      commands: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
      oauthApps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
      incomingHooks: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
      outgoingHooks: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
      bots: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
    };
  }

  constructor(props) {
    super(props);

    _defineProperty(this, "handleKeyPress", e => {
      if (e.key === 'Enter') {
        utils_browser_history__WEBPACK_IMPORTED_MODULE_8__["browserHistory"].push('/' + this.props.team.name + '/integrations/' + this.state.type);
      }
    });

    this.state = {
      type: new URLSearchParams(this.props.location.search).get('type'),
      id: new URLSearchParams(this.props.location.search).get('id')
    };
  }

  componentDidMount() {
    window.addEventListener('keypress', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.handleKeyPress);
  }

  render() {
    let headerText = null;
    let helpText = null;
    let tokenText = null;
    const command = this.props.commands[this.state.id];
    const incomingHook = this.props.incomingHooks[this.state.id];
    const outgoingHook = this.props.outgoingHooks[this.state.id];
    const oauthApp = this.props.oauthApps[this.state.id];
    const bot = this.props.bots[this.state.id];

    if (this.state.type === utils_constants_jsx__WEBPACK_IMPORTED_MODULE_9__["Constants"].Integrations.COMMAND && command) {
      const commandToken = command.token;
      headerText = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
        id: 'installed_commands.header',
        defaultMessage: "Slash Commands"
      });
      helpText = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_formatted_markdown_message__WEBPACK_IMPORTED_MODULE_13__["default"], {
        id: "add_command.doneHelp",
        defaultMessage: "Your slash command has been set up. The following token will be sent in the outgoing payload. Please use it to verify the request came from your Mattermost team (see [documentation](!https://docs.mattermost.com/developer/slash-commands.html) for further details)."
      }));
      tokenText = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "word-break--all"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_formatted_markdown_message__WEBPACK_IMPORTED_MODULE_13__["default"], {
        id: "add_command.token",
        defaultMessage: "**Token**: {token}",
        values: {
          token: commandToken
        }
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_copy_text__WEBPACK_IMPORTED_MODULE_10__["default"], {
        value: commandToken
      }));
    } else if (this.state.type === utils_constants_jsx__WEBPACK_IMPORTED_MODULE_9__["Constants"].Integrations.INCOMING_WEBHOOK && incomingHook) {
      const incomingHookToken = Object(utils_url__WEBPACK_IMPORTED_MODULE_12__["getSiteURL"])() + '/hooks/' + incomingHook.id;
      headerText = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
        id: 'installed_incoming_webhooks.header',
        defaultMessage: "Incoming Webhooks"
      });
      helpText = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_formatted_markdown_message__WEBPACK_IMPORTED_MODULE_13__["default"], {
        id: "add_incoming_webhook.doneHelp",
        defaultMessage: "Your incoming webhook has been set up. Please send data to the following URL (see [documentation](!https://docs.mattermost.com/developer/webhooks-incoming.html) for further details)."
      }));
      tokenText = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "word-break--all"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_formatted_markdown_message__WEBPACK_IMPORTED_MODULE_13__["default"], {
        id: "add_incoming_webhook.url",
        defaultMessage: "**URL**: {url}",
        values: {
          url: '`' + incomingHookToken + '`'
        }
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_copy_text__WEBPACK_IMPORTED_MODULE_10__["default"], {
        idMessage: "integrations.copy_client_secret",
        defaultMessage: "Copy Client Secret",
        value: incomingHookToken
      }));
    } else if (this.state.type === utils_constants_jsx__WEBPACK_IMPORTED_MODULE_9__["Constants"].Integrations.OUTGOING_WEBHOOK && outgoingHook) {
      const outgoingHookToken = outgoingHook.token;
      headerText = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
        id: 'installed_outgoing_webhooks.header',
        defaultMessage: "Outgoing Webhooks"
      });
      helpText = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_formatted_markdown_message__WEBPACK_IMPORTED_MODULE_13__["default"], {
        id: "add_outgoing_webhook.doneHelp",
        defaultMessage: "Your outgoing webhook has been set up. The following token will be sent in the outgoing payload. Please use it to verify the request came from your Mattermost team (see [documentation](!https://docs.mattermost.com/developer/webhooks-outgoing.html) for further details)."
      }));
      tokenText = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "word-break--all"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_formatted_markdown_message__WEBPACK_IMPORTED_MODULE_13__["default"], {
        id: "add_outgoing_webhook.token",
        defaultMessage: "**Token**: {token}",
        values: {
          token: outgoingHookToken
        }
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_copy_text__WEBPACK_IMPORTED_MODULE_10__["default"], {
        value: outgoingHookToken
      }));
    } else if (this.state.type === utils_constants_jsx__WEBPACK_IMPORTED_MODULE_9__["Constants"].Integrations.OAUTH_APP && oauthApp) {
      const oauthAppToken = oauthApp.id;
      const oauthAppSecret = oauthApp.client_secret;
      headerText = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
        id: 'installed_oauth_apps.header',
        defaultMessage: "OAuth 2.0 Applications"
      });
      helpText = [];
      helpText.push(react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        key: "add_oauth_app.doneHelp"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_formatted_markdown_message__WEBPACK_IMPORTED_MODULE_13__["default"], {
        id: "add_oauth_app.doneHelp",
        defaultMessage: "Your OAuth 2.0 application has been set up. Please use the following Client ID and Client Secret when requesting authorization for your application (see [documentation](!https://docs.mattermost.com/developer/oauth-2-0-applications.html) for further details)."
      })));
      helpText.push(react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        key: "add_oauth_app.clientId"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_formatted_markdown_message__WEBPACK_IMPORTED_MODULE_13__["default"], {
        id: "add_oauth_app.clientId",
        defaultMessage: "**Client ID**: {id}",
        values: {
          id: oauthAppToken
        }
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_copy_text__WEBPACK_IMPORTED_MODULE_10__["default"], {
        idMessage: "integrations.copy_client_id",
        defaultMessage: "Copy Client Id",
        value: oauthAppToken
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_formatted_markdown_message__WEBPACK_IMPORTED_MODULE_13__["default"], {
        id: "add_oauth_app.clientSecret",
        defaultMessage: "**Client Secret**: {secret}",
        values: {
          secret: oauthAppSecret
        }
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_copy_text__WEBPACK_IMPORTED_MODULE_10__["default"], {
        idMessage: "integrations.copy_client_secret",
        defaultMessage: "Copy Client Secret",
        value: oauthAppSecret
      })));
      helpText.push(react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        key: "add_oauth_app.doneUrlHelp"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
        id: "add_oauth_app.doneUrlHelp",
        defaultMessage: "The following are your authorized redirect URL(s)."
      })));
      tokenText = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "word-break--all"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_formatted_markdown_message__WEBPACK_IMPORTED_MODULE_13__["default"], {
        id: "add_oauth_app.url",
        defaultMessage: "**URL(s)**: {url}",
        values: {
          url: oauthApp.callback_urls
        }
      }));
    } else if (this.state.type === utils_constants_jsx__WEBPACK_IMPORTED_MODULE_9__["Constants"].Integrations.BOT && bot) {
      const botToken = new URLSearchParams(this.props.location.search).get('token');
      headerText = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
        id: "bots.manage.header",
        defaultMessage: "Bot Accounts"
      });
      helpText = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_formatted_markdown_message__WEBPACK_IMPORTED_MODULE_13__["default"], {
        id: "bots.manage.created.text",
        defaultMessage: "Your bot account **{botname}** has been created successfully. Please use the following access token to connect to the bot (see [documentation](https://mattermost.com/pl/default-bot-accounts) for further details).",
        values: {
          botname: bot.display_name || bot.username
        }
      }));
      tokenText = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "word-break--all"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_formatted_markdown_message__WEBPACK_IMPORTED_MODULE_13__["default"], {
        id: "add_outgoing_webhook.token",
        defaultMessage: "**Token**: {token}",
        values: {
          token: botToken
        }
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_copy_text__WEBPACK_IMPORTED_MODULE_10__["default"], {
        value: botToken
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_formatted_markdown_message__WEBPACK_IMPORTED_MODULE_13__["default"], {
        id: "add_outgoing_webhook.token.message",
        defaultMessage: "Make sure to add this bot account to teams and channels you want it to interact in. See [documentation](https://mattermost.com/pl/default-bot-accounts) to learn more."
      }));
    } else {
      utils_browser_history__WEBPACK_IMPORTED_MODULE_8__["browserHistory"].replace("/error?type=".concat(utils_constants_jsx__WEBPACK_IMPORTED_MODULE_9__["ErrorPageTypes"].PAGE_NOT_FOUND));
      return '';
    }

    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "backstage-content row"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_backstage_components_backstage_header_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
      to: '/' + this.props.team.name + '/integrations/' + this.state.type
    }, headerText), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "integrations.add",
      defaultMessage: "Add"
    })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "backstage-form backstage-form__confirmation"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
      className: "backstage-form__title",
      id: "formTitle"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "integrations.successful",
      defaultMessage: "Setup Successful"
    })), helpText, tokenText, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "backstage-form__footer"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
      className: "btn btn-primary",
      type: "submit",
      to: '/' + this.props.team.name + '/integrations/' + this.state.type,
      id: "doneButton"
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "integrations.done",
      defaultMessage: "Done"
    })))));
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

  reactHotLoader.register(ConfirmIntegration, "ConfirmIntegration", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/confirm_integration/confirm_integration.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/confirm_integration/index.js":
/*!**************************************************************!*\
  !*** ./components/integrations/confirm_integration/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var mattermost_redux_selectors_entities_integrations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mattermost-redux/selectors/entities/integrations */ "./node_modules/mattermost-redux/selectors/entities/integrations.js");
/* harmony import */ var mattermost_redux_selectors_entities_integrations__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_integrations__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mattermost_redux_selectors_entities_bots__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/selectors/entities/bots */ "./node_modules/mattermost-redux/selectors/entities/bots.js");
/* harmony import */ var mattermost_redux_selectors_entities_bots__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_bots__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _confirm_integration_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm_integration.jsx */ "./components/integrations/confirm_integration/confirm_integration.jsx");
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
  return {
    commands: Object(mattermost_redux_selectors_entities_integrations__WEBPACK_IMPORTED_MODULE_1__["getCommands"])(state),
    oauthApps: Object(mattermost_redux_selectors_entities_integrations__WEBPACK_IMPORTED_MODULE_1__["getOAuthApps"])(state),
    incomingHooks: Object(mattermost_redux_selectors_entities_integrations__WEBPACK_IMPORTED_MODULE_1__["getIncomingHooks"])(state),
    outgoingHooks: Object(mattermost_redux_selectors_entities_integrations__WEBPACK_IMPORTED_MODULE_1__["getOutgoingHooks"])(state),
    bots: Object(mattermost_redux_selectors_entities_bots__WEBPACK_IMPORTED_MODULE_2__["getBotAccounts"])(state)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(_confirm_integration_jsx__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/confirm_integration/index.js");
  reactHotLoader.register(_default, "default", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/confirm_integration/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/delete_integration.jsx":
/*!********************************************************!*\
  !*** ./components/integrations/delete_integration.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DeleteIntegration; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var components_delete_modal_trigger_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/delete_modal_trigger.jsx */ "./components/delete_modal_trigger.jsx");
/* harmony import */ var components_widgets_icons_fa_warning_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/widgets/icons/fa_warning_icon */ "./components/widgets/icons/fa_warning_icon.tsx");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





class DeleteIntegration extends components_delete_modal_trigger_jsx__WEBPACK_IMPORTED_MODULE_3__["default"] {
  get triggerTitle() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "installed_integrations.delete",
      defaultMessage: "Delete"
    });
  }

  get modalTitle() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "integrations.delete.confirm.title",
      defaultMessage: "Delete Integration"
    });
  }

  get modalMessage() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "alert alert-warning"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_widgets_icons_fa_warning_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      additionalClassName: "fa-margin--right"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: this.props.messageId,
      defaultMessage: "This action permanently deletes the integration and breaks any integrations using it. Are you sure you want to delete it?"
    }));
  }

  get modalConfirmButton() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "integrations.delete.confirm.button",
      defaultMessage: "Delete"
    });
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}
DeleteIntegration.propTypes = {
  messageId: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  onDelete: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DeleteIntegration, "DeleteIntegration", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/delete_integration.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/edit_command/edit_command.jsx":
/*!***************************************************************!*\
  !*** ./components/integrations/edit_command/edit_command.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditCommand; });
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var utils_browser_history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/browser_history */ "./utils/browser_history.jsx");
/* harmony import */ var utils_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/i18n */ "./utils/i18n.jsx");
/* harmony import */ var components_loading_screen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/loading_screen */ "./components/loading_screen.tsx");
/* harmony import */ var components_confirm_modal_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/confirm_modal.jsx */ "./components/confirm_modal.jsx");
/* harmony import */ var _abstract_command_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../abstract_command.jsx */ "./components/integrations/abstract_command.jsx");


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








const HEADER = {
  id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('integrations.edit'),
  defaultMessage: 'Edit'
};
const FOOTER = {
  id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('edit_command.update'),
  defaultMessage: 'Update'
};
const LOADING = {
  id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('edit_command.updating'),
  defaultMessage: 'Updating...'
};
class EditCommand extends react__WEBPACK_IMPORTED_MODULE_2___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "editCommand", async command => {
      this.newCommand = command;

      if (this.state.originalCommand.id) {
        command.id = this.state.originalCommand.id;
      }

      if (this.state.originalCommand.url !== this.newCommand.url || this.state.originalCommand.trigger !== this.newCommand.trigger || this.state.originalCommand.method !== this.newCommand.method) {
        this.handleConfirmModal();
      } else {
        await this.submitCommand();
      }
    });

    _defineProperty(this, "handleConfirmModal", () => {
      this.setState({
        showConfirmModal: true
      });
    });

    _defineProperty(this, "confirmModalDismissed", () => {
      this.setState({
        showConfirmModal: false
      });
    });

    _defineProperty(this, "submitCommand", async () => {
      this.setState({
        serverError: ''
      });
      const {
        data,
        error
      } = await this.props.actions.editCommand(this.newCommand);

      if (data) {
        utils_browser_history__WEBPACK_IMPORTED_MODULE_4__["browserHistory"].push("/".concat(this.props.team.name, "/integrations/commands"));
        return;
      }

      this.setState({
        showConfirmModal: false
      });

      if (error) {
        this.setState({
          serverError: error.message
        });
      }
    });

    _defineProperty(this, "renderExtra", () => {
      const confirmButton = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "update_command.update",
        defaultMessage: "Update"
      });
      const confirmTitle = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "update_command.confirm",
        defaultMessage: "Edit Slash Command"
      });
      const confirmMessage = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "update_command.question",
        defaultMessage: "Your changes may break the existing slash command. Are you sure you would like to update it?"
      });
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_confirm_modal_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: confirmTitle,
        message: confirmMessage,
        confirmButtonText: confirmButton,
        show: this.state.showConfirmModal,
        onConfirm: this.submitCommand,
        onCancel: this.confirmModalDismissed
      });
    });

    this.state = {
      originalCommand: null,
      showConfirmModal: false,
      serverError: ''
    };
  }

  componentDidMount() {
    if (this.props.enableCommands) {
      this.props.actions.getCustomTeamCommands(this.props.team.id).then(() => {
        this.setState({
          originalCommand: Object.values(this.props.commands).filter(command => command.id === this.props.commandId)[0]
        });
      });
    }
  }

  render() {
    if (!this.state.originalCommand) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_loading_screen__WEBPACK_IMPORTED_MODULE_6__["default"], null);
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_abstract_command_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
      team: this.props.team,
      header: HEADER,
      footer: FOOTER,
      loading: LOADING,
      renderExtra: this.renderExtra(),
      action: this.editCommand,
      serverError: this.state.serverError,
      initialCommand: this.state.originalCommand
    });
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(EditCommand, "propTypes", {
  /**
  * The current team
  */
  team: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,

  /**
  * The id of the command to edit
  */
  commandId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,

  /**
  * Installed slash commands to display
  */
  commands: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    /**
    * The function to call to fetch team commands
    */
    getCustomTeamCommands: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,

    /**
    * The function to call to edit command
    */
    editCommand: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  }).isRequired,

  /**
  * Whether or not commands are enabled.
  */
  enableCommands: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(HEADER, "HEADER", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/edit_command/edit_command.jsx");
  reactHotLoader.register(FOOTER, "FOOTER", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/edit_command/edit_command.jsx");
  reactHotLoader.register(LOADING, "LOADING", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/edit_command/edit_command.jsx");
  reactHotLoader.register(EditCommand, "EditCommand", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/edit_command/edit_command.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/edit_command/index.js":
/*!*******************************************************!*\
  !*** ./components/integrations/edit_command/index.js ***!
  \*******************************************************/
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
/* harmony import */ var mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mattermost-redux/actions/integrations */ "./node_modules/mattermost-redux/actions/integrations.js");
/* harmony import */ var mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mattermost_redux_selectors_entities_integrations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mattermost-redux/selectors/entities/integrations */ "./node_modules/mattermost-redux/selectors/entities/integrations.js");
/* harmony import */ var mattermost_redux_selectors_entities_integrations__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_integrations__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mattermost-redux/selectors/entities/general */ "./node_modules/mattermost-redux/selectors/entities/general.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _edit_command_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit_command.jsx */ "./components/integrations/edit_command/edit_command.jsx");




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
  const config = Object(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_7__["getConfig"])(state);
  const commandId = new URLSearchParams(ownProps.location.search).get('id');
  const enableCommands = config.EnableCommands === 'true';
  return {
    commandId,
    commands: Object(mattermost_redux_selectors_entities_integrations__WEBPACK_IMPORTED_MODULE_6__["getCommands"])(state),
    enableCommands
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])({
      getCustomTeamCommands: mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_5__["getCustomTeamCommands"],
      editCommand: mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_5__["editCommand"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(_edit_command_jsx__WEBPACK_IMPORTED_MODULE_8__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/edit_command/index.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/edit_command/index.js");
  reactHotLoader.register(_default, "default", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/edit_command/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/edit_incoming_webhook/edit_incoming_webhook.jsx":
/*!*********************************************************************************!*\
  !*** ./components/integrations/edit_incoming_webhook/edit_incoming_webhook.jsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditIncomingWebhook; });
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_browser_history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/browser_history */ "./utils/browser_history.jsx");
/* harmony import */ var utils_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/i18n */ "./utils/i18n.jsx");
/* harmony import */ var components_integrations_abstract_incoming_webhook_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/integrations/abstract_incoming_webhook.jsx */ "./components/integrations/abstract_incoming_webhook.jsx");
/* harmony import */ var components_loading_screen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/loading_screen */ "./components/loading_screen.tsx");


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






const HEADER = {
  id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('integrations.edit'),
  defaultMessage: 'Edit'
};
const FOOTER = {
  id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('update_incoming_webhook.update'),
  defaultMessage: 'Update'
};
const LOADING = {
  id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('update_incoming_webhook.updating'),
  defaultMessage: 'Updating...'
};
class EditIncomingWebhook extends react__WEBPACK_IMPORTED_MODULE_2___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "editIncomingHook", async hook => {
      this.newHook = hook;

      if (this.props.hook.id) {
        hook.id = this.props.hook.id;
      }

      if (this.props.hook.token) {
        hook.token = this.props.hook.token;
      }

      await this.submitHook();
    });

    _defineProperty(this, "submitHook", async () => {
      this.setState({
        serverError: ''
      });
      const {
        data
      } = await this.props.actions.updateIncomingHook(this.newHook);

      if (data) {
        utils_browser_history__WEBPACK_IMPORTED_MODULE_3__["browserHistory"].push("/".concat(this.props.team.name, "/integrations/incoming_webhooks"));
        return;
      }

      if (this.props.updateIncomingHookRequest.error) {
        this.setState({
          serverError: this.props.updateIncomingHookRequest.error.message
        });
      }
    });

    this.state = {
      showConfirmModal: false,
      serverError: ''
    };
  }

  componentDidMount() {
    if (this.props.enableIncomingWebhooks) {
      this.props.actions.getIncomingHook(this.props.hookId);
    }
  }

  render() {
    if (!this.props.hook) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_loading_screen__WEBPACK_IMPORTED_MODULE_6__["default"], null);
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_integrations_abstract_incoming_webhook_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
      team: this.props.team,
      header: HEADER,
      footer: FOOTER,
      loading: LOADING,
      enablePostUsernameOverride: this.props.enablePostUsernameOverride,
      enablePostIconOverride: this.props.enablePostIconOverride,
      action: this.editIncomingHook,
      serverError: this.state.serverError,
      initialHook: this.props.hook
    });
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(EditIncomingWebhook, "propTypes", {
  /**
  * The current team
  */
  team: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,

  /**
  * The incoming webhook to edit
  */
  hook: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
  * The id of the incoming webhook to edit
  */
  hookId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,

  /**
  * The request state for updateIncomingHook action. Contains status and error
  */
  updateIncomingHookRequest: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,

  /**
  * Whether or not incoming webhooks are enabled.
  */
  enableIncomingWebhooks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,

  /**
  * Whether to allow configuration of the default post username.
  */
  enablePostUsernameOverride: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,

  /**
  * Whether to allow configuration of the default post icon.
  */
  enablePostIconOverride: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    /**
    * The function to call to update an incoming webhook
    */
    updateIncomingHook: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,

    /**
    * The function to call to get an incoming webhook
    */
    getIncomingHook: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  }).isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(HEADER, "HEADER", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/edit_incoming_webhook/edit_incoming_webhook.jsx");
  reactHotLoader.register(FOOTER, "FOOTER", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/edit_incoming_webhook/edit_incoming_webhook.jsx");
  reactHotLoader.register(LOADING, "LOADING", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/edit_incoming_webhook/edit_incoming_webhook.jsx");
  reactHotLoader.register(EditIncomingWebhook, "EditIncomingWebhook", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/edit_incoming_webhook/edit_incoming_webhook.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/edit_incoming_webhook/index.js":
/*!****************************************************************!*\
  !*** ./components/integrations/edit_incoming_webhook/index.js ***!
  \****************************************************************/
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
/* harmony import */ var mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mattermost-redux/actions/integrations */ "./node_modules/mattermost-redux/actions/integrations.js");
/* harmony import */ var mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mattermost-redux/selectors/entities/general */ "./node_modules/mattermost-redux/selectors/entities/general.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _edit_incoming_webhook_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit_incoming_webhook.jsx */ "./components/integrations/edit_incoming_webhook/edit_incoming_webhook.jsx");




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
  const config = Object(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_6__["getConfig"])(state);
  const enableIncomingWebhooks = config.EnableIncomingWebhooks === 'true';
  const enablePostUsernameOverride = config.EnablePostUsernameOverride === 'true';
  const enablePostIconOverride = config.EnablePostIconOverride === 'true';
  const hookId = new URLSearchParams(ownProps.location.search).get('id');
  return {
    hookId,
    hook: state.entities.integrations.incomingHooks[hookId],
    updateIncomingHookRequest: state.requests.integrations.updateIncomingHook,
    enableIncomingWebhooks,
    enablePostUsernameOverride,
    enablePostIconOverride
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])({
      updateIncomingHook: mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_5__["updateIncomingHook"],
      getIncomingHook: mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_5__["getIncomingHook"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(_edit_incoming_webhook_jsx__WEBPACK_IMPORTED_MODULE_7__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/edit_incoming_webhook/index.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/edit_incoming_webhook/index.js");
  reactHotLoader.register(_default, "default", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/edit_incoming_webhook/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/edit_oauth_app/edit_oauth_app.jsx":
/*!*******************************************************************!*\
  !*** ./components/integrations/edit_oauth_app/edit_oauth_app.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditOAuthApp; });
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var utils_browser_history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/browser_history */ "./utils/browser_history.jsx");
/* harmony import */ var components_loading_screen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/loading_screen */ "./components/loading_screen.tsx");
/* harmony import */ var components_confirm_modal_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/confirm_modal.jsx */ "./components/confirm_modal.jsx");
/* harmony import */ var _abstract_oauth_app_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../abstract_oauth_app.jsx */ "./components/integrations/abstract_oauth_app.jsx");


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







const HEADER = {
  id: 'integrations.edit',
  defaultMessage: 'Edit'
};
const FOOTER = {
  id: 'update_incoming_webhook.update',
  defaultMessage: 'Update'
};
const LOADING = {
  id: 'update_incoming_webhook.updating',
  defaultMessage: 'Updating...'
};
class EditOAuthApp extends react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "editOAuthApp", async app => {
      this.newApp = app;

      if (this.props.oauthApp.id) {
        app.id = this.props.oauthApp.id;
      }

      if (this.props.oauthApp.token) {
        app.token = this.props.oauthApp.token;
      }

      const callbackUrlsSame = this.props.oauthApp.callback_urls.length === app.callback_urls.length && this.props.oauthApp.callback_urls.every((v, i) => v === app.callback_urls[i]);

      if (callbackUrlsSame === false) {
        this.handleConfirmModal();
      } else {
        await this.submitOAuthApp();
      }
    });

    _defineProperty(this, "handleConfirmModal", () => {
      this.setState({
        showConfirmModal: true
      });
    });

    _defineProperty(this, "confirmModalDismissed", () => {
      this.setState({
        showConfirmModal: false
      });
    });

    _defineProperty(this, "submitOAuthApp", async () => {
      this.setState({
        serverError: ''
      });
      const {
        data,
        error
      } = await this.props.actions.editOAuthApp(this.newApp);

      if (data) {
        utils_browser_history__WEBPACK_IMPORTED_MODULE_4__["browserHistory"].push("/".concat(this.props.team.name, "/integrations/oauth2-apps"));
        return;
      }

      this.setState({
        showConfirmModal: false
      });

      if (error) {
        this.setState({
          serverError: error.message
        });
      }
    });

    _defineProperty(this, "renderExtra", () => {
      const confirmButton = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "update_command.update",
        defaultMessage: "Update"
      });
      const confirmTitle = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "update_oauth_app.confirm",
        defaultMessage: "Edit OAuth 2.0 application"
      });
      const confirmMessage = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "update_oauth_app.question",
        defaultMessage: "Your changes may break the existing OAuth 2.0 application. Are you sure you would like to update it?"
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_confirm_modal_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: confirmTitle,
        message: confirmMessage,
        confirmButtonText: confirmButton,
        show: this.state.showConfirmModal,
        onConfirm: this.submitOAuthApp,
        onCancel: this.confirmModalDismissed
      });
    });

    this.state = {
      showConfirmModal: false,
      serverError: ''
    };
  }

  componentDidMount() {
    if (this.props.enableOAuthServiceProvider) {
      this.props.actions.getOAuthApp(this.props.oauthAppId);
    }
  }

  render() {
    if (!this.props.oauthApp) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_loading_screen__WEBPACK_IMPORTED_MODULE_5__["default"], null);
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_abstract_oauth_app_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
      team: this.props.team,
      header: HEADER,
      footer: FOOTER,
      loading: LOADING,
      renderExtra: this.renderExtra(),
      action: this.editOAuthApp,
      serverError: this.state.serverError,
      initialApp: this.props.oauthApp
    });
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(EditOAuthApp, "propTypes", {
  /**
  * The current team
  */
  team: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,

  /**
  * The id of the OAuthApp to edit
  */
  oauthAppId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
  * The OAuthApp data
  */
  oauthApp: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    /**
    * The function to call to get OAuthApp
    */
    getOAuthApp: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,

    /**
    * The function to call to edit OAuthApp
    */
    editOAuthApp: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
  }).isRequired,

  /**
  * Whether or not OAuth applications are enabled.
  */
  enableOAuthServiceProvider: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(HEADER, "HEADER", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/edit_oauth_app/edit_oauth_app.jsx");
  reactHotLoader.register(FOOTER, "FOOTER", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/edit_oauth_app/edit_oauth_app.jsx");
  reactHotLoader.register(LOADING, "LOADING", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/edit_oauth_app/edit_oauth_app.jsx");
  reactHotLoader.register(EditOAuthApp, "EditOAuthApp", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/edit_oauth_app/edit_oauth_app.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/edit_oauth_app/index.js":
/*!*********************************************************!*\
  !*** ./components/integrations/edit_oauth_app/index.js ***!
  \*********************************************************/
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
/* harmony import */ var mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mattermost-redux/actions/integrations */ "./node_modules/mattermost-redux/actions/integrations.js");
/* harmony import */ var mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mattermost-redux/selectors/entities/general */ "./node_modules/mattermost-redux/selectors/entities/general.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _edit_oauth_app_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit_oauth_app.jsx */ "./components/integrations/edit_oauth_app/edit_oauth_app.jsx");




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
  const config = Object(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_6__["getConfig"])(state);
  const oauthAppId = new URLSearchParams(ownProps.location.search).get('id');
  const enableOAuthServiceProvider = config.EnableOAuthServiceProvider === 'true';
  return {
    oauthAppId,
    oauthApp: state.entities.integrations.oauthApps[oauthAppId],
    enableOAuthServiceProvider
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])({
      getOAuthApp: mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_5__["getOAuthApp"],
      editOAuthApp: mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_5__["editOAuthApp"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(_edit_oauth_app_jsx__WEBPACK_IMPORTED_MODULE_7__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/edit_oauth_app/index.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/edit_oauth_app/index.js");
  reactHotLoader.register(_default, "default", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/edit_oauth_app/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/edit_outgoing_webhook/edit_outgoing_webhook.jsx":
/*!*********************************************************************************!*\
  !*** ./components/integrations/edit_outgoing_webhook/edit_outgoing_webhook.jsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditOutgoingWebhook; });
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var utils_browser_history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/browser_history */ "./utils/browser_history.jsx");
/* harmony import */ var components_confirm_modal_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/confirm_modal.jsx */ "./components/confirm_modal.jsx");
/* harmony import */ var components_integrations_abstract_outgoing_webhook_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/integrations/abstract_outgoing_webhook.jsx */ "./components/integrations/abstract_outgoing_webhook.jsx");
/* harmony import */ var components_loading_screen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/loading_screen */ "./components/loading_screen.tsx");


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







const HEADER = {
  id: 'integrations.edit',
  defaultMessage: 'Edit'
};
const FOOTER = {
  id: 'update_outgoing_webhook.update',
  defaultMessage: 'Update'
};
const LOADING = {
  id: 'update_outgoing_webhook.updating',
  defaultMessage: 'Updating...'
};
class EditOutgoingWebhook extends react__WEBPACK_IMPORTED_MODULE_2___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "editOutgoingHook", async hook => {
      this.newHook = hook;

      if (this.props.hook.id) {
        hook.id = this.props.hook.id;
      }

      if (this.props.hook.token) {
        hook.token = this.props.hook.token;
      }

      const triggerWordsSame = this.props.hook.trigger_words.length === hook.trigger_words.length && this.props.hook.trigger_words.every((v, i) => v === hook.trigger_words[i]);
      const callbackUrlsSame = this.props.hook.callback_urls.length === hook.callback_urls.length && this.props.hook.callback_urls.every((v, i) => v === hook.callback_urls[i]);

      if (this.props.hook.content_type !== hook.content_type || !triggerWordsSame || !callbackUrlsSame) {
        this.handleConfirmModal();
      } else {
        await this.submitHook();
      }
    });

    _defineProperty(this, "handleConfirmModal", () => {
      this.setState({
        showConfirmModal: true
      });
    });

    _defineProperty(this, "confirmModalDismissed", () => {
      this.setState({
        showConfirmModal: false
      });
    });

    _defineProperty(this, "submitHook", async () => {
      this.setState({
        serverError: ''
      });
      const {
        data
      } = await this.props.actions.updateOutgoingHook(this.newHook);

      if (data) {
        utils_browser_history__WEBPACK_IMPORTED_MODULE_4__["browserHistory"].push("/".concat(this.props.team.name, "/integrations/outgoing_webhooks"));
        return;
      }

      this.setState({
        showConfirmModal: false
      });

      if (this.props.updateOutgoingHookRequest.error) {
        this.setState({
          serverError: this.props.updateOutgoingHookRequest.error.message
        });
      }
    });

    _defineProperty(this, "renderExtra", () => {
      const confirmButton = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "update_outgoing_webhook.update",
        defaultMessage: "Update"
      });
      const confirmTitle = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "update_outgoing_webhook.confirm",
        defaultMessage: "Edit Outgoing Webhook"
      });
      const confirmMessage = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "update_outgoing_webhook.question",
        defaultMessage: "Your changes may break the existing outgoing webhook. Are you sure you would like to update it?"
      });
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_confirm_modal_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        title: confirmTitle,
        message: confirmMessage,
        confirmButtonText: confirmButton,
        show: this.state.showConfirmModal,
        onConfirm: this.submitHook,
        onCancel: this.confirmModalDismissed
      });
    });

    this.state = {
      showConfirmModal: false,
      serverError: ''
    };
  }

  componentDidMount() {
    if (this.props.enableOutgoingWebhooks) {
      this.props.actions.getOutgoingHook(this.props.hookId);
    }
  }

  render() {
    if (!this.props.hook) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_loading_screen__WEBPACK_IMPORTED_MODULE_7__["default"], null);
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_integrations_abstract_outgoing_webhook_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
      team: this.props.team,
      header: HEADER,
      footer: FOOTER,
      loading: LOADING,
      renderExtra: this.renderExtra(),
      action: this.editOutgoingHook,
      serverError: this.state.serverError,
      initialHook: this.props.hook,
      enablePostUsernameOverride: this.props.enablePostUsernameOverride,
      enablePostIconOverride: this.props.enablePostIconOverride
    });
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(EditOutgoingWebhook, "propTypes", {
  /**
   * The current team
   */
  team: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,

  /**
   * The outgoing webhook to edit
   */
  hook: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * The id of the outgoing webhook to edit
   */
  hookId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,

  /**
   * The request state for updateOutgoingHook action. Contains status and error
   */
  updateOutgoingHookRequest: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    /**
     * The function to call to update an outgoing webhook
     */
    updateOutgoingHook: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,

    /**
     * The function to call to get an outgoing webhook
     */
    getOutgoingHook: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  }).isRequired,

  /**
  * Whether or not outgoing webhooks are enabled.
  */
  enableOutgoingWebhooks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Whether to allow configuration of the default post username.
   */
  enablePostUsernameOverride: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,

  /**
   * Whether to allow configuration of the default post icon.
   */
  enablePostIconOverride: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(HEADER, "HEADER", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/edit_outgoing_webhook/edit_outgoing_webhook.jsx");
  reactHotLoader.register(FOOTER, "FOOTER", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/edit_outgoing_webhook/edit_outgoing_webhook.jsx");
  reactHotLoader.register(LOADING, "LOADING", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/edit_outgoing_webhook/edit_outgoing_webhook.jsx");
  reactHotLoader.register(EditOutgoingWebhook, "EditOutgoingWebhook", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/edit_outgoing_webhook/edit_outgoing_webhook.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/edit_outgoing_webhook/index.js":
/*!****************************************************************!*\
  !*** ./components/integrations/edit_outgoing_webhook/index.js ***!
  \****************************************************************/
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
/* harmony import */ var mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mattermost-redux/actions/integrations */ "./node_modules/mattermost-redux/actions/integrations.js");
/* harmony import */ var mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mattermost-redux/selectors/entities/general */ "./node_modules/mattermost-redux/selectors/entities/general.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _edit_outgoing_webhook_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit_outgoing_webhook.jsx */ "./components/integrations/edit_outgoing_webhook/edit_outgoing_webhook.jsx");




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
  const config = Object(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_6__["getConfig"])(state);
  const hookId = new URLSearchParams(ownProps.location.search).get('id');
  const enableOutgoingWebhooks = config.EnableOutgoingWebhooks === 'true';
  const enablePostUsernameOverride = config.EnablePostUsernameOverride === 'true';
  const enablePostIconOverride = config.EnablePostIconOverride === 'true';
  return {
    hookId,
    hook: state.entities.integrations.outgoingHooks[hookId],
    updateOutgoingHookRequest: state.requests.integrations.createOutgoingHook,
    enableOutgoingWebhooks,
    enablePostUsernameOverride,
    enablePostIconOverride
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])({
      updateOutgoingHook: mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_5__["updateOutgoingHook"],
      getOutgoingHook: mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_5__["getOutgoingHook"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(_edit_outgoing_webhook_jsx__WEBPACK_IMPORTED_MODULE_7__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/edit_outgoing_webhook/index.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/edit_outgoing_webhook/index.js");
  reactHotLoader.register(_default, "default", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/edit_outgoing_webhook/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/index.js":
/*!******************************************!*\
  !*** ./components/integrations/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mattermost-redux/selectors/entities/general */ "./node_modules/mattermost-redux/selectors/entities/general.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _integrations_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./integrations.jsx */ "./components/integrations/integrations.jsx");
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
  const siteName = config.SiteName;
  const enableIncomingWebhooks = config.EnableIncomingWebhooks === 'true';
  const enableOutgoingWebhooks = config.EnableOutgoingWebhooks === 'true';
  const enableCommands = config.EnableCommands === 'true';
  const enableOAuthServiceProvider = config.EnableOAuthServiceProvider === 'true';
  return {
    siteName,
    enableIncomingWebhooks,
    enableOutgoingWebhooks,
    enableCommands,
    enableOAuthServiceProvider
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(_integrations_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/index.js");
  reactHotLoader.register(_default, "default", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/installed_command.jsx":
/*!*******************************************************!*\
  !*** ./components/integrations/installed_command.jsx ***!
  \*******************************************************/
/*! exports provided: matchesFilter, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchesFilter", function() { return matchesFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InstalledCommand; });
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var utils_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/i18n */ "./utils/i18n.jsx");
/* harmony import */ var _copy_text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../copy_text */ "./components/copy_text.tsx");
/* harmony import */ var _delete_integration_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./delete_integration.jsx */ "./components/integrations/delete_integration.jsx");



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







function matchesFilter(command, filter) {
  if (!filter) {
    return true;
  }

  return command.display_name.toLowerCase().indexOf(filter) !== -1 || command.description.toLowerCase().indexOf(filter) !== -1 || command.trigger.toLowerCase().indexOf(filter) !== -1;
}
class InstalledCommand extends react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleRegenToken", e => {
      e.preventDefault();
      this.props.onRegenToken(this.props.command);
    });

    _defineProperty(this, "handleDelete", () => {
      this.props.onDelete(this.props.command);
    });
  }

  render() {
    const command = this.props.command;
    const filter = this.props.filter ? this.props.filter.toLowerCase() : '';

    if (!matchesFilter(command, filter)) {
      return null;
    }

    let name;

    if (command.display_name) {
      name = command.display_name;
    } else {
      name = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "installed_commands.unnamed_command",
        defaultMessage: "Unnamed Slash Command"
      });
    }

    let description = null;

    if (command.description) {
      description = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "item-details__row"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: "item-details__description"
      }, command.description));
    }

    let trigger = '- /' + command.trigger;

    if (command.auto_complete && command.auto_complete_hint) {
      trigger += ' ' + command.auto_complete_hint;
    }

    let actions = null;

    if (this.props.canChange) {
      actions = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "item-actions"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
        className: "style--none color--link",
        onClick: this.handleRegenToken
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "installed_integrations.regenToken",
        defaultMessage: "Regenerate Token"
      })), ' - ', react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
        to: "/".concat(this.props.team.name, "/integrations/commands/edit?id=").concat(command.id)
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "installed_integrations.edit",
        defaultMessage: "Edit"
      })), ' - ', react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_delete_integration_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
        messageId: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_6__["t"])('installed_commands.delete.confirm'),
        onDelete: this.handleDelete
      }));
    }

    const commandToken = command.token;
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "backstage-list__item"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "item-details"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "item-details__row d-flex flex-column flex-md-row justify-content-between"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("strong", {
      className: "item-details__name"
    }, name), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "item-details__trigger"
    }, trigger)), actions), description, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "item-details__row"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "item-details__token"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "installed_integrations.token",
      defaultMessage: "Token: {token}",
      values: {
        token: commandToken
      }
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_copy_text__WEBPACK_IMPORTED_MODULE_7__["default"], {
      value: commandToken
    }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "item-details__row"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "item-details__creation"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "installed_integrations.creation",
      defaultMessage: "Created by {creator} on {createAt, date, full}",
      values: {
        creator: this.props.creator.username,
        createAt: command.create_at
      }
    })))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(InstalledCommand, "propTypes", {
  /**
  * The team data
  */
  team: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,

  /**
  * Installed slash command to display
  */
  command: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,

  /**
  * The function to call when Regenerate Token link is clicked
  */
  onRegenToken: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,

  /**
  * The function to call when Delete link is clicked
  */
  onDelete: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,

  /**
  * Set to filter command, comes from BackstageList
  */
  filter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
  * The creator user data
  */
  creator: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,

  /**
  * Set to show edit link
  */
  canChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(matchesFilter, "matchesFilter", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/installed_command.jsx");
  reactHotLoader.register(InstalledCommand, "InstalledCommand", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/installed_command.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/installed_commands/index.js":
/*!*************************************************************!*\
  !*** ./components/integrations/installed_commands/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/actions/integrations */ "./node_modules/mattermost-redux/actions/integrations.js");
/* harmony import */ var mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mattermost_redux_selectors_entities_roles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mattermost-redux/selectors/entities/roles */ "./node_modules/mattermost-redux/selectors/entities/roles.js");
/* harmony import */ var mattermost_redux_selectors_entities_roles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_roles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mattermost-redux/constants */ "./node_modules/mattermost-redux/constants/index.js");
/* harmony import */ var mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _installed_commands_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./installed_commands.jsx */ "./components/integrations/installed_commands/installed_commands.jsx");
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
  const canManageOthersSlashCommands = Object(mattermost_redux_selectors_entities_roles__WEBPACK_IMPORTED_MODULE_3__["haveITeamPermission"])(state, {
    team: ownProps.team.id,
    permission: mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_4__["Permissions"].MANAGE_OTHERS_SLASH_COMMANDS
  });
  return {
    canManageOthersSlashCommands
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
      regenCommandToken: mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_2__["regenCommandToken"],
      deleteCommand: mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_2__["deleteCommand"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_installed_commands_jsx__WEBPACK_IMPORTED_MODULE_5__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/installed_commands/index.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/installed_commands/index.js");
  reactHotLoader.register(_default, "default", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/installed_commands/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/installed_commands/installed_commands.jsx":
/*!***************************************************************************!*\
  !*** ./components/integrations/installed_commands/installed_commands.jsx ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InstalledCommands; });
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");
/* harmony import */ var components_backstage_components_backstage_list_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/backstage/components/backstage_list.jsx */ "./components/backstage/components/backstage_list.jsx");
/* harmony import */ var _installed_command_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../installed_command.jsx */ "./components/integrations/installed_command.jsx");
/* harmony import */ var components_formatted_markdown_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/formatted_markdown_message */ "./components/formatted_markdown_message.jsx");


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







class InstalledCommands extends react__WEBPACK_IMPORTED_MODULE_2___default.a.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "regenCommandToken", command => {
      this.props.actions.regenCommandToken(command.id);
    });

    _defineProperty(this, "deleteCommand", command => {
      this.props.actions.deleteCommand(command.id);
    });
  }

  commandCompare(a, b) {
    let nameA = a.display_name;

    if (!nameA) {
      nameA = utils_utils_jsx__WEBPACK_IMPORTED_MODULE_4__["localizeMessage"]('installed_commands.unnamed_command', 'Unnamed Slash Command');
    }

    let nameB = b.display_name;

    if (!nameB) {
      nameB = utils_utils_jsx__WEBPACK_IMPORTED_MODULE_4__["localizeMessage"]('installed_commands.unnamed_command', 'Unnamed Slash Command');
    }

    return nameA.localeCompare(nameB);
  }

  render() {
    const commands = filter => this.props.commands.filter(command => command.team_id === this.props.team.id).filter(command => Object(_installed_command_jsx__WEBPACK_IMPORTED_MODULE_6__["matchesFilter"])(command, filter)).sort(this.commandCompare).map(command => {
      const canChange = this.props.canManageOthersSlashCommands || this.props.user.id === command.creator_id;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_installed_command_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: command.id,
        team: this.props.team,
        command: command,
        onRegenToken: this.regenCommandToken,
        onDelete: this.deleteCommand,
        creator: this.props.users[command.creator_id] || {},
        canChange: canChange
      });
    });

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_backstage_components_backstage_list_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
      header: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "installed_commands.header",
        defaultMessage: "Installed Slash Commands"
      }),
      addText: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "installed_commands.add",
        defaultMessage: "Add Slash Command"
      }),
      addLink: '/' + this.props.team.name + '/integrations/commands/add',
      addButtonId: "addSlashCommand",
      emptyText: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "installed_commands.empty",
        defaultMessage: "No slash commands found"
      }),
      emptyTextSearch: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_formatted_markdown_message__WEBPACK_IMPORTED_MODULE_7__["default"], {
        id: "installed_commands.emptySearch",
        defaultMessage: "No slash commands match {searchTerm}"
      }),
      helpText: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "installed_commands.help",
        defaultMessage: "Use slash commands to connect external tools to Mattermost. {buildYourOwn} or visit the {appDirectory} to find self-hosted, third-party apps and integrations.",
        values: {
          buildYourOwn: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "http://docs.mattermost.com/developer/slash-commands.html"
          }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
            id: "installed_commands.help.buildYourOwn",
            defaultMessage: "Build your own"
          })),
          appDirectory: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://about.mattermost.com/default-app-directory/"
          }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
            id: "installed_commands.help.appDirectory",
            defaultMessage: "App Directory"
          }))
        }
      }),
      searchPlaceholder: utils_utils_jsx__WEBPACK_IMPORTED_MODULE_4__["localizeMessage"]('installed_commands.search', 'Search Slash Commands'),
      loading: this.props.loading
    }, filter => {
      const children = commands(filter);
      return [children, children.length > 0];
    });
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(InstalledCommands, "propTypes", {
  /**
  * The team object
  */
  team: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
  * The user object
  */
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
  * The users collection
  */
  users: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
  * Installed slash commands to display
  */
  commands: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

  /**
  * Set whether to show the loading... animation or not
  */
  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
  * Set to allow changes to installed slash commands
  */
  canManageOthersSlashCommands: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    /**
    * The function to call when Regenerate Token link is clicked
    */
    regenCommandToken: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,

    /**
    * The function to call when Delete link is clicked
    */
    deleteCommand: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  }).isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(InstalledCommands, "InstalledCommands", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/installed_commands/installed_commands.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/installed_incoming_webhook.jsx":
/*!****************************************************************!*\
  !*** ./components/integrations/installed_incoming_webhook.jsx ***!
  \****************************************************************/
/*! exports provided: matchesFilter, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchesFilter", function() { return matchesFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InstalledIncomingWebhook; });
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var utils_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/url */ "./utils/url.tsx");
/* harmony import */ var utils_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/i18n */ "./utils/i18n.jsx");
/* harmony import */ var components_copy_text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/copy_text */ "./components/copy_text.tsx");
/* harmony import */ var _delete_integration_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./delete_integration.jsx */ "./components/integrations/delete_integration.jsx");



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








function matchesFilter(incomingWebhook, channel, filter) {
  if (!filter) {
    return true;
  }

  if (incomingWebhook.display_name.toLowerCase().indexOf(filter) !== -1 || incomingWebhook.description.toLowerCase().indexOf(filter) !== -1) {
    return true;
  }

  if (incomingWebhook.channel_id) {
    if (channel && channel.name.toLowerCase().indexOf(filter) !== -1) {
      return true;
    }
  }

  return false;
}
class InstalledIncomingWebhook extends react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleDelete", () => {
      this.props.onDelete(this.props.incomingWebhook);
    });
  }

  render() {
    const incomingWebhook = this.props.incomingWebhook;
    const channel = this.props.channel;
    const filter = this.props.filter ? this.props.filter.toLowerCase() : '';

    if (!matchesFilter(incomingWebhook, channel, filter)) {
      return null;
    }

    let displayName;

    if (incomingWebhook.display_name) {
      displayName = incomingWebhook.display_name;
    } else if (channel) {
      displayName = channel.display_name;
    } else {
      displayName = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "installed_incoming_webhooks.unknown_channel",
        defaultMessage: "A Private Webhook"
      });
    }

    let description = null;

    if (incomingWebhook.description) {
      description = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "item-details__row"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: "item-details__description"
      }, incomingWebhook.description));
    }

    let actions = null;

    if (this.props.canChange) {
      actions = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "item-actions"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
        to: "/".concat(this.props.team.name, "/integrations/incoming_webhooks/edit?id=").concat(incomingWebhook.id)
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "installed_integrations.edit",
        defaultMessage: "Edit"
      })), ' - ', react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_delete_integration_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
        messageId: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('installed_incoming_webhooks.delete.confirm'),
        onDelete: this.handleDelete
      }));
    }

    const incomingWebhookId = Object(utils_url__WEBPACK_IMPORTED_MODULE_6__["getSiteURL"])() + '/hooks/' + incomingWebhook.id;
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "backstage-list__item"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "item-details"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "item-details__row d-flex flex-column flex-md-row justify-content-between"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("strong", {
      className: "item-details__name"
    }, displayName), actions), description, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "item-details__row"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "item-details__url word-break--all"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "installed_integrations.url",
      defaultMessage: "URL: {url}",
      values: {
        url: incomingWebhookId
      }
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_copy_text__WEBPACK_IMPORTED_MODULE_8__["default"], {
      value: incomingWebhookId
    })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "item-details__row"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "item-details__creation"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "installed_integrations.creation",
      defaultMessage: "Created by {creator} on {createAt, date, full}",
      values: {
        creator: this.props.creator.username,
        createAt: incomingWebhook.create_at
      }
    })))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(InstalledIncomingWebhook, "propTypes", {
  /**
  * Data used for showing webhook details
  */
  incomingWebhook: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,

  /**
  * Function to call when webhook delete button is pressed
  */
  onDelete: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,

  /**
  * String used for filtering webhook item
  */
  filter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
  * Data used for showing created by details
  */
  creator: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,

  /**
  *  Set to show available actions on webhook
  */
  canChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,

  /**
  *  Data used in routing of webhook for modifications
  */
  team: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,

  /**
  *  Data used for filtering of webhook based on filter prop
  */
  channel: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(matchesFilter, "matchesFilter", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/installed_incoming_webhook.jsx");
  reactHotLoader.register(InstalledIncomingWebhook, "InstalledIncomingWebhook", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/installed_incoming_webhook.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/installed_incoming_webhooks/index.js":
/*!**********************************************************************!*\
  !*** ./components/integrations/installed_incoming_webhooks/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/actions/integrations */ "./node_modules/mattermost-redux/actions/integrations.js");
/* harmony import */ var mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mattermost_redux_selectors_entities_channels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mattermost-redux/selectors/entities/channels */ "./node_modules/mattermost-redux/selectors/entities/channels.js");
/* harmony import */ var mattermost_redux_selectors_entities_channels__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_channels__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mattermost_redux_selectors_entities_integrations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mattermost-redux/selectors/entities/integrations */ "./node_modules/mattermost-redux/selectors/entities/integrations.js");
/* harmony import */ var mattermost_redux_selectors_entities_integrations__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_integrations__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mattermost-redux/selectors/entities/teams */ "./node_modules/mattermost-redux/selectors/entities/teams.js");
/* harmony import */ var mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mattermost-redux/selectors/entities/users */ "./node_modules/mattermost-redux/selectors/entities/users.js");
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var mattermost_redux_selectors_entities_roles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mattermost-redux/selectors/entities/roles */ "./node_modules/mattermost-redux/selectors/entities/roles.js");
/* harmony import */ var mattermost_redux_selectors_entities_roles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_roles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mattermost-redux/constants */ "./node_modules/mattermost-redux/constants/index.js");
/* harmony import */ var mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mattermost-redux/selectors/entities/general */ "./node_modules/mattermost-redux/selectors/entities/general.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var actions_integration_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! actions/integration_actions */ "./actions/integration_actions.jsx");
/* harmony import */ var _installed_incoming_webhooks_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./installed_incoming_webhooks.jsx */ "./components/integrations/installed_incoming_webhooks/installed_incoming_webhooks.jsx");
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
  const config = Object(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_9__["getConfig"])(state);
  const teamId = Object(mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_5__["getCurrentTeamId"])(state);
  const canManageOthersWebhooks = Object(mattermost_redux_selectors_entities_roles__WEBPACK_IMPORTED_MODULE_7__["haveITeamPermission"])(state, {
    team: teamId,
    permission: mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_8__["Permissions"].MANAGE_OTHERS_INCOMING_WEBHOOKS
  });
  const incomingHooks = Object(mattermost_redux_selectors_entities_integrations__WEBPACK_IMPORTED_MODULE_4__["getIncomingHooks"])(state);
  const incomingWebhooks = Object.keys(incomingHooks).map(key => incomingHooks[key]).filter(incomingWebhook => incomingWebhook.team_id === teamId);
  const enableIncomingWebhooks = config.EnableIncomingWebhooks === 'true';
  return {
    incomingWebhooks,
    channels: Object(mattermost_redux_selectors_entities_channels__WEBPACK_IMPORTED_MODULE_3__["getAllChannels"])(state),
    users: Object(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_6__["getUsers"])(state),
    teamId,
    canManageOthersWebhooks,
    enableIncomingWebhooks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
      loadIncomingHooksAndProfilesForTeam: actions_integration_actions__WEBPACK_IMPORTED_MODULE_10__["loadIncomingHooksAndProfilesForTeam"],
      removeIncomingHook: mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_2__["removeIncomingHook"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_installed_incoming_webhooks_jsx__WEBPACK_IMPORTED_MODULE_11__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/installed_incoming_webhooks/index.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/installed_incoming_webhooks/index.js");
  reactHotLoader.register(_default, "default", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/installed_incoming_webhooks/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/installed_incoming_webhooks/installed_incoming_webhooks.jsx":
/*!*********************************************************************************************!*\
  !*** ./components/integrations/installed_incoming_webhooks/installed_incoming_webhooks.jsx ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InstalledIncomingWebhooks; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/constants */ "./utils/constants.jsx");
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");
/* harmony import */ var components_backstage_components_backstage_list_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/backstage/components/backstage_list.jsx */ "./components/backstage/components/backstage_list.jsx");
/* harmony import */ var components_integrations_installed_incoming_webhook_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/integrations/installed_incoming_webhook.jsx */ "./components/integrations/installed_incoming_webhook.jsx");
/* harmony import */ var components_formatted_markdown_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/formatted_markdown_message */ "./components/formatted_markdown_message.jsx");
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








class InstalledIncomingWebhooks extends react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "deleteIncomingWebhook", incomingWebhook => {
      this.props.actions.removeIncomingHook(incomingWebhook.id);
    });

    _defineProperty(this, "incomingWebhookCompare", (a, b) => {
      let displayNameA = a.display_name;

      if (!displayNameA) {
        const channelA = this.props.channels[a.channel_id];

        if (channelA) {
          displayNameA = channelA.display_name;
        } else {
          displayNameA = utils_utils_jsx__WEBPACK_IMPORTED_MODULE_4__["localizeMessage"]('installed_incoming_webhooks.unknown_channel', 'A Private Webhook');
        }
      }

      const displayNameB = b.display_name;
      return displayNameA.localeCompare(displayNameB);
    });

    _defineProperty(this, "incomingWebhooks", filter => this.props.incomingWebhooks.sort(this.incomingWebhookCompare).filter(incomingWebhook => Object(components_integrations_installed_incoming_webhook_jsx__WEBPACK_IMPORTED_MODULE_6__["matchesFilter"])(incomingWebhook, this.props.channels[incomingWebhook.channel_id], filter)).map(incomingWebhook => {
      const canChange = this.props.canManageOthersWebhooks || this.props.user.id === incomingWebhook.user_id;
      const channel = this.props.channels[incomingWebhook.channel_id];
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_integrations_installed_incoming_webhook_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: incomingWebhook.id,
        incomingWebhook: incomingWebhook,
        onDelete: this.deleteIncomingWebhook,
        creator: this.props.users[incomingWebhook.user_id] || {},
        canChange: canChange,
        team: this.props.team,
        channel: channel
      });
    }));

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    if (this.props.enableIncomingWebhooks) {
      this.props.actions.loadIncomingHooksAndProfilesForTeam(this.props.teamId, utils_constants__WEBPACK_IMPORTED_MODULE_3__["default"].Integrations.START_PAGE_NUM, utils_constants__WEBPACK_IMPORTED_MODULE_3__["default"].Integrations.PAGE_SIZE).then(() => this.setState({
        loading: false
      }));
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_backstage_components_backstage_list_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
      header: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "installed_incoming_webhooks.header",
        defaultMessage: "Installed Incoming Webhooks"
      }),
      addText: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "installed_incoming_webhooks.add",
        defaultMessage: "Add Incoming Webhook"
      }),
      addLink: '/' + this.props.team.name + '/integrations/incoming_webhooks/add',
      addButtonId: "addIncomingWebhook",
      emptyText: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "installed_incoming_webhooks.empty",
        defaultMessage: "No incoming webhooks found"
      }),
      emptyTextSearch: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_formatted_markdown_message__WEBPACK_IMPORTED_MODULE_7__["default"], {
        id: "installed_incoming_webhooks.emptySearch",
        defaultMessage: "No incoming webhooks match {searchTerm}"
      }),
      helpText: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "installed_incoming_webhooks.help",
        defaultMessage: "Use incoming webhooks to connect external tools to Mattermost. {buildYourOwn} or visit the {appDirectory} to find self-hosted, third-party apps and integrations.",
        values: {
          buildYourOwn: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "http://docs.mattermost.com/developer/webhooks-incoming.html"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
            id: "installed_incoming_webhooks.help.buildYourOwn",
            defaultMessage: "Build your own"
          })),
          appDirectory: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://about.mattermost.com/default-app-directory/"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
            id: "installed_incoming_webhooks.help.appDirectory",
            defaultMessage: "App Directory"
          }))
        }
      }),
      searchPlaceholder: utils_utils_jsx__WEBPACK_IMPORTED_MODULE_4__["localizeMessage"]('installed_incoming_webhooks.search', 'Search Incoming Webhooks'),
      loading: this.state.loading
    }, filter => {
      const children = this.incomingWebhooks(filter);
      return [children, children.length > 0];
    });
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(InstalledIncomingWebhooks, "propTypes", {
  /**
  *  Data used in passing down as props for webhook modifications
  */
  team: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,

  /**
  * Data used for checking if webhook is created by current user
  */
  user: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,

  /**
  *  Data used for checking modification privileges
  */
  canManageOthersWebhooks: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
  * Data used in passing down as props for showing webhook details
  */
  incomingWebhooks: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array,

  /**
  * Data used in sorting for displaying list and as props channel details
  */
  channels: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,

  /**
  *  Data used in passing down as props for webhook -created by label
  */
  users: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,

  /**
  *  Data used in passing as argument for loading webhooks
  */
  teamId: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    /**
    * The function to call for removing incomingWebhook
    */
    removeIncomingHook: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,

    /**
    * The function to call for incomingWebhook List and for the status of api
    */
    loadIncomingHooksAndProfilesForTeam: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
  }),

  /**
  * Whether or not incoming webhooks are enabled.
  */
  enableIncomingWebhooks: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(InstalledIncomingWebhooks, "InstalledIncomingWebhooks", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/installed_incoming_webhooks/installed_incoming_webhooks.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/installed_oauth_app/index.js":
/*!**************************************************************!*\
  !*** ./components/integrations/installed_oauth_app/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mattermost-redux/selectors/entities/users */ "./node_modules/mattermost-redux/selectors/entities/users.js");
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/utils */ "./utils/utils.jsx");
/* harmony import */ var _installed_oauth_app_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./installed_oauth_app.jsx */ "./components/integrations/installed_oauth_app/installed_oauth_app.jsx");
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
  const oauthApp = ownProps.oauthApp || {};
  return {
    creatorName: Object(utils_utils__WEBPACK_IMPORTED_MODULE_2__["getDisplayNameByUser"])(Object(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_1__["getUser"])(state, oauthApp.creator_id))
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(_installed_oauth_app_jsx__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/installed_oauth_app/index.js");
  reactHotLoader.register(_default, "default", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/installed_oauth_app/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/installed_oauth_app/installed_oauth_app.jsx":
/*!*****************************************************************************!*\
  !*** ./components/integrations/installed_oauth_app/installed_oauth_app.jsx ***!
  \*****************************************************************************/
/*! exports provided: matchesFilter, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchesFilter", function() { return matchesFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InstalledOAuthApp; });
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");
/* harmony import */ var utils_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/i18n */ "./utils/i18n.jsx");
/* harmony import */ var components_form_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/form_error */ "./components/form_error.tsx");
/* harmony import */ var components_formatted_markdown_message_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/formatted_markdown_message.jsx */ "./components/formatted_markdown_message.jsx");
/* harmony import */ var components_copy_text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/copy_text */ "./components/copy_text.tsx");
/* harmony import */ var _delete_integration_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../delete_integration.jsx */ "./components/integrations/delete_integration.jsx");


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










const FAKE_SECRET = '***************';
function matchesFilter(oauthApp, filter) {
  if (!filter) {
    return true;
  }

  return oauthApp.name.toLowerCase().indexOf(filter) !== -1;
}
class InstalledOAuthApp extends react__WEBPACK_IMPORTED_MODULE_2___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleShowClientSecret", e => {
      if (e && e.preventDefault) {
        e.preventDefault();
      }

      this.setState({
        clientSecret: this.props.oauthApp.client_secret
      });
    });

    _defineProperty(this, "handleHideClientSecret", e => {
      e.preventDefault();
      this.setState({
        clientSecret: FAKE_SECRET
      });
    });

    _defineProperty(this, "handleRegenerate", e => {
      e.preventDefault();
      this.props.onRegenerateSecret(this.props.oauthApp.id).then(() => {
        const {
          error
        } = this.props.regenOAuthAppSecretRequest;

        if (error) {
          this.setState({
            error: error.message
          });
        } else {
          this.setState({
            error: null
          });
          this.handleShowClientSecret();
        }
      });
    });

    _defineProperty(this, "handleDelete", () => {
      this.props.onDelete(this.props.oauthApp);
    });

    this.state = {
      clientSecret: FAKE_SECRET
    };
  }

  render() {
    const {
      oauthApp,
      creatorName
    } = this.props;
    let error;

    if (this.state.error) {
      error = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_form_error__WEBPACK_IMPORTED_MODULE_7__["default"], {
        error: this.state.error
      });
    }

    if (!matchesFilter(oauthApp, this.props.filter)) {
      return null;
    }

    let name;

    if (oauthApp.name) {
      name = oauthApp.name;
    } else {
      name = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "installed_integrations.unnamed_oauth_app",
        defaultMessage: "Unnamed OAuth 2.0 Application"
      });
    }

    let description;

    if (oauthApp.description) {
      description = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "item-details__row"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "item-details__description"
      }, oauthApp.description));
    }

    const urls = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "item-details__row"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "item-details__url word-break--all"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "installed_integrations.callback_urls",
      defaultMessage: "Callback URLs: {urls}",
      values: {
        urls: oauthApp.callback_urls.join(', ')
      }
    })));
    let isTrusted;

    if (oauthApp.is_trusted) {
      isTrusted = utils_utils_jsx__WEBPACK_IMPORTED_MODULE_5__["localizeMessage"]('installed_oauth_apps.trusted.yes', 'Yes');
    } else {
      isTrusted = utils_utils_jsx__WEBPACK_IMPORTED_MODULE_5__["localizeMessage"]('installed_oauth_apps.trusted.no', 'No');
    }

    let showHide;
    let clientSecret;

    if (this.state.clientSecret === FAKE_SECRET) {
      showHide = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        id: "showSecretButton",
        className: "style--none color--link",
        onClick: this.handleShowClientSecret
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "installed_integrations.showSecret",
        defaultMessage: "Show Secret"
      }));
      clientSecret = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "item-details__token"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "installed_integrations.client_secret",
        defaultMessage: "Client Secret: **{clientSecret}**",
        values: {
          clientSecret: this.state.clientSecret
        }
      }));
    } else {
      showHide = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        id: "hideSecretButton",
        className: "style--none color--link",
        onClick: this.handleHideClientSecret
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "installed_integrations.hideSecret",
        defaultMessage: "Hide Secret"
      }));
      clientSecret = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "item-details__token"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_formatted_markdown_message_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "installed_integrations.client_secret",
        defaultMessage: "Client Secret: **{clientSecret}**",
        values: {
          clientSecret: this.state.clientSecret
        }
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_copy_text__WEBPACK_IMPORTED_MODULE_9__["default"], {
        idMessage: "integrations.copy_client_secret",
        defaultMessage: "Copy Client Secret",
        value: this.state.clientSecret
      }));
    }

    const regen = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      id: "regenerateSecretButton",
      className: "style--none color--link",
      onClick: this.handleRegenerate
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "installed_integrations.regenSecret",
      defaultMessage: "Regenerate Secret"
    }));
    let icon;

    if (oauthApp.icon_url) {
      icon = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "integration__icon integration-list__icon"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        alt: 'get app screenshot',
        src: oauthApp.icon_url
      }));
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "backstage-list__item"
    }, icon, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "item-details"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "item-details__row d-flex flex-column flex-md-row justify-content-between"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", {
      className: "item-details__name"
    }, name), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "item-actions"
    }, showHide, ' - ', regen, ' - ', react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/".concat(this.props.team.name, "/integrations/oauth2-apps/edit?id=").concat(oauthApp.id)
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "installed_integrations.edit",
      defaultMessage: "Edit"
    })), ' - ', react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_delete_integration_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
      messageId: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_6__["t"])('installed_oauth_apps.delete.confirm'),
      onDelete: this.handleDelete
    }))), error, description, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "item-details__row"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "item-details__url word-break--all"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_formatted_markdown_message_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
      id: "installed_oauth_apps.is_trusted",
      defaultMessage: "Is Trusted: **{isTrusted}**",
      values: {
        isTrusted
      }
    }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "item-details__row"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "item-details__token"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_formatted_markdown_message_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
      id: "installed_integrations.client_id",
      defaultMessage: "Client ID: **{clientId}**",
      values: {
        clientId: oauthApp.id
      }
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_copy_text__WEBPACK_IMPORTED_MODULE_9__["default"], {
      idMessage: "integrations.copy_client_id",
      defaultMessage: "Copy Client Id",
      value: oauthApp.id
    }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "item-details__row"
    }, clientSecret), urls, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "item-details__row"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "item-details__creation"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "installed_integrations.creation",
      defaultMessage: "Created by {creator} on {createAt, date, full}",
      values: {
        creator: creatorName,
        createAt: oauthApp.create_at
      }
    })))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(InstalledOAuthApp, "propTypes", {
  /**
  * The team data
  */
  team: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
  * The oauthApp data
  */
  oauthApp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  creatorName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,

  /**
  * The request state for regenOAuthAppSecret action. Contains status and error
  */
  regenOAuthAppSecretRequest: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,

  /**
  * The function to call when Regenerate Secret link is clicked
  */
  onRegenerateSecret: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,

  /**
  * The function to call when Delete link is clicked
  */
  onDelete: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,

  /**
  * Set to filter OAuthApp
  */
  filter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FAKE_SECRET, "FAKE_SECRET", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/installed_oauth_app/installed_oauth_app.jsx");
  reactHotLoader.register(matchesFilter, "matchesFilter", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/installed_oauth_app/installed_oauth_app.jsx");
  reactHotLoader.register(InstalledOAuthApp, "InstalledOAuthApp", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/installed_oauth_app/installed_oauth_app.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/installed_oauth_apps/index.js":
/*!***************************************************************!*\
  !*** ./components/integrations/installed_oauth_apps/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/actions/integrations */ "./node_modules/mattermost-redux/actions/integrations.js");
/* harmony import */ var mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mattermost_redux_selectors_entities_integrations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mattermost-redux/selectors/entities/integrations */ "./node_modules/mattermost-redux/selectors/entities/integrations.js");
/* harmony import */ var mattermost_redux_selectors_entities_integrations__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_integrations__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mattermost_redux_selectors_entities_roles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mattermost-redux/selectors/entities/roles */ "./node_modules/mattermost-redux/selectors/entities/roles.js");
/* harmony import */ var mattermost_redux_selectors_entities_roles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_roles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mattermost-redux/constants */ "./node_modules/mattermost-redux/constants/index.js");
/* harmony import */ var mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mattermost-redux/selectors/entities/general */ "./node_modules/mattermost-redux/selectors/entities/general.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var actions_integration_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! actions/integration_actions */ "./actions/integration_actions.jsx");
/* harmony import */ var _installed_oauth_apps_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./installed_oauth_apps.jsx */ "./components/integrations/installed_oauth_apps/installed_oauth_apps.jsx");
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
  const config = Object(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_6__["getConfig"])(state);
  const enableOAuthServiceProvider = config.EnableOAuthServiceProvider === 'true';
  return {
    canManageOauth: Object(mattermost_redux_selectors_entities_roles__WEBPACK_IMPORTED_MODULE_4__["haveISystemPermission"])(state, {
      permission: mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_5__["Permissions"].MANAGE_OAUTH
    }),
    oauthApps: Object(mattermost_redux_selectors_entities_integrations__WEBPACK_IMPORTED_MODULE_3__["getOAuthApps"])(state),
    regenOAuthAppSecretRequest: state.requests.integrations.updateOAuthApp,
    enableOAuthServiceProvider
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
      loadOAuthAppsAndProfiles: actions_integration_actions__WEBPACK_IMPORTED_MODULE_7__["loadOAuthAppsAndProfiles"],
      regenOAuthAppSecret: mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_2__["regenOAuthAppSecret"],
      deleteOAuthApp: mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_2__["deleteOAuthApp"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_installed_oauth_apps_jsx__WEBPACK_IMPORTED_MODULE_8__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/installed_oauth_apps/index.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/installed_oauth_apps/index.js");
  reactHotLoader.register(_default, "default", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/installed_oauth_apps/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/installed_oauth_apps/installed_oauth_apps.jsx":
/*!*******************************************************************************!*\
  !*** ./components/integrations/installed_oauth_apps/installed_oauth_apps.jsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InstalledOAuthApps; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");
/* harmony import */ var components_backstage_components_backstage_list_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/backstage/components/backstage_list.jsx */ "./components/backstage/components/backstage_list.jsx");
/* harmony import */ var _installed_oauth_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../installed_oauth_app */ "./components/integrations/installed_oauth_app/index.js");
/* harmony import */ var _installed_oauth_app_installed_oauth_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../installed_oauth_app/installed_oauth_app */ "./components/integrations/installed_oauth_app/installed_oauth_app.jsx");
/* harmony import */ var components_formatted_markdown_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/formatted_markdown_message */ "./components/formatted_markdown_message.jsx");
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








class InstalledOAuthApps extends react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "deleteOAuthApp", app => {
      if (app && app.id) {
        this.props.actions.deleteOAuthApp(app.id);
      }
    });

    _defineProperty(this, "oauthApps", filter => Object.values(this.props.oauthApps).filter(app => Object(_installed_oauth_app_installed_oauth_app__WEBPACK_IMPORTED_MODULE_6__["matchesFilter"])(app, filter)).sort(this.oauthAppCompare).map(app => {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_installed_oauth_app__WEBPACK_IMPORTED_MODULE_5__["default"], {
        key: app.id,
        team: this.props.team,
        oauthApp: app,
        regenOAuthAppSecretRequest: this.props.regenOAuthAppSecretRequest,
        onRegenerateSecret: this.props.actions.regenOAuthAppSecret,
        onDelete: this.deleteOAuthApp
      });
    }));

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    if (this.props.enableOAuthServiceProvider) {
      this.props.actions.loadOAuthAppsAndProfiles().then(() => this.setState({
        loading: false
      }));
    }
  }

  oauthAppCompare(a, b) {
    let nameA = a.name;

    if (!nameA) {
      nameA = Object(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_3__["localizeMessage"])('installed_integrations.unnamed_oauth_app', 'Unnamed OAuth 2.0 Application');
    }

    let nameB = b.name;

    if (!nameB) {
      nameB = Object(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_3__["localizeMessage"])('installed_integrations.unnamed_oauth_app', 'Unnamed OAuth 2.0 Application');
    }

    return nameA.localeCompare(nameB);
  }

  render() {
    const integrationsEnabled = this.props.enableOAuthServiceProvider && this.props.canManageOauth;
    let props;

    if (integrationsEnabled) {
      props = {
        addLink: '/' + this.props.team.name + '/integrations/oauth2-apps/add',
        addText: Object(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_3__["localizeMessage"])('installed_oauth_apps.add', 'Add OAuth 2.0 Application'),
        addButtonId: 'addOauthApp'
      };
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_backstage_components_backstage_list_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({
      header: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "installed_oauth_apps.header",
        defaultMessage: "OAuth 2.0 Applications"
      }),
      helpText: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "installed_oauth_apps.help",
        defaultMessage: "Create {oauthApplications} to securely integrate bots and third-party apps with Mattermost. Visit the {appDirectory} to find available self-hosted apps.",
        values: {
          oauthApplications: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://docs.mattermost.com/developer/oauth-2-0-applications.html"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
            id: "installed_oauth_apps.help.oauthApplications",
            defaultMessage: "OAuth 2.0 applications"
          })),
          appDirectory: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://about.mattermost.com/default-app-directory/"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
            id: "installed_oauth_apps.help.appDirectory",
            defaultMessage: "App Directory"
          }))
        }
      }),
      emptyText: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "installed_oauth_apps.empty",
        defaultMessage: "No OAuth 2.0 Applications found"
      }),
      emptyTextSearch: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_formatted_markdown_message__WEBPACK_IMPORTED_MODULE_7__["default"], {
        id: "installed_oauth_apps.emptySearch",
        defaultMessage: "No OAuth 2.0 Applications match {searchTerm}"
      }),
      searchPlaceholder: Object(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_3__["localizeMessage"])('installed_oauth_apps.search', 'Search OAuth 2.0 Applications'),
      loading: this.state.loading
    }, props), filter => {
      const children = this.oauthApps(filter);
      return [children, children.length > 0];
    });
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(InstalledOAuthApps, "propTypes", {
  /**
  * The team data
  */
  team: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,

  /**
  * The oauthApps data
  */
  oauthApps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,

  /**
  * Set if user can manage oath
  */
  canManageOauth: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
  * The request state for regenOAuthAppSecret action. Contains status and error
  */
  regenOAuthAppSecretRequest: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    /**
    * The function to call to fetch OAuth apps
    */
    loadOAuthAppsAndProfiles: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,

    /**
    * The function to call when Regenerate Secret link is clicked
    */
    regenOAuthAppSecret: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,

    /**
    * The function to call when Delete link is clicked
    */
    deleteOAuthApp: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
  }).isRequired,

  /**
  * Whether or not OAuth applications are enabled.
  */
  enableOAuthServiceProvider: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(InstalledOAuthApps, "InstalledOAuthApps", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/installed_oauth_apps/installed_oauth_apps.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/installed_outgoing_webhook.jsx":
/*!****************************************************************!*\
  !*** ./components/integrations/installed_outgoing_webhook.jsx ***!
  \****************************************************************/
/*! exports provided: matchesFilter, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchesFilter", function() { return matchesFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InstalledOutgoingWebhook; });
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var utils_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/i18n */ "./utils/i18n.jsx");
/* harmony import */ var components_copy_text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/copy_text */ "./components/copy_text.tsx");
/* harmony import */ var _delete_integration_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./delete_integration.jsx */ "./components/integrations/delete_integration.jsx");



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







function matchesFilter(outgoingWebhook, channel, filter) {
  if (!filter) {
    return true;
  }

  const {
    display_name: displayName,
    description,
    trigger_words: triggerWords
  } = outgoingWebhook;

  if (displayName && displayName.toLowerCase().indexOf(filter) !== -1 || description && description.toLowerCase().indexOf(filter) !== -1) {
    return true;
  }

  if (triggerWords) {
    for (const triggerWord of triggerWords) {
      if (triggerWord.toLowerCase().indexOf(filter) !== -1) {
        return true;
      }
    }
  }

  if (channel && channel.name) {
    if (channel.name.toLowerCase().indexOf(filter) !== -1) {
      return true;
    }
  }

  return false;
}
class InstalledOutgoingWebhook extends react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleRegenToken", e => {
      e.preventDefault();
      this.props.onRegenToken(this.props.outgoingWebhook);
    });

    _defineProperty(this, "handleDelete", () => {
      this.props.onDelete(this.props.outgoingWebhook);
    });
  }

  makeDisplayName(outgoingWebhook, channel) {
    if (outgoingWebhook.display_name) {
      return outgoingWebhook.display_name;
    } else if (channel) {
      return channel.display_name;
    }

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "installed_outgoing_webhooks.unknown_channel",
      defaultMessage: "A Private Webhook"
    });
  }

  render() {
    const outgoingWebhook = this.props.outgoingWebhook;
    const channel = this.props.channel;
    const filter = this.props.filter ? this.props.filter.toLowerCase() : '';
    const triggerWordsFull = 0;
    const triggerWordsStartsWith = 1;

    if (outgoingWebhook && !matchesFilter(outgoingWebhook, channel, filter)) {
      return null;
    }

    const displayName = this.makeDisplayName(outgoingWebhook, channel);
    let description = null;

    if (outgoingWebhook.description) {
      description = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "item-details__row"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: "item-details__description"
      }, outgoingWebhook.description));
    }

    let triggerWords = null;

    if (outgoingWebhook.trigger_words && outgoingWebhook.trigger_words.length > 0) {
      triggerWords = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "item-details__row"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: "item-details__trigger-words"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "installed_integrations.triggerWords",
        defaultMessage: "Trigger Words: {triggerWords}",
        values: {
          triggerWords: outgoingWebhook.trigger_words.join(', ')
        }
      })));
    }

    const urls = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "item-details__row"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "item-details__url word-break--all"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "installed_integrations.callback_urls",
      defaultMessage: "Callback URLs: {urls}",
      values: {
        urls: outgoingWebhook.callback_urls.join(', ')
      }
    })));
    let triggerWhen;

    if (outgoingWebhook.trigger_when === triggerWordsFull) {
      triggerWhen = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "add_outgoing_webhook.triggerWordsTriggerWhenFullWord",
        defaultMessage: "First word matches a trigger word exactly"
      });
    } else if (outgoingWebhook.trigger_when === triggerWordsStartsWith) {
      triggerWhen = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "add_outgoing_webhook.triggerWordsTriggerWhenStartsWith",
        defaultMessage: "First word starts with a trigger word"
      });
    }

    let actions = null;

    if (this.props.canChange) {
      actions = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "item-actions"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
        className: "style--none color--link",
        onClick: this.handleRegenToken
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "installed_integrations.regenToken",
        defaultMessage: "Regen Token"
      })), ' - ', react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
        to: "/".concat(this.props.team.name, "/integrations/outgoing_webhooks/edit?id=").concat(outgoingWebhook.id)
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "installed_integrations.edit",
        defaultMessage: "Edit"
      })), ' - ', react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_delete_integration_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
        messageId: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_6__["t"])('installed_outgoing_webhooks.delete.confirm'),
        onDelete: this.handleDelete
      }));
    }

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "backstage-list__item"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "item-details"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "item-details__row d-flex flex-column flex-md-row justify-content-between"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("strong", {
      className: "item-details__name"
    }, displayName), actions), description, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "item-details__row"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "item-details__content_type"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "installed_integrations.content_type",
      defaultMessage: "Content-Type: {contentType}",
      values: {
        contentType: outgoingWebhook.content_type || 'application/x-www-form-urlencoded'
      }
    }))), triggerWords, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "item-details__row"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "item-details__trigger-when"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "installed_integrations.triggerWhen",
      defaultMessage: "Trigger When: {triggerWhen}",
      values: {
        triggerWhen
      }
    }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "item-details__row"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "item-details__token"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "installed_integrations.token",
      defaultMessage: "Token: {token}",
      values: {
        token: outgoingWebhook.token
      }
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_copy_text__WEBPACK_IMPORTED_MODULE_7__["default"], {
      value: outgoingWebhook.token
    }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "item-details__row"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "item-details__creation"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "installed_integrations.creation",
      defaultMessage: "Created by {creator} on {createAt, date, full}",
      values: {
        creator: this.props.creator.username,
        createAt: outgoingWebhook.create_at
      }
    }))), urls));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(InstalledOutgoingWebhook, "propTypes", {
  /**
  * Data used for showing webhook details
  */
  outgoingWebhook: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,

  /**
  * Function used for webhook token regeneration
  */
  onRegenToken: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,

  /**
  * Function to call when webhook delete button is pressed
  */
  onDelete: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,

  /**
  * String used for filtering webhook item
  */
  filter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
  * Data used for showing created by details
  */
  creator: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,

  /**
  *  Set to show available actions on webhook
  */
  canChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,

  /**
  *  Data used in routing of webhook for modifications
  */
  team: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,

  /**
  *  Data used for filtering of webhooks based in filter prop
  */
  channel: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(matchesFilter, "matchesFilter", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/installed_outgoing_webhook.jsx");
  reactHotLoader.register(InstalledOutgoingWebhook, "InstalledOutgoingWebhook", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/installed_outgoing_webhook.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/installed_outgoing_webhooks/index.js":
/*!**********************************************************************!*\
  !*** ./components/integrations/installed_outgoing_webhooks/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/actions/integrations */ "./node_modules/mattermost-redux/actions/integrations.js");
/* harmony import */ var mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mattermost_redux_selectors_entities_integrations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mattermost-redux/selectors/entities/integrations */ "./node_modules/mattermost-redux/selectors/entities/integrations.js");
/* harmony import */ var mattermost_redux_selectors_entities_integrations__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_integrations__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mattermost-redux/selectors/entities/teams */ "./node_modules/mattermost-redux/selectors/entities/teams.js");
/* harmony import */ var mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mattermost_redux_selectors_entities_channels__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mattermost-redux/selectors/entities/channels */ "./node_modules/mattermost-redux/selectors/entities/channels.js");
/* harmony import */ var mattermost_redux_selectors_entities_channels__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_channels__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mattermost-redux/selectors/entities/users */ "./node_modules/mattermost-redux/selectors/entities/users.js");
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var mattermost_redux_selectors_entities_roles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mattermost-redux/selectors/entities/roles */ "./node_modules/mattermost-redux/selectors/entities/roles.js");
/* harmony import */ var mattermost_redux_selectors_entities_roles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_roles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mattermost-redux/constants */ "./node_modules/mattermost-redux/constants/index.js");
/* harmony import */ var mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mattermost-redux/selectors/entities/general */ "./node_modules/mattermost-redux/selectors/entities/general.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var actions_integration_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! actions/integration_actions */ "./actions/integration_actions.jsx");
/* harmony import */ var _installed_outgoing_webhooks_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./installed_outgoing_webhooks.jsx */ "./components/integrations/installed_outgoing_webhooks/installed_outgoing_webhooks.jsx");
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
  const config = Object(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_9__["getConfig"])(state);
  const teamId = Object(mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_4__["getCurrentTeamId"])(state);
  const canManageOthersWebhooks = Object(mattermost_redux_selectors_entities_roles__WEBPACK_IMPORTED_MODULE_7__["haveITeamPermission"])(state, {
    team: teamId,
    permission: mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_8__["Permissions"].MANAGE_OTHERS_OUTGOING_WEBHOOKS
  });
  const outgoingHooks = Object(mattermost_redux_selectors_entities_integrations__WEBPACK_IMPORTED_MODULE_3__["getOutgoingHooks"])(state);
  const outgoingWebhooks = Object.keys(outgoingHooks).map(key => outgoingHooks[key]).filter(outgoingWebhook => outgoingWebhook.team_id === teamId);
  const enableOutgoingWebhooks = config.EnableOutgoingWebhooks === 'true';
  return {
    outgoingWebhooks,
    channels: Object(mattermost_redux_selectors_entities_channels__WEBPACK_IMPORTED_MODULE_5__["getAllChannels"])(state),
    users: Object(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_6__["getUsers"])(state),
    teamId,
    canManageOthersWebhooks,
    enableOutgoingWebhooks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
      loadOutgoingHooksAndProfilesForTeam: actions_integration_actions__WEBPACK_IMPORTED_MODULE_10__["loadOutgoingHooksAndProfilesForTeam"],
      removeOutgoingHook: mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_2__["removeOutgoingHook"],
      regenOutgoingHookToken: mattermost_redux_actions_integrations__WEBPACK_IMPORTED_MODULE_2__["regenOutgoingHookToken"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_installed_outgoing_webhooks_jsx__WEBPACK_IMPORTED_MODULE_11__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/installed_outgoing_webhooks/index.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/installed_outgoing_webhooks/index.js");
  reactHotLoader.register(_default, "default", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/installed_outgoing_webhooks/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/installed_outgoing_webhooks/installed_outgoing_webhooks.jsx":
/*!*********************************************************************************************!*\
  !*** ./components/integrations/installed_outgoing_webhooks/installed_outgoing_webhooks.jsx ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InstalledOutgoingWebhooks; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/constants */ "./utils/constants.jsx");
/* harmony import */ var components_backstage_components_backstage_list_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/backstage/components/backstage_list.jsx */ "./components/backstage/components/backstage_list.jsx");
/* harmony import */ var components_integrations_installed_outgoing_webhook_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/integrations/installed_outgoing_webhook.jsx */ "./components/integrations/installed_outgoing_webhook.jsx");
/* harmony import */ var components_formatted_markdown_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/formatted_markdown_message */ "./components/formatted_markdown_message.jsx");
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








class InstalledOutgoingWebhooks extends react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "regenOutgoingWebhookToken", outgoingWebhook => {
      this.props.actions.regenOutgoingHookToken(outgoingWebhook.id);
    });

    _defineProperty(this, "removeOutgoingHook", outgoingWebhook => {
      this.props.actions.removeOutgoingHook(outgoingWebhook.id);
    });

    _defineProperty(this, "outgoingWebhookCompare", (a, b) => {
      let displayNameA = a.display_name;

      if (!displayNameA) {
        const channelA = this.props.channels[a.channel_id];

        if (channelA) {
          displayNameA = channelA.display_name;
        } else {
          displayNameA = utils_utils_jsx__WEBPACK_IMPORTED_MODULE_3__["localizeMessage"]('installed_outgoing_webhooks.unknown_channel', 'A Private Webhook');
        }
      }

      let displayNameB = b.display_name;

      if (!displayNameB) {
        const channelB = this.props.channels[b.channel_id];

        if (channelB) {
          displayNameB = channelB.display_name;
        } else {
          displayNameB = utils_utils_jsx__WEBPACK_IMPORTED_MODULE_3__["localizeMessage"]('installed_outgoing_webhooks.unknown_channel', 'A Private Webhook');
        }
      }

      return displayNameA.localeCompare(displayNameB);
    });

    _defineProperty(this, "outgoingWebhooks", filter => this.props.outgoingWebhooks.sort(this.outgoingWebhookCompare).filter(outgoingWebhook => Object(components_integrations_installed_outgoing_webhook_jsx__WEBPACK_IMPORTED_MODULE_6__["matchesFilter"])(outgoingWebhook, this.props.channels[outgoingWebhook.channel_id], filter)).map(outgoingWebhook => {
      const canChange = this.props.canManageOthersWebhooks || this.props.user.id === outgoingWebhook.creator_id;
      const channel = this.props.channels[outgoingWebhook.channel_id];
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_integrations_installed_outgoing_webhook_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: outgoingWebhook.id,
        outgoingWebhook: outgoingWebhook,
        onRegenToken: this.regenOutgoingWebhookToken,
        onDelete: this.removeOutgoingHook,
        creator: this.props.users[outgoingWebhook.creator_id] || {},
        canChange: canChange,
        team: this.props.team,
        channel: channel
      });
    }));

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    if (this.props.enableOutgoingWebhooks) {
      this.props.actions.loadOutgoingHooksAndProfilesForTeam(this.props.teamId, utils_constants__WEBPACK_IMPORTED_MODULE_4__["default"].Integrations.START_PAGE_NUM, utils_constants__WEBPACK_IMPORTED_MODULE_4__["default"].Integrations.PAGE_SIZE).then(() => this.setState({
        loading: false
      }));
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_backstage_components_backstage_list_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
      header: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "installed_outgoing_webhooks.header",
        defaultMessage: "Installed Outgoing Webhooks"
      }),
      addText: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "installed_outgoing_webhooks.add",
        defaultMessage: "Add Outgoing Webhook"
      }),
      addLink: '/' + this.props.team.name + '/integrations/outgoing_webhooks/add',
      addButtonId: "addOutgoingWebhook",
      emptyText: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "installed_outgoing_webhooks.empty",
        defaultMessage: "No outgoing webhooks found"
      }),
      emptyTextSearch: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_formatted_markdown_message__WEBPACK_IMPORTED_MODULE_7__["default"], {
        id: "installed_outgoing_webhooks.emptySearch",
        defaultMessage: "No outgoing webhooks match {searchTerm}"
      }),
      helpText: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "installed_outgoing_webhooks.help",
        defaultMessage: "Use outgoing webhooks to connect external tools to Mattermost. {buildYourOwn} or visit the {appDirectory} to find self-hosted, third-party apps and integrations.",
        values: {
          buildYourOwn: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "http://docs.mattermost.com/developer/webhooks-outgoing.html"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
            id: "installed_outgoing_webhooks.help.buildYourOwn",
            defaultMessage: "Build your own"
          })),
          appDirectory: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://about.mattermost.com/default-app-directory/"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
            id: "installed_outgoing_webhooks.help.appDirectory",
            defaultMessage: "App Directory"
          }))
        }
      }),
      searchPlaceholder: utils_utils_jsx__WEBPACK_IMPORTED_MODULE_3__["localizeMessage"]('installed_outgoing_webhooks.search', 'Search Outgoing Webhooks'),
      loading: this.state.loading
    }, filter => {
      const children = this.outgoingWebhooks(filter);
      return [children, children.length > 0];
    });
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(InstalledOutgoingWebhooks, "propTypes", {
  /**
  *  Data used in passing down as props for webhook modifications
  */
  team: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,

  /**
  * Data used for checking if webhook is created by current user
  */
  user: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,

  /**
  *  Data used for checking modification privileges
  */
  canManageOthersWebhooks: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
  * Data used in passing down as props for showing webhook details
  */
  outgoingWebhooks: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array,

  /**
  * Data used in sorting for displaying list and as props channel details
  */
  channels: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,

  /**
  *  Data used in passing down as props for webhook -created by label
  */
  users: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,

  /**
  *  Data used in passing as argument for loading webhooks
  */
  teamId: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    /**
    * The function to call for removing outgoingWebhook
    */
    removeOutgoingHook: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,

    /**
    * The function to call for outgoingWebhook List and for the status of api
    */
    loadOutgoingHooksAndProfilesForTeam: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,

    /**
    * The function to call for regeneration of webhook token
    */
    regenOutgoingHookToken: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
  }),

  /**
  * Whether or not outgoing webhooks are enabled.
  */
  enableOutgoingWebhooks: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(InstalledOutgoingWebhooks, "InstalledOutgoingWebhooks", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/installed_outgoing_webhooks/installed_outgoing_webhooks.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/integration_option.jsx":
/*!********************************************************!*\
  !*** ./components/integrations/integration_option.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IntegrationOption; });
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.



class IntegrationOption extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  static get propTypes() {
    return {
      image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
      title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
      description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
      link: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
    };
  }

  render() {
    const {
      image,
      title,
      description,
      link
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: link,
      className: "integration-option"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      alt: 'integration image',
      className: "integration-option__image",
      src: image
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "integration-option__title"
    }, title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "integration-option__description"
    }, description));
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

  reactHotLoader.register(IntegrationOption, "IntegrationOption", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/integration_option.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/integrations/integrations.jsx":
/*!**************************************************!*\
  !*** ./components/integrations/integrations.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Integrations; });
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mattermost-redux/constants */ "./node_modules/mattermost-redux/constants/index.js");
/* harmony import */ var mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var images_bot_default_icon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! images/bot_default_icon.png */ "./images/bot_default_icon.png");
/* harmony import */ var images_bot_default_icon_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(images_bot_default_icon_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");
/* harmony import */ var images_incoming_webhook_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! images/incoming_webhook.jpg */ "./images/incoming_webhook.jpg");
/* harmony import */ var images_incoming_webhook_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(images_incoming_webhook_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var images_oauth_icon_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! images/oauth_icon.png */ "./images/oauth_icon.png");
/* harmony import */ var images_oauth_icon_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(images_oauth_icon_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var images_outgoing_webhook_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! images/outgoing_webhook.jpg */ "./images/outgoing_webhook.jpg");
/* harmony import */ var images_outgoing_webhook_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(images_outgoing_webhook_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var images_slash_command_icon_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! images/slash_command_icon.jpg */ "./images/slash_command_icon.jpg");
/* harmony import */ var images_slash_command_icon_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(images_slash_command_icon_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var components_permissions_gates_system_permission_gate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/permissions_gates/system_permission_gate */ "./components/permissions_gates/system_permission_gate/index.js");
/* harmony import */ var components_permissions_gates_team_permission_gate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/permissions_gates/team_permission_gate */ "./components/permissions_gates/team_permission_gate/index.js");
/* harmony import */ var _integration_option_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./integration_option.jsx */ "./components/integrations/integration_option.jsx");


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













class Integrations extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "updateTitle", () => {
      const currentSiteName = this.props.siteName || '';
      document.title = utils_utils_jsx__WEBPACK_IMPORTED_MODULE_6__["localizeMessage"]('admin.sidebar.integrations', 'Integrations') + ' - ' + this.props.team.display_name + ' ' + currentSiteName;
    });
  }

  static get propTypes() {
    return {
      team: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
      user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
      siteName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
      enableIncomingWebhooks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
      enableOutgoingWebhooks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
      enableCommands: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
      enableOAuthServiceProvider: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
    };
  }

  componentDidMount() {
    this.updateTitle();
  }

  render() {
    const options = [];

    if (this.props.enableIncomingWebhooks) {
      options.push(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_permissions_gates_team_permission_gate__WEBPACK_IMPORTED_MODULE_12__["default"], {
        teamId: this.props.team.id,
        permissions: [mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_4__["Permissions"].MANAGE_INCOMING_WEBHOOKS],
        key: "incomingWebhookPermission"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_integration_option_jsx__WEBPACK_IMPORTED_MODULE_13__["default"], {
        key: "incomingWebhook",
        image: images_incoming_webhook_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
        title: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          id: "integrations.incomingWebhook.title",
          defaultMessage: "Incoming Webhooks"
        }),
        description: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          id: "integrations.incomingWebhook.description",
          defaultMessage: "Incoming webhooks allow external integrations to send messages"
        }),
        link: '/' + this.props.team.name + '/integrations/incoming_webhooks'
      })));
    }

    if (this.props.enableOutgoingWebhooks) {
      options.push(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_permissions_gates_team_permission_gate__WEBPACK_IMPORTED_MODULE_12__["default"], {
        teamId: this.props.team.id,
        permissions: [mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_4__["Permissions"].MANAGE_OUTGOING_WEBHOOKS],
        key: "outgoingWebhookPermission"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_integration_option_jsx__WEBPACK_IMPORTED_MODULE_13__["default"], {
        key: "outgoingWebhook",
        image: images_outgoing_webhook_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
        title: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          id: "integrations.outgoingWebhook.title",
          defaultMessage: "Outgoing Webhooks"
        }),
        description: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          id: "integrations.outgoingWebhook.description",
          defaultMessage: "Outgoing webhooks allow external integrations to receive and respond to messages"
        }),
        link: '/' + this.props.team.name + '/integrations/outgoing_webhooks'
      })));
    }

    if (this.props.enableCommands) {
      options.push(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_permissions_gates_team_permission_gate__WEBPACK_IMPORTED_MODULE_12__["default"], {
        teamId: this.props.team.id,
        permissions: [mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_4__["Permissions"].MANAGE_SLASH_COMMANDS],
        key: "commandPermission"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_integration_option_jsx__WEBPACK_IMPORTED_MODULE_13__["default"], {
        key: "command",
        image: images_slash_command_icon_jpg__WEBPACK_IMPORTED_MODULE_10___default.a,
        title: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          id: "integrations.command.title",
          defaultMessage: "Slash Commands"
        }),
        description: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          id: "integrations.command.description",
          defaultMessage: "Slash commands send events to an external integration"
        }),
        link: '/' + this.props.team.name + '/integrations/commands'
      })));
    }

    if (this.props.enableOAuthServiceProvider) {
      options.push(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_permissions_gates_system_permission_gate__WEBPACK_IMPORTED_MODULE_11__["default"], {
        permissions: [mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_4__["Permissions"].MANAGE_OAUTH],
        key: "oauth2AppsPermission"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_integration_option_jsx__WEBPACK_IMPORTED_MODULE_13__["default"], {
        key: "oauth2Apps",
        image: images_oauth_icon_png__WEBPACK_IMPORTED_MODULE_8___default.a,
        title: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          id: "integrations.oauthApps.title",
          defaultMessage: "OAuth 2.0 Applications"
        }),
        description: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          id: "integrations.oauthApps.description",
          defaultMessage: "Auth 2.0 allows external applications to make authorized requests to the Mattermost API"
        }),
        link: '/' + this.props.team.name + '/integrations/oauth2-apps'
      })));
    }

    options.push(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_permissions_gates_system_permission_gate__WEBPACK_IMPORTED_MODULE_11__["default"], {
      permissions: ['manage_bots'],
      key: "botsPermissions"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_integration_option_jsx__WEBPACK_IMPORTED_MODULE_13__["default"], {
      image: images_bot_default_icon_png__WEBPACK_IMPORTED_MODULE_5___default.a,
      title: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "bots.manage.header",
        defaultMessage: "Bot Accounts"
      }),
      description: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "bots.manage.description",
        defaultMessage: "Use bot accounts to integrate with Mattermost through plugins or the API"
      }),
      link: '/' + this.props.team.name + '/integrations/bots'
    })));
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "backstage-content row"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "backstage-header"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "integrations.header",
      defaultMessage: "Integrations"
    }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "backstage-list__help"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "integrations.help",
      defaultMessage: "Visit the {appDirectory} to find self-hosted, third-party apps and integrations for Mattermost.",
      values: {
        appDirectory: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
          target: "_blank",
          rel: "noopener noreferrer",
          href: "https://about.mattermost.com/default-app-directory/"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          id: "integrations.help.appDirectory",
          defaultMessage: "App Directory"
        }))
      }
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "integrations-list d-flex flex-wrap"
    }, options));
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

  reactHotLoader.register(Integrations, "Integrations", "/home/pdxuan/Desktop/mattermost-webapp/components/integrations/integrations.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/permissions_gates/any_team_permission_gate/any_team_permission_gate.jsx":
/*!********************************************************************************************!*\
  !*** ./components/permissions_gates/any_team_permission_gate/any_team_permission_gate.jsx ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AnyTeamPermissionGate; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
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


class AnyTeamPermissionGate extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    if (this.props.hasPermission && !this.props.invert) {
      return this.props.children;
    }

    if (!this.props.hasPermission && this.props.invert) {
      return this.props.children;
    }

    return null;
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(AnyTeamPermissionGate, "defaultProps", {
  invert: false
});

_defineProperty(AnyTeamPermissionGate, "propTypes", {
  /**
   * Permissions enough to pass the gate (binary OR)
   */
  permissions: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string).isRequired,

  /**
   * Has permission
   */
  hasPermission: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,

  /**
   * Invert the permission (used for else)
   */
  invert: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,

  /**
   * Content protected by the permissions gate
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node.isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AnyTeamPermissionGate, "AnyTeamPermissionGate", "/home/pdxuan/Desktop/mattermost-webapp/components/permissions_gates/any_team_permission_gate/any_team_permission_gate.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/permissions_gates/any_team_permission_gate/index.js":
/*!************************************************************************!*\
  !*** ./components/permissions_gates/any_team_permission_gate/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var mattermost_redux_selectors_entities_roles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/selectors/entities/roles */ "./node_modules/mattermost-redux/selectors/entities/roles.js");
/* harmony import */ var mattermost_redux_selectors_entities_roles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_roles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mattermost-redux/selectors/entities/teams */ "./node_modules/mattermost-redux/selectors/entities/teams.js");
/* harmony import */ var mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _any_team_permission_gate_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./any_team_permission_gate.jsx */ "./components/permissions_gates/any_team_permission_gate/any_team_permission_gate.jsx");


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
  const teams = Object(mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_3__["getMyTeams"])(state);

  for (const team of teams) {
    for (const permission of ownProps.permissions) {
      if (Object(mattermost_redux_selectors_entities_roles__WEBPACK_IMPORTED_MODULE_2__["haveITeamPermission"])(state, {
        team: team.id,
        permission
      })) {
        return {
          hasPermission: true
        };
      }
    }
  }

  return {
    hasPermission: false
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(_any_team_permission_gate_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/permissions_gates/any_team_permission_gate/index.js");
  reactHotLoader.register(_default, "default", "/home/pdxuan/Desktop/mattermost-webapp/components/permissions_gates/any_team_permission_gate/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

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

/***/ "./components/widgets/icons/fa_previous_icon.tsx":
/*!*******************************************************!*\
  !*** ./components/widgets/icons/fa_previous_icon.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PreviousIcon; });
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


class PreviousIcon extends react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent {
  render() {
    const {
      formatMessage
    } = this.context.intl;
    const className = 'fa fa-1x fa-angle-left' + (this.props.additionalClassName ? ' ' + this.props.additionalClassName : '');
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: className,
      title: formatMessage({
        id: 'generic_icons.previous',
        defaultMessage: 'Previous Icon'
      })
    });
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(PreviousIcon, "propTypes", {
  additionalClassName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf([null])])
});

_defineProperty(PreviousIcon, "contextTypes", {
  intl: react_intl__WEBPACK_IMPORTED_MODULE_2__["intlShape"].isRequired
});

_defineProperty(PreviousIcon, "defaultProps", {
  additionalClassName: null
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PreviousIcon, "PreviousIcon", "/home/pdxuan/Desktop/mattermost-webapp/components/widgets/icons/fa_previous_icon.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/widgets/icons/fa_search_icon.jsx":
/*!*****************************************************!*\
  !*** ./components/widgets/icons/fa_search_icon.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchIcon; });
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


class SearchIcon extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "generic_icons.search",
      defaultMessage: "Search Icon"
    }, title => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-search",
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

  reactHotLoader.register(SearchIcon, "SearchIcon", "/home/pdxuan/Desktop/mattermost-webapp/components/widgets/icons/fa_search_icon.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./images/bot_default_icon.png":
/*!*************************************!*\
  !*** ./images/bot_default_icon.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "files/6d99c23db16f87ca2477c7af583a633c.png";

/***/ }),

/***/ "./images/incoming_webhook.jpg":
/*!*************************************!*\
  !*** ./images/incoming_webhook.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "files/fd69f7891f867c2aa14011da92b728ac.jpg";

/***/ }),

/***/ "./images/oauth_icon.png":
/*!*******************************!*\
  !*** ./images/oauth_icon.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "files/ce81936d829c1ac530749ba2fe913de0.png";

/***/ }),

/***/ "./images/outgoing_webhook.jpg":
/*!*************************************!*\
  !*** ./images/outgoing_webhook.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "files/2aa264fb1956b8be41f2047d428a1a1e.jpg";

/***/ }),

/***/ "./images/slash_command_icon.jpg":
/*!***************************************!*\
  !*** ./images/slash_command_icon.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "files/d184fcdb23c1e24bfd7132950ceb4f68.jpg";

/***/ }),

/***/ "./node_modules/mattermost-redux/actions/bots.js":
/*!*******************************************************!*\
  !*** ./node_modules/mattermost-redux/actions/bots.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = __webpack_require__(/*! ../client */ "./node_modules/mattermost-redux/client/index.js");
var action_types_1 = __webpack_require__(/*! ../action_types */ "./node_modules/mattermost-redux/action_types/index.js");
var helpers_1 = __webpack_require__(/*! ./helpers */ "./node_modules/mattermost-redux/actions/helpers.js");
var BOTS_PER_PAGE_DEFAULT = 20;
function createBot(bot) {
    return helpers_1.bindClientFunc({
        clientFunc: client_1.Client4.createBot,
        onSuccess: action_types_1.BotTypes.RECEIVED_BOT_ACCOUNT,
        params: [
            bot,
        ],
    });
}
exports.createBot = createBot;
function patchBot(botUserId, botPatch) {
    return helpers_1.bindClientFunc({
        clientFunc: client_1.Client4.patchBot,
        onSuccess: action_types_1.BotTypes.RECEIVED_BOT_ACCOUNT,
        params: [
            botUserId,
            botPatch,
        ],
    });
}
exports.patchBot = patchBot;
function loadBot(botUserId) {
    return helpers_1.bindClientFunc({
        clientFunc: client_1.Client4.getBot,
        onSuccess: action_types_1.BotTypes.RECEIVED_BOT_ACCOUNT,
        params: [
            botUserId,
        ],
    });
}
exports.loadBot = loadBot;
function loadBots(page, perPage) {
    if (page === void 0) { page = 0; }
    if (perPage === void 0) { perPage = BOTS_PER_PAGE_DEFAULT; }
    return helpers_1.bindClientFunc({
        clientFunc: client_1.Client4.getBotsIncludeDeleted,
        onSuccess: action_types_1.BotTypes.RECEIVED_BOT_ACCOUNTS,
        params: [
            page,
            perPage,
        ],
    });
}
exports.loadBots = loadBots;
function disableBot(botUserId) {
    return helpers_1.bindClientFunc({
        clientFunc: client_1.Client4.disableBot,
        onSuccess: action_types_1.BotTypes.RECEIVED_BOT_ACCOUNT,
        params: [
            botUserId,
        ],
    });
}
exports.disableBot = disableBot;
function enableBot(botUserId) {
    return helpers_1.bindClientFunc({
        clientFunc: client_1.Client4.enableBot,
        onSuccess: action_types_1.BotTypes.RECEIVED_BOT_ACCOUNT,
        params: [
            botUserId,
        ],
    });
}
exports.enableBot = enableBot;
function assignBot(botUserId, newOwnerId) {
    return helpers_1.bindClientFunc({
        clientFunc: client_1.Client4.assignBot,
        onSuccess: action_types_1.BotTypes.RECEIVED_BOT_ACCOUNT,
        params: [
            botUserId,
            newOwnerId,
        ],
    });
}
exports.assignBot = assignBot;
//# sourceMappingURL=bots.js.map

/***/ }),

/***/ "./node_modules/mattermost-redux/selectors/entities/bots.js":
/*!******************************************************************!*\
  !*** ./node_modules/mattermost-redux/selectors/entities/bots.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
Object.defineProperty(exports, "__esModule", { value: true });
function getBotAccounts(state) {
    return state.entities.bots.accounts;
}
exports.getBotAccounts = getBotAccounts;
//# sourceMappingURL=bots.js.map

/***/ }),

/***/ "./node_modules/mattermost-redux/selectors/entities/integrations.js":
/*!**************************************************************************!*\
  !*** ./node_modules/mattermost-redux/selectors/entities/integrations.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var reselect = tslib_1.__importStar(__webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js"));
var teams_1 = __webpack_require__(/*! ./teams */ "./node_modules/mattermost-redux/selectors/entities/teams.js");
function getIncomingHooks(state) {
    return state.entities.integrations.incomingHooks;
}
exports.getIncomingHooks = getIncomingHooks;
function getOutgoingHooks(state) {
    return state.entities.integrations.outgoingHooks;
}
exports.getOutgoingHooks = getOutgoingHooks;
function getCommands(state) {
    return state.entities.integrations.commands;
}
exports.getCommands = getCommands;
function getOAuthApps(state) {
    return state.entities.integrations.oauthApps;
}
exports.getOAuthApps = getOAuthApps;
function getSystemCommands(state) {
    return state.entities.integrations.systemCommands;
}
exports.getSystemCommands = getSystemCommands;
/**
 * get outgoing hooks in current team
 */
exports.getOutgoingHooksInCurrentTeam = reselect.createSelector(teams_1.getCurrentTeamId, getOutgoingHooks, function (teamId, hooks) {
    return Object.values(hooks).filter(function (o) { return o.team_id === teamId; });
});
exports.getAllCommands = reselect.createSelector(getCommands, getSystemCommands, function (commands, systemCommands) {
    return tslib_1.__assign(tslib_1.__assign({}, commands), systemCommands);
});
exports.getAutocompleteCommandsList = reselect.createSelector(exports.getAllCommands, teams_1.getCurrentTeamId, function (commands, currentTeamId) {
    return Object.values(commands).filter(function (command) {
        return command && (!command.team_id || command.team_id === currentTeamId) && command.auto_complete;
    }).sort(function (a, b) { return a.display_name.localeCompare(b.display_name); });
});
//# sourceMappingURL=integrations.js.map

/***/ })

}]);
//# sourceMappingURL=8.f30cd17ac6be0c18e0b0.js.map
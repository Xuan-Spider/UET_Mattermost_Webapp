(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./components/settings_sidebar.tsx":
/*!*****************************************!*\
  !*** ./components/settings_sidebar.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SettingsSidebar; });
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils_user_agent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/user_agent */ "./utils/user_agent.tsx");



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



class SettingsSidebar extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleClick", (tab, e) => {
      e.preventDefault();
      this.props.updateTab(tab.name);
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(e.target).closest('.settings-modal').addClass('display--content');
    });
  }

  componentDidMount() {
    if (utils_user_agent__WEBPACK_IMPORTED_MODULE_4__["isFirefox"]()) {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.settings-modal .settings-table .nav').addClass('position--top');
    }
  }

  render() {
    const tabList = this.props.tabs.map(tab => {
      const key = "".concat(tab.name, "_li");
      let className = '';

      if (this.props.activeTab === tab.name) {
        className = 'active';
      }

      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
        id: "".concat(tab.name, "Li"),
        key: key,
        className: className
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
        id: "".concat(tab.name, "Button"),
        className: "cursor--pointer style--none",
        onClick: this.handleClick.bind(null, tab),
        "aria-label": tab.uiName.toLowerCase()
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
        className: tab.icon,
        title: tab.iconTitle
      }), tab.uiName));
    });
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
      id: "tabList",
      className: "nav nav-pills nav-stacked"
    }, tabList));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(SettingsSidebar, "propTypes", {
  activeTab: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  tabs: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    iconTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    uiName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  })).isRequired,
  updateTab: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SettingsSidebar, "SettingsSidebar", "/home/pdxuan/Desktop/mattermost-webapp/components/settings_sidebar.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=4.ecf11d7d0915cf3a63e9.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./components/get_android_app/get_android_app.tsx":
/*!********************************************************!*\
  !*** ./components/get_android_app/get_android_app.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GetAndroidApp; });
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.url */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var utils_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/url */ "./utils/url.tsx");
/* harmony import */ var images_favicon_android_chrome_192x192_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! images/favicon/android-chrome-192x192.png */ "./images/favicon/android-chrome-192x192.png");
/* harmony import */ var images_favicon_android_chrome_192x192_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(images_favicon_android_chrome_192x192_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var images_nexus_6p_mockup_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! images/nexus-6p-mockup.png */ "./images/nexus-6p-mockup.png");
/* harmony import */ var images_nexus_6p_mockup_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(images_nexus_6p_mockup_png__WEBPACK_IMPORTED_MODULE_8__);




(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






function GetAndroidApp(props) {
  const {
    androidAppDownloadLink,
    history,
    location
  } = props;

  const onContinue = e => {
    e.preventDefault();
    const redirectTo = new URLSearchParams(location.search).get('redirect_to');

    if (redirectTo) {
      history.push(redirectTo);
    } else {
      history.push('/');
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "get-app get-android-app"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    className: "get-app__header"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "get_app.androidHeader",
    defaultMessage: "Mattermost works best if you switch to our Android app"
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    alt: 'android app icon',
    className: "get-android-app__icon",
    src: images_favicon_android_chrome_192x192_png__WEBPACK_IMPORTED_MODULE_7___default.a
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "get-android-app__app-info"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "get-android-app__app-name"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "get_app.androidAppName",
    defaultMessage: "Mattermost for Android"
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "get-android-app__app-creator"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "get_app.mattermostInc",
    defaultMessage: "Mattermost, Inc"
  })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    className: "btn btn-primary get-android-app__app-store-link",
    href: Object(utils_url__WEBPACK_IMPORTED_MODULE_6__["useSafeUrl"])(androidAppDownloadLink)
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "get_app.continue",
    defaultMessage: "Continue"
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    alt: 'get app screenshot',
    className: "get-app__screenshot",
    src: images_nexus_6p_mockup_png__WEBPACK_IMPORTED_MODULE_8___default.a
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "get-app__continue-with-browser"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "get_app.continueWithBrowser",
    defaultMessage: "Or {link}",
    values: {
      link: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
        onClick: onContinue,
        className: "get-android-app__continue"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "get_app.continueWithBrowserLink",
        defaultMessage: "continue with browser"
      }))
    }
  })));
}

__signature__(GetAndroidApp, "useSafeUrl{}", () => [utils_url__WEBPACK_IMPORTED_MODULE_6__["useSafeUrl"]]);

GetAndroidApp.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any.isRequired,
  androidAppDownloadLink: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(GetAndroidApp, "GetAndroidApp", "/home/pdxuan/Desktop/mattermost-webapp/components/get_android_app/get_android_app.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/get_android_app/index.js":
/*!*********************************************!*\
  !*** ./components/get_android_app/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mattermost-redux/selectors/entities/general */ "./node_modules/mattermost-redux/selectors/entities/general.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _get_android_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get_android_app */ "./components/get_android_app/get_android_app.tsx");
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
  const androidAppDownloadLink = config.AndroidAppDownloadLink;
  return {
    androidAppDownloadLink
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(_get_android_app__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/get_android_app/index.js");
  reactHotLoader.register(_default, "default", "/home/pdxuan/Desktop/mattermost-webapp/components/get_android_app/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./images/favicon/android-chrome-192x192.png":
/*!***************************************************!*\
  !*** ./images/favicon/android-chrome-192x192.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "files/0ddc5a67a0fa201980fb27a35e4502d2.png";

/***/ }),

/***/ "./images/nexus-6p-mockup.png":
/*!************************************!*\
  !*** ./images/nexus-6p-mockup.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "files/1f78f8087bb8ce0711f7a6cfa5c1b94d.png";

/***/ })

}]);
//# sourceMappingURL=21.3c2cdfc000945c828e51.js.map
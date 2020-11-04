(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./components/get_ios_app/get_ios_app.tsx":
/*!************************************************!*\
  !*** ./components/get_ios_app/get_ios_app.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GetIosApp; });
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
/* harmony import */ var images_app_store_button_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! images/app-store-button.png */ "./images/app-store-button.png");
/* harmony import */ var images_app_store_button_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(images_app_store_button_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var images_iphone_6_mockup_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! images/iphone-6-mockup.png */ "./images/iphone-6-mockup.png");
/* harmony import */ var images_iphone_6_mockup_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(images_iphone_6_mockup_png__WEBPACK_IMPORTED_MODULE_8__);




(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






function GetIosApp(props) {
  const {
    iosAppDownloadLink,
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
    className: "get-app get-ios-app"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    className: "get-app__header"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "get_app.iosHeader",
    defaultMessage: "Mattermost works best if you switch to our iPhone app"
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    className: "get-ios-app__app-store-link",
    href: Object(utils_url__WEBPACK_IMPORTED_MODULE_6__["useSafeUrl"])(iosAppDownloadLink),
    rel: "noopener noreferrer"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    alt: 'app store button',
    src: images_app_store_button_png__WEBPACK_IMPORTED_MODULE_7___default.a
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    alt: 'get app screenshot',
    className: "get-app__screenshot",
    src: images_iphone_6_mockup_png__WEBPACK_IMPORTED_MODULE_8___default.a
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    className: "get-ios-app__already-have-it"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "get_app.alreadyHaveIt",
    defaultMessage: "Already have it?"
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    className: "btn btn-primary get-ios-app__open-mattermost",
    href: "mattermost://"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "get_app.openMattermost",
    defaultMessage: "Open Mattermost"
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "get-app__continue-with-browser"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "get_app.continueWithBrowser",
    defaultMessage: "Or {link}",
    values: {
      link: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
        onClick: onContinue,
        className: "get-ios-app__continue"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "get_app.continueWithBrowserLink",
        defaultMessage: "continue with browser"
      }))
    }
  })));
}

__signature__(GetIosApp, "useSafeUrl{}", () => [utils_url__WEBPACK_IMPORTED_MODULE_6__["useSafeUrl"]]);

GetIosApp.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any.isRequired,
  iosAppDownloadLink: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(GetIosApp, "GetIosApp", "/home/pdxuan/Desktop/mattermost-webapp/components/get_ios_app/get_ios_app.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/get_ios_app/index.js":
/*!*****************************************!*\
  !*** ./components/get_ios_app/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mattermost-redux/selectors/entities/general */ "./node_modules/mattermost-redux/selectors/entities/general.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _get_ios_app_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get_ios_app.tsx */ "./components/get_ios_app/get_ios_app.tsx");
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
  const iosAppDownloadLink = config.IosAppDownloadLink;
  return {
    iosAppDownloadLink
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(_get_ios_app_tsx__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/get_ios_app/index.js");
  reactHotLoader.register(_default, "default", "/home/pdxuan/Desktop/mattermost-webapp/components/get_ios_app/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./images/app-store-button.png":
/*!*************************************!*\
  !*** ./images/app-store-button.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "files/b0b27c154c6bcece35d9a2e5a6d8520b.png";

/***/ }),

/***/ "./images/iphone-6-mockup.png":
/*!************************************!*\
  !*** ./images/iphone-6-mockup.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "files/deb733e8ae657e1813261ce18d4aec46.png";

/***/ })

}]);
//# sourceMappingURL=22.92ca6f6a9e16a149ce21.js.map
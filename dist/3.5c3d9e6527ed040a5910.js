(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./components/audit_table/audit_table.jsx":
/*!************************************************!*\
  !*** ./components/audit_table/audit_table.jsx ***!
  \************************************************/
/*! exports provided: AuditTable, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditTable", function() { return AuditTable; });
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");
/* harmony import */ var utils_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/i18n */ "./utils/i18n.jsx");




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





const holders = Object(react_intl__WEBPACK_IMPORTED_MODULE_5__["defineMessages"])({
  sessionRevoked: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.sessionRevoked'),
    defaultMessage: 'The session with id {sessionId} was revoked'
  },
  channelCreated: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.channelCreated'),
    defaultMessage: 'Created the {channelName} channel'
  },
  establishedDM: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.establishedDM'),
    defaultMessage: 'Established a direct message channel with {username}'
  },
  nameUpdated: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.nameUpdated'),
    defaultMessage: 'Updated the {channelName} channel name'
  },
  headerUpdated: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.headerUpdated'),
    defaultMessage: 'Updated the {channelName} channel header'
  },
  channelDeleted: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.channelDeleted'),
    defaultMessage: 'Archived the channel with the URL {url}'
  },
  userAdded: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.userAdded'),
    defaultMessage: 'Added {username} to the {channelName} channel'
  },
  userRemoved: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.userRemoved'),
    defaultMessage: 'Removed {username} to the {channelName} channel'
  },
  attemptedRegisterApp: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.attemptedRegisterApp'),
    defaultMessage: 'Attempted to register a new OAuth Application with ID {id}'
  },
  attemptedAllowOAuthAccess: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.attemptedAllowOAuthAccess'),
    defaultMessage: 'Attempted to allow a new OAuth service access'
  },
  successfullOAuthAccess: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.successfullOAuthAccess'),
    defaultMessage: 'Successfully gave a new OAuth service access'
  },
  failedOAuthAccess: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.failedOAuthAccess'),
    defaultMessage: 'Failed to allow a new OAuth service access - the redirect URI did not match the previously registered callback'
  },
  attemptedOAuthToken: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.attemptedOAuthToken'),
    defaultMessage: 'Attempted to get an OAuth access token'
  },
  successfullOAuthToken: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.successfullOAuthToken'),
    defaultMessage: 'Successfully added a new OAuth service'
  },
  oauthTokenFailed: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.oauthTokenFailed'),
    defaultMessage: 'Failed to get an OAuth access token - {token}'
  },
  attemptedLogin: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.attemptedLogin'),
    defaultMessage: 'Attempted to login'
  },
  authenticated: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.authenticated'),
    defauleMessage: 'Successfully authenticated'
  },
  successfullLogin: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.successfullLogin'),
    defaultMessage: 'Successfully logged in'
  },
  failedLogin: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.failedLogin'),
    defaultMessage: 'FAILED login attempt'
  },
  updatePicture: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.updatePicture'),
    defaultMessage: 'Updated your profile picture'
  },
  updateGeneral: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.updateGeneral'),
    defaultMessage: 'Updated the general settings of your account'
  },
  attemptedPassword: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.attemptedPassword'),
    defaultMessage: 'Attempted to change password'
  },
  successfullPassword: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.successfullPassword'),
    defaultMessage: 'Successfully changed password'
  },
  failedPassword: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.failedPassword'),
    defaultMessage: 'Failed to change password - tried to update user password who was logged in through OAuth'
  },
  updatedRol: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.updatedRol'),
    defaultMessage: 'Updated user role(s) to '
  },
  member: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.member'),
    defaultMessage: 'member'
  },
  accountActive: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.accountActive'),
    defaultMessage: 'Account activated'
  },
  accountInactive: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.accountInactive'),
    defaultMessage: 'Account deactivated'
  },
  by: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.by'),
    defaultMessage: ' by {username}'
  },
  byAdmin: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.byAdmin'),
    defaultMessage: ' by an admin'
  },
  sentEmail: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.sentEmail'),
    defaultMessage: 'Sent an email to {email} to reset your password'
  },
  attemptedReset: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.attemptedReset'),
    defaultMessage: 'Attempted to reset password'
  },
  successfullReset: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.successfullReset'),
    defaultMessage: 'Successfully reset password'
  },
  updateGlobalNotifications: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.updateGlobalNotifications'),
    defaultMessage: 'Updated your global notification settings'
  },
  attemptedWebhookCreate: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.attemptedWebhookCreate'),
    defaultMessage: 'Attempted to create a webhook'
  },
  succcessfullWebhookCreate: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.successfullWebhookCreate'),
    defaultMessage: 'Successfully created a webhook'
  },
  failedWebhookCreate: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.failedWebhookCreate'),
    defaultMessage: 'Failed to create a webhook - bad channel permissions'
  },
  attemptedWebhookDelete: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.attemptedWebhookDelete'),
    defaultMessage: 'Attempted to delete a webhook'
  },
  successfullWebhookDelete: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.successfullWebhookDelete'),
    defaultMessage: 'Successfully deleted a webhook'
  },
  failedWebhookDelete: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.failedWebhookDelete'),
    defaultMessage: 'Failed to delete a webhook - inappropriate conditions'
  },
  logout: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.logout'),
    defaultMessage: 'Logged out of your account'
  },
  verified: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.verified'),
    defaultMessage: 'Successfully verified your email address'
  },
  revokedAll: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.revokedAll'),
    defaultMessage: 'Revoked all current sessions for the team'
  },
  loginAttempt: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.loginAttempt'),
    defaultMessage: ' (Login attempt)'
  },
  loginFailure: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.loginFailure'),
    defaultMessage: ' (Login failure)'
  },
  attemptedLicenseAdd: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.attemptedLicenseAdd'),
    defaultMessage: 'Attempted to add new license'
  },
  successfullLicenseAdd: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.successfullLicenseAdd'),
    defaultMessage: 'Successfully added new license'
  },
  failedExpiredLicenseAdd: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.failedExpiredLicenseAdd'),
    defaultMessage: 'Failed to add a new license as it has either expired or not yet been started'
  },
  failedInvalidLicenseAdd: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.failedInvalidLicenseAdd'),
    defaultMessage: 'Failed to add an invalid license'
  },
  licenseRemoved: {
    id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_7__["t"])('audit_table.licenseRemoved'),
    defaultMessage: 'Successfully removed a license'
  }
});
class AuditTable extends react__WEBPACK_IMPORTED_MODULE_4___default.a.PureComponent {
  componentDidMount() {
    const ids = this.props.audits.map(audit => audit.user_id);
    this.props.actions.getMissingProfilesByIds(ids);
  }

  render() {
    const audits = this.props.audits;
    const showUserId = this.props.showUserId;
    const showIp = this.props.showIp;
    const showSession = this.props.showSession;
    var accessList = [];

    for (var i = 0; i < audits.length; i++) {
      const audit = audits[i];
      const auditInfo = this.formatAuditInfo(audit);
      let uContent;

      if (showUserId) {
        uContent = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
          className: "word-break--all"
        }, auditInfo.userId);
      }

      let iContent;

      if (showIp) {
        iContent = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
          className: "whitespace--nowrap word-break--all"
        }, auditInfo.ip);
      }

      let sContent;

      if (showSession) {
        sContent = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
          className: "whitespace--nowrap word-break--all"
        }, auditInfo.sessionId);
      }

      let descStyle = '';

      if (auditInfo.desc.toLowerCase().indexOf('fail') !== -1) {
        descStyle = ' color--error';
      }

      accessList[i] = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", {
        key: audit.id
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
        className: "whitespace--nowrap word-break--all"
      }, auditInfo.timestamp), uContent, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
        className: 'word-break--all' + descStyle
      }, auditInfo.desc), iContent, sContent);
    }

    let userIdContent;

    if (showUserId) {
      userIdContent = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: "audit_table.userId",
        defaultMessage: "User ID"
      }));
    }

    let ipContent;

    if (showIp) {
      ipContent = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: "audit_table.ip",
        defaultMessage: "IP Address"
      }));
    }

    let sessionContent;

    if (showSession) {
      sessionContent = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: "audit_table.session",
        defaultMessage: "Session ID"
      }));
    }

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("table", {
      className: "table"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: "audit_table.timestamp",
      defaultMessage: "Timestamp"
    })), userIdContent, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: "audit_table.action",
      defaultMessage: "Action"
    })), ipContent, sessionContent)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tbody", null, accessList));
  }

  formatAuditInfo(audit) {
    const {
      formatMessage
    } = this.props.intl;
    const actionURL = audit.action.replace(/\/api\/v[1-9]/, '');
    let auditDesc = '';

    if (actionURL.indexOf('/channels') === 0) {
      const channelInfo = audit.extra_info.split(' ');
      const channelNameField = channelInfo[0].split('=');
      let channelURL = '';
      let channelObj;
      let channelName = '';

      if (channelNameField.indexOf('name') >= 0) {
        channelURL = channelNameField[channelNameField.indexOf('name') + 1];
        channelObj = this.props.getByName(channelURL);

        if (channelObj) {
          channelName = channelObj.display_name;
        } else {
          channelName = channelURL;
        }
      }

      switch (actionURL) {
        case '/channels/create':
          auditDesc = formatMessage(holders.channelCreated, {
            channelName
          });
          break;

        case '/channels/create_direct':
          auditDesc = formatMessage(holders.establishedDM, {
            username: Object(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_6__["getDirectTeammate"])(channelObj.id).username
          });
          break;

        case '/channels/update':
          auditDesc = formatMessage(holders.nameUpdated, {
            channelName
          });
          break;

        case '/channels/update_desc': // support the old path

        case '/channels/update_header':
          auditDesc = formatMessage(holders.headerUpdated, {
            channelName
          });
          break;

        default:
          {
            let userIdField = [];
            let userId = '';
            let username = '';

            if (channelInfo[1]) {
              userIdField = channelInfo[1].split('=');

              if (userIdField.indexOf('user_id') >= 0) {
                userId = userIdField[userIdField.indexOf('user_id') + 1];
                var profile = this.props.getUser(userId);

                if (profile) {
                  username = profile.username;
                }
              }
            }

            if (/\/channels\/[A-Za-z0-9]+\/delete/.test(actionURL)) {
              auditDesc = formatMessage(holders.channelDeleted, {
                url: channelURL
              });
            } else if (/\/channels\/[A-Za-z0-9]+\/add/.test(actionURL)) {
              auditDesc = formatMessage(holders.userAdded, {
                username,
                channelName
              });
            } else if (/\/channels\/[A-Za-z0-9]+\/remove/.test(actionURL)) {
              auditDesc = formatMessage(holders.userRemoved, {
                username,
                channelName
              });
            }

            break;
          }
      }
    } else if (actionURL.indexOf('/oauth') === 0) {
      const oauthInfo = audit.extra_info.split(' ');

      switch (actionURL) {
        case '/oauth/register':
          {
            const clientIdField = oauthInfo[0].split('=');

            if (clientIdField[0] === 'client_id') {
              auditDesc = formatMessage(holders.attemptedRegisterApp, {
                id: clientIdField[1]
              });
            }

            break;
          }

        case '/oauth/allow':
          if (oauthInfo[0] === 'attempt') {
            auditDesc = formatMessage(holders.attemptedAllowOAuthAccess);
          } else if (oauthInfo[0] === 'success') {
            auditDesc = formatMessage(holders.successfullOAuthAccess);
          } else if (oauthInfo[0] === 'fail - redirect_uri did not match registered callback') {
            auditDesc = formatMessage(holders.failedOAuthAccess);
          }

          break;

        case '/oauth/access_token':
          if (oauthInfo[0] === 'attempt') {
            auditDesc = formatMessage(holders.attemptedOAuthToken);
          } else if (oauthInfo[0] === 'success') {
            auditDesc = formatMessage(holders.successfullOAuthToken);
          } else {
            const oauthTokenFailure = oauthInfo[0].split('-');

            if (oauthTokenFailure[0].trim() === 'fail' && oauthTokenFailure[1]) {
              auditDesc = formatMessage(oauthTokenFailure, {
                token: oauthTokenFailure[1].trim()
              });
            }
          }

          break;

        default:
          break;
      }
    } else if (actionURL.indexOf('/users') === 0) {
      const userInfo = audit.extra_info.split(' ');

      switch (actionURL) {
        case '/users/login':
          if (userInfo[0] === 'attempt') {
            auditDesc = formatMessage(holders.attemptedLogin);
          } else if (userInfo[0] === 'success') {
            auditDesc = formatMessage(holders.successfullLogin);
          } else if (userInfo[0] === 'authenticated') {
            auditDesc = formatMessage(holders.authenticated);
          } else if (userInfo[0]) {
            auditDesc = formatMessage(holders.failedLogin);
          }

          break;

        case '/users/revoke_session':
          auditDesc = formatMessage(holders.sessionRevoked, {
            sessionId: userInfo[0].split('=')[1]
          });
          break;

        case '/users/newimage':
          auditDesc = formatMessage(holders.updatePicture);
          break;

        case '/users/update':
          auditDesc = formatMessage(holders.updateGeneral);
          break;

        case '/users/newpassword':
          if (userInfo[0] === 'attempted') {
            auditDesc = formatMessage(holders.attemptedPassword);
          } else if (userInfo[0] === 'completed') {
            auditDesc = formatMessage(holders.successfullPassword);
          } else if (userInfo[0] === 'failed - tried to update user password who was logged in through oauth') {
            auditDesc = formatMessage(holders.failedPassword);
          }

          break;

        case '/users/update_roles':
          {
            const userRoles = userInfo[0].split('=')[1];
            auditDesc = formatMessage(holders.updatedRol);

            if (userRoles.trim()) {
              auditDesc += userRoles;
            } else {
              auditDesc += formatMessage(holders.member);
            }

            break;
          }

        case '/users/update_active':
          {
            const updateType = userInfo[0].split('=')[0];
            const updateField = userInfo[0].split('=')[1];
            /* Either describes account activation/deactivation or a revoked session as part of an account deactivation */

            if (updateType === 'active') {
              if (updateField === 'true') {
                auditDesc = formatMessage(holders.accountActive);
              } else if (updateField === 'false') {
                auditDesc = formatMessage(holders.accountInactive);
              }

              const actingUserInfo = userInfo[1].split('=');

              if (actingUserInfo[0] === 'session_user') {
                const actingUser = this.props.getUser(actingUserInfo[1]);
                const user = this.props.currentUser;

                if (user && actingUser && Object(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_6__["isSystemAdmin"])(user.roles)) {
                  auditDesc += formatMessage(holders.by, {
                    username: actingUser.username
                  });
                } else if (user && actingUser) {
                  auditDesc += formatMessage(holders.byAdmin);
                }
              }
            } else if (updateType === 'session_id') {
              auditDesc = formatMessage(holders.sessionRevoked, {
                sessionId: updateField
              });
            }

            break;
          }

        case '/users/send_password_reset':
          auditDesc = formatMessage(holders.sentEmail, {
            email: userInfo[0].split('=')[1]
          });
          break;

        case '/users/reset_password':
          if (userInfo[0] === 'attempt') {
            auditDesc = formatMessage(holders.attemptedReset);
          } else if (userInfo[0] === 'success') {
            auditDesc = formatMessage(holders.successfullReset);
          }

          break;

        case '/users/update_notify':
          auditDesc = formatMessage(holders.updateGlobalNotifications);
          break;

        default:
          break;
      }
    } else if (actionURL.indexOf('/hooks') === 0) {
      const webhookInfo = audit.extra_info;

      switch (actionURL) {
        case '/hooks/incoming/create':
          if (webhookInfo === 'attempt') {
            auditDesc = formatMessage(holders.attemptedWebhookCreate);
          } else if (webhookInfo === 'success') {
            auditDesc = formatMessage(holders.succcessfullWebhookCreate);
          } else if (webhookInfo === 'fail - bad channel permissions') {
            auditDesc = formatMessage(holders.failedWebhookCreate);
          }

          break;

        case '/hooks/incoming/delete':
          if (webhookInfo === 'attempt') {
            auditDesc = formatMessage(holders.attemptedWebhookDelete);
          } else if (webhookInfo === 'success') {
            auditDesc = formatMessage(holders.successfullWebhookDelete);
          } else if (webhookInfo === 'fail - inappropriate conditions') {
            auditDesc = formatMessage(holders.failedWebhookDelete);
          }

          break;

        default:
          break;
      }
    } else if (actionURL.indexOf('/license') === 0) {
      const licenseInfo = audit.extra_info;

      switch (actionURL) {
        case '/license/add':
          if (licenseInfo === 'attempt') {
            auditDesc = formatMessage(holders.attemptedLicenseAdd);
          } else if (licenseInfo === 'success') {
            auditDesc = formatMessage(holders.successfullLicenseAdd);
          } else if (licenseInfo === 'failed - expired or non-started license') {
            auditDesc = formatMessage(holders.failedExpiredLicenseAdd);
          } else if (licenseInfo === 'failed - invalid license') {
            auditDesc = formatMessage(holders.failedInvalidLicenseAdd);
          }

          break;

        case '/license/remove':
          auditDesc = formatMessage(holders.licenseRemoved);
          break;

        default:
          break;
      }
    } else if (actionURL.indexOf('/admin/download_compliance_report') === 0) {
      auditDesc = Object(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_6__["toTitleCase"])(audit.extra_info);
    } else {
      switch (actionURL) {
        case '/logout':
          auditDesc = formatMessage(holders.logout);
          break;

        case '/verify_email':
          auditDesc = formatMessage(holders.verified);
          break;

        default:
          break;
      }
    }
    /* If all else fails... */


    if (!auditDesc) {
      /* Currently not called anywhere */
      if (audit.extra_info.indexOf('revoked_all=') >= 0) {
        auditDesc = formatMessage(holders.revokedAll);
      } else {
        let actionDesc = '';

        if (actionURL && actionURL.lastIndexOf('/') !== -1) {
          actionDesc = actionURL.substring(actionURL.lastIndexOf('/') + 1).replace('_', ' ');
          actionDesc = Object(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_6__["toTitleCase"])(actionDesc);
        }

        let extraInfoDesc = '';

        if (audit.extra_info) {
          extraInfoDesc = audit.extra_info;

          if (extraInfoDesc.indexOf('=') !== -1) {
            extraInfoDesc = extraInfoDesc.substring(extraInfoDesc.indexOf('=') + 1);
          }
        }

        auditDesc = actionDesc + ' ' + extraInfoDesc;
      }
    }

    const date = new Date(audit.create_at);
    const auditInfo = {};
    auditInfo.timestamp = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedDate"], {
      value: date,
      day: "2-digit",
      month: "short",
      year: "numeric"
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedTime"], {
      value: date,
      hour: "2-digit",
      minute: "2-digit"
    })));
    const auditProfile = this.props.getUser(audit.user_id);
    auditInfo.userId = auditProfile ? auditProfile.email : audit.user_id;
    auditInfo.desc = auditDesc;
    auditInfo.ip = audit.ip_address;
    auditInfo.sessionId = audit.session_id;
    return auditInfo;
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(AuditTable, "propTypes", {
  intl: react_intl__WEBPACK_IMPORTED_MODULE_5__["intlShape"].isRequired,
  audits: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired,
  showUserId: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  showIp: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  showSession: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  currentUser: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  getUser: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  getByName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    getMissingProfilesByIds: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
  }).isRequired
});

const _default = Object(react_intl__WEBPACK_IMPORTED_MODULE_5__["injectIntl"])(AuditTable);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(holders, "holders", "/home/pdxuan/Desktop/mattermost-webapp/components/audit_table/audit_table.jsx");
  reactHotLoader.register(AuditTable, "AuditTable", "/home/pdxuan/Desktop/mattermost-webapp/components/audit_table/audit_table.jsx");
  reactHotLoader.register(_default, "default", "/home/pdxuan/Desktop/mattermost-webapp/components/audit_table/audit_table.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/audit_table/index.js":
/*!*****************************************!*\
  !*** ./components/audit_table/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mattermost-redux/actions/users */ "./node_modules/mattermost-redux/actions/users.js");
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mattermost-redux/selectors/entities/users */ "./node_modules/mattermost-redux/selectors/entities/users.js");
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mattermost_redux_selectors_entities_channels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mattermost-redux/selectors/entities/channels */ "./node_modules/mattermost-redux/selectors/entities/channels.js");
/* harmony import */ var mattermost_redux_selectors_entities_channels__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_channels__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _audit_table_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./audit_table.jsx */ "./components/audit_table/audit_table.jsx");
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
    currentUser: Object(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_3__["getCurrentUser"])(state),
    getUser: userId => Object(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_3__["getUser"])(state, userId),
    getByName: channelName => Object(mattermost_redux_selectors_entities_channels__WEBPACK_IMPORTED_MODULE_4__["getChannelByName"])(state, channelName)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
      getMissingProfilesByIds: mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__["getMissingProfilesByIds"]
    }, dispatch)
  };
}

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_audit_table_jsx__WEBPACK_IMPORTED_MODULE_5__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/audit_table/index.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/pdxuan/Desktop/mattermost-webapp/components/audit_table/index.js");
  reactHotLoader.register(_default, "default", "/home/pdxuan/Desktop/mattermost-webapp/components/audit_table/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=3.5c3d9e6527ed040a5910.js.map
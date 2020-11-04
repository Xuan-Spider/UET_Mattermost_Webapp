(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./components/pdf_preview.jsx":
/*!************************************!*\
  !*** ./components/pdf_preview.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PDFPreview; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var pdfjs_dist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pdfjs-dist */ "./node_modules/pdfjs-dist/build/pdf.js");
/* harmony import */ var pdfjs_dist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pdfjs_dist__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mattermost_redux_utils_file_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mattermost-redux/utils/file_utils */ "./node_modules/mattermost-redux/utils/file_utils.js");
/* harmony import */ var mattermost_redux_utils_file_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_utils_file_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_widgets_loading_loading_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/widgets/loading/loading_spinner */ "./components/widgets/loading/loading_spinner.tsx");
/* harmony import */ var components_file_info_preview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/file_info_preview */ "./components/file_info_preview/index.js");
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







const MAX_PDF_PAGES = 5;
class PDFPreview extends react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent {
  constructor(_props) {
    super(_props);

    _defineProperty(this, "renderPDFPage", pageIndex => {
      if (this.pdfPagesRendered[pageIndex] || !this.state.pdfPagesLoaded[pageIndex]) {
        return;
      }

      const canvas = this.refs['pdfCanvas' + pageIndex];
      const context = canvas.getContext('2d');
      const viewport = this.state.pdfPages[pageIndex].getViewport(1);
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      const renderContext = {
        canvasContext: context,
        viewport
      };
      this.state.pdfPages[pageIndex].render(renderContext);
      this.pdfPagesRendered[pageIndex] = true;
    });

    _defineProperty(this, "updateStateFromProps", props => {
      this.setState({
        pdf: null,
        pdfPages: {},
        pdfPagesLoaded: {},
        numPages: 0,
        loading: true,
        success: false
      });
      pdfjs_dist__WEBPACK_IMPORTED_MODULE_3___default.a.getDocument(props.fileUrl).then(this.onDocumentLoad, this.onDocumentLoadError);
    });

    _defineProperty(this, "onDocumentLoad", pdf => {
      const numPages = pdf.numPages <= MAX_PDF_PAGES ? pdf.numPages : MAX_PDF_PAGES;
      this.setState({
        pdf,
        numPages
      });

      for (let i = 1; i <= pdf.numPages; i++) {
        pdf.getPage(i).then(this.onPageLoad);
      }
    });

    _defineProperty(this, "onDocumentLoadError", reason => {
      console.log('Unable to load PDF preview: ' + reason); //eslint-disable-line no-console

      this.setState({
        loading: false,
        success: false
      });
    });

    _defineProperty(this, "onPageLoad", page => {
      const pdfPages = Object.assign({}, this.state.pdfPages);
      pdfPages[page.pageIndex] = page;
      const pdfPagesLoaded = Object.assign({}, this.state.pdfPagesLoaded);
      pdfPagesLoaded[page.pageIndex] = true;
      this.setState({
        pdfPages,
        pdfPagesLoaded
      });

      if (page.pageIndex === 0) {
        this.setState({
          success: true,
          loading: false
        });
      }
    });

    this.pdfPagesRendered = {};
    this.state = {
      pdf: null,
      pdfPages: {},
      pdfPagesLoaded: {},
      numPages: 0,
      loading: true,
      success: false
    };
  }

  componentDidMount() {
    this.updateStateFromProps(this.props);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    // eslint-disable-line camelcase
    if (this.props.fileUrl !== nextProps.fileUrl) {
      this.updateStateFromProps(nextProps);
      this.pdfPagesRendered = {};
    }
  }

  componentDidUpdate() {
    if (this.state.success) {
      for (let i = 0; i < this.state.numPages; i++) {
        this.renderPDFPage(i);
      }
    }
  }

  render() {
    if (this.state.loading) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "view-image__loading"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_widgets_loading_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["default"], null));
    }

    if (!this.state.success) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_file_info_preview__WEBPACK_IMPORTED_MODULE_6__["default"], {
        fileInfo: this.props.fileInfo,
        fileUrl: this.props.fileUrl
      });
    }

    const pdfCanvases = [];

    for (let i = 0; i < this.state.numPages; i++) {
      pdfCanvases.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("canvas", {
        ref: 'pdfCanvas' + i,
        key: 'previewpdfcanvas' + i
      }));

      if (i < this.state.numPages - 1 && this.state.numPages > 1) {
        pdfCanvases.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          key: 'previewpdfspacer' + i,
          className: "pdf-preview-spacer"
        }));
      }
    }

    if (this.state.pdf.numPages > MAX_PDF_PAGES) {
      const fileDownloadUrl = this.props.fileInfo.link || Object(mattermost_redux_utils_file_utils__WEBPACK_IMPORTED_MODULE_4__["getFileDownloadUrl"])(this.props.fileInfo.id);
      pdfCanvases.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        key: "previewpdfmorepages",
        href: fileDownloadUrl,
        className: "pdf-max-pages"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "pdf_preview.max_pages",
        defaultMessage: "Download to read more pages"
      })));
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "post-code"
    }, pdfCanvases);
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(PDFPreview, "propTypes", {
  /**
  * Compare file types
  */
  fileInfo: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired,

  /**
  *  URL of pdf file to output and compare to update props url
  */
  fileUrl: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MAX_PDF_PAGES, "MAX_PDF_PAGES", "/home/pdxuan/Desktop/mattermost-webapp/components/pdf_preview.jsx");
  reactHotLoader.register(PDFPreview, "PDFPreview", "/home/pdxuan/Desktop/mattermost-webapp/components/pdf_preview.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=30.0eb3c49fc688268c1934.js.map
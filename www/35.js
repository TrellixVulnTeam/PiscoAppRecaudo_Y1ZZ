(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "NAQR":
/*!*******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js ***!
  \*******************************************************************/
/*! exports provided: ion_split_pane */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_split_pane", function() { return SplitPane; });
/* harmony import */ var C_Users_AlexanderMauricioEsc_Documents_GitHub_PiscoAppRecaudo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "rePB");
/* harmony import */ var C_Users_AlexanderMauricioEsc_Documents_GitHub_PiscoAppRecaudo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var C_Users_AlexanderMauricioEsc_Documents_GitHub_PiscoAppRecaudo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "wEJo");
/* harmony import */ var _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ionic-global-63a97a32.js */ "E/Mt");





var splitPaneIosCss = ":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}::slotted(ion-menu.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width);min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.split-pane-visible) ::slotted(.split-pane-side),:host(.split-pane-visible) ::slotted(.split-pane-main){left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-shadow:none !important;box-shadow:none !important;z-index:0}:host(.split-pane-visible) ::slotted(.split-pane-main){-ms-flex:1;flex:1}:host(.split-pane-visible) ::slotted(.split-pane-side:not(ion-menu)),:host(.split-pane-visible) ::slotted(ion-menu.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host(.split-pane-visible) ::slotted(.split-pane-side){-ms-flex-order:-1;order:-1}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){-ms-flex-order:1;order:1}:host{--border:0.55px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)));--side-min-width:270px;--side-max-width:28%}:host(.split-pane-visible) ::slotted(.split-pane-side){border-left:0;border-right:var(--border);border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.split-pane-visible) ::slotted(.split-pane-side){border-left:unset;border-right:unset;-webkit-border-start:0;border-inline-start:0;-webkit-border-end:var(--border);border-inline-end:var(--border)}}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){border-left:var(--border);border-right:0;border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){border-left:unset;border-right:unset;-webkit-border-start:var(--border);border-inline-start:var(--border);-webkit-border-end:0;border-inline-end:0}}";
var splitPaneMdCss = ":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}::slotted(ion-menu.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width);min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.split-pane-visible) ::slotted(.split-pane-side),:host(.split-pane-visible) ::slotted(.split-pane-main){left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-shadow:none !important;box-shadow:none !important;z-index:0}:host(.split-pane-visible) ::slotted(.split-pane-main){-ms-flex:1;flex:1}:host(.split-pane-visible) ::slotted(.split-pane-side:not(ion-menu)),:host(.split-pane-visible) ::slotted(ion-menu.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host(.split-pane-visible) ::slotted(.split-pane-side){-ms-flex-order:-1;order:-1}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){-ms-flex-order:1;order:1}:host{--border:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));--side-min-width:270px;--side-max-width:28%}:host(.split-pane-visible) ::slotted(.split-pane-side){border-left:0;border-right:var(--border);border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.split-pane-visible) ::slotted(.split-pane-side){border-left:unset;border-right:unset;-webkit-border-start:0;border-inline-start:0;-webkit-border-end:var(--border);border-inline-end:var(--border)}}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){border-left:var(--border);border-right:0;border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){border-left:unset;border-right:unset;-webkit-border-start:var(--border);border-inline-start:var(--border);-webkit-border-end:0;border-inline-end:0}}";
var SPLIT_PANE_MAIN = 'split-pane-main';
var SPLIT_PANE_SIDE = 'split-pane-side';
var QUERY = {
  'xs': '(min-width: 0px)',
  'sm': '(min-width: 576px)',
  'md': '(min-width: 768px)',
  'lg': '(min-width: 992px)',
  'xl': '(min-width: 1200px)',
  'never': ''
};

var SplitPane = /*#__PURE__*/function () {
  function SplitPane(hostRef) {
    Object(C_Users_AlexanderMauricioEsc_Documents_GitHub_PiscoAppRecaudo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SplitPane);

    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_3__["r"])(this, hostRef);
    this.ionSplitPaneVisible = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_3__["e"])(this, "ionSplitPaneVisible", 7);
    this.visible = false;
    /**
     * If `true`, the split pane will be hidden.
     */

    this.disabled = false;
    /**
     * When the split-pane should be shown.
     * Can be a CSS media query expression, or a shortcut expression.
     * Can also be a boolean expression.
     */

    this.when = QUERY['lg'];
  }

  Object(C_Users_AlexanderMauricioEsc_Documents_GitHub_PiscoAppRecaudo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SplitPane, [{
    key: "visibleChanged",
    value: function visibleChanged(visible) {
      var detail = {
        visible: visible,
        isPane: this.isPane.bind(this)
      };
      this.ionSplitPaneVisible.emit(detail);
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this.styleChildren();
      this.updateState();
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      if (this.rmL) {
        this.rmL();
        this.rmL = undefined;
      }
    }
  }, {
    key: "updateState",
    value: function updateState() {
      var _this = this;

      if (this.rmL) {
        this.rmL();
        this.rmL = undefined;
      } // Check if the split-pane is disabled


      if (this.disabled) {
        this.visible = false;
        return;
      } // When query is a boolean


      var query = this.when;

      if (typeof query === 'boolean') {
        this.visible = query;
        return;
      } // When query is a string, let's find first if it is a shortcut


      var mediaQuery = QUERY[query] || query; // Media query is empty or null, we hide it

      if (mediaQuery.length === 0) {
        this.visible = false;
        return;
      }

      if (window.matchMedia) {
        // Listen on media query
        var callback = function callback(q) {
          _this.visible = q.matches;
        };

        var mediaList = window.matchMedia(mediaQuery);
        mediaList.addListener(callback);

        this.rmL = function () {
          return mediaList.removeListener(callback);
        };

        this.visible = mediaList.matches;
      }
    }
  }, {
    key: "isPane",
    value: function isPane(element) {
      if (!this.visible) {
        return false;
      }

      return element.parentElement === this.el && element.classList.contains(SPLIT_PANE_SIDE);
    }
  }, {
    key: "styleChildren",
    value: function styleChildren() {
      var contentId = this.contentId;
      var children = this.el.children;
      var nu = this.el.childElementCount;
      var foundMain = false;

      for (var i = 0; i < nu; i++) {
        var child = children[i];
        var isMain = contentId !== undefined && child.id === contentId;

        if (isMain) {
          if (foundMain) {
            console.warn('split pane cannot have more than one main node');
            return;
          }

          foundMain = true;
        }

        setPaneClass(child, isMain);
      }

      if (!foundMain) {
        console.warn('split pane does not have a specified main node');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _class;

      var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_4__["b"])(this);
      return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_3__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_3__["H"], {
        class: (_class = {}, Object(C_Users_AlexanderMauricioEsc_Documents_GitHub_PiscoAppRecaudo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, mode, true), Object(C_Users_AlexanderMauricioEsc_Documents_GitHub_PiscoAppRecaudo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "split-pane-".concat(mode), true), Object(C_Users_AlexanderMauricioEsc_Documents_GitHub_PiscoAppRecaudo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, 'split-pane-visible', this.visible), _class)
      }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_3__["h"])("slot", null));
    }
  }, {
    key: "el",
    get: function get() {
      return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_3__["i"])(this);
    }
  }], [{
    key: "watchers",
    get: function get() {
      return {
        "visible": ["visibleChanged"],
        "disabled": ["updateState"],
        "when": ["updateState"]
      };
    }
  }]);

  return SplitPane;
}();

var setPaneClass = function setPaneClass(el, isMain) {
  var toAdd;
  var toRemove;

  if (isMain) {
    toAdd = SPLIT_PANE_MAIN;
    toRemove = SPLIT_PANE_SIDE;
  } else {
    toAdd = SPLIT_PANE_SIDE;
    toRemove = SPLIT_PANE_MAIN;
  }

  var classList = el.classList;
  classList.add(toAdd);
  classList.remove(toRemove);
};

SplitPane.style = {
  ios: splitPaneIosCss,
  md: splitPaneMdCss
};


/***/ })

}]);
//# sourceMappingURL=35.js.map
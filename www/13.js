(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "wHD8":
/*!************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-img.entry.js ***!
  \************************************************************/
/*! exports provided: ion_img */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_img", function() { return Img; });
/* harmony import */ var C_Users_AlexanderMauricioEsc_Documents_GitHub_PiscoAppRecaudo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var C_Users_AlexanderMauricioEsc_Documents_GitHub_PiscoAppRecaudo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "wEJo");
/* harmony import */ var _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ionic-global-63a97a32.js */ "E/Mt");




var imgCss = ":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}";

var Img = /*#__PURE__*/function () {
  function Img(hostRef) {
    var _this = this;

    Object(C_Users_AlexanderMauricioEsc_Documents_GitHub_PiscoAppRecaudo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Img);

    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_2__["r"])(this, hostRef);
    this.ionImgWillLoad = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_2__["e"])(this, "ionImgWillLoad", 7);
    this.ionImgDidLoad = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_2__["e"])(this, "ionImgDidLoad", 7);
    this.ionError = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_2__["e"])(this, "ionError", 7);

    this.onLoad = function () {
      _this.ionImgDidLoad.emit();
    };

    this.onError = function () {
      _this.ionError.emit();
    };
  }

  Object(C_Users_AlexanderMauricioEsc_Documents_GitHub_PiscoAppRecaudo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Img, [{
    key: "srcChanged",
    value: function srcChanged() {
      this.addIO();
    }
  }, {
    key: "componentDidLoad",
    value: function componentDidLoad() {
      this.addIO();
    }
  }, {
    key: "addIO",
    value: function addIO() {
      var _this2 = this;

      if (this.src === undefined) {
        return;
      }

      if (typeof window !== 'undefined' && 'IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'isIntersecting' in window.IntersectionObserverEntry.prototype) {
        this.removeIO();
        this.io = new IntersectionObserver(function (data) {
          /**
           * On slower devices, it is possible for an intersection observer entry to contain multiple
           * objects in the array. This happens when quickly scrolling an image into view and then out of
           * view. In this case, the last object represents the current state of the component.
           */
          if (data[data.length - 1].isIntersecting) {
            _this2.load();

            _this2.removeIO();
          }
        });
        this.io.observe(this.el);
      } else {
        // fall back to setTimeout for Safari and IE
        setTimeout(function () {
          return _this2.load();
        }, 200);
      }
    }
  }, {
    key: "load",
    value: function load() {
      this.loadError = this.onError;
      this.loadSrc = this.src;
      this.ionImgWillLoad.emit();
    }
  }, {
    key: "removeIO",
    value: function removeIO() {
      if (this.io) {
        this.io.disconnect();
        this.io = undefined;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_2__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_2__["H"], {
        class: Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_3__["b"])(this)
      }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_2__["h"])("img", {
        decoding: "async",
        src: this.loadSrc,
        alt: this.alt,
        onLoad: this.onLoad,
        onError: this.loadError,
        part: "image"
      }));
    }
  }, {
    key: "el",
    get: function get() {
      return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_2__["i"])(this);
    }
  }], [{
    key: "watchers",
    get: function get() {
      return {
        "src": ["srcChanged"]
      };
    }
  }]);

  return Img;
}();

Img.style = imgCss;


/***/ })

}]);
//# sourceMappingURL=13.js.map
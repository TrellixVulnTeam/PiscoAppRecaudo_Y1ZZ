(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-lista-pago-lista-pago-module"],{

/***/ "2V8n":
/*!*****************************************************!*\
  !*** ./src/app/pages/lista-pago/lista-pago.page.ts ***!
  \*****************************************************/
/*! exports provided: ListaPagoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaPagoPage", function() { return ListaPagoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_pago_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista-pago.page.html */ "ZsME");
/* harmony import */ var _lista_pago_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista-pago.page.scss */ "iGg2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_sesion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/sesion.service */ "PbBf");
/* harmony import */ var _services_pagos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/pagos.service */ "tDkB");







var ListaPagoPage = /** @class */ (function () {
    function ListaPagoPage(sesionService, pagoservice, datePipe) {
        this.sesionService = sesionService;
        this.pagoservice = pagoservice;
        this.datePipe = datePipe;
        this.textoBusqueda = new Date();
        this.sesionLocal = null;
    }
    ListaPagoPage.prototype.ngOnInit = function () {
    };
    ListaPagoPage.prototype.cambiofecha = function (event) {
        this.textoBusqueda = event.target.value;
    };
    ListaPagoPage.prototype.consultarLstPagos = function () {
        var _this = this;
        if (!this.textoBusqueda) {
            alert('Por favor ingresa un criterio de búsqueda');
            return;
        }
        this.sesionLocal = this.sesionService.sesionLocal;
        this.pagoservice.lstPagos(this.datePipe.transform(this.textoBusqueda, "yyyy-MM-dd"), this.sesionLocal.sesionUsuario.USERNAME)
            .then(function (lspagos) {
            _this.pagos = lspagos;
        });
    };
    ListaPagoPage.ctorParameters = function () { return [
        { type: src_app_services_sesion_service__WEBPACK_IMPORTED_MODULE_5__["SesionService"] },
        { type: _services_pagos_service__WEBPACK_IMPORTED_MODULE_6__["PagosService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] }
    ]; };
    ListaPagoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-lista-pago',
            template: _raw_loader_lista_pago_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_lista_pago_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_sesion_service__WEBPACK_IMPORTED_MODULE_5__["SesionService"],
            _services_pagos_service__WEBPACK_IMPORTED_MODULE_6__["PagosService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]])
    ], ListaPagoPage);
    return ListaPagoPage;
}());



/***/ }),

/***/ "ZsME":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lista-pago/lista-pago.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\r\n    <ion-toolbar>\r\n        <ion-title>Lista Pagos</ion-title>\r\n    </ion-toolbar>\r\n</ion-header> -->\r\n<app-header titulo=\"Lista Pagos\"></app-header>\r\n<ion-content>\r\n    <div>\r\n        <ion-row class=\"ion-align-items-center\">\r\n            <ion-col size=\"4\">Criterio</ion-col>\r\n            <ion-col size=\"8\">\r\n                <ion-datetime displayFormat=\"YYYY MMM DD\" monthShortNames=\"Enero, Febrero, Marzo, Abril, Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre\" value=\"{{ textoBusqueda | date:'yyyy-MM-dd'}}\" (ionChange)=\"cambiofecha($event)\" cancelText=\"Cancelar\"></ion-datetime>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-margin-top\">\r\n            <ion-col>\r\n                <ion-button color=\"danger\" expand=\"block\" (click)=\"consultarLstPagos()\">\r\n                    Consultar Lista Pagos\r\n                </ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n    </div>\r\n\r\n    <div>\r\n        <ion-grid>\r\n            <ion-row class=\"md5\" *ngFor=\"let pago of pagos\">\r\n                <ion-card>\r\n                    <ion-card-content>\r\n                        {{pago}}\r\n                    </ion-card-content>\r\n                </ion-card>\r\n                <!-- <ion-col>\r\n                <label *ngFor=\"let item of items\">\r\n            </ion-col> -->\r\n            </ion-row>\r\n        </ion-grid>\r\n    </div>\r\n</ion-content>");

/***/ }),

/***/ "iGg2":
/*!*******************************************************!*\
  !*** ./src/app/pages/lista-pago/lista-pago.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0YS1wYWdvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "rAHZ":
/*!*******************************************************!*\
  !*** ./src/app/pages/lista-pago/lista-pago.module.ts ***!
  \*******************************************************/
/*! exports provided: ListaPagoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaPagoPageModule", function() { return ListaPagoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _lista_pago_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lista-pago.page */ "2V8n");
/* harmony import */ var src_app_own_components_own_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/own-components/own-components.module */ "9FvA");








var routes = [
    {
        path: '',
        component: _lista_pago_page__WEBPACK_IMPORTED_MODULE_6__["ListaPagoPage"]
    }
];
var ListaPagoPageModule = /** @class */ (function () {
    function ListaPagoPageModule() {
    }
    ListaPagoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                src_app_own_components_own_components_module__WEBPACK_IMPORTED_MODULE_7__["OwnComponentsModule"]
            ],
            declarations: [_lista_pago_page__WEBPACK_IMPORTED_MODULE_6__["ListaPagoPage"]]
        })
    ], ListaPagoPageModule);
    return ListaPagoPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-lista-pago-lista-pago-module.js.map
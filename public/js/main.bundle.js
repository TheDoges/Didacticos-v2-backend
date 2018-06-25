webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".loading-bar {\r\n    position: absolute;\r\n    width:100%;\r\n    top:0;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar class=\"loading-bar\" mode=\"indeterminate\" *ngIf=isBusy></mat-progress-bar>\r\n<div class=\"container\" fxLayout=\"column\" [ngClass]=\"{'busy': isBusy, 'style2': true}\">\r\n    <app-layout-header></app-layout-header>\r\n    <router-outlet></router-outlet>  \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_loading_service__ = __webpack_require__("./src/app/shared/services/loading.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(loadingService) {
        this.loadingService = loadingService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingService.getState()
            .subscribe(function (state) { return _this.isBusy = state; });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_loading_service__["a" /* LoadingService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_api_service__ = __webpack_require__("./src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_websocket_service__ = __webpack_require__("./src/app/shared/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_layout_header_component__ = __webpack_require__("./src/app/shared/layout/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__planning_planning_module__ = __webpack_require__("./src/app/planning/planning.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lecturer_lecturer_module__ = __webpack_require__("./src/app/lecturer/lecturer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__title_title_module__ = __webpack_require__("./src/app/title/title.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__semester_semester_module__ = __webpack_require__("./src/app/semester/semester.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__subject_subject_module__ = __webpack_require__("./src/app/subject/subject.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_login_module__ = __webpack_require__("./src/app/login/login.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__register_register_module__ = __webpack_require__("./src/app/register/register.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_services_subject_service__ = __webpack_require__("./src/app/shared/services/subject.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_services_degree_service__ = __webpack_require__("./src/app/shared/services/degree.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_services_lecturer_service__ = __webpack_require__("./src/app/shared/services/lecturer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_services_title_service__ = __webpack_require__("./src/app/shared/services/title.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_services_link_service__ = __webpack_require__("./src/app/shared/services/link.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_services_semester_service__ = __webpack_require__("./src/app/shared/services/semester.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_services_auth_service__ = __webpack_require__("./src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_services_credential_service__ = __webpack_require__("./src/app/shared/services/credential.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_services_authguard_service__ = __webpack_require__("./src/app/shared/services/authguard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_services_loading_service__ = __webpack_require__("./src/app/shared/services/loading.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__shared_services_field_service__ = __webpack_require__("./src/app/shared/services/field.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var rootRouting = __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot([
    { path: '', redirectTo: '/planning', pathMatch: 'full' }
], { useHash: true });
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__shared_layout_header_component__["a" /* HeaderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
                rootRouting,
                __WEBPACK_IMPORTED_MODULE_8__planning_planning_module__["a" /* PlanningModule */],
                __WEBPACK_IMPORTED_MODULE_9__lecturer_lecturer_module__["a" /* LecturerModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_12__subject_subject_module__["a" /* SubjectModule */],
                __WEBPACK_IMPORTED_MODULE_10__title_title_module__["a" /* TitleModule */],
                __WEBPACK_IMPORTED_MODULE_11__semester_semester_module__["a" /* SemesterModule */],
                __WEBPACK_IMPORTED_MODULE_13__login_login_module__["a" /* LoginModule */],
                __WEBPACK_IMPORTED_MODULE_14__register_register_module__["a" /* RegisterModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__shared_services_api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_5__shared_services_websocket_service__["a" /* WebsocketService */],
                __WEBPACK_IMPORTED_MODULE_16__shared_services_subject_service__["a" /* SubjectService */],
                __WEBPACK_IMPORTED_MODULE_17__shared_services_degree_service__["a" /* DegreeService */],
                __WEBPACK_IMPORTED_MODULE_18__shared_services_lecturer_service__["a" /* LecturerService */],
                __WEBPACK_IMPORTED_MODULE_19__shared_services_title_service__["a" /* TitleService */],
                __WEBPACK_IMPORTED_MODULE_20__shared_services_link_service__["a" /* LinkService */],
                __WEBPACK_IMPORTED_MODULE_21__shared_services_semester_service__["a" /* SemesterService */],
                __WEBPACK_IMPORTED_MODULE_22__shared_services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_24__shared_services_authguard_service__["a" /* AuthGuardService */],
                __WEBPACK_IMPORTED_MODULE_23__shared_services_credential_service__["a" /* CredentialService */],
                __WEBPACK_IMPORTED_MODULE_25__shared_services_loading_service__["a" /* LoadingService */],
                __WEBPACK_IMPORTED_MODULE_26__shared_services_field_service__["a" /* FieldService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/lecturer/lecturer.component.css":
/***/ (function(module, exports) {

module.exports = ".element-row {\r\n    position: relative;\r\n    cursor: pointer;\r\n}\r\n\r\n.element-row:not(.expanded):hover {\r\nbackground: #f5f5f5;\r\n}\r\n\r\n.element-row.expanded {\r\nborder-bottom-color: transparent;\r\n}\r\n\r\n.fab {\r\n    position: fixed;\r\n    bottom: 1rem;\r\n    right: calc(1rem);\r\n    z-index: 100;\r\n}"

/***/ }),

/***/ "./src/app/lecturer/lecturer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\r\n  <mat-table #table [dataSource]=\"dataSource\">\r\n\r\n    <ng-container matColumnDef=\"name\">\r\n      <mat-header-cell *matHeaderCellDef> Imię </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"surname\">\r\n        <mat-header-cell *matHeaderCellDef> Nazwisko </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> {{element.surname}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"title\">\r\n          <mat-header-cell *matHeaderCellDef> Tytuł </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\"> {{element.title? element.title.short_name : \"\"}}</mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"options\">\r\n      <mat-header-cell *matHeaderCellDef> Opcje </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element; let i = index\">\r\n        <button mat-button (click)=\"editLecturer(element, $event, i)\">Zmień</button>\r\n        <button mat-button (click)=\"deleteLecturer(element)\">Usuń</button>\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"nameEdit\">\r\n      <mat-cell *matCellDef=\"let element\">\r\n        <mat-form-field>\r\n          <input matInput [(ngModel)]=\"element.name\"/>\r\n        </mat-form-field>\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"surnameEdit\">\r\n      <mat-cell *matCellDef=\"let element\">\r\n        <mat-form-field>\r\n          <input matInput [(ngModel)]=\"element.surname\"/>\r\n        </mat-form-field>\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"titleEdit\">\r\n      <mat-cell *matCellDef=\"let element\">\r\n        <mat-form-field>\r\n          <mat-select [(ngModel)]=\"element.title\" [compareWith]=\"compareTitles\">\r\n            <mat-option *ngFor=\"let title of titles\" [value]=\"title\">\r\n              {{ title.name }}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"optionsEdit\">\r\n      <mat-cell *matCellDef=\"let element; let i = index\">\r\n        <button mat-button (click)=\"saveLecturer(element, $event, i)\">Zapisz</button>\r\n        <button mat-button (click)=\"cancelLecturer(element)\" *ngIf=\"!element.id\">Anuluj</button>\r\n      </mat-cell>\r\n    </ng-container>\r\n    \r\n    <mat-header-row *matHeaderRowDef=\"['name', 'surname', 'title', 'options']\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: ['name', 'surname', 'title', 'options'];\"\r\n            matRipple \r\n            class=\"element-row\"  \r\n            [class.expanded]=\"expandedElement === row\" \r\n            (click)=\"expandedElement = expandedElement === row? null : row\"\r\n            style=\"overflow: hidden\">\r\n    </mat-row>\r\n    <mat-row *matRowDef=\"let row; columns: ['nameEdit', 'surnameEdit', 'titleEdit', 'optionsEdit']; when: isEditableRow\"></mat-row>\r\n</mat-table>\r\n  <button class=\"fab\" type=\"button\" mat-fab matTooltip=\"Dodaj przedmiot\" matTooltipPosition=\"left\" (click)=\"addLecturer()\"><mat-icon>add</mat-icon></button>\r\n</div>"

/***/ }),

/***/ "./src/app/lecturer/lecturer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LecturerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_lecturer_service__ = __webpack_require__("./src/app/shared/services/lecturer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_lecturer__ = __webpack_require__("./src/app/shared/models/lecturer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_table__ = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_title_service__ = __webpack_require__("./src/app/shared/services/title.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LecturerComponent = (function () {
    function LecturerComponent(lecturerService, titleService) {
        var _this = this;
        this.lecturerService = lecturerService;
        this.titleService = titleService;
        this.dataChange = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Subject"]();
        this.dataSource = new LecturerDataSource(this.dataChange);
        this.isEditableRow = function (_, row) {
            return row === _this.editedRow;
        };
    }
    LecturerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lecturerService.getAll()
            .subscribe(function (lecturers) {
            _this.lecturers = lecturers;
            _this.dataChange.next(lecturers);
        });
        this.titleService.getAll()
            .subscribe(function (titles) { return _this.titles = titles; });
    };
    LecturerComponent.prototype.addLecturer = function () {
        var row = new __WEBPACK_IMPORTED_MODULE_2__shared_models_lecturer__["a" /* Lecturer */]();
        var lastRow = this.editedRow;
        var lastIndex = this.lastIndex;
        this.lastIndex = 0;
        this.editedRow = row;
        this.lecturers.unshift(row);
        this.refreshElementPredicate(0, row);
        if (lastRow) {
            this.refreshElementPredicate(lastIndex + 1, lastRow);
        }
    };
    LecturerComponent.prototype.editLecturer = function (element, event, index) {
        var lastElement = this.editedRow;
        var lastIndex = this.lastIndex;
        this.editedRow = element;
        this.lastIndex = index;
        this.refreshElementPredicate(index, element);
        if (lastElement) {
            this.lecturerService.save(lastElement).toPromise();
            this.refreshElementPredicate(lastIndex, lastElement);
        }
        event.stopPropagation();
    };
    LecturerComponent.prototype.saveLecturer = function (element, event, index) {
        this.editedRow = null;
        this.lastIndex = null;
        this.refreshElementPredicate(index, element);
        this.lecturerService.save(element)
            .subscribe(function (response) {
            element.deserialize(response.data);
        });
        event.stopPropagation();
    };
    LecturerComponent.prototype.cancelLecturer = function (lesturerToRemove) {
        this.lecturers = this.lecturers.filter(function (lecturer) { return lecturer !== lesturerToRemove; });
        this.lastIndex = null;
        this.editedRow = null;
        this.dataChange.next(this.lecturers);
    };
    LecturerComponent.prototype.deleteLecturer = function (lecturerToRemove) {
        var _this = this;
        var observable = this.lecturerService.delete(lecturerToRemove);
        if (observable) {
            observable.subscribe(function () {
                _this.lecturers = _this.lecturers.filter(function (lecturer) { return lecturer.id !== lecturerToRemove.id; });
                _this.dataChange.next(_this.lecturers);
            });
        }
    };
    LecturerComponent.prototype.compareTitles = function (a, b) {
        return a.id === b.id;
    };
    LecturerComponent.prototype.refreshElementPredicate = function (index, element) {
        this.lecturers.splice(index, 1);
        this.dataChange.next(this.lecturers);
        this.lecturers = this.lecturers.slice(0, index).concat([element]).concat(this.lecturers.slice(index));
        this.dataChange.next(this.lecturers);
    };
    LecturerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-lecturer',
            template: __webpack_require__("./src/app/lecturer/lecturer.component.html"),
            styles: [__webpack_require__("./src/app/lecturer/lecturer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_lecturer_service__["a" /* LecturerService */], __WEBPACK_IMPORTED_MODULE_5__shared_services_title_service__["a" /* TitleService */]])
    ], LecturerComponent);
    return LecturerComponent;
}());

var LecturerDataSource = (function (_super) {
    __extends(LecturerDataSource, _super);
    function LecturerDataSource(dataChange) {
        var _this = _super.call(this) || this;
        _this.dataChange = dataChange;
        return _this;
    }
    LecturerDataSource.prototype.connect = function () {
        return this.dataChange;
    };
    LecturerDataSource.prototype.disconnect = function () { };
    return LecturerDataSource;
}(__WEBPACK_IMPORTED_MODULE_4__angular_cdk_table__["n" /* DataSource */]));


/***/ }),

/***/ "./src/app/lecturer/lecturer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LecturerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lecturer_component__ = __webpack_require__("./src/app/lecturer/lecturer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_authguard_service__ = __webpack_require__("./src/app/shared/services/authguard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var lecturerRouting = __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild([
    {
        path: 'lecturers',
        component: __WEBPACK_IMPORTED_MODULE_1__lecturer_component__["a" /* LecturerComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__shared_services_authguard_service__["a" /* AuthGuardService */]]
    }
]);
var LecturerModule = (function () {
    function LecturerModule() {
    }
    LecturerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                lecturerRouting,
                __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__lecturer_component__["a" /* LecturerComponent */]]
        })
    ], LecturerModule);
    return LecturerModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxFlex fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n  <form>\r\n  <mat-card fxLayout=\"column\">\r\n    <mat-card-title>\r\n      Logowanie\r\n    </mat-card-title>\r\n      <mat-card-content fxLayout=\"column\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Email\" #username autofocus type=\"email\" />\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Hasło\" #password type=\"password\"/>\r\n        </mat-form-field>\r\n      </mat-card-content>\r\n      <mat-card-actions fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n        <button mat-raised-button color=\"primary\" (click)=\"login(username.value, password.value)\">Zaloguj</button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__ = __webpack_require__("./src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authService.isLoggedIn()) {
            this.router.navigateByUrl('');
        }
    };
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        this.authService.login(username, password).toPromise()
            .then(function () {
            _this.router.navigateByUrl('');
        })
            .catch(function () {
            alert('Wrong credentials');
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var loginRouting = __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forChild([
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */]
    }
]);
var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                loginRouting,
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["o" /* MatInputModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/planning/planning-table/planning-table.component.css":
/***/ (function(module, exports) {

module.exports = ".mat-cell:nth-child(1),\r\n.mat-header-cell:nth-child(1) {\r\n    text-align: left;\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\r\n    -webkit-box-flex: 3;\r\n        -ms-flex: 3;\r\n            flex: 3;\r\n}\r\n\r\n.mat-cell:nth-child(7),\r\n.mat-header-cell:nth-child(7) {\r\n    text-align: left;\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\r\n    -webkit-box-flex: 8;\r\n        -ms-flex: 8;\r\n            flex: 8;\r\n}\r\n\r\n.mat-cell,\r\n.mat-header-cell{\r\n    text-align: center;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.warn {\r\n    color: red;\r\n}\r\n\r\nmat-row.highlight,\r\nmat-row:hover {\r\n    background-color: rgba(200, 200, 200, 0.3);\r\n}\r\n\r\nmat-row:nth-child(odd):not(:hover) {\r\n    background-color: rgba(224, 224, 224, 0.3);\r\n}\r\n\r\nmat-cell mat-form-field {\r\n    width: 100%;\r\n}\r\n\r\nmat-row {\r\n    cursor: pointer;\r\n}\r\n\r\n.linkChip {\r\n    margin: .1rem;\r\n}"

/***/ }),

/***/ "./src/app/planning/planning-table/planning-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\">\r\n  <mat-table #table [dataSource]=\"dataSource\" matSort>\r\n    \r\n    <!--- Note that these columns can be defined in any order.\r\n      The actual rendered columns are set as a property on the row definition\" -->\r\n      \r\n      <!-- Position Column -->\r\n      <ng-container matColumnDef=\"name\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Przedmiot </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\">\r\n          {{element.name}}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"type\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Typ </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\">\r\n          {{element.type}}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"degree\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Stopień </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\">\r\n          {{element.degree.prefix}}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"fieldName\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Kierunek </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\">\r\n          {{element.field.name}}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"fieldType\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Stac. </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\">\r\n          {{element.field.type === 'STACJONARNE'? \"Tak\" : \"Nie\"}}\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"total\">\r\n        <mat-header-cell *matHeaderCellDef> Liczba godzin </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\">\r\n          <mat-form-field>\r\n            <input matInput [(ngModel)]=\"element.hours\" (change)=\"updateSubjectHours(element)\" type=\"number\"/>\r\n          </mat-form-field>\r\n        </mat-cell>\r\n      </ng-container>\r\n      \r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"proffessors\">\r\n        <mat-header-cell *matHeaderCellDef> Prowadzący </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n          <mat-chip-list #chipList [selectable]=\"true\">\r\n            <mat-chip class=\"linkChip\" *ngFor=\"let link of element.links; let i = index\" [selectable]=\"true\"\r\n            [removable]=\"true\" (click)=\"editLink(element, i, link)\">\r\n            {{link.lecturer.surname}} {{link.lecturer.name}} | {{link.hours}}\r\n            <mat-icon matChipRemove (click)=\"removeLink($event, element, i, link)\">cancel</mat-icon>\r\n          </mat-chip>\r\n        </mat-chip-list>\r\n        <!-- <mat-form-field>\r\n          <input matInput placeholder=\"Nowy\"\r\n          [matChipInputFor]=\"chipList\"\r\n          [matChipInputAddOnBlur]=\"true\"\r\n          (matChipInputTokenEnd)=\"add($event)\" />\r\n        </mat-form-field> -->\r\n        <button mat-icon-button color=\"primary\" (click)=\"addLink(element)\">\r\n          <mat-icon aria-label=\"Dodaj prowadzącego\">add</mat-icon>\r\n        </button>\r\n      </mat-cell>\r\n    </ng-container>\r\n    \r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"hours\">\r\n      <mat-header-cell *matHeaderCellDef> Liczba godzin </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\" [ngClass]=\"{'warn': element.linkHours !== element.hours}\">\r\n        {{element.linkHours}} / {{element.hours}}\r\n      </mat-cell>\r\n    </ng-container>\r\n    \r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"{'highlight': selectedClassId === row.name}\" (click)=\"selectSubject(row)\"></mat-row>\r\n  </mat-table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/planning/planning-table/planning-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanningTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__professor_select_professor_select_component__ = __webpack_require__("./src/app/planning/professor-select/professor-select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_subject_service__ = __webpack_require__("./src/app/shared/services/subject.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_models_link__ = __webpack_require__("./src/app/shared/models/link.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_link_service__ = __webpack_require__("./src/app/shared/services/link.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_semester_service__ = __webpack_require__("./src/app/shared/services/semester.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PlanningTableComponent = (function () {
    // sortedData: Subject[];
    function PlanningTableComponent(subjectService, linkService, semesterService, dialog) {
        this.subjectService = subjectService;
        this.linkService = linkService;
        this.semesterService = semesterService;
        this.dialog = dialog;
        this.subjectChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.displayedColumns = ['name', 'type', 'degree', 'fieldName', 'fieldType', 'total', 'proffessors', 'hours'];
    }
    PlanningTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentSemesterSubscription = this.semesterService.getSelected()
            .subscribe(function (semester) {
            if (semester) {
                _this.subjectService.getAllWithLinksForSemester(semester)
                    .subscribe(function (subjects) {
                    _this.subjects = subjects;
                    // this.sortedData = this.subjects;
                    _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["H" /* MatTableDataSource */](_this.subjects);
                    _this.dataSource.sortingDataAccessor = function (item, property) {
                        switch (property) {
                            case 'degree': return item.degree.prefix;
                            case 'fieldName': return item.field.name;
                            case 'fieldType': return item.field.type;
                            default: return item[property];
                        }
                    };
                    _this.dataSource.sort = _this.sort;
                    _this.connectLinks(subjects, _this.lecturers);
                });
            }
        });
    };
    PlanningTableComponent.prototype.ngOnDestroy = function () {
        this.currentSemesterSubscription.unsubscribe();
    };
    PlanningTableComponent.prototype.removeLink = function (event, subject, index, link) {
        var observable = this.linkService.delete(link);
        if (observable) {
            observable.toPromise();
        }
        event.stopPropagation();
    };
    PlanningTableComponent.prototype.addLink = function (subject) {
        var _this = this;
        var link = new __WEBPACK_IMPORTED_MODULE_4__shared_models_link__["a" /* Link */]();
        link.subject = subject;
        link.hours = 0;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__professor_select_professor_select_component__["a" /* ProfessorSelectComponent */], {
            data: {
                link: link,
                lecturers: this.lecturers,
                max: subject.hours - subject.linkHours,
                type: subject.type
            }
        });
        dialogRef.afterClosed().subscribe(function (data) {
            if (data) {
                var observable = _this.linkService.add(data.link, subject, data.link.lecturer);
                if (observable) {
                    observable.subscribe(function (response) {
                        data.link.id = response.data.id.toString();
                    });
                }
            }
        });
    };
    PlanningTableComponent.prototype.editLink = function (subject, index, link) {
        var _this = this;
        var lecturer = link.lecturer;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__professor_select_professor_select_component__["a" /* ProfessorSelectComponent */], {
            data: {
                link: link,
                lecturers: this.lecturers,
                max: subject.hours - subject.linkHours + link.hours,
                type: subject.type
            }
        });
        dialogRef.afterClosed().subscribe(function (data) {
            if (data) {
                var observable = _this.linkService.update(data.link, subject, lecturer);
                if (observable) {
                    observable.toPromise();
                }
            }
        });
    };
    PlanningTableComponent.prototype.selectSubject = function (subject) {
        this.subjectChange.next(subject);
    };
    PlanningTableComponent.prototype.updateSubjectHours = function (subject) {
        this.subjectService.save(subject).toPromise();
    };
    PlanningTableComponent.prototype.connectLinks = function (subjects, lecturers) {
        var _this = this;
        lecturers.forEach(function (lecturer) { return lecturer.clearLinks(); });
        subjects.forEach(function (subject) {
            if (subject.links.length) {
                subject.links.forEach(function (link) {
                    var lecturer = _this.lecturers.find(function (lecturer) { return lecturer.id === link.lecturer_id; });
                    if (lecturer) {
                        link.lecturer = lecturer;
                        lecturer.addLink(link);
                    }
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], PlanningTableComponent.prototype, "lecturers", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], PlanningTableComponent.prototype, "subjectChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatSort */])
    ], PlanningTableComponent.prototype, "sort", void 0);
    PlanningTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-planning-table',
            template: __webpack_require__("./src/app/planning/planning-table/planning-table.component.html"),
            styles: [__webpack_require__("./src/app/planning/planning-table/planning-table.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_subject_service__["a" /* SubjectService */], __WEBPACK_IMPORTED_MODULE_5__shared_services_link_service__["a" /* LinkService */], __WEBPACK_IMPORTED_MODULE_6__shared_services_semester_service__["a" /* SemesterService */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialog */]])
    ], PlanningTableComponent);
    return PlanningTableComponent;
}());



/***/ }),

/***/ "./src/app/planning/planning.component.css":
/***/ (function(module, exports) {

module.exports = "mat-sidenav {\r\n    width: 15vw;\r\n    top: 64px;\r\n}\r\n\r\n.professor-filter {\r\n    width:100%;\r\n    padding: 0 1rem;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box\r\n}\r\n\r\nfab-speed-dial {\r\n    position: fixed;\r\n    bottom: 1rem;\r\n    right: calc(1rem + 15vw);\r\n    z-index: 100;\r\n}\r\n\r\n.fab-button {\r\n    visibility: visible !important;\r\n}"

/***/ }),

/***/ "./src/app/planning/planning.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n  <mat-sidenav-content>\r\n    <!-- <mat-accordion>\r\n      <mat-expansion-panel [expanded]=\"true\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title> -->\r\n            <!-- Studia inżynierskie -->\r\n            Semestr\r\n            <mat-form-field>\r\n              <mat-select [(ngModel)]=\"selectedSemester\" (change)=\"setSemester(selectedSemester)\" [compareWith]=\"compareSemesters\">\r\n                <mat-option *ngFor=\"let semester of semesters\" [value]=\"semester\">\r\n                  {{ semester.year }} - {{ semester.name }}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          <!-- </mat-panel-title>\r\n        </mat-expansion-panel-header> -->\r\n        <app-planning-table [lecturers]=\"lecturers\" (subjectChange)=\"setSubject($event)\"></app-planning-table>\r\n      <!-- </mat-expansion-panel> -->\r\n      <!-- <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            Studia magisterskie\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <app-planning-table [lecturers]=\"lecturers\" (lectureChange)=\"setSubject($event)\"></app-planning-table>    \r\n      </mat-expansion-panel>\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            Studia doktoranckie\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <app-planning-table [lecturers]=\"lecturers\" (lectureChange)=\"setSubject($event)\"></app-planning-table>\r\n      </mat-expansion-panel> -->\r\n    <!-- </mat-accordion> -->\r\n    <fab-speed-dial direction=\"up\">\r\n      <button type=\"button\" mat-fab fab-toggle matTooltip=\"Akcje\" matTooltipPosition=\"left\"><mat-icon>menu</mat-icon></button>\r\n      \r\n      <!-- <button type=\"button\" mat-mini-fab fab-button color=\"primary\" matTooltip=\"Zapisz\" matTooltipPosition=\"left\"><mat-icon>save</mat-icon></button> -->\r\n      <button type=\"button\" mat-mini-fab fab-button color=\"primary\" matTooltip=\"Drukuj\" matTooltipPosition=\"left\" [disabled]=\"!selectedSemester\" (click)=\"print(selectedSemester)\"><mat-icon>print</mat-icon></button>\r\n    </fab-speed-dial>\r\n  </mat-sidenav-content>\r\n  <mat-sidenav #sideNav mode=\"side\" position=\"end\" class=\"mat-elevation-z8\" fixedInViewport=\"true\" fixedTopGap=\"64\" opened=\"true\" *ngIf=\"subjects && lecturers\">\r\n    <div *ngIf=\"subject\">\r\n      <mat-toolbar>{{subject.name}}</mat-toolbar>\r\n      <mat-list>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              2015/2016\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          Brak przypisań\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              2016/2017\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          Brak przypisań\r\n        </mat-expansion-panel>\r\n      </mat-list>\r\n    </div>\r\n    <mat-toolbar>Prowadzący</mat-toolbar>\r\n    <mat-form-field class=\"professor-filter\">\r\n      <input matInput placeholder=\"Filtruj\" (keyup)=\"filterLecturers($event.target.value)\" [(ngModel)]=\"professorFilter\"/>\r\n      <button mat-button *ngIf=\"professorFilter\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"professorFilter=''; filterLecturers('')\">\r\n        <mat-icon>close</mat-icon>\r\n      </button>\r\n    </mat-form-field>\r\n    <mat-accordion>\r\n      <app-professor-info *ngFor=\"let lecturer of filteredLecturers\" [lecturer]=\"lecturer\"></app-professor-info>\r\n    </mat-accordion>\r\n  </mat-sidenav>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/planning/planning.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanningComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_lecturer_service__ = __webpack_require__("./src/app/shared/services/lecturer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_subject_service__ = __webpack_require__("./src/app/shared/services/subject.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_semester_service__ = __webpack_require__("./src/app/shared/services/semester.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PlanningComponent = (function () {
    function PlanningComponent(lecturerService, subjectService, semesterService) {
        this.lecturerService = lecturerService;
        this.subjectService = subjectService;
        this.semesterService = semesterService;
        this.lecturers = [];
        this.filteredLecturers = [];
        this.subjects = [];
    }
    PlanningComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.semesterService.getAll()
            .subscribe(function (semesters) { return _this.semesters = semesters; });
        this.currentSemesterSubscription = this.semesterService.getSelected()
            .subscribe(function (semester) {
            if (semester) {
                _this.selectedSemester = semester;
                // this.subjectService.getAllForSemester(semester)
                // .subscribe(subjects => this.subjects = subjects)
            }
        });
        this.lecturerService.getAll()
            .subscribe(function (lecturers) {
            _this.lecturers = lecturers;
            _this.filteredLecturers = lecturers;
        });
        // this.lecturerService.getAll()
        // .subscribe(lecturers => {
        //   this.lecturers = lecturers;
        //   this.filteredLecturers = lecturers;
        // })
        // this.subjectService.getAll()
        //   .subscribe(subjects => this.subjects = subjects)
    };
    PlanningComponent.prototype.ngOnDestroy = function () {
        this.currentSemesterSubscription.unsubscribe();
    };
    PlanningComponent.prototype.setSubject = function (subject) {
        this.subject = subject;
        this.sideNav.close();
        this.sideNav.open();
    };
    PlanningComponent.prototype.setSemester = function (semester) {
        this.semesterService.setSelected(semester);
    };
    PlanningComponent.prototype.compareSemesters = function (a, b) {
        return a.id === b.id;
    };
    PlanningComponent.prototype.filterLecturers = function (query) {
        query = query.toLowerCase();
        this.filteredLecturers = this.lecturers.filter(function (lecturer) { return lecturer.name.toLowerCase().includes(query) || lecturer.surname.toLowerCase().includes(query) || lecturer.title.includesString(query); });
    };
    PlanningComponent.prototype.print = function (semester) {
        this.semesterService.print(semester);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('sideNav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSidenav */])
    ], PlanningComponent.prototype, "sideNav", void 0);
    PlanningComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-planning',
            template: __webpack_require__("./src/app/planning/planning.component.html"),
            styles: [__webpack_require__("./src/app/planning/planning.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_lecturer_service__["a" /* LecturerService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_subject_service__["a" /* SubjectService */], __WEBPACK_IMPORTED_MODULE_4__shared_services_semester_service__["a" /* SemesterService */]])
    ], PlanningComponent);
    return PlanningComponent;
}());



/***/ }),

/***/ "./src/app/planning/planning.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanningModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__planning_component__ = __webpack_require__("./src/app/planning/planning.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__planning_table_planning_table_component__ = __webpack_require__("./src/app/planning/planning-table/planning-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__professor_select_professor_select_component__ = __webpack_require__("./src/app/planning/professor-select/professor-select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__professor_info_professor_info_component__ = __webpack_require__("./src/app/planning/professor-info/professor-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_authguard_service__ = __webpack_require__("./src/app/shared/services/authguard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var planningRouting = __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forChild([
    {
        path: 'planning',
        component: __WEBPACK_IMPORTED_MODULE_2__planning_component__["a" /* PlanningComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_8__shared_services_authguard_service__["a" /* AuthGuardService */]]
    }
]);
var PlanningModule = (function () {
    function PlanningModule() {
    }
    PlanningModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                planningRouting,
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__professor_select_professor_select_component__["a" /* ProfessorSelectComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__planning_component__["a" /* PlanningComponent */],
                __WEBPACK_IMPORTED_MODULE_5__planning_table_planning_table_component__["a" /* PlanningTableComponent */],
                __WEBPACK_IMPORTED_MODULE_6__professor_select_professor_select_component__["a" /* ProfessorSelectComponent */],
                __WEBPACK_IMPORTED_MODULE_7__professor_info_professor_info_component__["a" /* ProfessorInfoComponent */]
            ]
        })
    ], PlanningModule);
    return PlanningModule;
}());



/***/ }),

/***/ "./src/app/planning/professor-info/professor-info.component.css":
/***/ (function(module, exports) {

module.exports = "mat-chip {\r\n    margin: .25rem !important;\r\n}\r\n\r\n.warning {\r\n    color: darkorange;\r\n}\r\n\r\n.rule:not(.error):not(.warning) {\r\n    color: darkgreen\r\n}\r\n\r\n.error,\r\n.error.warning {\r\n    color: red;\r\n}"

/***/ }),

/***/ "./src/app/planning/professor-info/professor-info.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel>\r\n  <mat-expansion-panel-header>\r\n    <mat-panel-title fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n      <span>{{lecturer.surname}} {{lecturer.name}}</span>\r\n      <span [ngClass]=\"{'warning': lecturer.hasMaxWarning() || lecturer.hasMinWarning(), 'error': lecturer.hasMinError() || lecturer.hasMaxError()}\">{{lecturer.linkHours}}/{{lecturer.title.min_hours}}</span>\r\n    </mat-panel-title>\r\n  </mat-expansion-panel-header>\r\n  <mat-chip-list #chipList [selectable]=\"true\">\r\n    <ul>\r\n      <li class=\"rule\" [ngClass]=\"{'warning': lecturer.hasMinWarning(), 'error': lecturer.hasMinError()}\">{{lecturer.title.short_name}} - MIN {{lecturer.title.min_hours}}h</li>\r\n      <li class=\"rule\" [ngClass]=\"{'warning': lecturer.hasMaxWarning(), 'error': lecturer.hasMaxError()}\">{{lecturer.title.short_name}} - MAX {{lecturer.title.max_hours}}h</li>\r\n      <li>STACJONARNE: {{lecturer.getStationaryHours()}}h</li>\r\n      <li>NIESTACJONARNE: {{lecturer.getRemoteHours()}}h</li>\r\n    </ul>\r\n    <mat-chip *ngFor=\"let link of lecturer.links; let i = index\" [selectable]=\"true\" [removable]=\"true\" (remove)=\"removeLink(i, link)\">\r\n      {{link.subject.name}}-{{link.subject.type}} | {{link.hours}}\r\n      <mat-icon matChipRemove>cancel</mat-icon>\r\n    </mat-chip>\r\n  </mat-chip-list>\r\n</mat-expansion-panel>\r\n"

/***/ }),

/***/ "./src/app/planning/professor-info/professor-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessorInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_lecturer__ = __webpack_require__("./src/app/shared/models/lecturer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_link_service__ = __webpack_require__("./src/app/shared/services/link.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfessorInfoComponent = (function () {
    function ProfessorInfoComponent(linkService) {
        this.linkService = linkService;
    }
    ProfessorInfoComponent.prototype.ngOnInit = function () {
    };
    ProfessorInfoComponent.prototype.removeLink = function (index, link) {
        var observable = this.linkService.delete(link);
        if (observable) {
            observable.toPromise();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_models_lecturer__["a" /* Lecturer */])
    ], ProfessorInfoComponent.prototype, "lecturer", void 0);
    ProfessorInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-professor-info',
            template: __webpack_require__("./src/app/planning/professor-info/professor-info.component.html"),
            styles: [__webpack_require__("./src/app/planning/professor-info/professor-info.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_link_service__["a" /* LinkService */]])
    ], ProfessorInfoComponent);
    return ProfessorInfoComponent;
}());



/***/ }),

/***/ "./src/app/planning/professor-select/professor-select.component.css":
/***/ (function(module, exports) {

module.exports = "form {\r\n    min-width: 25vw;\r\n}"

/***/ }),

/***/ "./src/app/planning/professor-select/professor-select.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"closeDialog(data)\" fxLayout=\"column\">\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"Prowadzący\" [matAutocomplete]=\"auto\" [formControl]=\"professorCtrl\" [(ngModel)]=\"data.link.lecturer\">\r\n    <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"formatProfessor\">\r\n      <mat-option *ngFor=\"let professor of filteredProfessors | async\" [value]=\"professor\">\r\n        <span>{{ professor.surname }} {{ professor.name }}</span>\r\n      </mat-option>\r\n    </mat-autocomplete>\r\n    <mat-checkbox name=\"permissionCheck\" [(ngModel)]=\"lecturerWithPermissions\" (change)=\"setLecturerFilter(lecturerWithPermissions)\">Sprawdź uprawnienia</mat-checkbox>\r\n  </mat-form-field>\r\n  <mat-slider\r\n  [max]=\"data.max\"\r\n  [min]=\"0\"\r\n  [thumb-label]=\"true\"\r\n  [tick-interval]=\"10\"\r\n  name=\"hours\"\r\n  [(ngModel)]=\"data.link.hours\">\r\n</mat-slider>\r\n<button type=\"submit\" mat-raised-button color=\"primary\">{{data.link.id? \"Zapisz\" : \"Dodaj\"}}</button>\r\n<button mat-raised-button [mat-dialog-close]=null >Anuluj</button>\r\n</form>"

/***/ }),

/***/ "./src/app/planning/professor-select/professor-select.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessorSelectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ProfessorSelectComponent = (function () {
    function ProfessorSelectComponent(dialogRef, data) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.lecturerWithPermissions = true;
        this.subjectType = data.type;
        this.lecturers = data.lecturers;
        this.setLecturerFilter(this.lecturerWithPermissions);
        this.professorCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.filteredProfessors = this.professorCtrl.valueChanges
            .startWith(null)
            .map(function (lecturer) { return lecturer ? _this.filterProfessors(lecturer.name || lecturer) : _this.possibleLecturers.slice(); });
    }
    ProfessorSelectComponent.prototype.closeDialog = function (data) {
        this.dialogRef.close(data);
    };
    ProfessorSelectComponent.prototype.filterProfessors = function (query) {
        query = query.toLowerCase();
        return this.possibleLecturers.filter(function (lecturer) {
            return lecturer.name.toLowerCase().includes(query) || lecturer.surname.toLowerCase().includes(query);
        });
    };
    ProfessorSelectComponent.prototype.formatProfessor = function (lecturer) {
        return lecturer ? lecturer.surname + lecturer.name : '';
    };
    ProfessorSelectComponent.prototype.setLecturerFilter = function (withPermissions) {
        var _this = this;
        this.possibleLecturers = withPermissions ? this.lecturers
            .filter(function (lecturer) {
            return lecturer.hasPermission(_this.subjectType);
        }) : this.lecturers;
    };
    ProfessorSelectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-professor-select',
            template: __webpack_require__("./src/app/planning/professor-select/professor-select.component.html"),
            styles: [__webpack_require__("./src/app/planning/professor-select/professor-select.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatDialogRef */], Object])
    ], ProfessorSelectComponent);
    return ProfessorSelectComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxFlex fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n  <form>\r\n    <mat-card fxLayout=\"column\">\r\n      <mat-card-title>\r\n        Rejestracja\r\n      </mat-card-title>\r\n      <mat-card-content fxLayout=\"column\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Nazwa użytkownika\" #username autofocus>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Email\" #email autofocus type=\"email\"/>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Hasło\" #password type=\"password\"/>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Potwórz hasło\" #cpassword type=\"password\"/>\r\n        </mat-form-field>\r\n      </mat-card-content>\r\n      <mat-card-actions fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n        <button mat-raised-button color=\"primary\" (click)=\"register(username.value, email.value, password.value, cpassword.value)\">Zarejestruj</button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__ = __webpack_require__("./src/app/shared/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterComponent = (function () {
    function RegisterComponent(authService) {
        this.authService = authService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function (username, email, password, cpassword) {
        this.authService.register(username, email, password, cpassword).toPromise();
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__["a" /* AuthService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/register/register.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_authguard_service__ = __webpack_require__("./src/app/shared/services/authguard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var registerRouting = __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forChild([
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_1__register_component__["a" /* RegisterComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__shared_services_authguard_service__["a" /* AuthGuardService */]]
    }
]);
var RegisterModule = (function () {
    function RegisterModule() {
    }
    RegisterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                registerRouting,
                __WEBPACK_IMPORTED_MODULE_2__shared__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__register_component__["a" /* RegisterComponent */]]
        })
    ], RegisterModule);
    return RegisterModule;
}());



/***/ }),

/***/ "./src/app/semester/semester.component.css":
/***/ (function(module, exports) {

module.exports = ".element-row {\r\n    position: relative;\r\n    cursor: pointer;\r\n}\r\n\r\n.element-row:not(.expanded):hover {\r\nbackground: #f5f5f5;\r\n}\r\n\r\n.element-row.expanded {\r\nborder-bottom-color: transparent;\r\n}\r\n\r\n.fab {\r\n    position: fixed;\r\n    bottom: 1rem;\r\n    right: calc(1rem);\r\n    z-index: 100;\r\n}"

/***/ }),

/***/ "./src/app/semester/semester.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\r\n  <mat-table #table [dataSource]=\"dataSource\">\r\n    \r\n    <ng-container matColumnDef=\"name\">\r\n      <mat-header-cell *matHeaderCellDef> Rodzaj </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n    </ng-container>\r\n    \r\n    <ng-container matColumnDef=\"year\">\r\n      <mat-header-cell *matHeaderCellDef> Rok </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.year}} </mat-cell>\r\n    </ng-container>\r\n    \r\n    <ng-container matColumnDef=\"options\">\r\n      <mat-header-cell *matHeaderCellDef> Opcje </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element; let i = index\">\r\n        <button mat-button (click)=\"editSemester(element, $event, i)\">Zmień</button>\r\n        <button mat-button (click)=\"deleteSemester(element)\">Usuń</button>\r\n        <button mat-button (click)=\"copySemester(element)\">Kopiuj</button>\r\n      </mat-cell>\r\n    </ng-container>\r\n    \r\n    <ng-container matColumnDef=\"nameEdit\">\r\n      <mat-cell *matCellDef=\"let element\">\r\n        <mat-form-field>\r\n          <input matInput [(ngModel)]=\"element.name\"/>\r\n        </mat-form-field>\r\n      </mat-cell>\r\n    </ng-container>\r\n    \r\n    <ng-container matColumnDef=\"yearEdit\">\r\n      <mat-cell *matCellDef=\"let element\">\r\n        <mat-form-field>\r\n          <input matInput [(ngModel)]=\"element.year\"/>\r\n        </mat-form-field>\r\n      </mat-cell>\r\n    </ng-container>\r\n    \r\n    <ng-container matColumnDef=\"optionsEdit\">\r\n      <mat-cell *matCellDef=\"let element; let i = index\">\r\n          <button mat-button (click)=\"saveSemester(element, $event, i)\">Zapisz</button>\r\n          <button mat-button (click)=\"cancelSemester(element)\" *ngIf=\"!element.id\">Anuluj</button>\r\n        </mat-cell>\r\n    </ng-container>\r\n    \r\n    <mat-header-row *matHeaderRowDef=\"['name', 'year', 'options']\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: ['name', 'year', 'options'];\"\r\n    matRipple \r\n    class=\"element-row\"  \r\n    [class.expanded]=\"expandedElement === row\" \r\n    (click)=\"expandedElement = expandedElement === row? null : row\"\r\n    style=\"overflow: hidden\">\r\n  </mat-row>\r\n  <mat-row *matRowDef=\"let row; columns: ['nameEdit', 'yearEdit', 'optionsEdit']; when: isEditableRow\"></mat-row>\r\n</mat-table>\r\n<button class=\"fab\" type=\"button\" mat-fab matTooltip=\"Dodaj przedmiot\" matTooltipPosition=\"left\" (click)=\"addSemester()\"><mat-icon>add</mat-icon></button>\r\n</div>"

/***/ }),

/***/ "./src/app/semester/semester.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SemesterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_semester_service__ = __webpack_require__("./src/app/shared/services/semester.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_semester__ = __webpack_require__("./src/app/shared/models/semester.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_table__ = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SemesterComponent = (function () {
    function SemesterComponent(semesterService) {
        var _this = this;
        this.semesterService = semesterService;
        this.dataChange = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Subject"]();
        this.dataSource = new SemesterDataSource(this.dataChange);
        this.isEditableRow = function (_, row) {
            return row === _this.editedRow;
        };
    }
    SemesterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.semesterService.getAll()
            .subscribe(function (semesters) {
            _this.semesters = semesters;
            _this.dataChange.next(semesters);
        });
    };
    SemesterComponent.prototype.addSemester = function () {
        var row = new __WEBPACK_IMPORTED_MODULE_2__shared_models_semester__["a" /* Semester */]();
        var lastRow = this.editedRow;
        var lastIndex = this.lastIndex;
        this.lastIndex = 0;
        this.editedRow = row;
        this.semesters.unshift(row);
        this.refreshElementPredicate(0, row);
        if (lastRow) {
            this.refreshElementPredicate(lastIndex + 1, lastRow);
        }
    };
    SemesterComponent.prototype.editSemester = function (element, event, index) {
        var lastElement = this.editedRow;
        var lastIndex = this.lastIndex;
        this.editedRow = element;
        this.lastIndex = index;
        this.refreshElementPredicate(index, element);
        if (lastElement) {
            this.semesterService.save(lastElement).toPromise();
            this.refreshElementPredicate(lastIndex, lastElement);
        }
        event.stopPropagation();
    };
    SemesterComponent.prototype.saveSemester = function (element, event, index) {
        this.editedRow = null;
        this.lastIndex = null;
        this.refreshElementPredicate(index, element);
        this.semesterService.save(element)
            .subscribe(function (response) {
            debugger;
            element.deserialize(response.data);
        });
        event.stopPropagation();
    };
    SemesterComponent.prototype.deleteSemester = function (semesterToRemove) {
        var _this = this;
        var observable = this.semesterService.delete(semesterToRemove);
        if (observable) {
            observable.subscribe(function () {
                _this.semesters = _this.semesters.filter(function (semester) { return semester.id !== semesterToRemove.id; });
                _this.dataChange.next(_this.semesters);
                _this.semesterService.getSelected()
                    .subscribe(function (semester) {
                    if (semester !== null && semester.id === semesterToRemove.id) {
                        _this.semesterService.setSelected(null);
                    }
                });
            });
        }
    };
    SemesterComponent.prototype.copySemester = function (semester) {
        var newSemester = new __WEBPACK_IMPORTED_MODULE_2__shared_models_semester__["a" /* Semester */]();
        newSemester.template = semester;
        var lastRow = this.editedRow;
        var lastIndex = this.lastIndex;
        this.lastIndex = 0;
        this.editedRow = newSemester;
        this.semesters.unshift(newSemester);
        this.refreshElementPredicate(0, newSemester);
        if (lastRow) {
            this.refreshElementPredicate(lastIndex + 1, lastRow);
        }
    };
    SemesterComponent.prototype.cancelSemester = function (semesterToRemove) {
        this.semesters = this.semesters.filter(function (semester) { return semester !== semesterToRemove; });
        this.lastIndex = null;
        this.editedRow = null;
        this.dataChange.next(this.semesters);
    };
    SemesterComponent.prototype.refreshElementPredicate = function (index, element) {
        this.semesters.splice(index, 1);
        this.dataChange.next(this.semesters);
        this.semesters = this.semesters.slice(0, index).concat([element]).concat(this.semesters.slice(index));
        this.dataChange.next(this.semesters);
    };
    SemesterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-semester',
            template: __webpack_require__("./src/app/semester/semester.component.html"),
            styles: [__webpack_require__("./src/app/semester/semester.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_semester_service__["a" /* SemesterService */]])
    ], SemesterComponent);
    return SemesterComponent;
}());

var SemesterDataSource = (function (_super) {
    __extends(SemesterDataSource, _super);
    function SemesterDataSource(dataChange) {
        var _this = _super.call(this) || this;
        _this.dataChange = dataChange;
        return _this;
    }
    SemesterDataSource.prototype.connect = function () {
        return this.dataChange;
    };
    SemesterDataSource.prototype.disconnect = function () { };
    return SemesterDataSource;
}(__WEBPACK_IMPORTED_MODULE_4__angular_cdk_table__["n" /* DataSource */]));


/***/ }),

/***/ "./src/app/semester/semester.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SemesterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__semester_component__ = __webpack_require__("./src/app/semester/semester.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_authguard_service__ = __webpack_require__("./src/app/shared/services/authguard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var semesterRouting = __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
    {
        path: 'semesters',
        component: __WEBPACK_IMPORTED_MODULE_2__semester_component__["a" /* SemesterComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__shared_services_authguard_service__["a" /* AuthGuardService */]]
    }
]);
var SemesterModule = (function () {
    function SemesterModule() {
    }
    SemesterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                semesterRouting,
                __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__semester_component__["a" /* SemesterComponent */]]
        })
    ], SemesterModule);
    return SemesterModule;
}());



/***/ }),

/***/ "./src/app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__shared_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout__ = __webpack_require__("./src/app/shared/layout/index.ts");
/* unused harmony namespace reexport */


// export * from './services';
// export * from './models';


/***/ }),

/***/ "./src/app/shared/layout/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/layout/header.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  Didacticos 2.0\r\n  <span fxFlex></span>\r\n  <span *ngIf=\"username\">\r\n    <button mat-button routerLink=\"/planning\">Planowanie</button>\r\n    <button mat-button routerLink=\"/lecturers\">Prowadzący</button>\r\n    <button mat-button routerLink=\"/subjects\">Przedmioty</button>\r\n    <button mat-button routerLink=\"/titles\">Tytuły</button>\r\n    <button mat-button routerLink=\"/semesters\">Semestry</button>\r\n  </span>\r\n  <button mat-button [matMenuTriggerFor]=\"menu\">{{username}}</button>\r\n  <mat-menu #menu=\"matMenu\">\r\n    <button mat-menu-item (click)=\"logout()\" >Wyloguj</button>\r\n    <button mat-menu-item routerLink=\"/register\">Rejestracja</button>\r\n  </mat-menu>\r\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/shared/layout/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_credential_service__ = __webpack_require__("./src/app/shared/services/credential.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { UserService } from '../services';
// import { User } from '../models';
var HeaderComponent = (function () {
    function HeaderComponent(credentialService, router) {
        this.credentialService = credentialService;
        this.router = router;
    }
    ;
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.credentialService.getUsername()
            .subscribe(function (username) { return _this.username = username; });
    };
    HeaderComponent.prototype.logout = function () {
        this.credentialService.setToken(null);
        this.credentialService.setUsername(null);
        this.router.navigateByUrl('/login');
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-layout-header',
            template: __webpack_require__("./src/app/shared/layout/header.component.html"),
            styles: [__webpack_require__("./src/app/shared/layout/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_credential_service__["a" /* CredentialService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/layout/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_component__ = __webpack_require__("./src/app/shared/layout/header.component.ts");
/* unused harmony namespace reexport */

// export * from './footer.component'; 


/***/ }),

/***/ "./src/app/shared/models/degree.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Degree; });
var Degree = (function () {
    function Degree() {
    }
    Degree.prototype.deserialize = function (input) {
        this.id = input.id;
        this.name = input.name;
        this.prefix = input.prefix;
        this.alias = input.alias;
        this.number = input.number;
        return this;
    };
    Degree.prototype.serialize = function () {
        return {
            id: this.id,
            name: this.name,
            prefix: this.prefix,
            alias: this.alias,
            number: this.number,
        };
    };
    return Degree;
}());



/***/ }),

/***/ "./src/app/shared/models/field.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Field; });
var Field = (function () {
    function Field() {
    }
    Field.prototype.deserialize = function (input) {
        this.id = input.id;
        this.name = input.name;
        this.type = input.type;
        return this;
    };
    Field.prototype.serialize = function () {
        return {
            id: this.id,
            name: this.name,
            type: this.type,
        };
    };
    return Field;
}());



/***/ }),

/***/ "./src/app/shared/models/lecturer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Lecturer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__title__ = __webpack_require__("./src/app/shared/models/title.ts");

var Lecturer = (function () {
    function Lecturer() {
        this.links = [];
        this.linkHours = 0;
    }
    Lecturer.prototype.deserialize = function (input) {
        this.id = input.id.toString();
        this.name = input.name;
        this.surname = input.surname;
        this.title = new __WEBPACK_IMPORTED_MODULE_0__title__["a" /* Title */]().deserialize(input.title);
        return this;
    };
    Lecturer.prototype.serialize = function () {
        return {
            id: ~~this.id,
            name: this.name,
            surname: this.surname,
            title_id: this.title ? this.title.id : null
        };
    };
    Lecturer.prototype.addLink = function (link) {
        this.linkHours += link.hours;
        this.links.push(link);
    };
    Lecturer.prototype.removeLink = function (removedLink) {
        this.links = this.links.filter(function (link) { return link.id !== removedLink.id; });
        this.linkHours = this.links.reduce(function (total, link) { return total + link.hours; }, 0);
    };
    Lecturer.prototype.hasPermission = function (type) {
        return this.title.permissions.includes(type);
    };
    Lecturer.prototype.clearLinks = function () {
        this.links = [];
        this.linkHours = 0;
    };
    Lecturer.prototype.hasMinWarning = function () {
        return this.linkHours <= (this.title.min_hours + this.title.warning_percent * 0.01 * this.title.min_hours);
    };
    Lecturer.prototype.hasMinError = function () {
        return this.linkHours < this.title.min_hours;
    };
    Lecturer.prototype.hasMaxWarning = function () {
        return this.linkHours >= (this.title.max_hours - this.title.warning_percent * 0.01 * this.title.max_hours);
    };
    Lecturer.prototype.hasMaxError = function () {
        return this.linkHours > this.title.max_hours;
    };
    Lecturer.prototype.getStationaryHours = function () {
        return this.links
            .filter(function (link) { return link.subject.field.type === 'STACJONARNE'; })
            .reduce(function (sum, link) { return sum + link.hours; }, 0);
    };
    Lecturer.prototype.getRemoteHours = function () {
        return this.links
            .filter(function (link) { return link.subject.field.type === 'NIESTACJONARNE'; })
            .reduce(function (sum, link) { return sum + link.hours; }, 0);
    };
    return Lecturer;
}());



/***/ }),

/***/ "./src/app/shared/models/link.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Link; });
var Link = (function () {
    function Link() {
    }
    Link.prototype.deserialize = function (input) {
        this.id = input.id.toString();
        this.lecturer_id = input.lecturer_id.toString();
        this.subject_id = input.subject_id.toString();
        this.hours = input.hours;
        return this;
    };
    Link.prototype.serialize = function () {
        return {
            id: +this.id,
            lecturer_id: this.lecturer ? +this.lecturer.id : +this.lecturer_id,
            subject_id: this.subject ? +this.subject.id : +this.subject_id,
            hours: this.hours
        };
    };
    return Link;
}());



/***/ }),

/***/ "./src/app/shared/models/semester.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Semester; });
var Semester = (function () {
    function Semester() {
    }
    Semester.prototype.deserialize = function (input) {
        this.id = input.id;
        this.name = input.name;
        this.year = input.year;
        return this;
    };
    Semester.prototype.serialize = function () {
        return {
            id: this.id,
            name: this.name,
            year: this.year,
            template_id: this.template ? this.template.id : null
        };
    };
    return Semester;
}());



/***/ }),

/***/ "./src/app/shared/models/subject.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SubjectType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__field__ = __webpack_require__("./src/app/shared/models/field.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__degree__ = __webpack_require__("./src/app/shared/models/degree.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__semester__ = __webpack_require__("./src/app/shared/models/semester.ts");



var Subject = (function () {
    function Subject() {
        this.links = [];
        this.linkHours = 0;
    }
    Subject.prototype.deserialize = function (input) {
        this.id = input.id.toString();
        this.name = input.name;
        this.type = SubjectType[input.type];
        this.hours = input.hours;
        this.field = new __WEBPACK_IMPORTED_MODULE_0__field__["a" /* Field */]().deserialize(input.field);
        this.semester = new __WEBPACK_IMPORTED_MODULE_2__semester__["a" /* Semester */]().deserialize(input.semester);
        this.degree = new __WEBPACK_IMPORTED_MODULE_1__degree__["a" /* Degree */]().deserialize(input.degree);
        this.semesterNumber = input.semesterNumber;
        return this;
    };
    Subject.prototype.serialize = function () {
        var serializedType;
        if (this.type) {
            var subjectTypes = Object.values(SubjectType);
            for (var i = 0; i < subjectTypes.length; i++) {
                if (subjectTypes[i] === this.type) {
                    serializedType = Object.keys(SubjectType)[i];
                    break;
                }
            }
        }
        return {
            id: +this.id,
            name: this.name,
            type: serializedType,
            hours: this.hours,
            field_id: this.field ? this.field.id : null,
            semester_id: this.semester ? this.semester.id : null,
            degree_id: this.degree ? this.degree.id : null,
            semester_number: this.semesterNumber
        };
    };
    Subject.prototype.addLink = function (link) {
        this.linkHours += link.hours;
        this.links.push(link);
    };
    Subject.prototype.removeLink = function (removedLink) {
        this.links = this.links.filter(function (link) { return link.id !== removedLink.id; });
        this.linkHours = this.links.reduce(function (total, link) { return total + link.hours; }, 0);
    };
    return Subject;
}());

var SubjectType;
(function (SubjectType) {
    SubjectType["lec"] = "Wyk\u0142ad";
    SubjectType["lab"] = "Laboratorium";
    SubjectType["exe"] = "\u0106wiczenia";
    SubjectType["sem"] = "Seminarium";
    SubjectType["pro"] = "Projekt";
})(SubjectType || (SubjectType = {}));


/***/ }),

/***/ "./src/app/shared/models/title.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Title; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__subject__ = __webpack_require__("./src/app/shared/models/subject.ts");

var Title = (function () {
    function Title() {
        this.permissions = [];
    }
    Title.prototype.deserialize = function (input) {
        this.id = input.id;
        this.name = input.name;
        this.short_name = input.short_name;
        this.full_name = input.full_name;
        this.lab_permission = !!input.lab_permission;
        this.lec_permission = !!input.lec_permission;
        this.exe_permission = !!input.exe_permission;
        this.sem_permission = !!input.sem_permission;
        this.pro_permission = !!input.pro_permission;
        this.min_hours = input.min_hours;
        this.max_hours = input.max_hours;
        this.warning_percent = input.warning_percent;
        if (this.lab_permission) {
            this.permissions.push(__WEBPACK_IMPORTED_MODULE_0__subject__["b" /* SubjectType */].lab);
        }
        if (this.lec_permission) {
            this.permissions.push(__WEBPACK_IMPORTED_MODULE_0__subject__["b" /* SubjectType */].lec);
        }
        if (this.exe_permission) {
            this.permissions.push(__WEBPACK_IMPORTED_MODULE_0__subject__["b" /* SubjectType */].exe);
        }
        if (this.sem_permission) {
            this.permissions.push(__WEBPACK_IMPORTED_MODULE_0__subject__["b" /* SubjectType */].sem);
        }
        if (this.pro_permission) {
            this.permissions.push(__WEBPACK_IMPORTED_MODULE_0__subject__["b" /* SubjectType */].pro);
        }
        return this;
    };
    Title.prototype.serialize = function () {
        return {
            id: this.id,
            name: this.name,
            short_name: this.short_name,
            full_name: this.full_name,
            lab_permission: this.lab_permission ? 1 : 0,
            lec_permission: this.lec_permission ? 1 : 0,
            exe_permission: this.exe_permission ? 1 : 0,
            sem_permission: this.sem_permission ? 1 : 0,
            pro_permission: this.pro_permission ? 1 : 0,
            min_hours: this.min_hours,
            max_hours: this.max_hours,
            warning_percent: this.warning_percent
        };
    };
    Title.prototype.includesString = function (needle) {
        needle = needle.toLowerCase();
        return ((!!this.name && this.name.toLowerCase().includes(needle)) ||
            (!!this.short_name && this.short_name.toLowerCase().includes(needle)) ||
            (!!this.full_name && this.full_name.toLowerCase().includes(needle)));
    };
    return Title;
}());



/***/ }),

/***/ "./src/app/shared/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__credential_service__ = __webpack_require__("./src/app/shared/services/credential.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__loading_service__ = __webpack_require__("./src/app/shared/services/loading.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_file_saver_FileSaver__ = __webpack_require__("./node_modules/file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_file_saver_FileSaver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_file_saver_FileSaver__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var API_PATH = 'http://localhost:8000/api/';
var ApiService = (function () {
    function ApiService(http, credentialService, snackBar, loadingService) {
        this.http = http;
        this.credentialService = credentialService;
        this.snackBar = snackBar;
        this.loadingService = loadingService;
    }
    ApiService.prototype.get = function (path, params) {
        var _this = this;
        if (params === void 0) { params = new URLSearchParams(); }
        var key = this.generateBusyKey();
        this.loadingService.show(key);
        return this.http.get("" + API_PATH + path, { headers: this.setHeaders() })
            .finally(function () { return _this.loadingService.hide(key); })
            .catch(this.formatErrors.bind(this))
            .map(function (res) { return _this.parseResponse(res); });
    };
    ApiService.prototype.post = function (path, body, params) {
        var _this = this;
        if (params === void 0) { params = new URLSearchParams(); }
        var key = this.generateBusyKey();
        this.loadingService.show(key);
        return this.http.post("" + API_PATH + path, body, { headers: this.setHeaders() })
            .finally(function () { return _this.loadingService.hide(key); })
            .catch(this.formatErrors.bind(this))
            .map(function (res) { return _this.parseResponse(res); });
    };
    ApiService.prototype.put = function (path, body, params) {
        var _this = this;
        if (params === void 0) { params = new URLSearchParams(); }
        var key = this.generateBusyKey();
        this.loadingService.show(key);
        return this.http.put("" + API_PATH + path, body, { headers: this.setHeaders() })
            .finally(function () { return _this.loadingService.hide(key); })
            .catch(this.formatErrors.bind(this))
            .map(function (res) { return _this.parseResponse(res); });
    };
    ApiService.prototype.delete = function (path, params) {
        var _this = this;
        if (params === void 0) { params = new URLSearchParams(); }
        var key = this.generateBusyKey();
        this.loadingService.show(key);
        return this.http.delete("" + API_PATH + path, { headers: this.setHeaders() })
            .finally(function () { return _this.loadingService.hide(key); })
            .catch(this.formatErrors.bind(this))
            .map(function (res) { return _this.parseResponse(res); });
    };
    ApiService.prototype.getApiUrl = function () {
        return API_PATH;
    };
    ApiService.prototype.download = function (path) {
        var _this = this;
        var key = this.generateBusyKey();
        this.loadingService.show(key);
        return this.http.get("" + API_PATH + path, { headers: this.setHeaders(), responseType: __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* ResponseContentType */].Blob })
            .finally(function () { return _this.loadingService.hide(key); })
            .catch(this.formatErrors.bind(this))
            .subscribe(function (response) {
            var contentDispositionHeader = response.headers.get('Content-Disposition');
            var parts = contentDispositionHeader.split(';');
            var filename = parts[1].split('=')[1].slice(1, -1);
            var blob = new Blob([response._body], { type: 'text/plain' });
            Object(__WEBPACK_IMPORTED_MODULE_8_file_saver_FileSaver__["saveAs"])(blob, filename);
        });
    };
    ApiService.prototype.setHeaders = function () {
        return new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ Authorization: this.credentialService.getToken() });
    };
    ApiService.prototype.formatErrors = function (error) {
        var parsedResponse = this.parseResponse(error);
        this.snackBar.open("Wyst\u0105pi\u0142 nieoczekiwany b\u0142\u0105d", null, { duration: 3000 });
        console.error("Wyst\u0105pi\u0142 nieoczekiwany b\u0142\u0105d: \"" + parsedResponse.exception + " - " + parsedResponse.message + "\"");
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(parsedResponse);
    };
    ApiService.prototype.parseResponse = function (response) {
        if (response.headers.get('content-type').includes('application/json')) {
            return response.json();
        }
        else {
            return {
                status: response.status,
                text: response.statusText
            };
        }
    };
    ApiService.prototype.generateBusyKey = function () {
        return (Math.random() * 10e16).toString(36);
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_6__credential_service__["a" /* CredentialService */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["C" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_7__loading_service__["a" /* LoadingService */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("./src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__credential_service__ = __webpack_require__("./src/app/shared/services/credential.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(apiService, credentialService, snackBar) {
        this.apiService = apiService;
        this.credentialService = credentialService;
        this.snackBar = snackBar;
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return this.apiService
            .post('login', { email: email, password: password })
            .do(function (response) {
            _this.credentialService.setToken(response.data.token);
            _this.credentialService.setUsername(email);
        });
    };
    AuthService.prototype.register = function (name, email, password, c_password) {
        var _this = this;
        return this.apiService
            .post('register', { name: name, email: email, password: password, c_password: c_password })
            .do(function () {
            _this.snackBar.open("Pomy\u015Blnie zarejestrowano u\u017Cytkownika \"" + name + ".", null, { duration: 3000 });
        });
    };
    AuthService.prototype.isLoggedIn = function () {
        return !!this.credentialService.getToken();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__credential_service__["a" /* CredentialService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["C" /* MatSnackBar */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/services/authguard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/shared/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.authService.isLoggedIn()) {
            this.router.navigateByUrl('/login');
            return false;
        }
        else {
            return true;
        }
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/shared/services/credential.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CredentialService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CredentialService = (function () {
    function CredentialService() {
        this.usernameChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
    }
    CredentialService.prototype.getToken = function () {
        return this.token;
    };
    CredentialService.prototype.setToken = function (token) {
        this.token = token;
    };
    CredentialService.prototype.getUsername = function () {
        return this.usernameChange.asObservable();
    };
    CredentialService.prototype.setUsername = function (username) {
        this.username = username;
        this.usernameChange.next(username);
    };
    CredentialService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CredentialService);
    return CredentialService;
}());



/***/ }),

/***/ "./src/app/shared/services/degree.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DegreeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("./src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_degree__ = __webpack_require__("./src/app/shared/models/degree.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DegreeService = (function () {
    function DegreeService(apiService) {
        this.apiService = apiService;
    }
    DegreeService.prototype.getAll = function () {
        return this.apiService.get('degree')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["map"])(function (response) { return response.data; }))
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["map"])(function (degrees) { return degrees.map(function (degree) { return new __WEBPACK_IMPORTED_MODULE_3__models_degree__["a" /* Degree */]().deserialize(degree); }); }));
    };
    DegreeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */]])
    ], DegreeService);
    return DegreeService;
}());



/***/ }),

/***/ "./src/app/shared/services/field.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("./src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_field__ = __webpack_require__("./src/app/shared/models/field.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FieldService = (function () {
    function FieldService(apiService) {
        this.apiService = apiService;
    }
    FieldService.prototype.getAll = function () {
        return this.apiService.get('field')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (response) { return response.data; }))
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (fields) { return fields.map(function (field) { return new __WEBPACK_IMPORTED_MODULE_3__models_field__["a" /* Field */]().deserialize(field); }); }));
    };
    ;
    FieldService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]])
    ], FieldService);
    return FieldService;
}());



/***/ }),

/***/ "./src/app/shared/services/lecturer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LecturerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("./src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_lecturer__ = __webpack_require__("./src/app/shared/models/lecturer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_combineLatest__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/combineLatest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__link_service__ = __webpack_require__("./src/app/shared/services/link.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LecturerService = (function () {
    function LecturerService(apiService, linkService, snackBar) {
        this.apiService = apiService;
        this.linkService = linkService;
        this.snackBar = snackBar;
    }
    LecturerService.prototype.getAll = function () {
        return this.apiService.get('lecturer')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (response) { return response.data; }))
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (lecturers) { return lecturers.map(function (lecturer) { return new __WEBPACK_IMPORTED_MODULE_3__models_lecturer__["a" /* Lecturer */]().deserialize(lecturer); }); }));
    };
    ;
    LecturerService.prototype.getAllForSemester = function (semester) {
        return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_combineLatest__["a" /* combineLatest */])(this.getAll(), this.linkService.getAllForSemester(semester), function (lecturers, links) {
            links.forEach(function (link) {
                var lecturer = lecturers.find(function (lecturer) { return lecturer.id === link.lecturer_id; });
                if (lecturer) {
                    lecturer.addLink(link);
                    link.lecturer = lecturer;
                }
            });
            return lecturers;
        });
    };
    LecturerService.prototype.save = function (lecturer) {
        var _this = this;
        var payload = lecturer.serialize();
        var request = lecturer.id ? this.apiService.put("lecturer/" + lecturer.id, payload) : this.apiService.post('lecturer', payload);
        return request
            .do(function () {
            _this.snackBar.open("Prowadz\u0105cy \"" + lecturer.surname + " " + lecturer.name + "\" zosta\u0142 zapisany", null, { duration: 3000 });
        });
    };
    ;
    LecturerService.prototype.delete = function (lecturer) {
        var _this = this;
        if (confirm("Czy chcesz usun\u0105\u0107 prowadz\u0105cego \"" + lecturer.surname + " " + lecturer.name + "\"?")) {
            return this.apiService.delete("lecturer/" + lecturer.id)
                .do(function () {
                _this.snackBar.open("Prowadz\u0105cy \"" + lecturer.surname + " " + lecturer.name + "\" zosta\u0142 usuni\u0119ty", null, { duration: 3000 });
            });
        }
    };
    LecturerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_5__link_service__["a" /* LinkService */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["C" /* MatSnackBar */]])
    ], LecturerService);
    return LecturerService;
}());



/***/ }),

/***/ "./src/app/shared/services/link.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_link__ = __webpack_require__("./src/app/shared/models/link.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("./src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LinkService = (function () {
    function LinkService(apiService) {
        this.apiService = apiService;
    }
    LinkService.prototype.getAll = function () {
        return this.apiService.get('lecturer-subject')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (response) { return response.data; }))
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (links) { return links.map(function (link) { return new __WEBPACK_IMPORTED_MODULE_1__models_link__["a" /* Link */]().deserialize(link); }); }));
    };
    LinkService.prototype.getAllForSemester = function (semester) {
        return this.apiService.get("semester/" + semester.id + "/lecturer-subject")
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (response) { return response.data; }))
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (links) { return links.map(function (link) { return new __WEBPACK_IMPORTED_MODULE_1__models_link__["a" /* Link */]().deserialize(link); }); }));
    };
    LinkService.prototype.add = function (link, subject, lecturer) {
        return this.apiService.post('lecturer-subject', link.serialize())
            .do(function () {
            link.subject = subject;
            subject.addLink(link);
            link.lecturer = lecturer;
            lecturer.addLink(link);
        });
    };
    LinkService.prototype.update = function (link, subject, lecturer) {
        return this.apiService.put("lecturer-subject/" + link.id, link.serialize())
            .do(function () {
            subject.removeLink(link);
            lecturer.removeLink(link);
            link.subject.addLink(link);
            link.lecturer.addLink(link);
        });
    };
    LinkService.prototype.delete = function (link) {
        return this.apiService.delete("lecturer-subject/" + link.id)
            .do(function () {
            link.subject.removeLink(link);
            link.lecturer.removeLink(link);
        });
    };
    LinkService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */]])
    ], LinkService);
    return LinkService;
}());



/***/ }),

/***/ "./src/app/shared/services/loading.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingService = (function () {
    function LoadingService() {
        this.isBusy = false;
        this.stateChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"];
        this.queue = [];
    }
    LoadingService.prototype.show = function (key) {
        this.isBusy = true;
        if (key) {
            this.queue.push(key);
        }
        this.stateChange.next(true);
    };
    LoadingService.prototype.hide = function (keyToRemove) {
        this.isBusy = false;
        if (keyToRemove) {
            this.queue = this.queue.filter(function (key) { return key !== keyToRemove; });
        }
        if (!this.queue.length) {
            this.stateChange.next(false);
        }
    };
    LoadingService.prototype.getState = function () {
        return this.stateChange.asObservable();
    };
    LoadingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LoadingService);
    return LoadingService;
}());



/***/ }),

/***/ "./src/app/shared/services/semester.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SemesterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("./src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_semester__ = __webpack_require__("./src/app/shared/models/semester.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SemesterService = (function () {
    function SemesterService(apiService, snackBar) {
        this.apiService = apiService;
        this.snackBar = snackBar;
        this.selectionChange = new __WEBPACK_IMPORTED_MODULE_5_rxjs__["BehaviorSubject"](null);
    }
    SemesterService.prototype.getAll = function () {
        return this.apiService.get('semester')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (response) { return response.data; }))
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (semesters) { return semesters.map(function (semester) { return new __WEBPACK_IMPORTED_MODULE_2__models_semester__["a" /* Semester */]().deserialize(semester); }); }));
    };
    SemesterService.prototype.save = function (semester) {
        var _this = this;
        var payload = semester.serialize();
        var request;
        if (payload.id) {
            request = this.apiService.put("semester/" + semester.id, payload);
        }
        else if (payload.template_id) {
            request = this.apiService.post('semester/copy', payload);
        }
        else {
            request = this.apiService.post('semester', payload);
        }
        return request
            .do(function () {
            _this.snackBar.open("Semester \"" + semester.name + " " + semester.year + "\" zosta\u0142 zapisany", null, { duration: 3000 });
        });
    };
    ;
    SemesterService.prototype.print = function (semester) {
        this.apiService.download("semester/" + semester.id + "/pdf-view");
    };
    SemesterService.prototype.setSelected = function (semester) {
        this.selectionChange.next(semester);
    };
    SemesterService.prototype.getSelected = function () {
        return this.selectionChange.asObservable();
    };
    SemesterService.prototype.delete = function (semester) {
        var _this = this;
        if (confirm("Czy chcesz usun\u0105\u0107 semestr \"" + semester.year + " " + semester.name + "\"?")) {
            return this.apiService.delete("semester/" + semester.id)
                .do(function () {
                _this.snackBar.open("Semestr \"" + semester.year + " " + semester.name + "\" zosta\u0142 usuni\u0119ty", null, { duration: 3000 });
            });
        }
    };
    SemesterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["C" /* MatSnackBar */]])
    ], SemesterService);
    return SemesterService;
}());



/***/ }),

/***/ "./src/app/shared/services/subject.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("./src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_subject__ = __webpack_require__("./src/app/shared/models/subject.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__link_service__ = __webpack_require__("./src/app/shared/services/link.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_combineLatest__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/combineLatest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SubjectService = (function () {
    function SubjectService(apiService, linkService, snackBar) {
        this.apiService = apiService;
        this.linkService = linkService;
        this.snackBar = snackBar;
    }
    SubjectService.prototype.getAll = function () {
        return this.apiService.get('subject')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (response) { return response.data; }))
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (subjects) { return subjects.map(function (subject) { return new __WEBPACK_IMPORTED_MODULE_4__models_subject__["a" /* Subject */]().deserialize(subject); }); }));
    };
    ;
    SubjectService.prototype.getAllForSemester = function (semester) {
        return this.getAll()
            .map(function (subjects) { return subjects.filter(function (subject) { return subject.semester.id === semester.id; }); });
    };
    ;
    SubjectService.prototype.getAllWithLinksForSemester = function (semester) {
        return Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_combineLatest__["a" /* combineLatest */])(this.getAllForSemester(semester), this.linkService.getAllForSemester(semester), function (subjects, links) {
            links.forEach(function (link) {
                var subject = subjects.find(function (subject) { return subject.id === link.subject_id; });
                if (subject) {
                    subject.addLink(link);
                    link.subject = subject;
                }
            });
            return subjects;
        });
    };
    ;
    SubjectService.prototype.getSubjectTypes = function () {
        var subjectTypes = [
            __WEBPACK_IMPORTED_MODULE_4__models_subject__["b" /* SubjectType */].lab,
            __WEBPACK_IMPORTED_MODULE_4__models_subject__["b" /* SubjectType */].lec
        ];
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(subjectTypes);
    };
    ;
    SubjectService.prototype.save = function (subject) {
        var _this = this;
        var payload = subject.serialize();
        var request = subject.id ? this.apiService.put("subject/" + subject.id, payload) : this.apiService.post('subject', payload);
        return request
            .do(function () {
            _this.snackBar.open("Przedmiot \"" + subject.name + "\" zosta\u0142 zapisany", null, { duration: 3000 });
        });
    };
    ;
    SubjectService.prototype.delete = function (subject) {
        var _this = this;
        if (confirm("Czy chcesz usun\u0105\u0107 przedmiot \"" + subject.name + "\"?")) {
            return this.apiService.delete("subject/" + subject.id)
                .do(function () {
                _this.snackBar.open("Przedmiot \"" + subject.name + "\" zosta\u0142 usuni\u0119ty", null, { duration: 3000 });
            });
        }
    };
    SubjectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_5__link_service__["a" /* LinkService */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["C" /* MatSnackBar */]])
    ], SubjectService);
    return SubjectService;
}());



/***/ }),

/***/ "./src/app/shared/services/title.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_title__ = __webpack_require__("./src/app/shared/models/title.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("./src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TitleService = (function () {
    function TitleService(apiService, snackBar) {
        this.apiService = apiService;
        this.snackBar = snackBar;
    }
    TitleService.prototype.getAll = function () {
        return this.apiService.get('title')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (response) { return response.data; }))
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (titles) { return titles.map(function (title) { return new __WEBPACK_IMPORTED_MODULE_1__models_title__["a" /* Title */]().deserialize(title); }); }));
    };
    ;
    TitleService.prototype.save = function (title) {
        var _this = this;
        var payload = title.serialize();
        var request = title.id ? this.apiService.put("title/" + title.id, payload) : this.apiService.post('title', payload);
        return request
            .do(function () {
            _this.snackBar.open("Tytu\u0142 \"" + title.name + "\" zosta\u0142 zapisany", null, { duration: 3000 });
        });
    };
    ;
    TitleService.prototype.delete = function (title) {
        var _this = this;
        if (confirm("Czy chcesz usun\u0105\u0107 tytu\u0142 \"" + title.name + "\"?")) {
            return this.apiService.delete("title/" + title.id)
                .do(function () {
                _this.snackBar.open("Tytu\u0142 \"" + title.name + "\" zosta\u0142 usuni\u0119ty", null, { duration: 3000 });
            });
        }
    };
    TitleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["C" /* MatSnackBar */]])
    ], TitleService);
    return TitleService;
}());



/***/ }),

/***/ "./src/app/shared/services/websocket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WebsocketService = (function () {
    function WebsocketService() {
    }
    WebsocketService.prototype.connect = function (url) {
        if (!this.subject) {
            this.subject = this.create(url);
            console.log('Successfully connected: ' + url);
        }
        return this.subject;
    };
    WebsocketService.prototype.create = function (url) {
        var ws = new WebSocket(url);
        ws.addEventListener('open', function (event) {
            ws.send(JSON.stringify({
                type: 'CLIENT'
            }));
        });
        var observable = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].create(function (emitter) {
            ws.onmessage = emitter.next.bind(emitter);
            ws.onerror = emitter.error.bind(emitter);
            ws.onclose = emitter.complete.bind(emitter);
            return ws.close.bind(ws);
        });
        var observer = {
            next: function (data) {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify(data));
                }
            }
        };
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["b" /* Subject */].create(observer, observable);
    };
    WebsocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], WebsocketService);
    return WebsocketService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_fab_speed_dial__ = __webpack_require__("./node_modules/ng2-fab-speed-dial/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_credential_service__ = __webpack_require__("./src/app/shared/services/credential.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["G" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["x" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["I" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["J" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["K" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["L" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_fab_speed_dial__["a" /* Ng2FabSpeedDialModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_credential_service__["a" /* CredentialService */]
            ],
            declarations: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["G" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["x" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["I" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["J" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["K" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["L" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_fab_speed_dial__["a" /* Ng2FabSpeedDialModule */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/subject/subject.component.css":
/***/ (function(module, exports) {

module.exports = ".element-row {\r\n    position: relative;\r\n    cursor: pointer;\r\n}\r\n\r\n.element-row:not(.expanded):hover {\r\nbackground: #f5f5f5;\r\n}\r\n\r\n.element-row.expanded {\r\nborder-bottom-color: transparent;\r\n}\r\n\r\n.fab {\r\n    position: fixed;\r\n    bottom: 1rem;\r\n    right: calc(1rem);\r\n    z-index: 100;\r\n}"

/***/ }),

/***/ "./src/app/subject/subject.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\">\r\n  Semestr\r\n  <mat-form-field>\r\n    <mat-select [(ngModel)]=\"selectedSemester\" (change)=\"setSemester(selectedSemester)\" [compareWith]=\"compareSemesters\">\r\n      <mat-option *ngFor=\"let semester of semesters\" [value]=\"semester\">\r\n        {{ semester.year }} - {{ semester.name }}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n</div>\r\n<div class=\"mat-elevation-z8\">\r\n  <mat-table #table [dataSource]=\"dataSource\">\r\n    \r\n    <ng-container matColumnDef=\"name\">\r\n      <mat-header-cell *matHeaderCellDef> Przedmiot </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n    </ng-container>\r\n    \r\n    <ng-container matColumnDef=\"type\">\r\n      <mat-header-cell *matHeaderCellDef> Rodzaj </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.type}} </mat-cell>\r\n    </ng-container>\r\n    \r\n    <ng-container matColumnDef=\"field\">\r\n      <mat-header-cell *matHeaderCellDef> Kierunek </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.field? element.field.name+\" / \"+element.field.type : \"\"}}</mat-cell>\r\n    </ng-container>\r\n    \r\n    <ng-container matColumnDef=\"degree\">\r\n      <mat-header-cell *matHeaderCellDef> Tryb studiów </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.degree? element.degree.name+\" / \"+element.degree.alias : \"\"}} </mat-cell>\r\n    </ng-container>\r\n    \r\n    <ng-container matColumnDef=\"semesterNumber\">\r\n      <mat-header-cell *matHeaderCellDef> Semestr </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.semesterNumber}} </mat-cell>\r\n    </ng-container>\r\n    \r\n    <ng-container matColumnDef=\"hours\">\r\n      <mat-header-cell *matHeaderCellDef> Liczba godzin </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.hours}} </mat-cell>\r\n    </ng-container>\r\n    \r\n    <ng-container matColumnDef=\"options\">\r\n      <mat-header-cell *matHeaderCellDef> Opcje </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element; let i = index\">\r\n        <button mat-button (click)=\"editSubject(element, $event, i)\">Zmień</button>\r\n        <button mat-button (click)=\"deleteSubject(element)\">Usuń</button>\r\n      </mat-cell>\r\n    </ng-container>\r\n    \r\n    <ng-container matColumnDef=\"nameEdit\">\r\n      <mat-cell *matCellDef=\"let element\">\r\n        <mat-form-field>\r\n          <input matInput [(ngModel)]=\"element.name\"/>\r\n        </mat-form-field>\r\n      </mat-cell>\r\n    </ng-container>\r\n    \r\n    <ng-container matColumnDef=\"typeEdit\">\r\n      <mat-cell *matCellDef=\"let element\">\r\n        <mat-form-field>\r\n          <mat-select [(ngModel)]=\"element.type\">\r\n            <mat-option *ngFor=\"let type of subjectTypes\" [value]=\"type\">\r\n              {{ type }}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </mat-cell>\r\n    </ng-container>\r\n    \r\n    <ng-container matColumnDef=\"fieldEdit\">\r\n      <mat-cell *matCellDef=\"let element\">\r\n        <mat-form-field>\r\n          <mat-select [(ngModel)]=\"element.field\" [compareWith]=\"compareFields\">\r\n            <mat-option *ngFor=\"let field of fields\" [value]=\"field\">\r\n              {{ field.name }} - {{field.type}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </mat-cell>\r\n    </ng-container>\r\n    \r\n    <ng-container matColumnDef=\"degreeEdit\">\r\n      <mat-cell *matCellDef=\"let element\">\r\n        <mat-form-field>\r\n          <mat-select [(ngModel)]=\"element.degree\" [compareWith]=\"compareDegrees\">\r\n            <mat-option *ngFor=\"let degree of degrees\" [value]=\"degree\">\r\n              {{ degree.alias }}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </mat-cell>\r\n    </ng-container>\r\n    \r\n    <ng-container matColumnDef=\"semesterNumberEdit\">\r\n      <mat-cell *matCellDef=\"let element\">\r\n        <mat-form-field>\r\n          <input matInput type=\"number\" [(ngModel)]=\"element.semesterNumber\"/>\r\n        </mat-form-field>\r\n      </mat-cell>\r\n    </ng-container>\r\n    \r\n    <ng-container matColumnDef=\"hoursEdit\">\r\n      <mat-cell *matCellDef=\"let element\">\r\n        <mat-form-field>\r\n          <input matInput type=\"number\" [(ngModel)]=\"element.hours\"/>\r\n        </mat-form-field>\r\n      </mat-cell>\r\n    </ng-container>\r\n    \r\n    <ng-container matColumnDef=\"optionsEdit\">\r\n      <mat-cell *matCellDef=\"let element; let i = index\">\r\n        <button mat-button (click)=\"saveSubject(element, $event, i)\">Zapisz</button>\r\n        <button mat-button (click)=\"cancelSubject(element)\" *ngIf=\"!element.id\">Anuluj</button>\r\n      </mat-cell>\r\n    </ng-container>\r\n    \r\n    <!-- <ng-container matColumnDef=\"expandedDetail\">\r\n      <mat-cell *matCellDef=\"let detail\"> \r\n        <form class=\"example-form\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"Company (disabled)\" disabled value=\"Google\">\r\n          </mat-form-field>\r\n          \r\n          <table class=\"example-full-width\" cellspacing=\"0\"><tr>\r\n            <td><mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"First name\" name=\"name\" [(ngModel)]=detail.name>\r\n            </mat-form-field></td>\r\n            <td><mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"Long Last Name That Will Be Truncated\">\r\n            </mat-form-field></td>\r\n          </tr></table>\r\n          \r\n          <p>\r\n            <mat-form-field class=\"example-full-width\">\r\n              <textarea matInput placeholder=\"Address\">1600 Amphitheatre Pkwy</textarea>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"example-full-width\">\r\n              <textarea matInput placeholder=\"Address 2\"></textarea>\r\n            </mat-form-field>\r\n          </p>\r\n          \r\n          <table class=\"example-full-width\" cellspacing=\"0\"><tr>\r\n            <td><mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"City\">\r\n            </mat-form-field></td>\r\n            <td><mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"State\">\r\n            </mat-form-field></td>\r\n            <td><mat-form-field class=\"example-full-width\">\r\n              <input matInput #postalCode maxlength=\"5\" placeholder=\"Postal Code\" value=\"94043\">\r\n              <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\r\n            </mat-form-field></td>\r\n          </tr></table>\r\n        </form>\r\n      </mat-cell>\r\n    </ng-container> -->\r\n    \r\n    <mat-header-row *matHeaderRowDef=\"['name', 'type', 'field', 'degree', 'semesterNumber', 'hours', 'options']\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: ['name', 'type', 'field', 'degree', 'semesterNumber', 'hours', 'options'];\"\r\n    matRipple \r\n    class=\"element-row\"  \r\n    [class.expanded]=\"expandedElement === row\" \r\n    (click)=\"expandedElement = expandedElement === row? null : row\"\r\n    style=\"overflow: hidden\">\r\n  </mat-row>\r\n  <mat-row *matRowDef=\"let row; columns: ['nameEdit', 'typeEdit', 'fieldEdit', 'degreeEdit', 'semesterNumberEdit', 'hoursEdit', 'optionsEdit']; when: isEditableRow\"></mat-row>\r\n  <!-- <mat-row *matRowDef=\"let row; columns: ['expandedDetail']; when: isExpansionDetailRow\"\r\n    [@detailExpand]=\"row.element === expandedElement ? 'expanded' : 'collapsed'\"\r\n    style=\"overflow: hidden\"> \r\n  </mat-row> -->\r\n</mat-table>\r\n<button *ngIf=\"selectedSemester\" class=\"fab\" type=\"button\" mat-fab matTooltip=\"Dodaj przedmiot\" matTooltipPosition=\"left\" (click)=\"addSubject()\"><mat-icon>add</mat-icon></button>\r\n</div>"

/***/ }),

/***/ "./src/app/subject/subject.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubjectComponent; });
/* unused harmony export ExampleDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__ = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_subject_service__ = __webpack_require__("./src/app/shared/services/subject.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_models_subject__ = __webpack_require__("./src/app/shared/models/subject.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_degree_service__ = __webpack_require__("./src/app/shared/services/degree.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_semester_service__ = __webpack_require__("./src/app/shared/services/semester.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_field_service__ = __webpack_require__("./src/app/shared/services/field.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SubjectComponent = (function () {
    function SubjectComponent(degreeService, subjectService, semesterService, fieldService) {
        var _this = this;
        this.degreeService = degreeService;
        this.subjectService = subjectService;
        this.semesterService = semesterService;
        this.fieldService = fieldService;
        this.dataChange = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Subject"]();
        this.dataSource = new ExampleDataSource(this.dataChange);
        this.isExpansionDetailRow = function (_, row) { return row.hasOwnProperty('detailRow'); };
        this.isEditableRow = function (_, row) {
            return row === _this.editedRow;
        };
    }
    SubjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.semesterService.getAll()
            .subscribe(function (semesters) { return _this.semesters = semesters; });
        this.currentSemesterSubscription = this.semesterService.getSelected()
            .subscribe(function (semester) {
            if (semester) {
                _this.selectedSemester = semester;
                _this.subjectService.getAllForSemester(semester)
                    .subscribe(function (subjects) {
                    _this.subjects = subjects;
                    _this.dataChange.next(subjects);
                });
            }
        });
        this.subjectService.getSubjectTypes()
            .subscribe(function (subjectTypes) { return _this.subjectTypes = subjectTypes; });
        this.degreeService.getAll()
            .subscribe(function (degrees) { return _this.degrees = degrees; });
        this.fieldService.getAll()
            .subscribe(function (fields) { return _this.fields = fields; });
    };
    SubjectComponent.prototype.ngOnDestroy = function () {
        this.currentSemesterSubscription.unsubscribe();
    };
    SubjectComponent.prototype.addSubject = function () {
        var semester = new __WEBPACK_IMPORTED_MODULE_5__shared_models_subject__["a" /* Subject */]();
        semester.semester = this.selectedSemester;
        var lastRow = this.editedRow;
        var lastIndex = this.lastIndex;
        this.lastIndex = 0;
        this.editedRow = semester;
        this.subjects.unshift(semester);
        this.refreshElementPredicate(0, semester);
        if (lastRow) {
            this.refreshElementPredicate(lastIndex + 1, lastRow);
        }
    };
    SubjectComponent.prototype.editSubject = function (element, event, index) {
        var lastElement = this.editedRow;
        var lastIndex = this.lastIndex;
        this.editedRow = element;
        this.lastIndex = index;
        this.refreshElementPredicate(index, element);
        if (lastElement) {
            this.subjectService.save(lastElement).toPromise();
            this.refreshElementPredicate(lastIndex, lastElement);
        }
        event.stopPropagation();
    };
    SubjectComponent.prototype.saveSubject = function (element, event, index) {
        this.editedRow = null;
        this.lastIndex = null;
        this.refreshElementPredicate(index, element);
        this.subjectService.save(element)
            .subscribe(function (response) {
            element.deserialize(response.data);
        });
        event.stopPropagation();
    };
    SubjectComponent.prototype.cancelSubject = function (subjectToRemove) {
        this.subjects = this.subjects.filter(function (subject) { return subject !== subjectToRemove; });
        this.lastIndex = null;
        this.editedRow = null;
        this.dataChange.next(this.subjects);
    };
    SubjectComponent.prototype.deleteSubject = function (subjectToRemove) {
        var _this = this;
        var observable = this.subjectService.delete(subjectToRemove);
        if (observable) {
            observable.subscribe(function () {
                _this.subjects = _this.subjects.filter(function (subject) { return subject.id !== subjectToRemove.id; });
                _this.dataChange.next(_this.subjects);
            });
        }
    };
    SubjectComponent.prototype.setSemester = function (semester) {
        this.semesterService.setSelected(semester);
    };
    SubjectComponent.prototype.refreshElementPredicate = function (index, element) {
        this.subjects.splice(index, 1);
        this.dataChange.next(this.subjects);
        this.subjects = this.subjects.slice(0, index).concat([element]).concat(this.subjects.slice(index));
        this.dataChange.next(this.subjects);
    };
    SubjectComponent.prototype.compareSemesters = function (a, b) {
        return a.id === b.id;
    };
    SubjectComponent.prototype.compareDegrees = function (a, b) {
        return a.id === b.id;
    };
    SubjectComponent.prototype.compareFields = function (a, b) {
        return a.id === b.id;
    };
    SubjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-subject',
            template: __webpack_require__("./src/app/subject/subject.component.html"),
            styles: [__webpack_require__("./src/app/subject/subject.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* trigger */])('detailExpand', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('collapsed', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ height: '0px', minHeight: '0', visibility: 'hidden' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('expanded', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ height: '*', visibility: 'visible' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* transition */])('expanded <=> collapsed', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('.5s ease')),
                ]),
            ],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__shared_services_degree_service__["a" /* DegreeService */], __WEBPACK_IMPORTED_MODULE_4__shared_services_subject_service__["a" /* SubjectService */], __WEBPACK_IMPORTED_MODULE_7__shared_services_semester_service__["a" /* SemesterService */], __WEBPACK_IMPORTED_MODULE_8__shared_services_field_service__["a" /* FieldService */]])
    ], SubjectComponent);
    return SubjectComponent;
}());

var ExampleDataSource = (function (_super) {
    __extends(ExampleDataSource, _super);
    function ExampleDataSource(dataChange) {
        var _this = _super.call(this) || this;
        _this.dataChange = dataChange;
        return _this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ExampleDataSource.prototype.connect = function () {
        return this.dataChange;
    };
    ExampleDataSource.prototype.disconnect = function () { };
    return ExampleDataSource;
}(__WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__["n" /* DataSource */]));



/***/ }),

/***/ "./src/app/subject/subject.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubjectModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__subject_component__ = __webpack_require__("./src/app/subject/subject.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_authguard_service__ = __webpack_require__("./src/app/shared/services/authguard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var subjectrouting = __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild([
    {
        path: 'subjects',
        component: __WEBPACK_IMPORTED_MODULE_1__subject_component__["a" /* SubjectComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__shared_services_authguard_service__["a" /* AuthGuardService */]]
    }
]);
var SubjectModule = (function () {
    function SubjectModule() {
    }
    SubjectModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                subjectrouting,
                __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__subject_component__["a" /* SubjectComponent */]
            ]
        })
    ], SubjectModule);
    return SubjectModule;
}());



/***/ }),

/***/ "./src/app/title/title.component.css":
/***/ (function(module, exports) {

module.exports = ".element-row {\r\n    position: relative;\r\n    cursor: pointer;\r\n}\r\n\r\n.element-row:not(.expanded):hover {\r\nbackground: #f5f5f5;\r\n}\r\n\r\n.element-row.expanded {\r\nborder-bottom-color: transparent;\r\n}\r\n\r\n.fab {\r\n    position: fixed;\r\n    bottom: 1rem;\r\n    right: calc(1rem);\r\n    z-index: 100;\r\n}\r\n\r\n.mat-cell:nth-child(1),\r\n.mat-header-cell:nth-child(1) {\r\n    -webkit-box-flex: 2;\r\n        -ms-flex: 2;\r\n            flex: 2;\r\n}"

/***/ }),

/***/ "./src/app/title/title.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\r\n  <mat-table #table [dataSource]=\"dataSource\">\r\n    \r\n    <ng-container matColumnDef=\"name\">\r\n      <mat-header-cell *matHeaderCellDef> Tytuł </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n    </ng-container>\r\n    \r\n    <ng-container matColumnDef=\"short_name\">\r\n      <mat-header-cell *matHeaderCellDef> Skrót </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.short_name}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"lab_permission\">\r\n      <mat-header-cell *matHeaderCellDef> Lab. </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.lab_permission? \"Tak\": \"Nie\"}} </mat-cell>\r\n    </ng-container>\r\n    \r\n    <ng-container matColumnDef=\"lec_permission\">\r\n      <mat-header-cell *matHeaderCellDef> Wykł. </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.lec_permission? \"Tak\": \"Nie\"}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"exe_permission\">\r\n      <mat-header-cell *matHeaderCellDef> Ćw. </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.exe_permission? \"Tak\": \"Nie\"}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"sem_permission\">\r\n      <mat-header-cell *matHeaderCellDef> Sem. </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.sem_permission? \"Tak\": \"Nie\"}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"pro_permission\">\r\n      <mat-header-cell *matHeaderCellDef> Proj. </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.pro_permission? \"Tak\": \"Nie\"}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"min_hours\">\r\n      <mat-header-cell *matHeaderCellDef> Min. </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.min_hours}}h </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"max_hours\">\r\n      <mat-header-cell *matHeaderCellDef> Max. </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.max_hours}}h </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"warning_percent\">\r\n      <mat-header-cell *matHeaderCellDef> Ostrzeżenie </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.warning_percent}}% </mat-cell>\r\n    </ng-container>\r\n    \r\n    <ng-container matColumnDef=\"options\">\r\n      <mat-header-cell *matHeaderCellDef> Opcje </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element; let i = index\">\r\n        <button mat-button (click)=\"editTitle(element, $event, i)\">Zmień</button>\r\n        <button mat-button (click)=\"deleteTitle(element)\">Usuń</button>\r\n      </mat-cell>\r\n    </ng-container>\r\n    \r\n    <ng-container matColumnDef=\"nameEdit\">\r\n      <mat-cell *matCellDef=\"let element\">\r\n        <mat-form-field>\r\n          <input matInput [(ngModel)]=\"element.name\"/>\r\n        </mat-form-field>\r\n      </mat-cell>\r\n    </ng-container>\r\n    \r\n    <ng-container matColumnDef=\"short_nameEdit\">\r\n      <mat-cell *matCellDef=\"let element\">\r\n        <mat-form-field>\r\n          <input matInput [(ngModel)]=\"element.short_name\"/>\r\n        </mat-form-field>\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"lab_permissionEdit\">\r\n      <mat-cell *matCellDef=\"let element\">\r\n        <mat-checkbox [(ngModel)]=\"element.lab_permission\"></mat-checkbox>\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"lec_permissionEdit\">\r\n      <mat-cell *matCellDef=\"let element\">\r\n        <mat-checkbox [(ngModel)]=\"element.lec_permission\"></mat-checkbox>\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"exe_permissionEdit\">\r\n      <mat-cell *matCellDef=\"let element\">\r\n        <mat-checkbox [(ngModel)]=\"element.exe_permission\"></mat-checkbox>\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"sem_permissionEdit\">\r\n      <mat-cell *matCellDef=\"let element\">\r\n        <mat-checkbox [(ngModel)]=\"element.sem_permission\"></mat-checkbox>\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"pro_permissionEdit\">\r\n      <mat-cell *matCellDef=\"let element\">\r\n        <mat-checkbox [(ngModel)]=\"element.pro_permission\"></mat-checkbox>\r\n      </mat-cell>\r\n    </ng-container>\r\n    \r\n    <ng-container matColumnDef=\"optionsEdit\">\r\n      <mat-cell *matCellDef=\"let element; let i = index\">\r\n        <button mat-button (click)=\"saveTitle(element, $event, i)\">Zapisz</button>\r\n        <button mat-button (click)=\"cancelTitle(element)\" *ngIf=\"!element.id\">Anuluj</button>\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"min_hoursEdit\">\r\n      <mat-cell *matCellDef=\"let element\">\r\n        <mat-form-field>\r\n          <input matInput type=\"number\" [(ngModel)]=\"element.min_hours\"/>\r\n        </mat-form-field>\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"max_hoursEdit\">\r\n      <mat-cell *matCellDef=\"let element\">\r\n        <mat-form-field>\r\n          <input matInput type=\"number\" [(ngModel)]=\"element.max_hours\"/>\r\n        </mat-form-field>\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"warning_percentEdit\">\r\n      <mat-cell *matCellDef=\"let element\">\r\n        <mat-form-field>\r\n          <input matInput type=\"number\" [(ngModel)]=\"element.warning_percent\"/>\r\n        </mat-form-field>\r\n      </mat-cell>\r\n    </ng-container>\r\n    \r\n    <mat-header-row *matHeaderRowDef=\"['name', 'short_name', 'lab_permission', 'lec_permission', 'exe_permission', 'sem_permission', 'pro_permission', 'min_hours', 'max_hours', 'warning_percent', 'options']\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: ['name', 'short_name', 'lab_permission', 'lec_permission', 'exe_permission', 'sem_permission', 'pro_permission', 'min_hours', 'max_hours', 'warning_percent', 'options'];\"\r\n    matRipple \r\n    class=\"element-row\"  \r\n    [class.expanded]=\"expandedElement === row\" \r\n    (click)=\"expandedElement = expandedElement === row? null : row\"\r\n    style=\"overflow: hidden\">\r\n  </mat-row>\r\n  <mat-row *matRowDef=\"let row; columns: ['nameEdit', 'short_nameEdit', 'lab_permissionEdit', 'lec_permissionEdit', 'exe_permissionEdit', 'sem_permissionEdit', 'pro_permissionEdit', 'min_hoursEdit', 'max_hoursEdit', 'warning_percentEdit', 'optionsEdit']; when: isEditableRow\"></mat-row>\r\n</mat-table>\r\n<button class=\"fab\" type=\"button\" mat-fab matTooltip=\"Dodaj przedmiot\" matTooltipPosition=\"left\" (click)=\"addTitle()\"><mat-icon>add</mat-icon></button>\r\n</div>"

/***/ }),

/***/ "./src/app/title/title.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_title__ = __webpack_require__("./src/app/shared/models/title.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_title_service__ = __webpack_require__("./src/app/shared/services/title.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_table__ = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TitleComponent = (function () {
    function TitleComponent(titleService) {
        var _this = this;
        this.titleService = titleService;
        this.dataChange = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        this.dataSource = new TitleDataSource(this.dataChange);
        this.isEditableRow = function (_, row) {
            return row === _this.editedRow;
        };
    }
    TitleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.getAll()
            .subscribe(function (titles) {
            _this.titles = titles;
            _this.dataChange.next(titles);
        });
    };
    TitleComponent.prototype.addTitle = function () {
        var row = new __WEBPACK_IMPORTED_MODULE_1__shared_models_title__["a" /* Title */]();
        var lastRow = this.editedRow;
        var lastIndex = this.lastIndex;
        this.lastIndex = 0;
        this.editedRow = row;
        this.titles.unshift(row);
        this.refreshElementPredicate(0, row);
        if (lastRow) {
            this.refreshElementPredicate(lastIndex + 1, lastRow);
        }
    };
    TitleComponent.prototype.editTitle = function (element, event, index) {
        var lastElement = this.editedRow;
        var lastIndex = this.lastIndex;
        this.editedRow = element;
        this.lastIndex = index;
        this.refreshElementPredicate(index, element);
        if (lastElement) {
            this.titleService.save(lastElement).toPromise();
            this.refreshElementPredicate(lastIndex, lastElement);
        }
        event.stopPropagation();
    };
    TitleComponent.prototype.saveTitle = function (element, event, index) {
        this.editedRow = null;
        this.lastIndex = null;
        this.refreshElementPredicate(index, element);
        this.titleService.save(element)
            .subscribe(function (response) {
            element.deserialize(response.data);
        });
        event.stopPropagation();
    };
    TitleComponent.prototype.cancelTitle = function (titleToRemove) {
        this.titles = this.titles.filter(function (title) { return title !== titleToRemove; });
        this.lastIndex = null;
        this.editedRow = null;
        this.dataChange.next(this.titles);
    };
    TitleComponent.prototype.deleteTitle = function (titleToRemove) {
        var _this = this;
        var observable = this.titleService.delete(titleToRemove);
        if (observable) {
            observable.subscribe(function () {
                _this.titles = _this.titles.filter(function (title) { return title.id !== titleToRemove.id; });
                _this.dataChange.next(_this.titles);
            });
        }
    };
    TitleComponent.prototype.refreshElementPredicate = function (index, element) {
        this.titles.splice(index, 1);
        this.dataChange.next(this.titles);
        this.titles = this.titles.slice(0, index).concat([element]).concat(this.titles.slice(index));
        this.dataChange.next(this.titles);
    };
    TitleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-title',
            template: __webpack_require__("./src/app/title/title.component.html"),
            styles: [__webpack_require__("./src/app/title/title.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_title_service__["a" /* TitleService */]])
    ], TitleComponent);
    return TitleComponent;
}());

var TitleDataSource = (function (_super) {
    __extends(TitleDataSource, _super);
    function TitleDataSource(dataChange) {
        var _this = _super.call(this) || this;
        _this.dataChange = dataChange;
        return _this;
    }
    TitleDataSource.prototype.connect = function () {
        return this.dataChange;
    };
    TitleDataSource.prototype.disconnect = function () { };
    return TitleDataSource;
}(__WEBPACK_IMPORTED_MODULE_4__angular_cdk_table__["n" /* DataSource */]));


/***/ }),

/***/ "./src/app/title/title.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__title_component__ = __webpack_require__("./src/app/title/title.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_authguard_service__ = __webpack_require__("./src/app/shared/services/authguard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var titleRouting = __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild([
    {
        path: 'titles',
        component: __WEBPACK_IMPORTED_MODULE_1__title_component__["a" /* TitleComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__shared_services_authguard_service__["a" /* AuthGuardService */]]
    }
]);
var TitleModule = (function () {
    function TitleModule() {
    }
    TitleModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                titleRouting,
                __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__title_component__["a" /* TitleComponent */]]
        })
    ], TitleModule);
    return TitleModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
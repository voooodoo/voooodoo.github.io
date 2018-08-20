(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav\">\r\n  <ul class=\"nav-list\">\r\n    <li class=\"nav-list__item\">\r\n      <a href=\"#\" class=\"logo\">\r\n        <img class=\"logo__img\" src=\"assets/logo.png\" alt=\"logo\">\r\n      </a>\r\n    </li>\r\n    <li class=\"nav-list__item\">\r\n      <a (click)=\"openForm()\" class=\"nav-list__link\">Registration Form</a>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n<app-form *ngIf=\"isOpenForm\" (message)=\"onChanged($event)\"></app-form>\r\n<div *ngIf=\"isOpenPopup\"class=\"pop-up\">\r\n  <h2>\r\n    Thanks you for registering the {{message.name}}\r\n    <span *ngIf=\"message.city\">from the city {{message.city}}</span>.\r\n  </h2>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        this.isOpenForm = false;
        this.isOpenPopup = false;
    };
    AppComponent.prototype.openForm = function () {
        this.isOpenForm = this.isOpenForm ? false : true;
        this.isOpenPopup = false;
    };
    AppComponent.prototype.onChanged = function (message) {
        this.message = message;
        this.isOpenForm = false;
        this.isOpenPopup = true;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _form_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/form/form.component.html":
/*!******************************************!*\
  !*** ./src/app/form/form.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <h1>Registration Form</h1>\r\n    <form class=\"form\" [formGroup] = \"form\" (ngSubmit)=\"onSubmit(form)\">\r\n\r\n      <div class=\"form__group\">\r\n        <label class=\"form__label\" for=\"name\">Name</label>\r\n        <input type=\"text\" class=\"form__control\" [ngClass]=\"{'form__has-error':form.get('name').invalid&&form.get('name').touched}\" id=\"name\" formControlName=\"name\">\r\n        <small *ngIf=\"form.get('name').invalid&&form.get('name').touched\" class=\"form__error\">This is a required field</small>\r\n      </div>\r\n\r\n      <div class=\"form__group\">\r\n        <label class=\"form__label\" for=\"email\">Email</label>\r\n        <input type=\"email\" class=\"form__control\" [ngClass]=\"{'form__has-error':form.get('email').invalid&&form.get('email').touched}\" id=\"email\" formControlName=\"email\" >\r\n        <small *ngIf=\"form.get('email').invalid&&form.get('email').touched\" class=\"form__error\">\r\n          <span *ngIf=\"form.get('email').errors['required']&&form.get('email').touched\" >This is a required field</span>\r\n          <span *ngIf=\"form.get('email').errors['email']&&form.get('email').touched\" class=\"form__error\">It shoud be an email</span>\r\n        </small>\r\n        \r\n      </div>\r\n\r\n      <div class=\"form__group\">\r\n        <label class=\"form__label\" for=\"selectCity\">Select City</label>\r\n        <select id=\"selectCity\" class=\"form__control\" formControlName=\"selectCity\">\r\n          <option value=\"Kyiv\">Kyiv</option>\r\n          <option value=\"Kharkiv\">Kharkiv</option>\r\n          <option value=\"Lviv\">Lviv</option>\r\n          <option value=\"Dnipro\">Dnipro</option>\r\n          <option value=\"Ternopil\">Ternopil</option>\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\"form__group\">\r\n        <label class=\"form__label\" for=\"password\">Password</label>\r\n        <input type=\"password\" class=\"form__control\" [ngClass]=\"{'form__has-error':form.get('password').invalid&&form.get('password').touched}\" id=\"password\" formControlName=\"password\">\r\n        <small *ngIf=\"form.get('password').invalid&&form.get('password').touched\" class=\"form__error\">\r\n            <span *ngIf=\"form.get('password').errors['required']&&form.get('password').touched\" >This is a required field.</span>\r\n            <span *ngIf=\"form.get('password').errors['minlength']&&form.get('password').touched\">Password should contain 6 characters.</span>\r\n        </small>\r\n      </div>\r\n      \r\n      <div class=\"form__group\">\r\n        <label class=\"form__label\" for=\"confirmPassword\">Confirm Password</label>\r\n        <input type=\"password\" class=\"form__control\" [ngClass]=\"{'form__has-error':form.get('confirmPassword').invalid&&form.get('confirmPassword').touched}\" id=\"confirmPassword\" formControlName=\"confirmPassword\">\r\n        <small *ngIf=\"form.get('confirmPassword').invalid&&form.get('confirmPassword').errors['required']&&form.get('confirmPassword').touched\" class=\"form__error\" >This is a required field. </small>\r\n        <small *ngIf=\"form.get('confirmPassword').touched&&form.get('password').touched&&form.errors&&form.errors['confirm']\" class=\"form__error\">Password does not match.</small>\r\n  \r\n      </div>\r\n\r\n      <div class=\"form__group\">\r\n        <button type=\"submit\" class=\"form__submit\" [disabled]=\"form.invalid\">\r\n          Submit\r\n        </button>\r\n      </div>\r\n    </form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/form/form.component.ts":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormComponent = /** @class */ (function () {
    function FormComponent(fb) {
        this.fb = fb;
        this.message = {
            name: '',
            city: ''
        };
        this.messageEmmiter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FormComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            selectCity: [''],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        }, { validator: this.passwordConfirming });
    };
    FormComponent.prototype.passwordConfirming = function (c) {
        if (c.controls.password.value !== c.controls.confirmPassword.value) {
            return { confirm: true };
        }
    };
    FormComponent.prototype.onSubmit = function (form) {
        this.message.name = this.form.get('name').value;
        this.message.city = this.form.get('selectCity').value;
        this.messageEmmiter.emit(this.message);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('message'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FormComponent.prototype, "messageEmmiter", void 0);
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/form/form.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\top3\Desktop\project\homeWork\testForm\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
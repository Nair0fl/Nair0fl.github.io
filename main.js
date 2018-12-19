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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* entire container, keeps perspective */\r\n.flip-container {\r\n    -webkit-perspective: 1000;\r\n    background: #ccc;\r\n    margin: 100px auto;\r\n  }\r\n/* flip the pane when clicked */\r\n.flip-container:hover .flipper, .flip-container.hover .flipper {\r\n    -webkit-transform: rotateY(180deg);\r\n  }\r\n.flip-container, .front, .back {\r\n      width: 320px;\r\n      height: 480px;\r\n  }\r\n/* flip speed goes here */\r\n.flipper {\r\n      -webkit-transition: 0.6s;\r\n      -webkit-transform-style: preserve-3d;\r\n      position: relative;\r\n  }\r\n/* hide back of pane during swap */\r\n.front, .back {\r\n      -webkit-backface-visibility: hidden;\r\n      position: absolute;\r\n      top: 0;\r\n      left: 0;\r\n  }\r\n/* front pane, placed above back */\r\n.front {\r\n    z-index: 2;\r\n    background: yellow;\r\n  }\r\n/* back, initially hidden pane */\r\n.back {\r\n    -webkit-transform: rotateY(180deg);\r\n    background: brown;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUNBQXlDO0FBQ3pDO0lBQ0ksMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixtQkFBbUI7R0FDcEI7QUFFRCxnQ0FBZ0M7QUFDaEM7SUFDRSxtQ0FBbUM7R0FDcEM7QUFFRDtNQUNJLGFBQWE7TUFDYixjQUFjO0dBQ2pCO0FBRUQsMEJBQTBCO0FBQzFCO01BQ0kseUJBQXlCO01BQ3pCLHFDQUFxQztNQUNyQyxtQkFBbUI7R0FDdEI7QUFFRCxtQ0FBbUM7QUFDbkM7TUFDSSxvQ0FBb0M7TUFDcEMsbUJBQW1CO01BQ25CLE9BQU87TUFDUCxRQUFRO0dBQ1g7QUFFRCxtQ0FBbUM7QUFDbkM7SUFDRSxXQUFXO0lBQ1gsbUJBQW1CO0dBQ3BCO0FBRUQsaUNBQWlDO0FBQ2pDO0lBQ0UsbUNBQW1DO0lBQ25DLGtCQUFrQjtHQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZW50aXJlIGNvbnRhaW5lciwga2VlcHMgcGVyc3BlY3RpdmUgKi9cclxuLmZsaXAtY29udGFpbmVyIHtcclxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEwMDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gICAgbWFyZ2luOiAxMDBweCBhdXRvO1xyXG4gIH1cclxuICBcclxuICAvKiBmbGlwIHRoZSBwYW5lIHdoZW4gY2xpY2tlZCAqL1xyXG4gIC5mbGlwLWNvbnRhaW5lcjpob3ZlciAuZmxpcHBlciwgLmZsaXAtY29udGFpbmVyLmhvdmVyIC5mbGlwcGVyIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgfVxyXG4gIFxyXG4gIC5mbGlwLWNvbnRhaW5lciwgLmZyb250LCAuYmFjayB7XHJcbiAgICAgIHdpZHRoOiAzMjBweDtcclxuICAgICAgaGVpZ2h0OiA0ODBweDtcclxuICB9XHJcbiAgXHJcbiAgLyogZmxpcCBzcGVlZCBnb2VzIGhlcmUgKi9cclxuICAuZmxpcHBlciB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC42cztcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIGhpZGUgYmFjayBvZiBwYW5lIGR1cmluZyBzd2FwICovXHJcbiAgLmZyb250LCAuYmFjayB7XHJcbiAgICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICB9XHJcbiAgXHJcbiAgLyogZnJvbnQgcGFuZSwgcGxhY2VkIGFib3ZlIGJhY2sgKi9cclxuICAuZnJvbnQge1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGJhY2tncm91bmQ6IHllbGxvdztcclxuICB9XHJcbiAgXHJcbiAgLyogYmFjaywgaW5pdGlhbGx5IGhpZGRlbiBwYW5lICovXHJcbiAgLmJhY2sge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICAgIGJhY2tncm91bmQ6IGJyb3duO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<sweetWord></sweetWord>\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sweetWord_sweetWord_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sweetWord/sweetWord.component */ "./src/app/sweetWord/sweetWord.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _sweetWord_sweetWord_component__WEBPACK_IMPORTED_MODULE_5__["SweetWordComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/sweetWord/sweetWord.component.css":
/*!***************************************************!*\
  !*** ./src/app/sweetWord/sweetWord.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* entire container, keeps perspective */\r\n.flip-container {\r\n    -webkit-perspective: 1000;\r\n    background: #ccc;\r\n    margin: 100px auto;\r\n  }\r\n/* flip the pane when clicked */\r\n.flip-container:hover .flipper, .flip-container.hover .flipper {\r\n    -webkit-transform: rotateY(180deg);\r\n  }\r\n.flip-container, .front, .back {\r\n      width: 320px;\r\n      height: 480px;\r\n  }\r\n/* flip speed goes here */\r\n.flipper {\r\n      -webkit-transition: 0.6s;\r\n      -webkit-transform-style: preserve-3d;\r\n      position: relative;\r\n  }\r\n/* hide back of pane during swap */\r\n.front, .back {\r\n      -webkit-backface-visibility: hidden;\r\n      position: absolute;\r\n      top: 0;\r\n      left: 0;\r\n  }\r\n/* front pane, placed above back */\r\n.front {\r\n    z-index: 2;\r\n    background: yellow;\r\n  }\r\n/* back, initially hidden pane */\r\n.back {\r\n    -webkit-transform: rotateY(180deg);\r\n    background: brown;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3dlZXRXb3JkL3N3ZWV0V29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlDQUF5QztBQUN6QztJQUNJLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsbUJBQW1CO0dBQ3BCO0FBRUQsZ0NBQWdDO0FBQ2hDO0lBQ0UsbUNBQW1DO0dBQ3BDO0FBRUQ7TUFDSSxhQUFhO01BQ2IsY0FBYztHQUNqQjtBQUVELDBCQUEwQjtBQUMxQjtNQUNJLHlCQUF5QjtNQUN6QixxQ0FBcUM7TUFDckMsbUJBQW1CO0dBQ3RCO0FBRUQsbUNBQW1DO0FBQ25DO01BQ0ksb0NBQW9DO01BQ3BDLG1CQUFtQjtNQUNuQixPQUFPO01BQ1AsUUFBUTtHQUNYO0FBRUQsbUNBQW1DO0FBQ25DO0lBQ0UsV0FBVztJQUNYLG1CQUFtQjtHQUNwQjtBQUVELGlDQUFpQztBQUNqQztJQUNFLG1DQUFtQztJQUNuQyxrQkFBa0I7R0FDbkIiLCJmaWxlIjoic3JjL2FwcC9zd2VldFdvcmQvc3dlZXRXb3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlbnRpcmUgY29udGFpbmVyLCBrZWVwcyBwZXJzcGVjdGl2ZSAqL1xyXG4uZmxpcC1jb250YWluZXIge1xyXG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTAwMDtcclxuICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgICBtYXJnaW46IDEwMHB4IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC8qIGZsaXAgdGhlIHBhbmUgd2hlbiBjbGlja2VkICovXHJcbiAgLmZsaXAtY29udGFpbmVyOmhvdmVyIC5mbGlwcGVyLCAuZmxpcC1jb250YWluZXIuaG92ZXIgLmZsaXBwZXIge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICB9XHJcbiAgXHJcbiAgLmZsaXAtY29udGFpbmVyLCAuZnJvbnQsIC5iYWNrIHtcclxuICAgICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDQ4MHB4O1xyXG4gIH1cclxuICBcclxuICAvKiBmbGlwIHNwZWVkIGdvZXMgaGVyZSAqL1xyXG4gIC5mbGlwcGVyIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjZzO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLyogaGlkZSBiYWNrIG9mIHBhbmUgZHVyaW5nIHN3YXAgKi9cclxuICAuZnJvbnQsIC5iYWNrIHtcclxuICAgICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gIH1cclxuICBcclxuICAvKiBmcm9udCBwYW5lLCBwbGFjZWQgYWJvdmUgYmFjayAqL1xyXG4gIC5mcm9udCB7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgYmFja2dyb3VuZDogeWVsbG93O1xyXG4gIH1cclxuICBcclxuICAvKiBiYWNrLCBpbml0aWFsbHkgaGlkZGVuIHBhbmUgKi9cclxuICAuYmFjayB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4gICAgYmFja2dyb3VuZDogYnJvd247XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/sweetWord/sweetWord.component.html":
/*!****************************************************!*\
  !*** ./src/app/sweetWord/sweetWord.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"flip-container\">\n\t<div class=\"flipper\">\n\t\t<div class=\"front\">\n      front of card\n\t\t</div>\n\t\t<div class=\"back\">\n      back of card\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/sweetWord/sweetWord.component.ts":
/*!**************************************************!*\
  !*** ./src/app/sweetWord/sweetWord.component.ts ***!
  \**************************************************/
/*! exports provided: SweetWordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SweetWordComponent", function() { return SweetWordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SweetWordComponent = /** @class */ (function () {
    function SweetWordComponent() {
        this.title = 'my-sweetWord';
    }
    SweetWordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sweetWord',
            template: __webpack_require__(/*! ./sweetWord.component.html */ "./src/app/sweetWord/sweetWord.component.html"),
            styles: [__webpack_require__(/*! ./sweetWord.component.css */ "./src/app/sweetWord/sweetWord.component.css")]
        })
    ], SweetWordComponent);
    return SweetWordComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Users\boche\Documents\Personnel\distanceCouple\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
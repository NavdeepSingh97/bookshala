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

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* stylelint-disable selector-list-comma-newline-after */\r\n\r\n.blog-header {\r\n    line-height: 1;\r\n    border-bottom: 1px solid #e5e5e5;\r\n  }\r\n\r\n.blog-header-logo {\r\n    font-family: \"Playfair Display\", Georgia, \"Times New Roman\", serif;\r\n    font-size: 2.25rem;\r\n  }\r\n\r\n.blog-header-logo:hover {\r\n    text-decoration: none;\r\n  }\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n    font-family: \"Playfair Display\", Georgia, \"Times New Roman\", serif;\r\n  }\r\n\r\n.display-4 {\r\n    font-size: 2.5rem;\r\n  }\r\n\r\n@media (min-width: 768px) {\r\n    .display-4 {\r\n      font-size: 3rem;\r\n    }\r\n  }\r\n\r\n.nav-scroller {\r\n    position: relative;\r\n    z-index: 2;\r\n    height: 2.75rem;\r\n    overflow-y: hidden;\r\n  }\r\n\r\n.nav-scroller .nav {\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    padding-bottom: 1rem;\r\n    margin-top: -1px;\r\n    overflow-x: auto;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    -webkit-overflow-scrolling: touch;\r\n  }\r\n\r\n.nav-scroller .nav-link {\r\n    padding-top: .75rem;\r\n    padding-bottom: .75rem;\r\n    font-size: .875rem;\r\n  }\r\n\r\n.card-img-right {\r\n    height: 100%;\r\n    border-radius: 0 3px 3px 0;\r\n  }\r\n\r\n.flex-auto {\r\n    flex: 0 0 auto;\r\n  }\r\n\r\n.h-250 { height: 250px; }\r\n\r\n@media (min-width: 768px) {\r\n    .h-md-250 { height: 250px; }\r\n  }\r\n\r\n.border-top { border-top: 1px solid #e5e5e5; }\r\n\r\n.border-bottom { border-bottom: 1px solid #e5e5e5; }\r\n\r\n.box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }\r\n\r\n/*\r\n   * Blog name and description\r\n   */\r\n\r\n.blog-title {\r\n    margin-bottom: 0;\r\n    font-size: 2rem;\r\n    font-weight: 400;\r\n  }\r\n\r\n.blog-description {\r\n    font-size: 1.1rem;\r\n    color: #999;\r\n  }\r\n\r\n@media (min-width: 40em) {\r\n    .blog-title {\r\n      font-size: 3.5rem;\r\n    }\r\n  }\r\n\r\n/* Pagination */\r\n\r\n.blog-pagination {\r\n    margin-bottom: 4rem;\r\n  }\r\n\r\n.blog-pagination > .btn {\r\n    border-radius: 2rem;\r\n  }\r\n\r\n/*\r\n   * Blog posts\r\n   */\r\n\r\n.blog-post {\r\n    margin-bottom: 4rem;\r\n  }\r\n\r\n.blog-post-title {\r\n    margin-bottom: .25rem;\r\n    font-size: 2.5rem;\r\n  }\r\n\r\n.blog-post-meta {\r\n    margin-bottom: 1.25rem;\r\n    color: #999;\r\n  }\r\n\r\n/*\r\n   * Footer\r\n   */\r\n\r\n.blog-footer {\r\n    padding: 2.5rem 0;\r\n    color: #999;\r\n    text-align: center;\r\n    background-color: #f9f9f9;\r\n    border-top: .05rem solid #e5e5e5;\r\n  }\r\n\r\n.blog-footer p:last-child {\r\n    margin-bottom: 0;\r\n  }\r\n\r\n/* GLOBAL STYLES\r\n-------------------------------------------------- */\r\n\r\n/* Padding below the footer and lighter body text */\r\n\r\nbody {\r\n    padding-top: 3rem;\r\n    padding-bottom: 3rem;\r\n    color: #5a5a5a;\r\n  }\r\n\r\n/* CUSTOMIZE THE CAROUSEL\r\n  -------------------------------------------------- */\r\n\r\n/* Carousel base class */\r\n\r\n.carousel {\r\n    margin-bottom: 4rem;\r\n  }\r\n\r\n/* Since positioning the image, we need to help out the caption */\r\n\r\n.carousel-caption {\r\n    bottom: 3rem;\r\n    z-index: 10;\r\n  }\r\n\r\n/* Declare heights because of positioning of img element */\r\n\r\n.carousel-item {\r\n    height: 32rem;\r\n    background-color: #777;\r\n  }\r\n\r\n.carousel-item > img {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    min-width: 100%;\r\n    height: 32rem;\r\n  }\r\n\r\n/* MARKETING CONTENT\r\n  -------------------------------------------------- */\r\n\r\n/* Center align the text within the three columns below the carousel */\r\n\r\n.marketing .col-lg-4 {\r\n    margin-bottom: 1.5rem;\r\n    text-align: center;\r\n  }\r\n\r\n.marketing h2 {\r\n    font-weight: 400;\r\n  }\r\n\r\n.marketing .col-lg-4 p {\r\n    margin-right: .75rem;\r\n    margin-left: .75rem;\r\n  }\r\n\r\n/* Featurettes\r\n  ------------------------- */\r\n\r\n.featurette-divider {\r\n    margin: 5rem 0; /* Space out the Bootstrap <hr> more */\r\n  }\r\n\r\n/* Thin out the marketing headings */\r\n\r\n.featurette-heading {\r\n    font-weight: 300;\r\n    line-height: 1;\r\n    letter-spacing: -.05rem;\r\n  }\r\n\r\n/* RESPONSIVE CSS\r\n  -------------------------------------------------- */\r\n\r\n@media (min-width: 40em) {\r\n    /* Bump up size of carousel content */\r\n    .carousel-caption p {\r\n      margin-bottom: 1.25rem;\r\n      font-size: 1.25rem;\r\n      line-height: 1.4;\r\n    }\r\n  \r\n    .featurette-heading {\r\n      font-size: 50px;\r\n    }\r\n  }\r\n\r\n@media (min-width: 62em) {\r\n    .featurette-heading {\r\n      margin-top: 7rem;\r\n    }\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p style=\"margin-top: 80px;\"></p>\n<div class=\"container\">\n\n        <div class=\"jumbotron p-3 p-md-5 text-white rounded bg-dark\">\n          <div class=\"col-md-6 px-0\">\n            <h1 class=\"display-4 font-italic\">Welcome to BookShala.com</h1>\n            <p class=\"lead my-3\">We provide an easy way to buy and sell your old books.</p>\n          </div>\n        </div>\n        <!-- START THE FEATURETTES -->\n\n        <hr class=\"featurette-divider\">\n\n        <div class=\"row featurette\">\n          <div class=\"col-md-7\">\n            <h2 class=\"featurette-heading\">Buy Old Books. <span class=\"text-muted\">In an easy way.</span></h2>\n            <p class=\"lead\">There is no friend as loyal as book. Buy and sell books easily with bargain with the seller. </p>\n          </div>\n          <div class=\"col-md-5\">\n            <img class=\"featurette-image img-fluid mx-auto\" src=\"assets/buy.jpg\" alt=\"Generic placeholder image\">\n          </div>\n        </div>\n\n        <hr class=\"featurette-divider\">\n\n        <div class=\"row featurette\">\n          <div class=\"col-md-7 order-md-2\">\n            <h2 class=\"featurette-heading\">Sell Your Old Books, <span class=\"text-muted\">and make money.</span></h2>\n            <p class=\"lead\">If you have some books which are not in use sell them easily on bookshala.You can help someone in need.</p>\n          </div>\n          <div class=\"col-md-5 order-md-1\">\n            <img class=\"featurette-image img-fluid mx-auto\"src=\"assets/sell.jpg\" alt=\"Generic placeholder image\">\n          </div>\n        </div>\n</div>\n<br>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/add/add.component.css":
/*!***************************************!*\
  !*** ./src/app/add/add.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* *[role=\"form\"] {\r\n    max-width: 530px;\r\n    padding: 15px;\r\n    margin: 0 auto;\r\n    border-radius: 0.3em;\r\n    /* background-color:  #b3b3ff; */\r\n    /* border:1px solid black;\r\n}\r\n\r\n*[role=\"form\"] h2 {\r\n    font-family: 'Open Sans' , sans-serif;\r\n    font-size: 40px;\r\n    font-weight: 600;\r\n    color: #000000;\r\n    margin-top: 5%;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    letter-spacing: 4px;\r\n}\r\n\r\nbody{\r\n    background-color: gainsboro;\r\n} */\r\n    html,body {\r\n\theight: 100%;\r\n}\r\n    body.my-login-page {\r\n\tbackground-color: #f7f9fb;\r\n\tfont-size: 14px;\r\n}\r\n    .my-login-page .brand {\r\n\twidth: 90px;\r\n\theight: 90px;\r\n\toverflow: hidden;\r\n\tborder-radius: 50%;\r\n\tmargin: 0 auto;\r\n\tmargin: 40px auto;\r\n\tbox-shadow: 0 0 40px rgba(0,0,0,.05);\r\n}\r\n    .my-login-page .brand img {\r\n\twidth: 100%;\r\n}\r\n    .my-login-page .card-wrapper {\r\n\twidth: 400px;\r\n}\r\n    .my-login-page .card {\r\n\tborder-color: transparent;\r\n\tbox-shadow: 0 0 40px rgba(0,0,0,.05);\r\n}\r\n    .my-login-page .card.fat {\r\n\tpadding: 10px;\r\n}\r\n    .my-login-page .card .card-title {\r\n\tmargin-bottom: 30px;\r\n}\r\n    .my-login-page .form-control {\r\n\tborder-width: 2.3px;\r\n}\r\n    .my-login-page .form-group label {\r\n\twidth: 100%;\r\n}\r\n    .my-login-page .btn.btn-block {\r\n\tpadding: 12px 10px;\r\n}\r\n    .my-login-page .margin-top20 {\r\n\tmargin-top: 20px;\r\n}\r\n    .my-login-page .no-margin {\r\n\tmargin: 0;\r\n}\r\n    .my-login-page .footer {\r\n\tmargin: 40px 0;\r\n\tcolor: #888;\r\n\ttext-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/add/add.component.html":
/*!****************************************!*\
  !*** ./src/app/add/add.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<p style=\"margin-top:50px;\"></p>\n<body class=\"my-login-page\">\n        <section class=\"h-100\">\n            <div class=\"container h-100\">\n                <div class=\"row justify-content-md-center h-100\">\n                    <div class=\"card-wrapper\">\n                        <div class=\"brand\">\n                            <img src=\"assets/logo.jpg\">\n                        </div>\n                        <div class=\"card fat\">\n                            <div class=\"card-body\">\n                                <h4 class=\"card-title\">Add your book for sell</h4>\n                                <form name=\"myform\" [formGroup]=\"myform\" (ngSubmit)=\"onSubmit()\">\n                                 \n                                    <div class=\"form-group\">\n                                        <label for=\"bookname\">Book Name</label>\n                                        <input id=\"name\" type=\"text\" formControlName=\"bname\" class=\"form-control\" name=\"name\" required autofocus>\n                                    </div>\n\n                                    <div class=\"form-group\">\n                                            <label for=\"authorname\">Author Name</label>\n                                            <input id=\"name\" type=\"text\" formControlName=\"aname\" class=\"form-control\" name=\"name\" required autofocus>\n                                        </div>\n    \n                                    <div class=\"form-group\">\n                                        <label for=\"price\">Price</label>\n                                        <input id=\"price\" type=\"number\" formControlName=\"price\" class=\"form-control\" name=\"email\" required>\n                                    </div>\n    \n                                    <!-- <div class=\"form-group\">\n                                        <label for=\"email\">E-Mail Address</label>\n                                        <input id=\"email\" type=\"email\" [(ngModel)]='emailbind' formControlName=\"email\" readonly class=\"form-control\" required data-eye>\n                                    </div> -->\n\n                                    <div class=\"form-group\">\n                                        <label for=\"image\">Select Image</label>\n                                        <input type=\"file\" class=\"form-control-file\" id=\"Image\" (change)=\"handleFileInput($event.target.files)\">\n                                    </div>\n                                    \n                                    <div class=\"form-group\">\n                                            <label for=\"bookcondition\">Book condition</label>\n                                        <select class=\"custom-select\" id=\"bookselect\" formControlName=\"condition\" required autofocus>\n                                            <option selected>Choose book condition</option>\n                                            <option >New</option>\n                                            <option >Almost New</option>\n                                            <option >Slight Damage</option>\n                                            <option >Worn</option>\n                                        </select>\n                                    </div>\n                                        <div class=\"form-group\">\n                                            <label for=\"bookdes\">Book Description</label>\n                                            <textarea class=\"form-control\" rows=\"5\" id=\"comment\" formControlName=\"description\" required ></textarea>\n                                        </div>\n                                    <div class=\"form-group no-margin\">\n                                        <button id=\"submit\" type=\"submit\" value=\"submit\" class=\"btn btn-outline-primary btn-block\" [disabled]=\"myform.invalid\">\n                                            Add Book\n                                        </button>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                        <div class=\"footer\">\n                            Copyright &copy; Booksell.com\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n    </body>\n \n    \n"

/***/ }),

/***/ "./src/app/add/add.component.ts":
/*!**************************************!*\
  !*** ./src/app/add/add.component.ts ***!
  \**************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddComponent = /** @class */ (function () {
    function AddComponent(fb, http, data) {
        this.fb = fb;
        this.http = http;
        this.data = data;
        this.fileToUpload = null;
        this.emailbind = localStorage.getItem('email');
    }
    AddComponent.prototype.ngOnInit = function () {
        this.myform = this.fb.group({
            bname: "",
            aname: "",
            email: "",
            description: "",
            price: "",
            condition: "",
            sellerId: localStorage.getItem('userId'),
        });
    };
    AddComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
        //this.uploadFileToActivity();
    };
    AddComponent.prototype.onSubmit = function () {
        var values = this.myform.value;
        console.log(values);
        this.postdata(values, this.fileToUpload);
    };
    AddComponent.prototype.postFile = function (name) {
        var formData = new FormData();
        formData.append('fileName', this.fileToUpload, name);
        this.http
            .post('/image', formData)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    AddComponent.prototype.postdata = function (data, fileToUpload) {
        var _this = this;
        this.http.post('/api/products', data).subscribe(function (data) {
            _this.postFile(data.id);
            console.log(data);
            if (data) {
                alert('successfully added');
            }
        });
    };
    AddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.css */ "./src/app/add/add.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\r\n/* Navigation Bar Css  */\r\n.bg-dark {\r\n  background-color: #0d0d0d !important;\r\n}\r\n.navbar-dark .navbar-nav .nav-link {\r\n  color: #fff;\r\n}\r\n.navbar-dark .navbar-nav .nav-link:hover {\r\n  border-bottom: 2px solid #fff;\r\n  \r\n}\r\n.active {\r\n  border-bottom: 2px solid #fff;\r\n}\r\n/*Nav bar Scroll Spy*/\r\nbody {\r\n  position: relative;\r\n}\r\n/* Footer */\r\nsection {\r\n    padding: 60px 0;\r\n}\r\nsection .section-title {\r\n    text-align: center;\r\n    color: #333;\r\n    margin-bottom: 50px;\r\n    text-transform: uppercase;\r\n}\r\n#footer {\r\n    background: #333 !important;\r\n}\r\n#footer h5{\r\n\tpadding-left: 10px;\r\n    border-left: 3px solid #dc3545;\r\n    padding-bottom: 6px;\r\n    margin-bottom: 20px;\r\n    color:#ffffff;\r\n}\r\n#footer a {\r\n    color: #ffffff;\r\n    text-decoration: none !important;\r\n    background-color: transparent;\r\n    -webkit-text-decoration-skip: objects;\r\n}\r\n#footer ul.social li{\r\n\tpadding: 3px 0;\r\n}\r\n#footer ul.social li a i {\r\n    margin-right: 5px;\r\n\tfont-size:25px;\r\n\ttransition: .5s all ease;\r\n}\r\n#footer ul.social li:hover a i {\r\n\tfont-size:30px;\r\n\tmargin-top:-10px;\r\n}\r\n#footer ul.social li a,\r\n#footer ul.quick-links li a{\r\n\tcolor:#ffffff;\r\n}\r\n#footer ul.social li a:hover{\r\n  color:#eeeeee;\r\n}\r\n#footer ul.quick-links li{\r\n\tpadding: 3px 0;\r\n transition: .5s all ease;\r\n}\r\n#footer ul.quick-links li:hover{\r\n\tpadding: 3px 0;\r\n\tmargin-left:5px;\r\n  font-weight:700;\r\n}\r\n#footer ul.quick-links li a i{\r\n\tmargin-right: 5px;\r\n}\r\n#footer ul.quick-links li:hover a i {\r\n    font-weight: 700;\r\n    color: red;\r\n}\r\n@media (max-width:767px){\r\n\t#footer h5 {\r\n    padding-left: 0;\r\n    border-left: transparent;\r\n    padding-bottom: 0px;\r\n    margin-bottom: 10px;\r\n}\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- New Nav -->\n<body data-spy=\"scroll\" data-target=\"#navbarCollapse\">\n\n  <header>\n    <nav class=\"navbar navbar-expand-lg navbar-dark fixed-top bg-dark\">\n      <a class=\"navbar-brand\" href=\"#\">BookShala</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n        <ul class=\"navbar-nav mr-auto\">  <!--mt-2 mt-lg-0-->\n          <li class=\"nav-item mr-2\"><!--mr-4 is maximum-->\n            <a class=\"nav-link\" href=\"#myCarousel\" routerLink= \"/homepage\">Home</a>\n          </li>\n            <li class=\"nav-item mr-2\">\n            <a class=\"nav-link\" href=\"#about\" routerLink=\"/about\">About us</a>\n          </li>\n      \n        </ul>\n  \n          <button class=\"btn btn-outline-success mb-3 mb-md-2 ml-md-3\" type=\"submit\" routerLink=\"/login\" [style.visibility]=\"toggoleShowHide\"><span class=\"glyphicon glyphicon-log-in\"></span>Log In</button>&nbsp;&nbsp;&nbsp;&nbsp;\n          <button class=\"btn btn-warning mb-3 mb-md-2 ml-md-3\" type=\"submit\" routerLink=\"/signup\" [style.visibility]=\"toggoleShowHide\">Sign Up</button>\n                <!-- Dropdown -->\n            <div class=\"btn-group\"  [style.visibility]=\"toggoleShow\">\n              <button type=\"button\" class=\"btn btn-danger mb-3 mb-md-2 ml-md-3 dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                More\n              </button>\n              <div class=\"dropdown-menu\">\n                <a class=\"dropdown-item\" routerLink=\"/yourproducts\"><i class=\"fa fa-clipboard\"> Your Products</i></a>\n                <a class=\"dropdown-item\" routerLink=\"/cart\"><i class=\"fa fa-shopping-cart\"> Cart</i></a>\n                <a class=\"dropdown-item\" routerLink=\"/history\"><i class=\"fa fa-magnet\"> Cart History</i></a>\n                <a class=\"dropdown-item\" routerLink=\"/wishlist\"><i class=\"fa fa-heart\"> Wishlist</i></a>\n                <a class=\"dropdown-item\" routerLink=\"/listings\"><i class=\"fa fa-shopping-basket\"> All Books</i></a>\n                <a class=\"dropdown-item\" routerLink=\"/listings/add\"><i class=\"fa fa-book\"> Add Books</i></a>\n                <a class=\"dropdown-item\" routerLink=\"/message\"><i class=\"fa fa-envelope\"> Messages</i></a>\n                <a class=\"dropdown-item\" routerLink=\"/feedback\"><i class=\"fa fa-comments-o\"> Feedback</i></a>\n              <!--  <div class=\"dropdown-divider\"></div>\n                <button class=\"btn btn-warning mb-3 mb-md-2 ml-md-3\" type=\"submit\" routerLink=\"/listings\" [style.visibility]=\"toggoleShow\" (click)=\"logout()\">Logout</button> -->\n                <!-- <a class=\"dropdown-item\" href=\"#\">Separated link</a> -->\n              </div>\n            </div>\n          <button class=\"btn btn-warning mb-3 mb-md-2 ml-md-3\" type=\"submit\" routerLink=\"/homepage\" [style.visibility]=\"toggoleShow\" (click)=\"logout()\">Logout</button>\n            \n            \n      </div>\n    </nav>\n  </header>\n<!-- New Nav End -->\n<router-outlet></router-outlet>\n\n<!-- Footer -->\n<section id=\"footer\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row text-center text-xs-center text-sm-left text-md-left\">\n\t\t\t\t<div class=\"col-xs-12 col-sm-4 col-md-4\">\n\t\t\t\t\t<h5>Quick links</h5>\n\t\t\t\t\t<ul class=\"list-unstyled quick-links\">\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Home</a></li>\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>About</a></li>\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>FAQ</a></li>\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Get Started</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class=\"col-xs-12 col-sm-4 col-md-4\">\n\t\t\t\t\t<h5>Registration and Log In</h5>\n\t\t\t\t\t<ul class=\"list-unstyled quick-links\">\n\t\t\t\t\t\t<li><a href=\"javascript:void();\" routerLink= \"/signup\"><i class=\"fa fa-angle-double-right\"></i>Signup</a></li>\n\t\t\t\t\t\t<li><a href=\"javascript:void();\" routerLink= \"/login\"><i class=\"fa fa-angle-double-right\"></i>Log In</a></li>\n\t\t\t\t\t\t<li><a href=\"javascript:void();\" routerLink= \"/forgotpwd\"><i class=\"fa fa-angle-double-right\"></i>Change Password</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5\">\n\t\t\t\t\t<ul class=\"list-unstyled list-inline social text-center\">\n\t\t\t\t\t\t<li class=\"list-inline-item\"><a href=\"javascript:void();\"><i class=\"fa fa-facebook\"></i></a></li>\n\t\t\t\t\t\t<li class=\"list-inline-item\"><a href=\"javascript:void();\"><i class=\"fa fa-twitter\"></i></a></li>\n\t\t\t\t\t\t<li class=\"list-inline-item\"><a href=\"javascript:void();\"><i class=\"fa fa-instagram\"></i></a></li>\n\t\t\t\t\t\t<li class=\"list-inline-item\"><a href=\"javascript:void();\"><i class=\"fa fa-google-plus\"></i></a></li>\n\t\t\t\t\t\t<li class=\"list-inline-item\"><a href=\"javascript:void();\" target=\"_blank\"><i class=\"fa fa-envelope\"></i></a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<hr>\n\t\t\t</div>\t\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white\">\n\t\t\t\t\t<p class=\"h6\">© All right Reversed.<a class=\"text-green ml-2\" href=\"#\" target=\"_blank\">BookShala.com</a></p>\n\t\t\t\t</div>\n\t\t\t\t<hr>\n\t\t\t</div>\t\n\t\t</div>\n\t</section>\n\t<!-- ./Footer -->\n"

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
        this.title = 'app';
        this.toggoleShowHide = "";
        this.toggoleShow = "";
    }
    AppComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('userId') && localStorage.getItem('password')) {
            this.toggoleShowHide = 'hidden';
            // this.toggoleShow='visible';
        }
        else {
            this.toggoleShowHide = 'visible';
            this.toggoleShow = 'hidden';
        }
    };
    AppComponent.prototype.logout = function () {
        localStorage.removeItem('userId'),
            localStorage.removeItem('password'),
            localStorage.removeItem('email'),
            this.toggoleShowHide = 'visible';
        this.toggoleShow = 'hidden';
    };
    AppComponent.prototype.check = function () {
        localStorage.getItem('userId');
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
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
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _listings_listings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./listings/listings.component */ "./src/app/listings/listings.component.ts");
/* harmony import */ var _listingid_listingid_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./listingid/listingid.component */ "./src/app/listingid/listingid.component.ts");
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./wishlist/wishlist.component */ "./src/app/wishlist/wishlist.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add/add.component */ "./src/app/add/add.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./history/history.component */ "./src/app/history/history.component.ts");
/* harmony import */ var _yourproducts_yourproducts_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./yourproducts/yourproducts.component */ "./src/app/yourproducts/yourproducts.component.ts");
/* harmony import */ var _forgotpwd_forgotpwd_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./forgotpwd/forgotpwd.component */ "./src/app/forgotpwd/forgotpwd.component.ts");
/* harmony import */ var _chngpwd_chngpwd_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./chngpwd/chngpwd.component */ "./src/app/chngpwd/chngpwd.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _billing_billing_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./billing/billing.component */ "./src/app/billing/billing.component.ts");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/feedback/feedback.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { MiddleSectionComponent } from './middle-section/middle-section.component';

















var routes = [
    { path: '', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_19__["HomepageComponent"] },
    // {path:'middile-section',component:MiddleSectionComponent},
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'homepage', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_19__["HomepageComponent"] },
    { path: 'listings', component: _listings_listings_component__WEBPACK_IMPORTED_MODULE_9__["ListingsComponent"] },
    { path: 'listings/add', component: _add_add_component__WEBPACK_IMPORTED_MODULE_12__["AddComponent"] },
    { path: 'listingid/:id', component: _listingid_listingid_component__WEBPACK_IMPORTED_MODULE_10__["ListingidComponent"] },
    { path: 'wishlist', component: _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_11__["WishlistComponent"] },
    { path: 'message', component: _message_message_component__WEBPACK_IMPORTED_MODULE_13__["MessageComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_14__["CartComponent"] },
    { path: 'history', component: _history_history_component__WEBPACK_IMPORTED_MODULE_15__["HistoryComponent"] },
    { path: 'yourproducts', component: _yourproducts_yourproducts_component__WEBPACK_IMPORTED_MODULE_16__["YourproductsComponent"] },
    { path: 'forgotpwd', component: _forgotpwd_forgotpwd_component__WEBPACK_IMPORTED_MODULE_17__["ForgotpwdComponent"] },
    { path: 'chngpwd', component: _chngpwd_chngpwd_component__WEBPACK_IMPORTED_MODULE_18__["ChngpwdComponent"] },
    { path: 'billing', component: _billing_billing_component__WEBPACK_IMPORTED_MODULE_20__["BillingComponent"] },
    { path: 'feedback', component: _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_21__["FeedbackComponent"] }
    //  {path:'**',component:ListingsComponent},
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"],
                // MiddleSectionComponent,
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _listings_listings_component__WEBPACK_IMPORTED_MODULE_9__["ListingsComponent"],
                _listingid_listingid_component__WEBPACK_IMPORTED_MODULE_10__["ListingidComponent"],
                _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_11__["WishlistComponent"],
                _add_add_component__WEBPACK_IMPORTED_MODULE_12__["AddComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_13__["MessageComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_14__["CartComponent"],
                _history_history_component__WEBPACK_IMPORTED_MODULE_15__["HistoryComponent"],
                _yourproducts_yourproducts_component__WEBPACK_IMPORTED_MODULE_16__["YourproductsComponent"],
                _forgotpwd_forgotpwd_component__WEBPACK_IMPORTED_MODULE_17__["ForgotpwdComponent"],
                _chngpwd_chngpwd_component__WEBPACK_IMPORTED_MODULE_18__["ChngpwdComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_19__["HomepageComponent"],
                _billing_billing_component__WEBPACK_IMPORTED_MODULE_20__["BillingComponent"],
                _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_21__["FeedbackComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/billing/billing.component.css":
/*!***********************************************!*\
  !*** ./src/app/billing/billing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n    overflow: hidden;\r\n    background-color: #c98686;\r\n    padding: 20px 10px;\r\n  }"

/***/ }),

/***/ "./src/app/billing/billing.component.html":
/*!************************************************!*\
  !*** ./src/app/billing/billing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\" #content style=\"margin-top: 75px; margin-left:13px;margin-right:13px;\">    \n  <div class=\"header\">\n    <p style=\"text-align:center;color:cornsilk\">INVOICE</p>\n  </div>\n  <div>\n   <p style=\"color:black;font-size:25px;text-align:right;margin-right:10px;\"><b>Bookshala</b> </p>\n  </div>\n  <hr>\n       <table style=\"width: 100%; margin-bottom: 32px;\" border=\"2\">\n         <tr>\n           <th>First Name</th>\n           <th>Last Name</th>\n           <th>Address</th>\n           <th>Book Name</th>\n           <th>Price</th>\n         </tr>\n         <tr *ngFor=\"let data of booksbill\">\n          <td>{{data.firstName}}</td>\n          <td>{{data.lastName}}</td>\n          <td>{{data.address}}</td>\n          <td>{{data.bName}}</td>\n          <td> Rs.{{data.price}}</td>\n         </tr>\n         <tr>\n           <td></td>\n           <td></td>\n           <td></td>\n           <td>Total</td>\n           <td colspan=\"5\">Rs.{{totalPrice}}</td>\n         </tr>\n       </table>\n</div>\n"

/***/ }),

/***/ "./src/app/billing/billing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/billing/billing.component.ts ***!
  \**********************************************/
/*! exports provided: BillingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingComponent", function() { return BillingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/npm/index.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BillingComponent = /** @class */ (function () {
    function BillingComponent(data) {
        this.data = data;
        this.booksbill = [];
        this.prepareObject = {
            firstName: null,
            lastName: null,
            address: null,
            bName: null,
            price: null
        };
        this.totalPrice = 0;
        this.count = 1;
        this.billData = JSON.parse(localStorage.getItem('billData'));
        for (var _i = 0, _a = this.billData; _i < _a.length; _i++) {
            var i = _a[_i];
            this.totalPrice += i.price;
            if (this.count === 1 && i.firstName && i.lastName && i.address) {
                this.prepareObject.firstName = i.firstName;
                this.prepareObject.lastName = i.lastName;
                this.prepareObject.address = i.address;
                this.prepareObject.bName = i.BookName;
                this.prepareObject.price = i.price;
                this.booksbill.push(this.prepareObject);
                this.count++;
            }
            else {
                this.booksbill.push({ key: 'Book Name', bName: i.BookName, price: i.price });
            }
        }
    }
    BillingComponent.prototype.ngOnInit = function () {
    };
    BillingComponent.prototype.captureScreen = function () {
        var data = document.getElementById('contentToConvert');
        html2canvas__WEBPACK_IMPORTED_MODULE_2___default()(data).then(function (canvas) {
            var imgWidth = 200;
            var pageHeight = 290;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;
            var contentDataURL = canvas.toDataURL('image/jpeg');
            var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_1__('p', 'mm', 'a3'); // A4 size page of PDF
            var position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
            pdf.save('MYPdf.pdf'); // Generated PDF
        });
    };
    BillingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-billing',
            template: __webpack_require__(/*! ./billing.component.html */ "./src/app/billing/billing.component.html"),
            styles: [__webpack_require__(/*! ./billing.component.css */ "./src/app/billing/billing.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], BillingComponent);
    return BillingComponent;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n:root {\r\n    --jumbotron-padding-y: 3rem;\r\n  }\r\n  \r\n  .jumbotron {\r\n    padding-top: var(--jumbotron-padding-y);\r\n    padding-bottom: var(--jumbotron-padding-y);\r\n    margin-bottom: 0;\r\n    background-color: #fff;\r\n  }\r\n  \r\n  @media (min-width: 768px) {\r\n    .jumbotron {\r\n      padding-top: calc(var(--jumbotron-padding-y) * 2);\r\n      padding-bottom: calc(var(--jumbotron-padding-y) * 2);\r\n    }\r\n  }\r\n  \r\n  .jumbotron p:last-child {\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  .jumbotron-heading {\r\n    font-weight: 300;\r\n  }\r\n  \r\n  .jumbotron .container {\r\n    max-width: 40rem;\r\n  }\r\n  \r\n  .box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }"

/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  \n\n  <main role=\"main\" style=\"margin-top: 55px;\">\n  <section class=\"jumbotron text-center\">\n      <div class=\"container\">\n        <h1 class=\"jumbotron-heading\">Cart Section</h1>\n        <p class=\"lead text-muted\">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>\n      </div>\n    </section>\n\n  <div class=\"album py-5 bg-light\">\n      <div class=\"container\">\n        <div class=\"row\"> \n              \n          <div class=\"col-md-4\"  *ngFor=\"let item of wish\">\n              \n            <div class=\"card mb-4 box-shadow\"  style=\"float: left;\">\n              <img class=\"card-img-top\" [src]=\"'/myimage/'+item.id\" alt=\"Card image cap\" alt=\"Card image cap\" width=\"100%\" height=\"50%\">\n              <div class=\"card-body\" >\n                  <h5 class=\"card-title\">Book Name : {{item.BookName}}</h5>\n                  <p class=\"card-text text-justify\"><b>Author :</b> {{item.AuthorName}}</p>\n                  <p class=\"card-text text-justify\"><b>Description :</b> {{item.description}}</p>\n                  <p class=\"card-text text-justify\"><b>Price : </b> Rs.{{item.price}}</p>\n                  <p class=\"card-text text-justify\"><b>Condition :</b> {{item.condition}}</p>\n                <div class=\"d-flex justify-content-between align-items-center\">\n                  <div class=\"btn-group\">\n                     <button type=\"button\" class=\"btn btn-sm btn-outline-danger\" (click)=\"remove_book(item.id)\">Remove Item</button>\n                  </div>\n                </div>\n              </div>\n              </div>\n              \n            </div>\n          </div>\n      </div>\n</div>\n</main>\n  <table class=\"table table-striped table-bordered\">\n    <thead class=\"thead-dark\">\n    <tr>\n      <th scope=\"col\">No. of products</th>\n      <th scope=\"col\">Total price</th>\n      <th scope=\"col\">Address</th>\n      <th scope=\"col\">COD</th>\n      <th scope=\"col\">Pay Online</th>\n      <th scope=\"col\">Bill Generate</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr>\n      <th scope=\"row\">{{i}}</th>\n      <!-- <td>{{i}}</td> -->\n      <td>₹{{price}}</td>\n      <td><input type=\"text\" id=\"pickaddress\" placeholder=\"Enter Address\"></td>\n    \n        \n       <td><button (click)=\"checkout_type();showBillButton = false\" class=\"btn btn-outline-primary btn-sm\" style=\"border-radius: 15px;\"><strong>Cash On Delivery</strong></button></td> \n      \n      <td><h2 *ngIf=\"paypalLoad\">Paypal button is loading</h2>\n        <div id=\"paypal-checkout-btn\"></div> </td>\n        <td ><button (click)=\"bill_generate()\" [disabled]=\"showBillButton\" class=\"btn btn-outline-primary btn-sm\" style=\"border-radius: 15px;\"><strong>Generate bill</strong></button></td> \n      \n    </tr>\n    </tbody>\n  </table>\n  \n  \n  \n  \n    "

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartComponent = /** @class */ (function () {
    function CartComponent(data, http, route) {
        var _this = this;
        this.data = data;
        this.http = http;
        this.route = route;
        this.myRadio = '';
        this.addScript = false;
        this.paypalLoad = true;
        this.finalAmount = 1;
        this.showBillButton = true;
        this.paypalConfig = {
            env: 'sandbox',
            client: {
                sandbox: 'ASlOP7QbaG3km14H1hJcxx99cQAcC2zXIhuevsytnmLXl7pv7vt5RvOaxE6ZVJhGJ_OfLSVjO8uCTIbT',
                'client-secret': 'EL2wfCTXEBG8oqNRHaEjoMwb41vNxsSIcVh3W4FvOyHJQhXZU-DAyLO1kSdkVcajqdxJzbCjCeg5pPr6',
            },
            commit: true,
            payment: function (data, actions) {
                return actions.payment.create({
                    payment: {
                        transactions: [
                            { amount: { total: _this.price, currency: 'INR' } }
                        ]
                    }
                });
            },
            onAuthorize: function (data, actions) {
                return actions.payment.execute().then(function (payment) {
                    //Do something when payment is successful.
                });
            }
        };
    }
    CartComponent.prototype.ngOnInit = function () {
        this.fun();
    };
    CartComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (!this.addScript) {
            this.addPaypalScript().then(function () {
                paypal.Button.render(_this.paypalConfig, '#paypal-checkout-btn');
                _this.paypalLoad = false;
            });
        }
    };
    CartComponent.prototype.addPaypalScript = function () {
        this.addScript = true;
        return new Promise(function (resolve, reject) {
            var scripttagElement = document.createElement('script');
            scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
            scripttagElement.onload = resolve;
            document.body.appendChild(scripttagElement);
        });
    };
    CartComponent.prototype.fun = function () {
        var _this = this;
        this.http.post('/api/cart/cartfetch', { User_id: localStorage.getItem('userId') }).subscribe(function (data) {
            _this.wish = data;
            console.log(_this.wish);
            console.log(data);
            _this.price = 0;
            for (_this.i = 0; _this.i < data.length; _this.i++) {
                _this.price += data[_this.i].price;
            }
        });
    };
    CartComponent.prototype.checkout_type = function () {
        var _this = this;
        this.address = (document.getElementById("pickaddress").value);
        console.log(this.wish);
        localStorage.setItem('billData', JSON.stringify(this.wish));
        this.data.saveBill(this.wish);
        for (this.i = 0; this.i < this.wish.length; this.i++) {
            this.http.post('/api/chkout', this.wish[this.i]).subscribe(function (data) {
            });
            this.http.post('/api/remove/remove_destroy', { User_id: this.wish[this.i].sellerId, Product_id: this.wish[this.i].id }).subscribe(function (data) {
                _this.fun();
            });
        }
        alert('Product is delivered to : ' + this.address);
        for (this.i = 0; this.i < this.wish.length; this.i++) {
            console.log(this.wish[this.i].firstName);
            this.http.post('/api/buyerdata', {
                firstName: this.wish[this.i].firstName,
                lastName: this.wish[this.i].lastName,
                BookName: this.wish[this.i].BookName,
                AuthorName: this.wish[this.i].AuthorName,
                price: this.wish[this.i].price,
                email: this.wish[this.i].email
            }).subscribe(function (data) {
            });
        }
    };
    CartComponent.prototype.remove_book = function (data) {
        var _this = this;
        this.http.post('/api/cart/cart_destroy', { User_id: localStorage.getItem('userId'), Product_id: data }).subscribe(function (data) {
            _this.fun();
        });
    };
    CartComponent.prototype.bill_generate = function () {
        this.route.navigate(['billing']);
    };
    CartComponent.prototype.onSubmit = function () {
        this.http.post('/paynow', { data: 1 }).subscribe(function (data) {
            console.log(data);
        });
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/chngpwd/chngpwd.component.css":
/*!***********************************************!*\
  !*** ./src/app/chngpwd/chngpwd.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,body {\r\n\theight: 100%;\r\n}\r\n\r\nbody.my-login-page {\r\n\tbackground-color: #f7f9fb;\r\n\tfont-size: 14px;\r\n}\r\n\r\n.my-login-page .brand {\r\n\twidth: 90px;\r\n\theight: 90px;\r\n\toverflow: hidden;\r\n\tborder-radius: 50%;\r\n\tmargin: 0 auto;\r\n\tmargin: 40px auto;\r\n\tbox-shadow: 0 0 40px rgba(0,0,0,.05);\r\n}\r\n\r\n.my-login-page .brand img {\r\n\twidth: 100%;\r\n}\r\n\r\n.my-login-page .card-wrapper {\r\n\twidth: 400px;\r\n}\r\n\r\n.my-login-page .card {\r\n\tborder-color: transparent;\r\n\tbox-shadow: 0 0 40px rgba(0,0,0,.05);\r\n}\r\n\r\n.my-login-page .card.fat {\r\n\tpadding: 10px;\r\n}\r\n\r\n.my-login-page .card .card-title {\r\n\tmargin-bottom: 30px;\r\n}\r\n\r\n.my-login-page .form-control {\r\n\tborder-width: 2.3px;\r\n}\r\n\r\n.my-login-page .form-group label {\r\n\twidth: 100%;\r\n}\r\n\r\n.my-login-page .btn.btn-block {\r\n\tpadding: 12px 10px;\r\n}\r\n\r\n.my-login-page .margin-top20 {\r\n\tmargin-top: 20px;\r\n}\r\n\r\n.my-login-page .no-margin {\r\n\tmargin: 0;\r\n}\r\n\r\n.my-login-page .footer {\r\n\tmargin: 40px 0;\r\n\tcolor: #888;\r\n\ttext-align: center;\r\n}"

/***/ }),

/***/ "./src/app/chngpwd/chngpwd.component.html":
/*!************************************************!*\
  !*** ./src/app/chngpwd/chngpwd.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\" style=\"margin-top: 123px;\">\n  <div class=\"card card-container\">\n    <p id=\"profile-name\" class=\"profile-name-card\"></p>\n\n    <form class=\"form-signin\" name=\"myform1\" [formGroup]=\"myform1\" (ngSubmit)=\"onSubmit()\">\n      <span id=\"reauth-email\" class=\"reauth-email\"></span>\n      <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\" required>\n      <input type=\"password\" id=\"reinputPassword\" class=\"form-control\" placeholder=\"Re-Password\" formControlName=\"repassword\" required>\n      <button class=\"btn btn-lg btn-primary btn-block btn-signin\" type=\"submit\" [disabled]=\"myform1.invalid\">Confirm</button>\n\n    </form>\n  </div>\n</div> -->\n<p style=\"margin-top:50px;\"></p>\n<body class=\"my-login-page\">\n    <section class=\"h-100\">\n      <div class=\"container h-100\">\n        <div class=\"row justify-content-md-center align-items-center h-100\">\n          <div class=\"card-wrapper\">\n            <div class=\"brand\">\n              <img src=\"assets/logo.jpg\">\n            </div>\n            <div class=\"card fat\">\n              <div class=\"card-body\">\n                <h4 class=\"card-title\">Reset Password</h4>\n                <form name=\"myform1\" [formGroup]=\"myform1\" (ngSubmit)=\"onSubmit()\">\n                 \n                  <div class=\"form-group\">\n                    <label for=\"new-password\">New Password</label>\n                    <input id=\"new-password\" type=\"password\" class=\"form-control\" name=\"password\" formControlName=\"password\" pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}\" title=\"Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters\" required autofocus data-eye>\n                    <div class=\"form-text text-muted\">\n                      Make sure your password is strong and easy to remember\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <label for=\"password\">Re-enter Password </label>\n                      <input id=\"password\" type=\"password\" class=\"form-control\" name=\"password\" formControlName=\"repassword\" pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}\" title=\"Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters\" required data-eye>\n                  </div>\n  \n                  <div class=\"form-group no-margin\">\n                    <button type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]=\"myform1.invalid\" title=\"Please Enter your new password\">\n                      Reset Password\n                    </button>\n                  </div>\n                </form>\n              </div>\n            </div>\n            <div class=\"footer\">\n              Copyright &copy; BookShala.com\n            </div>\n          </div>\n        </div>\n      </div>\n    </section><br><br>\n  </body>"

/***/ }),

/***/ "./src/app/chngpwd/chngpwd.component.ts":
/*!**********************************************!*\
  !*** ./src/app/chngpwd/chngpwd.component.ts ***!
  \**********************************************/
/*! exports provided: ChngpwdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChngpwdComponent", function() { return ChngpwdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChngpwdComponent = /** @class */ (function () {
    function ChngpwdComponent(fb, http, router, route) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.route = route;
    }
    ChngpwdComponent.prototype.ngOnInit = function () {
        this.myform1 = this.fb.group({
            email: localStorage.getItem('email'),
            password: '',
            repassword: ''
        });
    };
    ChngpwdComponent.prototype.onSubmit = function () {
        var values = this.myform1.value;
        console.log(values);
        this.postdata(values);
    };
    ChngpwdComponent.prototype.postdata = function (data1) {
        var _this = this;
        console.log(data1.password);
        if (data1.password === data1.repassword) {
            this.http.post('http://localhost:2000/api/chngpwd', data1).subscribe(function (data) {
                if (data['message']) {
                    alert('Password Successfully Changed');
                    localStorage.removeItem('email');
                    _this.route.navigate(['login']);
                }
                else {
                    alert('User not found, Please Enter Correct Details.');
                }
            });
        }
        else {
            alert('Password does not match');
        }
    };
    ChngpwdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chngpwd',
            template: __webpack_require__(/*! ./chngpwd.component.html */ "./src/app/chngpwd/chngpwd.component.html"),
            styles: [__webpack_require__(/*! ./chngpwd.component.css */ "./src/app/chngpwd/chngpwd.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ChngpwdComponent);
    return ChngpwdComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getProducts = function () {
        return this.http.get('http://localhost:2000/api/products');
    };
    DataService.prototype.getbypricelow = function () {
        return this.http.get('http://localhost:2000/api/products/filterbylow');
    };
    DataService.prototype.getbypricehigh = function () {
        return this.http.get('http://localhost:2000/api/products/filterbyhigh');
    };
    DataService.prototype.saveBill = function (data) {
        this.billData = data;
    };
    DataService.prototype.getBill = function () {
        return this.billData;
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/feedback/feedback.component.css":
/*!*************************************************!*\
  !*** ./src/app/feedback/feedback.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/* New Css */\r\nhtml,body {\r\n\theight: 100%;\r\n}\r\nbody.my-login-page {\r\n\tbackground-color: #f7f9fb;\r\n\tfont-size: 14px;\r\n}\r\n.my-login-page .brand {\r\n\twidth: 90px;\r\n\theight: 90px;\r\n\toverflow: hidden;\r\n\tborder-radius: 50%;\r\n\tmargin: 0 auto;\r\n\tmargin: 40px auto;\r\n\tbox-shadow: 0 0 40px rgba(0,0,0,.05);\r\n}\r\n.my-login-page .brand img {\r\n\twidth: 100%;\r\n}\r\n.my-login-page .card-wrapper {\r\n\twidth: 400px;\r\n}\r\n.my-login-page .card {\r\n\tborder-color: transparent;\r\n\tbox-shadow: 0 0 40px rgba(0,0,0,.05);\r\n}\r\n.my-login-page .card.fat {\r\n\tpadding: 10px;\r\n}\r\n.my-login-page .card .card-title {\r\n\tmargin-bottom: 30px;\r\n}\r\n.my-login-page .form-control {\r\n\tborder-width: 2.3px;\r\n}\r\n.my-login-page .form-group label {\r\n\twidth: 100%;\r\n}\r\n.my-login-page .btn.btn-block {\r\n\tpadding: 12px 10px;\r\n}\r\n.my-login-page .margin-top20 {\r\n\tmargin-top: 20px;\r\n}\r\n.my-login-page .no-margin {\r\n\tmargin: 0;\r\n}\r\n.my-login-page .footer {\r\n\tmargin: 40px 0;\r\n\tcolor: #888;\r\n\ttext-align: center;\r\n}\r\n.rating {\r\n    float:left;\r\n}\r\n.rating:not(:checked) > input {\r\n    position:absolute;\r\n    top:-9999px;\r\n    clip:rect(0,0,0,0);\r\n}\r\n.rating:not(:checked) > label {\r\n    float:right;\r\n    width:1em;\r\n    padding:0.1em;\r\n    overflow:hidden;\r\n    white-space:nowrap;\r\n    cursor:pointer;\r\n    font-size:200%;\r\n    line-height:1.2;\r\n    color:#ddd;\r\n}\r\n.rating:not(:checked) > label:before {\r\n    content: '★ ';\r\n}\r\n.rating > input:checked ~ label {\r\n    color: #f70;\r\n}\r\n.rating:not(:checked) > label:hover,\r\n.rating:not(:checked) > label:hover ~ label {\r\n    color: gold;\r\n}\r\n.rating > input:checked ~ label:hover,\r\n.rating > input:checked ~ label:hover ~ label,\r\n.rating > label:hover ~ input:checked ~ label {\r\n    color: #ea0;\r\n}"

/***/ }),

/***/ "./src/app/feedback/feedback.component.html":
/*!**************************************************!*\
  !*** ./src/app/feedback/feedback.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div style=\"margin-top:90px;\">\n  <section class=\"section\">\n    <div class=\"container\">\n    \n\n     <form>\n      <div class=\"field\">\n        <input type=\"text\" name=\"name\" class=\"input\" placeholder=\"Your Name\" [(ngModel)]=\"name\">\n      </div>\n\n      <div class=\"field\">\n        <input type=\"email\" name=\"email\" class=\"input\" placeholder=\"Your Email\" [(ngModel)]=\"Email\" readonly>\n      </div>\n    \n      <div class=\"field\">\n        <textarea class=\"textarea\" name=\"message\" placeholder=\"What's on your mind?\" [(ngModel)]=\"message\"></textarea>\n      </div>\n    \n      <button type=\"submit\" class=\"button is-danger is-large\">Submit</button>\n    \n     </form>\n    \n    </div>\n    </section>\n    </div>\n -->\n\n <body class=\"my-login-page\">\n  <section class=\"h-100\">\n      <div class=\"container h-100\">\n          <div class=\"row justify-content-md-center h-100\">\n              <div class=\"card-wrapper\">\n                  <div class=\"brand\" style=\"margin-top: 87px\">\n                      <img src=\"assets/logo.jpg\">\n                  </div>\n                  <div class=\"card fat\">\n                      <div class=\"card-body\">\n                          <h4 class=\"card-title\">Feedback</h4>\n                          <form name=\"myform1\" [formGroup]=\"myform1\" (ngSubmit)=\"onSubmit()\">\n                            <!-- name -->\n\n                            <div class=\"form-group\">\n                                <label for=\"name\">Name</label>\n                                <input id=\"name\" type=\"text\" class=\"form-control\" name=\"name\" value=\"\" formControlName=\"name\" >\n                            </div>\n                            <!-- email -->\n                              <div class=\"form-group\">\n                                  <label for=\"email\">E-Mail Address</label>\n                                  <input id=\"email\" type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"Email\" value=\"\" formControlName=\"email\" readonly>\n                              </div>\n\n                              <!-- message -->\n                              <div class=\"form-group\">\n                                  <label for=\"message\">Message</label>\n                                  <textarea rows=\"3\" cols=\"7\" class=\"form-control\" name=\"message\" value=\"\" formControlName=\"message\" ></textarea>\n                              </div>\n\n\n                              <!--Ratings-->\n                              <label style=\"text-align:left;\">Rate Us</label>\n                              <br>\n                              <fieldset class=\"rating\">\n                                <input type=\"radio\" [name]=\"inputName\" value=\"5\" [checked]=\"rating===5\" />\n                                <label title=\"Rocks!\" (click)='onClick(5)'>5 stars</label>\n                              \n                                <input type=\"radio\" [name]=\"inputName\" value=\"4\" [checked]=\"rating===4\" />\n                                <label title=\"Pretty good\" (click)='onClick(4)'>4 stars</label>\n                              \n                                <input type=\"radio\" [name]=\"inputName\" value=\"3\" [checked]=\"rating===3\" />\n                                <label title=\"Meh\" (click)='onClick(3)'>3 stars</label>\n                              \n                                <input type=\"radio\" [name]=\"inputName\" value=\"2\" [checked]=\"rating===2\" />\n                                <label title=\"Kinda bad\" (click)='onClick(2)'>2 stars</label>\n                              \n                                <input type=\"radio\" [name]=\"inputName\" value=\"1\" [checked]=\"rating===1\" />\n                                <label title=\"Sucks big time\" (click)='onClick(1)'>1 star</label>\n                              </fieldset>\n\n\n                              <div class=\"form-group no-margin\">\n                                  <button class=\"btn btn-primary btn-block\" type=\"submit\" [disabled]=\"myform1.invalid\">\n                                      Submit\n                                  </button>\n                              </div>\n                             \n                          </form>\n                      </div>\n                  </div>\n                  <div class=\"footer\">\n                      Copyright &copy; Bookshala.com\n                  </div>\n              </div>\n          </div>\n      </div>\n  </section><br><br>\n</body>\n"

/***/ }),

/***/ "./src/app/feedback/feedback.component.ts":
/*!************************************************!*\
  !*** ./src/app/feedback/feedback.component.ts ***!
  \************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedbackComponent = /** @class */ (function () {
    function FeedbackComponent(fb, http) {
        this.fb = fb;
        this.http = http;
    }
    FeedbackComponent.prototype.ngOnInit = function () {
        this.Email = localStorage.getItem('email');
        this.myform1 = this.fb.group({
            name: '',
            email: '',
            message: ''
        });
    };
    FeedbackComponent.prototype.onClick = function (rating) {
        this.rating = rating;
        console.log(this.rating);
    };
    FeedbackComponent.prototype.onSubmit = function () {
        var values = this.myform1.value;
        console.log(values);
        this.postData(values);
    };
    FeedbackComponent.prototype.postData = function (data) {
        var rating = this.rating;
        this.http.post('/api/salesforce/feedback', { formdata: data, formrating: rating }).subscribe(function (data) {
        });
    };
    FeedbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feedback',
            template: __webpack_require__(/*! ./feedback.component.html */ "./src/app/feedback/feedback.component.html"),
            styles: [__webpack_require__(/*! ./feedback.component.css */ "./src/app/feedback/feedback.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FeedbackComponent);
    return FeedbackComponent;
}());



/***/ }),

/***/ "./src/app/forgotpwd/forgotpwd.component.css":
/*!***************************************************!*\
  !*** ./src/app/forgotpwd/forgotpwd.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,body {\r\n\theight: 100%;\r\n}\r\n\r\nbody.my-login-page {\r\n\tbackground-color: #f7f9fb;\r\n\tfont-size: 14px;\r\n}\r\n\r\n.my-login-page .brand {\r\n\twidth: 90px;\r\n\theight: 90px;\r\n\toverflow: hidden;\r\n\tborder-radius: 50%;\r\n\tmargin: 0 auto;\r\n\tmargin: 40px auto;\r\n\tbox-shadow: 0 0 40px rgba(0,0,0,.05);\r\n}\r\n\r\n.my-login-page .brand img {\r\n\twidth: 100%;\r\n}\r\n\r\n.my-login-page .card-wrapper {\r\n\twidth: 400px;\r\n}\r\n\r\n.my-login-page .card {\r\n\tborder-color: transparent;\r\n\tbox-shadow: 0 0 40px rgba(0,0,0,.05);\r\n}\r\n\r\n.my-login-page .card.fat {\r\n\tpadding: 10px;\r\n}\r\n\r\n.my-login-page .card .card-title {\r\n\tmargin-bottom: 30px;\r\n}\r\n\r\n.my-login-page .form-control {\r\n\tborder-width: 2.3px;\r\n}\r\n\r\n.my-login-page .form-group label {\r\n\twidth: 100%;\r\n}\r\n\r\n.my-login-page .btn.btn-block {\r\n\tpadding: 12px 10px;\r\n}\r\n\r\n.my-login-page .margin-top20 {\r\n\tmargin-top: 20px;\r\n}\r\n\r\n.my-login-page .no-margin {\r\n\tmargin: 0;\r\n}\r\n\r\n.my-login-page .footer {\r\n\tmargin: 40px 0;\r\n\tcolor: #888;\r\n\ttext-align: center;\r\n}"

/***/ }),

/***/ "./src/app/forgotpwd/forgotpwd.component.html":
/*!****************************************************!*\
  !*** ./src/app/forgotpwd/forgotpwd.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<p style=\"margin-top:50px;\"></p>\n<body class=\"my-login-page\">\n    <section class=\"h-100\">\n      <div class=\"container h-100\">\n        <div class=\"row justify-content-md-center align-items-center h-100\">\n          <div class=\"card-wrapper\">\n            <div class=\"brand\">\n              <img src=\"assets/logo.jpg\">\n            </div>\n            <div class=\"card fat\">\n              <div class=\"card-body\">\n                <h4 class=\"card-title\">Forgot Password</h4>\n                <form name=\"myform1\" [formGroup]=\"myform1\" (ngSubmit)=\"onSubmit()\">\n                 \n                  <div class=\"form-group\">\n                    <label for=\"email\">E-Mail Address</label>\n                    <input id=\"email\" type=\"email\" class=\"form-control\" name=\"email\" value=\"\" formControlName=\"email\" pattern=\"\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*\" required autofocus>\n                    <div class=\"form-text text-muted\">\n                      Enter your registered Email-id and then check your inbox\n                    </div>\n                  </div>\n  \n                  <div class=\"form-group no-margin\">\n                    <button type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]=\"myform1.invalid\">\n                      Reset Password\n                    </button>\n                  </div>\n                </form>\n              </div>\n            </div>\n            <div class=\"footer\">\n              Copyright &copy; Your Company 2017\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </body>"

/***/ }),

/***/ "./src/app/forgotpwd/forgotpwd.component.ts":
/*!**************************************************!*\
  !*** ./src/app/forgotpwd/forgotpwd.component.ts ***!
  \**************************************************/
/*! exports provided: ForgotpwdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpwdComponent", function() { return ForgotpwdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotpwdComponent = /** @class */ (function () {
    function ForgotpwdComponent(fb, http, router, route) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.route = route;
    }
    ForgotpwdComponent.prototype.ngOnInit = function () {
        this.myform1 = this.fb.group({
            email: '',
        });
    };
    ForgotpwdComponent.prototype.onSubmit = function () {
        var values = this.myform1.value;
        console.log(values);
        this.postdata(values);
    };
    ForgotpwdComponent.prototype.postdata = function (data1) {
        var _this = this;
        console.log(data1);
        localStorage.setItem('email', data1.email);
        this.http.post('/api/mail', data1).subscribe(function (data) {
            if (data['message']) {
                alert('Mail sent');
                _this.route.navigate(['login']);
            }
            else {
                alert('please enter correct details!!!');
            }
        });
    };
    ForgotpwdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgotpwd',
            template: __webpack_require__(/*! ./forgotpwd.component.html */ "./src/app/forgotpwd/forgotpwd.component.html"),
            styles: [__webpack_require__(/*! ./forgotpwd.component.css */ "./src/app/forgotpwd/forgotpwd.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ForgotpwdComponent);
    return ForgotpwdComponent;
}());



/***/ }),

/***/ "./src/app/history/history.component.css":
/*!***********************************************!*\
  !*** ./src/app/history/history.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n:root {\r\n    --jumbotron-padding-y: 3rem;\r\n  }\r\n  \r\n  .jumbotron {\r\n    padding-top: var(--jumbotron-padding-y);\r\n    padding-bottom: var(--jumbotron-padding-y);\r\n    margin-bottom: 0;\r\n    background-color: #fff;\r\n  }\r\n  \r\n  @media (min-width: 768px) {\r\n    .jumbotron {\r\n      padding-top: calc(var(--jumbotron-padding-y) * 2);\r\n      padding-bottom: calc(var(--jumbotron-padding-y) * 2);\r\n    }\r\n  }\r\n  \r\n  .jumbotron p:last-child {\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  .jumbotron-heading {\r\n    font-weight: 300;\r\n  }\r\n  \r\n  .jumbotron .container {\r\n    max-width: 40rem;\r\n  }\r\n  \r\n  .box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }\r\n  \r\n  /* Search Box */\r\n  \r\n  @media screen and (max-width: 600px) {\r\n    .selection input[type=search] {\r\n      float: none;\r\n      display: block;\r\n      text-align: left;\r\n      width: 100%;\r\n      margin: 0;\r\n      padding: 14px;\r\n    }\r\n    .selection input[type=search] {\r\n      border: 1px solid #ccc;  \r\n    }\r\n    }"

/***/ }),

/***/ "./src/app/history/history.component.html":
/*!************************************************!*\
  !*** ./src/app/history/history.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p style=\"margin-top: 113px;\">\n\n</p>\n\n<div class=\"container\">\n\n  <div class=\"col-4 card mx-2 p-4\" style=\"float: left; margin-left: 40px;  width: 334px;margin-top: 19px; text-align: center; border: 1px solid black;\" *ngFor=\"let do of wish\" >\n    <img class=\"card-img-top\" [src]=\"'http://localhost:2000/myimage/'+do.Product_id\" alt=\"Card image cap\" style=\"width:90%; height:190px ;margin-top:10px\">\n\n    <h4 class=\"product-name\">{{do.BookName}}</h4>\n\n    <div class=\"product-book\">{{do.AuthorName}}</div>\n    <div class=\"row\">\n      <div class=\"col m-3 p-3\" id=\"price\">\n        <b> Rs.{{do.price}}</b>\n        <br>\n        <p>{{do.condition}}</p>\n\n\n      </div>\n\n\n    </div> \n\n  </div>\n\n</div>`  -->\n\n<main role=\"main\" style=\"margin-top: 63px;\">\n\n    <section class=\"jumbotron text-center\">\n      <div class=\"container\">\n        <h1 class=\"jumbotron-heading\">Sold Book</h1>\n        <p class=\"lead text-muted\">This section is showing the books or products that is sold. </p>\n      </div>\n    </section>\n  \n    <div class=\"album py-5 bg-light\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-4\" *ngFor=\"let do of wish\">\n            <div class=\"card mb-4 box-shadow\"  style=\"float: left;\">\n              <img class=\"card-img-top\" [src]=\"'/myimage/'+do.Product_id\" alt=\"Card image cap\" width=\"100%\" height=\"78%\">\n              <div class=\"card-body\">\n                  <h5 class=\"card-title\">Book Name : {{do.BookName}}</h5>\n                  <p class=\"card-text text-justify\"><b>Description :</b> {{do.description}}</p>\n                  <p class=\"card-text text-justify\"><b>Price :</b> {{do.price}}</p>\n                  <p class=\"card-text text-justify\"><b>Book Condition :</b> {{do.condition}}</p>\n              </div>\n            </div>\n          </div>\n          </div>\n          </div>\n          </div>\n        </main>"

/***/ }),

/***/ "./src/app/history/history.component.ts":
/*!**********************************************!*\
  !*** ./src/app/history/history.component.ts ***!
  \**********************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HistoryComponent = /** @class */ (function () {
    function HistoryComponent(data, http) {
        this.data = data;
        this.http = http;
    }
    HistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.post('/api/chkout/checkoutfetch', { User_id: localStorage.getItem('userId') }).subscribe(function (data) {
            console.log(data);
            _this.wish = data;
        });
    };
    HistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-history',
            template: __webpack_require__(/*! ./history.component.html */ "./src/app/history/history.component.html"),
            styles: [__webpack_require__(/*! ./history.component.css */ "./src/app/history/history.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* GLOBAL STYLES\r\n-------------------------------------------------- */\r\n/* Padding below the footer and lighter body text */\r\nbody {\r\n    padding-top: 3rem;\r\n    padding-bottom: 3rem;\r\n    color: #5a5a5a;\r\n  }\r\n/* CUSTOMIZE THE CAROUSEL\r\n  -------------------------------------------------- */\r\n/* Carousel base class */\r\n.carousel {\r\n    margin-bottom: 4rem;\r\n  }\r\n/* Since positioning the image, we need to help out the caption */\r\n.carousel-caption {\r\n    bottom: 3rem;\r\n    z-index: 10;\r\n  }\r\n/* Declare heights because of positioning of img element */\r\n.carousel-item {\r\n    height: 32rem;\r\n    background-color: #777;\r\n  }\r\n.carousel-item > img {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    min-width: 100%;\r\n    height: 32rem;\r\n  }\r\n/* MARKETING CONTENT\r\n  -------------------------------------------------- */\r\n/* Center align the text within the three columns below the carousel */\r\n.marketing .col-lg-4 {\r\n    margin-bottom: 1.5rem;\r\n    text-align: center;\r\n  }\r\n.marketing h2 {\r\n    font-weight: 400;\r\n  }\r\n.marketing .col-lg-4 p {\r\n    margin-right: .75rem;\r\n    margin-left: .75rem;\r\n  }\r\n/* Featurettes\r\n  ------------------------- */\r\n.featurette-divider {\r\n    margin: 5rem 0; /* Space out the Bootstrap <hr> more */\r\n  }\r\n/* Thin out the marketing headings */\r\n.featurette-heading {\r\n    font-weight: 300;\r\n    line-height: 1;\r\n    letter-spacing: -.05rem;\r\n  }\r\n/* RESPONSIVE CSS\r\n  -------------------------------------------------- */\r\n@media (min-width: 40em) {\r\n    /* Bump up size of carousel content */\r\n    .carousel-caption p {\r\n      margin-bottom: 1.25rem;\r\n      font-size: 1.25rem;\r\n      line-height: 1.4;\r\n    }\r\n  \r\n    .featurette-heading {\r\n      font-size: 50px;\r\n    }\r\n  }\r\n@media (min-width: 62em) {\r\n    .featurette-heading {\r\n      margin-top: 7rem;\r\n    }\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Carousel -->\n<main role=\"main\">\n\n  <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img class=\"first-slide\" src=\"assets/blur-book-close-up-163142.jpg\" alt=\"First slide\">\n        <div class=\"container\">\n          <div class=\"carousel-caption text-left\">\n            <h1>Buy Old Books.</h1>\n            <p>In an easy way.</p>\n            <p><a class=\"btn btn-lg btn-warning\" routerLink=\"/signup\" role=\"button\">Sign up today &raquo;</a></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"second-slide\" src=\"assets/black-and-white-blur-book-76752.jpg\" alt=\"Second slide\">\n        <div class=\"container\">\n          <div class=\"carousel-caption\">\n            <h1>Sell Your Old Books, and make money.</h1>\n            <p><a class=\"btn btn-lg btn-primary\" routerLink=\"/login\" role=\"button\">Log In &raquo;</a></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"third-slide\" src=\"assets/learn.jpg\" alt=\"Third slide\">\n        <div class=\"container\">\n          <div class=\"carousel-caption text-right\">\n            <h1>One more for good measure.</h1>\n            <!-- <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Browse Test</a></p> -->\n          </div>\n        </div>\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n  <div>\n\n    <div class=\"jumbotron p-3 p-md-5 text-white rounded bg-dark\">\n      <div class=\"col-md-8 px-0\">\n        <h1 class=\"display-4 font-italic\">Welcome to BookShala.com</h1>\n        <p class=\"lead my-3\">We provide an easy way to buy and sell your old books.</p>\n      </div>\n    </div>\n\n  </div>\n\n  "

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/listingid/listingid.component.css":
/*!***************************************************!*\
  !*** ./src/app/listingid/listingid.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/listingid/listingid.component.html":
/*!****************************************************!*\
  !*** ./src/app/listingid/listingid.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n        <div class=\"album py-5 bg-light\"  *ngFor=\"let item of list_id_pro\" style=\"margin-top: 63px;\">\n                <div class=\"container\">\n                  <div class=\"row\">\n                        \n                    <div class=\"col-md-4\">\n                        \n                      <div class=\"card mb-4 box-shadow\"  style=\"float: left;\" *ngIf=\"(item.id == selected)\">\n                        <img class=\"card-img-top\" [src]=\"'/myimage/'+item.id\" alt=\"Card image cap\" alt=\"Card image cap\" width=\"100%\" height=\"78%\">\n                        <div class=\"card-body\" >\n                            <h5 class=\"card-title\">Book Name : {{item.BookName}}</h5>\n                            <p class=\"card-text text-justify\"><b>Author :</b> {{item.AuthorName}}</p>\n                            <p class=\"card-text text-justify\"><b>Description :</b> {{item.description}}</p>\n                            <p class=\"card-text text-justify\"><b>Price : </b> Rs.{{item.price}}</p>\n                            <p class=\"card-text text-justify\"><b>Condition :</b> {{item.condition}}</p>\n                          <div class=\"d-flex justify-content-between align-items-center\">\n                            \n                              <button type=\"button\" class=\"btn btn-sm btn-outline-danger\" (click)=\"sendMessage()\">Add to Wishlist</button>\n                              <button type=\"button\" class=\"btn btn-sm btn-outline-success\" (click)=\"sendMessageCart()\">Add to Cart</button>\n                          \n                            \n                          </div>\n                        </div>\n                        </div>\n                        \n                      </div>\n                    </div>\n                    <label for=\"address\">Send Message to Seller</label>\n                    <textarea class=\"form-control\" rows=\"5\" cols=\"5\" #messageInput placeholder=\"Enter Your message here\"></textarea><br>\n                    \n                    <!-- <input type=text placeholder=\"send message\" #messageInput > -->\n    <button id=\"submit\" type=\"submit\" value=\"submit\" class=\"btn btn-primary center\" (click)=\"onSend(messageInput.value)\">Send Message</button>\n                </div>\n         </div>"

/***/ }),

/***/ "./src/app/listingid/listingid.component.ts":
/*!**************************************************!*\
  !*** ./src/app/listingid/listingid.component.ts ***!
  \**************************************************/
/*! exports provided: ListingidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingidComponent", function() { return ListingidComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListingidComponent = /** @class */ (function () {
    function ListingidComponent(_dataService, router, http, route) {
        this._dataService = _dataService;
        this.router = router;
        this.http = http;
        this.route = route;
        this.counter = 1;
        this.MessageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ListingidComponent.prototype.getItems = function (data1) {
        var _this = this;
        this.http.post('/api/products/getbyid', { Product_id: data1 }).subscribe(function (data) {
            _this.list_id_pro = data;
            console.log(_this.list_id_pro);
        });
    };
    ListingidComponent.prototype.ngOnInit = function () {
        var _this = this;
        {
            this.router.paramMap.subscribe(function (params) {
                _this.selected = +(params.get('id'));
                _this.getItems(_this.selected);
            });
        }
    };
    ListingidComponent.prototype.sendMessage = function () {
        console.log(this.list_id_pro[0]['sellerId'].toString());
        if (localStorage.getItem('userId') !== this.list_id_pro[0]['sellerId'].toString()) {
            this.http.post('/api/wish', { User_id: localStorage.getItem('userId'), Product_id: this.selected }).subscribe(function (data) {
                // console.log(data)
                if (data['message']) {
                    alert("you have already added product to wishlist");
                }
                else {
                    alert("add to wishlist successfully!");
                }
            });
        }
        else if (localStorage.getItem('userId') === this.list_id_pro[0]['sellerId'].toString()) {
            alert("You can not add your product");
        }
        else {
            alert("please log in");
        }
        // console.log(this.counter);
        //this.MessageEvent.emit('hello');
    };
    ListingidComponent.prototype.sendMessageCart = function () {
        //console.log(this.selected);
        if (localStorage.getItem('userId') !== this.list_id_pro[0]['sellerId'].toString()) {
            this.http.post('/api/cart', { User_id: localStorage.getItem('userId'), Product_id: this.selected }).subscribe(function (data) {
                // console.log(data)
                if (data['message']) {
                    alert("you have already added product to cart");
                }
                else {
                    alert("add to cart successfully!");
                }
            });
        }
        else if (localStorage.getItem('userId') === this.list_id_pro[0]['sellerId'].toString()) {
            alert("You can not add your product");
        }
        else {
            alert("please log in");
        }
        // console.log(this.counter);
        //this.MessageEvent.emit('hello');
    };
    ListingidComponent.prototype.onSend = function (data) {
        console.log(data);
        if (localStorage.getItem('userId') !== this.list_id_pro[0]['sellerId'].toString()) {
            this.http.post('/api/message', {
                userid: localStorage.getItem('userId'),
                productid: this.selected,
                sellerid: this.list_id_pro[0]['sellerId'],
                message: data,
                status: 0,
            }).subscribe(function (data) {
                console.log(data);
                if (data) {
                    alert('message sent');
                }
            });
        }
        else if (localStorage.getItem('userId') === this.list_id_pro[0]['sellerId'].toString()) {
            alert("You can not send message to your self");
        }
        else {
            alert("please log in");
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ListingidComponent.prototype, "MessageEvent", void 0);
    ListingidComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listingid',
            template: __webpack_require__(/*! ./listingid.component.html */ "./src/app/listingid/listingid.component.html"),
            styles: [__webpack_require__(/*! ./listingid.component.css */ "./src/app/listingid/listingid.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ListingidComponent);
    return ListingidComponent;
}());



/***/ }),

/***/ "./src/app/listings/listings.component.css":
/*!*************************************************!*\
  !*** ./src/app/listings/listings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n:root {\r\n    --jumbotron-padding-y: 3rem;\r\n  }\r\n  \r\n  .jumbotron {\r\n    padding-top: var(--jumbotron-padding-y);\r\n    padding-bottom: var(--jumbotron-padding-y);\r\n    margin-bottom: 0;\r\n    background-color: #fff;\r\n  }\r\n  \r\n  @media (min-width: 768px) {\r\n    .jumbotron {\r\n      padding-top: calc(var(--jumbotron-padding-y) * 2);\r\n      padding-bottom: calc(var(--jumbotron-padding-y) * 2);\r\n    }\r\n  }\r\n  \r\n  .jumbotron p:last-child {\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  .jumbotron-heading {\r\n    font-weight: 300;\r\n  }\r\n  \r\n  .jumbotron .container {\r\n    max-width: 40rem;\r\n  }\r\n  \r\n  .box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }\r\n  \r\n  /* Search Box */\r\n  \r\n  @media screen and (max-width: 600px) {\r\n    .selection input[type=search] {\r\n      float: none;\r\n      display: block;\r\n      text-align: left;\r\n      width: 100%;\r\n      margin: 0;\r\n      padding: 14px;\r\n    }\r\n    .selection input[type=search] {\r\n      border: 1px solid #ccc;  \r\n    }\r\n    }\r\n  \r\n  body {\r\n  padding-top: 3rem;\r\n  padding-bottom: 3rem;\r\n  color: #5a5a5a;\r\n}\r\n  \r\n  /* CUSTOMIZE THE CAROUSEL\r\n-------------------------------------------------- */\r\n  \r\n  /* Carousel base class */\r\n  \r\n  .carousel {\r\n  margin-bottom: 4rem;\r\n}\r\n  \r\n  /* Since positioning the image, we need to help out the caption */\r\n  \r\n  .carousel-caption {\r\n  bottom: 3rem;\r\n  z-index: 10;\r\n}\r\n  \r\n  /* Declare heights because of positioning of img element */\r\n  \r\n  .carousel-item {\r\n  height: 32rem;\r\n  background-color: #777;\r\n}\r\n  \r\n  .carousel-item > img {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  min-width: 100%;\r\n  height: 32rem;\r\n}\r\n  \r\n  /* MARKETING CONTENT\r\n-------------------------------------------------- */\r\n  \r\n  /* Center align the text within the three columns below the carousel */\r\n  \r\n  .marketing .col-lg-4 {\r\n  margin-bottom: 1.5rem;\r\n  text-align: center;\r\n}\r\n  \r\n  .marketing h2 {\r\n  font-weight: 400;\r\n}\r\n  \r\n  .marketing .col-lg-4 p {\r\n  margin-right: .75rem;\r\n  margin-left: .75rem;\r\n}\r\n  \r\n  /* Featurettes\r\n------------------------- */\r\n  \r\n  .featurette-divider {\r\n  margin: 5rem 0; /* Space out the Bootstrap <hr> more */\r\n}\r\n  \r\n  /* Thin out the marketing headings */\r\n  \r\n  .featurette-heading {\r\n  font-weight: 300;\r\n  line-height: 1;\r\n  letter-spacing: -.05rem;\r\n}\r\n  \r\n  /* RESPONSIVE CSS\r\n-------------------------------------------------- */\r\n  \r\n  @media (min-width: 40em) {\r\n  /* Bump up size of carousel content */\r\n  .carousel-caption p {\r\n    margin-bottom: 1.25rem;\r\n    font-size: 1.25rem;\r\n    line-height: 1.4;\r\n  }\r\n\r\n  .featurette-heading {\r\n    font-size: 50px;\r\n  }\r\n}\r\n  \r\n  @media (min-width: 62em) {\r\n  .featurette-heading {\r\n    margin-top: 7rem;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/listings/listings.component.html":
/*!**************************************************!*\
  !*** ./src/app/listings/listings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role=\"main\" style=\"margin-top: 70px;\">\n\n  <!-- <section class=\"jumbotron text-center\">\n    <div class=\"container\">\n      <h1 class=\"jumbotron-heading\">Book Store</h1>\n      <p class=\"lead text-muted\">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>\n    </div>\n  </section> -->\n\n  <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img class=\"first-slide\" src=\"assets/blur-book-close-up-163142.jpg\" alt=\"First slide\">\n        <div class=\"container\">\n          <div class=\"carousel-caption text-left\">\n            <h1>Buy Old Books.</h1>\n            <p>In an easy way.</p>\n            <p><a class=\"btn btn-lg btn-warning\" routerLink=\"/signup\" role=\"button\">Sign up today &raquo;</a></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"second-slide\" src=\"assets/black-and-white-blur-book-76752.jpg\" alt=\"Second slide\">\n        <div class=\"container\">\n          <div class=\"carousel-caption\">\n            <h1>Sell Your Old Books, and make money.</h1>\n            <p><a class=\"btn btn-lg btn-primary\" routerLink=\"/login\" role=\"button\">Log In &raquo;</a></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"third-slide\" src=\"assets/learn.jpg\" alt=\"Third slide\">\n        <div class=\"container\">\n          <div class=\"carousel-caption text-right\">\n            <h1>One more for good measure.</h1>\n            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n            <!-- <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Browse Test</a></p> -->\n          </div>\n        </div>\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n\n\n\n\n  <div class=\"album py-5 bg-light\">\n    <div class=\"container\">\n      <div class=\"selection\"> <!--Sorting Condion-->\n          <select (change)=\"sortbyprice($event.target.value)\" style=\"border-radius: 10px; margin-left: 1%;\">\n              <option selected>Sort By Price</option>\n              <option  [value]=1>Price Low to High</option>\n              <option  [value]=2>Price High to Low</option>\n          </select>\n      \n          <select name=\"bycondition\" (change)=\"sortFilter($event.target)\" style=\"margin-left: 8%; border-radius: 10px;\">\n              <option selected>Sort By Condition</option>\n              <option *ngFor=\"let cond of bookcondition\" [value]=\"cond\">{{cond}}</option>\n          </select>\n          <input type=\"search\" id=\"login-password\" style=\"margin-left: 8%; border-radius: 10px;\"  placeholder=\"Search By Book Name\" [(ngModel)]=\"Book\" (change)=\"onSearchChange($event.target.value)\" >\n          &nbsp;<button type=\"button\" class=\"btn btn-primary btn-sm\" style=\"margin-bottom: 5px;\">Search</button>\n          \n          <input type=\"search\" id=\"login-password\" style=\"margin-left: 10%; border-radius: 10px;\" placeholder=\"Search By Author Name\"  (change)=\"onSearchAuthor($event.target.value)\">\n          &nbsp; <button type=\"button\" class=\"btn btn-primary btn-sm\" style=\"margin-bottom: 5px;\">Search</button>\n      </div><br><!--Sorting Condion End Here-->\n      \n      <div class=\"row\">\n        <div class=\"col-md-4\" *ngFor=\"let do of pro\">\n          <div class=\"card mb-4 box-shadow\"  style=\"float: left;\">\n            <img class=\"card-img-top\" [src]=\"'/myimage/'+do.id\" alt=\"Card image cap\" width=\"100%\" height=\"50%\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">Book Name : {{do.BookName}}</h5>\n                <p class=\"card-text text-justify\"><b>Author Name :</b> {{do.AuthorName}}</p>\n                <p class=\"card-text text-justify\"><b>Description :</b> {{do.description}}</p>\n                <p class=\"card-text text-justify\"><b>Price :</b> {{do.price}}</p>\n                <p class=\"card-text text-justify\"><b>Book Condition :</b> {{do.condition}}</p>\n\n                <button class=\"btn btn-secondary\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Tooltip on top\" button (click)= \"listingsMenu(do.id)\">\n                More Details\n                </button>\n              \n            </div>\n          </div>\n        </div>\n        </div>\n        </div>\n        </div>\n      </main>"

/***/ }),

/***/ "./src/app/listings/listings.component.ts":
/*!************************************************!*\
  !*** ./src/app/listings/listings.component.ts ***!
  \************************************************/
/*! exports provided: ListingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingsComponent", function() { return ListingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListingsComponent = /** @class */ (function () {
    function ListingsComponent(_dataService, http, router, route) {
        this._dataService = _dataService;
        this.http = http;
        this.router = router;
        this.route = route;
        this.bookcondition = ["New", "Almost New", "Slight Damage", "Worn"];
    }
    ListingsComponent.prototype.getItems = function () {
        var _this = this;
        this._dataService.getProducts().subscribe(function (Prod) {
            _this.pro = Prod;
            console.log(_this.pro);
        });
    };
    ListingsComponent.prototype.ngOnInit = function () {
        this.getItems();
        this.filters = {
            condition: ""
        };
    };
    ListingsComponent.prototype.listingsMenu = function (id) {
        console.log(id);
        this.route.navigate(['listingid', id]);
    };
    ListingsComponent.prototype.sortbyprice = function (price) {
        var _this = this;
        if (price == 1) {
            this._dataService.getbypricelow().subscribe(function (Prod) {
                _this.pro = Prod;
                console.log(_this.pro);
            });
        }
        else if (price == 2) {
            this._dataService.getbypricehigh().subscribe(function (Prod) {
                _this.pro = Prod;
                console.log(_this.pro);
            });
        }
    };
    ListingsComponent.prototype.sortFilter = function (shape) {
        var _this = this;
        this.filters = {
            condition: shape.value
        };
        console.log(this.filters);
        this.http.post('/api/products/filter', this.filters).subscribe(function (data) {
            _this.pro = data;
            console.log(data);
        });
    };
    ListingsComponent.prototype.onSearchChange = function (book) {
        var _this = this;
        this.http.post('/api/products/filterbybook', { bookname: book }).subscribe(function (data) {
            _this.pro = data;
            console.log(data);
        });
    };
    ListingsComponent.prototype.onSearchAuthor = function (author) {
        var _this = this;
        this.http.post('/api/products/filterbyAuthor', { authorname: author }).subscribe(function (data) {
            _this.pro = data;
            console.log(data);
        });
    };
    ListingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listings',
            template: __webpack_require__(/*! ./listings.component.html */ "./src/app/listings/listings.component.html"),
            styles: [__webpack_require__(/*! ./listings.component.css */ "./src/app/listings/listings.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ListingsComponent);
    return ListingsComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/* New Css */\r\nhtml,body {\r\n\theight: 100%;\r\n}\r\nbody.my-login-page {\r\n\tbackground-color: #f7f9fb;\r\n\tfont-size: 14px;\r\n}\r\n.my-login-page .brand {\r\n\twidth: 90px;\r\n\theight: 90px;\r\n\toverflow: hidden;\r\n\tborder-radius: 50%;\r\n\tmargin: 0 auto;\r\n\tmargin: 40px auto;\r\n\tbox-shadow: 0 0 40px rgba(0,0,0,.05);\r\n}\r\n.my-login-page .brand img {\r\n\twidth: 100%;\r\n}\r\n.my-login-page .card-wrapper {\r\n\twidth: 400px;\r\n}\r\n.my-login-page .card {\r\n\tborder-color: transparent;\r\n\tbox-shadow: 0 0 40px rgba(0,0,0,.05);\r\n}\r\n.my-login-page .card.fat {\r\n\tpadding: 10px;\r\n}\r\n.my-login-page .card .card-title {\r\n\tmargin-bottom: 30px;\r\n}\r\n.my-login-page .form-control {\r\n\tborder-width: 2.3px;\r\n}\r\n.my-login-page .form-group label {\r\n\twidth: 100%;\r\n}\r\n.my-login-page .btn.btn-block {\r\n\tpadding: 12px 10px;\r\n}\r\n.my-login-page .margin-top20 {\r\n\tmargin-top: 20px;\r\n}\r\n.my-login-page .no-margin {\r\n\tmargin: 0;\r\n}\r\n.my-login-page .footer {\r\n\tmargin: 40px 0;\r\n\tcolor: #888;\r\n\ttext-align: center;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<p style=\"margin-top:50px;\"></p>\n<body class=\"my-login-page\">\n        <section class=\"h-100\">\n            <div class=\"container h-100\">\n                <div class=\"row justify-content-md-center h-100\">\n                    <div class=\"card-wrapper\">\n                        <div class=\"brand\">\n                            <img src=\"assets/logo.jpg\">\n                        </div>\n                        <div class=\"card fat\">\n                            <div class=\"card-body\">\n                                <h4 class=\"card-title\">Login</h4>\n                                <form name=\"myform1\" [formGroup]=\"myform1\" (ngSubmit)=\"onSubmit()\">\n                                 \n                                    <div class=\"form-group\">\n                                        <label for=\"email\">E-Mail Address</label>\n    \n                                        <input id=\"email\" type=\"email\" class=\"form-control\" name=\"email\" value=\"\" formControlName=\"email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" required autofocus>\n                                    </div>\n    \n                                    <div class=\"form-group\">\n                                        <label for=\"password\">Password\n                                            <a routerLink=\"/forgotpwd\" class=\"float-right\">\n                                                Forgot Password?\n                                            </a>\n                                        </label>\n                                        <input id=\"password\" type=\"password\" class=\"form-control\" formControlName=\"password\" name=\"pw\"  required data-eye >\n                                    </div>\n                                    <div class=\"form-group no-margin\">\n                                        <button class=\"btn btn-primary btn-block\" type=\"submit\" [disabled]=\"myform1.invalid\">\n                                            Login\n                                        </button>\n                                    </div>\n                                    <div class=\"margin-top20 text-center\">\n                                        New user? <a routerLink=\"/signup\">Create Account</a>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                        <div class=\"footer\">\n                            Copyright &copy; Booksell.com\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section><br><br>\n    </body>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, http, router, route) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.route = route;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.myform1 = this.fb.group({
            email: "",
            password: "",
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var values = this.myform1.value;
        console.log(values);
        this.postdata(values);
    };
    LoginComponent.prototype.postdata = function (data) {
        var _this = this;
        console.log(data);
        this.http.post('/api/log', data).subscribe(function (data) {
            if (data['message']) {
                alert("wrong credentials");
            }
            localStorage.setItem('userId', data[0]['id']);
            localStorage.setItem('email', data[0]['email']);
            localStorage.setItem('password', data[0]['password']);
            console.log(data.length);
            if (data.length == 1) {
                window.location.reload();
                _this.route.navigate(['']);
                console.log(data.length);
                alert("successful");
                _this.show = true;
            }
            else {
                alert("please enter correst details!!!");
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/message/message.component.css":
/*!***********************************************!*\
  !*** ./src/app/message/message.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/message/message.component.html":
/*!************************************************!*\
  !*** ./src/app/message/message.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p style=\"margin-top: 120px;\"></p>\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th scope=\"col\">Customer Email</th>\n      <th scope=\"col\">BookName</th>\n      <th scope=\"col\">Authors Name</th>\n      <th scope=\"col\">Message</th>\n      <th scope=\"col\">Reply</th>\n    </tr>\n  </thead>\n  <tbody *ngFor=\"let i of wishfetchmessage\">\n    <tr>\n      <td>{{i.email}}</td>\n      <td>{{i.BookName}}</td>\n      <td>{{i.AuthorName}}</td>\n      <td>{{i.message}}</td>\n      <td *ngIf=\"(i.status == 0)\" ><input type=\"text\" placeholder=\"Reply\" #messageInput>&nbsp;\n        <button id=\"submit\" type=\"submit\" value=\"submit\" class=\"btn btn-sm btn-primary center\" (click)=\"onSend(messageInput.value,i.Product_id,i.User_id,i.id)\">Send Message</button>\n      </td>\n    </tr>\n  </tbody>\n</table><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>\n"

/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageComponent = /** @class */ (function () {
    function MessageComponent(http) {
        this.http = http;
    }
    MessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.post('/api/message/fetchmessages', { sellerid: localStorage.getItem('userId') }).subscribe(function (data) {
            console.log(data);
            _this.wishfetchmessage = data;
            console.log(_this.wishfetchmessage);
            if (data['message']) {
                alert("You dont have ant message");
            }
        });
    };
    MessageComponent.prototype.onSend = function (data, data1, data2, data3) {
        var _this = this;
        this.http.post('/api/message/reply', { id: data3, userid: localStorage.getItem('userId'), productid: data1, sellerid: data2, message: data, status: 1 }).subscribe(function (data) {
            console.log(data);
            if (data) {
                alert('message sent');
                _this.ngOnInit();
            }
        });
    };
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* *[role=\"form\"] {\r\n    max-width: 530px;\r\n    padding: 15px;\r\n    margin: 0 auto;\r\n    border-radius: 0.3em;\r\n    /* background-color:  #b3b3ff; */\r\n    /* border:1px solid black;\r\n}\r\n\r\n*[role=\"form\"] h2 {\r\n    font-family: 'Open Sans' , sans-serif;\r\n    font-size: 40px;\r\n    font-weight: 600;\r\n    color: #000000;\r\n    margin-top: 5%;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    letter-spacing: 4px;\r\n}\r\n\r\nbody{\r\n    background-color: gainsboro;\r\n} */\r\n    html,body {\r\n\theight: 100%;\r\n}\r\n    body.my-login-page {\r\n\tbackground-color: #f7f9fb;\r\n\tfont-size: 14px;\r\n}\r\n    .my-login-page .brand {\r\n\twidth: 90px;\r\n\theight: 90px;\r\n\toverflow: hidden;\r\n\tborder-radius: 50%;\r\n\tmargin: 0 auto;\r\n\tmargin: 40px auto;\r\n\tbox-shadow: 0 0 40px rgba(0,0,0,.05);\r\n}\r\n    .my-login-page .brand img {\r\n\twidth: 100%;\r\n}\r\n    .my-login-page .card-wrapper {\r\n\twidth: 400px;\r\n}\r\n    .my-login-page .card {\r\n\tborder-color: transparent;\r\n\tbox-shadow: 0 0 40px rgba(0,0,0,.05);\r\n}\r\n    .my-login-page .card.fat {\r\n\tpadding: 10px;\r\n}\r\n    .my-login-page .card .card-title {\r\n\tmargin-bottom: 30px;\r\n}\r\n    .my-login-page .form-control {\r\n\tborder-width: 2.3px;\r\n}\r\n    .my-login-page .form-group label {\r\n\twidth: 100%;\r\n}\r\n    .my-login-page .btn.btn-block {\r\n\tpadding: 12px 10px;\r\n}\r\n    .my-login-page .margin-top20 {\r\n\tmargin-top: 20px;\r\n}\r\n    .my-login-page .no-margin {\r\n\tmargin: 0;\r\n}\r\n    .my-login-page .footer {\r\n\tmargin: 40px 0;\r\n\tcolor: #888;\r\n\ttext-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<p style=\"margin-top:50px;\"></p>\n<body class=\"my-login-page\">\n        <section class=\"h-100\">\n            <div class=\"container h-100\">\n                <div class=\"row justify-content-md-center h-100\">\n                    <div class=\"card-wrapper\">\n                        <div class=\"brand\">\n                            <img src=\"assets/logo.jpg\">\n                        </div>\n                        <div class=\"card fat\">\n                            <div class=\"card-body\">\n                                <h4 class=\"card-title\">Register</h4>\n                                <form name=\"myform\" [formGroup]=\"myform\" (ngSubmit)=\"onSubmit()\">\n                                 \n                                    <div class=\"form-group\">\n                                        <label for=\"name\">First Name</label>\n                                        <input id=\"name\" type=\"text\" class=\"form-control\" name=\"name\" formControlName=\"firstName\" pattern=\"[a-zA-z]+\" required autofocus>\n                                    </div>\n\n                                    <div class=\"form-group\">\n                                            <label for=\"name\">Last Name</label>\n                                            <input id=\"name\" type=\"text\" class=\"form-control\" name=\"name\" formControlName=\"lastName\" pattern=\"^[a-zA-Z\\s]+$\" required autofocus>\n                                        </div>\n    \n                                    <div class=\"form-group\">\n                                        <label for=\"email\">E-Mail Address</label>\n                                        <input id=\"email\" type=\"email\" class=\"form-control\" name=\"email\" formControlName=\"email\" pattern=\"\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*\" required>\n                                    </div>\n    \n                                    <div class=\"form-group\">\n                                        <label for=\"password\">Password</label>\n                                        <input id=\"password\" type=\"password\" class=\"form-control\" formControlName=\"password\" name=\"pw\" pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}\" title=\"Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters\" required data-eye>\n                                    </div>\n\n                                    <div class=\"form-group\">\n                                            <label for=\"collegename\">College Name</label>\n                                            <input id=\"password\" type=\"text\" class=\"form-control\"  formControlName=\"college\" pattern=\"^[a-zA-Z\\s]+$\" data-eye>\n                                    </div>\n\n                                    <div class=\"form-group\">\n                                            <label for=\"contactnumber\">Contact Number</label>\n                                            <input id=\"password\" type=\"number\" class=\"form-control\" pattern=\"[0-9]{10}\" formControlName=\"phone\" required data-eye>\n                                    </div>\n\n                                    <div class=\"form-group\">\n                                            <label for=\"address\">Address</label>\n                                            <textarea class=\"form-control\" rows=\"5\" id=\"comment\" formControlName=\"address\" required data-eye></textarea>\n                                    </div>\n    \n                                    <div class=\"form-group\">\n                                        <label>\n                                            <input type=\"checkbox\" name=\"aggree\" value=\"1\"> I agree to the Terms and Conditions\n                                        </label>\n                                    </div>\n    \n                                    <div class=\"form-group no-margin\">\n                                        <button type=\"submit\"  [disabled]=\"myform.invalid\" class=\"btn btn-primary btn-block\" title=\"Please fill above details\">\n                                            Register\n                                        </button>\n                                    </div>\n                                    <div class=\"margin-top20 text-center\">\n                                        Already have an account? <a routerLink=\"/login\">Login</a>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                        <div class=\"footer\">\n                            Copyright &copy; BookSell.com\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n    </body>\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(fb, http, route) {
        this.fb = fb;
        this.http = http;
        this.route = route;
        this.fileToUpload = null;
    }
    ;
    SignupComponent.prototype.ngOnInit = function () {
        this.myform = this.fb.group({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            college: "",
            phone: "",
            address: "",
        });
    };
    SignupComponent.prototype.onSubmit = function () {
        var values = this.myform.value;
        //console.log(values);
        this.postdata(values);
        this.posttosalesforce(values);
    };
    SignupComponent.prototype.postdata = function (data) {
        var _this = this;
        console.log(data);
        this.http.post('/api/users', data).subscribe(function (data) {
            if (data['message']) {
                alert("User already exist");
            }
            else {
                alert("User created successfully!");
                _this.route.navigate(['login']);
            }
            //console.log(data);
        });
    };
    SignupComponent.prototype.posttosalesforce = function (data) {
        this.http.post('/api/salesforce/contacts', data).subscribe(function (data) {
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/wishlist/wishlist.component.css":
/*!*************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n:root {\r\n    --jumbotron-padding-y: 3rem;\r\n  }\r\n  \r\n  .jumbotron {\r\n    padding-top: var(--jumbotron-padding-y);\r\n    padding-bottom: var(--jumbotron-padding-y);\r\n    margin-bottom: 0;\r\n    background-color: #fff;\r\n  }\r\n  \r\n  @media (min-width: 768px) {\r\n    .jumbotron {\r\n      padding-top: calc(var(--jumbotron-padding-y) * 2);\r\n      padding-bottom: calc(var(--jumbotron-padding-y) * 2);\r\n    }\r\n  }\r\n  \r\n  .jumbotron p:last-child {\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  .jumbotron-heading {\r\n    font-weight: 300;\r\n  }\r\n  \r\n  .jumbotron .container {\r\n    max-width: 40rem;\r\n  }\r\n  \r\n  .box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }\r\n  \r\n  /* Search Box */\r\n  \r\n  @media screen and (max-width: 600px) {\r\n    .selection input[type=search] {\r\n      float: none;\r\n      display: block;\r\n      text-align: left;\r\n      width: 100%;\r\n      margin: 0;\r\n      padding: 14px;\r\n    }\r\n    .selection input[type=search] {\r\n      border: 1px solid #ccc;  \r\n    }\r\n    }"

/***/ }),

/***/ "./src/app/wishlist/wishlist.component.html":
/*!**************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p style=\"margin-top: 113px;\">\n\n</p>\n\n<div class=\"container\">\n\n  <div class=\"col-4 card mx-2 p-4\" style=\"float: left; margin-left: 40px;  width: 334px;margin-top: 19px; text-align: center; border: 1px solid black;\" *ngFor=\"let do of wish\" >\n    <img class=\"card-img-top\" [src]=\"'http://localhost:2000/myimage/'+do.id\" alt=\"Card image cap\" style=\"width:90%; height:190px ;margin-top:10px\">\n\n     <h4 class=\"product-name\">{{do.BookName}}</h4>\n\n     <div class=\"product-book\">{{do.AuthorName}}</div>\n     <div class=\"row\">\n         <div class=\"col m-3 p-3\" id=\"price\">\n             <b> Rs.{{do.price}}</b>\n             <br>\n             <p>{{do.condition}}</p>\n\n\n         </div>\n\n\n     </div>\n     <button (click)=\"remove_book(do.id)\" class=\"btn btn-primary\">Romove item</button>\n    <button (click)=\"add_book(do.id)\" class=\"btn btn-primary\">Add to Cart</button>\n\n     </div>\n\n </div>`\n -->\n\n <main role=\"main\" style=\"margin-top: 63px;\">\n\n        <section class=\"jumbotron text-center\">\n          <div class=\"container\">\n            <h1 class=\"jumbotron-heading\">Wishlist Section</h1>\n            <p class=\"lead text-muted\">This section is showing the books or products that is saved or later. </p>\n          </div>\n        </section>\n      \n        <div class=\"album py-5 bg-light\">\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-md-4\" *ngFor=\"let do of wish\">\n                <div class=\"card mb-4 box-shadow\"  style=\"float: left;\">\n                  <img class=\"card-img-top\" [src]=\"'/myimage/'+do.id\" alt=\"Card image cap\" width=\"100%\" height=\"78%\">\n                  <div class=\"card-body\">\n                      <h5 class=\"card-title\">Book Name : {{do.BookName}}</h5>\n                      <p class=\"card-text text-justify\"><b>Description :</b> {{do.description}}</p>\n                      <p class=\"card-text text-justify\"><b>Price :</b> {{do.price}}</p>\n                      <p class=\"card-text text-justify\"><b>Book Condition :</b> {{do.condition}}</p>\n                      <div class=\"d-flex justify-content-between align-items-center\">\n                            \n                              <button type=\"button\" class=\"btn btn-sm btn-outline-danger\" (click)=\"remove_book(do.id)\"><strong>Remove Item</strong> </button>\n                              <button type=\"button\" class=\"btn btn-sm btn-outline-success\" (click)=\"add_book(do.id)\"><strong>Add to Cart</strong></button>\n                            \n                      </div>\n                  </div>\n                </div>\n              </div>\n              </div>\n              </div>\n              </div>\n            </main>"

/***/ }),

/***/ "./src/app/wishlist/wishlist.component.ts":
/*!************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.ts ***!
  \************************************************/
/*! exports provided: WishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistComponent", function() { return WishlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WishlistComponent = /** @class */ (function () {
    function WishlistComponent(data, http) {
        this.data = data;
        this.http = http;
    }
    WishlistComponent.prototype.ngOnInit = function () {
        this.fun();
    };
    WishlistComponent.prototype.fun = function () {
        var _this = this;
        this.http.post('/api/wish/wishlistfetch', { User_id: localStorage.getItem('userId') }).subscribe(function (data) {
            console.log(data);
            _this.wish = data;
        });
    };
    WishlistComponent.prototype.remove_book = function (data1) {
        var _this = this;
        this.http.post('/api/wish/wishlist_destroy', { User_id: localStorage.getItem('userId'), Product_id: data1 }).subscribe(function (data) {
            _this.fun();
        });
    };
    WishlistComponent.prototype.add_book = function (data) {
        //console.log(this.selected);
        this.selected = data;
        if (localStorage.getItem('userId')) {
            this.http.post('/api/cart', { User_id: localStorage.getItem('userId'), Product_id: this.selected }).subscribe(function (data) {
                // console.log(data)
                if (data['message']) {
                    alert("you have already added product to cart");
                }
                else {
                    alert("add to cart successfully!");
                }
            });
        }
        else {
            alert("please log in");
        }
        // console.log(this.counter);
        //this.MessageEvent.emit('hello');
    };
    WishlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wishlist',
            template: __webpack_require__(/*! ./wishlist.component.html */ "./src/app/wishlist/wishlist.component.html"),
            styles: [__webpack_require__(/*! ./wishlist.component.css */ "./src/app/wishlist/wishlist.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WishlistComponent);
    return WishlistComponent;
}());



/***/ }),

/***/ "./src/app/yourproducts/yourproducts.component.css":
/*!*********************************************************!*\
  !*** ./src/app/yourproducts/yourproducts.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n:root {\r\n    --jumbotron-padding-y: 3rem;\r\n  }\r\n  \r\n  .jumbotron {\r\n    padding-top: var(--jumbotron-padding-y);\r\n    padding-bottom: var(--jumbotron-padding-y);\r\n    margin-bottom: 0;\r\n    background-color: #fff;\r\n  }\r\n  \r\n  @media (min-width: 768px) {\r\n    .jumbotron {\r\n      padding-top: calc(var(--jumbotron-padding-y) * 2);\r\n      padding-bottom: calc(var(--jumbotron-padding-y) * 2);\r\n    }\r\n  }\r\n  \r\n  .jumbotron p:last-child {\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  .jumbotron-heading {\r\n    font-weight: 300;\r\n  }\r\n  \r\n  .jumbotron .container {\r\n    max-width: 40rem;\r\n  }\r\n  \r\n  .box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }\r\n  \r\n  /* Search Box */\r\n  \r\n  @media screen and (max-width: 600px) {\r\n    .selection input[type=search] {\r\n      float: none;\r\n      display: block;\r\n      text-align: left;\r\n      width: 100%;\r\n      margin: 0;\r\n      padding: 14px;\r\n    }\r\n    .selection input[type=search] {\r\n      border: 1px solid #ccc;  \r\n    }\r\n    }"

/***/ }),

/***/ "./src/app/yourproducts/yourproducts.component.html":
/*!**********************************************************!*\
  !*** ./src/app/yourproducts/yourproducts.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p style=\"margin-top: 113px;\">\n\n</p>\n\n<div class=\"container\">\n\n  <div class=\"col-4 card mx-2 p-4\" style=\"float: left; margin-left: 40px;  width: 334px;margin-top: 19px; text-align: center; border: 1px solid black;\" *ngFor=\"let do of pro\" >\n    <img class=\"card-img-top\" [src]=\"'http://localhost:2000/myimage/'+do.id\" alt=\"Card image cap\" style=\"width:90%; height:190px ;margin-top:10px\">\n\n    <h4 class=\"product-name\">{{do.BookName}}</h4>\n\n    <div class=\"product-book\">{{do.AuthorName}}</div>\n    <div class=\"row\">\n      <div class=\"col m-3 p-3\" id=\"price\">\n        <b> Rs.{{do.price}}</b>\n        <br>\n        <p>{{do.condition}}</p>\n\n\n      </div>\n\n\n    </div>\n    <button (click)=\"remove_book(do.id)\" class=\"btn btn-primary\">Romove item</button>\n\n  </div>\n\n</div>\n -->\n\n <main role=\"main\" style=\"margin-top: 63px;\">\n\n    <section class=\"jumbotron text-center\">\n      <div class=\"container\">\n        <h1 class=\"jumbotron-heading\">Your Added Books</h1>\n        <p class=\"lead text-muted\">This section is showing the books or products that is added by you. </p>\n      </div>\n    </section>\n  \n    <div class=\"album py-5 bg-light\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-4\" *ngFor=\"let do of pro\">\n            <div class=\"card mb-4 box-shadow\"  style=\"float: left;\">\n              <img class=\"card-img-top\" [src]=\"'/myimage/'+do.id\" alt=\"Card image cap\" width=\"100%\" height=\"400px\">\n              <div class=\"card-body\">\n                  <h5 class=\"card-title\">Book Name : {{do.BookName}}</h5>\n                  <p class=\"card-text text-justify\"><b>Description :</b> {{do.description}}</p>\n                  <p class=\"card-text text-justify\"><b>Price :</b> {{do.price}}</p>\n                  <p class=\"card-text text-justify\"><b>Book Condition :</b> {{do.condition}}</p>\n  \n                  <button class=\"btn btn-success\" button (click)=\"remove_book(do.id)\">Remove</button>\n                \n              </div>\n            </div>\n          </div>\n          </div>\n          </div>\n          </div>\n        </main>"

/***/ }),

/***/ "./src/app/yourproducts/yourproducts.component.ts":
/*!********************************************************!*\
  !*** ./src/app/yourproducts/yourproducts.component.ts ***!
  \********************************************************/
/*! exports provided: YourproductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YourproductsComponent", function() { return YourproductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var YourproductsComponent = /** @class */ (function () {
    function YourproductsComponent(http, data, router, route) {
        this.http = http;
        this.data = data;
        this.router = router;
        this.route = route;
    }
    YourproductsComponent.prototype.ngOnInit = function () {
        this.load();
    };
    YourproductsComponent.prototype.load = function () {
        var _this = this;
        this.http.post('http://localhost:2000/api/remove', { User_id: localStorage.getItem('userId') }).subscribe(function (data) {
            console.log(data);
            _this.pro = data;
        });
    };
    YourproductsComponent.prototype.remove_book = function (data1) {
        var _this = this;
        this.http.post('http://localhost:2000/api/remove/remove_complete', { User_id: localStorage.getItem('userId'), Product_id: data1 }).subscribe(function (data) {
            _this.load();
        });
    };
    YourproductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-yourproducts',
            template: __webpack_require__(/*! ./yourproducts.component.html */ "./src/app/yourproducts/yourproducts.component.html"),
            styles: [__webpack_require__(/*! ./yourproducts.component.css */ "./src/app/yourproducts/yourproducts.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], YourproductsComponent);
    return YourproductsComponent;
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

module.exports = __webpack_require__(/*! C:\Users\asd\Desktop\project (1)\project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
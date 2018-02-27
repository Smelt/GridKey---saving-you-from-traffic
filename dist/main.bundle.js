webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n  border-width: 0px;\n  box-shadow: 0px 0px;\n  background-color: rgba(255, 255, 255, 0.8);\n  margin: 0;\n  border-radius: 0px;\n  color: #6d6f7b;\n  border-bottom: 1px solid #6d6f7b;\n}\n\n#seperator {\n  width: 100%;\n  height: 52px;\n}\n\nnav a {\n  color: #6d6f7b;\n  font-family: 'Alegreya Sans SC', sans-serif;\n  font-size: 1.2em;\n  height: 100%;\n}\n\n#logoTitle {\n  font-size: 1.5em;\n  letter-spacing: .07em;\n}\n\n.footer {\n  border-top: 1px solid #6d6f7b;\n  background-color: rgb(245, 245, 245);\n  height: 20%;\n  margin-top: -1px;\n}\n\n\n\n\n\n#navSpacer {\n  width: 20px;\n}\n\n.fa-uber {\n  color: rgb(0, 0, 0, .2);\n}\n\n.row {\n  line-height: 2.0;\n}\n\n.footerContainer {\n  margin-left: 4%;\n  margin-right: 4%;\n  padding-top: 2%;\n}\n\n.footer a {\n  color: #6d6f7b;\n  size: 1.2em;\n\n}\n\n.fa-car {\n  color: rgb(255, 0, 0, .2);\n}\n\n.footer i {\n  margin-right: 2%;\n}\n\n#signUpBtn {\n  margin-right: 18px;\n}\n\n.footerspace {\n  padding-right: 15px;\n\n}\n\n/*CSS transitions */\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top fade-in\">\n\n  <div class=\"container\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\n        aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" id=\"logoTitle\" routerLink=\"/\"><i class=\"far fa-map\"></i> GridKey</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"navbar-collapse collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav navbar-right\">\n          <li>\n            <a  routerLinkActive=\"active\" routerLink=\"uber-tool\"> <i class=\"fab fa-uber\"></i> Uber Monitor</a>\n          </li>\n          \n        <li>\n          <a id=\"planTripsBtn\" routerLink=\"google-time\" routerLinkActive=\"active\"><i class=\"fas fa-car\"></i> Plan Trips</a>\n        </li>\n\n      </ul>\n    </div>\n    <!-- /.navbar-collapse -->\n  </div>\n  <!-- /.container-fluid -->\n</nav>\n<div id=\"seperator\"></div>\n<router-outlet></router-outlet>\n<div class=\"footer\">\n  <div class=\"footerContainer\">\n    <div class=\"row\">\n      <div class=\"col-xs-6\">\n        <a href=\"https://github.com/smelt\"><i class=\"fab fa-github\" aria-hidden=\"true\"></i><span class=\"footerspace\"></span>GitHub Link</a>\n      </div>\n      <div class=\"col-xs-6\">\n        <a href=\"https://www.linkedin.com/in/shivam-satyarthi-b78750118/\"><i class=\"fab fa-linkedin\" aria-hidden=\"true\"></i><span class=\"footerspace\"></span>LinkedIn</a>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-6\">\n        <a><i class=\"fa fa-gavel\" aria-hidden=\"true\"></i><span class=\"footerspace\"></span>Terms of Use</a>\n      </div>\n      <div class=\"col-xs-6\">\n        <a><i class=\"fa fa-sitemap\" aria-hidden=\"true\"></i><span class=\"footerspace\"></span>SiteMap</a>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-6\">\n        <p><i class=\"fa fa-male\" aria-hidden=\"true\"></i><span class=\"footerspace\"></span>Shivam Satyarthi</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__google_time_google_time_component__ = __webpack_require__("../../../../../src/app/google-time/google-time.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_google_maps_api_service__ = __webpack_require__("../../../../../src/app/services/google-maps-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__uber_tool_uber_tool_component__ = __webpack_require__("../../../../../src/app/uber-tool/uber-tool.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tech_stack_tech_stack_component__ = __webpack_require__("../../../../../src/app/tech-stack/tech-stack.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_uber_api_service__ = __webpack_require__("../../../../../src/app/services/uber-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__landing_landing_component__["a" /* LandingComponent */] },
    { path: 'google-time', component: __WEBPACK_IMPORTED_MODULE_7__google_time_google_time_component__["a" /* GoogleTimeComponent */] },
    { path: 'tech-stack', component: __WEBPACK_IMPORTED_MODULE_12__tech_stack_tech_stack_component__["a" /* TechStackComponent */] },
    { path: 'uber-tool', component: __WEBPACK_IMPORTED_MODULE_11__uber_tool_uber_tool_component__["a" /* UberToolComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__landing_landing_component__["a" /* LandingComponent */],
                __WEBPACK_IMPORTED_MODULE_7__google_time_google_time_component__["a" /* GoogleTimeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__uber_tool_uber_tool_component__["a" /* UberToolComponent */],
                __WEBPACK_IMPORTED_MODULE_12__tech_stack_tech_stack_component__["a" /* TechStackComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__services_google_maps_api_service__["a" /* GoogleMapsApiService */], __WEBPACK_IMPORTED_MODULE_13__services_uber_api_service__["a" /* UberApiService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/google-time/google-time.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#box {\n  border: 1px solid #6d6f7b;\n  color: #6d6f7b;\n  width: 100%;\n  padding-left: 16%;\n  padding-bottom: 2%;\n  background-color: white;\n  box-sizing: border-box;\n}\n\na {\n  text-decoration: none;\n}\n\nh3 {\n  font-size: 1.6em;\n}\n\ntr {\n  /*border: 1px solid rgba(220, 220, 220, 0.5);*/\n  padding: 5px;\n}\n\n.personalContainer {\n  width: 100%;\n  padding-left: 2%;\n  padding-right: 2%;\n  padding-top: 2%;\n  background-color: white;\n}\n\n#construction {\n  margin-top: -2px;\n  padding-top: -3px;\n  color: rgb(156, 156, 156);\n  background-color: white;\n}\n\ntr:hover {\n  font-size: 1.2em;\n  background: rgb(202, 244, 255);\n  text-decoration: none;\n}\n\n#planner span {\n  padding-right: 60px;\n}\n\n#justTime {\n  padding-right: 115px;\n}\n\n#arrowSpace {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.suggestedLocs {\n  color: black;\n  margin-top: 2%;\n  transition-duration: 1s;\n\n}\n\n#pop-locations {\n  margin-top: 5%;\n  padding-left: 2%;\n  padding-top: 3%;\n  border: solid 1px #6d6f7b;\n}\n\n.table {\n  width: 80%;\n  box-sizing: border-box;\n}\n\n#planner {\n  margin-top: 10%;\n  border: 1px solid #6d6f7b;\n  color: #6d6f7b;\n  width: 100%;\n  padding-left: 16%;\n  padding-bottom: 2%;\n  background-color: white;\n}\n\n#baseResult {\n  padding: 1%;\n  padding-top: 2%;\n  width: 40%;\n  border: 1px solid #6d6f7b;\n  font-size: 1.2em;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  margin: 0 auto;\n  margin-top: 4%;\n}\n\n#graphContainer {\n  padding: 1%;\n  padding-top: 2%;\n  padding-bottom: 2.1%;\n  border: 1px solid #6d6f7b;\n  background-color: white;\n}\n\n.info-text {\n  text-align: center;\n  padding-left: 10%;\n  padding-right: 10%;\n  padding-top: 2.5%;\n}\n\n#filler {\n  height: 20%;\n  width: 100%;\n  background-color: white;\n\n}\n\n\n\n\n.results {\n  color: green;\n  background-color:rgba(170, 247, 193, 0.6);\n  border-radius: 8%;\n  padding-left: 1.3px;\n  padding-right: 1.3px;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  font-weight: 600;\n}\n\n.results-minor {\n  color: green;\n  background-color:rgba(170, 247, 193, 0.6);\n  border-radius: 8%;\n  margin-top: 5px;\n  padding-left: 1.3px;\n  padding-right: 1.3px;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  font-weight: 400;\n  font-size: 0.9em;\n}\n\n.textResult {\n  text-align: center;\n}\n\n#resultsSpacer {\n  padding-left: 2%;\n  padding-right: 2%;\n}\n\n\n\n\n\n.slow-fade-delay {\n  animation: 2.5s ease-in 0s 1 fade-in-animation;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/google-time/google-time.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"personalContainer\">\n  <div class=\"row\">\n    <div class=\"col-md-5\">\n      <div id=\"box\" class=\"left-slide\">\n        <form (ngSubmit)=\"onSubmitLoc(f)\" #f=\"ngForm\" novalidate>\n          <h3>Plan Journey</h3>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput type=\"text\" class=\"form-control\" id=\"origin\" name=\"origin\" [(ngModel)]=\"origin\" placeholder=\"Origin\">\n          </mat-form-field>\n          <button type=\"button\" (click)=\"switchButton()\" mat-icon-button color=\"primary\">\n            <i class=\"material-icons\">swap_horiz</i>\n          </button>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput [(ngModel)]=\"destination\" type=\"text\" class=\"form-control\" id=\"destination\" name=\"destination\" ngModel placeholder=\"Destination\">\n          </mat-form-field>\n          <button mat-icon-button color=\"primary\" type=\"submit\">\n            <i class=\"material-icons\">directions</i>\n          </button>\n\n          <table class=\"table\">\n            <tbody>\n              <tr class=\"animated\" (click)=\"frequentLocationButton('432 Park Ave, New York, NY 10022')\">\n                <a>\n                  <i class=\"fa fa-home\" aria-hidden=\"true\"></i> Home\n                  <span class=\"suggestedLocs\">432 Park Ave, New York, NY 10022 </span>\n                </a>\n              </tr>\n              <tr class=\"animated\" (click)=\"frequentLocationButton('285 Fulton St, New York, NY 10007')\">\n                <a>\n                  <i class=\"fa fa-suitcase\" aria-hidden=\"true\"></i> Work\n                  <span class=\"suggestedLocs\">285 Fulton St, New York, NY 10007</span>\n                </a>\n              </tr>\n              <tr class=\"animated\" (click)=\"frequentLocationButton('1000 5th Ave, New York, NY 10028')\">\n                <a>\n                  <i class=\"far fa-clock\" aria-hidden=\"true\"></i>\n                  <span class=\"suggestedLocs\"> 1000 5th Ave, New York, NY 10028</span>\n                </a>\n              </tr>\n              <tr class=\"animated\" (click)=\"frequentLocationButton('350 5th Ave, New York, NY 10118')\">\n                <a>\n                  <i class=\"far fa-clock\" aria-hidden=\"true\"></i>\n                  <span class=\"suggestedLocs\"> 350 5th Ave, New York, NY 10118</span>\n                </a>\n              </tr>\n            </tbody>\n          </table>\n        </form>\n      </div>\n        <div id=\"planner\" class=\"left-slide\">\n          <h3>Workday Planner</h3>\n            <div>\n              <label id=\"labelAlcoholContent\" for=\"hoursAtWork\">Time at Work (including Breaks)</label>\n              <mat-slider [(ngModel)]=\"hoursAtWork\" thumb-label=\"true\" color=\"primary\" id=\"hoursAtWork\" min=\"0\" max=\"12\" step=\"0.5\" displayValue=\"number\"\n                value=\"8.0\"></mat-slider>\n            </div>\n          <p>Suggested morning departure:<span></span>{{csStart}}</p>\n          <p>Suggested evening departure: <span></span>{{csEnd}}</p>\n          <p>Total commute time: <a id=\"justTime\"></a>{{csTotalCommute}} minutes</p>\n        </div>\n    </div>\n\n\n\n    <div class=\"col-md-7\">\n      <div id=\"graphContainer\">\n        <canvas  class=\"right-slide\" id=\"graph\" baseChart height=\"210\" width=\"400\" [datasets]=\"commuteLengthData\" [labels]=\"timeIntervals\" [options]=\"lineChartOptions\"\n          [colors]=\"lineChartColors\" [legend]=\"lineChartLegend\" [chartType]=\"lineChartType\" (chartHover)=\"chartHovered($event)\"\n          (chartClick)=\"chartClicked($event)\"></canvas>\n          <div class=\"info-text slow-fade-delay\"><i class=\"fas fa-info\"></i> <em>Ideal traffic times are calculated. But to choose your own start and leave times. Click on a data point in the graph for when you want to start/end commute.</em></div>\n      </div>\n      \n    </div>\n  </div>\n  <div class=\"row\">\n\n      <div id=\"baseResult\" class=\"bottom-slide\" *ngIf=\"duration != -1\">\n          <p class=\"textResult\">Traffic free commute time: <span class=\"results\">{{duration}} </span> <span id=\"resultsSpacer\"></span> Route Distance: <span class=\"results\">{{distance}} miles.</span></p>\n          <p class=\"textResult\" >Start time: <span class=\"results-minor\">{{userStartTime}} mins</span> <span id=\"resultsSpacer\"> </span>Duration: <span class=\"results-minor\">{{userStartDuration}}</span></p>\n          <p class=\"textResult\">Leave time: <span class=\"results-minor\">{{userEndTime}} mins</span> <span id=\"resultsSpacer\"> </span>Duration: <span class=\"results-minor\">{{userEndDuration}}</span></p>\n      </div>\n  </div>\n  </div>\n  <div id=\"filler\">\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/google-time/google-time.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleTimeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_google_maps_api_service__ = __webpack_require__("../../../../../src/app/services/google-maps-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GoogleTimeComponent = (function () {
    function GoogleTimeComponent(mapsService) {
        this.mapsService = mapsService;
        this.hoursAtWork = 10;
        this.distance = -1;
        this.duration = -1;
        this.userStartTime = '-1';
        this.userStartDuration = -1;
        this.userEndTime = '-1';
        this.userEndDuration = -1;
        this.csStart = "0:00";
        this.csEnd = "24:00";
        this.csTotalCommute = 60;
        // lineChart
        this.commuteLengthData = [
            { data: [67, 59, 62, 63, 56, 55, 56, 53, 59, 63, 60, 54, 50, 60, 62, 63, 65, 63, 51, 50, 49, 48], label: 'Minutes' }
        ];
        this.timeIntervals = ['5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00',
            '12:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00'];
        this.lineChartOptions = {
            responsive: true,
            title: {
                display: true,
                text: 'Commute Time'
            },
            scales: {
                yAxes: [{
                        display: true,
                        ticks: {
                            suggestedMin: 0,
                            // OR //
                            beginAtZero: true // minimum value will be 0.
                        }
                    }]
            }
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(170, 247, 193, 0.6)',
                borderColor: 'rgb(188, 192, 214)',
                pointBackgroundColor: 'green',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = false;
        this.lineChartType = 'line';
    }
    // events
    GoogleTimeComponent.prototype.chartClicked = function (e) {
        if (e.active[0]._index != undefined) {
            var index = parseInt(e.active[0]._index);
            var time = this.timeIntervals[index];
            var duration = parseInt(this.commuteLengthData[0].data[index]);
            var length_1 = this.timeIntervals.length;
            if (index < length_1 / 2) {
                this.userStartTime = time;
                this.userStartDuration = duration;
            }
            else {
                this.userEndTime = time;
                this.userEndDuration = duration;
            }
        }
    };
    GoogleTimeComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    GoogleTimeComponent.prototype.switchButton = function () {
        var tempOrigin = this.origin;
        this.origin = this.destination;
        this.destination = tempOrigin;
        this.idealCommute();
    };
    GoogleTimeComponent.prototype.frequentLocationButton = function (location) {
        if (this.origin === undefined || this.origin.length === 0) {
            this.origin = location;
        }
        else if (this.origin.length === 0 || this.destination === undefined || this.destination.length === 0) {
            this.destination = location;
        }
    };
    GoogleTimeComponent.prototype.idealCommute = function () {
        var workTime = this.hoursAtWork;
        var minDuration = 99999;
        var startDex = 0;
        var travelTimes = this.commuteLengthData[0].data;
        if (travelTimes.length > 18) {
            workTime * 4;
        }
        for (var i = 0; i < travelTimes.length - workTime - 4; i++) {
            var sumTime = travelTimes[i] + travelTimes[i + workTime];
            if (sumTime < minDuration) {
                minDuration = sumTime;
                startDex = i;
            }
        }
        this.userStartDuration = travelTimes[startDex];
        this.userStartTime = this.timeIntervals[startDex];
        this.userEndDuration = travelTimes[startDex + workTime];
        this.userEndTime = this.timeIntervals[startDex + workTime];
        this.csStart = this.userStartTime;
        this.csEnd = this.userEndTime;
        this.csTotalCommute = this.userStartDuration + this.userEndDuration;
    };
    GoogleTimeComponent.prototype.onSubmitLoc = function (form) {
        var _this = this;
        var origin = form.value.origin;
        var destination = form.value.destination;
        this.mapsService.currentTimeCheck(origin, destination).subscribe(function (response) {
            var travelObj = response.json();
            var travelArr = travelObj.arr;
            var departureTimes = [];
            var commuteTimeSeconds = [];
            var commuteTimeMinutes = [];
            var commuteTime = [];
            _this.distance = travelObj.distance;
            _this.duration = travelObj.duration;
            for (var i = 0; i < travelArr.length - 1; i++) {
                commuteTimeMinutes.push(travelArr[i].commuteMinutes);
            }
            for (var i = 0; i < travelArr.length; i += 1) {
                departureTimes.push(travelArr[i].timeStr);
            }
            _this.timeIntervals = departureTimes;
            _this.commuteLengthData[0].data = commuteTimeMinutes;
            _this.commuteLengthData[0].label = 'Minutes';
            _this.idealCommute();
        });
    };
    GoogleTimeComponent.prototype.ngOnInit = function () {
        this.idealCommute();
    };
    GoogleTimeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-google-time',
            template: __webpack_require__("../../../../../src/app/google-time/google-time.component.html"),
            styles: [__webpack_require__("../../../../../src/app/google-time/google-time.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_google_maps_api_service__["a" /* GoogleMapsApiService */]])
    ], GoogleTimeComponent);
    return GoogleTimeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".blurb {\n  animation: 2s ease-out 0s 1 ;\n  text-align: center;\n  padding-top: 25%;\n  font-size: 1.5em;\n  color: #6d6f7b;\n  width: 100%;\n  padding-left: 10%;\n  padding-right: 10%;\n  \n}\n\n.blurb h1 {\n  font-size: 3.2em;\n  width: 100%;\n  height: 100%;\n}\n\ndiv {\n  padding: 0;\n  display: inline-block;\n  margin: 0;\n  padding: 0;\n}\n\n\n#heartIcon {\n  color: rgba(255, 0, 0, 0.603);\n}\n\n#timeIcon {\n  color: rgb(238, 193, 46);\n}\n\n#leafIcon {\n  color: rgb(98, 184, 98);\n}\n\nimg {\n  width: 100%;\n}\n\n.bottomRight {\n  border-right: 1px solid gray;\n  border-bottom: 1px solid gray;\n}\n\n.topLeftBottom {\n  border-left: 1px solid gray;\n  border-top: 1px solid gray;\n  border-bottom: 1px solid gray;\n}\n\n.topRight {\n  border-top: 1px solid gray;\n  border-right: 1px solid gray;\n}\n\n.row {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  margin-bottom: -4px;\n}\n\n.container-fluid {\n  line-height: 1.428;\n  margin-top: -1px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-6 \">\n      <img class=\"bottomRight fade-in\" src=\"https://i.imgur.com/qaYYAQJ.jpg\">\n    </div>\n    <div class=\"col-md-6 right-slide\">\n      <div class=\"blurb\">\n        <h1>Saving your time <i id=\"timeIcon\" class=\"far fa-clock\" aria-hidden=\"true\"></i></h1>\n         <p>Time spent on the road is less time spent with family and friends. GridKey is the solution to minimize traffic times for your frequent commutes.</p>\n      </div>\n    </div>\n  </div>\n    <div class=\"row\">\n      <div class=\"col-md-6 left-slide\">\n        <div class=\"blurb\">\n          <h1>Lowering Stress <i id=\"heartIcon\" class=\"fa fa-heart\" aria-hidden=\"true\"></i></h1>\n          <p>Long commutes increase stress and are associated with higher weight and heart risks. Reducing your time on the road is a simple way to improve your health.</p>\n        </div>\n      </div>\n      <div class=\"col-md-6 fade-in\">\n        <img class=\"topLeftBottom fade-in\" id=\"bottomRight\" src=\"https://i.imgur.com/HpzjHPK.jpg\" >\n      </div>\n    </div>\n      <div class=\"row\">\n        <div class=\"col-md-6 \">\n          <img class=\"topRight\" src=\"https://i.imgur.com/4rRj50c.jpg\">\n        </div>\n          <div class=\"col-md-6\">\n            <div class=\"blurb fade-in left-slide\">\n              <h1>Protecting the Environment\n              <i id=\"leafIcon\"class=\"fab fa-envira\" aria-hidden=\"true\"></i>\n              </h1>\n              <p>Traffic increases pollution and vehicle emissions. Reducing traffic is a win/win way of protecting the environment and saving your time.</p>\n            </div>\n          </div>\n      </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__("../../../../../src/app/landing/landing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["x" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["E" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatStepperModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["x" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["E" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatStepperModule */],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/services/google-maps-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapsApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_finally__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/finally.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GoogleMapsApiService = (function () {
    function GoogleMapsApiService(http) {
        this.http = http;
        this.serverURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].serverUrl;
    }
    GoogleMapsApiService.prototype.currentTimeCheck = function (origin, destination) {
        // console.log(this.serverURL + '/mapdata/' + origin + '/' + destination);
        return this.http.get(this.serverURL + '/mapdata/' + origin + '/' + destination);
    };
    GoogleMapsApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], GoogleMapsApiService);
    return GoogleMapsApiService;
}());



/***/ }),

/***/ "../../../../../src/app/services/uber-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UberApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_finally__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/finally.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UberApiService = (function () {
    function UberApiService(http) {
        this.http = http;
        this.serverURL = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl;
    }
    UberApiService.prototype.getUberPrice = function (origin, destination) {
        // console.log(this.serverURL + '/mapdata/' + origin + '/' + destination);
        return this.http.get(this.serverURL + '/uber?' + 'origin=' + origin + '&destination=' + destination);
    };
    UberApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], UberApiService);
    return UberApiService;
}());



/***/ }),

/***/ "../../../../../src/app/tech-stack/tech-stack.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".filler {\n  height: 100%;\n  text-align: center;\n  background: url(https://i.imgur.com/BfeBV9I.jpg);\n}\n\n.filler h1 {\n  font-size: 2.5em;\n  color: #070f38;\n  width: 30%;\n  margin: auto;\n  padding-top: 5%;\n  padding-bottom: 5%;\n  float: left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tech-stack/tech-stack.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"filler\">\n <h1>Tech Stack: under construction cya soon!</h1>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/tech-stack/tech-stack.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechStackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TechStackComponent = (function () {
    function TechStackComponent() {
    }
    TechStackComponent.prototype.ngOnInit = function () {
    };
    TechStackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tech-stack',
            template: __webpack_require__("../../../../../src/app/tech-stack/tech-stack.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tech-stack/tech-stack.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TechStackComponent);
    return TechStackComponent;
}());



/***/ }),

/***/ "../../../../../src/app/uber-tool/uber-tool.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".filler {\n  height: 100%;\n  text-align: center;\n  background: url(https://i.imgur.com/BfeBV9I.jpg);\n}\n\n.filler h1 {\n  font-size: 2.5em;\n  color: #070f38;\n  width: 30%;\n  margin: auto;\n  padding-top: 5%;\n  padding-bottom: 5%;\n  float: left;\n}\n\n#uber-car {\n  width: 100%;\n}\n\n.container {\n  \n  text-align: center;\n  color: black;\n}\n\n.filler-row {\n  min-height: 100px;\n\n  width: 100%;\n\n}\n\n\n.centered {\n  position: absolute;\n  top: 20%;\n  left: 30%;\n\n  color: black;\n}\n\n\n.din {\n  display: inline-block;\n}\n\n#box {\n  border: 1px solid #6d6f7b;\n  color: #6d6f7b;\n  width: 100%;\n  padding-left: 16%;\n  padding-bottom: 2%;\n  background-color: white;\n}\n\na {\n  text-decoration: none;\n}\n\nh3 {\n  font-size: 1.6em;\n}\n\n\n.personalContainer {\n  width: 100%;\n  padding-left: 2%;\n  padding-right: 2%;\n  padding-top: 2%;\n  background-color: white;\n}\n\n#construction {\n  margin-top: -2px;\n  padding-top: -3px;\n  color: rgb(156, 156, 156);\n  background-color: white;\n}\n\ntr:hover {\n  font-size: 1.5em;\n  background: rgb(202, 244, 255);\n  text-decoration: none;\n}\n\n#planner span {\n  padding-right: 60px;\n}\n\n#justTime {\n  padding-right: 115px;\n}\n\n#arrowSpace {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.suggestedLocs {\n  color: black;\n  margin-top: 2%;\n  transition-duration: 1s;\n}\n\n#pop-locations {\n  margin-top: 5%;\n  padding-left: 2%;\n  padding-top: 3%;\n  border: solid 1px #6d6f7b;\n}\n\n.car-text {\n  color: white;\n  -webkit-text-stroke: 1px black;\n\n}\n\n.table {\n  width: 80%;\n}\n\n#planner {\n  margin-top: 10%;\n  border: 1px solid #6d6f7b;\n  color: #6d6f7b;\n  width: 100%;\n  padding-left: 16%;\n  padding-bottom: 2%;\n  background-color: white;\n}\n\n#graph {\n  padding: 1%;\n  padding-top: 2%;\n  border: 1px solid #6d6f7b;\n  background-color: white;\n}\n\n#filler {\n  height: 40%;\n  width: 100%;\n  background-color: white;\n\n}\n\n\n\n@keyframes fade-in-animation {\n  0%   { opacity: 0; }\n  80%   { opacity: 0; }\n  100% { opacity: 1; }\n}\n\n.fade-in-slow {\n  animation: 3.6s ease-out 0s 1 fade-in-animation;\n}\n\n\n@keyframes slideInCar {\n\n  0% {\n    transform: translateX(300%);\n  }\n\n  100% {\n    transform: translateX(0%);\n  }\n}\n\n.slide-car {\n  animation: 3.0s ease-out 0s 1 slideInCar;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/uber-tool/uber-tool.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"personalContainer\">\n  <div class=\"row\">\n    <div class=\"col-md-6 \">\n      <div id=\"box\" class=\"left-slide\">\n        <form (ngSubmit)=\"onSubmitLoc(f)\" #f=\"ngForm\" novalidate>\n          <h3>Check Price</h3>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput type=\"text\" class=\"form-control\" id=\"origin\" name=\"origin\" [(ngModel)]=\"origin\" placeholder=\"Origin\">\n          </mat-form-field>\n          <button type=\"button\" (click)=\"switchButton()\" mat-icon-button color=\"primary\">\n            <i class=\"material-icons\">swap_horiz</i>\n          </button>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput [(ngModel)]=\"destination\" type=\"text\" class=\"form-control\" id=\"destination\" name=\"destination\" ngModel placeholder=\"Destination\">\n          </mat-form-field>\n          <button mat-icon-button color=\"primary\" type=\"submit\">\n            <i class=\"material-icons\">directions</i>\n          </button>\n          <table class=\"table\">\n              <tbody>\n                <tr class=\"animated\" (click)=\"frequentLocationButton('432 Park Ave, New York, NY 10022')\">\n                  <a>\n                    <i class=\"fa fa-home\" aria-hidden=\"true\"></i> Home\n                    <span class=\"suggestedLocs\">432 Park Ave, New York, NY 10022 </span>\n                  </a>\n                </tr>\n                <tr class=\"animated\" (click)=\"frequentLocationButton('285 Fulton St, New York, NY 10007')\">\n                  <a>\n                    <i class=\"fa fa-suitcase\" aria-hidden=\"true\"></i> Work\n                    <span class=\"suggestedLocs\">285 Fulton St, New York, NY 10007</span>\n                  </a>\n                </tr>\n                <tr class=\"animated\" (click)=\"frequentLocationButton('1000 5th Ave, New York, NY 10028')\">\n                  <a>\n                    <i class=\"far fa-clock\" aria-hidden=\"true\"></i>\n                    <span class=\"suggestedLocs\"> 1000 5th Ave, New York, NY 10028</span>\n                  </a>\n                </tr>\n                <tr class=\"animated\" (click)=\"frequentLocationButton('350 5th Ave, New York, NY 10118')\">\n                  <a>\n                    <i class=\"far fa-clock\" aria-hidden=\"true\"></i>\n                    <span class=\"suggestedLocs\"> 350 5th Ave, New York, NY 10118</span>\n                  </a>\n                </tr>\n              </tbody>\n            </table>\n          </form>\n          <mat-form-field class=\"example-full-width\">\n            <span matPrefix>+1 &nbsp;</span>\n            <input type=\"tel\" matInput placeholder=\"Telephone\">\n            <mat-icon matSuffix>mode_edit</mat-icon>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n          </mat-form-field> \n      </div>\n    </div>\n\n  \n\n    <div class=\"col-md-7\">\n      \n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"filler-row\">\n      <h1></h1>\n    </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-md-3\">\n       \n            <div *ngIf=\"uberPrice != -1\">\n                <div class=\"centered\"><h2 class=\"car-text fade-in-slow\">${{uberPrice}}</h2></div>\n                  <img  id=\"uber-car\" class=\"slide-car\" src=\"../assets/images/uberCar_burned.png\">\n                  \n            </div>\n        \n         \n      </div>\n      <div class=\"col-md-9\">\n  \n      </div>\n    </div>\n   \n  </div>\n  <div id=\"filler\">\n      \n    </div>\n\n\n \n"

/***/ }),

/***/ "../../../../../src/app/uber-tool/uber-tool.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UberToolComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_uber_api_service__ = __webpack_require__("../../../../../src/app/services/uber-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UberToolComponent = (function () {
    function UberToolComponent(uberApiService) {
        this.uberApiService = uberApiService;
        this.uberPrice = "-1";
    }
    UberToolComponent.prototype.ngOnInit = function () {
    };
    UberToolComponent.prototype.frequentLocationButton = function (location) {
        if (this.origin === undefined || this.origin.length === 0) {
            this.origin = location;
        }
        else if (this.origin.length === 0 || this.destination === undefined || this.destination.length === 0) {
            this.destination = location;
        }
    };
    UberToolComponent.prototype.switchButton = function () {
        var tempOrigin = this.origin;
        this.origin = this.destination;
        this.destination = tempOrigin;
    };
    UberToolComponent.prototype.onSubmitLoc = function (form) {
        var _this = this;
        var origin = form.value.origin;
        var destination = form.value.destination;
        this.uberApiService.getUberPrice(origin, destination).subscribe(function (response) {
            var uberObj = response.json();
            _this.uberPrice = uberObj.price;
            console.log(uberObj.price);
            console.log(uberObj.duration);
        });
    };
    UberToolComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-uber-tool',
            template: __webpack_require__("../../../../../src/app/uber-tool/uber-tool.component.html"),
            styles: [__webpack_require__("../../../../../src/app/uber-tool/uber-tool.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_uber_api_service__["a" /* UberApiService */]])
    ], UberToolComponent);
    return UberToolComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    serverUrl: 'http://localhost:3000'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
document.body.classList.add('js-loading');
window.addEventListener("load", showPage);
function showPage() {
    document.body.classList.remove('js-loading');
}


/***/ }),

/***/ "../../../../chart.js/node_modules/moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../chart.js/node_modules/moment/locale/af.js",
	"./af.js": "../../../../chart.js/node_modules/moment/locale/af.js",
	"./ar": "../../../../chart.js/node_modules/moment/locale/ar.js",
	"./ar-dz": "../../../../chart.js/node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../chart.js/node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "../../../../chart.js/node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../chart.js/node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "../../../../chart.js/node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../chart.js/node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "../../../../chart.js/node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../chart.js/node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "../../../../chart.js/node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../chart.js/node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "../../../../chart.js/node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../chart.js/node_modules/moment/locale/ar-tn.js",
	"./ar.js": "../../../../chart.js/node_modules/moment/locale/ar.js",
	"./az": "../../../../chart.js/node_modules/moment/locale/az.js",
	"./az.js": "../../../../chart.js/node_modules/moment/locale/az.js",
	"./be": "../../../../chart.js/node_modules/moment/locale/be.js",
	"./be.js": "../../../../chart.js/node_modules/moment/locale/be.js",
	"./bg": "../../../../chart.js/node_modules/moment/locale/bg.js",
	"./bg.js": "../../../../chart.js/node_modules/moment/locale/bg.js",
	"./bn": "../../../../chart.js/node_modules/moment/locale/bn.js",
	"./bn.js": "../../../../chart.js/node_modules/moment/locale/bn.js",
	"./bo": "../../../../chart.js/node_modules/moment/locale/bo.js",
	"./bo.js": "../../../../chart.js/node_modules/moment/locale/bo.js",
	"./br": "../../../../chart.js/node_modules/moment/locale/br.js",
	"./br.js": "../../../../chart.js/node_modules/moment/locale/br.js",
	"./bs": "../../../../chart.js/node_modules/moment/locale/bs.js",
	"./bs.js": "../../../../chart.js/node_modules/moment/locale/bs.js",
	"./ca": "../../../../chart.js/node_modules/moment/locale/ca.js",
	"./ca.js": "../../../../chart.js/node_modules/moment/locale/ca.js",
	"./cs": "../../../../chart.js/node_modules/moment/locale/cs.js",
	"./cs.js": "../../../../chart.js/node_modules/moment/locale/cs.js",
	"./cv": "../../../../chart.js/node_modules/moment/locale/cv.js",
	"./cv.js": "../../../../chart.js/node_modules/moment/locale/cv.js",
	"./cy": "../../../../chart.js/node_modules/moment/locale/cy.js",
	"./cy.js": "../../../../chart.js/node_modules/moment/locale/cy.js",
	"./da": "../../../../chart.js/node_modules/moment/locale/da.js",
	"./da.js": "../../../../chart.js/node_modules/moment/locale/da.js",
	"./de": "../../../../chart.js/node_modules/moment/locale/de.js",
	"./de-at": "../../../../chart.js/node_modules/moment/locale/de-at.js",
	"./de-at.js": "../../../../chart.js/node_modules/moment/locale/de-at.js",
	"./de-ch": "../../../../chart.js/node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "../../../../chart.js/node_modules/moment/locale/de-ch.js",
	"./de.js": "../../../../chart.js/node_modules/moment/locale/de.js",
	"./dv": "../../../../chart.js/node_modules/moment/locale/dv.js",
	"./dv.js": "../../../../chart.js/node_modules/moment/locale/dv.js",
	"./el": "../../../../chart.js/node_modules/moment/locale/el.js",
	"./el.js": "../../../../chart.js/node_modules/moment/locale/el.js",
	"./en-au": "../../../../chart.js/node_modules/moment/locale/en-au.js",
	"./en-au.js": "../../../../chart.js/node_modules/moment/locale/en-au.js",
	"./en-ca": "../../../../chart.js/node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "../../../../chart.js/node_modules/moment/locale/en-ca.js",
	"./en-gb": "../../../../chart.js/node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "../../../../chart.js/node_modules/moment/locale/en-gb.js",
	"./en-ie": "../../../../chart.js/node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "../../../../chart.js/node_modules/moment/locale/en-ie.js",
	"./en-nz": "../../../../chart.js/node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "../../../../chart.js/node_modules/moment/locale/en-nz.js",
	"./eo": "../../../../chart.js/node_modules/moment/locale/eo.js",
	"./eo.js": "../../../../chart.js/node_modules/moment/locale/eo.js",
	"./es": "../../../../chart.js/node_modules/moment/locale/es.js",
	"./es-do": "../../../../chart.js/node_modules/moment/locale/es-do.js",
	"./es-do.js": "../../../../chart.js/node_modules/moment/locale/es-do.js",
	"./es.js": "../../../../chart.js/node_modules/moment/locale/es.js",
	"./et": "../../../../chart.js/node_modules/moment/locale/et.js",
	"./et.js": "../../../../chart.js/node_modules/moment/locale/et.js",
	"./eu": "../../../../chart.js/node_modules/moment/locale/eu.js",
	"./eu.js": "../../../../chart.js/node_modules/moment/locale/eu.js",
	"./fa": "../../../../chart.js/node_modules/moment/locale/fa.js",
	"./fa.js": "../../../../chart.js/node_modules/moment/locale/fa.js",
	"./fi": "../../../../chart.js/node_modules/moment/locale/fi.js",
	"./fi.js": "../../../../chart.js/node_modules/moment/locale/fi.js",
	"./fo": "../../../../chart.js/node_modules/moment/locale/fo.js",
	"./fo.js": "../../../../chart.js/node_modules/moment/locale/fo.js",
	"./fr": "../../../../chart.js/node_modules/moment/locale/fr.js",
	"./fr-ca": "../../../../chart.js/node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../chart.js/node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "../../../../chart.js/node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../chart.js/node_modules/moment/locale/fr-ch.js",
	"./fr.js": "../../../../chart.js/node_modules/moment/locale/fr.js",
	"./fy": "../../../../chart.js/node_modules/moment/locale/fy.js",
	"./fy.js": "../../../../chart.js/node_modules/moment/locale/fy.js",
	"./gd": "../../../../chart.js/node_modules/moment/locale/gd.js",
	"./gd.js": "../../../../chart.js/node_modules/moment/locale/gd.js",
	"./gl": "../../../../chart.js/node_modules/moment/locale/gl.js",
	"./gl.js": "../../../../chart.js/node_modules/moment/locale/gl.js",
	"./gom-latn": "../../../../chart.js/node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../chart.js/node_modules/moment/locale/gom-latn.js",
	"./he": "../../../../chart.js/node_modules/moment/locale/he.js",
	"./he.js": "../../../../chart.js/node_modules/moment/locale/he.js",
	"./hi": "../../../../chart.js/node_modules/moment/locale/hi.js",
	"./hi.js": "../../../../chart.js/node_modules/moment/locale/hi.js",
	"./hr": "../../../../chart.js/node_modules/moment/locale/hr.js",
	"./hr.js": "../../../../chart.js/node_modules/moment/locale/hr.js",
	"./hu": "../../../../chart.js/node_modules/moment/locale/hu.js",
	"./hu.js": "../../../../chart.js/node_modules/moment/locale/hu.js",
	"./hy-am": "../../../../chart.js/node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "../../../../chart.js/node_modules/moment/locale/hy-am.js",
	"./id": "../../../../chart.js/node_modules/moment/locale/id.js",
	"./id.js": "../../../../chart.js/node_modules/moment/locale/id.js",
	"./is": "../../../../chart.js/node_modules/moment/locale/is.js",
	"./is.js": "../../../../chart.js/node_modules/moment/locale/is.js",
	"./it": "../../../../chart.js/node_modules/moment/locale/it.js",
	"./it.js": "../../../../chart.js/node_modules/moment/locale/it.js",
	"./ja": "../../../../chart.js/node_modules/moment/locale/ja.js",
	"./ja.js": "../../../../chart.js/node_modules/moment/locale/ja.js",
	"./jv": "../../../../chart.js/node_modules/moment/locale/jv.js",
	"./jv.js": "../../../../chart.js/node_modules/moment/locale/jv.js",
	"./ka": "../../../../chart.js/node_modules/moment/locale/ka.js",
	"./ka.js": "../../../../chart.js/node_modules/moment/locale/ka.js",
	"./kk": "../../../../chart.js/node_modules/moment/locale/kk.js",
	"./kk.js": "../../../../chart.js/node_modules/moment/locale/kk.js",
	"./km": "../../../../chart.js/node_modules/moment/locale/km.js",
	"./km.js": "../../../../chart.js/node_modules/moment/locale/km.js",
	"./kn": "../../../../chart.js/node_modules/moment/locale/kn.js",
	"./kn.js": "../../../../chart.js/node_modules/moment/locale/kn.js",
	"./ko": "../../../../chart.js/node_modules/moment/locale/ko.js",
	"./ko.js": "../../../../chart.js/node_modules/moment/locale/ko.js",
	"./ky": "../../../../chart.js/node_modules/moment/locale/ky.js",
	"./ky.js": "../../../../chart.js/node_modules/moment/locale/ky.js",
	"./lb": "../../../../chart.js/node_modules/moment/locale/lb.js",
	"./lb.js": "../../../../chart.js/node_modules/moment/locale/lb.js",
	"./lo": "../../../../chart.js/node_modules/moment/locale/lo.js",
	"./lo.js": "../../../../chart.js/node_modules/moment/locale/lo.js",
	"./lt": "../../../../chart.js/node_modules/moment/locale/lt.js",
	"./lt.js": "../../../../chart.js/node_modules/moment/locale/lt.js",
	"./lv": "../../../../chart.js/node_modules/moment/locale/lv.js",
	"./lv.js": "../../../../chart.js/node_modules/moment/locale/lv.js",
	"./me": "../../../../chart.js/node_modules/moment/locale/me.js",
	"./me.js": "../../../../chart.js/node_modules/moment/locale/me.js",
	"./mi": "../../../../chart.js/node_modules/moment/locale/mi.js",
	"./mi.js": "../../../../chart.js/node_modules/moment/locale/mi.js",
	"./mk": "../../../../chart.js/node_modules/moment/locale/mk.js",
	"./mk.js": "../../../../chart.js/node_modules/moment/locale/mk.js",
	"./ml": "../../../../chart.js/node_modules/moment/locale/ml.js",
	"./ml.js": "../../../../chart.js/node_modules/moment/locale/ml.js",
	"./mr": "../../../../chart.js/node_modules/moment/locale/mr.js",
	"./mr.js": "../../../../chart.js/node_modules/moment/locale/mr.js",
	"./ms": "../../../../chart.js/node_modules/moment/locale/ms.js",
	"./ms-my": "../../../../chart.js/node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "../../../../chart.js/node_modules/moment/locale/ms-my.js",
	"./ms.js": "../../../../chart.js/node_modules/moment/locale/ms.js",
	"./my": "../../../../chart.js/node_modules/moment/locale/my.js",
	"./my.js": "../../../../chart.js/node_modules/moment/locale/my.js",
	"./nb": "../../../../chart.js/node_modules/moment/locale/nb.js",
	"./nb.js": "../../../../chart.js/node_modules/moment/locale/nb.js",
	"./ne": "../../../../chart.js/node_modules/moment/locale/ne.js",
	"./ne.js": "../../../../chart.js/node_modules/moment/locale/ne.js",
	"./nl": "../../../../chart.js/node_modules/moment/locale/nl.js",
	"./nl-be": "../../../../chart.js/node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "../../../../chart.js/node_modules/moment/locale/nl-be.js",
	"./nl.js": "../../../../chart.js/node_modules/moment/locale/nl.js",
	"./nn": "../../../../chart.js/node_modules/moment/locale/nn.js",
	"./nn.js": "../../../../chart.js/node_modules/moment/locale/nn.js",
	"./pa-in": "../../../../chart.js/node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "../../../../chart.js/node_modules/moment/locale/pa-in.js",
	"./pl": "../../../../chart.js/node_modules/moment/locale/pl.js",
	"./pl.js": "../../../../chart.js/node_modules/moment/locale/pl.js",
	"./pt": "../../../../chart.js/node_modules/moment/locale/pt.js",
	"./pt-br": "../../../../chart.js/node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "../../../../chart.js/node_modules/moment/locale/pt-br.js",
	"./pt.js": "../../../../chart.js/node_modules/moment/locale/pt.js",
	"./ro": "../../../../chart.js/node_modules/moment/locale/ro.js",
	"./ro.js": "../../../../chart.js/node_modules/moment/locale/ro.js",
	"./ru": "../../../../chart.js/node_modules/moment/locale/ru.js",
	"./ru.js": "../../../../chart.js/node_modules/moment/locale/ru.js",
	"./sd": "../../../../chart.js/node_modules/moment/locale/sd.js",
	"./sd.js": "../../../../chart.js/node_modules/moment/locale/sd.js",
	"./se": "../../../../chart.js/node_modules/moment/locale/se.js",
	"./se.js": "../../../../chart.js/node_modules/moment/locale/se.js",
	"./si": "../../../../chart.js/node_modules/moment/locale/si.js",
	"./si.js": "../../../../chart.js/node_modules/moment/locale/si.js",
	"./sk": "../../../../chart.js/node_modules/moment/locale/sk.js",
	"./sk.js": "../../../../chart.js/node_modules/moment/locale/sk.js",
	"./sl": "../../../../chart.js/node_modules/moment/locale/sl.js",
	"./sl.js": "../../../../chart.js/node_modules/moment/locale/sl.js",
	"./sq": "../../../../chart.js/node_modules/moment/locale/sq.js",
	"./sq.js": "../../../../chart.js/node_modules/moment/locale/sq.js",
	"./sr": "../../../../chart.js/node_modules/moment/locale/sr.js",
	"./sr-cyrl": "../../../../chart.js/node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../chart.js/node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../chart.js/node_modules/moment/locale/sr.js",
	"./ss": "../../../../chart.js/node_modules/moment/locale/ss.js",
	"./ss.js": "../../../../chart.js/node_modules/moment/locale/ss.js",
	"./sv": "../../../../chart.js/node_modules/moment/locale/sv.js",
	"./sv.js": "../../../../chart.js/node_modules/moment/locale/sv.js",
	"./sw": "../../../../chart.js/node_modules/moment/locale/sw.js",
	"./sw.js": "../../../../chart.js/node_modules/moment/locale/sw.js",
	"./ta": "../../../../chart.js/node_modules/moment/locale/ta.js",
	"./ta.js": "../../../../chart.js/node_modules/moment/locale/ta.js",
	"./te": "../../../../chart.js/node_modules/moment/locale/te.js",
	"./te.js": "../../../../chart.js/node_modules/moment/locale/te.js",
	"./tet": "../../../../chart.js/node_modules/moment/locale/tet.js",
	"./tet.js": "../../../../chart.js/node_modules/moment/locale/tet.js",
	"./th": "../../../../chart.js/node_modules/moment/locale/th.js",
	"./th.js": "../../../../chart.js/node_modules/moment/locale/th.js",
	"./tl-ph": "../../../../chart.js/node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../chart.js/node_modules/moment/locale/tl-ph.js",
	"./tlh": "../../../../chart.js/node_modules/moment/locale/tlh.js",
	"./tlh.js": "../../../../chart.js/node_modules/moment/locale/tlh.js",
	"./tr": "../../../../chart.js/node_modules/moment/locale/tr.js",
	"./tr.js": "../../../../chart.js/node_modules/moment/locale/tr.js",
	"./tzl": "../../../../chart.js/node_modules/moment/locale/tzl.js",
	"./tzl.js": "../../../../chart.js/node_modules/moment/locale/tzl.js",
	"./tzm": "../../../../chart.js/node_modules/moment/locale/tzm.js",
	"./tzm-latn": "../../../../chart.js/node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../chart.js/node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../chart.js/node_modules/moment/locale/tzm.js",
	"./uk": "../../../../chart.js/node_modules/moment/locale/uk.js",
	"./uk.js": "../../../../chart.js/node_modules/moment/locale/uk.js",
	"./ur": "../../../../chart.js/node_modules/moment/locale/ur.js",
	"./ur.js": "../../../../chart.js/node_modules/moment/locale/ur.js",
	"./uz": "../../../../chart.js/node_modules/moment/locale/uz.js",
	"./uz-latn": "../../../../chart.js/node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../chart.js/node_modules/moment/locale/uz-latn.js",
	"./uz.js": "../../../../chart.js/node_modules/moment/locale/uz.js",
	"./vi": "../../../../chart.js/node_modules/moment/locale/vi.js",
	"./vi.js": "../../../../chart.js/node_modules/moment/locale/vi.js",
	"./x-pseudo": "../../../../chart.js/node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../chart.js/node_modules/moment/locale/x-pseudo.js",
	"./yo": "../../../../chart.js/node_modules/moment/locale/yo.js",
	"./yo.js": "../../../../chart.js/node_modules/moment/locale/yo.js",
	"./zh-cn": "../../../../chart.js/node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../chart.js/node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "../../../../chart.js/node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../chart.js/node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "../../../../chart.js/node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../chart.js/node_modules/moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../chart.js/node_modules/moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
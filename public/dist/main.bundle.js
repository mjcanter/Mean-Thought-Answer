webpackJsonp([1,4],{

/***/ 142:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 142;


/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(153);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__thought_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent(_thoughtService, _redirect) {
        this._redirect = _redirect;
        this.user = '';
        _thoughtService.updateUser(this.user);
    }
    AppComponent.prototype.ngOnInit = function () {
        this._redirect.navigate(["/login"]);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(214),
        styles: [__webpack_require__(207)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__thought_service__["a" /* ThoughtService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__thought_service__["a" /* ThoughtService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_new_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__show_show_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__thought_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__delete_delete_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__newanswer_newanswer_component__ = __webpack_require__(151);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__new_new_component__["a" /* NewComponent */],
            __WEBPACK_IMPORTED_MODULE_6__show_show_component__["a" /* ShowComponent */],
            __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_11__delete_delete_component__["a" /* DeleteComponent */],
            __WEBPACK_IMPORTED_MODULE_12__newanswer_newanswer_component__["a" /* NewanswerComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__routes__["a" /* routing */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__thought_service__["a" /* ThoughtService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__thought_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__answer_answer_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__thought_thought_component__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewanswerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewanswerComponent = (function () {
    function NewanswerComponent(_thoughtService, _route, _redirect) {
        var _this = this;
        this._thoughtService = _thoughtService;
        this._route = _route;
        this._redirect = _redirect;
        this.thought = new __WEBPACK_IMPORTED_MODULE_4__thought_thought_component__["a" /* ThoughtComponent */];
        this.param = null;
        this.answer = new __WEBPACK_IMPORTED_MODULE_3__answer_answer_component__["a" /* answerComponent */];
        this.user = null;
        this._route.params.subscribe(function (param) {
            _this.param = param._id;
        }), _thoughtService.observedUser.subscribe(function (updatedUser) { _this.user = updatedUser; }, function (err) { }, function () { });
    }
    NewanswerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._thoughtService.getOne(this.param)
            .then(function (thought) { _this.thought = thought; })
            .catch(function (err) {
            console.log("TEST ERROR");
        });
    };
    NewanswerComponent.prototype.onNewanswer = function (answer) {
        var _this = this;
        console.log('button works');
        this._thoughtService.newcomment(this.param, this.answer)
            .then(function (thought) { _this.thought = thought, _this.answer.like = 0, _this._redirect.navigate(["dashboard"]); })
            .catch(function (err) {
            console.log("Add(2) ERROR");
        });
    };
    return NewanswerComponent;
}());
NewanswerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-newanswer',
        template: __webpack_require__(219),
        styles: [__webpack_require__(212)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__thought_service__["a" /* ThoughtService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__thought_service__["a" /* ThoughtService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object])
], NewanswerComponent);

var _a, _b, _c;
//# sourceMappingURL=newanswer.component.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__show_show_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_new_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newanswer_newanswer_component__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__delete_delete_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });







var APP_ROUTES = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'show/:_id', component: __WEBPACK_IMPORTED_MODULE_1__show_show_component__["a" /* ShowComponent */] },
    { path: 'new', component: __WEBPACK_IMPORTED_MODULE_2__new_new_component__["a" /* NewComponent */] },
    { path: 'delete/:_id', component: __WEBPACK_IMPORTED_MODULE_4__delete_delete_component__["a" /* DeleteComponent */] },
    { path: 'answer/:_id', component: __WEBPACK_IMPORTED_MODULE_3__newanswer_newanswer_component__["a" /* NewanswerComponent */] },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 214:
/***/ (function(module, exports) {

module.exports = "\n <p>Skeleton</p>\n <router-outlet></router-outlet>\n\n\n "

/***/ }),

/***/ 215:
/***/ (function(module, exports) {

module.exports = "<p> Hi {{ user }} <a [routerLink]=\"['/login']\">logout</a></p>\n<h1>Dashboard<h2>\n<p>All thoughts in the registry</p>\n\n\n\n<p *ngFor='let thought of thoughts'>\n{{thought.question}} answer#: {{ thought.answers.length }} last update: {{ thought.updatedAt | date:\n'medium' }}\n  <a [routerLink]=\"['/show', thought._id]\">show</a> <a [routerLink]=\"['/answer', thought._id]\">Answer</a> <a [routerLink]=\"['/delete', thought._id]\">delete</a>\n}\n}\n</p>\n<a [routerLink]=\"['/new']\">Add a deep thought</a>\n"

/***/ }),

/***/ 216:
/***/ (function(module, exports) {

module.exports = "<p>\n  delete works!\n</p>\n"

/***/ }),

/***/ 217:
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"updateUser()\">\n    <input type=\"text\" name=\"username\" \n    [(ngModel)]=\"username\"\n    minlength=\"2\" \n    #user='ngModel'>\n    <input type=\"submit\">\n</form>\n"

/***/ }),

/***/ 218:
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"onSubmit()\">\n<p>Deep Thought</p>\n    <input type=\"text\" name=\"question\"  \n    minlength=\"10\" \n    [(ngModel)]=\"thought.question\"\n    #question='ngModel'>\n<p>Description</p>\n    <input type=\"text\" name=\"description\" \n    [(ngModel)]=\"thought.description\"\n    #description='ngModel'> \n    <input type=\"submit\">\n</form>\n<a [routerLink]=\"['/dashboard']\">Home</a>"

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

module.exports = "{{ thought.question}}\n<form (submit)=\"onNewanswer()\">\n<p>New Answer</p>\n    <input type=\"text\" name=\"text\"  \n    minlength=\"4\" \n    [(ngModel)]=\"answer.text\"\n    #first_name='ngModel'>\n    <input type=\"text\" name=\"support\"  \n    minlength=\"4\" \n    [(ngModel)]=\"answer.support\"\n    #first_name='ngModel'>\n    <input type=\"submit\">\n</form>"

/***/ }),

/***/ 220:
/***/ (function(module, exports) {

module.exports = "<h1>\n{{thought.question}}\n</h1>\n<form (submit)=\"onLike()\">\n<p *ngFor='let answer of thought.answers'>\n{{ answer.text }} {{ answer.like }}\n</p>\n</form>\n<a [routerLink]=\"['/answer', thought._id]\">Answer this!</a>\n<a [routerLink]=\"['/new']\">New Thought!</a>\n<a [routerLink]=\"['/dashboard']\">Home</a>\n"

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThoughtService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ThoughtService = (function () {
    function ThoughtService(_http) {
        this._http = _http;
        this.observedUser = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](null);
    }
    ThoughtService.prototype.getAll = function () {
        return this._http.get('/thoughts').map(function (answers) { return answers.json(); }).toPromise();
    };
    ThoughtService.prototype.getOne = function (id) {
        return this._http.get('/show/' + id).map(function (answers) { return answers.json(); }).toPromise();
    };
    ThoughtService.prototype.makenew = function (thought) {
        console.log('services');
        return this._http.post('/new', thought).map(function (thoughts) { return thought.json(); }).toPromise();
    };
    ThoughtService.prototype.updatenow = function (thought) {
        return this._http.post('/updatethought/' + thought.id, thought).map(function (thoughts) { return thoughts.json(); }).toPromise();
    };
    ThoughtService.prototype.deletenow = function (id) {
        return this._http.get('/destroy/' + id).map(function (thoughts) { return thoughts.json(); }).toPromise();
    };
    ThoughtService.prototype.deletecomment = function (id1, id2) {
        return this._http.get('/answer/' + id1 + '/destroy/' + id2).map(function (thoughts) { return thoughts.json(); }).toPromise();
    };
    ThoughtService.prototype.newcomment = function (id, answer) {
        console.log('services', answer);
        return this._http.post('/newanswer/' + id, answer).map(function (answers) { return answers.json(); }).toPromise();
    };
    ThoughtService.prototype.updateUser = function (user) {
        this.observedUser.next(user);
        console.log(user);
    };
    ThoughtService.prototype.addlike = function (id) {
        console.log(id, 'services');
        return this._http.get('/likeanswer/' + id).map(function (thoughts) { return thoughts.json(); }).toPromise();
    };
    return ThoughtService;
}());
ThoughtService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ThoughtService);

var _a;
//# sourceMappingURL=thought.service.js.map

/***/ }),

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(143);


/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThoughtComponent; });
var ThoughtComponent = (function () {
    function ThoughtComponent(id, question, description, answers) {
        if (id === void 0) { id = null; }
        if (question === void 0) { question = ""; }
        if (description === void 0) { description = ""; }
        if (answers === void 0) { answers = []; }
        this.id = id;
        this.question = question;
        this.description = description;
        this.answers = answers;
    }
    return ThoughtComponent;
}());

//# sourceMappingURL=thought.component.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return answerComponent; });
var answerComponent = (function () {
    function answerComponent(id, text, support, like) {
        if (id === void 0) { id = null; }
        if (text === void 0) { text = ""; }
        if (support === void 0) { support = ""; }
        if (like === void 0) { like = 0; }
        this.id = id;
        this.text = text;
        this.support = support;
        this.like = like;
    }
    return answerComponent;
}());

//# sourceMappingURL=answer.component.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__thought_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(_thoughtService, _redirect) {
        var _this = this;
        this._thoughtService = _thoughtService;
        this._redirect = _redirect;
        this.user = null;
        this.thoughts = [];
        this.subscription = _thoughtService.observedUser.subscribe(function (updatedUser) { _this.user = updatedUser; }, function (err) { }, function () { });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._thoughtService.getAll()
            .then(function (thoughts) { _this.thoughts = thoughts; })
            .catch(function (err) { console.log("TEST ERROR"); });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__(215),
        styles: [__webpack_require__(208)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__thought_service__["a" /* ThoughtService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__thought_service__["a" /* ThoughtService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__thought_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__thought_thought_component__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeleteComponent = (function () {
    function DeleteComponent(_thoughtService, _route, _redirect) {
        var _this = this;
        this._thoughtService = _thoughtService;
        this._route = _route;
        this._redirect = _redirect;
        this.thought = new __WEBPACK_IMPORTED_MODULE_3__thought_thought_component__["a" /* ThoughtComponent */]();
        this.param = null;
        this._route.params.subscribe(function (param) {
            _this.param = param._id;
        });
    }
    DeleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._thoughtService.deletenow(this.param)
            .then(function (thought) { _this.thought = thought, _this._redirect.navigate(["/dashboard"]); })
            .catch(function (err) {
            console.log("Add(2) ERROR");
        });
    };
    return DeleteComponent;
}());
DeleteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-delete',
        template: __webpack_require__(216),
        styles: [__webpack_require__(209)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__thought_service__["a" /* ThoughtService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__thought_service__["a" /* ThoughtService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object])
], DeleteComponent);

var _a, _b, _c;
//# sourceMappingURL=delete.component.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thought_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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
    function LoginComponent(_thoughtService, _redirect) {
        this._thoughtService = _thoughtService;
        this._redirect = _redirect;
        this.username = '';
        _thoughtService.updateUser(this.username);
    }
    LoginComponent.prototype.updateUser = function () {
        this._thoughtService.updateUser(this.username);
        this._redirect.navigate(["/dashboard"]);
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(217),
        styles: [__webpack_require__(210)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__thought_service__["a" /* ThoughtService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__thought_service__["a" /* ThoughtService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__thought_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thought_thought_component__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewComponent = (function () {
    function NewComponent(_thoughtService, _redirect) {
        var _this = this;
        this._thoughtService = _thoughtService;
        this._redirect = _redirect;
        this.thought = new __WEBPACK_IMPORTED_MODULE_2__thought_thought_component__["a" /* ThoughtComponent */]();
        this.user = null;
        this.thoughts = [];
        this.subscription = _thoughtService.observedUser.subscribe(function (updatedUser) { _this.user = updatedUser; }, function (err) { }, function () { });
    }
    NewComponent.prototype.onSubmit = function () {
        var _this = this;
        this._thoughtService.makenew(this.thought)
            .then(function (thoughts) { _this.thoughts.push(thoughts), _this._redirect.navigate(["dashboard"]); })
            .catch(function (err) { _this._redirect.navigate(["dashboard"]); });
    };
    return NewComponent;
}());
NewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-new',
        template: __webpack_require__(218),
        styles: [__webpack_require__(211)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__thought_service__["a" /* ThoughtService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__thought_service__["a" /* ThoughtService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object])
], NewComponent);

var _a, _b;
//# sourceMappingURL=new.component.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__thought_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__answer_answer_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__thought_thought_component__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShowComponent = (function () {
    function ShowComponent(_thoughtService, _route, _redirect) {
        var _this = this;
        this._thoughtService = _thoughtService;
        this._route = _route;
        this._redirect = _redirect;
        this.thought = new __WEBPACK_IMPORTED_MODULE_4__thought_thought_component__["a" /* ThoughtComponent */];
        this.param = null;
        this.answer = new __WEBPACK_IMPORTED_MODULE_3__answer_answer_component__["a" /* answerComponent */];
        this.user = null;
        this._route.params.subscribe(function (param) {
            _this.param = param._id;
        }), _thoughtService.observedUser.subscribe(function (updatedUser) { _this.user = updatedUser; }, function (err) { }, function () { });
    }
    ShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._thoughtService.getOne(this.param)
            .then(function (thought) { _this.thought = thought; })
            .catch(function (err) {
            console.log("TEST ERROR");
        });
    };
    ShowComponent.prototype.onLike = function () {
        var _this = this;
        console.log(this);
        this._thoughtService.addlike(this.param)
            .then(function (thought) { _this.thought = thought, _this._redirect.navigate(["dashboard"]); })
            .catch(function (err) { console.log("Add(2) ERROR"); });
    };
    return ShowComponent;
}());
ShowComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-show',
        template: __webpack_require__(220),
        styles: [__webpack_require__(213)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__thought_service__["a" /* ThoughtService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__thought_service__["a" /* ThoughtService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object])
], ShowComponent);

var _a, _b, _c;
//# sourceMappingURL=show.component.js.map

/***/ })

},[489]);
//# sourceMappingURL=main.bundle.js.map
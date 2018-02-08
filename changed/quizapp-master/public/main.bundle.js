webpackJsonp([1,4],{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=C:/Users/Abc/Desktop/capstone1/changed/quizapp-master/frontend/src/polyfills.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // Function to check if user is authorized to view route
    AuthGuard.prototype.canActivate = function (router, state) {
        // Check if user is logge din
        if (this.authService.loggedIn()) {
            return true; // Return true: User is allowed to view route
        }
        else {
            this.redirectUrl = state.url; // Grab previous urul
            this.router.navigate(['/login']); // Return error and route to login page
            return false; // Return false: user not authorized to view page
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());

//# sourceMappingURL=C:/Users/Abc/Desktop/capstone1/changed/quizapp-master/frontend/src/auth.guard.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthorService = /** @class */ (function () {
    function AuthorService(http) {
        this.http = http;
        this.domain = "http://localhost:8080"; // Development Domain - Not Needed in Production
    }
    // Function to create headers, add token, to be used in HTTP requests
    AuthorService.prototype.createAuthenticationHeaders = function () {
        this.loadToken(); // Get token so it can be attached to headers
        // Headers configuration options
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({
                'Content-Type': 'application/json',
                'authorization': this.authToken // Attach token
            })
        });
    };
    // Function to get token from client local storage
    AuthorService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('token');
        ; // Get token and asssign to variable to be used elsewhere
    };
    // Function to register user accounts
    AuthorService.prototype.registerUser = function (user) {
        return this.http.post(this.domain + '/authorauthentication/register', user).map(function (res) { return res.json(); });
    };
    // Function to check if username is taken
    AuthorService.prototype.checkUsername = function (username) {
        return this.http.get(this.domain + '/authorauthentication/checkUsername/' + username).map(function (res) { return res.json(); });
    };
    // Function to check if e-mail is taken
    AuthorService.prototype.checkEmail = function (email) {
        return this.http.get(this.domain + '/authorauthentication/checkEmail/' + email).map(function (res) { return res.json(); });
    };
    // Function to login user
    AuthorService.prototype.login = function (user) {
        return this.http.post(this.domain + '/authorauthentication/login', user).map(function (res) { return res.json(); });
    };
    // Function to logout
    AuthorService.prototype.logout = function () {
        this.authToken = null; // Set token to null
        this.user = null; // Set user to null
        localStorage.clear(); // Clear local storage
    };
    // Function to store user's data in client local storage
    AuthorService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token); // Set token in local storage
        localStorage.setItem('user', JSON.stringify(user)); // Set user in local storage as string
        this.authToken = token; // Assign token to be used elsewhere
        this.user = user; // Set user to be used elsewhere
    };
    // Function to get user's profile data
    AuthorService.prototype.getProfile = function () {
        this.createAuthenticationHeaders(); // Create headers before sending to API
        return this.http.get(this.domain + '/authorauthentication/profile', this.options).map(function (res) { return res.json(); });
    };
    // Function to check if user is logged in
    AuthorService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    AuthorService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
    ], AuthorService);
    return AuthorService;
    var _a;
}());

//# sourceMappingURL=C:/Users/Abc/Desktop/capstone1/changed/quizapp-master/frontend/src/author.service.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_quiz_service__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddquizComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddquizComponent = /** @class */ (function () {
    function AddquizComponent(quizservice, router, location) {
        this.quizservice = quizservice;
        this.router = router;
        this.location = location;
        this.question = [];
        this.options = [];
        this.counter = 0;
        this.counter1 = 10;
        this.correctanswer1 = false;
        this.correctanswer2 = false;
        this.correctanswer3 = false;
        this.correctanswer4 = false;
    }
    AddquizComponent.prototype.ngOnInit = function () {
    };
    AddquizComponent.prototype.addQuestion = function (formvalue) {
        this.options = [];
        console.log("Form Value = " + JSON.stringify(formvalue.answer));
        switch (+formvalue.answer) {
            case 1: {
                this.correctanswer1 = true;
                break;
            }
            case 2: {
                this.correctanswer2 = true;
                break;
            }
            case 3: {
                this.correctanswer3 = true;
                break;
            }
            case 4: {
                this.correctanswer4 = true;
                break;
            }
        }
        var op1 = {
            id: this.counter1 + 1,
            questionId: this.counter + 1,
            name: formvalue.op1,
            isAnswer: this.correctanswer1,
        };
        this.counter1 += 1;
        var op2 = {
            id: this.counter1 + 1,
            questionId: this.counter + 1,
            name: formvalue.op2,
            isAnswer: this.correctanswer2,
        };
        this.counter1 += 1;
        var op3 = {
            id: this.counter1 + 1,
            questionId: this.counter + 1,
            name: formvalue.op3,
            isAnswer: this.correctanswer3,
        };
        this.counter1 += 1;
        var op4 = {
            id: this.counter1 + 1,
            questionId: this.counter + 1,
            name: formvalue.op4,
            isAnswer: this.correctanswer4,
        };
        this.options.push(op1);
        this.options.push(op2);
        this.options.push(op3);
        this.options.push(op4);
        var qs = {
            id: this.counter + 1,
            name: formvalue.qname,
            questionTypeId: 1,
            options: this.options,
            questiontype: {
                id: 1,
                name: "Multiple Choice",
                isActive: false
            }
        };
        this.counter += 1;
        this.question.push(qs);
        console.log(qs);
        this.correctanswer1 = false;
        this.correctanswer2 = false;
        this.correctanswer3 = false;
        this.correctanswer4 = false;
    };
    //  submit quiz form
    AddquizComponent.prototype.onSubmit = function (formvalue) {
        var _this = this;
        console.log("after submitting form ");
        var quiz = {
            id: 5,
            name: formvalue.quizname,
            author: formvalue.authorname,
            questions: this.question,
        };
        console.log(" values of form ");
        console.log(quiz);
        this.quizservice.addquiz(quiz)
            .subscribe(function () {
            console.log("quiz added to data base");
            _this.router.navigate(['admin']);
        }, function (err) {
            console.log(err);
        });
    };
    AddquizComponent.prototype.goBack = function () {
        this.location.back();
    };
    AddquizComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addquiz',
            template: __webpack_require__(342),
            styles: [__webpack_require__(334)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_quiz_service__["a" /* QuizService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_quiz_service__["a" /* QuizService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === "function" && _c || Object])
    ], AddquizComponent);
    return AddquizComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=C:/Users/Abc/Desktop/capstone1/changed/quizapp-master/frontend/src/addquiz.component.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_quiz_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_index__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewQuizComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { AuthService } from '../services/auth.service';



var ViewQuizComponent = /** @class */ (function () {
    function ViewQuizComponent(quizService, location, /*public authService: AuthService,*/ route) {
        this.quizService = quizService;
        this.location = location;
        this.route = route;
        this.username = '';
        this.email = '';
        this.quiz = new __WEBPACK_IMPORTED_MODULE_3__models_index__["a" /* Quiz */](null);
        this.mode = '';
        this.config = {
            'allowBack': true,
            'allowReview': true,
            'autoMove': false,
            'duration': 0,
            'pageSize': 1,
            'requiredAll': false,
            'richText': false,
            'shuffleQuestions': false,
            'shuffleOptions': false,
            'showClock': false,
            'showPager': true,
            'theme': 'none'
        };
        this.pager = {
            index: 0,
            size: 1,
            count: 1
        };
        this.id = 0;
    }
    ViewQuizComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.id = +params['id'];
        });
        this.quizService.get(this.id).subscribe(function (res) {
            console.log("responce from server ");
            console.log(res);
            _this.quiz = new __WEBPACK_IMPORTED_MODULE_3__models_index__["a" /* Quiz */](res);
            _this.pager.count = _this.quiz.questions.length;
        });
        this.mode = 'quiz';
        // this.quizName = this.quizes[0].id;
        //console.log(this.quizes);
        //this.loadQuiz(this.quizName);
        //this.authService.getProfile().subscribe(profile => {
        //this.username = profile.user.username; // Set username
        //this.email = profile.user.email; // Set e-mail
        //});
    };
    Object.defineProperty(ViewQuizComponent.prototype, "filteredQuestions", {
        //  onLogoutClick() {
        //    this.authService.logout(); // Logout user
        //    //this.flashMessagesService.show('You are logged out', { cssClass: 'alert-info' }); // Set custom flash message
        //    this.router.navigate(['/']); // Navigate back to home page
        //  }
        //   loadQuiz(quizName: string) {
        //     console.log(quizName);
        //     this.quizService.get(quizName).subscribe(res => {
        //       //console.log("responce from server ");
        //       //console.log(res);
        //       this.quiz = new Quiz(res);
        //       this.pager.count = this.quiz.questions.length;
        //     });
        //     this.mode = 'quiz';
        //   }
        get: function () {
            return (this.quiz.questions) ?
                this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
        },
        enumerable: true,
        configurable: true
    });
    ViewQuizComponent.prototype.onSelect = function (question, option) {
        if (question.questionTypeId === 1) {
            question.options.forEach(function (x) { if (x.id !== option.id)
                x.selected = false; });
        }
        if (this.config.autoMove) {
            this.goTo(this.pager.index + 1);
        }
    };
    ViewQuizComponent.prototype.goTo = function (index) {
        if (index >= 0 && index < this.pager.count) {
            this.pager.index = index;
            this.mode = 'quiz';
        }
    };
    ViewQuizComponent.prototype.isAnswered = function (question) {
        return question.options.find(function (x) { return x.selected; }) ? 'Answered' : 'Not Answered';
    };
    ;
    ViewQuizComponent.prototype.isCorrect = function (question) {
        return question.options.every(function (x) { return x.selected === x.isAnswer; }) ? 'correct' : 'wrong';
    };
    ;
    //   onSubmit() {
    //     let answers = [];
    //     this.quiz.questions.forEach(x => answers.push({ 'quizId': this.quiz.id, 'questionId': x.id, 'answered': x.answered }));
    //     // Post your data to the server here. answers contains the questionId and the users' answer.
    //     console.log(this.quiz.questions);
    //     this.mode = 'result';
    //   }
    ViewQuizComponent.prototype.goBack = function () {
        this.location.back();
    };
    ViewQuizComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-quiz',
            template: __webpack_require__(343),
            styles: [__webpack_require__(335)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_quiz_service__["a" /* QuizService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_quiz_service__["a" /* QuizService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_quiz_service__["a" /* QuizService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
    ], ViewQuizComponent);
    return ViewQuizComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=C:/Users/Abc/Desktop/capstone1/changed/quizapp-master/frontend/src/viewquiz.component.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_quiz_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminComponent = /** @class */ (function () {
    function AdminComponent(quizservice, authService, router) {
        this.quizservice = quizservice;
        this.authService = authService;
        this.router = router;
        this.username = '';
        this.email = '';
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quizservice.getquiz()
            .subscribe(function (quizes) {
            _this.quizes = quizes;
        });
        this.authService.getProfile().subscribe(function (profile) {
            _this.username = profile.user.username; // Set username
            _this.email = profile.user.email; // Set e-mail
        });
    };
    AdminComponent.prototype.deletequiz = function (id) {
        var _this = this;
        this.quizservice.deletequiz(id).subscribe();
        this.quizservice.getquiz()
            .subscribe(function (quizes) {
            _this.quizes = quizes;
        });
    };
    AdminComponent.prototype.onLogoutClick = function () {
        this.authService.logout(); // Logout user
        //this.flashMessagesService.show('You are logged out', { cssClass: 'alert-info' }); // Set custom flash message
        this.router.navigate(['/']); // Navigate back to home page
    };
    AdminComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addquiz',
            template: __webpack_require__(345),
            styles: [__webpack_require__(337)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_quiz_service__["a" /* QuizService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_quiz_service__["a" /* QuizService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
    ], AdminComponent);
    return AdminComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=C:/Users/Abc/Desktop/capstone1/changed/quizapp-master/frontend/src/author.component.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_author_service__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__ = __webpack_require__(122);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthorComponent = /** @class */ (function () {
    function AuthorComponent(formBuilder, authService, router, authGuard) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.authGuard = authGuard;
        this.processing = false;
        this.createForm(); // Create Login Form when component is constructed
    }
    // Function to create login form
    AuthorComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required] // Password field
        });
    };
    // Function to disable form
    AuthorComponent.prototype.disableForm = function () {
        this.form.controls['username'].disable(); // Disable username field
        this.form.controls['password'].disable(); // Disable password field
    };
    // Function to enable form
    AuthorComponent.prototype.enableForm = function () {
        this.form.controls['username'].enable(); // Enable username field
        this.form.controls['password'].enable(); // Enable password field
    };
    // Functiont to submit form and login user
    AuthorComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.processing = true; // Used to submit button while is being processed
        this.disableForm(); // Disable form while being process
        // Create user object from user's input
        var user = {
            username: this.form.get('username').value,
            password: this.form.get('password').value // Password input field
        };
        // Function to send login data to API
        this.authService.login(user).subscribe(function (data) {
            // Check if response was a success or error
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Set bootstrap error class
                _this.message = data.message; // Set error message
                _this.processing = false; // Enable submit button
                _this.enableForm(); // Enable form for editting
            }
            else {
                _this.messageClass = 'alert alert-success'; // Set bootstrap success class
                _this.message = data.message; // Set success message
                // Function to store user's token in client local storage
                _this.authService.storeUserData(data.token, data.user);
                // After 2 seconds, redirect to dashboard page
                setTimeout(function () {
                    // Check if user was redirected or logging in for first time
                    if (_this.previousUrl) {
                        _this.router.navigate([_this.previousUrl]); // Redirect to page they were trying to view before
                    }
                    else {
                        _this.router.navigate(['/admin']); // Navigate to dashboard view
                    }
                }, 2000);
            }
        });
    };
    AuthorComponent.prototype.ngOnInit = function () {
        // On page load, check if user was redirected to login
        if (this.authGuard.redirectUrl) {
            this.messageClass = 'alert alert-danger'; // Set error message: need to login
            this.message = 'You must be logged in to view that page.'; // Set message
            this.previousUrl = this.authGuard.redirectUrl; // Set the previous URL user was redirected from
            this.authGuard.redirectUrl = undefined; // Erase previous URL
        }
    };
    AuthorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'author-login',
            template: __webpack_require__(346)
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_author_service__["a" /* AuthorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_author_service__["a" /* AuthorService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__["a" /* AuthGuard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__["a" /* AuthGuard */]) === "function" && _d || Object])
    ], AuthorComponent);
    return AuthorComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=C:/Users/Abc/Desktop/capstone1/changed/quizapp-master/frontend/src/authorlogin.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_author_service__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService, authorService, router) {
        this.authService = authService;
        this.authorService = authorService;
        this.router = router;
        this.username = '';
        this.email = '';
    }
    HomeComponent.prototype.onLogoutClick = function () {
        this.authService.logout(); // Logout user
        //this.flashMessagesService.show('You are logged out', { cssClass: 'alert-info' }); // Set custom flash message
        this.router.navigate(['/']); // Navigate back to home page
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.username = profile.user.username; // Set username
            _this.email = profile.user.email; // Set e-mail
        });
        this.authorService.getProfile().subscribe(function (profile) {
            _this.username = profile.user.username; // Set username
            _this.email = profile.user.email; // Set e-mail
        });
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(347),
            styles: [__webpack_require__(338)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_author_service__["a" /* AuthorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_author_service__["a" /* AuthorService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=C:/Users/Abc/Desktop/capstone1/changed/quizapp-master/frontend/src/home.component.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__ = __webpack_require__(122);
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





var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, authService, router, authGuard) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.authGuard = authGuard;
        this.processing = false;
        this.createForm(); // Create Login Form when component is constructed
    }
    // Function to create login form
    LoginComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required] // Password field
        });
    };
    // Function to disable form
    LoginComponent.prototype.disableForm = function () {
        this.form.controls['username'].disable(); // Disable username field
        this.form.controls['password'].disable(); // Disable password field
    };
    // Function to enable form
    LoginComponent.prototype.enableForm = function () {
        this.form.controls['username'].enable(); // Enable username field
        this.form.controls['password'].enable(); // Enable password field
    };
    // Functiont to submit form and login user
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.processing = true; // Used to submit button while is being processed
        this.disableForm(); // Disable form while being process
        // Create user object from user's input
        var user = {
            username: this.form.get('username').value,
            password: this.form.get('password').value // Password input field
        };
        // Function to send login data to API
        this.authService.login(user).subscribe(function (data) {
            // Check if response was a success or error
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Set bootstrap error class
                _this.message = data.message; // Set error message
                _this.processing = false; // Enable submit button
                _this.enableForm(); // Enable form for editting
            }
            else {
                _this.messageClass = 'alert alert-success'; // Set bootstrap success class
                _this.message = data.message; // Set success message
                // Function to store user's token in client local storage
                _this.authService.storeUserData(data.token, data.user);
                // After 2 seconds, redirect to dashboard page
                setTimeout(function () {
                    // Check if user was redirected or logging in for first time
                    if (_this.previousUrl) {
                        _this.router.navigate([_this.previousUrl]); // Redirect to page they were trying to view before
                    }
                    else {
                        _this.router.navigate(['/quiz']); // Navigate to dashboard view
                    }
                }, 2000);
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        // On page load, check if user was redirected to login
        if (this.authGuard.redirectUrl) {
            this.messageClass = 'alert alert-danger'; // Set error message: need to login
            this.message = 'You must be logged in to view that page.'; // Set message
            this.previousUrl = this.authGuard.redirectUrl; // Set the previous URL user was redirected from
            this.authGuard.redirectUrl = undefined; // Erase previous URL
        }
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(348),
            styles: [__webpack_require__(339)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__["a" /* AuthGuard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__["a" /* AuthGuard */]) === "function" && _d || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=C:/Users/Abc/Desktop/capstone1/changed/quizapp-master/frontend/src/login.component.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.firstname = '';
        this.lastname = '';
        this.mobile = '';
        this.username = '';
        this.email = '';
    }
    // Function to logout user
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout(); // Logout user
        //this.flashMessagesService.show('You are logged out', { cssClass: 'alert-info' }); // Set custom flash message
        this.router.navigate(['/']); // Navigate back to home page
    };
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.firstname = profile.user.firstname;
            _this.lastname = profile.user.lastname;
            _this.mobile = profile.user.mobile;
            _this.username = profile.user.username; // Set username
            _this.email = profile.user.email; // Set e-mail
        });
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(349),
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b;
}());

//# sourceMappingURL=C:/Users/Abc/Desktop/capstone1/changed/quizapp-master/frontend/src/navbar.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_quiz_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_index__ = __webpack_require__(298);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuizComponent = /** @class */ (function () {
    function QuizComponent(quizService, location, authService, router) {
        this.quizService = quizService;
        this.location = location;
        this.authService = authService;
        this.router = router;
        this.username = '';
        this.email = '';
        this.quiz = new __WEBPACK_IMPORTED_MODULE_5__models_index__["a" /* Quiz */](null);
        this.mode = '';
        this.config = {
            'allowBack': true,
            'allowReview': true,
            'autoMove': false,
            'duration': 0,
            'pageSize': 1,
            'requiredAll': false,
            'richText': false,
            'shuffleQuestions': false,
            'shuffleOptions': false,
            'showClock': false,
            'showPager': true,
            'theme': 'none'
        };
        this.pager = {
            index: 0,
            size: 1,
            count: 1
        };
    }
    QuizComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quizService.getquiz().
            subscribe(function (quizes) {
            _this.quizes = quizes;
            // console.log(this.quizes);
        });
        // this.quizName = this.quizes[0].id;
        //console.log(this.quizes);
        //this.loadQuiz(this.quizName);
        this.authService.getProfile().subscribe(function (profile) {
            _this.username = profile.user.username; // Set username
            _this.email = profile.user.email; // Set e-mail
        });
    };
    QuizComponent.prototype.onLogoutClick = function () {
        this.authService.logout(); // Logout user
        //    //this.flashMessagesService.show('You are logged out', { cssClass: 'alert-info' }); // Set custom flash message
        this.router.navigate(['/']); // Navigate back to home page
    };
    QuizComponent.prototype.loadQuiz = function (quizName) {
        var _this = this;
        console.log(quizName);
        this.quizService.get(quizName).subscribe(function (res) {
            //console.log("responce from server ");
            //console.log(res);
            _this.quiz = new __WEBPACK_IMPORTED_MODULE_5__models_index__["a" /* Quiz */](res);
            _this.pager.count = _this.quiz.questions.length;
        });
        this.mode = 'quiz';
    };
    Object.defineProperty(QuizComponent.prototype, "filteredQuestions", {
        get: function () {
            return (this.quiz.questions) ?
                this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
        },
        enumerable: true,
        configurable: true
    });
    QuizComponent.prototype.onSelect = function (question, option) {
        if (question.questionTypeId === 1) {
            question.options.forEach(function (x) { if (x.id !== option.id)
                x.selected = false; });
        }
        if (this.config.autoMove) {
            this.goTo(this.pager.index + 1);
        }
    };
    QuizComponent.prototype.goTo = function (index) {
        if (index >= 0 && index < this.pager.count) {
            this.pager.index = index;
            this.mode = 'quiz';
        }
    };
    QuizComponent.prototype.isAnswered = function (question) {
        return question.options.find(function (x) { return x.selected; }) ? 'Answered' : 'Not Answered';
    };
    ;
    QuizComponent.prototype.isCorrect = function (question) {
        return question.options.every(function (x) { return x.selected === x.isAnswer; }) ? 'correct' : 'wrong';
    };
    ;
    QuizComponent.prototype.onSubmit = function () {
        var _this = this;
        var answers = [];
        this.quiz.questions.forEach(function (x) { return answers.push({ 'quizId': _this.quiz.id, 'questionId': x.id, 'answered': x.answered }); });
        // Post your data to the server here. answers contains the questionId and the users' answer.
        console.log(this.quiz.questions);
        this.mode = 'result';
    };
    QuizComponent.prototype.goBack = function () {
        this.location.back();
    };
    QuizComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-quiz',
            template: __webpack_require__(350),
            styles: [__webpack_require__(340)],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_quiz_service__["a" /* QuizService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_quiz_service__["a" /* QuizService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_quiz_service__["a" /* QuizService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _d || Object])
    ], QuizComponent);
    return QuizComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=C:/Users/Abc/Desktop/capstone1/changed/quizapp-master/frontend/src/quiz.component.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.processing = false;
        this.createForm(); // Create Angular 2 Form when component loads
    }
    // Function to create registration form
    RegisterComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            //firstname input
            firstname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(30),
                    this.validateFirstname // Custom validation
                ])],
            //lastname input
            lastname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(30),
                    this.validateLastname // Custom validation
                ])],
            //mobile
            mobile: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(10),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(10),
                    this.validateMobile // Custom validation
                ])],
            // Email Input
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(30),
                    this.validateEmail // Custom validation
                ])],
            // Username Input
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(15),
                    this.validateUsername // Custom validation
                ])],
            // Password Input
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(8),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(35),
                    this.validatePassword // Custom validation
                ])],
            // Confirm Password Input
            confirm: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required] // Field is required
        }, { validator: this.matchingPasswords('password', 'confirm') }); // Add custom validator to form for matching passwords
    };
    // Function to disable the registration form
    RegisterComponent.prototype.disableForm = function () {
        this.form.controls['firstname'].disable();
        this.form.controls['lastname'].disable();
        this.form.controls['mobile'].disable();
        this.form.controls['email'].disable();
        this.form.controls['username'].disable();
        this.form.controls['password'].disable();
        this.form.controls['confirm'].disable();
    };
    // Function to enable the registration form
    RegisterComponent.prototype.enableForm = function () {
        this.form.controls['firstname'].enable();
        this.form.controls['lastname'].enable();
        this.form.controls['mobile'].enable();
        this.form.controls['email'].enable();
        this.form.controls['username'].enable();
        this.form.controls['password'].enable();
        this.form.controls['confirm'].enable();
    };
    //function to validate Firstname
    RegisterComponent.prototype.validateFirstname = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^[A-z]+$/);
        if (regExp.test(controls.value)) {
            return null; // Return as valid firstname
        }
        else {
            return { 'validateFirstname': true }; // Return as invalid fisrtname
        }
    };
    //function to validate Lastname
    RegisterComponent.prototype.validateLastname = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^[A-z]+$/);
        // Test email against regular expression
        if (regExp.test(controls.value)) {
            return null; // Return as valid lastname
        }
        else {
            return { 'validateLastname': true }; // Return as invalid lastname
        }
    };
    //function to validate Mobile
    RegisterComponent.prototype.validateMobile = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^[0-9]+$/);
        if (regExp.test(controls.value)) {
            return null; // Return as valid Mobile
        }
        else {
            return { 'validateMobile': true }; // Return as invalid Mobile
        }
    };
    // Function to validate e-mail is proper format
    RegisterComponent.prototype.validateEmail = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        // Test email against regular expression
        if (regExp.test(controls.value)) {
            return null; // Return as valid email
        }
        else {
            return { 'validateEmail': true }; // Return as invalid email
        }
    };
    // Function to validate username is proper format
    RegisterComponent.prototype.validateUsername = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^[a-zA-Z0-9]+$/);
        // Test username against regular expression
        if (regExp.test(controls.value)) {
            return null; // Return as valid username
        }
        else {
            return { 'validateUsername': true }; // Return as invalid username
        }
    };
    // Function to validate password
    RegisterComponent.prototype.validatePassword = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/);
        // Test password against regular expression
        if (regExp.test(controls.value)) {
            return null; // Return as valid password
        }
        else {
            return { 'validatePassword': true }; // Return as invalid password
        }
    };
    // Funciton to ensure passwords match
    RegisterComponent.prototype.matchingPasswords = function (password, confirm) {
        return function (group) {
            // Check if both fields are the same
            if (group.controls[password].value === group.controls[confirm].value) {
                return null; // Return as a match
            }
            else {
                return { 'matchingPasswords': true }; // Return as error: do not match
            }
        };
    };
    // Function to submit form
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.processing = true; // Used to notify HTML that form is in processing, so that it can be disabled
        this.disableForm(); // Disable the form
        // Create user object form user's inputs
        var user = {
            firstname: this.form.get('firstname').value,
            lastname: this.form.get('lastname').value,
            mobile: this.form.get('mobile').value,
            email: this.form.get('email').value,
            username: this.form.get('username').value,
            password: this.form.get('password').value // Password input field
        };
        // Function from authentication service to register user
        this.authService.registerUser(user).subscribe(function (data) {
            // Resposne from registration attempt
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Set an error class
                _this.message = data.message; // Set an error message
                _this.processing = false; // Re-enable submit button
                _this.enableForm(); // Re-enable form
            }
            else {
                _this.messageClass = 'alert alert-success'; // Set a success class
                _this.message = data.message; // Set a success message
                // After 2 second timeout, navigate to the login page
                setTimeout(function () {
                    _this.router.navigate(['/login']); // Redirect to login view
                }, 2000);
            }
        });
    };
    // Function to check if e-mail is taken
    RegisterComponent.prototype.checkEmail = function () {
        var _this = this;
        // Function from authentication file to check if e-mail is taken
        this.authService.checkEmail(this.form.get('email').value).subscribe(function (data) {
            // Check if success true or false was returned from API
            if (!data.success) {
                _this.emailValid = false; // Return email as invalid
                _this.emailMessage = data.message; // Return error message
            }
            else {
                _this.emailValid = true; // Return email as valid
                _this.emailMessage = data.message; // Return success message
            }
        });
    };
    // Function to check if username is available
    RegisterComponent.prototype.checkUsername = function () {
        var _this = this;
        // Function from authentication file to check if username is taken
        this.authService.checkUsername(this.form.get('username').value).subscribe(function (data) {
            // Check if success true or success false was returned from API
            if (!data.success) {
                _this.usernameValid = false; // Return username as invalid
                _this.usernameMessage = data.message; // Return error message
            }
            else {
                _this.usernameValid = true; // Return username as valid
                _this.usernameMessage = data.message; // Return success message
            }
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(351),
            styles: [__webpack_require__(341)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=C:/Users/Abc/Desktop/capstone1/changed/quizapp-master/frontend/src/register.component.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__option__ = __webpack_require__(299);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question__ = __webpack_require__(300);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quiz__ = __webpack_require__(327);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__quiz__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quiz_config__ = __webpack_require__(326);
/* unused harmony namespace reexport */




//# sourceMappingURL=C:/Users/Abc/Desktop/capstone1/changed/quizapp-master/frontend/src/index.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Option; });
var Option = /** @class */ (function () {
    function Option(data) {
        data = data || {};
        this.id = data.id;
        this.questionId = data.questionId;
        this.name = data.name;
        this.isAnswer = data.isAnswer;
    }
    return Option;
}());

//# sourceMappingURL=C:/Users/Abc/Desktop/capstone1/changed/quizapp-master/frontend/src/option.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__option__ = __webpack_require__(299);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question; });

var Question = /** @class */ (function () {
    function Question(data) {
        var _this = this;
        data = data || {};
        this.id = data.id;
        this.name = data.name;
        this.questionTypeId = data.questionTypeId;
        this.options = [];
        data.options.forEach(function (o) {
            _this.options.push(new __WEBPACK_IMPORTED_MODULE_0__option__["a" /* Option */](o));
        });
    }
    return Question;
}());

//# sourceMappingURL=C:/Users/Abc/Desktop/capstone1/changed/quizapp-master/frontend/src/question.js.map

/***/ }),

/***/ 315:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 315;


/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(321);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Abc/Desktop/capstone1/changed/quizapp-master/frontend/src/main.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = '';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(344),
            styles: [__webpack_require__(336)]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=C:/Users/Abc/Desktop/capstone1/changed/quizapp-master/frontend/src/app.component.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__addquiz_addquiz_component__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__author_author_component__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nav_navbar__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__register_register_component__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_quiz_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_helper_service__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_author_service__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_login_component__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__authorlogin_authorlogin__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages_module__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__guards_notAuth_guard__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__quiz_quiz_component__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__home_home_component__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__adminquiz_viewquiz_component__ = __webpack_require__(290);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























//import { NavbarComponent } from './nav/navbar';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_19__quiz_quiz_component__["a" /* QuizComponent */],
                __WEBPACK_IMPORTED_MODULE_20__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__nav_navbar__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_15__authorlogin_authorlogin__["a" /* AuthorComponent */],
                __WEBPACK_IMPORTED_MODULE_6__addquiz_addquiz_component__["a" /* AddquizComponent */],
                __WEBPACK_IMPORTED_MODULE_7__author_author_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_21__adminquiz_viewquiz_component__["a" /* ViewQuizComponent */]
                //  NavbarComponent
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages_module__["FlashMessagesModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_13__services_author_service__["a" /* AuthorService */], __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_18__guards_notAuth_guard__["a" /* NotAuthGuard */], __WEBPACK_IMPORTED_MODULE_11__services_quiz_service__["a" /* QuizService */], __WEBPACK_IMPORTED_MODULE_12__services_helper_service__["a" /* HelperService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=C:/Users/Abc/Desktop/capstone1/changed/quizapp-master/frontend/src/app.module.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quiz_quiz_component__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register_component__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authorlogin_authorlogin__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__addquiz_addquiz_component__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__author_author_component__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nav_navbar__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__adminquiz_viewquiz_component__ = __webpack_require__(290);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });










var appRoutes = [
    { path: 'quiz', component: __WEBPACK_IMPORTED_MODULE_2__quiz_quiz_component__["a" /* QuizComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__register_register_component__["a" /* RegisterComponent */] // Register Route
        //  canActivate: [NotAuthGuard] // User must NOT be logged in to view this route
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */] // Login Route
        //canActivate: [NotAuthGuard] // User must NOT be logged in to view this route
    },
    {
        path: 'admin', component: __WEBPACK_IMPORTED_MODULE_7__author_author_component__["a" /* AdminComponent */]
    },
    {
        path: 'author', component: __WEBPACK_IMPORTED_MODULE_6__addquiz_addquiz_component__["a" /* AddquizComponent */]
    },
    {
        path: 'authorlogin',
        component: __WEBPACK_IMPORTED_MODULE_5__authorlogin_authorlogin__["a" /* AuthorComponent */] // Login Route
        //canActivate: [NotAuthGuard] // User must NOT be logged in to view this route
    },
    { path: 'navbar', component: __WEBPACK_IMPORTED_MODULE_8__nav_navbar__["a" /* NavbarComponent */]
    },
    // { path: '**', component: HomeComponent },
    { path: 'viewquiz/:id', component: __WEBPACK_IMPORTED_MODULE_9__adminquiz_viewquiz_component__["a" /* ViewQuizComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=C:/Users/Abc/Desktop/capstone1/changed/quizapp-master/frontend/src/app.routing.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotAuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotAuthGuard = /** @class */ (function () {
    function NotAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // Function to determine whether user is authorized to view route
    NotAuthGuard.prototype.canActivate = function () {
        // Check if user is logged in
        if (this.authService.loggedIn()) {
            this.router.navigate(['/']); // Return error, route to home
            return false; // Return false: user not allowed to view route
        }
        else {
            return true; // Return true: user is allowed to view route
        }
    };
    NotAuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
    ], NotAuthGuard);
    return NotAuthGuard;
    var _a, _b;
}());

//# sourceMappingURL=C:/Users/Abc/Desktop/capstone1/changed/quizapp-master/frontend/src/notAuth.guard.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelperService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HelperService = /** @class */ (function () {
    function HelperService() {
    }
    HelperService.toBool = function (val) {
        if (val == 'undefined' || val == null || val == '' || val == 'false' || val == 'False')
            return false;
        else
            return true;
    };
    ;
    HelperService.shuffle = function (array) {
        var currentIndex = array.length, temp, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temp = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temp;
        }
        return array;
    };
    HelperService.extend = function (out) {
        out = out || {};
        for (var i = 1; i < arguments.length; i++) {
            if (!arguments[i])
                continue;
            for (var key in arguments[i]) {
                if (arguments[i].hasOwnProperty(key))
                    out[key] = arguments[i][key];
            }
        }
        return out;
    };
    ;
    HelperService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], HelperService);
    return HelperService;
}());

//# sourceMappingURL=C:/Users/Abc/Desktop/capstone1/changed/quizapp-master/frontend/src/helper.service.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Abc/Desktop/capstone1/changed/quizapp-master/frontend/src/environment.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export QuizConfig */
var QuizConfig = /** @class */ (function () {
    function QuizConfig(data) {
        data = data || {};
        this.allowBack = data.allowBack;
        this.allowReview = data.allowReview;
        this.autoMove = data.autoMove;
        this.duration = data.duration;
        this.pageSize = data.pageSize;
        this.requiredAll = data.requiredAll;
        this.richText = data.richText;
        this.shuffleQuestions = data.shuffleQuestions;
        this.shuffleOptions = data.shuffleOptions;
        this.showClock = data.showClock;
        this.showPager = data.showPager;
    }
    return QuizConfig;
}());

//# sourceMappingURL=C:/Users/Abc/Desktop/capstone1/changed/quizapp-master/frontend/src/quiz-config.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__question__ = __webpack_require__(300);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Quiz; });

var Quiz = /** @class */ (function () {
    function Quiz(data) {
        var _this = this;
        if (data) {
            data.forEach(function (temp) {
                _this.id = temp.id;
                _this.name = temp.name;
                _this.author = temp.author;
                _this.questions = [];
                temp.questions.forEach(function (q) {
                    _this.questions.push(new __WEBPACK_IMPORTED_MODULE_0__question__["a" /* Question */](q));
                });
            });
        }
    }
    return Quiz;
}());

//# sourceMappingURL=C:/Users/Abc/Desktop/capstone1/changed/quizapp-master/frontend/src/quiz.js.map

/***/ }),

/***/ 334:
/***/ (function(module, exports) {

module.exports = "label {\r\n  font-size: 18px;\r\n}\r\n"

/***/ }),

/***/ 335:
/***/ (function(module, exports) {

module.exports = ".btn-group button {\n    background-color: #4CAF50; /* Green background */\n    border: 1px solid green; /* Green border */\n    color: white; /* White text */\n    padding: 10px 24px; /* Some padding */\n    cursor: pointer; /* Pointer/hand icon */\n    float: left; /* Float the buttons side by side */\n}\n\n/* Clear floats (clearfix hack) */\n.btn-group:after {\n    content: \"\";\n    clear: both;\n    display: inline;\n}\n\n.btn-group button:not(:last-child) {\n    border-right: none; /* Prevent double borders */\n}\n\n/* Add a background color on hover */\n.btn-group button:hover {\n    background-color: #3e8e41;\n}\n\n#head {\n  color: brown;\n}\n\na {\n  color: brown;\n}\na:active {\n  color: yellow;\n}\n\na:hover{\n  color: red;\n}\n\n.quizBox {\n  margin-top: 15px;\n  margin-left: 250px;\n  margin-right: 400px;\n}\n"

/***/ }),

/***/ 336:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 337:
/***/ (function(module, exports) {

module.exports = "#quiz {\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n}\n\n#quiz td, #quiz th {\n    border: 1px solid #ddd;\n    padding: 8px;\n}\n\n#quiz tr:nth-child(even){background-color: #f2f2f2;}\n\n#quiz tr:hover {background-color: #ddd;}\n\n#quiz th {\n    padding-top: 12px;\n    padding-bottom: 12px;\n    text-align: left;\n    background-color: #4CAF50;\n    color: white;\n}\n"

/***/ }),

/***/ 338:
/***/ (function(module, exports) {

module.exports = ".thumbnail {\r\n  text-align: center;\r\n  position: relative;\r\n  width:100;\r\n  height:100;\r\n}\r\n"

/***/ }),

/***/ 339:
/***/ (function(module, exports) {

module.exports = "form {\r\n  background: #888;\r\n\r\n}\r\nbody {\r\n  background: #eee;\r\n  height: 700px;\r\n}\r\nlabel {\r\n  font-size: 20px;\r\n}\r\nul {\r\n  color: purple;\r\n}\r\n"

/***/ }),

/***/ 340:
/***/ (function(module, exports) {

module.exports = ".btn-group button {\n    background-color: #4CAF50; /* Green background */\n    border: 1px solid green; /* Green border */\n    color: white; /* White text */\n    padding: 10px 24px; /* Some padding */\n    cursor: pointer; /* Pointer/hand icon */\n    float: left; /* Float the buttons side by side */\n}\n\n/* Clear floats (clearfix hack) */\n.btn-group:after {\n    content: \"\";\n    clear: both;\n    display: inline;\n}\n\n.btn-group button:not(:last-child) {\n    border-right: none; /* Prevent double borders */\n}\n\n/* Add a background color on hover */\n.btn-group button:hover {\n    background-color: #3e8e41;\n}\n\n#head {\r\n  color: brown;\n}\r\n\r\na {\r\n  color: brown;\r\n}\r\na:active {\r\n  color: yellow;\r\n}\r\n\r\na:hover{\r\n  color: red;\r\n}\r\n\r\n.quizBox {\r\n  margin-top: 15px;\r\n  margin-left: 250px;\r\n  margin-right: 400px;\r\n}\n"

/***/ }),

/***/ 341:
/***/ (function(module, exports) {

module.exports = "label {\r\n  font-size: 18px;\r\n}\r\nform {\r\n  margin: auto;\r\n  background: #bbb;\r\n}\r\nh1 {\r\n  background: #08f;\r\n  color: #000;\r\n}\r\nimg {\r\n  float: left;\r\n}\r\nul {\r\n  color: purple;\r\n}\r\n"

/***/ }),

/***/ 342:
/***/ (function(module, exports) {

module.exports = "<body style=\"background: #eee\">\n  <h1 style= \"padding: 20px; text-align:center;\"> Add Quiz </h1>\n\n  <div>\n<form #formRef1=\"ngForm\" style=\" padding: 12px;\" (ngSubmit) = \"onSubmit(formRef1.value)\" >\n\n  <div style=\"width:500px; margin: auto;\">\n    <div style=\"\">\n   <label for=\"name\">Quiz Name </label>\n   <input type=\"text\" class=\"form-control\" id=\"quizname\" name=\"quizname\"  [(ngModel)]=\"quizname\"  required  minlength=\"5\">\n</div>\n   <div style=\"\">\n   <label for=\"name\">Author Name </label>\n   <input type=\"text\" class=\"form-control\" id=\"authorname\" name=\"authorname\"  [(ngModel)]=\"authorname\"  required  minlength=\"5\">\n  </div>\n  </div>\n\n <br>\n   <div >\n     <h4>Add Questions to Quiz</h4>\n    <br>\n </div>\n\n  <div *ngIf=\"question?.length > 0\"><h5 style=\"color:red\">\n      {{ question.length }} Questions Added to Quiz\n    </h5>\n  </div>\n\n<br>\n\n <form #formRef=\"ngForm\" (ngSubmit) = \"addQuestion(formRef.value); formRef.reset()\"  >\n\n  <label for=\"name\"> Question </label>\n   <input type=\"text\" class=\"form-control\" id=\"qname\" name=\"qname\" [(ngModel)]=\"qname\"   required  >\n<div style=\"width:600px\">\n  <label for=\"name\"> Option1 </label>\n     <input type=\"text\" class=\"form-control\" id=\"op1\" name=\"op1\"   [(ngModel)]=\"op1\" required  >\n   <label for=\"name\"> Option2 </label>\n       <input type=\"text\" class=\"form-control\" id=\"op2\" name=\"op2\"   [(ngModel)]=\"op2\" required >\n   <label for=\"name\"> Option3 </label>\n       <input type=\"text\" class=\"form-control\" id=\"op3\" name=\"op3\"  [(ngModel)]=\"op3\"  required >\n   <label for=\"name\"> Option4 </label>\n      <input type=\"text\" class=\"form-control\" id=\"op4\" name=\"op4\"  [(ngModel)]=\"op4\"  required  >\n   <label for=\"name\"> Answer </label>\n    <select class=\"form-control\" id=\"answer\" name=\"answer\" [(ngModel)]=\"answer\" required>\n    <option  [value]=1> 1 </option>\n    <option  [value]=2> 2 </option>\n    <option  [value]=3> 3 </option>\n    <option  [value]=4> 4 </option>\n  </select>\n  </div>\n  <br>\n\n<button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!formRef.form.valid\" >Add Question </button>\n </form>\n\n<br> <br>\n <button type=\"submit\" class=\"btn btn-success\" >Submit </button>\n<button class=\"btn btn-danger\" (click)=\"goBack()\">Back</button>\n</form>\n\n</div>\n</body>\n"

/***/ }),

/***/ 343:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <a style=\"margin-left: 20px\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" routerLink=\"/\"><h2>Home</h2></a>\n\n<!--<button style=\"margin-left: 1180px; margin-top: 6px;\"class=\"btn btn-success\"><a *ngIf=\"authService.loggedIn()\" href=\"#\" style=\"float: right;\" (click)=\"onLogoutClick()\">Logout</a></button>-->\n</div>\n<h1 id=\"head\" style=\"text-align: center; \">QUIZ Detail </h1>\n  <br>\n\n  <!--<h3 style=\"margin: none; text-align: center; color: purple;\" *ngIf=\"authService.loggedIn()\"> Welcome {{username+'!'}} You Can Start Quiz.</h3>-->\n<br>\n\n\n<br>\n<br>\n<div id=\"quiz\" >\n  <div *ngIf=\"mode!=''\">\n  <h1 class=\"text-sm-center\">{{quiz.name}}</h1>\n  <hr />\n</div>\n<br>\n\n  <div *ngIf=\"mode!='' && quiz\">\n    <div *ngFor=\"let question of filteredQuestions;\">\n      <div class=\"badge badge-info\">Question {{pager.index + 1}} of {{pager.count}}.</div>\n      <br>\n      <h2>{{pager.index + 1}}. <span [innerHTML]=\"question.name\"></span></h2>\n      <br>\n      <div class=\"row text-left options\">\n        <div class=\"col-md-6\" *ngFor=\"let option of question.options\">\n          <div class=\"option\">\n            <label class=\"\" [attr.for]=\"option.id\">\n                <input id=\"{{option.id}}\" type=\"checkbox\" [(ngModel)]=\"option.selected\" (change)=\"onSelect(question, option);\" />\n                {{option.name}}\n            </label>\n          </div>\n        </div>\n      </div>\n    </div>\n    <hr />\n    <br>\n    <br>\n    <div class=\"text-sm-center\" *ngIf=\"mode!==''\">\n      <button class=\"btn btn-default\" *ngIf=\"config.allowBack\" (click)=\"goTo(0);\">First</button>\n      <button class=\"btn btn-default\" *ngIf=\"config.allowBack\" (click)=\"goTo(pager.index - 1);\">Prev</button>\n      <button class=\"btn btn-primary\" (click)=\"goTo(pager.index + 1);\">Next</button>\n      <button class=\"btn btn-default\" *ngIf=\"config.allowBack\" (click)=\"goTo(pager.count - 1);\">Last</button>\n      <!--<pagination *ngIf=\"config.showPager\" direction-links=\"false\" total-items=\"totalItems\" items-per-page=\"itemsPerPage\" ng-model=\"currentPage\" ng-change=\"pageChanged()\"></pagination>-->\n    </div>\n  </div>\n  <br>\n\n  <!--<div class=\"row review\" *ngIf=\"mode=='review'\">\n    <div class=\"col-sm-4\" *ngFor=\"let question of quiz.questions; let index = index;\">\n      <div (click)=\"goTo(index)\" class=\"{{ isAnswered(question) == 'Answered'? 'answered': 'not-answered' }}\">{{index + 1}}. {{ isAnswered(question) }}</div>\n    </div>\n  </div>-->\n  <!--<div class=\"result\" *ngIf=\"mode=='result'\">\n    <h2>Quiz Result</h2>\n    <div *ngFor=\"let question of quiz.questions; let index = index\">\n      <div class=\"result-question\">\n        <h4>{{index + 1}}. {{question.name}}</h4>\n        <div class=\"row\">\n          <div class=\"col-md-6\" *ngFor=\"let Option of question.options\">\n            <input id=\"{{Option.id}}\" type=\"checkbox\" disabled=\"disabled\" [(ngModel)]=\"Option.selected\" /> {{Option.name}}\n          </div>\n        </div>\n        <div class=\"alert {{ isCorrect(question) == 'correct'? 'alert-success': 'alert-danger'}}\">Your answer is {{isCorrect(question)}}.</div>\n      </div>\n    </div>\n  </div>-->\n  <hr />\n  <!--<div *ngIf=\"mode!==''\">\n    <button class=\"btn btn-default\" (click)=\"mode = 'review'\">Review</button>\n    <button class=\"btn btn-default\" (click)=\"onSubmit();\">Submit Quiz</button>\n    <button class=\"btn btn-default\" (click)=\"goBack()\">Back</button>\n  </div>-->\n    <div>\n       <button class=\"btn btn-primary\" (click)=\"goBack()\">Back</button>\n    </div>\n\n</div>\n"

/***/ }),

/***/ 344:
/***/ (function(module, exports) {

module.exports = "\n\n<router-outlet> </router-outlet>\n"

/***/ }),

/***/ 345:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"authService.loggedIn()\">\n\n<a style=\"float:right; margin-right:20px\" *ngIf=\"authService.loggedIn()\" href=\"#\" (click)=\"onLogoutClick()\">Logout</a>\n\n<div class=\"jumbotron text-center\">\n\n\n  <div class=\"row\">\n    <div class=\"col-md-9\">\n  <h1 style=\"text-align:center; float: right; margin-right: 150px;\">QUIZ APPLICATION</h1>\n</div>\n<div class=\"col-xs-6\">\n</div>\n\n</div>\n  <br>\n  <p class=\"lead\">Welcome to the MEAN Stack Quiz Applicatin by <strong>MEAN HUNTERS</strong></p>\n  <br>\n\n  <h3 > Welcome {{username}}</h3>\n</div>\n<div style=\"margin: auto;\" class='panel panel-primary'>\n    <div class='panel-heading'>\n\n    </div>\n    <br>\n        <table id=\"quiz\" class='table table-striped table-condensed'>\n            <thead>\n                <tr>\n\n                    <th  style=\"min-width: 20px;\"> Name </th>\n                    <th  style=\"min-width: 20px;\"> Author </th>\n                     <th  style=\"min-width: 20px;\"> No Of Questions </th>\n                     <th style=\"min-width: 20px;\"> Delete Quiz </th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor='let quiz of quizes '>\n\n                    <td> <a [routerLink]=\"['/viewquiz',quiz.id]\">  {{ quiz.name }}  </a>  </td>\n                    <td> {{ quiz.author }}</td>\n                    <td> {{ quiz.questions.length }}</td>\n\n                    <td ><a (click)=\"deletequiz(quiz.id)\" class=\"btn btn-xs btn-danger\">Delete</a></td>\n                </tr>\n            </tbody>\n        </table>\n        <a routerLink=\"/author\" class=\"btn btn-xs btn-primary\" > Add Quiz </a>\n\n\n    </div>\n</div>\n<div style=\"text-align:center; padding:20px; background: #ccc\" *ngIf=\"!authService.loggedIn()\">\n  <br>\n  <h1>You are not authorised! Please login first.</h1>\n  <br>\n  <a style=\"color:blue;\" routerLink=\"/authorlogin\" class=\"btn btn-default\"><h2>Login Here</h2></a>\n</div>\n"

/***/ }),

/***/ 346:
/***/ (function(module, exports) {

module.exports = "<body style=\"background: #eee; height:700px;\">\r\n<h2 class=\"page-header\" style=\" padding:20px;   background: #888;\">Author Login</h2>\r\n<br>\r\n<!-- Custom Success/Error Message -->\r\n<div class=\"row show-hide-message\">\r\n  <div [ngClass]=\"messageClass\">\r\n    {{ message }}\r\n  </div>\r\n</div>\r\n\r\n<!-- Login Form -->\r\n<form [formGroup]=\"form\" style=\"background: #888; width: 500px; padding-left:10px\" (submit)=\"onLoginSubmit()\">\r\n\r\n  <!-- Username Field -->\r\n  <div class=\"form-group\">\r\n    <label style=\"font-size:20px\" for=\"username\">Username</label>\r\n    <div [ngClass]=\"{'has-error': form.controls.username.errors && form.controls.username.dirty, 'has-success': form.controls.username.valid && form.controls.username.dirty }\">\r\n      <input class=\"form-control\" type=\"text\" name=\"username\" formControlName=\"username\" />\r\n      <!-- Validation -->\r\n      <ul style=\"color:purple;\" class=\"help-block\">\r\n        <li *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">This field is required.</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Password Field  -->\r\n  <div class=\"form-group\">\r\n    <label style=\"font-size:20px\" for=\"password\">Password</label>\r\n    <div [ngClass]=\"{'has-error': form.controls.password.errors && form.controls.password.dirty, 'has-success': form.controls.password.valid && form.controls.password.dirty }\">\r\n      <input class=\"form-control\" type=\"password\" name=\"password\" formControlName=\"password\" />\r\n      <!-- Validation -->\r\n      <ul style=\"color:purple;\" class=\"help-block\">\r\n        <li *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">This field is required.</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <!-- Submit Button -->\r\n  <input [disabled]=\"!form.valid || processing\" class=\"btn btn-primary\" type=\"submit\" value=\"Login\" />\r\n</form>\r\n</body>\r\n"

/***/ }),

/***/ 347:
/***/ (function(module, exports) {

module.exports = "<a style=\"float:right; margin-right:20px\" *ngIf=\"authService.loggedIn()\" href=\"#\" (click)=\"onLogoutClick()\">Logout</a>\n\n<div class=\"jumbotron text-center\">\n\n\n  <div class=\"row\">\n    <div class=\"col-md-9\">\n  <h1 style=\"text-align:center; float: right; margin-right: 150px;\">QUIZ APPLICATION</h1>\n</div>\n<div class=\"col-xs-6\">\n</div>\n\n</div>\n  <br>\n  <p class=\"lead\">Welcome to the MEAN Stack Quiz Application by <strong>MEAN HUNTERS</strong></p>\n  <br>\n\n  <h3 *ngIf=\"authService.loggedIn()\"> Welcome {{username}}</h3>\n\n  <div>\n    <a *ngIf=\"!authService.loggedIn()\" routerLink=\"/register\" class=\"btn btn-primary\">Register</a>\n    <a *ngIf=\"!authService.loggedIn()\" routerLink=\"/login\" class=\"btn btn-default\">Login</a>\n   <!-- <a *ngIf=\"!authService.loggedIn()\" routerLink=\"/loginAdmin\" class=\"btn btn-default\">Author Registration</a> -->\n  <a  *ngIf=\"!authService.loggedIn()\" routerLink=\"/authorlogin\" class=\"btn btn-default\">Author Login</a>\n<!--<a  *ngIf=\"!authService.loggedIn()\" routerLink=\"/authorreg\" class=\"btn btn-default\">Author Reg</a>-->\n<a *ngIf=\"authService.loggedIn()\" routerLink=\"/quiz\"><h2>Take Quiz</h2></a>\n\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-6 col-md-4\">\n    <div class=\"thumbnail\">\n      <img src=\"https://broadwayinfosys.com/uploads/courses/mongodb.png\" alt=\"placeholder image\" width=\"140\" height=\"140\">\n      <div class=\"caption\">\n        <h3>MongoDB</h3>\n        <p>MongoDB is a free and open-source cross-platform document-oriented database program. This NoSQL database program uses JSON-like documents with schemas.</p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-sm-6 col-md-4\">\n    <div class=thumbnail> <img src=\"https://rishabh.io/recipes/img/004-express-js.png\" alt=\"Generic placeholder image\" width=\"250\" height=\"140\">\n      <div class=caption>\n        <h3>Express</h3>\n        <p>Express.js is a Node.js framework. Node.js is a platform that allows JavaScript to be used outside the Web Browsers, for creating web and network applications.</p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-sm-6 col-md-4\">\n    <div class=thumbnail> <img src=\"https://blog.sagipl.com/wp-content/uploads/2017/03/angularjs-logo-300x162.jpg\" alt=\"Generic placeholder image\" width=\"250\" height=\"140\">\n      <div class=caption>\n        <h3>Angular</h3>\n        <p>Angular is a development platform for building mobile and desktop web applications. It is a JavaScript framework which extends HTML attributes with Directives, and binds data to HTML with Expressions.</p>\n      </div>\n    </div>\n  </div>\n<div class=\"row\" style=\"margin-left:320px\">\n  <div class=\"col-sm-6 col-md-4\">\n    <div class=thumbnail> <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png\" alt=\"Generic placeholder image\" width=\"200\" height=\"140\">\n      <div class=caption>\n        <h3>Node</h3>\n        <p>Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.</p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-sm-6 col-md-4\">\n    <div class=thumbnail> <img src=\"https://cdn-images-1.medium.com/max/1600/1*yk5D5cQB3jd7EiPzrDrD5w.png\" alt=\"Generic placeholder image\" width=\"250\" height=\"140\">\n      <div class=caption>\n        <h3>React</h3>\n        <p>React is a JavaScript library for building user interfaces. It is maintained by Facebook, Instagram and a community of individual developers and corporations.</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n</div>\n"

/***/ }),

/***/ 348:
/***/ (function(module, exports) {

module.exports = "<body>\n<h2 style=\" padding:20px;   background: #888;\" class=\"page-header\">Login</h2>\n<br>\n\n<!-- Custom Success/Error Message -->\n<div class=\"row show-hide-message\">\n  <div [ngClass]=\"messageClass\">\n    {{ message }}\n  </div>\n</div>\n\n<!-- Login Form -->\n<form [formGroup]=\"form\" style=\"width: 500px; padding-left:10px\" (submit)=\"onLoginSubmit()\">\n\n  <!-- Username Field -->\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <div [ngClass]=\"{'has-error': form.controls.username.errors && form.controls.username.dirty, 'has-success': form.controls.username.valid && form.controls.username.dirty }\">\n      <input class=\"form-control\" type=\"text\" name=\"username\" formControlName=\"username\" />\n      <!-- Validation -->\n      <ul class=\"help-block\">\n        <li *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">This field is required.</li>\n      </ul>\n    </div>\n  </div>\n\n  <!-- Password Field  -->\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <div [ngClass]=\"{'has-error': form.controls.password.errors && form.controls.password.dirty, 'has-success': form.controls.password.valid && form.controls.password.dirty }\">\n      <input class=\"form-control\" type=\"password\" name=\"password\" formControlName=\"password\" />\n      <!-- Validation -->\n      <ul class=\"help-block\">\n        <li *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">This field is required.</li>\n      </ul>\n    </div>\n  </div>\n  <!-- Submit Button -->\n  <input [disabled]=\"!form.valid || processing\" class=\"btn btn-primary\" type=\"submit\" value=\"Login\" />\n</form>\n</body>\n"

/***/ }),

/***/ 349:
/***/ (function(module, exports) {

module.exports = "<h1>NavBar Works</h1>\r\n  <div class=\"container\">\r\n    <h3 *ngIf=\"authService.loggedIn()\"> Welcome {{username+'!'}} You Can Take Quiz.</h3>\r\n      <ul>\r\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/\">Home</a></li>\r\n      </ul>\r\n      <ul>\r\n        <li><a *ngIf=\"authService.loggedIn()\" routerLink=\"/quiz\">Take Quiz</a></li>\r\n        <li><a *ngIf=\"!authService.loggedIn()\" routerLink=\"/login\">Login</a></li>\r\n        <li><a *ngIf=\"authService.loggedIn()\" href=\"#\" (click)=\"onLogoutClick()\">Logout</a></li>\r\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/register\">Register</a></li>\r\n      </ul>\r\n    </div>\r\n"

/***/ }),

/***/ 350:
/***/ (function(module, exports) {

module.exports = "<div  *ngIf=\"authService.loggedIn()\">\n<div class=\"row\">\n  <a style=\"margin-left: 20px\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" routerLink=\"/\"><h2>Home</h2></a>\n\n<button style=\"margin-left: 1180px; margin-top: 6px;\"class=\"btn btn-success\"><a *ngIf=\"authService.loggedIn()\" href=\"#\" style=\"float: right;\" (click)=\"onLogoutClick()\">Logout</a></button>\n</div>\n<h1 id=\"head\" style=\"text-align: center; \">QUIZ APPLICATION </h1>\n\n\n  <br>\n\n\n  <h3 style=\"margin: none; text-align: center; color: purple;\" > Welcome {{username+'!'}} You Can Start Quiz.</h3>\n<br>\n<div class=\"quizBox\">\n<div style=\"text-align: center;\" *ngFor=\"let quiz of quizes\" class=\"btn-group\" >\n  <button  style=\"margin-left: 100px\" (click)=\"loadQuiz(quiz.id)\"> {{ quiz.name }}</button>\n</div>\n</div>\n<br>\n<br>\n<div id=\"quiz\" >\n  <div *ngIf=\"mode!=''\">\n  <h1 class=\"text-sm-center\">{{quiz.name}}</h1>\n  <hr />\n</div>\n<br>\n\n  <div *ngIf=\"mode!='' && quiz\">\n    <div *ngFor=\"let question of filteredQuestions;\">\n      <div class=\"badge badge-info\">Question {{pager.index + 1}} of {{pager.count}}.</div>\n      <br>\n      <h2>{{pager.index + 1}}. <span [innerHTML]=\"question.name\"></span></h2>\n      <br>\n      <div class=\"row text-left options\">\n        <div class=\"col-md-6\" *ngFor=\"let option of question.options\">\n          <div class=\"option\">\n            <label class=\"\" [attr.for]=\"option.id\">\n                <input id=\"{{option.id}}\" type=\"checkbox\" [(ngModel)]=\"option.selected\" (change)=\"onSelect(question, option);\" />\n                {{option.name}}\n            </label>\n          </div>\n        </div>\n      </div>\n    </div>\n    <hr />\n    <br>\n    <br>\n    <div class=\"text-sm-center\" *ngIf=\"mode!==''\">\n      <button class=\"btn btn-default\" *ngIf=\"config.allowBack\" (click)=\"goTo(0);\">First</button>\n      <button class=\"btn btn-default\" *ngIf=\"config.allowBack\" (click)=\"goTo(pager.index - 1);\">Prev</button>\n      <button class=\"btn btn-primary\" (click)=\"goTo(pager.index + 1);\">Next</button>\n      <button class=\"btn btn-default\" *ngIf=\"config.allowBack\" (click)=\"goTo(pager.count - 1);\">Last</button>\n      <!--<pagination *ngIf=\"config.showPager\" direction-links=\"false\" total-items=\"totalItems\" items-per-page=\"itemsPerPage\" ng-model=\"currentPage\" ng-change=\"pageChanged()\"></pagination>-->\n    </div>\n  </div>\n  <br>\n\n  <div class=\"row review\" *ngIf=\"mode=='review'\">\n    <div class=\"col-sm-4\" *ngFor=\"let question of quiz.questions; let index = index;\">\n      <div (click)=\"goTo(index)\" class=\"{{ isAnswered(question) == 'Answered'? 'answered': 'not-answered' }}\">{{index + 1}}. {{ isAnswered(question) }}</div>\n    </div>\n  </div>\n  <div class=\"result\" *ngIf=\"mode=='result'\">\n    <h2>Quiz Result</h2>\n    <div *ngFor=\"let question of quiz.questions; let index = index\">\n      <div class=\"result-question\">\n        <h4>{{index + 1}}. {{question.name}}</h4>\n        <div class=\"row\">\n          <div class=\"col-md-6\" *ngFor=\"let Option of question.options\">\n            <input id=\"{{Option.id}}\" type=\"checkbox\" disabled=\"disabled\" [(ngModel)]=\"Option.selected\" /> {{Option.name}}\n          </div>\n        </div>\n        <div class=\"alert {{ isCorrect(question) == 'correct'? 'alert-success': 'alert-danger'}}\">Your answer is {{isCorrect(question)}}.</div>\n      </div>\n    </div>\n  </div>\n  <hr />\n  <div *ngIf=\"mode!==''\">\n    <button class=\"btn btn-default\" (click)=\"mode = 'review'\">Review</button>\n    <button class=\"btn btn-default\" (click)=\"onSubmit();\">Submit Quiz</button>\n    <button class=\"btn btn-default\" (click)=\"goBack()\">Back</button>\n  </div>\n    <div *ngIf=\"mode=='result'\">\n       <button class=\"btn btn-primary\" (click)=\"goBack()\">Back</button>\n    </div>\n\n</div>\n</div>\n<div style=\"text-align:center; padding:20px; background: #ccc\" *ngIf=\"!authService.loggedIn()\">\n  <br>\n  <h1>You are not authorised! Please login first.</h1>\n  <br>\n  <a style=\"color:blue;\" routerLink=\"/login\" class=\"btn btn-default\"><h2>Login Here</h2></a>\n</div>\n"

/***/ }),

/***/ 351:
/***/ (function(module, exports) {

module.exports = "<body style=\"background: #08f\">\n<h1 class=\"page-header\" style= \"padding: 20px; text-align:center;\">Registration Page</h1>\n\n<!-- Custom Success/Error Message -->\n<div class=\"row show-hide-message\">\n  <div [ngClass]=\"messageClass\">\n    {{ message }}\n  </div>\n</div>\n\n<!-- Registration Form -->\n<form [formGroup]=\"form\"  style=\"width: 840px; padding: 12px; \" (submit)=\"onRegisterSubmit()\">\n  <!-- Firstname -->\n  <div class=\"form-group\">\n    <label for=\"firstname\">Firstname</label>\n    <div>\n      <input type=\"text\" style= \"font-size:10pt;\" name=\"firstname\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Firstname\" formControlName=\"firstname\"  />\n      <!-- Validation -->\n      <ul class=\"help-block\">\n        <li *ngIf=\"form.controls.firstname.errors?.required && form.controls.firstname.dirty\">This field is required</li>\n        <li *ngIf=\"form.controls.firstname.errors?.validateFirstname && form.controls.firstname.dirty\">Firstname must not have any special characters</li>\n      </ul>\n    </div>\n  </div>\n  <!-- Lastname -->\n  <div class=\"form-group\">\n    <label for=\"lastname\">Lastname</label>\n    <div>\n      <input type=\"text\" style= \"font-size:10pt;\" name=\"lastname\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Lastname\" formControlName=\"lastname\" />\n      <!-- Validation -->\n      <ul class=\"help-block\">\n        <li *ngIf=\"form.controls.lastname.errors?.required && form.controls.lastname.dirty\">This field is required</li>\n          <li *ngIf=\"form.controls.lastname.errors?.validateLastname && form.controls.lastname.dirty\">lastname must not have any special characters</li>\n      </ul>\n    </div>\n  </div>\n  <!-- Lastname -->\n  <div class=\"form-group\">\n    <label for=\"mobile\">Mobile</label>\n    <div>\n      <input type=\"text\" style= \"font-size:10pt;\" name=\"mobile\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*9999999999\" formControlName=\"mobile\" />\n      <!-- Validation -->\n      <ul class=\"help-block\">\n\n        <li *ngIf=\"form.controls.mobile.errors?.required && form.controls.mobile.dirty\">This field is required</li>\n          <li *ngIf=\"form.controls.mobile.errors?.minlength && form.controls.mobile.dirty || form.controls.mobile.errors?.maxlength && form.controls.mobile.dirty \">Length should be 10</li>\n        <li *ngIf=\"form.controls.mobile.errors?.validateMobile && form.controls.mobile.dirty\">mobile number must not have any special character or any alphabet</li>\n      </ul>\n    </div>\n  </div>\n  <!-- Username Input -->\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <div [ngClass]=\"{'has-error': (form.controls.username.errors && form.controls.username.dirty) || (!usernameValid && form.controls.username.dirty), 'has-success': !form.controls.username.errors && usernameValid}\">\n      <input type=\"text\" style= \"font-size:10pt;\" name=\"username\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Username\" formControlName=\"username\" (blur)=\"checkUsername()\"  />\n      <!-- Validation -->\n      <ul class=\"help-block\">\n        <li *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">This field is required</li>\n        <li *ngIf=\"form.controls.username.errors?.minlength && form.controls.username.dirty || form.controls.username.errors?.maxlength && form.controls.username.dirty \">Minimum characters: 3, Maximum characters: 15</li>\n        <li *ngIf=\"form.controls.username.errors?.validateUsername && form.controls.username.dirty\">Username must not have any special characters</li>\n        <li *ngIf=\"usernameMessage\">{{ usernameMessage }}</li>\n      </ul>\n    </div>\n  </div>\n\n  <!-- Email Input -->\n  <div class=\"form-group\">\n    <label for=\"email\">Email</label>\n    <div [ngClass]=\"{'has-error': (form.controls.email.errors && form.controls.email.dirty) || (!emailValid && form.controls.email.dirty), 'has-success': !form.controls.email.errors && emailValid}\">\n      <input type=\"text\" style= \"font-size:10pt;\" name=\"email\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Email\" formControlName=\"email\" (blur)=\"checkEmail()\" />\n      <!-- Validation -->\n      <ul class=\"help-block\">\n        <li *ngIf=\"form.controls.email.errors?.required && form.controls.email.dirty\">This field is required</li>\n        <li *ngIf=\"(form.controls.email.errors?.minlength && form.controls.email.dirty || form.controls.email.errors?.maxlength && form.controls.email.dirty ) && form.controls.email.dirty\">Minimum characters: 5, Maximum characters: 30</li>\n        <li *ngIf=\"form.controls.email.errors?.validateEmail && form.controls.email.dirty\">This must be a valid e-mail</li>\n        <li *ngIf=\"emailMessage\">{{ emailMessage}}</li>\n      </ul>\n    </div>\n  </div>\n\n  <!-- Password Input -->\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <div [ngClass]=\"{'has-error': (form.controls.password.errors && form.controls.password.dirty), 'has-success': !form.controls.password.errors}\">\n      <input type=\"password\" style= \"font-size:10pt;\" name=\"password\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Password\" formControlName=\"password\" />\n      <!-- Validation -->\n      <ul class=\"help-block\">\n        <li *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">This field is required</li>\n        <li *ngIf=\"form.controls.password.errors?.minlength && form.controls.password.dirty || form.controls.password.errors?.maxlength && form.controls.password.dirty \">Minimum characters: 8, Maximum characters: 35</li>\n        <li *ngIf=\"form.controls.password.errors?.validatePassword && form.controls.password.dirty\">Password must be at least 8 characters but no more than 35</li>\n      </ul>\n    </div>\n  </div>\n\n  <!-- Confirm Password Input -->\n  <div class=\"form-group\">\n    <label for=\"confirm\">Confirm Password</label>\n    <div [ngClass]=\"{'has-error': (form.controls.confirm.errors && form.controls.confirm.dirty) || (form.errors?.matchingPasswords && form.controls.confirm.dirty), 'has-success': !form.controls.confirm.errors && !form.errors?.matchingPasswords}\">\n      <input type=\"password\" style= \"font-size:10pt;\" name=\"confirm\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Confirm Password\" formControlName=\"confirm\" />\n      <!-- Validation -->\n      <ul class=\"help-block\">\n        <li *ngIf=\"form.controls.confirm.errors?.required && form.controls.confirm.dirty\">This field is required</li>\n        <li *ngIf=\"form.errors?.matchingPasswords && form.controls.confirm.dirty\">Password do not match</li>\n      </ul>\n    </div>\n  </div>\n\n  <!-- Submit Input -->\n  <input [disabled]=\"!form.valid || processing || !emailValid || !usernameValid\" type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" />\n\n</form>\n<!-- Registration Form /-->\n"

/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(316);


/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.domain = "http://localhost:8080/"; // Development Domain - Not Needed in Production
    }
    // Function to create headers, add token, to be used in HTTP requests
    AuthService.prototype.createAuthenticationHeaders = function () {
        this.loadToken(); // Get token so it can be attached to headers
        // Headers configuration options
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({
                'Content-Type': 'application/json',
                'authorization': this.authToken // Attach token
            })
        });
    };
    // Function to get token from client local storage
    AuthService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('token');
        ; // Get token and asssign to variable to be used elsewhere
    };
    // Function to register user accounts
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this.domain + 'authentication/register', user).map(function (res) { return res.json(); });
    };
    // Function to check if username is taken
    AuthService.prototype.checkUsername = function (username) {
        return this.http.get(this.domain + 'authentication/checkUsername/' + username).map(function (res) { return res.json(); });
    };
    // Function to check if e-mail is taken
    AuthService.prototype.checkEmail = function (email) {
        return this.http.get(this.domain + 'authentication/checkEmail/' + email).map(function (res) { return res.json(); });
    };
    // Function to login user
    AuthService.prototype.login = function (user) {
        return this.http.post(this.domain + 'authentication/login', user).map(function (res) { return res.json(); });
    };
    // Function to logout
    AuthService.prototype.logout = function () {
        this.authToken = null; // Set token to null
        this.user = null; // Set user to null
        localStorage.clear(); // Clear local storage
    };
    // Function to store user's data in client local storage
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token); // Set token in local storage
        localStorage.setItem('user', JSON.stringify(user)); // Set user in local storage as string
        this.authToken = token; // Assign token to be used elsewhere
        this.user = user; // Set user to be used elsewhere
    };
    // Function to get user's profile data
    AuthService.prototype.getProfile = function () {
        this.createAuthenticationHeaders(); // Create headers before sending to API
        return this.http.get(this.domain + 'authentication/profile', this.options).map(function (res) { return res.json(); });
    };
    // Function to check if user is logged in
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());

//# sourceMappingURL=C:/Users/Abc/Desktop/capstone1/changed/quizapp-master/frontend/src/auth.service.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuizService = /** @class */ (function () {
    function QuizService(http) {
        this.http = http;
    }
    QuizService.prototype.get = function (url) {
        return this.http.get('http://localhost:8080/admin/quiz/' + url).map(function (res) { return res.json(); });
    };
    QuizService.prototype.getquiz = function () {
        return this.http.get('http://localhost:8080/admin/quiz')
            .map(function (res) { return res.json(); });
    };
    QuizService.prototype.addquiz = function (newquiz) {
        console.log(newquiz);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/admin/addquiz', newquiz, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    QuizService.prototype.deletequiz = function (id) {
        return this.http.delete('http://localhost:8080/admin/deletequiz/' + id)
            .map(function (res) { return res.json(); });
    };
    QuizService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
    ], QuizService);
    return QuizService;
    var _a;
}());

//# sourceMappingURL=C:/Users/Abc/Desktop/capstone1/changed/quizapp-master/frontend/src/quiz.service.js.map

/***/ })

},[402]);
//# sourceMappingURL=main.bundle.map
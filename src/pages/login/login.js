"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var tabs_1 = require("../tabs/tabs");
//import { SignupPage } from '../signup/signup';
var LoginPage = (function () {
    function LoginPage(navCtrl, userData) {
        this.navCtrl = navCtrl;
        this.userData = userData;
        this.login = {};
        this.submitted = false;
    }
    LoginPage.prototype.onLogin = function (form) {
        console.log(form.value);
        var cpass = this.login.password.trim();
        var cemail = this.login.username.trim();
        // alert(cemail);
        if (cpass.length > 3) {
            if (cemail.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
                var valid = form.valid;
                if (valid) {
                    this.submitted = true;
                    this.userData.login(this.login.username, this.login.password);
                    this.navCtrl.push(tabs_1.TabsPage);
                }
                else {
                    alert("Invalid username and password...");
                }
            }
            else {
                alert("Not valid email...");
            }
        }
        else {
            alert("Password must be minimum of 4 characters.");
        }
    };
    LoginPage.prototype.onSignup = function () {
        //this.navCtrl.push(SignupPage);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    core_1.Component({
        selector: 'page-login',
        templateUrl: 'login.html'
    })
], LoginPage);
exports.LoginPage = LoginPage;
//# sourceMappingURL=login.js.map
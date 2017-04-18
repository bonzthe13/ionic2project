"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var AccountPage = (function () {
    function AccountPage(alertCtrl, nav, userData) {
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.userData = userData;
    }
    AccountPage.prototype.ngAfterViewInit = function () {
        this.getUsername();
    };
    AccountPage.prototype.updatePicture = function () {
        console.log('Clicked to update picture');
    };
    // Present an alert with the current username populated
    // clicking OK will update the username and display it
    // clicking Cancel will close the alert and do nothing
    AccountPage.prototype.changeUsername = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Change Username',
            buttons: [
                'Cancel'
            ]
        });
        alert.addInput({
            name: 'username',
            value: this.username,
            placeholder: 'username'
        });
        alert.addButton({
            text: 'Ok',
            handler: function (data) {
                _this.userData.setUsername(data.username);
                _this.getUsername();
            }
        });
        alert.present();
    };
    AccountPage.prototype.getUsername = function () {
        var _this = this;
        this.userData.getUsername().then(function (username) {
            _this.username = username;
        });
    };
    AccountPage.prototype.changePassword = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Change Password',
            buttons: [
                'Cancel'
            ]
        });
        alert.addInput({
            name: 'password',
            value: this.password,
            placeholder: 'password'
        });
        alert.addButton({
            text: 'Ok',
            handler: function (data) {
                _this.userData.setPassword(data.password);
                _this.getPassword();
            }
        });
        console.log('Clicked to change password');
        alert.present();
    };
    AccountPage.prototype.getPassword = function () {
        var _this = this;
        this.userData.getPassword().then(function (password) {
            _this.password = password;
        });
    };
    AccountPage.prototype.logout = function () {
        this.userData.logout();
        //this.nav.setRoot('LoginPage');
        //this.nav.push('app.template');
        this.nav.push('LoginPage');
    };
    AccountPage.prototype.support = function () {
        this.nav.push('SupportPage');
    };
    return AccountPage;
}());
AccountPage = __decorate([
    core_1.Component({
        selector: 'page-account',
        templateUrl: 'account.html'
    })
], AccountPage);
exports.AccountPage = AccountPage;
//# sourceMappingURL=account.js.map
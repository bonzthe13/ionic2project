"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
var bonzprj_1 = require("../pages/bonzprj/bonzprj");
var about_1 = require("../pages/about/about");
var account_1 = require("../pages/account/account");
var login_1 = require("../pages/login/login");
var map_1 = require("../pages/map/map");
var tabs_1 = require("../pages/tabs/tabs");
var ConferenceApp = (function () {
    function ConferenceApp(events, userData, menu, platform, confData, storage, splashScreen) {
        var _this = this;
        this.events = events;
        this.userData = userData;
        this.menu = menu;
        this.platform = platform;
        this.confData = confData;
        this.storage = storage;
        this.splashScreen = splashScreen;
        // List of pages that can be navigated to from the left menu
        // the left menu only works after login
        // the login page disables the left menu
        this.appPages = [
            { title: 'Project', name: 'TabsPage', component: tabs_1.TabsPage, tabComponent: bonzprj_1.BonzprjPage, index: 0, icon: 'american-football' },
            { title: 'Map', name: 'TabsPage', component: tabs_1.TabsPage, tabComponent: map_1.MapPage, index: 1, icon: 'map' },
            { title: 'About', name: 'TabsPage', component: tabs_1.TabsPage, tabComponent: about_1.AboutPage, index: 2, icon: 'information-circle' }
        ];
        this.loggedInPages = [
            { title: 'Account', name: 'AccountPage', component: account_1.AccountPage, icon: 'person' }
        ];
        this.loggedOutPages = [
            { title: 'Login', name: 'LoginPage', component: login_1.LoginPage, icon: 'log-in' }
        ];
        // Check if the user has already seen the tutorial
        // TODO: Replace logic here as login page
        // TODO: set rootpage to LoginPage, if not logged-in
        console.log(this);
        this.userData.hasLoggedIn().then(function (hasLoggedIn) {
            if (!hasLoggedIn) {
                _this.platformReady();
                _this.rootPage = login_1.LoginPage;
            }
            else {
                _this.rootPage = tabs_1.TabsPage;
            }
        });
        confData.load();
        // decide which menu items should be hidden by current login status stored in local storage
        this.userData.hasLoggedIn().then(function (hasLoggedIn) {
            _this.enableMenu(hasLoggedIn === true);
        });
        this.enableMenu(true);
        this.listenToLoginEvents();
    }
    ConferenceApp.prototype.openPage = function (page) {
        var params = {};
        // the nav component was found using @ViewChild(Nav)
        // setRoot on the nav to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario
        if (page.index) {
            params = { tabIndex: page.index };
        }
        // If we are already on tabs just change the selected tab
        // don't setRoot again, this maintains the history stack of the
        // tabs even if changing them from the menu
        if (this.nav.getActiveChildNav() && page.index != undefined) {
            this.nav.getActiveChildNav().select(page.index);
            // Set the root of the nav with params if it's a tab index
        }
        else {
            this.nav.setRoot(page.name, params)["catch"](function (err) {
                console.log("Didn't set nav root: " + err);
            });
        }
        if (page.logsOut === true) {
            // Give the menu time to close before changing to logged out
            this.userData.logout();
            //this.nav.getActive();
        }
    };
    ConferenceApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:signup', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:logout', function () {
            _this.enableMenu(false);
        });
    };
    ConferenceApp.prototype.enableMenu = function (loggedIn) {
        this.menu.enable(loggedIn, 'loggedInMenu');
        this.menu.enable(!loggedIn, 'loggedOutMenu');
    };
    ConferenceApp.prototype.platformReady = function () {
        var _this = this;
        // Call any initial plugins when ready
        this.platform.ready().then(function () {
            console.log("Should be login screen.");
            _this.splashScreen.hide();
        });
    };
    ConferenceApp.prototype.isActive = function (page) {
        var childNav = this.nav.getActiveChildNav();
        // Tabs are a special case because they have their own navigation
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabName) {
                return 'primary';
            }
            return;
        }
        if (this.nav.getActive() && this.nav.getActive().name === page.name) {
            return 'primary';
        }
        return;
    };
    return ConferenceApp;
}());
__decorate([
    core_1.ViewChild(ionic_angular_1.Nav)
], ConferenceApp.prototype, "nav");
ConferenceApp = __decorate([
    core_1.Component({
        templateUrl: 'app.template.html'
    })
], ConferenceApp);
exports.ConferenceApp = ConferenceApp;
//# sourceMappingURL=app.component.js.map
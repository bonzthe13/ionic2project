"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var about_1 = require("../about/about");
var map_1 = require("../map/map");
var bonzprj_1 = require("../bonzprj/bonzprj");
//import { SchedulePage } from '../schedule/schedule';
//import { SpeakerListPage } from '../speaker-list/speaker-list';
var TabsPage = (function () {
    function TabsPage(navParams) {
        // set the root pages for each tab
        this.tab1Root = bonzprj_1.BonzprjPage;
        //tab2Root: any = SchedulePage;
        // tab3Root: any = SpeakerListPage;
        this.tab2Root = map_1.MapPage;
        this.tab3Root = about_1.AboutPage;
        this.mySelectedIndex = navParams.data.tabIndex || 0;
    }
    return TabsPage;
}());
TabsPage = __decorate([
    core_1.Component({
        templateUrl: 'tabs.html'
    })
], TabsPage);
exports.TabsPage = TabsPage;
//# sourceMappingURL=tabs.js.map
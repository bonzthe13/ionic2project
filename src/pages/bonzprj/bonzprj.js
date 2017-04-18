"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var BonzprjPage = (function () {
    function BonzprjPage(alertCtrl, navCtrl, storage, dataservice, userData) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.dataservice = dataservice;
        this.userData = userData;
        //array=[];
        this.retval = false;
        this.storage.get('myProject').then(function (data) {
            //console.log("my Data : "+data);
            _this.items = data;
        });
    }
    ;
    BonzprjPage.prototype.addnew = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Adding new Project',
            buttons: [
                'Cancel'
            ]
        });
        alert.addInput({
            name: 'project',
            value: this.project,
            placeholder: 'Project'
        });
        alert.addButton({
            text: 'Ok',
            handler: function (data) {
                //this.userData.setUsername(data.project);
                if (data.project != null) {
                    //OnSetData(data.project);
                    _this.dataservice.do_check_data(data.project.trim());
                    console.log("For new record...");
                    //this.dataservice.saveit(data.project);
                }
                // this.getUsername();
            }
        });
        alert.present();
    };
    return BonzprjPage;
}());
BonzprjPage = __decorate([
    core_1.Component({
        selector: 'page-bonzprj',
        templateUrl: 'bonzprj.html'
    })
], BonzprjPage);
exports.BonzprjPage = BonzprjPage;
//# sourceMappingURL=bonzprj.js.map
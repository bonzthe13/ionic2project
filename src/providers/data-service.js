"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var DataService = (function () {
    function DataService(storage) {
        this.storage = storage;
        this.ldata = false;
    }
    ;
    DataService.prototype.do_check_data = function (val) {
        var _this = this;
        this.ldata = false;
        console.log('for checking...(' + val + ').');
        if (val != null) {
            this.storage.get('myProject').then(function (data) {
                console.log("my Data : " + data);
                for (var item in data) {
                    console.log(val + ' = ' + data[item].trim());
                    if (val.trim() == data[item].trim()) {
                        _this.ldata = true;
                        break;
                    }
                }
                if (!_this.ldata) {
                    if (data != null) {
                        data.push(val);
                        _this.storage.set('myProject', data);
                    }
                    else {
                        _this.storage.set('myProject', val);
                    }
                    alert('Current project name(' + val + ') has been successfully added...');
                }
                else {
                    alert('Current project name(' + val + ') already exist...');
                }
                // console.log(' checking results  .... '+this.ldata);
            });
        }
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable()
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=data-service.js.map
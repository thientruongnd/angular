"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ControlComponent = (function () {
    function ControlComponent() {
        this.typeSummaryChange = new core_1.EventEmitter();
        this.typeCurrencyChange = new core_1.EventEmitter();
        this.valueSummary = ["Small", "Medium", "Full"];
        this.valueCurrency = ["vnd", "usd"];
    }
    ControlComponent.prototype.settingSummary = function (value) {
        this.typeSummaryChange.emit(value);
    };
    ControlComponent.prototype.settingCurrency = function (value) {
        this.typeCurrencyChange.emit(value);
    };
    __decorate([
        core_1.Input("typeSummary"), 
        __metadata('design:type', Number)
    ], ControlComponent.prototype, "typeSummary", void 0);
    __decorate([
        core_1.Input("typeCurrency"), 
        __metadata('design:type', String)
    ], ControlComponent.prototype, "typeCurrency", void 0);
    __decorate([
        core_1.Output("typeSummaryChange"), 
        __metadata('design:type', Object)
    ], ControlComponent.prototype, "typeSummaryChange", void 0);
    __decorate([
        core_1.Output("typeCurrencyChange"), 
        __metadata('design:type', Object)
    ], ControlComponent.prototype, "typeCurrencyChange", void 0);
    ControlComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'zvn-control',
            templateUrl: './../templates/control.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ControlComponent);
    return ControlComponent;
}());
exports.ControlComponent = ControlComponent;
//# sourceMappingURL=control.component.js.map
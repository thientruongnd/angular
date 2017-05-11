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
var BindingComponent = (function () {
    function BindingComponent() {
        this.title = "Binding Component 123";
        this.personObj = { 'name': 'Mr John', 'age': 20 };
        this.link = "https://angular.io/docs/ts/latest/guide/template-syntax.html";
        this.isActive = true;
    }
    BindingComponent.prototype.showInfo = function () {
        return this.personObj.name + " - " + this.personObj.age;
    };
    BindingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-binding',
            templateUrl: './binding.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], BindingComponent);
    return BindingComponent;
}());
exports.BindingComponent = BindingComponent;
//# sourceMappingURL=binding.component.js.map
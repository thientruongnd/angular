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
var StyleComponent = (function () {
    function StyleComponent() {
        this.textDemo = "";
        this.templateCurrent = "";
        this.backgroundColor = "";
        this.textColor = "";
        this.textDemo = "Angular 2x is not difficult";
    }
    StyleComponent.prototype.changeTemplate = function ($event) {
        this.templateCurrent = $event.target.value;
        console.log(this.templateCurrent);
    };
    StyleComponent.prototype.changeBackgroundColor = function ($event) {
        this.backgroundColor = $event.target.value;
    };
    StyleComponent.prototype.changeTextColor = function ($event) {
        this.textColor = $event.target.value;
    };
    StyleComponent.prototype.setStyles = function () {
        return {
            'background-color': this.backgroundColor,
            'color': this.textColor
        };
    };
    StyleComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'proj-style',
            templateUrl: 'style.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], StyleComponent);
    return StyleComponent;
}());
exports.StyleComponent = StyleComponent;
//# sourceMappingURL=style.component.js.map
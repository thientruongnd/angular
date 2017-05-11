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
var NgStyleComponent = (function () {
    function NgStyleComponent() {
        this.canSave = true;
        this.isUnchanged = false;
        this.isSpecial = true;
    }
    NgStyleComponent.prototype.setStyles = function () {
        return {
            'font-style': this.canSave ? 'italic' : 'normal',
            'font-weight': !this.isUnchanged ? 'bold' : 'normal',
            'font-size': this.isSpecial ? '24px' : '8px',
        };
    };
    NgStyleComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-ng-style',
            templateUrl: 'ng-style.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], NgStyleComponent);
    return NgStyleComponent;
}());
exports.NgStyleComponent = NgStyleComponent;
/*
font-style italic
font-weight normal
font-size 24px

font-style: italic; font-weight: bold; font-size: 24px;

<div [ngStyle]="setStyles()">
  This div is italic, normal weight, and extra large (24px).
</div>
*/
//# sourceMappingURL=ng-style.component.js.map
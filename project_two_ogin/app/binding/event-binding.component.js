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
var EventBindingComponent = (function () {
    function EventBindingComponent() {
    }
    EventBindingComponent.prototype.clickMe1 = function () {
        console.log("ABC");
    };
    EventBindingComponent.prototype.clickMe2 = function ($event) {
        console.log("DEF");
        console.log($event);
    };
    EventBindingComponent.prototype.btnClick = function ($event) {
        $event.stopPropagation();
        console.log("btnClick");
    };
    EventBindingComponent.prototype.divClick = function ($event) {
        console.log("divClick");
    };
    EventBindingComponent.prototype.onKeyUp = function ($event) {
        if ($event.which == 13) {
            jQuery("p#result-tag").append('<span class="label label-info">' + $event.target.value + '</span> ');
            $event.target.value = "";
        }
    };
    EventBindingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-event-binding',
            templateUrl: './event-binding.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], EventBindingComponent);
    return EventBindingComponent;
}());
exports.EventBindingComponent = EventBindingComponent;
//# sourceMappingURL=event-binding.component.js.map
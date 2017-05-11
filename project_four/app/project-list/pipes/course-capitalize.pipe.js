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
var CourseCapitalizePipe = (function () {
    function CourseCapitalizePipe() {
    }
    CourseCapitalizePipe.prototype.transform = function (value) {
        return value.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    CourseCapitalizePipe = __decorate([
        core_1.Pipe({
            name: 'courseCapitalize'
        }), 
        __metadata('design:paramtypes', [])
    ], CourseCapitalizePipe);
    return CourseCapitalizePipe;
}());
exports.CourseCapitalizePipe = CourseCapitalizePipe;
//# sourceMappingURL=course-capitalize.pipe.js.map
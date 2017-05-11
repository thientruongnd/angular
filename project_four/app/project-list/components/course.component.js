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
var course_class_1 = require('./../define/course.class');
var CourseComponent = (function () {
    function CourseComponent() {
    }
    __decorate([
        core_1.Input("course"), 
        __metadata('design:type', course_class_1.Course)
    ], CourseComponent.prototype, "courseObj", void 0);
    __decorate([
        core_1.Input("typeSummary"), 
        __metadata('design:type', Number)
    ], CourseComponent.prototype, "typeSummary", void 0);
    __decorate([
        core_1.Input("typeCurrency"), 
        __metadata('design:type', String)
    ], CourseComponent.prototype, "typeCurrency", void 0);
    CourseComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'zvn-course',
            templateUrl: './../templates/course.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CourseComponent);
    return CourseComponent;
}());
exports.CourseComponent = CourseComponent;
//# sourceMappingURL=course.component.js.map
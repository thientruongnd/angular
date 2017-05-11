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
var ProjectComponent = (function () {
    function ProjectComponent() {
        this.courses = [];
        this.typeSummary = 0;
        this.typeCurrency = "usd";
        this.courses.push(new course_class_1.Course("C01", "ruby on rails developer course", 48, "c01.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, eius!", ["php", "angular", "frontend"]));
        this.courses.push(new course_class_1.Course("C02", "modern react with redux", 45, "c02.jpg", "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.", ["zend2", "jquery"]));
        this.courses.push(new course_class_1.Course("C03", "complete asp net web development", 23, "c03.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus!", ["php", "wordpress", "html"]));
        this.courses.push(new course_class_1.Course("C04", "build 8 python web apps", 95, "c04.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates aspernatur, nostrum veniam consequuntur sapiente unde! Iure.", ["html", "css", "jquery"]));
    }
    ProjectComponent.prototype.changeSummary = function (value) {
        this.typeSummary = value;
    };
    ProjectComponent.prototype.changeCurrency = function (value) {
        this.typeCurrency = value;
    };
    ProjectComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'project-list',
            templateUrl: './../templates/project.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectComponent);
    return ProjectComponent;
}());
exports.ProjectComponent = ProjectComponent;
//# sourceMappingURL=project.component.js.map
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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
// Component
var pipe_component_1 = require('./pipe/pipe.component');
var cus_pipe_component_1 = require('./cus-pipe/cus-pipe.component');
// Pipe
var capitalize_pipe_1 = require('./pipes/capitalize.pipe');
var array_pipe_1 = require('./pipes/array.pipe');
var sort_pipe_1 = require('./pipes/sort.pipe');
var summary_pipe_1 = require('./pipes/summary.pipe');
var category_pipe_1 = require('./pipes/category.pipe');
// Project
var project_component_1 = require('./project-list/components/project.component');
var control_component_1 = require('./project-list/components/control.component');
var course_component_1 = require('./project-list/components/course.component');
var course_capitalize_pipe_1 = require('./project-list/pipes/course-capitalize.pipe');
var course_summary_pipe_1 = require('./project-list/pipes/course-summary.pipe');
var course_category_pipe_1 = require('./project-list/pipes/course-category.pipe');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [
                app_component_1.AppComponent,
                // Component
                pipe_component_1.PipeComponent,
                cus_pipe_component_1.CusPipeComponent,
                // Pipe
                capitalize_pipe_1.CapitalizePipe,
                array_pipe_1.ArrayPipe,
                sort_pipe_1.SortPipe,
                summary_pipe_1.SummaryPipe,
                category_pipe_1.CategoryPipe,
                // Project
                project_component_1.ProjectComponent,
                control_component_1.ControlComponent,
                course_component_1.CourseComponent,
                course_capitalize_pipe_1.CourseCapitalizePipe,
                course_summary_pipe_1.CourseSummaryPipe,
                course_category_pipe_1.CourseCategoryPipe
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
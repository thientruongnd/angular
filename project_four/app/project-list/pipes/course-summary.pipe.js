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
var CourseSummaryPipe = (function () {
    function CourseSummaryPipe() {
    }
    CourseSummaryPipe.prototype.transform = function (value, typeSummary) {
        if (typeSummary === void 0) { typeSummary = 0; }
        if (value) {
            var limit = 10;
            if (typeSummary == 1)
                limit = 40;
            if (typeSummary == 2)
                return value;
            return value.substring(0, limit) + "...";
        }
        else {
            return '';
        }
    };
    CourseSummaryPipe = __decorate([
        core_1.Pipe({
            name: 'courseSummary'
        }), 
        __metadata('design:paramtypes', [])
    ], CourseSummaryPipe);
    return CourseSummaryPipe;
}());
exports.CourseSummaryPipe = CourseSummaryPipe;
//# sourceMappingURL=course-summary.pipe.js.map
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
var PipeComponent = (function () {
    function PipeComponent() {
        // Normarl
        this.courseObj = {
            'id': 20,
            'name': 'Angular 2',
            'date': new Date(),
            'price': 250450.87654,
            'require': ['typescript', 'html', 'css', 'javascript']
        };
        // Percent
        this.percentA = 0.123;
        this.percentB = 2.123;
    }
    PipeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'zvn-pipe',
            templateUrl: './pipe.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], PipeComponent);
    return PipeComponent;
}());
exports.PipeComponent = PipeComponent;
//# sourceMappingURL=pipe.component.js.map
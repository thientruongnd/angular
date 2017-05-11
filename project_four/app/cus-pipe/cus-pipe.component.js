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
var CusPipeComponent = (function () {
    function CusPipeComponent() {
        // Normarl
        this.courseObj = {
            'id': 20,
            'name': 'Angular 2',
            'date': new Date(),
            'price': 20.1223,
            'require': ['html', 'typescript', 'css', 'javascript', 'bootstrap']
        };
        // Array Number
        this.arrNumber = [8, 9, 5, 4, 1, 3, 2, 7, 6];
        // Summary
        this.description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe animi perspiciatis repellat illum dolorum blanditiis odit soluta obcaecati ipsa deserunt.';
        // Capitalize
        this.text = "Angular 2 Is very easy";
        // Category
        this.arrCategory = ["IT", "Programming", "Mobile", "Web", "Net", "Frontend", "IT", "Web"];
    }
    CusPipeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'zvn-cus-pipe',
            templateUrl: './cus-pipe.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CusPipeComponent);
    return CusPipeComponent;
}());
exports.CusPipeComponent = CusPipeComponent;
//# sourceMappingURL=cus-pipe.component.js.map
import { Component, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'proj-style',
	templateUrl: 'style.component.html'
})
export class StyleComponent {
	textDemo: string = "";

	templateCurrent: string = "";
	backgroundColor: string = "";
	textColor: string = "";
	constructor() {
		this.textDemo = "Angular 2x is not difficult";
	}
	changeTemplate($event:any){
		this.templateCurrent = $event.target.value;
		console.log(this.templateCurrent);
	}

	changeBackgroundColor($event:any){
		this.backgroundColor = $event.target.value;
	}

	changeColor($event:any){
		this.textColor = $event.target.value;
	}

	setStyles() {
		return {
			'background-color':  this.backgroundColor,  // italic
			'color': this.textColor
		};
	}
}

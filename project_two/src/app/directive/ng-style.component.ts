import { Component } from '@angular/core';
declare var jQuery:any;

@Component({
	moduleId: module.id,
	selector: 'my-ng-style',
	templateUrl: 'ng-style.component.html'
	//template:`<h1>Truong test</h1>`,
})

export class NgStyleComponent  {
	canSave:boolean = true;
	isUnchanged:boolean = false;
	isSpecial:boolean = true;

	
	currentStyles: {};
	setCurrentStyles() {
	  this.currentStyles = {
	    // CSS styles: set per current state of component properties
	    'font-style':  this.canSave      ? 'italic' : 'normal',
	    'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
	    'font-size':   this.isSpecial    ? '94px'   : '62px'
	  };
	}
}
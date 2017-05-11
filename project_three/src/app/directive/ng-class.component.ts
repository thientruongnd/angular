import { Component } from '@angular/core';
declare var jQuery:any;

@Component({
	moduleId: module.id,
	selector: 'my-ng-class',
	templateUrl: 'ng-class.component.html'
	//template:`<h1>Truong test</h1>`,
})


export class NgClassComponent  {
	isList: boolean = true;

	setClasses(){
		return {
			'glyphicon-th': !this.isList,
		    'glyphicon-th-list': this.isList,
		};

	}
	
}
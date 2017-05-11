import { Component } from '@angular/core';
declare var jQuery:any;

@Component({
	moduleId: module.id,
	selector: 'my-ng-if',
	templateUrl: 'ng-if.component.html'
	//template:`<h1>Truong test</h1>`,
})


export class NgIfComponent  {
	isShow: boolean = true;
	
	
}
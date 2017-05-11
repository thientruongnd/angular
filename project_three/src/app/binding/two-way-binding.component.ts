import { Component } from '@angular/core';
declare var jQuery:any;

@Component({
	moduleId: module.id,
	selector: 'two-way-binding',
	templateUrl: './two-way-binding.component.html'
	//template:`<h1>Truong test</h1>`,
})


export class TwoWayBindingComponent  {
	firstName : string = "Angular";

	
	
	
}
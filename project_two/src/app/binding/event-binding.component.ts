import { Component } from '@angular/core';

declare var jQuery:any;

@Component({
	moduleId: module.id,
	selector: 'my-event-binding',
	templateUrl: './event-binding.component.html'
	//template:`<h1>Truong test</h1>`,
})


export class EventBindingComponent  {
	
	constructor() {}

	clickMe1():void{
		console.log('ABC');
	}
	clickMe2($event:any):void{
		//console.log('Xuan truong');
		console.log($event);
	}
	btnClick($event:any):void{
		console.log($event);
	}

	onKeyUP($event:any):void{
		console.log($event);
		if($event.which == 13){
			jQuery("p#result-tag").append('<span class="label label-info">'+$event.target.value+'</span> ');
			$event.target.value = "";
		}
	}
}
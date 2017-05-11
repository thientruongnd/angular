import { Component } from '@angular/core';
declare var jQuery:any;

@Component({
	moduleId: module.id,
	selector: 'my-ng-for',
	//templateUrl: 'ng-if.component.html'
	templateUrl: 'ng-for.component.html'
	//template:`<h1>Truong test</h1>`,
})


export class NgForComponent  {
	//isShow: boolean = true;
	courses:string[] = ["TypeScrip","Angular","NodeJs"]
	
}
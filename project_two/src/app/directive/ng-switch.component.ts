import { Component } from '@angular/core';
declare var jQuery:any;

@Component({
	moduleId: module.id,
	selector: 'my-ng-switch',
	templateUrl: 'ng-switch.component.html'
	//template:`<h1>Truong test</h1>`,
})


export class NgSwitchComponent  {
	//toeChoice: string = "Eenie" ;
	tab:string = "home";

	changeTab(tabCurrent:string): void{
		this.tab = tabCurrent;
	}
}
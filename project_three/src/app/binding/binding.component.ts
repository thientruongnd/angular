import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'my-binding',
	templateUrl: './binding.component.html'
	//template:`<h1>Truong test</h1>`,
})
export class BindingComponent  {
	tille: string = "Binding Componet";
	personObj: any = {'name':'Dang xuan truong','age':20};
	link: string = "https://angular.io/docs/ts/latest/guide/template-syntax.html";
	showInfo():string {
		return this.personObj.name+"-"+this.personObj.age;
	}
	constructor() {}

	
}
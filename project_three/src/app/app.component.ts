import { Component } from '@angular/core';

@Component({
  moduleId : module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
	
	title:string = "Project 03 - Output Properties";
	description:string = "Project 03 - Output Description";

	answer($event:any) : void {
		console.log($event);
	}

	componentTitle : string = "AppComponent";
	resertColor: string = "#000804";

	changeColor($event:any){
		this.resertColor = $event;
	}

	funcResetColor(){
		this.resertColor = '#000804';
	}
}

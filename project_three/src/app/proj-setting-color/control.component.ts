import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'zvn-control',
	templateUrl: './control.component.html'
})

export class ControlComponent {
	componentTitle : string = "ControlComponent";
	@Input("mcolor") controlColor: string;

	@Output("selectColor") selectColor =  new EventEmitter <string>();

	constructor() {

	}

	changeColor(value:string){
		this.selectColor.emit(value);
	}
}
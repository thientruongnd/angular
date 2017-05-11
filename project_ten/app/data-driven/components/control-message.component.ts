import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Validators } from './../validators/validators.class';

@Component({
	moduleId: module.id,
	selector: 'zvn-control-message',
	templateUrl: './../templates/control-message.component.html'
})

export class ControlMessageComponent implements OnInit {
	@Input('control') control: FormControl;

	constructor(){}

	get message(): string{
		for(let property in this.control.errors){
			if(this.control.touched == true && this.control.errors.hasOwnProperty(property)) {
				return Validators.showError(property, this.control.errors[property]);
			}
		}
	}

	ngOnInit(){
		
	}

		
}

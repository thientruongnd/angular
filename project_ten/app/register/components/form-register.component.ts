import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { Validators as ZValidators } from './../validators/validators.class';

@Component({
	moduleId: module.id,
	selector: 'zvn-profile',
	templateUrl: './../templates/form-register.component.html'
})

export class FormRegisterComponent implements OnInit {

	resultSubmit: any;
	mForm: FormGroup; 
	genders: string[] 	= [];
	countries: string[] = [];

	constructor(private _formBuilder: FormBuilder){}

	ngOnInit(){
		this.genders 	= ["Male", "Female"];
		this.countries 	= ["Afghanistan", "Argentina", "Australia", "Canada", "Denmark", "France"];

		this.mForm = this._formBuilder.group({
			'username'			: [ '', [ Validators.required, Validators.minLength(6) ]],
			'email'				: [ '', [ Validators.required, ZValidators.emailValidator ]],
			'password123'			: [ '', [ Validators.required ]],
			'confirmPassword'	: [ '', [ Validators.required ]],
			'gender'			: [ 'Male', [ Validators.required ]],
			'country'			: [ 2, [ Validators.required ]],
		}, { validator: ZValidators.matchingPasswords('password123', 'confirmPassword') });
	}

	onSubmitForm(){
		if(this.mForm.dirty && this.mForm.valid){
			this.resultSubmit = this.mForm.value;
		}
	}
}

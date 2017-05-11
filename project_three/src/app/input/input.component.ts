import { Component, Input } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'zvn-input',
	templateUrl: './input.component.html',
})

export class InputComponent {
	@Input("mtitle") stitle :string;
	@Input("mdesscription") sdesscription :string;
}

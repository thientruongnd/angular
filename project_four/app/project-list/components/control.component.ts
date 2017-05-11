import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'zvn-control',
	templateUrl: './../templates/control.component.html'
})
export class ControlComponent  {
	@Input("typeSummary") typeSummary: number;
	@Input("typeCurrency") typeCurrency: string;
	@Output("typeSummaryChange") typeSummaryChange = new EventEmitter<number>();
	@Output("typeCurrencyChange") typeCurrencyChange = new EventEmitter<string>();

	valueSummary: string[] = ["Small", "Medium", "Full"];
	valueCurrency: string[] = ["vnd", "usd"];

	settingSummary(value: any){
		this.typeSummaryChange.emit(value);
	}

	settingCurrency(value: any){
		this.typeCurrencyChange.emit(value);
	}

	constructor() {

	}

}
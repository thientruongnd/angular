import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { TemplateDrivenModule }  from './template-driven/template-driven.module';
import { DataDrivenModule }  from './data-driven/data-driven.module';
import { RegisterModule }  from './register/register.module';

import { ElementsModule }  from './elements/elements.module';

@NgModule({
	imports:      [ 
		BrowserModule, 		
		TemplateDrivenModule,
		DataDrivenModule,
		RegisterModule,
		ElementsModule,
		AppRoutingModule
	],
	declarations: [ AppComponent ],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }

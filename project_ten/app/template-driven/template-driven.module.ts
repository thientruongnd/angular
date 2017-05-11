import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// Component
import { ProfileComponent } from "./components/profile.component";

// Routing
import { TemplateDrivenRoutingModule } from './template-driven-routing.module';

// SharedModule
import { SharedModule } from './../shared/shared.module';


@NgModule({
	imports: [
		SharedModule,
		FormsModule,
		TemplateDrivenRoutingModule,
		HttpModule
	],
	declarations: [ 
		ProfileComponent,
	],
	// providers: 	[ CourseService],
})

export class TemplateDrivenModule { }



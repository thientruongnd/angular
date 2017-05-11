import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

// Component
import { FormRegisterComponent } from "./components/form-register.component";
import { ControlMessageComponent } from "./components/control-message.component";

// Service
// import { CourseService } from './services/course.service';

// Routing
import { RegisterRoutingModule } from './register-routing.module';

// SharedModule
import { SharedModule } from './../shared/shared.module';


@NgModule({
	imports: [
		SharedModule,
		ReactiveFormsModule,
		RegisterRoutingModule,
		HttpModule
	],
	declarations: [ 
		FormRegisterComponent,
		ControlMessageComponent
	],
	// providers: 	[ CourseService],
})

export class RegisterModule { }



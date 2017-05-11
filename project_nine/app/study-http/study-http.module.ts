import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


// Component
import { CourseListComponent } from "./components/course-list.component";

// Service
import { CourseService } from './services/course.service';

// Routing
import { StudyHttpRoutingModule } from './study-http-routing.module';

// SharedModule
import { SharedModule } from './../shared/shared.module';


@NgModule({
	imports: [
		SharedModule,
		StudyHttpRoutingModule,
		HttpModule
	],
	declarations: [ 
		CourseListComponent,
	],
	providers: 	[ CourseService],
})

export class StudyHttpModule { }



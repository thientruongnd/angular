import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

// Component
import { PipeComponent } from './pipe/pipe.component';
import { CusPipeComponent } from './cus-pipe/cus-pipe.component';

// Pipe
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { ArrayPipe } from './pipes/array.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { SummaryPipe } from './pipes/summary.pipe';
import { CategoryPipe } from './pipes/category.pipe';

// Project
import { ProjectComponent } from './project-list/components/project.component';
import { ControlComponent } from './project-list/components/control.component';
import { CourseComponent } from './project-list/components/course.component';


import { CourseCapitalizePipe } from './project-list/pipes/course-capitalize.pipe';
import { CourseSummaryPipe } from './project-list/pipes/course-summary.pipe';
import { CourseCategoryPipe } from './project-list/pipes/course-category.pipe';

@NgModule({
	imports:      [ BrowserModule ],
	declarations: [ 
		AppComponent,

		// Component
		PipeComponent,
		CusPipeComponent,

		// Pipe
		CapitalizePipe,
		ArrayPipe,
		SortPipe,
		SummaryPipe,
		CategoryPipe,

		// Project
		ProjectComponent,
		ControlComponent,
		CourseComponent,
		CourseCapitalizePipe,
		CourseSummaryPipe,
		CourseCategoryPipe

		
	],
	bootstrap:    [ AppComponent ]
})

export class AppModule { }

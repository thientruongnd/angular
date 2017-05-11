import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { StudyHttpModule }  from './study-http/study-http.module';
import { GithubModule }  from './github/github.module';
import { SpotifyModule }  from './spotify/spotify.module';
import { CourseFormModule }  from './course-form/course-form.module';

@NgModule({
	imports:      [ 
		BrowserModule, 		
		StudyHttpModule,
		GithubModule,
		SpotifyModule,
		CourseFormModule,
		AppRoutingModule
	],
	declarations: [ AppComponent ],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }

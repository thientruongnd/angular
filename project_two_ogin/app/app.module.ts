import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule } from '@angular/forms';

// 01 Multi Component
import { SubComponent } from './multi-component/sub.component';
import { StudyMultiAbcComponent } from './multi-component/study-multi-abc.component';

// 02 Binding Component
import { BindingComponent } from './binding/binding.component';

// 02 Event Binding Component
import { EventBindingComponent } from './binding/event-binding.component';

// 02 Two Way Binding Component
import { TwoWayBindingComponent } from './binding/two-way-binding.component';

// 03 ngIF
import { NgIfComponent } from './directive/ng-if.component';

// 03 ngFor
import { NgForComponent } from './directive/ng-for.component';

// 03 NgSwitchComponent
import { NgSwitchComponent } from './directive/ng-switch.component';

// 03 NgClassComponent
import { NgClassComponent } from './directive/ng-class.component';

// 03 NgStyleComponent
import { NgStyleComponent } from './directive/ng-style.component';

// 04 StyleComponent
import { StyleComponent } from './proj-style/style.component';

@NgModule({
	imports:      [ 
		BrowserModule,
		FormsModule
	],
	declarations: [ 
		AppComponent,
		StyleComponent
		// SubComponent,
		// StudyMultiAbcComponent,
		// BindingComponent,
		// EventBindingComponent,
		// TwoWayBindingComponent,
		// NgIfComponent,
		// NgForComponent,
		// NgSwitchComponent,
		// NgClassComponent,
		// NgStyleComponent
	],
	bootstrap:    [ AppComponent ]
})

export class AppModule { }

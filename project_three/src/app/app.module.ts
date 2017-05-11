import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
//import { BindingComponent } from './binding/binding.component';
//import { EventBindingComponent } from './binding/event-binding.component';
//import { TwoWayBindingComponent } from './binding/two-way-binding.component';
//import { NgIfComponent } from './directive/ng-if.component';
//import { NgForComponent } from './directive/ng-for.component';
//import { NgSwitchComponent } from './directive/ng-switch.component';
//import { NgClassComponent } from './directive/ng-class.component';
//import { NgStyleComponent } from './directive/ng-style.component';
//import { StyleComponent } from './proj-style/style.component';
//import { VariableComponent } from './template-variable/variable.component';
//import { InputComponent } from './input/input.component';
//import { OutputComponent } from './output/output.component';
import { ControlComponent } from './proj-setting-color/control.component';
import { PreviewerComponent } from './proj-setting-color/previewer.component';
@NgModule({
  imports: [
   BrowserModule,
   FormsModule,
   ],
  declarations: [
    AppComponent,
    //BindingComponent,
    //EventBindingComponent,
    //TwoWayBindingComponent,
   // NgIfComponent,
   // NgForComponent,
   // NgClassComponent,
   // NgSwitchComponent,
   // NgStyleComponent,
    //StyleComponent,
    //VariableComponent,
    //InputComponent,
    //OutputComponent,
    ControlComponent,
    PreviewerComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

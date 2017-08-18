import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WelcomeComponent} from "./welcome.component";

@NgModule({
  imports: [ CommonModule],
  exports : [
    CommonModule
  ],
  declarations: [ WelcomeComponent ],
})
export class HomeModule { }

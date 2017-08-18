import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {PageNotFoundComponent} from "./page-not-found.component";
import {MessageModule} from "./messages+/message.module";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [ CommonModule, BrowserModule, RouterModule],
  exports : [
    CommonModule,
    MessageModule
  ],
  declarations: [ PageNotFoundComponent ],
})
export class SharedModule { }

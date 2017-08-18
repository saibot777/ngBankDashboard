import { NgModule } from '@angular/core';

import { RouterModule } from "@angular/router";
import {userHandlingComponents, userHandlingServices} from "./user-handling.collections";
import {LoginComponent} from "./login/login.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent }
    ])
  ],
  declarations: [ ...userHandlingComponents ],
  providers: [ ...userHandlingServices ]
})
export class UserHandlingModule { }

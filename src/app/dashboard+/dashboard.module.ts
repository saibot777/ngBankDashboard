import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {userHandlingComponents, userHandlingServices} from "./dashboard.collections";
import {RouterModule} from "@angular/router";
import {AuthGuardService} from "../user-handling+/shared/services/auth-guard.service";
import {DashboardComponent} from "./dashboard-component/dashboard.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'dashboard',
        canActivate: [AuthGuardService],
        children: [
          {
            path: '',
            redirectTo: 'main',
            pathMatch: 'full'
          },
          {
            path: 'main',
            component: DashboardComponent
          }
        ]
      }
    ])
  ],
  exports : [
    CommonModule
  ],
  declarations: [ ...userHandlingComponents ],
  providers: [ ...userHandlingServices ]
})
export class DashboardModule { }

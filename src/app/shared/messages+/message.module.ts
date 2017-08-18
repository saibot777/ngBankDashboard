import { NgModule } from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";

import { MessageComponent } from './message.component';
import { MessageService } from './message.service';
import {RouterModule} from "@angular/router";



@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild([
      {
        path: 'messages',
        component: MessageComponent,
        outlet: 'popup'
      }
    ])
  ],
  declarations: [
    MessageComponent
  ],
  providers: [
    MessageService
  ]
})
export class MessageModule { }

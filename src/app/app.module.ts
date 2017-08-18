import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DatabaseData } from './api/database';

/* Feature Modules */
import {UserHandlingModule} from "./user-handling+/user-handling.module";
import {MessageModule} from "./shared/messages+/message.module";
import {SharedModule} from "./shared/shared.module";
import {HomeModule} from "./home+/home.module";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    SharedModule,
    HomeModule,
    UserHandlingModule,
    MessageModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(DatabaseData, { delay: 1000 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

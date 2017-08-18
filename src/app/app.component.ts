import { Component } from '@angular/core';

import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Event, Router} from "@angular/router";
import {AuthService} from "./user-handling+/shared/services/auth.service";
import {MessageService} from "./shared/messages+/message.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  pageTitle: string = 'Frenzie Bank Management';
  loading: boolean = true;

  constructor(public authService: AuthService,
              private router : Router,
              public messageService: MessageService) {
    router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }

    if (routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError) {
      this.loading = false;
    }
  }

  displayMessages(): void {
    this.router.navigate([{ outlets: { popup: ['messages'] }}]);
    this.messageService.isDisplayed = true;
  }

  hideMessages(): void {
    this.router.navigate([{ outlets: { popup: null }}]);
    this.messageService.isDisplayed = false;
  }

  logOut(): void {
    this.authService.logout();
    this.router.navigateByUrl('/welcome');
    console.log('Log Out');
  }
}

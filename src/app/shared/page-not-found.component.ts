import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="text-center">This is not the page you were looking for!</h1>
          <a (click)="goHome()" class="btn btn-primary btn-block" style="font-size: large">Go Home</a>
          <div class="panel-body"  >
            <div class="row" >
              <img src="../../assets/images/404.jpg"
                   class="img-responsive center-block"
                   style="max-height:700px;padding-bottom:50px"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
})
export class PageNotFoundComponent {

  constructor( private router: Router) {}

  goHome() {
    this.router.navigate(['../']);
  }

}

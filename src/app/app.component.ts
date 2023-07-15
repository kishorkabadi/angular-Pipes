import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName = 'Kishor';
  friendName = 'Anil';
  innerText = 'Welcome in Angular Data Binding with Property Binding';
  innerEventText = 'Welcome in Angular Data Binding with Event Binding';
  cssFontBold = false;
  OncClick(flag: boolean) {
    this.cssFontBold = flag;
    if (flag == false) {
      this.innerEventText =
        'Welcome in Angular Data Binding with Event(click) Binding';
    } else {
      this.innerEventText =
        'Welcome in Angular Data Binding with Event Binding';
    }
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/

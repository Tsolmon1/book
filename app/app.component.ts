import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
 /* template: `<h1>{{pageTitle}}</h1>
    <div>App Component</div>
    <bs-welcome></bs-welcome>
  ` */
  templateUrl: 'app.component.html'
})
export class AppComponent {
  pageTitle: string = 'Dev Book Store';
  searchBox: string = '';
 }

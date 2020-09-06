import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: 
  `
  <div>
    <h1>{{pageTitle}}</h1>
      <pm-products></pm-products>
  </div>
  `
})
export class AppComponent {
  pageTitle: string = 'My First Angular Component -- Acme Product Management';
  // getTitle: string {...};
}
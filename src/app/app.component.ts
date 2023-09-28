import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-angular';
  nomeCompleto: string = 'Clodoaldo Dos Santos Negreiros Junior';

  constructor() {
    console.log('oi');
  }
}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  valor = '';

  onSubmit(f: NgForm): void {
    console.log("Enviando form");
    console.log("Invalído? => " + f.invalid);
  }

}

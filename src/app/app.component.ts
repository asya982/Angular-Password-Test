import { Component } from '@angular/core';
import { statuses } from 'src/assets/constats';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  status: string = statuses.DEFAULT;

  changeValue(value: string) {
    const containsLetters = /[a-zA-Z]/.test(value);
    const containsDigit = /[0-9]/.test(value);
    const containsSpecial = /[!@#$%^&*()\-_=+[\]{};:~'",.<>?\\|]/.test(value);

    switch (true) {
      case value.length < 8:
        this.status = value.length > 0 ? statuses.WRONG : statuses.DEFAULT;
        break;
      case containsDigit && containsLetters && containsSpecial:
        this.status = statuses.STRONG;
        break;
      case [containsDigit, containsLetters, containsSpecial].filter(
        (value) => value
      ).length === 2:
        this.status = statuses.MEDIUM;
        break;
      default:
        this.status = statuses.LOW;
    }
  }
}

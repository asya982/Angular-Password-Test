import { Injectable } from '@angular/core';
import { statuses } from 'src/assets/constats';

@Injectable({
  providedIn: 'root',
})
export class PasswordFormService {
  constructor() {}

  checkPassword(value: string) {
    const containsLetters = /[a-zA-Z]/.test(value);
    const containsDigit = /[0-9]/.test(value);
    const containsSpecial = /[!@#$%^&*()\-_=+[\]{};:~'",.<>?\\|]/.test(value);

    const strengthState = [
      containsDigit,
      containsLetters,
      containsSpecial,
    ].filter((value) => value);

    switch (true) {
      case value.length < 8:
        return value.length > 0 ? statuses.WRONG : statuses.DEFAULT;
      case strengthState.length === 3:
        return statuses.STRONG;
      case strengthState.length === 2:
        return statuses.MEDIUM;
      default:
        return statuses.LOW;
    }
  }
}

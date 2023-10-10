import { Component, HostListener, forwardRef } from '@angular/core';
import { statuses } from 'src/assets/constats';
import { PasswordFormService } from '../password-form.service';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordFormComponent),
      multi: true
    },
  ],
})
export class PasswordFormComponent implements ControlValueAccessor {
  status: string = statuses.DEFAULT;
  password = new FormControl('');
  onChange: onChangeFn<string> = () => {};
  onTouch: onTouchFn = () => {};

  constructor(private passwordService: PasswordFormService) {}

  changeValue(value: string | null) {
    if (!value) return;
    this.status = this.passwordService.checkPassword(value);
    this.onChange(value);
  }

  writeValue(value: string) {
    this.password.setValue(value);
  }

  registerOnChange(fn: onChangeFn<string>) {
    this.onChange = fn;
  }

  registerOnTouched(fn: onTouchFn) {
    this.onTouch = fn;
  }

  @HostListener('focusout')
  onFocusOut() {
    this.onTouch();
  }
}

type onChangeFn<T> = (value: T) => void;
type onTouchFn = () => void;

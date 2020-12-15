import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'custom-input-text',
  templateUrl: './custom-input-text.component.html',
  styleUrls: ['./custom-input-text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputTextComponent),
      multi: true
    }
  ]
})
export class CustomInputTextComponent implements OnInit, ControlValueAccessor {

  innerValue: any;

  onChange: any = () => {};
  onTouched: any = () => {};

  get value(): any {
    return this.innerValue;
  }

  set value(value) {
    this.innerValue = value;
    this.onChange(value);
    this.onTouched();
  }

  ngOnInit(): void {
  }

  writeValue(value: any): void {
    if (value) {
      this.value = value;
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

}

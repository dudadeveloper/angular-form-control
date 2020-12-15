import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, NgControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: CustomInputComponent,
      multi: true
    }
  ]
})
export class CustomInputComponent implements OnInit, ControlValueAccessor, Validator {

  @Input() required: boolean = false;

  private innerValue: any;

  onChange: any = () => {};
  onTouched: any = () => {};
  onValidatorChange: any = () => {}; 

  constructor() {
  }

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

  validate(control: AbstractControl): ValidationErrors | null {
    if (this.required == true && !this.value) {
        return {
          invalid: true
        }
    }
    return;
  }
  registerOnValidatorChange?(fn: () => void): void {
    this.onValidatorChange = fn;
  }

  /* Validator */
  // validate({ value }: FormControl) {
  //   if (this.required == true && !this.value) {
  //     return {
  //       invalid: true
  //     }
  //   }
  //   return;
  // }

}

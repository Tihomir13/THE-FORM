import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormBuilderService {
  constructor(private fb: FormBuilder) {}

  createNameGroup(): FormGroup {
    let nameFormGroup = this.fb.group({
      firstName: this.fb.control('', Validators.required),
      lastName: this.fb.control('', Validators.required),
    });

    return nameFormGroup;
  }

  createAddressGroup(): FormGroup {
    let addressFormGroup = this.fb.group({
      country: this.fb.control(''),
      city: this.fb.control(''),
      street: this.fb.control(''),
      postalCode: this.fb.control(''),
      shipmentType: this.fb.control(''),
    });

    return addressFormGroup;
  }

  createFormGroup(): FormGroup {
    let form = this.fb.group({
      name: this.createNameGroup(),
      phone: this.fb.control('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      isBusinessAcc: this.fb.control(false),
      companyName: this.fb.control({ value: '', disabled: true }),
      address: this.createAddressGroup(),
    });

    return form;
  }
}

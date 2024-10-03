import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { FormStateService } from '../../services/form-state.service';
import { FormBuilderService } from '../../services/form-builder.service';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.scss'],
})
export class Form3Component implements OnInit {
  form!: FormGroup;

  get countryValue(): string {
    return this.form.get('country')?.value;
  }

  get cityValue(): string {
    return this.form.get('city')?.value;
  }

  get streetValue(): string {
    return this.form.get('street')?.value;
  }

  get postalCodeValue(): string {
    return this.form.get('postalCode')?.value;
  }

  get shipmentTypeValue(): string {
    return this.form.get('shipmentType')?.value;
  }

  constructor(
    private router: Router,
    private formState: FormStateService,
    private formBuilder: FormBuilderService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.createFormGroup();

    this.form.patchValue({
      name: {
        firstName: this.formState.formState.value.firstName,
        lastName: this.formState.formState.value.lastName,
      },
      phone: this.formState.formState.value.phone,
      isBusinessAcc: this.formState.formState.value.businessAcc,
      address: {
        country: this.formState.formState.value.country,
        city: this.formState.formState.value.city,
        street: this.formState.formState.value.street,
        postalCode: this.formState.formState.value.postalCode,
        shipmentType: this.formState.formState.value.shipmentType,
      },
    });
  }

  prevPage(): void {
    console.log(this.formState.formState.value);

    if (this.formState.formState.value.businessAcc) {
      this.router.navigate(['/form/2']);
    } else {
      this.router.navigate(['/form/1']);
    }

    this.formState.updateCountry(this.countryValue);
    this.formState.updateCity(this.cityValue);
    this.formState.updateStreet(this.streetValue);
    this.formState.updatePostalCode(this.postalCodeValue);

    console.log(this.shipmentTypeValue);

    this.formState.updateShipmentType(this.shipmentTypeValue);
  }

  onSubmit(): void {
    console.log(this.form.value);
  }
}

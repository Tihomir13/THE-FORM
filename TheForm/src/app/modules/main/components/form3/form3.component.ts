import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormStateService } from '../../services/form-state.service';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  get shipmentWorldwideValue(): string {
    return this.form.get('shipmentWorldwide')?.value;
  }

  get shipmenBulgarianValue(): string {
    return this.form.get('shipmenBulgarian')?.value;
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

    if(this.shipmenBulgarianValue){
      this.formState.updateShipmentType(this.shipmenBulgarianValue);
    }

    if(this.shipmentWorldwideValue){
      this.formState.updateShipmentType(this.shipmentWorldwideValue);
    }

  }

  onSubmit(): void {
    console.log(this.form.value);
  }
}

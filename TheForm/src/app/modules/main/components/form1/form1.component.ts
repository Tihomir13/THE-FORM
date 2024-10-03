import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormStateService } from '../../services/form-state.service';
import { FormBuilderService } from '../../services/form-builder.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss'],
})
export class Form1Component implements OnInit {
  form!: FormGroup;

  get firstNameValue(): string {
    return this.form.get('name.firstName')?.value;
  }

  get lastNameValue(): string {
    return this.form.get('name.lastName')?.value;
  }

  get phoneValue(): string {
    return this.form.get('phone')?.value;
  }

  get isBusinessAccValue(): boolean {
    return this.form.get('isBusinessAcc')?.value;
  }

  constructor(
    private router: Router,
    public formState: FormStateService,
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
    });
  }

  toggleBusinessAcc(): void {
    this.formState.updateBusinessAcc(
      !this.formState.formState.value.businessAcc
    );
  }

  nextPage(): void {
    if (this.formState.formState.value.businessAcc) {
      this.router.navigate(['/form/2']);
    } else {
      this.router.navigate(['/form/3']);
    }

    this.formState.updateFirstName(this.firstNameValue);
    this.formState.updateLastName(this.lastNameValue);
    this.formState.updatePhone(this.phoneValue);
    this.formState.updateBusinessAcc(this.isBusinessAccValue);
  }
}

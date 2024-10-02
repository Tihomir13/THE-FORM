import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilderService } from '../../form-builder.service';
import { FormGroup } from '@angular/forms';
import { FormStateService } from '../../form-state.service';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss'],
})
export class Form2Component implements OnInit {
  form!: FormGroup;

  get bussNameValue(): string {
    return this.form.get('businessName')?.value;
  }

  constructor(
    private router: Router,
    private formBuilder: FormBuilderService,
    private formState: FormStateService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.createFormGroup();
    this.form.get('companyName')?.enable();

    this.form.patchValue({
      companyName: this.formState.formState.value.companyName,
    });
  }

  nextPage() {
    this.router.navigate(['/form/3']);
    this.formState.updateCompanyName(this.bussNameValue);
  }

  prevPage() {
    this.router.navigate(['/form/1']);
    this.formState.updateCompanyName(this.bussNameValue);
  }
}

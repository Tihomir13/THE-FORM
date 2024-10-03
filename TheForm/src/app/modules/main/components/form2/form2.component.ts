import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
  
import { FormStateService } from '../../services/form-state.service';
import { FormBuilderService } from '../../services/form-builder.service';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss'],
})
export class Form2Component implements OnInit {
  form!: FormGroup;

  get bussNameValue(): string {
    return this.form.get('companyName')?.value;
  }

  constructor(
    private router: Router,
    private formBuilder: FormBuilderService,
    private formState: FormStateService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.createFormGroup();

    if (this.formState.formState.value.businessAcc) {
      this.form.get('companyName')?.enable();
    } else {
      this.router.navigate(['/form/1']);
    }

    this.form.patchValue({
      companyName: this.formState.formState.value.companyName,
    });
  }

  nextPage(): void {
    this.router.navigate(['/form/3']);
    this.formState.updateCompanyName(this.bussNameValue);
  }

  prevPage(): void {
    this.router.navigate(['/form/1']);
    this.formState.updateCompanyName(this.bussNameValue);
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { Form1Component } from './components/form1/form1.component';
import { Form2Component } from './components/form2/form2.component';
import { Form3Component } from './components/form3/form3.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [Form1Component, Form2Component, Form3Component],
  imports: [CommonModule, MainRoutingModule, ReactiveFormsModule],
  exports: [Form1Component],
})
export class MainModule {}

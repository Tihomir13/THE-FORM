import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface state {
  firstName: string;
  lastName: string;
  phone: string;
  businessAcc: boolean;
  companyName: string;
  country: string;
  city: string;
  street: string;
  postalCode: string;
  shipmentType: string;
}

@Injectable({
  providedIn: 'root',
})
export class FormStateService {
  formState = new BehaviorSubject<state>({
    firstName: '',
    lastName: '',
    phone: '',
    businessAcc: false,
    companyName: '',
    country: '',
    city: '',
    street: '',
    postalCode: '',
    shipmentType: '',
  });
  constructor() {}

  updateFirstName(newValue: string) {
    const currentState = this.formState.value;
    this.formState.next({ ...currentState, firstName: newValue });
  }
  updateLastName(newValue: string) {
    const currentState = this.formState.value;
    this.formState.next({ ...currentState, lastName: newValue });
  }
  updatePhone(newValue: string) {
    const currentState = this.formState.value;
    this.formState.next({ ...currentState, phone: newValue });
  }
  updateBusinessAcc(newValue: boolean) {
    const currentState = this.formState.value;
    this.formState.next({ ...currentState, businessAcc: newValue });
  }
  updateCompanyName(newValue: string) {
    const currentState = this.formState.value;
    this.formState.next({ ...currentState, companyName: newValue });
  }
  updateCountry(newValue: string) {
    const currentState = this.formState.value;
    this.formState.next({ ...currentState, country: newValue });
  }
  updateCity(newValue: string) {
    const currentState = this.formState.value;
    this.formState.next({ ...currentState, city: newValue });
  }
  updateStreet(newValue: string) {
    const currentState = this.formState.value;
    this.formState.next({ ...currentState, street: newValue });
  }
  updatePostalCode(newValue: string) {
    const currentState = this.formState.value;
    this.formState.next({ ...currentState, postalCode: newValue });
  }
  updateShipmentType(newValue: string) {
    const currentState = this.formState.value;
    this.formState.next({ ...currentState, shipmentType: newValue });
  }
}

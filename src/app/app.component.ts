import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { StripeScriptTag, StripeSource } from 'stripe-angular';
import { loadStripe, Stripe } from '@stripe/stripe-js';

const stripe = await loadStripe('pk_test_Qnd38mv665iSkePn8kzlw761');
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('cardNumberInput') cardNumberInput!: ElementRef;
  @ViewChild('cardExpiryInput') cardExpiryInput!: ElementRef;
  @ViewChild('cardCvcInput') cardCvcInput!: ElementRef;

  stripe!: any;

  constructor() { }

  ngAfterViewInit() {



    this.stripe = loadStripe('pk_test_Qnd38mv665iSkePn8kzlw761');

    const elements = this.stripe.elements();

    const cardNumber = elements.create('cardNumber');
    cardNumber.mount(this.cardNumberInput.nativeElement);

    const cardExpiry = elements.create('cardExpiry');
    cardExpiry.mount(this.cardExpiryInput.nativeElement);

    const cardCvc = elements.create('cardCvc');
    cardCvc.mount(this.cardCvcInput.nativeElement);
  }
}

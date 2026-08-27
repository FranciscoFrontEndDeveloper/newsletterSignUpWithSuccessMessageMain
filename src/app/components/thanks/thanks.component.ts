import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-thanks',
  standalone: true,
  templateUrl: './thanks.component.html'
})
export class ThanksComponent {
  email: string = '';
  constructor(private router: Router, private location: Location) {

    const state = this.location.getState() as { email?: string } | null;
    this.email = state?.email ?? '';
  }
  dismiss() {
    this.router.navigate(['/']);
  }
}

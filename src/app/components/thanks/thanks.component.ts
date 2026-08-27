import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-thanks',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './thanks.component.html'
})
export class ThanksComponent {
  email: string = '';
  constructor(private router: Router, private location: Location) { 

    const state = this.location.getState() as { email?: { email: string } };
    this.email = state.email?.email ?? '';
  }
dismiss(){
  this.router.navigate(['/', 'form']);
}
}

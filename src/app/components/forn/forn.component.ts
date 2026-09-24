import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forn',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forn.component.html',
})
export class FornComponent {
  public newsForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
  });

  get errorForm(): boolean {
    const control = this.newsForm.get('email');
    return !!control && control.touched && control.invalid;
  }

  constructor(private formBuilder: FormBuilder, private router: Router) {}

onSubmit() {
    this.newsForm.markAllAsTouched();
    if (this.newsForm.valid) {
      this.router.navigate(['/', 'thanks'], {
        state: { email: this.newsForm.get('email')?.value },
      });
    }
  }
}

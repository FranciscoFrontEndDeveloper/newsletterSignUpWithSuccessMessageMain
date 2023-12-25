import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { routes } from '../../app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forn',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forn.component.html',
})
export class FornComponent {
  public newsForm!: FormGroup;
  public errorForm!: boolean;
  constructor(private FormBuilder: FormBuilder, private Router: Router) {
    this.newsForm = this.FormBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
    this.errorForm = false
  }

  onSubmit() {
    if (this.newsForm.valid) {
      this.Router.navigate(['/', 'thanks']);
    } else {
      this.Router.navigate(['/', '']);
      this.errorForm = true;
    }
  }
}

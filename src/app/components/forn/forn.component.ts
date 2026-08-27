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
  public newsForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
  });
  public errorForm  = false
  constructor(private formBuilder: FormBuilder, private Router: Router) { }

  onSubmit() {
    if (this.newsForm.valid) {
      this.Router.navigate(['/', 'thanks']);
      this.Router.navigate(['/', 'thanks', { state: { email: this.newsForm.value } }]);
    } else {
      this.errorForm = true;
    }
  }
}

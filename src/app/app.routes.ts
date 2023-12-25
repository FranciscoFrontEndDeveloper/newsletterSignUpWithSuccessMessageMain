import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ThanksComponent } from './components/thanks/thanks.component';

export const routes: Routes = [
 { path: '', component: MainComponent },
 {path: 'thanks', component: ThanksComponent}
];

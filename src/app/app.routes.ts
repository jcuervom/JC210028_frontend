import { Routes } from '@angular/router';
import { AuthGuard } from './services/auth/auth.guard';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
];

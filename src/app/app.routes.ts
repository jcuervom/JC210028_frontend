import { Routes } from '@angular/router';
import { AuthGuard } from './services/auth/auth.guard';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'debts',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/debt-manager/debt-manager.module').then(
        (m) => m.DebtManagerModule,
      ),
  },
];

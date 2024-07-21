import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
//Auth0
import { provideAuth0 } from '@auth0/auth0-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAuth0({
      domain: 'jcuervom.eu.auth0.com',
      clientId: 'cX7DLjRB0PVHdFDCgSrvRXDgRudyEx30',
      authorizationParams: {
        redirect_uri: 'https://debt-manager.jcuervom.engineer',
        callbackURL: 'https://debt-manager.jcuervom.engineer',
      },
    }),
  ],
};

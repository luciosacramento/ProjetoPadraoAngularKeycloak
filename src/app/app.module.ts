import { APP_INITIALIZER, DEFAULT_CURRENCY_CODE, ErrorHandler, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeKeycloak } from './core/initializeKeycloak';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { InicioModule } from './modules/inicio/inicio.module';
import { User } from './core/user';
import { GlobalErrorHandler } from './core/globalErrorHandler';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { Utils } from './core/utils';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor } from './core/httpConfig.interceptor';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    KeycloakAngularModule,
    ToastrModule.forRoot({
      positionClass: 'toast-position',
      closeButton: true
    }),
    InicioModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt' },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
    KeycloakService,
    User,
    Utils,
    {provide: ErrorHandler, useClass: GlobalErrorHandler},
    {provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

//Configuración del locale de la app (afecta a varios tipos de pipes, de fecha, moneda, etc...)
//Inglés de US está por defecto y se puede usar en los pipes sin importar nada
import localeEsHn from '@angular/common/locales/es-HN'; //Español de honduras, el de españa es 'es'
import localeFrCa from '@angular/common/locales/fr-CA'; //Frances de canadá, el de francia es 'fr
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEsHn);
registerLocaleData(localeFrCa);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-HN' //Establece por defecto el idioma de la app en el idioma que se use.
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

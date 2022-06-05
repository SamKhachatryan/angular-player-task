import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routing.module';
import { AppComponent } from './component';
import { AppHeader } from 'src/components/header';
import { AppFooter } from 'src/components/footer';
import { AppNavigation } from 'src/components/navigation';

@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    AppNavigation,
    AppFooter,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

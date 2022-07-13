import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header/header.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { IntroComponent } from './components/intro/intro/intro.component';
import { MainButtonComponent } from './components/main-button/main-button.component';
import { HeaderButtonComponent } from './components/header-button/header-button.component';
import { MenuComponent } from './components/menu/menu/menu.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu/mobile-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    MainButtonComponent,
    HeaderButtonComponent,
    MenuComponent,
    MobileMenuComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

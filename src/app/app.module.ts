import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header/header.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { IntroComponent } from './components/intro/intro/intro.component';
import { MainButtonComponent } from './components/main-button/main-button.component';
import { HeaderButtonComponent } from './components/header-button/header-button.component';
import { MenuComponent } from './components/menu/menu/menu.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu/mobile-menu.component';
import { FaqComponent } from './components/faq/faq.component';
import { FaqItemComponent } from './components/faq-item/faq-item.component';
import { FaqListComponent } from './components/faq-list/faq-list.component';
import { WebsitesComponent } from './components/websites/websites.component';
import { StagesSliderModule } from './modules/stages-slider/stages-slider.module';
import { MoreInfoComponent } from './components/more-info/more-info.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FormModule } from './modules/form/form.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgCarouselModule } from '@silmar/ng-carousel';
import { SocialMediaComponent } from './components/social-media/social-media.component';

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
    FaqComponent,
    FaqItemComponent,
    FaqListComponent,
    WebsitesComponent,
    MoreInfoComponent,
    ContactsComponent,
    SocialMediaComponent,
  ],
  imports: [
    BrowserModule,
    StagesSliderModule,
    FormModule,
    FormsModule,
    ReactiveFormsModule,
    HammerModule,
    NgCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header/header.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { IntroComponent } from './components/intro/intro/intro.component';
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
import { ButtonMainDirective } from './directives/button-main.directive';
import { ButtonHeaderDirective } from './directives/button-header.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    MenuComponent,
    MobileMenuComponent,
    FaqComponent,
    FaqItemComponent,
    FaqListComponent,
    WebsitesComponent,
    MoreInfoComponent,
    ContactsComponent,
    SocialMediaComponent,
    ButtonMainDirective,
    ButtonHeaderDirective,
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

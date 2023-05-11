import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { AboutExtraPageComponent } from './about-page/about-extra-page/about-extra-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ColorDirective } from './shared/color.directive';
import { PageNamePipe } from './shared/page.name.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    AboutExtraPageComponent,
    HomePageComponent,
    ColorDirective,
    PageNamePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

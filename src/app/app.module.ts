import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { MainComponent } from './components/main/main.component';
import { SizeDetectorModule } from './components/size-detector/size-detector.module';
import { DesktopComponent } from './pages/desktop/desktop.component';
import { MobileComponent } from './pages/mobile/mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutMeComponent,
    ExperienceComponent,
    ContactComponent,
    DesktopComponent,
    MobileComponent,
  ],
  imports: [BrowserModule, AngularFullpageModule, SizeDetectorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

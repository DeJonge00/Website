import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BiribiriComponent } from './biribiri/biribiri.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RunningProjectsComponent } from './running-projects/running-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BiribiriComponent,
    HeaderComponent,
    FooterComponent,
    RunningProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

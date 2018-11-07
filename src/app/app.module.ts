import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomepageComponent} from './homepage/homepage.component';
import {BiribiriComponent} from './biribiri/biribiri.component';
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RunningProjectsComponent} from './running-projects/running-projects.component';
import {BiriCommandsComponent} from './biribiri/biri-commands/biri-commands.component';
import {MarkdownModule} from 'ngx-markdown';
import {HttpClientModule, HttpClient} from "@angular/common/http";
import { BiriHelpComponent } from './biribiri/biri-help/biri-help.component';
import { BiriRpgComponent } from './biribiri/biri-rpg/biri-rpg.component';
import { BiriPlayComponent } from './biribiri/biri-play/biri-play.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BiribiriComponent,
    HeaderComponent,
    FooterComponent,
    RunningProjectsComponent,
    BiriCommandsComponent,
    BiriHelpComponent,
    BiriRpgComponent,
    BiriPlayComponent
  ],
  imports: [
    HttpClientModule,
    MarkdownModule.forRoot({loader: HttpClient}),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

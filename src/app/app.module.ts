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
import { BiriPlayerinfoComponent } from './biribiri/biri-playerinfo/biri-playerinfo.component';
import { BiriServerlistComponent } from './biribiri/biri-serverlist/biri-serverlist.component';
import { BiriServerinfoComponent } from './biribiri/biri-serverinfo/biri-serverinfo.component';
import { DiscordLoginComponent } from './discord-login/discord-login.component';
import {CookieService} from 'ngx-cookie-service';
import { BiriConfigComponent } from './biribiri/biri-config/biri-config.component';
import { TestComponent } from './test/test.component';
import {ReactiveFormsModule} from '@angular/forms';
import { DiscordComponent } from './discord/discord.component';

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
    BiriPlayComponent,
    BiriPlayerinfoComponent,
    BiriServerlistComponent,
    BiriServerinfoComponent,
    DiscordLoginComponent,
    BiriConfigComponent,
    TestComponent,
    DiscordComponent
  ],
  imports: [
    HttpClientModule,
    MarkdownModule.forRoot({loader: HttpClient}),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

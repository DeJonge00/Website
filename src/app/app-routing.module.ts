import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {BiribiriComponent} from './biribiri/biribiri.component';
import {RunningProjectsComponent} from './running-projects/running-projects.component';
import {BiriHelpComponent} from './biribiri/biri-help/biri-help.component';
import {BiriCommandsComponent} from './biribiri/biri-commands/biri-commands.component';
import {BiriRpgComponent} from './biribiri/biri-rpg/biri-rpg.component';
import {BiriPlayComponent} from './biribiri/biri-play/biri-play.component';
import {BiriPlayerinfoComponent} from './biribiri/biri-playerinfo/biri-playerinfo.component';
import {BiriServerlistComponent} from './biribiri/biri-serverlist/biri-serverlist.component';
import {DiscordLoginComponent} from './discord-login/discord-login.component';
import {BiriConfigComponent} from './biribiri/biri-config/biri-config.component';
import {DiscordComponent} from './discord/discord.component';
import {DndComponent} from './rpg/dnd/dnd.component';

const routes = [
  {path: '', component: HomepageComponent},
  {path: 'biribiri', component: BiribiriComponent},
  {path: 'discord', component: DiscordComponent},
  {path: 'biribiri/help', component: BiriHelpComponent},
  {path: 'biribiri/rpg', component: BiriRpgComponent},
  {path: 'biribiri/rpg/players/:name', component: BiriPlayerinfoComponent},
  {path: 'biribiri/rpg/play', component: BiriPlayComponent},
  {path: 'biribiri/commands', component: BiriCommandsComponent},
  {path: 'biribiri/config', component: BiriConfigComponent},
  {path: 'biribiri/servers', component: BiriServerlistComponent},
  {path: 'running-projects', component: RunningProjectsComponent},
  {path: 'rpg/dnd', component: DndComponent},
  {path: 'discordlogin', component: DiscordLoginComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

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
import {DndClassComponent} from './rpg/dnd/class/dnd-class.component';
import {DndRaceComponent} from './rpg/dnd/race/dnd-race.component';
import {DndSourceComponent} from './rpg/dnd/source/dnd-source.component';
import {DndSubclassComponent} from './rpg/dnd/subclass/dnd-subclass.component';
import {DndSubraceComponent} from './rpg/dnd/subrace/dnd-subrace.component';
import {DndBackgroundComponent} from './rpg/dnd/background/dnd-background.component';

const routes = [
  {path: '', component: HomepageComponent},
  {path: 'discord', component: DiscordComponent},
  {path: 'discordlogin', component: DiscordLoginComponent},

  {path: 'biribiri', component: BiribiriComponent},
  {path: 'biribiri/help', component: BiriHelpComponent},
  {path: 'biribiri/rpg', component: BiriRpgComponent},
  {path: 'biribiri/rpg/players/:name', component: BiriPlayerinfoComponent},
  {path: 'biribiri/rpg/play', component: BiriPlayComponent},
  {path: 'biribiri/commands', component: BiriCommandsComponent},
  {path: 'biribiri/config', component: BiriConfigComponent},
  {path: 'biribiri/servers', component: BiriServerlistComponent},

  {path: 'running-projects', component: RunningProjectsComponent},
  {path: 'dnd', component: DndComponent},
  {path: 'dnd/source', component: DndSourceComponent},
  {path: 'dnd/source/:name', component: DndSourceComponent},
  {path: 'dnd/class', component: DndClassComponent},
  {path: 'dnd/class/:name', component: DndClassComponent},
  {path: 'dnd/subclass', component: DndSubclassComponent},
  {path: 'dnd/subclass/:name', component: DndSubclassComponent},
  {path: 'dnd/race', component: DndRaceComponent},
  {path: 'dnd/race/:name', component: DndRaceComponent},
  {path: 'dnd/subrace', component: DndSubraceComponent},
  {path: 'dnd/subrace/:name', component: DndSubraceComponent},
  {path: 'dnd/background', component: DndBackgroundComponent},
  {path: 'dnd/background/:name', component: DndBackgroundComponent},

  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

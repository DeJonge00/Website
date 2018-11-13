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

const routes = [
  {path: '', component: HomepageComponent},
  {path: 'biribiri', component: BiribiriComponent},
  {path: 'biribiri/help', component: BiriHelpComponent},
  {path: 'biribiri/rpg', component: BiriRpgComponent},
  {path: 'biribiri/rpg/players/:name', component: BiriPlayerinfoComponent},
  {path: 'biribiri/rpg/play', component: BiriPlayComponent},
  {path: 'biribiri/commands', component: BiriCommandsComponent},
  {path: 'running-projects', component: RunningProjectsComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

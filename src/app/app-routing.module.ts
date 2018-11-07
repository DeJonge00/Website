import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {HomepageComponent} from "./homepage/homepage.component";
import {BiribiriComponent} from "./biribiri/biribiri.component";
import {RunningProjectsComponent} from "./running-projects/running-projects.component";

const routes = [
  {path: '', component: HomepageComponent},
  {path: 'biribiri', component: BiribiriComponent},
  {path: 'running-projects', component: RunningProjectsComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

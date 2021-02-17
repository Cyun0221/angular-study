import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {S1PositionComponent} from './component/s1-position/s1-position.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 's1position', component: S1PositionComponent},
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

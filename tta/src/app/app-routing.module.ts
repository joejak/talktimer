import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { TimerComponent } from './components/timer/timer.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'timer',  component: TimerComponent },
  { path: 'empty', component: AddComponent },
  { path: '**',  component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

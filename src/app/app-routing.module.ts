import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'home', component: HomeComponent },
  { path: 'history', component: HistoryComponent },


  //TODO meter todos los links de file nav
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

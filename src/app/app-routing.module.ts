import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { WelcomepageComponent } from './pages/welcomepage/welcomepage.component';

const routes: Routes = [
  {path:'TMATable',component:DashboardComponent},
  {path:'NewTask', component:NewTaskComponent},
  {path:'', component:WelcomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

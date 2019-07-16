import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { FormsComponent } from './forms/forms.component';
import { PipeComponent } from './pipe/pipe.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"todo",
    component: TodoComponent
  },
  {
    path:"forms",
    component: FormsComponent
  },
  {
    path:"pipe",
    component: PipeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

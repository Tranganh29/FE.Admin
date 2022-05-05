import { HomeComponent } from './home/home.component';
import { RoleComponent } from './role/role.component';
import { BookComponent } from './book/book.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'book', component:BookComponent},
  { path: 'role', component:RoleComponent},
  {path: '', component:HomeComponent},
  { path: 'home', component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

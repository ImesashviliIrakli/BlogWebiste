import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth-guard';
import { AuthComponent } from './auth/auth.component';
import { AddBlogComponent } from './blog/add-blog/add-blog.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'auth', component: AuthComponent},
  {path:'blog', component:BlogComponent,
   canActivate:[AuthGuard]},
  {path:'blog/add', component:AddBlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [

  // {path:'' ,redirectTo:'/products' ,pathMatch:'full'},
  {path:'users' , component:UsersComponent},
  // {path:'posts' , component:PostsComponent},
  {path:'products' ,component:ProductsComponent}
  // {path:'**' , component:PageNotFoundComponent}






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

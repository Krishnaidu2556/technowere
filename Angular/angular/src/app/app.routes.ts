import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './Pages/admin/product/product.component';
import { LoginComponent } from './Pages/admin/login/login.component';
import { LayoutComponent } from './Pages/admin/layout/layout.component';

export const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
      path:'products',
      component:ProductComponent
      }
    ]
  }
  
];
  @NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
      })

      export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OderSuccessComponent } from './oder-success/oder-success.component';
import { OrdersComponent } from './orders/orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { ProductComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { ForgotusernameComponent } from './forgotusername/forgotusername.component';
import { NewuserComponent } from './newuser/newuser.component'
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShoppingCartComponent,
    ProductComponent,
    CheckOutComponent,
    OderSuccessComponent,
    OrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'Home', component:HomeComponent},
      { path: '', redirectTo: '/Home', pathMatch: 'full' },
      {path:'products', component:ProductComponent,canActivate: [AuthGuard] },
      {path:'shopping-cart', component:ShoppingCartComponent,canActivate: [AuthGuard] },
      {path:'checkout', component:CheckOutComponent,canActivate: [AuthGuard] },
      {path:'OderSuccess', component:OderSuccessComponent },
      {path:'login', component:LoginComponent },
      {path:'forgotusername', component:ForgotusernameComponent },
      {path:'newuser', component:NewuserComponent},
      {path:'admin/products', component:AdminProductsComponent },
      {path:'admin/orders', component:AdminOrdersComponent}
    ])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

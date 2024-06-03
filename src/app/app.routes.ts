import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProductsComponent } from './products/products.component';
import { CartsComponent } from './carts/carts.component';

export const routes: Routes = [
    // {path: '',component:HomeComponent,pathMatch:'full'},
    { path: '', pathMatch: 'full', component: HomeComponent },
    {path: 'sign-in', component:SignInComponent},
    {path: 'products', component:ProductsComponent},
    {path: 'carts', component:CartsComponent}
];

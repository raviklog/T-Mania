import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { ProductsComponent } from './app/products/products.component';
import { BlogsComponent } from './app/blogs/blogs.component';
import { CartsComponent } from './app/carts/carts.component';
import {routes} from  './app/app.routes'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule, provideRouter } from '@angular/router';

bootstrapApplication(AppComponent,{providers: [provideRouter(routes)]})
  .catch((err) => console.error(err));
  // platformBrowserDynamic().bootstrapModule(RouterModule.forRoot(routes))
  // .catch(err => console.error(err));
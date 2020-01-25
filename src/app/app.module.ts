import { CartService } from './cart/services/cart.service';
import { routes } from './routes';
import { SharedModule } from './shared/shared.module';
// import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminComponent } from './admin/admin.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UsersModule,
    BrowserAnimationsModule,
    ProductsModule,
    // CartModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ProductsServiceModule } from './services/products.service-module';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { CategoriesComponentModule } from './components/categories/categories.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';
import { CryptoComponentModule } from './components/crypto/crypto.component-module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ProductsServiceModule,
    ProductListComponentModule,
    CategoriesServiceModule,
    CategoriesComponentModule,
    CryptoServiceModule,
    CryptoComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

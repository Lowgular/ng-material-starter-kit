import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CryptoComponent } from './components/crypto/crypto.component';
import { PublicHolidaysComponent } from './components/public-holidays/public-holidays.component';
import { CheckboxCategoriesComponent } from './components/checkbox-categories/checkbox-categories.component';
import { CategoriesMenuComponent } from './components/categories-menu/categories-menu.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CategoriesComponentModule } from './components/categories/categories.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { CryptoComponentModule } from './components/crypto/crypto.component-module';
import { PublicHolidaysComponentModule } from './components/public-holidays/public-holidays.component-module';
import { PublicHolidaysServiceModule } from './services/public-holidays.service-module';
import { CheckboxCategoriesComponentModule } from './components/checkbox-categories/checkbox-categories.component-module';
import { CategoriesMenuComponentModule } from './components/categories-menu/categories-menu.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'crypto', component: CryptoComponent },
      { path: 'public-holidays', component: PublicHolidaysComponent },
      { path: 'checkbox-categories', component: CheckboxCategoriesComponent },
      { path: 'categories-menu', component: CategoriesMenuComponent }
    ]),
    ProductListComponentModule,
    ProductsServiceModule,
    CategoriesComponentModule,
    CategoriesServiceModule,
    CryptoComponentModule,
    PublicHolidaysComponentModule,
    PublicHolidaysServiceModule,
    CheckboxCategoriesComponentModule,
    CategoriesMenuComponentModule
  ],
  exports: [RouterModule],
})
// @ts-ignore
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CategoriesComponent } from './categories.component';
import { AsyncPipe, NgForOf } from '@angular/common';

@NgModule({
  imports: [MatCardModule, MatListModule, NgForOf, AsyncPipe, MatButtonToggleModule],
  declarations: [CategoriesComponent],
  providers: [],
  exports: [CategoriesComponent],
})
export class CategoriesComponentModule { }

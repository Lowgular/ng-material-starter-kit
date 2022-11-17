import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { PublicHolidaysComponent } from './public-holidays.component';

@NgModule({
  imports: [MatCardModule, MatFormFieldModule, MatSelectModule, MatOptionModule, CommonModule],
  declarations: [PublicHolidaysComponent],
  providers: [],
  exports: [PublicHolidaysComponent]
})
export class PublicHolidaysComponentModule {
}

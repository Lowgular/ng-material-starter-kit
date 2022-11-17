import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { CryptoComponent } from './crypto.component';

@NgModule({
  imports: [MatCardModule, MatChipsModule, CommonModule],
  declarations: [CryptoComponent],
  providers: [],
  exports: [CryptoComponent]
})
export class CryptoComponentModule {
}

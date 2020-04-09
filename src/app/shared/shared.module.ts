import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwapImageOnHoverDirective } from './swap-image-onHover.directive';
import { VeganBrandDirective } from './veganBrand.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SwapImageOnHoverDirective,
    VeganBrandDirective
  ],
  declarations: [
    SwapImageOnHoverDirective,
    VeganBrandDirective
  ]
})
export class SharedModule { }

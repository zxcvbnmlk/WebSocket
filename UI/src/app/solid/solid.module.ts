import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { SolidRoutingModule } from './solid-routing.module';
import { SolidComponent } from './solid.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

@NgModule({
  imports: [CommonModule, TranslateModule, FlexLayoutModule, MaterialModule, SolidRoutingModule, NgxSliderModule],
  declarations: [SolidComponent],
})
export class SolidModule {}

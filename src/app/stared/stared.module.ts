import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StaredlaptopsPageRoutingModule } from './stared-routing.module';

import { StaredlaptopsPage } from './stared.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StaredlaptopsPageRoutingModule
  ],
  declarations: [StaredlaptopsPage]
})
export class StaredlaptopsPageModule {}

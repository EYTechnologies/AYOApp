import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Onboarding1Page } from './onboarding1';

@NgModule({
  declarations: [
    Onboarding1Page,
  ],
  imports: [
    IonicPageModule.forChild(Onboarding1Page),
  ],
  exports: [
    Onboarding1Page
  ]
})
export class Onboarding1PageModule {}

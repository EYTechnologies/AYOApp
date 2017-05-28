import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Onboarding2Page } from './onboarding2';

@NgModule({
  declarations: [
    Onboarding2Page,
  ],
  imports: [
    IonicPageModule.forChild(Onboarding2Page),
  ],
  exports: [
    Onboarding2Page
  ]
})
export class Onboarding2PageModule {}

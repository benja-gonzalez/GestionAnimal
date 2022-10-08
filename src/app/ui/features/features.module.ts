import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// MODULES
import { MaterialModule } from '../../material.module';
import { CardComponent } from './card/card.component';
// COMPONENTS

@NgModule({
	declarations: [ 
    	CardComponent
  	],
	imports: [
		CommonModule,
    	MaterialModule
	],
	exports: [
		CardComponent
	]
})
export class FeaturesModule { }

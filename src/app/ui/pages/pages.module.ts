import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { InicioComponent } from './inicio/inicio.component';
import { PagesRoutingModule } from './pages-routing.module';
import { FeaturesModule } from '../features/features.module';
import { AnimalesComponent } from './animales/animales.component';

@NgModule({
	declarations: [ 
    	InicioComponent, AnimalesComponent
    ],
	imports: [
		CommonModule,
		MaterialModule,
		PagesRoutingModule,
		FeaturesModule
	],
	exports: [ ]
})
export class PagesModule { }

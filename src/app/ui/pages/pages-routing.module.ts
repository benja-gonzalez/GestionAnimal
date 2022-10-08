import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AnimalesComponent } from './animales/animales.component';

const routes: Routes = [
	{
		path: 'inicio',
		component: InicioComponent
	},
	{
		path: 'animales',
		component: AnimalesComponent
	}
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(routes)
	]
})
export class PagesRoutingModule { }


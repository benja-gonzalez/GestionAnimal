import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
	{
		path: 'home',
		loadChildren: () => import('./ui/pages/pages.module').then(m => m.PagesModule)
	},
	{
		path: 'error',
		loadChildren: () => import('./ui/shared/shared.module').then(m => m.SharedModule)
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: 'home'
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(ROUTES)
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }

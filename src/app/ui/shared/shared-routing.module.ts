import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServerErrorComponent } from './errors/server/server-error.component';
import { NotFoundErrorComponent } from './errors/not-found/not-found.component';
import { UnauthorizedErrorComponent } from './errors/unauthorized/unauthorized.component';

const routes: Routes = [
	{
		path: 'server-error',
		component: ServerErrorComponent
	},
	{
		path: 'not-found-error',
		component: NotFoundErrorComponent
	},
	{
		path: 'unauthorized',
		component: UnauthorizedErrorComponent
	}
];

@NgModule({
	declarations: [],
	imports: [
		RouterModule.forChild(routes)
	]
})
export class SharedRoutingModule { }

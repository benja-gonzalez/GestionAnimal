import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerErrorComponent } from './errors/server/server-error.component';
import { UnauthorizedErrorComponent } from './errors/unauthorized/unauthorized.component';
import { NotFoundErrorComponent } from './errors/not-found/not-found.component';
import { SimpleErrorComponent } from './errors/simple-error/simple-error.component';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
	declarations: [
		ServerErrorComponent,
		UnauthorizedErrorComponent,
		NotFoundErrorComponent,
		SimpleErrorComponent
	],
	imports: [
		CommonModule, 
		SharedRoutingModule
	],
	exports: [
		SimpleErrorComponent
	]
})
export class SharedModule { }

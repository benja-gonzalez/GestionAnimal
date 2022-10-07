import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// MODULES
import { MaterialModule } from '../../material.module';
// COMPONENTS
import { NavigationComponent } from '../features/navigation/navigation.component';

@NgModule({
	declarations: [
    	NavigationComponent
	],
	imports: [
		BrowserModule,
		MaterialModule
	],
	providers: []
})
export class FeaturesModule { }

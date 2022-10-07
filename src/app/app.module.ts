import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
// MATERIAL MODULE
import { MaterialModule } from './material.module';

// COMPONENTS
import { HomeComponent } from './ui/pages/home/home.component';
import { NavigationComponent } from './ui/features/navigation/navigation.component';

@NgModule({
	declarations: [
		AppComponent,
  		HomeComponent,
    	NavigationComponent
	],
	imports: [
		BrowserModule,
		MaterialModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

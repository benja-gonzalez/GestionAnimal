import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// MATERIAL MODULE
import { MaterialModule } from './material.module';

// MODULES
import { FeaturesModule } from './ui/features/features.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './ui/shared/shared.module';

// INTERCEPTORS
import { AuthInterceptor } from './infrastructure/interceptors/auth.interceptor';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		RouterModule,
		MaterialModule,
		BrowserAnimationsModule,
		FeaturesModule,
		SharedModule,
		HttpClientModule
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }

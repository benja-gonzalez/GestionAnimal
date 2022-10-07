import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  imports: [
    MatGridListModule,
	MatCardModule,
	MatMenuModule,
	MatIconModule,
	MatButtonModule,
	LayoutModule,
	MatToolbarModule,
	MatSidenavModule,
	MatListModule
  ],
  exports: [
    MatGridListModule,
	MatCardModule,
	MatMenuModule,
	MatIconModule,
	MatButtonModule,
	LayoutModule,
	MatToolbarModule,
	MatSidenavModule,
	MatListModule
  ]
})
export class MaterialModule { }

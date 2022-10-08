import { Component, Input, OnInit } from '@angular/core';
import { IConfigErrorData } from 'src/app/infrastructure/entities/config-error-data.interface';
import { IImage } from 'src/app/infrastructure/entities/image.interface';

@Component({
	selector: 'ga-simple-error',
	templateUrl: './simple-error.component.html',
	styleUrls: ['./simple-error.component.scss']
})
export class SimpleErrorComponent implements OnInit {

	@Input() displayed_error!: IConfigErrorData; 

	image: IImage = { src: 'assets/images/errors/simple-error.jpg', alt: 'Simple error image' };

	constructor() { }

	ngOnInit(): void { }

}

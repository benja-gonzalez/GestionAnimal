import { Component, OnInit } from '@angular/core';
import { IImage } from 'src/app/infrastructure/entities/image.interface';

@Component({
	selector: 'app-unauthorized-error',
	templateUrl: './unauthorized.component.html',
	styleUrls: ['./unauthorized.component.scss']
})
export class UnauthorizedErrorComponent implements OnInit {

	image: IImage = { src: 'assets/images/errors/unauthorized-error.jpg', alt: 'Unauthorized error image' }

	constructor() { }

	ngOnInit(): void {
	}

}

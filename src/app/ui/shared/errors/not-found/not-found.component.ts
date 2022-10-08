import { Component, OnInit } from '@angular/core';
import { IImage } from 'src/app/infrastructure/entities/image.interface';

@Component({
	selector: 'app-not-found-error',
	templateUrl: './not-found.component.html',
	styleUrls: ['./not-found.component.scss']
})
export class NotFoundErrorComponent implements OnInit {

	image: IImage = { src: 'assets/images/errors/not-found-error.jpg', alt: 'Not found error image' }

	constructor() { }

	ngOnInit(): void {
	}

}

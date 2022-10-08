import { Component, OnInit } from '@angular/core';
import { IImage } from 'src/app/infrastructure/entities/image.interface';

@Component({
	selector: 'app-server-error',
	templateUrl: './server-error.component.html',
	styleUrls: ['./server-error.component.scss']
})
export class ServerErrorComponent implements OnInit {

	image: IImage = { src: 'assets/images/errors/server-error.jpg', alt: 'Server error image' }

	constructor() { }

	ngOnInit(): void {
	}

}

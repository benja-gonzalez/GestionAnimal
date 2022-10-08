import { Component, OnInit } from '@angular/core';
import { IImage } from 'src/app/infrastructure/entities/image.interface';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.scss']
})
export class AnimalesComponent implements OnInit {

    lorem: string[] = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur veniam exercitationem nemo ex minus, fuga aut blanditiis excepturi voluptate commodi repudiandae, nam at inventore esse, voluptatum rerum. Culpa, voluptates! Nihil!']
	image: IImage = { src: 'https://material.angular.io/assets/img/examples/shiba2.jpg', alt: 'hachiko image' }

	constructor() { }
	
  	/**
	 * Default ngOnInit() angular hook
	 */
	ngOnInit(): void {
	}
}

import { Component, OnInit } from '@angular/core';
import { IImage } from 'src/app/infrastructure/entities/image.interface';
import { NavigationService } from 'src/app/infrastructure/services/navigation.service';

@Component({
	selector: 'app-inicio',
	templateUrl: './inicio.component.html',
	styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

	lorem: string[] = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur veniam exercitationem nemo ex minus, fuga aut blanditiis excepturi voluptate commodi repudiandae, nam at inventore esse, voluptatum rerum. Culpa, voluptates! Nihil!']
	image: IImage = { src: 'https://material.angular.io/assets/img/examples/shiba2.jpg', alt: 'hachiko image' }
	
	fadeOut: boolean = false;

	constructor(
		public navigationService: NavigationService
	) {
		this.navigationService.isNavigationStart$.subscribe(
			ev => {
				if (ev == true) this.fadeOut = true
				else this.fadeOut = false
			}
		)
	}

	ngOnInit(): void {
	}

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { IImage } from 'src/app/infrastructure/entities/image.interface';
import { NavigationService } from 'src/app/infrastructure/services/navigation.service';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.scss']
})
export class AnimalesComponent implements OnInit, OnDestroy {

	private _unsuscribeAll: Subscription[] = [];

    lorem: string[] = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur veniam exercitationem nemo ex minus, fuga aut blanditiis excepturi voluptate commodi repudiandae, nam at inventore esse, voluptatum rerum. Culpa, voluptates! Nihil!']
	image: IImage = { src: 'https://material.angular.io/assets/img/examples/shiba2.jpg', alt: 'hachiko image' }
	
	fadeOut: boolean = false;

  	constructor(
    	public navigationService: NavigationService
		) {
		// Suscriptions
		this._unsuscribeAll = [
			this.navigationService.isNavigationStart$.subscribe(
				ev => {
					if (ev == true) this.fadeOut = true
					else this.fadeOut = false
				}
			),
			...this._unsuscribeAll
		];
  	}
  	/**
	 * Default ngOnInit() angular hook
	 */
	ngOnInit(): void {
	}
	/**
	 * Default ngOnDestroy() angular hook
	 */
	ngOnDestroy(): void {
		this._unsuscribeAll.forEach(s => s.unsubscribe());
	}
}

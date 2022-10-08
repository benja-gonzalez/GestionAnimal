import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IImage } from 'src/app/infrastructure/entities/image.interface';

@Component({
	selector: 'ga-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
	// DEFAULT
	@Input() title   !: string;
	@Input() subtitle!: string;
	@Input() content !: string[];
	// ACTIONS BUTTONS
	@Input() actions   : boolean = false;
	@Input() actionText: string[] = ['SHARE', 'LIKE'];
	// IMAGE
	@Input() image!: IImage;
	@Input() size: 'sm' | 'md' | 'lg' = 'md';

	_contentBehaviour: BehaviorSubject<string[]> = new BehaviorSubject(['']);
	content$: Observable<string[]> = this._contentBehaviour.asObservable();

	constructor() {	}

	ngOnInit(): void {
		this._contentBehaviour.next(this.content || []);
	}

}

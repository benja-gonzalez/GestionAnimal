import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';
import { Observable, of, Subscription } from 'rxjs';
import { Link } from './infrastructure/entities/navigation.interface';
import { NavigationService } from './infrastructure/services/navigation.service';
import { debounceTime } from 'rxjs/operators';
import { getMockDataError } from './infrastructure/data/mock-errors';
import { EErrorTitle, IConfigErrorData, TStatusError } from './infrastructure/entities/config-error-data.interface';
import { LoadingService } from './infrastructure/services/loading.service';

@Component({
	selector     : 'app-root',
	templateUrl  : './app.component.html',
	styleUrls    : ['./app.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit, OnDestroy {

	@ViewChild('drawer') matDrawer!: MatDrawer;

	private _unsuscribeAll: Subscription[] = [];

	title: string = 'GestionAnimalApp';
	isLoading: boolean = false;
	itemsNav!: Observable<ReadonlyArray<Link>>;
	current  : string = '';
	showInput: boolean = false;
	newItem: Link = { link: '', view: '' };
	
	onGoOut: boolean = false;

	errors!: ReadonlyArray<IConfigErrorData>;
	display__error: boolean = false;

	constructor(
		public _navService: NavigationService,
		public loadingService: LoadingService
	) {
		this._unsuscribeAll = [
			this._navService.getNavigation().subscribe(),
			this.loadingService.isFinish$().subscribe(loading => {
				this.isLoading = loading
				if (loading === false) {
					this.matDrawer?.close();
				}
			}),
			...this._unsuscribeAll
		];
	}
	/**
	 * Default ngOnInit() angular hook
	 */
	ngOnInit(): void {
		this._unsuscribeAll = [
			this._navService.itemsNav$.subscribe(
				(items: ReadonlyArray<Link>) => {
					this.itemsNav = of(items);
				}
			),
			getMockDataError().subscribe(
				err => {
					if (err) {
						this.errors = err;
						this.display__error = this.errors.length > 0;
					}
				}
			),
			...this._unsuscribeAll
		];
	}
	/**
	 * Default ngOnDestroy() angular hook
	 */
	ngOnDestroy(): void {
		// Unsuscribe of suscriptions
		this._unsuscribeAll.forEach(s => s.unsubscribe());
	}
	/**
	 * Set current link navigation
	 * @param link string
	 */
	setCurrentLink = (link: string): void => {
		this.current = link;
	}
	/**
	 * Resturns a mock data errors
	 * @param status TStatusError
	 * @returns ReadonlyArray<IConfigErrorData>
	 */
	getError = (status: TStatusError) => this.errors.find(e => e.status == status) || this._errorDefault(status);
	
	/**
	 * Returns default error
	 * @returns IConfigErrorData[]
	 */
	private _errorDefault = (status: TStatusError) => {
		return {
			data: {
				title: EErrorTitle.ERROR,
				subtitle: 'subtitle-error',
				message: 'Se produjo un error al consultar los datos.'
			},
			status
		}
	}
	
}

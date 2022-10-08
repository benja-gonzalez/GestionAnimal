import { Injectable } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators'

import { Link } from '../entities/navigation.interface';
import { LoadingService } from './loading.service';
import { navItems } from '../data/mock-nav-items';

@Injectable({
	providedIn: 'root'
})
export class NavigationService {

    private _itemsNav: BehaviorSubject<ReadonlyArray<Link>> = new BehaviorSubject<ReadonlyArray<Link>>([]);
	navigationItems = navItems;

    constructor(
        private _router: Router,
        public loadingService: LoadingService
    ) {
        this._itemsNav = new BehaviorSubject(this.navigationItems);
        this._router.events.subscribe(
            ev => {
                if (ev instanceof NavigationStart) {
                    this.loadingService.setStateLoading(true);
                }
                if (ev instanceof NavigationEnd) {
                    this.loadingService.setStateLoading(false);
                }
            }
        );
	}

	get itemsNav$() { return this._itemsNav.asObservable(); }

    /**
     * Get navigation observable
     * @returns Observable<ReadonlyArray<Link>>
     */
    getNavigation = (): Observable<ReadonlyArray<Link>> => of(this.navigationItems)
        .pipe(
            debounceTime(200),
            tap( (item: ReadonlyArray<Link>) => this._itemsNav.next(item) )
        );  
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class LoadingService {

	private _loadingBehavior: BehaviorSubject<boolean> = new BehaviorSubject(false);
	private _isFinish: boolean = true;

	constructor() { 
		this._loadingBehavior.asObservable().subscribe(
			res => this._isFinish = res
		);
	}
	/**
	 * Getter state of loading
	 */
	get stateLoading() { return this._isFinish; }

	/**
	 * 	Set state of loading instance
	 * @param state boolean
	 * @returns void
	 */
	setStateLoading = (state: boolean): void => this._loadingBehavior.next(state);

	/**
	 * Return an OBservable of loading state
	 * @returns Obsevable<boolean>
	 */
	isFinish$ = (): Observable<boolean> => this._loadingBehavior.asObservable();
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { UserLogin } from '../entities/user.interface';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	private _token: string = '';
	private _tokenBehavior: BehaviorSubject<string> = new BehaviorSubject(this._token);

	constructor(
		private _http: HttpClient
	) { }

	get token$(): Observable<string> { return this._tokenBehavior.asObservable(); }

	/**
	 * User login
	 * @param payload UserLogin
	 * @returns Obserbavle<any>
	 */
	logIn = (payload: UserLogin): Observable<any> => {
		return of({})
	}

}

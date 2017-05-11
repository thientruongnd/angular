import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';


@Injectable()
export class GithubService {
	apiUrl: string 		=  'https://api.github.com/';
	clientID: string 	= '677514918f8cc850a4a5';
	clientSecret: string= '3ee5de2c96d189617045a192de1c6c3116ca0153';


	username: string;

	constructor(private _httpService: Http){
	}

	getUser(): Observable<any> {
		return this._httpService.get(this.apiUrl + 'users/' + this.username + '?client_id=' + this.clientID + '&client_secret=' + this.clientSecret)
								.map(this.extractData).catch(this.handleError);
	}

	getRepos(): Observable<any[]> {
		return this._httpService.get(this.apiUrl + 'users/' + this.username + '/repos?client_id=' + this.clientID + '&client_secret=' + this.clientSecret)
							.map(this.extractData).catch(this.handleError);
	}

	setUsername(value: string){
		this.username = value;
	}

	private extractData(res: Response) {
		let body = res.json();
		return body;
	}

	private handleError (error: Response | any) {
		let errMsg: string;
		if (error instanceof Response) {
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}

		console.error(errMsg);
		return Observable.throw(errMsg);
	}
}

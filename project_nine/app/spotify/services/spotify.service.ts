import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class SpotifyService {
	apiURL: string = 'https://api.spotify.com/';

	constructor(private _httpService: Http){
	}

	searchArtists(name: string): any{
		let url: string = this.apiURL + 'v1/search?q=' + name + '&type=artist';
		return this._httpService.get(url).map(this.extractData).catch(this.handleError);
	}

	getArtist(id: string): any{
		let url: string = this.apiURL + 'v1/artists/' + id;
		return this._httpService.get(url).map(this.extractData).catch(this.handleError);
	}

	getAlbums(artistId: string){
      	let url: string = this.apiURL + 'v1/artists/' + artistId + '/albums?offset=0&limit=5';
		return this._httpService.get(url).map(this.extractData).catch(this.handleError);
    }

    getAlbum(id: string){
      	let url: string = this.apiURL + 'v1/albums/' + id;
		return this._httpService.get(url).map(this.extractData).catch(this.handleError);
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

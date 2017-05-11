import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Component
import { SearchComponent } from "./components/search.component";
import { ArtistComponent } from "./components/artist.component";
import { AlbumComponent } from "./components/album.component";

// Service
import { SpotifyService } from './services/spotify.service';

// Routing
import { SpotifyRoutingModule } from './spotify-routing.module';

// SharedModule
import { SharedModule } from './../shared/shared.module';

@NgModule({
	imports: [
		SharedModule,
		FormsModule,
		SpotifyRoutingModule
	],
	declarations: [ 
		SearchComponent,
		ArtistComponent,
		AlbumComponent
	],
	providers: 	[
		SpotifyService
	]
})

export class SpotifyModule { }



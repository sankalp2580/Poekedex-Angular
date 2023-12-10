import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokeServiceService } from './services/poke-service.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, PokemonListComponent]
})
export class AppComponent {
  title = 'Pokemon';
}

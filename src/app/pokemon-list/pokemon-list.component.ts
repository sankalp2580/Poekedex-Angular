import { Component, OnInit } from '@angular/core';
import { PokeServiceService } from '../services/poke-service.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, RouterModule, NgxPaginationModule, FormsModule],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  page = 1;
  totalPokemons!: number;
  searchTerm: string = '';

  constructor(private pokeService: PokeServiceService) {}

  ngOnInit() {
    this.getFinalResult();
  }

  getFinalResult() {
    this.pokeService.getPokemons(12, this.page + 0).subscribe((res: any) => {
      this.totalPokemons = res.count;
      res.results.forEach((result: any) => {
        this.pokeService.getPoekmonData(result.name).subscribe((data: any) => {
          this.pokemons.push(data);
        });
      });
    });
  }

  search() {
    if (this.searchTerm.trim() !== '') {
      // Clear existing data before searching
      this.pokemons = [];
      this.page = 1;

      this.pokeService.getPoekmonData(this.searchTerm).subscribe((data: any) => {
        this.pokemons.push(data);
        this.totalPokemons = 1; // Update totalPokemons since we have only one result
      });
    } else {
      // If the search term is empty, reload the initial data
      this.pokemons = [];
      this.getFinalResult();
    }
  }
}

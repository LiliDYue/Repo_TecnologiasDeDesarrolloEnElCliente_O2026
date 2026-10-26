
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Movie } from '../../models/movie';
import { Highlight } from '../../directives/highlight';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule, RouterLink, Highlight],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.scss',
})
export class MovieCard {
  @Input({ required: true }) movie!: Movie;
  @Input() showRemoveButton = false;

  @Output() removeFavorite = new EventEmitter<number>();

  onRemoveFavorite(): void {
    this.removeFavorite.emit(this.movie.id);
  }
}

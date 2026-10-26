
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favorites: Movie[] = [];

  getFavorites(): Movie[] {
    return this.favorites;
  }

  isFavorite(movieId: number): boolean {
    return this.favorites.some(movie => movie.id === movieId);
  }

  addFavorite(movie: Movie): void {
    if (!this.isFavorite(movie.id)) {
      this.favorites.push(movie);
    }
  }

  removeFavorite(movieId: number): void {
    this.favorites = this.favorites.filter(
      movie => movie.id !== movieId
    );
  }

  toggleFavorite(movie: Movie): void {
    if (this.isFavorite(movie.id)) {
      this.removeFavorite(movie.id);
    } else {
      this.addFavorite(movie);
    }
  }
}


import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FavoritesService } from '../../shared/services/favorites';
import { Movie } from '../../shared/models/movie';
import { MovieCard } from '../../shared/components/movie-card/movie-card';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, RouterLink, MovieCard],
  templateUrl: './favorites.html',
  styleUrl: './favorites.scss',
})
export class Favorites implements OnInit {
  favorites: Movie[] = [];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(): void {
    this.favorites = [...this.favoritesService.getFavorites()];
  }

  removeFavorite(movieId: number): void {
    this.favoritesService.removeFavorite(movieId);
    this.loadFavorites();
  }
}

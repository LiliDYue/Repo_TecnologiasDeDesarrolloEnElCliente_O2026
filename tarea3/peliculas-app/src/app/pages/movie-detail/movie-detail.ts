
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Movies } from '../../shared/services/movies';
import { FavoritesService } from '../../shared/services/favorites';
import { Movie } from '../../shared/models/movie';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.scss',
})
export class MovieDetail implements OnInit {
  movie?: Movie;

  constructor(
    private route: ActivatedRoute,
    private moviesService: Movies,
    public favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movie = this.moviesService.getMovieById(id);
  }

  toggleFavorite(): void {
    if (this.movie) {
      this.favoritesService.toggleFavorite(this.movie);
    }
  }
}


import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Movies } from '../../shared/services/movies';
import { Movie } from '../../shared/models/movie';
import { MovieCard } from '../../shared/components/movie-card/movie-card';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, MovieCard],
  templateUrl: './movies.html',
  styleUrl: './movies.scss'
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];

  titleFilter = '';
  directorFilter = '';
  producerFilter = '';
  genreFilter = '';
  yearFilter: number | null = null;

  constructor(private moviesService: Movies) {}

  ngOnInit(): void {
    this.movies = this.moviesService.getMovies();
    this.filteredMovies = [...this.movies];
  }

  filterMovies(): void {
    this.filteredMovies = this.movies.filter(movie => {
      const titleMatch = movie.title
        .toLowerCase()
        .includes(this.titleFilter.toLowerCase());

      const directorMatch = movie.director
        .toLowerCase()
        .includes(this.directorFilter.toLowerCase());

      const producerMatch = movie.producer
        .toLowerCase()
        .includes(this.producerFilter.toLowerCase());

      const genreMatch = movie.genre
        .toLowerCase()
        .includes(this.genreFilter.toLowerCase());

      const yearMatch =
        this.yearFilter === null ||
        this.yearFilter === undefined ||
        String(this.yearFilter).trim() === '' ||
        movie.year === Number(this.yearFilter);


      return titleMatch && directorMatch && producerMatch &&
             genreMatch && yearMatch;
    });
  }

  clearFilters(): void {
    this.titleFilter = '';
    this.directorFilter = '';
    this.producerFilter = '';
    this.genreFilter = '';
    this.yearFilter = null;
    this.filterMovies();
  }
}

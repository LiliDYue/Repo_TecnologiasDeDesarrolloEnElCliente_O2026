
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class Movies {
  private movies: Movie[] = [
    {
      id: 1,
      title: 'The Matrix',
      director: 'Lana y Lilly Wachowski',
      producer: 'Joel Silver',
      genre: 'Ciencia ficción',
      year: 1999,
      description: 'Un programador descubre que la realidad que conoce no es lo que parece.',
      imageUrl: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg'
    },
    {
      id: 2,
      title: 'Titanic',
      director: 'James Cameron',
      producer: 'James Cameron y Jon Landau',
      genre: 'Drama',
      year: 1997,
      description: 'Una historia de amor que ocurre durante el viaje del Titanic.',
      imageUrl: 'https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg'
    },
    {
      id: 3,
      title: 'Jurassic Park',
      director: 'Steven Spielberg',
      producer: 'Kathleen Kennedy y Gerald R. Molen',
      genre: 'Ciencia ficción',
      year: 1993,
      description: 'Un parque temático con dinosaurios clonados pierde el control de sus instalaciones.',
      imageUrl: 'https://image.tmdb.org/t/p/w500/b1xCNnyrPebIc7EWNZIa6jhb1Ww.jpg'
    },
    {
      id: 4,
      title: 'Toy Story',
      director: 'John Lasseter',
      producer: 'Ralph Guggenheim y Bonnie Arnold',
      genre: 'Animación',
      year: 1995,
      description: 'Los juguetes de un niño cobran vida cuando los humanos no están presentes.',
      imageUrl: 'https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg'
    },
    {
      id: 5,
      title: 'The Lion King',
      director: 'Roger Allers y Rob Minkoff',
      producer: 'Don Hahn',
      genre: 'Animación',
      year: 1994,
      description: 'Un joven león debe afrontar su destino para convertirse en rey.',
      imageUrl: 'https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg'
    },
    {
      id: 6,
      title: 'Forrest Gump',
      director: 'Robert Zemeckis',
      producer: 'Wendy Finerman',
      genre: 'Drama',
      year: 1994,
      description: 'La vida de un hombre que termina siendo testigo de importantes acontecimientos históricos.',
      imageUrl: 'https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg'
    },
    {
      id: 7,
      title: 'Pulp Fiction',
      director: 'Quentin Tarantino',
      producer: 'Lawrence Bender',
      genre: 'Crimen',
      year: 1994,
      description: 'Varias historias de criminales se entrelazan en Los Ángeles.',
      imageUrl: 'https://image.tmdb.org/t/p/w500/vQWk5YBFWF4bZaofAbv0tShwBvQ.jpg'
    },
    {
      id: 8,
      title: 'Fight Club',
      director: 'David Fincher',
      producer: 'Art Linson, Ceán Chaffin y Ross Grayson Bell',
      genre: 'Drama',
      year: 1999,
      description: 'Un hombre inconforme con su vida conoce a una persona que cambia completamente su forma de vivir.',
      imageUrl: 'https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg'
    },
    {
      id: 9,
      title: 'The Shawshank Redemption',
      director: 'Frank Darabont',
      producer: 'Niki Marvin',
      genre: 'Drama',
      year: 1994,
      description: 'Un hombre condenado a prisión mantiene la esperanza mientras busca cambiar su destino.',
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_.jpg'
    },
    {
      id: 10,
      title: 'Men in Black',
      director: 'Barry Sonnenfeld',
      producer: 'Walter F. Parkes y Laurie MacDonald',
      genre: 'Ciencia ficción',
      year: 1997,
      description: 'Una organización secreta controla la actividad extraterrestre en la Tierra.',
      imageUrl: 'https://image.tmdb.org/t/p/w500/uLOmOF5IzWoyrgIF5MfUnh5pa1X.jpg'
    }
  ];

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovieById(id: number): Movie | undefined {
    return this.movies.find(movie => movie.id === id);
  }
}

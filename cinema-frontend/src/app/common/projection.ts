import { Room } from './room';
import { Movie } from './movie';
import { Session } from './session';

export class Projection {
    id: number;
    dateProjection: string;
    price: number;
    room: Room;
    movie: Movie;
    session: Session;
  }

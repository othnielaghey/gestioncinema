package com.othnielaghey.cinemaapi.service;


import com.othnielaghey.cinemaapi.dao.*;
import com.othnielaghey.cinemaapi.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;
import java.util.Random;

@Service
@Transactional
public class CinemaInitServiceImpl  implements ICinemaInitService {
    @Autowired
    private CinemaRepository cinemaRepository;

    @Autowired
    private CityRepository cityRepository;

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private ProjectionRepository projectionRepository;

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private SeatRepository seatRepository;

    @Autowired
    private SessionRepository sessionRepository;

    @Autowired
    private TicketRepository ticketRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ReviewRepository reviewRepository;

    @Override
    public void initUsers() {

    }

    @Override
    public void initCities() {

    }

    @Override
    public void initCinemas() {

    }

    @Override
    public void initRooms() {

    }

    @Override
    public void initSeats() {
//        roomRepository.findAll().forEach(room -> {
//                    for (int i = 0; i < room.getCountSeats(); i++) {
//                        Seat seat = new Seat(i + 1, room);
//                        seatRepository.save(seat);
//                    }
//                });
    }

    @Override
    public void initSessions() {

    }

    @Override
    public void initCategories() {
    }

    @Override
    public void initMovies() {

    }

    @Override
    public void initReviews() {

    }

    @Override
    public void initProjections() {
//        List<Movie> movies = movieRepository.findAll();
//        cityRepository.findAll().forEach(city -> {
//            city.getCinemas().forEach(cinema -> {
//                cinema.getRooms().forEach(room -> {
//                    int index = new Random().nextInt(movies.size());
//                    Movie movie = movies.get(index);
//                        sessionRepository.findAll().forEach(session -> {
//                            ProjectionMovie projectionMovie =
//                                    new ProjectionMovie(new  (), 40, room, movie, session);
//                            // save projection movie
//                            projectionRepository.save(projectionMovie);
//                        });

//                });
//            });
//        });
    }

    @Override
    public void initTickets() {
//        projectionRepository.findAll().forEach(projectionMovie -> {
//            projectionMovie.getRoom().getSeats().forEach(seat -> {
//                Ticket ticket =
//                        new Ticket("", projectionMovie.getPrice(), false, seat, projectionMovie);
//                ticketRepository.save(ticket);
//            });
//        });
    }

}

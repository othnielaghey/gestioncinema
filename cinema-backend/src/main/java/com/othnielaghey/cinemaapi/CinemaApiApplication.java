package com.othnielaghey.cinemaapi;
import com.othnielaghey.cinemaapi.entity.*;
import com.othnielaghey.cinemaapi.service.ICinemaInitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;


@SpringBootApplication
public class CinemaApiApplication implements CommandLineRunner {

	@Autowired
	ICinemaInitService iCinemaInitService;

   	@Autowired
	RepositoryRestConfiguration restConfiguration;

   	public static void main(String[] args) {
		SpringApplication.run(CinemaApiApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		restConfiguration.exposeIdsFor(Session.class);
        restConfiguration.exposeIdsFor(Movie.class);
        restConfiguration.exposeIdsFor(Room.class);
        restConfiguration.exposeIdsFor(Ticket.class);
        restConfiguration.exposeIdsFor(Review.class);
        restConfiguration.exposeIdsFor(City.class);
        restConfiguration.exposeIdsFor(Cinema.class);

//        iCinemaInitService.initUsers();
        iCinemaInitService.initCities();
		iCinemaInitService.initCinemas();
		iCinemaInitService.initRooms();
		iCinemaInitService.initSeats();
		iCinemaInitService.initSessions();
//		iCinemaInitService.initCategories();
		iCinemaInitService.initMovies();
		iCinemaInitService.initReviews();
		iCinemaInitService.initProjections();
//		iCinemaInitService.initTickets();
	}
}

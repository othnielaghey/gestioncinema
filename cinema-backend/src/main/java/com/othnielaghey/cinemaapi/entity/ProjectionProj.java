package com.othnielaghey.cinemaapi.entity;

import org.springframework.data.rest.core.config.Projection;

import java.util.Collection;

@Projection(name = "p1", types = ProjectionMovie.class)
public interface ProjectionProj {

    Long getId();
    double getPrice();
    String getDateProjection();
    Room getRoom();
    Movie getMovie();
    Session getSession();
    Collection<Ticket> getTickets();

}

package com.othnielaghey.cinemaapi.dao;

import com.othnielaghey.cinemaapi.entity.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("*")
public interface TicketRepository extends JpaRepository<Ticket, Long> {
}

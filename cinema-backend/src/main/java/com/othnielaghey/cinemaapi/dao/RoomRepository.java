package com.othnielaghey.cinemaapi.dao;

import com.othnielaghey.cinemaapi.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin("*")
public interface RoomRepository extends JpaRepository<Room, Long> {

        List<Room> findByCinemaId(Long id);
        int countByCinemaId(Long cinemaId);

}

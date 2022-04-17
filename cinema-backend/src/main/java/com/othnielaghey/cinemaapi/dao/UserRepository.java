package com.othnielaghey.cinemaapi.dao;


import com.othnielaghey.cinemaapi.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("*")
public interface UserRepository extends JpaRepository<User, Long> {
}

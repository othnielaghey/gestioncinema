package com.othnielaghey.cinemaapi.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
public class Session implements Serializable {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 50)
    private String hourStart;

    // constructors
    public Session() {
    }

    public Session(String hourStart) {
        this.hourStart = hourStart;
    }

    //getters & setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getHourStart() {
        return hourStart;
    }

    public void setHourStart(String hourStart) {
        this.hourStart = hourStart;
    }
}

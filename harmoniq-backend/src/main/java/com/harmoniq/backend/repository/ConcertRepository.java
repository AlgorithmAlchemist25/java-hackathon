package com.harmoniq.backend.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.harmoniq.backend.model.Concert;
import com.harmoniq.backend.model.User;

public interface ConcertRepository extends JpaRepository<Concert, Long> {
    List<Concert> findByOrganizer(User organizer);
}
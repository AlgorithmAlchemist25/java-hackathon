package com.harmoniq.backend.repository;

import com.harmoniq.backend.model.RSVP;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RSVPRepository extends JpaRepository<RSVP, Long> {
}

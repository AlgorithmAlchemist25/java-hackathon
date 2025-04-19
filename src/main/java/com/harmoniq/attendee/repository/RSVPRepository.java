package com.harmoniq.attendee.repository;

import com.harmoniq.attendee.model.RSVP;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RSVPRepository extends JpaRepository<RSVP, Long> {
}

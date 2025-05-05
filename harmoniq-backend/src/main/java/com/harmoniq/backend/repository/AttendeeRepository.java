package com.harmoniq.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.harmoniq.backend.model.Attendee ;

public interface AttendeeRepository extends JpaRepository<Attendee, Long> {
}

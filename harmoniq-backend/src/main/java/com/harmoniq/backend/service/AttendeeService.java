package com.harmoniq.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

// import com.harmoniq_backend.repository ;
import com.harmoniq.backend.model.Attendee;
import com.harmoniq.backend.repository.AttendeeRepository;

import java.util.List;

@Service
public class AttendeeService {

    @Autowired
    private AttendeeRepository attendeeRepository;

    public List<Attendee> getAllConcerts() {
        return attendeeRepository.findAll();
    }

    public Attendee getConcertById(Long id) {
        return attendeeRepository.findById(id).orElse(null);
    }
}

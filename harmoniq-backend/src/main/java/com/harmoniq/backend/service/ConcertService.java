package com.harmoniq.backend.service;

import com.harmoniq.backend.model.Concert;
import com.harmoniq.backend.model.Role;
import com.harmoniq.backend.model.User;
import com.harmoniq.backend.repository.ConcertRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ConcertService {

    @Autowired
    private ConcertRepository concertRepository;

    public Concert createConcert(Concert concert) {
        return concertRepository.save(concert);
    }

    public List<Concert> getConcertsByOrganizer(User organizer) {
        return concertRepository.findByOrganizer(organizer);
    }

    public List<Concert> getAllConcerts() {
        return concertRepository.findAll();
    }

    // ✅ New method to get only concerts created by ORGANIZERs
    public List<Concert> getAllConcertsCreatedByOrganizers() {
        List<Concert> allConcerts = concertRepository.findAll();
        return allConcerts.stream()
                .filter(c -> c.getOrganizer() != null && c.getOrganizer().getRole() == Role.ORGANIZER)
                .collect(Collectors.toList());
    }
}

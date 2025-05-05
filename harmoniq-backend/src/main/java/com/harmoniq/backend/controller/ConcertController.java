package com.harmoniq.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.harmoniq.backend.model.Concert;
import com.harmoniq.backend.model.Role;
import com.harmoniq.backend.model.User;
import com.harmoniq.backend.repository.UserRepository;
import com.harmoniq.backend.service.ConcertService;

@RestController
@RequestMapping("/concerts")
@CrossOrigin(origins = "http://localhost:3000")
public class ConcertController {

    @Autowired
    private ConcertService concertService;

    @Autowired
    private UserRepository userRepository;

    // POST method to create a new concert (refined to use @RequestBody only)
    @PostMapping("/create")
public ResponseEntity<?> createConcert(@RequestBody Concert concert) {
    Long organizerId = concert.getOrganizer() != null ? concert.getOrganizer().getId() : null;

    if (organizerId == null) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Organizer ID is missing.");
    }

    Optional<User> userOptional = userRepository.findById(organizerId);
    if (userOptional.isEmpty()) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found.");
    }

    User user = userOptional.get();

    if (user.getRole() != Role.ORGANIZER) {
        return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Only organizers can create concerts.");
    }

    concert.setOrganizer(user);
    Concert savedConcert = concertService.createConcert(concert);
    return ResponseEntity.ok(savedConcert);
}


    // GET method to retrieve concerts by the organizer
    @GetMapping("/by-organizer/{id}")
    public ResponseEntity<List<Concert>> getConcertsByOrganizer(@PathVariable Long id) {
        User organizer = new User();
        organizer.setId(id);
        List<Concert> concerts = concertService.getConcertsByOrganizer(organizer);
        return ResponseEntity.ok(concerts);
    }
    // GET method to retrieve all concerts (for Attendee Dashboard)
// GET all concerts created by organizers (used in Attendee Dashboard)
@GetMapping("/all")
public ResponseEntity<List<Concert>> getAllConcertsByOrganizers() {
    List<Concert> concerts = concertService.getAllConcertsCreatedByOrganizers();
    return ResponseEntity.ok(concerts);
}


}

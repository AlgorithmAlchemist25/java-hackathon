package com.harmoniq.harmoniq.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.harmoniq.harmoniq.model.Concert;
import com.harmoniq.harmoniq.model.Role;
import com.harmoniq.harmoniq.model.User;
import com.harmoniq.harmoniq.repository.UserRepository;
import com.harmoniq.harmoniq.service.ConcertService;

@RestController
@RequestMapping("/concerts")
@CrossOrigin(origins = "http://localhost:3000")
public class ConcertController {

    @Autowired
    private ConcertService concertService;

    @Autowired
    private UserRepository userRepository;

    // POST method to create a new concert
    @PostMapping("/create")
    public ResponseEntity<?> createConcert(@RequestParam Long organizer_id, @RequestBody Concert concert) {
        // Check if the organizer exists
        Optional<User> userOptional = userRepository.findById(organizer_id);
        if (userOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found.");
        }

        User user = userOptional.get();

        // Check if the user is an organizer
        if (user.getRole() != Role.ORGANIZER) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Only organizers can create concerts.");
        }

        // Set the organizer for the concert
        concert.setOrganizer(user);

        // Save the concert
        Concert savedConcert = concertService.createConcert(concert);

        // Return the created concert with HTTP status 200 OK
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
}

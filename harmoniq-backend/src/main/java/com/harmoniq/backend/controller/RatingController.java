package com.harmoniq.backend.controller;

import com.harmoniq.backend.model.Rating;
import com.harmoniq.backend.service.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/ratings")
public class RatingController {

    @Autowired
    private RatingService ratingService;

    // Endpoint to submit a new rating
    @PostMapping
    public Rating submitRating(@RequestBody Rating rating) {
        return ratingService.saveRating(rating);
    }
}
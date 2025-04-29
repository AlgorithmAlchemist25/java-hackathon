package com.harmoniq.review.controller;

import com.harmoniq.review.model.Rating;
import com.harmoniq.review.Service.RatingService;
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

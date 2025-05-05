package com.harmoniq.backend.service;

import com.harmoniq.backend.model.Rating;
import com.harmoniq.backend.repository.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RatingService {

    @Autowired
    private RatingRepository ratingRepository;

    // Save a new rating
    public Rating saveRating(Rating rating) {
        return ratingRepository.save(rating);
    }

    // Calculate the average rating
    public double calculateAverageRating() {
        List<Rating> ratings = ratingRepository.findAll();
        if (ratings.isEmpty()) {
            return 0.0;
        }

        double totalRating = 0;
        for (Rating rating : ratings) {
            totalRating += rating.getRating();
        }

        return totalRating / ratings.size();
    }
}
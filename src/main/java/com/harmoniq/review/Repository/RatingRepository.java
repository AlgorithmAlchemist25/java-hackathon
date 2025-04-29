package com.harmoniq.review.Repository;

import com.harmoniq.review.model.Rating;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RatingRepository extends JpaRepository<Rating, Long> {
}

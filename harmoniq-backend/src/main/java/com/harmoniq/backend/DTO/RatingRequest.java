package com.harmoniq.backend.DTO;

public class RatingRequest {

    private Long userId;      // User ID from frontend
    private int score;        // Rating score (1-5)
    private String comment;   // Optional comment

    // Getters and Setters
    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}

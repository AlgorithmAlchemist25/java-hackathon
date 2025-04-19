package com.harmoniq.attendee.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
public class RSVP {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String attenderName;
    private String attenderEmail;
    private Long concertId;
    private LocalDateTime rsvpTime;

    @Column(columnDefinition = "TEXT")
    private String qrCodeData; // base64 encoded
}

package com.harmoniq.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;

import java.time.LocalDateTime;

@Entity
public class RSVP {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "attender_name")
    private String attenderName;

    @Column(name = "attender_email")
    private String attenderEmail;

    @Column(name = "concert_id")
    private Long concertId;

    @Column(name = "rsvp_time")
    private LocalDateTime rsvpTime;

    @Column(name = "qr_code_data", length = 1000)
    private String qrCodeData;

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAttenderName() {
        return attenderName;
    }

    public void setAttenderName(String attenderName) {
        this.attenderName = attenderName;
    }

    public String getAttenderEmail() {
        return attenderEmail;
    }

    public void setAttenderEmail(String attenderEmail) {
        this.attenderEmail = attenderEmail;
    }

    public Long getConcertId() {
        return concertId;
    }

    public void setConcertId(Long concertId) {
        this.concertId = concertId;
    }

    public LocalDateTime getRsvpTime() {
        return rsvpTime;
    }

    public void setRsvpTime(LocalDateTime rsvpTime) {
        this.rsvpTime = rsvpTime;
    }

    public String getQrCodeData() {
        return qrCodeData;
    }

    public void setQrCodeData(String qrCodeData) {
        this.qrCodeData = qrCodeData;
    }
}
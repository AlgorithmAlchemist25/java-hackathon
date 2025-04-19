package com.harmoniq.attendee.controller;

import com.harmoniq.attendee.model.RSVP;
import com.harmoniq.attendee.service.RSVPService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.google.zxing.WriterException;

import java.io.IOException;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class RSVPController {

    @Autowired
    private RSVPService service;

    @PostMapping("/rsvp")
    public RSVP createRSVP(@RequestBody RSVP rsvp) {
        try {
            return service.createRSVP(
                rsvp.getAttenderName(),
                rsvp.getAttenderEmail(),
                rsvp.getConcertId()
            );
        } catch (WriterException | IOException e) {
            throw new RuntimeException("QR Code generation failed: " + e.getMessage());
        }
    }
}

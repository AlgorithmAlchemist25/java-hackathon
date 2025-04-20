package com.harmoniq_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.harmoniq_backend.service.ConcertService;
import com.harmoniq_backend.model.Concert;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000") // ✅ Allow React frontend
public class ConcertController {

    @Autowired
    private ConcertService concertService;

    @GetMapping("/api/concerts")
    public List<Concert> getAllConcerts() {
        return concertService.getAllConcerts();
    }

    @GetMapping("/api/concert/{id}")
    public Concert getConcertById(@PathVariable Long id) {
        return concertService.getConcertById(id);
    }
}

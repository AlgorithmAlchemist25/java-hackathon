package com.harmoniq_backend.service ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

// import com.harmoniq_backend.repository ;
import com.harmoniq_backend.model.Concert;
import com.harmoniq_backend.repository.ConcertRepository;

import java.util.List;

@Service
public class ConcertService {

    @Autowired
    private ConcertRepository concertRepository;

    public List<Concert> getAllConcerts() {
        return concertRepository.findAll();
    }

    public Concert getConcertById(Long id) {
        return concertRepository.findById(id).orElse(null);
    }
}

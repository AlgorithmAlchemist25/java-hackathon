package com.harmoniq_backend.repository ;
import org.springframework.data.jpa.repository.JpaRepository;

import com.harmoniq_backend.model.Concert ;

public interface ConcertRepository extends JpaRepository<Concert, Long> {
}

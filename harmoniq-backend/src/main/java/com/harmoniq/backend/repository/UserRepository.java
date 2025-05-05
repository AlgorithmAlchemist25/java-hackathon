package com.harmoniq.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.harmoniq.backend.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    @SuppressWarnings("null")
    Optional<User> findById(Long id);

    Optional<User> findByEmail(String email);

}

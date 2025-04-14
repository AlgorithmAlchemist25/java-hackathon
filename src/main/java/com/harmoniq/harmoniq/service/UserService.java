package com.harmoniq.harmoniq.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.harmoniq.harmoniq.model.User;
import com.harmoniq.harmoniq.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Method to create and save a new user
    public User createUser(User user) {
        return userRepository.save(user);
    }
}
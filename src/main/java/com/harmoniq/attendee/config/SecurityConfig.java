package com.harmoniq.attendee.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @SuppressWarnings({ "deprecation", "removal" })
    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            // Disable CSRF protection for development (enable it for production or use JWT)
            .csrf(csrf -> csrf.disable())
            .authorizeRequests(auth -> auth
                .requestMatchers("/api/rsvp").permitAll() // Allow public access to RSVP endpoint
                .anyRequest().authenticated() // Ensure other requests require authentication
            );

        return http.build();
    }
}

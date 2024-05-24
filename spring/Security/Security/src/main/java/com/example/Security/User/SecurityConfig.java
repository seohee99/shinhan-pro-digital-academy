package com.example.Security.User;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity // security 설정
public class SecurityConfig {

    // filter을 여기에 걸겠다
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        // 적혀있는 url은 모두 permit한다
        httpSecurity.authorizeHttpRequests()
                .antMatchers("/join", "/login")
                .permitAll()
                .anyRequest()
                .authenticated() // 인증은 되어야 함
                .and()
                .csrf().disable();
        return httpSecurity.build();
    }
}

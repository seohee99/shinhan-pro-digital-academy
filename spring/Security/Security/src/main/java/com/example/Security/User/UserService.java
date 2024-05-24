package com.example.Security.User;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Slf4j
@AllArgsConstructor
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Transactional
    public User join(UserDTO userDTO) {

        User user = userDTO.convertToEntity();
        userRepository.save(user);

        return userRepository.findById(user.getId()).orElseThrow(() -> new RuntimeException("회원가입 실패"));
    }

    @Transactional
    public User login(UserDTO userDTO) {
        User user = userDTO.convertToEntity();
        Optional<User> loginUser =  userRepository.findById(user.getId());
        if (loginUser.isPresent()) {
            if( loginUser.get().getPw().equals(user.getPw()))
                return loginUser.get();
            else {
                throw new IllegalArgumentException("Invalid PW");
            }
        } else {
            throw new IllegalArgumentException("Invalid ID");
        }
    }
    // security가 지금 들어온 객체에게 로그인(허가) 해줄지 정하는 메소드
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByEmail(username);
    }
}

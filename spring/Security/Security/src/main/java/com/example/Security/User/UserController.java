package com.example.Security.User;

import com.example.Security.utill.ApiUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

import static com.example.Security.utill.ApiUtils.success;

@RestController
@Slf4j
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/join")
    public ApiUtils.ApiResult<Long> join(@Valid @RequestBody UserDTO userDTO){
        User savedUser = userService.join(userDTO);
        log.info("userDTO = {}", userDTO);
        log.info("savedUser = {}", savedUser);
        return success(savedUser.getId());
    }

    @PostMapping("/login")
    public ApiUtils.ApiResult<Long> login(@Valid @RequestBody UserDTO userDTO){
        User savedUser = userService.login(userDTO);
        return success(savedUser.getId());
    }

}

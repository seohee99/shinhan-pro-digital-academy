package com.example.Security.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@Slf4j
@AllArgsConstructor
public class UserDTO {
    @NotNull(message = "아이디는 필수로 입력되어야 합니다.")
    private Long id;

    @NotBlank(message = "비밀번호는 필수로 입력되어야 합니다.")
    private String pw;

    @NotBlank(message = "이메일은 필수로 입력되어야 합니다.")
    @Email(message = "이메일 형식이 맞지 않습니다.")
    private String email;

    @NotNull(message = "역할은 필수로 입력되어야 합니다.")
    private int role;

    public User convertToEntity(){
        return new User(id, pw, email, role);
    }
}

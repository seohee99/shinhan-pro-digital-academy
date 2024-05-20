package com.example.shoppingmall.member;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MemberDTO {
    @JsonProperty("user_id")
    @NotBlank(message = "아이디는 필수로 입력되어야 합니다.")
    private String userId;
    @NotBlank(message = "비밀번호는 필수로 입력되어야 합니다..")
    @Size(min = 8, message = "비밀번호는 8자리 이상이어야 합니다.")
    private String pw;
    @NotBlank(message = "이름은 필수로 입력되어야 합니다.")
    private String name;
    @Email(message = "이메일 형식이 맞지 않습니다.")
    @NotNull(message = "이메일은 필수로 입력되어야 합니다.")
    private String email;
    @Pattern(regexp = "^010-(\\d{4})-(\\d{4})$", message = "전화번호 형식이 맞지 않습니다.")
    private String contact;

    public Member converToEntity(){
        return new Member(userId, pw, name, email, contact);
    }
}

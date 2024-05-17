package com.example.shoppingmall.member;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MemberDTO {
    @JsonProperty("user_id")
    @NotNull(message = "아이디는 필수로 입력되어야 합니다.")
    private String userId;
    @NotBlank(message = "비밀번호에 공백은 포함될 수 없습니다.")
    @Min(value = 8, message = "비밀번호는 8자리 이상이어야 합니다.")
    private String pw;
    @NotNull(message = "이름은 필수로 입력되어야 합니다.")
    private String name;
    @Email(message = "이메일 형식이 맞지 않습니다.")
    private String email;
    @Pattern(regexp = "^010-(\\d{4})-(\\d{4})$", message = "전화번호 형식이 맞지 않습니다.")
    private String contact;

    public Member converToEntity(){
        return new Member(userId, pw, name, email, contact);
    }
}

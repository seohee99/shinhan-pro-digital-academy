package com.example.shoppingmall.member;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class Member {
    private String userId;
    private String pw;
    private String name;
    private String email;
    private String contact;

    @Override
    public String toString() {
        return "Member{" +
                "userId='" + userId + '\'' +
                ", pw='" + pw + '\'' +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", contact='" + contact + '\'' +
                '}';
    }
}

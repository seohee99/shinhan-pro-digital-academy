package com.example.shoppingmall.member;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "Member")
public class Member {
//    @JsonProperty("user_id") // DTO가 대신 받아주기 때문에 이 부분도 DTO로 옮겨야함
    @Id //(JPA 식별자)
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id; // pk

    private String userId;
    private String pw;
    private String name;
    private String email;
    private String contact;

    public Member(){};

    public Member(String userId, String pw, String name, String email, String contact) {
        this.userId = userId;
        this.pw = pw;
        this.name = name;
        this.email = email;
        this.contact = contact;
    }

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

package com.example.member;

import org.springframework.stereotype.Component;

@Component
public class MemberDemoApp {
    public static void main(String[] args) {
        // memberController.call1(); => memberService.work1(); => work1 출력


        MemberConfig memberConfig = new MemberConfig();
        MemberController memberController= memberConfig.MemberConfig();


        System.out.println(memberController.call1());
    }
}

package com.example.member;

import org.springframework.stereotype.Component;

@Component
public class MemberConfig {

    public MemberController MemberConfig(){
        MemberRepository memberRepository = new MemberRepository();
        MemberService memberService = new MemberService(memberRepository);
        return new MemberController(memberService);
    }

    MemberRepository makeMemberRepository(){
        return new MemberRepository();
    }
}

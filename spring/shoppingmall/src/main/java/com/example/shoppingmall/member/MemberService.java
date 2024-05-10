package com.example.shoppingmall.member;

import org.springframework.stereotype.Service;

@Service
public class MemberService {
    MemberRepository memberRepository;

    public String join(Member member) {
        return memberRepository.save(member);
    }
}

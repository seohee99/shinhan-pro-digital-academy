package com.example.shoppingmall.member;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class MemberService {

    MemberRepository memberRepository;

    public void makeConnection() {
        memberRepository.makeConnection();
    }

    public Member join(Member member) {
        memberRepository.save(member);
        return memberRepository.findByUserId(member.getUserId());
    }

    public boolean checkDuplicateId(String userId) {
        Member existMember
            = memberRepository.findByUserId(userId);

        if (existMember == null)
            return false;
        else
            return true;
    }


//    public String login(Member member) {
//        return memberRepository.find(member);
//    }
}

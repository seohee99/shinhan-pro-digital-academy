package com.example.shoppingmall.member;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class MemberService {

    MemberRepository memberRepository;

    @Transactional
    public String join(Member member) {
        memberRepository.save(member);
        return memberRepository.findByUserId(member.getUserId()).getUserId(); // memberRepository.findId();
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

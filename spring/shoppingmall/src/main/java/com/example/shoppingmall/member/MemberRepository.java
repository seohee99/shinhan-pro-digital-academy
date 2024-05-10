package com.example.shoppingmall.member;

import org.springframework.stereotype.Repository;

import java.util.Map;

@Repository
public class MemberRepository {

    private Map<String, Member> memberTable;
    public String save(Member member) {
        memberTable.put(member.getUserId(),member);
        Member savedMember = memberTable.get(member.getUserId());
        return savedMember.getUserId();
    }
}

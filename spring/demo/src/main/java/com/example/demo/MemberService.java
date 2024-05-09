package com.example.member;

import org.springframework.stereotype.Component;

@Component
public class MemberService {

    public MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository){
        System.out.println("Service Bean Created!");
        this.memberRepository = memberRepository;
    }

    public String work1(){
        return memberRepository.get1();
    }

    public String work2(){
        return memberRepository.get2();
    }

    public String work3(){
        return memberRepository.get3();
    }

    public String work4(){
        return memberRepository.get4();
    }
}

package com.example.shoppingmall.member;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@Slf4j
@AllArgsConstructor
public class MemberController {

    MemberService memberService;
    // lombok으로 의존성 주입 해결
//    MemberController(MemberService memberService){
//        this.memberService = memberService;
//    }

    @PostMapping("/join")
    public ResponseEntity<String> join(@RequestBody Member member){
        log.info(member.toString());
        String userId = memberService.join(member);
        return new ResponseEntity<>(userId, HttpStatus.OK);
    }
}

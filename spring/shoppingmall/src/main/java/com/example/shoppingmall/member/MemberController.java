package com.example.shoppingmall.member;


import com.example.shoppingmall.utill.ApiUtils;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.validation.Errors;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

import static com.example.shoppingmall.utill.ApiUtils.error;
import static com.example.shoppingmall.utill.ApiUtils.success;

@Slf4j
@AllArgsConstructor
@RestController
@Getter
public class MemberController {

    MemberService memberService;

    @GetMapping("/datasource")
    public void makeConnection(){
        memberService.makeConnection();
    }
    @PostMapping("/join")
    public ApiUtils.ApiResult join(@Valid @RequestBody MemberDTO memberDTO) {

        log.info(memberDTO.toString());

//        if(isDuplicateId(memberDTO))
//            return error("아이디 중복", HttpStatus.CONFLICT);

        Member requestMember = memberDTO.convertToEntity();

        String userId = memberService.join(requestMember).getUserId();
        return success(userId);
    }

    private boolean isDuplicateId(MemberDTO member) {
        return memberService.checkDuplicateId(member.getUserId());
    }

    @PostMapping("/login")
    public ApiUtils.ApiResult login(@RequestBody MemberDTO memberDTO){
        log.info(memberDTO.toString());

        Member requestMember = memberDTO.convertToEntity();

        String userId = memberService.login(requestMember);
        return success(userId);
    }

}

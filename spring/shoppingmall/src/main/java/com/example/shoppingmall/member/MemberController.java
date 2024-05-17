package com.example.shoppingmall.member;

import com.example.shoppingmall.utill.ApiResult;
import com.example.shoppingmall.utill.ApiUtils;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import static com.example.shoppingmall.utill.ApiUtils.error;
import static com.example.shoppingmall.utill.ApiUtils.success;

@Slf4j
@AllArgsConstructor
@RestController
@Getter
public class MemberController {

    MemberService memberService;
    @PostMapping("/join/api/result") // After
    public ApiUtils.ApiResult<String> joinByApiResult(@Valid @RequestBody MemberDTO memberDTO, Errors errors) {
        if(errors.hasErrors()){
            System.out.println(errors);
            log.warn("ERROR = {} ", errors);
            return error("필드값 이상", HttpStatus.BAD_REQUEST);
        }
        log.info(memberDTO.toString());

        if(isDuplicateId(memberDTO))

            return error("아이디 중복", HttpStatus.CONFLICT);

//        Member requestMember = new Member(
//                memberDTO.getUserId(),
//                memberDTO.getPw(),
//                memberDTO.getName(),
//                memberDTO.getEmail(),
//                memberDTO.getContact()
//
//        );

        Member requestMember = memberDTO.converToEntity();
        String userId = memberService.join(requestMember);
        return success(userId);
    }

    private boolean isDuplicateId(MemberDTO member) {
        return memberService.checkDuplicateId(member.getUserId());
    }
}

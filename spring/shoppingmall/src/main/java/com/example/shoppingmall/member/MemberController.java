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
    @PostMapping("/join")
    public ApiUtils.ApiResult join(@Valid @RequestBody MemberDTO memberDTO) {
//        if(errors.hasErrors()){
//            Map<String, String> errorMessages = new HashMap<>();
//
//            for(FieldError error : errors.getFieldErrors()){
//                // 예외 field 명
//                String errorField = error.getField();
//                // 예외 message
//                String errorMessage = error.getDefaultMessage();
//                errorMessages.put(errorField, errorMessage);
//
//            }
//            return  error(errorMessages,HttpStatus.BAD_REQUEST);
//        }
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

//    // 유효성 검사 후 에러가 터지면 실행되는 예외 처리 메소드
//    @ExceptionHandler //(MethodArgumentNotValidException.class)
//    @ResponseStatus(HttpStatus.BAD_REQUEST)
//    public ApiUtils.ApiResult<Map<String, String>> handleValidationExceptions(MethodArgumentNotValidException errors){
//
//        Map<String, String> errorMessages = new HashMap<>();
//
//        for(FieldError error : errors.getFieldErrors()){
//            // 예외 field 명
//            String errorField = error.getField();
//            // 예외 message
//            String errorMessage = error.getDefaultMessage();
//            errorMessages.put(errorField, errorMessage);
//
//        }
//        return  error(errorMessages,HttpStatus.BAD_REQUEST);
//
//    }
}

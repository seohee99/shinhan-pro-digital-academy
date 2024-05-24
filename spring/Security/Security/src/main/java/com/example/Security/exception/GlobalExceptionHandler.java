package com.example.Security.exception;

import com.example.Security.utill.ApiUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

import static com.example.Security.utill.ApiUtils.error;


@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler //(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ApiUtils.ApiResult<Map<String, String>> handleValidationExceptions(MethodArgumentNotValidException errors){

        Map<String, String> errorMessages = new HashMap<>();

        for(FieldError error : errors.getFieldErrors()){
            // 예외 field 명
            String errorField = error.getField();
            // 예외 message
            String errorMessage = error.getDefaultMessage();
            errorMessages.put(errorField, errorMessage);

        }
        log.info("errorMessages = {}",errorMessages);
        return  error(errorMessages,HttpStatus.BAD_REQUEST);
    }
    @ExceptionHandler(DuplicateNameException.class)
    @ResponseStatus(HttpStatus.CONFLICT)
    public ApiUtils.ApiResult<String> handleDuplicateNameException(DuplicateNameException ex){
        return error(ex.getMessage(), HttpStatus.CONFLICT);
    }

    @ExceptionHandler({RuntimeException.class})
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ApiUtils.ApiResult<String> handleRuntimeException(RuntimeException ex){
        return error(ex.getMessage(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(IllegalArgumentException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ApiUtils.ApiResult<String> handleIllegalArgumentException(IllegalArgumentException ex){
        return error(ex.getMessage(), HttpStatus.BAD_REQUEST);
    }
}

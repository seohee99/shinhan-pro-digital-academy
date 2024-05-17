package com.example.shoppingmall.utill;


import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

public class ApiUtils {
    public static <T> ApiResult<T> success(T data) {
        return new ApiResult<>(true, data, null);
    }

    public static ApiResult error(String message, HttpStatus httpStatus) {
        return new ApiResult(false,
                null,
                new ApiError(message, httpStatus));
    }

    @Getter
    @AllArgsConstructor
    public static class ApiResult<T> {

        boolean success;
        T response;
        ApiError error;
    }

    @Getter
    static class ApiError {
        String message;
        HttpStatus httpStatus;

        ApiError(String message, HttpStatus httpStatus) {
            this.message = message;
            this.httpStatus = httpStatus;
        }
    }
}

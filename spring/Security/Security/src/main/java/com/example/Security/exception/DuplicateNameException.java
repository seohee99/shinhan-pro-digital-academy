package com.example.Security.exception;

public class DuplicateNameException extends RuntimeException{
    public DuplicateNameException(String message){
        super(message);
    }
}

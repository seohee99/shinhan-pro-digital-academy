package com.example.member;

import org.springframework.stereotype.Component;

import java.util.HashMap;
@Component
public class MemberRepository {
    // db 연결 로직을 하나로 뺀다
    HashMap<Integer, String > hashMap = new HashMap();

    MemberRepository(){
        hashMap.put(1, "work1");
        hashMap.put(2, "work2");
        hashMap.put(3, "work3");
        hashMap.put(4, "work4");
    }

    public void setValue(int key, String value) {
        hashMap.put(key ,value);
    }

    public String get1(){
        return hashMap.get(1);
    }

    public String get2(){
        return hashMap.get(2);
    }

    public String get3(){
        return hashMap.get(3);
    }

    public String get4(){
        return hashMap.get(4);
    }
}

package com.example.shoppingmall.member;

import jakarta.persistence.*;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.datasource.DataSourceUtils;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.HashMap;
import java.util.Map;

@Repository
@Slf4j
public class MemberRepository {

    @Autowired
    private EntityManager entityManager;

    public void save(Member member) {
        entityManager.persist(member);
//
//        Member savedMember = entityManager.find(Member.class, member.getId());
//        return savedMember.getUserId();
    }


    public Member findByUserId(String userId) {
        String jpql = "SELECT m FROM Member m WHERE m.userId = :userId";

        return entityManager.createQuery(jpql, Member.class)
                .setParameter("userId", userId)
                .getSingleResult();
    }

    public Member findById(int id) {
        return entityManager.find(Member.class, id);
    }
}

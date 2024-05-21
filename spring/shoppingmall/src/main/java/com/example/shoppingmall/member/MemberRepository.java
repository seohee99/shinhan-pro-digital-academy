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
//    private Map<String, Member> memberTable
//            = new HashMap<>();


    @Autowired
    DataSource dataSource;

    @Autowired
    private EntityManager entityManager;



    public void makeConnection(){
        DataSourceUtils.getConnection(dataSource);
    }

    public String save(Member member) {
        entityManager.persist(member);

        Member savedMember = entityManager.find(Member.class, member.getId());
        return savedMember.getUserId();
    }


    public Member findByUserId(String userId) {

        Member member = entityManager.createQuery("select m from Member as m where m.userId = :userId", Member.class).setParameter("userId", userId).getSingleResult();
        return member;
    }

    public Member findById(int id) {
        return entityManager.find(Member.class, id);
    }
}

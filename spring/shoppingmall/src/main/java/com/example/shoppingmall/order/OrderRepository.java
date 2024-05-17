package com.example.shoppingmall.order;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;

@Repository
@Slf4j
public class OrderRepository {
    private Map<Integer, Order> orderTable = new HashMap<>();

    int id = 0;

    public void saveOrder(Order order) {
        log.info("productName = {}", order.getProduct().getName());
        order.setOrderId(id++);
        orderTable.put(order.getOrderId(), order);
    }
}

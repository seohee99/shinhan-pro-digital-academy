package com.example.shoppingmall.order;

import com.example.shoppingmall.product.Product;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.*;

@Getter
@Setter
@ToString
//@RequiredArgsConstructor
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class Order {

    private int orderId;

    Product product;

//    private int productId;

    private int count;

    public Order(Product product, int count){
        this.product = product;
        this.count = count;
    }

}

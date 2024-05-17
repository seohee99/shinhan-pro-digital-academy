package com.example.shoppingmall.order;


import com.example.shoppingmall.product.Product;
import com.example.shoppingmall.product.ProductService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@Slf4j
public class OrderController {

    OrderService orderService;
    ProductService productService;

    @PostMapping("/orders")
    public void orderProduct(@RequestBody OrderDTO orderDTO){
        // 유효성 검사
        Product orderedProduct = productService.findProduct(orderDTO.getProductId());

        // DTO를 Entity로 바꾼다
        Order requestOrder = new Order(
                orderedProduct, orderDTO.getCount()
        );

        orderService.orderProduct(requestOrder);
    }
}

package com.example.shoppingmall;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class ProductRepository {

    Map<Integer, Product> product_table = new HashMap<>();

    int id = 0; // DB Auto Increment

    public Product save(Product product){
        product.setId(id);
        product_table.put(product.getId(), product);

        System.out.println("products - repository - " + product_table.get(id-1));
        return product_table.get(id-1);
    }

    public Product findProduct(int id) {
        return product_table.get(id);
    }

    public List<Product> findProducts(int limit, int currentPage) {
        // map을 string으로 바꿨다가 다시 list로 바꿈
        // map에서 list로 바로 안 바뀌기 때문!!
        return product_table.values().stream().toList();
    }
}

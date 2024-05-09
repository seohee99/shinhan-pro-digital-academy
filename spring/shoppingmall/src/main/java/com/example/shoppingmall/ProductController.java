package com.example.shoppingmall;

import com.example.shoppingmall.utill.Validator;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@AllArgsConstructor
@Slf4j
public class ProductController {
//    @Autowired // DI
    ProductService productService;

    // 상품 개별 등록
    @PostMapping("/products")
    public ResponseEntity registerProduct(@RequestBody Product product){
        // * 유효성 검사 : name(영어), price(숫자), description이 모두 타당하면 service로 넘김
        // 1) 조건문

        if(Validator.isAlpha(product.getName()) && Validator.isNumber(product.getPrice())) {
            Product savedproduct = productService.registerProduct(product);

            // TODO NPE 처리(try-catch)
            try{
                System.out.println(savedproduct.getName());
            }catch (NullPointerException e){
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
//            if (savedproduct == null)
//                return new ResponseEntity<>(); // 개발자가 예상하지 못한 에러 :: 예외
            return new ResponseEntity<>(HttpStatus.CREATED);
        }else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }


    }


    // 상품 전체, 카테고리별 조회
    @GetMapping("/products")
    public ResponseEntity<List<Product>> findProducts(
            @RequestParam("limit") int limit,
            @RequestParam("currentPage") int currentPage,
            @RequestParam(value = "categoryId", required = false) Integer categoryId
            ){
        log.info("limit = {}", limit);
        log.info("currentPage = {}", currentPage);
        log.info("currentPage = {}", categoryId);
        List<Product> products = productService.findProducts(limit, currentPage);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    // 상품 개별 조회
    @GetMapping("/products/{id}")
    public ResponseEntity<Product> findProduct(@PathVariable(value="id")  int id){
        if(Validator.isNumber(id)) {
            // TODO log INFO 레벨 id type
//            Logger log = LoggerFactory.getLogger(ProductController );
            log.info(id + "");
            log.trace(id + "");

            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }


        Product resultProduct = productService.findProduct(id);
        if(resultProduct == null)
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(resultProduct,HttpStatus.OK);
    }




}

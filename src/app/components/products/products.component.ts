import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product-service.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers:[ProductService]
})
export class ProductsComponent implements OnInit {

  products: any = []; 
  
  
  constructor(productService: ProductService)
  { 
    debugger;
    this.products = productService.getProducts(); 
    console.log("this.products", this.products);
  }



  ngOnInit() {
  }

}

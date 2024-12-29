import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../products.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart: Product[] = [];
  totalSum: number = 0;
  router: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.cart = this.productService.getCart();
    this.calculateTotalSum();
  }

  removeFromCart(productId: number) {
    this.productService.removeFromCart(productId);
    this.cart = this.productService.getCart();
    this.calculateTotalSum();
  }

  calculateTotalSum() {
    this.totalSum = this.cart.reduce((acc, curr) => acc + curr.price, 0);
  }

  checkout() {
    this.router.navigateByUrl('/checkout');
    console.log('Checkout process initiated.');
    
  }
}

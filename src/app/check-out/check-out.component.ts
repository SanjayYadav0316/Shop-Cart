import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../products.model';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  cart: Product[] = [];
  totalSum: number = 0;
  userDetails = {
    name: '',
    address: '',
    paymentMethod: ''
  };

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.cart = this.productService.getCart();
    this.calculateTotalSum();
  }

  calculateTotalSum() {
    this.totalSum = this.cart.reduce((acc, curr) => acc + curr.price, 0);
  }

  onCheckout() {
    console.log('User Details:', this.userDetails);
    console.log('Cart Items:', this.cart);
    if (!this.userDetails.paymentMethod) {
        alert('Please choose a payment option.');
    
      }
    }
  }
  
  
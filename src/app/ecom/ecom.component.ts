import { Component } from '@angular/core';
import { products } from './products';
@Component({
  selector: 'app-ecom',
  templateUrl: './ecom.component.html',
  styleUrls: ['./ecom.component.css']
})
export class EcomComponent {
  allproducts=products
  cart:any=[];
  ngOnInit(){

  }
  addToCart(pr:any){
    this.cart.push(pr)
  }
  deleteProductFromCart(cp:any){
    this.cart=this.cart.filter((product:any)=>{
      if(product.title===cp.title){
        return false
      }
      else{
        return true;
      }
    })
  }
}

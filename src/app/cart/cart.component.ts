import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input() cart:any=[];
  @Output() deleteProduct = new EventEmitter();
  deleteCartItem(cp:any){
    this.deleteProduct.emit(cp)
  }
}

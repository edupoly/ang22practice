import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() appage:any=30;
  @Output() abc = new EventEmitter()
  foo(){
    this.abc.emit("Chiranjeevi")
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //data: properties
  title = 'ang22practice';
  a=100;
  b=200;
  ar=[12,23,92,18,47,838,38,187,47,574]
  students=[
    {
      name:'sindhu',
      age:22,
      place:'siddipet'
    },
    {
      name:'karthik',
      age:23,
      place:'rajamundry'
    },
    {
      name:'komal',
      age:21,
      place:'pune'
    },
  ]
  //logic: methods  
  abc(){
    this.students.sort((a,b)=>{
      if(a.name>b.name){return 1}
      else{return -1}
    })
  }
  xyz(){
    this.students.sort((a,b)=>{
      if(a.age>b.age){return 1}
      else{return -1}
    })
  }
}

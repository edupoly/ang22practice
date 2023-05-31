import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang22practice';
  imgUrl="https://s3-ap-southeast-1.amazonaws.com/tv-prod/member/photo/1787281-large.jpg"
  cricketers=[
    {
      fullname:'virat',
      pic:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/2.png",
      age:34,
      gender:'male'
    },
    {
      fullname:'rohit',
      pic:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/6.png",
      age:35,
      gender:'male'
    },
    {
      fullname:'dhoni',
      pic:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/57.png",
      age:36,
      gender:'male'
    },
    {
      fullname:'smriti mandana',
      pic:"https://www.wplt20.com/static-assets/images/players/63992.png?v=30.23",
      age:34,
      gender:'female'
    },
    {
      fullname:'shubhman gill',
      pic:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/62.png",
      age:35,
      gender:'male'
    },
    {
      fullname:'harman',
      pic:"https://www.wplt20.com/static-assets/images/players/59348.png?v=30.23",
      age:36,
      gender:'female'
    },
  ]
}

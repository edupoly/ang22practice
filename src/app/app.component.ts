import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang22practice';
  myage=40;
  childData:any=''
  sportspics= ["https://img.freepik.com/free-photo/shiny-bubbles-wallpaper_23-2150440538.jpg?w=2000&t=st=1685537521~exp=1685538121~hmac=c8a5fd95b88ac2e88a022e03ddaf77fd63de5d245c8592db99cb6207f722756f",
  "https://img.freepik.com/free-photo/comet-young-caucasian-basketball-player-red-team-action_155003-32669.jpg?w=1480&t=st=1685537555~exp=1685538155~hmac=d1054c27e135a8388607ab461fd7c74dbad20e5034ea6d7446067592ee6ec46a",
"https://img.freepik.com/free-photo/bright-black-white-volleyball-ball-professional-sport-equipment-isolated-green-studio-background_155003-41684.jpg?w=1480&t=st=1685537584~exp=1685538184~hmac=83a364125b125a10673807c541d28f23a729c398a8edcff724c2c9dcda7ef05c"]
 beaches=["https://img.freepik.com/free-photo/woman-doing-yoga-beach_1048-5480.jpg?w=1480&t=st=1685537958~exp=1685538558~hmac=53bbae21264cad383e99b842bcd9febceb40d87d214ba011bc5e46cf34c5e014",
          "https://img.freepik.com/free-photo/carefree-couple-holding-each-other-s-hand-running-seashore_23-2148103014.jpg?w=2000&t=st=1685538001~exp=1685538601~hmac=61d334dc63e12f0b0538e2dc090896457da035e53a6f2cd71771e7518b40e1d3",
          "https://img.freepik.com/free-photo/couple-playing-beach-volleyball-shoreline_23-2147646800.jpg?w=1480&t=st=1685538012~exp=1685538612~hmac=1cce5852c3af4eb99d49bffb467c5d794abb5c08abd4e99deee4d08e5de1e93d"
        ]

  handler1(e:Event){
    this.childData=e;
  }
}

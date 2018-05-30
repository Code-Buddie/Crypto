import { Component, OnInit } from '@angular/core';

// Services
import { DataService } from './shared/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  objectKeys = Object.keys;
  cryptos: any;

  constructor( private data: DataService ) { }
  
  ngOnInit() {
    this.data.getPrices()
    .subscribe( res => {
      this.cryptos = res;
      console.log( res );
    });
  }
}

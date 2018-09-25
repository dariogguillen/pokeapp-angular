import { Component, OnInit } from '@angular/core';

import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private dataService: DataService) {}

  ngOnInit () {
    this.dataService.getPokemon(0, 9)
      .then(pokemon => console.log(pokemon))
  }
}

import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { StocksService } from 'src/app/services/stocks.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  searchTerm: string;
  @Output() searchStocks: EventEmitter<string> = new EventEmitter();

  constructor(private stocks: StocksService) { }

  getStocks() {
    const searchFor = this.searchTerm.split(", ").join(",");
    this.searchStocks.emit(searchFor);
    this.searchTerm = '';
  }

}

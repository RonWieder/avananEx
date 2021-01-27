import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from './models/stock';
import { StocksService } from './services/stocks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'avananEx';
  $stocksData: Observable<Stock[]>;

  constructor(private stocksService: StocksService) { }

  getStocks(queryStocks) {
    this.$stocksData = this.stocksService.getStocks(queryStocks);
  }
}

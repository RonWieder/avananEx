import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../models/stock';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  private BASE_URL: string = 'https://api.iextrading.com/1.0/tops/last';

  constructor(private http: HttpClient) { }

  getStocks(stocks: string): Observable<Stock[]> {
    const url = this.BASE_URL + `?symbols=${stocks}`;
    return this.http.get<Stock[]>(url);
  }
}

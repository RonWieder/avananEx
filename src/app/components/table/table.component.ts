import { Component, Input, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';

import { Stock } from 'src/app/models/stock';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() stocks: Stock[];
  headers: string[] = ["symbol", "SNAP", "price", "size", "time"]
  dataSource: MatTableDataSource<Stock>;


  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.stocks);
  }

}

import { Component } from '@angular/core';
import {OrderRow} from './order-row.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Black Books';
  rows = [
    new OrderRow(
      'La Nuit des temps',
      'René Barjavel',
      7.43,
      3),
    new OrderRow(
      'Des fleurs pour Algernon',
      'Daniel Keyes',
      6.00,
      5),
  ];
  remove(row: OrderRow){
    // let index = this.rows.indexOf(row);
    // this.rows.splice(index, 1);
    this.rows = this.rows.filter( r => r != row);
  }
  total(){
    return this.rows
      .map(row =>row.amount())
      .reduce((total, value)=>total + value, 0);
  }
  isBig(row){
    return row.amount()>=1000;
  }
}

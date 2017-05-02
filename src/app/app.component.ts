import {Component, OnInit} from '@angular/core';
import {OrderRow} from './order-row.model';
import {CatalogService} from "./catalog.service";
import {Observable} from "rxjs/Observable";
import {Book} from "./book.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit{
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

  books$: Observable<Book[]>;

  manualFormData = new OrderRow();
  catalogFormData : {selected?: Book, quantity?: number} = {}

  constructor(private catalog:CatalogService){

  }

  ngOnInit(): void {
    this.books$ = this.catalog.getList();
  }

  manualAdd(){
    this.rows.push(this.manualFormData);
    this.manualFormData = new OrderRow();
  }
manualMode = false;
  catalogAdd(){
  this.rows.push(new OrderRow(
    this.catalogFormData.selected.title,
      this.catalogFormData.selected.author,
      this.catalogFormData.selected.price,
    this.catalogFormData.quantity || 1
  ));
  this.catalogFormData = {};
  }


  remove(row: OrderRow){
    // let index = this.rows.indexOf(row);
    // this.rows.splice(index, 1);required
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

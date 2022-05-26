import { Component, OnInit } from '@angular/core';
//hacer referencia a la clase que cree en items.ts
import { Item } from '../../models/items';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  //centralizar mis datos

  items: Item[] = []; //este objeto no existe, hay que creaerlo, voy a crear un modelo de datos

  constructor() { }

  ngOnInit(): void { //aca esta el ciclo de vida en Angular
    this.items = [
      {
        id: 0,
        title: 'manzana',
        price: 10.5,
        quantity: 4,
        complete: false
      },
      {
        id: 1,
        title: 'pan',
        price: 3.5,
        quantity: 8,
        complete: true
      },
    ];
  }
}

import { Component, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.less']
})
export class ItemsComponent implements OnInit {
  items: Item[] = [
    { id: 1, name: "test" },
    { id: 2, name: "test 2" },
    { id: 3, name: "test 3" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

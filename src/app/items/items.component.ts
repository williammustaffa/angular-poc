import { Component, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.less']
})
export class ItemsComponent implements OnInit {
  items: Item[] = [
    { id: 1, name: 'test' },
    { id: 2, name: 'test 2' },
    { id: 3, name: 'test 3' },
  ];

  newItem: string = "";

  addItem(name: string): void {
    const items = this.items.map(item => item.id);
    const id = Math.max(...items) + 1;

    this.items.push({
      id: id,
      name,
    });

    this.newItem = '';
  }

  removeItem(targetItem: Item) {
    this.items = this.items.filter(item => item.id !== targetItem.id);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

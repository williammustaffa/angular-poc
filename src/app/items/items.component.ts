import { Component, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.less']
})
export class ItemsComponent implements OnInit {
  // List of items to be managed
  items: Item[] = [
    { id: 1, name: 'test' },
    { id: 2, name: 'test 2' },
    { id: 3, name: 'test 3' },
  ];

  // New item to be added
  newItem: string = "";

  // Selected item
  selectedItem: Item;

  addItem(name: string): void {
    const items = this.items.map(item => item.id);
    const id = Math.max(...items) + 1;

    // Add to list
    this.items.push({ id, name });

    this.newItem = '';
  }

  removeItem(targetItem: Item) {
    this.items = this.items.filter(item => item.id !== targetItem.id);
  }

  selectItem(targetItem: Item) {
    this.selectedItem = targetItem;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

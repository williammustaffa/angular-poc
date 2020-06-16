import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ITEMS } from '../mock-items';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.less']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  newItem: string = "";
  selectedItem: Item;

  constructor(private itemService: ItemService) {

  }

  getItems(): void {
    this.itemService.getItems()
      .subscribe(items => this.items = items);
  }

  addItem(name: string): void {
    const items = this.items.map(item => item.id);
    const id = Math.max(0, ...items) + 1;

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

  ngOnInit(): void {
    this.getItems();
  }
}

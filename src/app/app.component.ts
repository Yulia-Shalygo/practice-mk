import { Component } from "@angular/core";

class Item{
  purchase: string;
  done: boolean;
   
  constructor(purchase: string) {
    this.purchase = purchase;
    this.done = false;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  text: string;
   
  items: Item[] = [
    { purchase: "Хлеб", done: false},
    { purchase: "Масло", done: false},
    { purchase: "Картофель", done: true},
    { purchase: "Сыр", done: false}
  ];

  addItem(text: string, price: number): void {
    if(text == null || text.trim() == "")
      return;
    this.items.push(new Item(text));
  }
}
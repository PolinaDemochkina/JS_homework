import { Injectable } from '@angular/core';
import {IIngredient} from "./shopping-list/shopping-list.component";
import { Observable, BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ShoppingListService {
  private items: BehaviorSubject<IIngredient[]> = new BehaviorSubject([] as IIngredient[]);

  addToCart(ingredient: string) {
    if (this.items.getValue().some(e => e.name === ingredient)) {
      this.increment(ingredient)
    }
    else{
      let ingredient_item: IIngredient = {name: ingredient, quantity: 1}
      this.items.getValue().push(ingredient_item);
    }
  }

  increment(ingredient: string) {
    let index = this.items.getValue().map(e => e.name).indexOf(ingredient);
    this.items.getValue()[index].quantity = this.items.getValue()[index].quantity + 1;
  }

  getItems(): Observable<IIngredient[]> {
    return this.items.asObservable();
  }

  updateIngredients(ingredients: IIngredient[]) {
    this.items.next(ingredients);
  }
}

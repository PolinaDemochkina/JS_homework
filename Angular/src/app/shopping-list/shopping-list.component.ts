import {Component, OnInit, ViewChild} from '@angular/core';
import {ShoppingListService} from "../shopping-list.service";

export interface IIngredient{
  name: string;
  quantity: number;
}

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Array<IIngredient> = [];

  @ViewChild('input') input: any;

  constructor(
    private shoppingListService: ShoppingListService
  ) { }

  ngOnInit(): void {
    this.shoppingListService.getItems().subscribe((data: IIngredient[]) => {
      this.ingredients = data ? data : [];
    });
  }

  addToCart(ingredient: any) {
    this.input.nativeElement.value = '';
    if (ingredient != '') {
      this.shoppingListService.addToCart(ingredient);
    }
  }

  increment(ingredient: any) {
    let index = this.ingredients.map(e => e.name).indexOf(ingredient);
    let current_quantity = this.ingredients[index].quantity
    this.ingredients[index].quantity = current_quantity + 1;
  }

  decrement(ingredient: any) {
    let index = this.ingredients.map(e => e.name).indexOf(ingredient);
    if ((this.ingredients[index].quantity - 1) == 0) {
      this.ingredients.splice(index, 1)
    }
    else {
      let current_quantity = this.ingredients[index].quantity
      this.ingredients[index].quantity = current_quantity - 1;
    }
  }

  update(ingredients: IIngredient[]) {
    this.shoppingListService.updateIngredients(ingredients);
  }
}

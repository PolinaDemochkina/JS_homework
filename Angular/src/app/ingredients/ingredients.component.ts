import {Component, Input} from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class Ingredients {
  @Input()
  public recipe: any;

  constructor(
    private shoppingListService: ShoppingListService
  ) { }

  addToCart(ingredient: string) {
    ingredient = ingredient.replace(/(?![\s-])[^a-zA-Z]/g,'');  // remove the number part
    ingredient = ingredient.replace(/cups|cup|oz|lb|sticks|stick|teaspoons|teaspoon|tablespoons|tablespoon/g,
      '').trim()    // remove the measurement
    ingredient = ingredient.charAt(0).toUpperCase() + ingredient.slice(1);
    this.shoppingListService.addToCart(ingredient);
  }
}

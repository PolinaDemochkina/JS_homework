import { Component, OnInit } from '@angular/core';
export interface IRecipe{
  name: string;
  ingredients: string[];
}
@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.css']
})
export class RecipesPageComponent {
  public recipes: IRecipe[] =
    [
      {
        name: 'Chocolate Chip Cookies',
        ingredients: ['½ cup granulated sugar', '¾ cup brown sugar', '1 teaspoon salt', '½ cup unsalted butter', '1 egg',
          '1 teaspoon vanilla extract', '1 ¼ cups all-purpose flour', '½ teaspoon baking soda',
          '4 oz milk chocolate', '4 oz dark chocolate'],
      },
      {
        name: 'Apple Pie',
        ingredients: ['2 ½ cups flour', '1 teaspoon salt', '1 ½ sticks butter', '2 ½ lb granny smith apple', '¾ cup sugar',
          '2 tablespoons flour', '½ teaspoon salt', '1 teaspoon cinnamon', '¼ teaspoon nutmeg', '½ lemon', '1 egg',
          '1 tablespoon sugar'],
      },
      {
        name: 'Cinnamon Rolls',
        ingredients: ['1 ½ cup unsalted butter', '2 cups whole milk', '½ cup granulated sugar',
          '2 ¼ teaspoons active dry yeast', '5 cups flour', '1 teaspoon baking powder', '2 teaspoons salt',
          '¾ cup light brown sugar', '2 tablespoons ground cinnamon', '4 oz cream cheese', '1 teaspoon vanilla extract',
          '1 cup powdered sugar'],
      },
    ]
  selectedRecipe: any;
}

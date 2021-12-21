import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import { MatSelectionList} from '@angular/material/list';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent {
  @Input()
  public recipes: any;
  public currentRecipe: any;

  @Output() public select: EventEmitter<{}> = new EventEmitter();

  @ViewChild(MatSelectionList) public selectionList: MatSelectionList | undefined;

  public onSelect(recipe: {} | undefined) {
    this.currentRecipe = recipe;
    this.select.emit(recipe);
  }

  ngOnInit() {
    if (this.recipes && this.recipes.length > 0) {
      this.currentRecipe = this.recipes[0];
      this.select.emit(this.currentRecipe);
    }
  }
}


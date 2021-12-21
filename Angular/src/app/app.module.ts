import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipes-list/recipe-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipesPageComponent } from './recipes-page/recipes-page.component';
import { Ingredients } from './ingredients/ingredients.component';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {NgSpinBoxModule} from "ng-spin-box";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    ShoppingListComponent,
    RecipesPageComponent,
    Ingredients
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    NgSpinBoxModule,
    FormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

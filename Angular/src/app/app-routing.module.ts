import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesPageComponent } from './recipes-page/recipes-page.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  { path: '', component: RecipesPageComponent },
  { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

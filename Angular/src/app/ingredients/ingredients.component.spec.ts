import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ingredients } from './ingredients.component';

describe('RecipesDetailsComponent', () => {
  let component: Ingredients;
  let fixture: ComponentFixture<Ingredients>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ingredients ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ingredients);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

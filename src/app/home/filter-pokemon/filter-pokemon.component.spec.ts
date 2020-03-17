import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPokemonComponent } from './filter-pokemon.component';

describe('FilterPokemonComponent', () => {
  let component: FilterPokemonComponent;
  let fixture: ComponentFixture<FilterPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

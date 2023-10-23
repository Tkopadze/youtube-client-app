import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchresponseComponent } from './search-response.component';

describe('SearchresponsesComponent', () => {
  let component: SearchresponseComponent;
  let fixture: ComponentFixture<SearchresponseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchresponseComponent]
    });
    fixture = TestBed.createComponent(SearchresponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTopComponent } from './home-top.component';

describe('HomeTopComponent', () => {
  let component: HomeTopComponent;
  let fixture: ComponentFixture<HomeTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeTopComponent]
    });
    fixture = TestBed.createComponent(HomeTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

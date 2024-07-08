import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StaredlaptopsPage } from './stared.page';

describe('StaredlaptopsPage', () => {
  let component: StaredlaptopsPage;
  let fixture: ComponentFixture<StaredlaptopsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StaredlaptopsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

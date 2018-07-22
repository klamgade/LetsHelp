import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroGrandParentComponent } from './hero-grand-parent.component';

describe('HeroGrandParentComponent', () => {
  let component: HeroGrandParentComponent;
  let fixture: ComponentFixture<HeroGrandParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroGrandParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroGrandParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

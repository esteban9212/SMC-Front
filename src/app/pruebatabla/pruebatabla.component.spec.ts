import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebatablaComponent } from './pruebatabla.component';

describe('PruebatablaComponent', () => {
  let component: PruebatablaComponent;
  let fixture: ComponentFixture<PruebatablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebatablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebatablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

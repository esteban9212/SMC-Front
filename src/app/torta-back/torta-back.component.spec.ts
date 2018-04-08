import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TortaBackComponent } from './torta-back.component';

describe('TortaBackComponent', () => {
  let component: TortaBackComponent;
  let fixture: ComponentFixture<TortaBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TortaBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TortaBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

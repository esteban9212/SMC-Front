import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdioRowComponent } from './cdio-row.component';

describe('CdioRowComponent', () => {
  let component: CdioRowComponent;
  let fixture: ComponentFixture<CdioRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdioRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdioRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectGenComponent } from './select-gen.component';

describe('SelectGenComponent', () => {
  let component: SelectGenComponent;
  let fixture: ComponentFixture<SelectGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

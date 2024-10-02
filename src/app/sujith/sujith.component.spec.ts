import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SujithComponent } from './sujith.component';

describe('SujithComponent', () => {
  let component: SujithComponent;
  let fixture: ComponentFixture<SujithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SujithComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SujithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

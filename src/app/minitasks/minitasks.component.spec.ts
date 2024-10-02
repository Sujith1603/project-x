import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinitasksComponent } from './minitasks.component';

describe('MinitasksComponent', () => {
  let component: MinitasksComponent;
  let fixture: ComponentFixture<MinitasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MinitasksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinitasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

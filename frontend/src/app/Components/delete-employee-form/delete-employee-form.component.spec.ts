import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmployeeFormComponent } from './delete-employee-form.component';

describe('DeleteEmployeeFormComponent', () => {
  let component: DeleteEmployeeFormComponent;
  let fixture: ComponentFixture<DeleteEmployeeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEmployeeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEmployeeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

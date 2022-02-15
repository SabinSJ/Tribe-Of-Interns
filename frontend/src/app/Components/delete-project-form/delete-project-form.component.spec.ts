import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProjectFormComponent } from './delete-project-form.component';

describe('DeleteProjectFormComponent', () => {
  let component: DeleteProjectFormComponent;
  let fixture: ComponentFixture<DeleteProjectFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProjectFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProjectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

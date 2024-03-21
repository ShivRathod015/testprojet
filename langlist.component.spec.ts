import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanglistComponent } from './langlist.component';

describe('LanglistComponent', () => {
  let component: LanglistComponent;
  let fixture: ComponentFixture<LanglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanglistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LanglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

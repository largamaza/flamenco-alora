import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderButtonTranslateComponent } from './header-button-translate.component';

describe('HeaderButtonTranslateComponent', () => {
  let component: HeaderButtonTranslateComponent;
  let fixture: ComponentFixture<HeaderButtonTranslateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderButtonTranslateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderButtonTranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

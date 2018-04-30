import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMioComponent } from './menu-mio.component';

describe('MenuMioComponent', () => {
  let component: MenuMioComponent;
  let fixture: ComponentFixture<MenuMioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuMioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

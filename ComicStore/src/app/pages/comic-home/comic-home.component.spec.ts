import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicHomeComponent } from './comic-home.component';

describe('ComicHomeComponent', () => {
  let component: ComicHomeComponent;
  let fixture: ComponentFixture<ComicHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

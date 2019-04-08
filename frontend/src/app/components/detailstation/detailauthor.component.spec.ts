import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailstationComponent } from './detailstation.component';

describe('DetailstationComponent', () => {
  let component: DetailstationComponent;
  let fixture: ComponentFixture<DetailstationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailstationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailstationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should post', () => {
    expect(component).toBeTruthy();
  });
});

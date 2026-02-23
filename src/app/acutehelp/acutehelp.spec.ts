import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acutehelp } from './acutehelp';

describe('Acutehelp', () => {
  let component: Acutehelp;
  let fixture: ComponentFixture<Acutehelp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Acutehelp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Acutehelp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

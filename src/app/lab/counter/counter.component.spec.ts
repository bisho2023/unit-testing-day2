import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponentForLab } from './counter.component';

describe('CounterComponentForLab', () => {
  let component: CounterComponentForLab;
  let fixture: ComponentFixture<CounterComponentForLab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponentForLab ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponentForLab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("when click btn fires increse fun should the interpolation detect the change", () => {
    const increaseBtn = fixture.debugElement.nativeElement.querySelector('.increase-btn');
    increaseBtn.click();
    fixture.detectChanges();
    const counterEl = fixture.debugElement.nativeElement.querySelector('p');
    expect(counterEl.textContent.trim()).toEqual('1');
  });

  it("when click btn fires decrese fun should the interpolation detect the change", () => {
    const decreaseBtn = fixture.debugElement.nativeElement.querySelector('.decrease-btn');
    decreaseBtn.click();
    fixture.detectChanges();
    const counterEl = fixture.debugElement.nativeElement.querySelector('p');
    expect(counterEl.textContent.trim()).toEqual('-1');
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Advice } from '../core/models/advice';
import { AdviceComponent } from './advice.component';
import { DebugElement } from '@angular/core';
import { provideRouter } from '@angular/router';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('AdviceComponent', () => {

  let component: AdviceComponent;
  let fixture: ComponentFixture<AdviceComponent>;
  let debugEl: DebugElement;
  let router: Router;
  let expectedAdvice: Advice = { slip: { id: 2, advice: 'fake advice'}};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdviceComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    router = TestBed.inject(Router);
    fixture.detectChanges();
    fixture.componentRef.setInput('advice', expectedAdvice);
    await fixture.whenStable();
  });

  it('should display the advice', () => {
    const paragraph = debugEl.query(By.css('.quote'));
    fixture.detectChanges();
    const paragraphText = paragraph.nativeElement.textContent.trim();
    expect(paragraphText).toBe(expectedAdvice.slip.advice);
  });

  it('should redirect to the hate page', () => {
    const routerSpy = spyOn(router, 'navigate');
    component.hateAdvice();
    expect(routerSpy).toHaveBeenCalledWith(['/hate', expectedAdvice.slip.id]);
  });
});

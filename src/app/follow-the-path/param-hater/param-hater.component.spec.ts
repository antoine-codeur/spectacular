import { TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { ParamHaterComponent } from './param-hater.component';
import { FollowThePathComponent } from '../follow-the-path.component';
import { CommonModule } from '@angular/common';

describe('ParamHaterComponent', () => {
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterModule.forRoot([
          { path: 'hate/:id', component: ParamHaterComponent },
          { path: 'home', component: FollowThePathComponent }
        ]),
        ParamHaterComponent,
        FollowThePathComponent
      ],
    }).compileComponents();

    router = TestBed.inject(Router);
  });

  it('should display advice id', async () => {
    const harness = await RouterTestingHarness.create();
    
    await harness.navigateByUrl('/hate/7');
    
    const paragraphText = harness.routeNativeElement?.querySelector('p')?.textContent?.trim() ?? '';
    
    const idFromParagraph = paragraphText.split(':')[1]?.trim();
    
    expect(idFromParagraph).toBe('7');
  });  
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { QuoteService } from './quote.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
          SharedModule,
          HttpClientTestingModule
        ],
        declarations: [HomeComponent],
        providers: [
          QuoteService
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

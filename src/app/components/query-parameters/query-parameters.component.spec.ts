import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DisplayOrderPipe } from '../../pipes/display-order.pipe';
import { OrderByPipe } from '../../pipes/order-by.pipe';

import { QueryParametersComponent } from './query-parameters.component';

describe('QueryParametersComponent', () => {
  let component: QueryParametersComponent;
  let fixture: ComponentFixture<QueryParametersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
        declarations: [
            QueryParametersComponent,
            DisplayOrderPipe,
            OrderByPipe
        ],
        imports: [
            FormsModule,
            HttpClientModule,
            MatCheckboxModule,
            NgbTypeaheadModule
        ],
    }).compileComponents();
      
    fixture = TestBed.createComponent(QueryParametersComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

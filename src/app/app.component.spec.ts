import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryPipe } from './pipes/category.pipe';
import { FormsModule } from '@angular/forms';
import { SnomedNavbarComponent } from './components/snomed-navbar/snomed-navbar.component';
import { ReportingComponent } from './components/reporting/reporting.component';
import { SnomedFooterComponent } from './components/snomed-footer/snomed-footer.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { OrderByPipe } from './pipes/order-by.pipe';
import { TagsPipe } from './pipes/tags.pipe';
import { HiddenPipe } from './pipes/hidden.pipe';
import { DisplayOrderPipe } from './pipes/display-order.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { QueryParametersComponent } from './components/query-parameters/query-parameters.component';
import 'jquery';

import { AppComponent } from './app.component';
import { MainToTopPipe } from './pipes/main-to-top.pipe';
import { AlphabeticalPipe } from './pipes/alphabetical.pipe';

describe('AppComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                SnomedNavbarComponent,
                SnomedFooterComponent,
                LeftSidebarComponent,
                ReportingComponent,
                ModalComponent,
                QueryParametersComponent,
                OrderByPipe,
                CategoryPipe,
                TagsPipe,
                HiddenPipe,
                DisplayOrderPipe,
                MainToTopPipe,
                AlphabeticalPipe
            ],
            imports: [
                FormsModule,
                HttpClientModule,
                MatTooltipModule,
                NgbTypeaheadModule,
                MatCheckboxModule,
                BrowserAnimationsModule
            ]
        }).compileComponents();
    });
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});

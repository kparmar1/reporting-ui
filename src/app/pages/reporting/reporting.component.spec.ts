import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportingComponent } from './reporting.component';
import { HttpClientModule } from '@angular/common/http';
import { SnomedLeftSidebarComponent } from '../../components/snomed-left-sidebar/snomed-left-sidebar.component';
import { CategoryPipe } from '../../pipes/category.pipe';
import { MatTooltipModule, MatCheckboxModule } from '@angular/material';
import { SnomedModalComponent } from '../../components/snomed-modal/snomed-modal.component';
import { FormsModule } from '@angular/forms';
import { SnomedOverlayComponent } from '../../components/snomed-overlay/snomed-overlay.component';
import { SnomedTypeaheadComponent } from '../../components/snomed-typeahead/snomed-typeahead.component';
import { ConceptsPipe } from '../../pipes/concepts.pipe';

describe('ReportingComponent', () => {
    let component: ReportingComponent;
    let fixture: ComponentFixture<ReportingComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ReportingComponent,
                SnomedLeftSidebarComponent,
                CategoryPipe,
                SnomedModalComponent,
                SnomedOverlayComponent,
                SnomedTypeaheadComponent,
                ConceptsPipe
            ],
            imports: [
                HttpClientModule,
                MatTooltipModule,
                FormsModule,
                MatCheckboxModule
            ],
            schemas: []
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ReportingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

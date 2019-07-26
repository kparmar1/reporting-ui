import { SnomedQueryModalComponent } from './snomed-query-modal.component';
import { async, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material';
import { SnomedTypeaheadComponent } from '../snomed-typeahead/snomed-typeahead.component';
import { SnomedTypeaheadListComponent } from '../snomed-typeahead-list/snomed-typeahead-list.component';
import { ConceptsPipe } from '../../pipes/concepts.pipe';
import { DisplayOrderPipe } from '../../pipes/display-order.pipe';
import { OrderByPipe } from '../../pipes/order-by.pipe';
import { TemplateService } from '../../services/template.service';
import { ProjectService } from '../../services/project.service';

describe('SnomedQueryModalComponent', () => {
    let component: SnomedQueryModalComponent;
    let templateService: TemplateService;
    let projectService: ProjectService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                SnomedQueryModalComponent,
                SnomedTypeaheadComponent,
                SnomedTypeaheadListComponent,
                ConceptsPipe,
                DisplayOrderPipe,
                OrderByPipe
            ],
            imports: [
                HttpClientModule,
                FormsModule,
                MatCheckboxModule
            ],
            schemas: []
        }).compileComponents();
    }));

    beforeEach(() => {
        templateService = new TemplateService(null);
        projectService = new ProjectService(null);
        component = new SnomedQueryModalComponent(templateService, projectService);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

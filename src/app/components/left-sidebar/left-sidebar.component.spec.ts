import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { LeftSidebarComponent } from './left-sidebar.component';

describe('LeftSidebarComponent', () => {
    let component: LeftSidebarComponent;
    let fixture: ComponentFixture<LeftSidebarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                LeftSidebarComponent
            ],
            imports: [
                HttpClientModule,
                FormsModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LeftSidebarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

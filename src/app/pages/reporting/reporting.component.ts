import { Component, OnInit } from '@angular/core';
import { Report } from '../../models/report';
import { Job } from '../../models/job';
import { JobRun } from '../../models/jobRun';
import { ReportingService } from '../../services/reporting.service';
import { NgbModal, ModalDismissReasons, NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-reporting',
    templateUrl: './reporting.component.html',
    styleUrls: ['./reporting.component.scss']
})
export class ReportingComponent implements OnInit {

    currentRuns: JobRun[];
    activeReport: string;
    activeJob: Job;
    activeRun: JobRun;
    categorySearch: string;
    jobSearch: string;
    filterType: string;
    reports: Report[];
    closeResult: string;
    parameters: string[];
    typeahead: boolean;

    constructor(private reportingService: ReportingService,
                public modalService: NgbModal) {
    }

    ngOnInit() {
        this.reportingService.getReports().subscribe(data => {
            this.reports = data;
        });

        this.parameters = [''];
        setInterval(() => this.refresh(), 5000);
    }

    typeaheadFunc(event, i) {
        this.parameters[i] = event;
        this.typeahead = false;
    }

    refresh() {
        if(this.activeJob) {
            this.reportingService.getReportRuns(this.activeJob.name).subscribe(data => {
                this.currentRuns = data;
            });
        }
    }

    filterTypeSwitch(type) {
        if (this.filterType !== type) {
            this.filterType = type;
        } else {
            this.filterType = null;
        }
    }

    activeReportSwitch($event: NgbPanelChangeEvent) {
        if (this.activeReport !== $event.panelId) {
            this.currentRuns = null;
            this.activeReport = $event.panelId;
            this.reportingService.getReportRuns($event.panelId).subscribe(data => {
                this.currentRuns = data;
            });

        } else {
            this.activeReport = null;
        }
    }

    activeRunSwitch(run) {
        if (this.activeRun !== run) {
            this.activeRun = run;
        } else {
            this.activeRun = null;
        }
    }

    submitReport() {
        let params = {};

        if(!this.activeJob.parameterNames) {
            params = null;
        }
        else {
            for(let i = 0; i < this.activeJob.parameterNames.length; i++) {
                params[this.activeJob.parameterNames[i]] = this.parameters[i];
            }
        }

        this.reportingService.postReportRun(this.activeJob.name, params);
    }

    viewReport() {
        window.open(this.activeRun.resultUrl);
    }

    close(reason) {
        this.closeResult = reason;

        this.submitReport();

        this.modalService.dismissAll(reason);
    }

    open(content) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
}

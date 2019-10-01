import { Component, OnInit } from '@angular/core';
import { AuthoringService } from './services/authoring.service';
import { AuthenticationService } from './services/authentication.service';
import 'jquery';
import { Versions } from './models/versions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

    versions: Versions;

    constructor(private authenticationService: AuthenticationService, private authoringService: AuthoringService) {
    }

    ngOnInit() {
        this.authoringService.getVersion().subscribe(
            data => {
                this.versions = data;

                console.log('Reporting UI Version:', data.versions['reporting-ui']);
                console.log('Schedule Manager Version:', data.versions['schedule-manager']);
                console.log('Snowstorm Version:', data.versions['snowstorm']);
            }
        );

        this.authoringService.getUIConfiguration().subscribe(
            data => {
                this.authoringService.uiConfiguration = data;

                // $('<script>').attr({src: 'https://dev-workflow.ihtsdotools.org/s/eae63851c7444cb91c1a2fe49b048a36-T/9qqnuc/713005/8b99849fa1d8eaa169fd4a5dd7253186/2.0.31/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector.js?locale=en&collectorId=dd01c5f4'}).appendTo('body');
                // $('<script>').attr({src: 'https://dev-workflow.ihtsdotools.org/s/8e3b7f1ebfb8a3c28e478b9f9c2355f6-T/xsqioh/78004/8b99849fa1d8eaa169fd4a5dd7253186/2.0.27/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?locale=en-US&collectorId=dd01c5f4'}).appendTo('body');

                if (this.authoringService.uiConfiguration.endpoints.terminologyServerEndpoint.includes('snowowl')) {
                    this.authoringService.getSnowowlConfiguration().subscribe(
                        snowowlData => {
                            $('<script>').attr({src: snowowlData.endpoints.collectorEndpoint}).appendTo('body');
                        });
                } else {
                    $('<script>').attr({src: this.authoringService.uiConfiguration.endpoints.collectorEndpoint}).appendTo('body');
                }
            },
            error => {
                console.error('ERROR: UI Config failed to load');
            });

        this.authenticationService.getLoggedInUser().subscribe(
            user => {
                if (!user) {
                    window.location.replace(this.authoringService.uiConfiguration.endpoints.imsEndpoint
                        + 'login?serviceReferer=' + window.location.href);
                }
            },
            error => {
                window.location.replace(this.authoringService.uiConfiguration.endpoints.imsEndpoint
                    + 'login?serviceReferer=' + window.location.href);
            });


    }
}

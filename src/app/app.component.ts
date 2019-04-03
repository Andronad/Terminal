import {Component} from '@angular/core';
import {MyServiceService} from "./services/my-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularTest2';
  command = '';
  response= '';
  commanddb2='';
  responsedb2='';
  commandftp='';
  responseftp='';

  constructor(private service: MyServiceService) {
  }

  click(): void {
    this.service.submitCommand(this.command).subscribe(x => this.response=x.body.response);

  }
  clickdb2(): void {
    this.service.submitCommandDB2(this.commanddb2).subscribe(x => this.responsedb2=x.body.response);

  }
  clickftp(): void {
    this.service.submitCommandFTP(this.commandftp).subscribe(x => this.responseftp=x.body.response);

  }
}

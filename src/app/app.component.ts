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

  constructor(private service: MyServiceService) {
  }

  click(): void {
    this.service.submitCommand(this.command).subscribe(x => console.log(x.body.response));

  }
}

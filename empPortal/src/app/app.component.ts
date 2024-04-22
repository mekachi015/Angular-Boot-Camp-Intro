import { Component } from '@angular/core';

//defines behaviour an structure of a specific component

//Think of it as a brain
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'empPortal';
}

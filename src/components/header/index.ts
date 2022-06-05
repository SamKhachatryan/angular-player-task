import { Component } from '@angular/core';

import Data from '../../assets/data.json';

@Component({
  selector: 'app-header',
  templateUrl: './template.html',
  styleUrls: ['./style.scss']
})
export class AppHeader {
  title = Data.title;
}

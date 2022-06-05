import { Component, ViewEncapsulation } from '@angular/core';

import Data from '../../assets/data.json';

@Component({
  selector: 'app-footer',
  templateUrl: './template.html',
  styleUrls: ['./style.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppFooter {
  title = Data.help;
}

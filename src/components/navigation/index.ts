import { Component } from '@angular/core';

import Data from '../../assets/data.json';

@Component({
  selector: 'app-navigation',
  templateUrl: './template.html',
  styleUrls: ['./style.scss']
})
export class AppNavigation {
  pages = Data.page.map((_: unknown, index: number) => index + 1);
}

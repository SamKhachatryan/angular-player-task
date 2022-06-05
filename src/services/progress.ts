import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import Data from '../assets/data.json';

@Injectable({
  providedIn: 'root',
})
export class ProgressService {

  percent = new BehaviorSubject(0);
  viewedVideos: string[] = [];

  constructor() { }
  
  viewVideo(url: string) {
    const videosCount = Data.page.length * 2;
    !this.viewedVideos.includes(url) && this.viewedVideos.push(url);

    this.percent.next(this.viewedVideos.length * 100 / videosCount);
  }
}
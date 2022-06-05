import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgressService } from 'src/services/progress';

import Data from '../../assets/data.json';
import { IVideoData, IVideoJSONData } from './types';

@Component({
  selector: 'app-player',
  templateUrl: './template.html',
  styleUrls: ['./style.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppPlayer implements OnInit {
  constructor(private route: ActivatedRoute, private progressService: ProgressService) {
    this.filledPercent = this.progressService.percent.value;
  }

  @ViewChild('letterAudio') letterAudioRef!: ElementRef<HTMLAudioElement>;
  @ViewChild('itemAudio') itemAudioRef!: ElementRef<HTMLAudioElement>;

  letterInfo?: IVideoData;
  itemInfo?: IVideoData;

  filledPercent: number;

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      const _pageNum = +(paramMap.get('pageNum') || 0);

      if (!_pageNum) return;

      const [_letterInfo, _itemInfo] = Data.page[_pageNum].images.item;
      this.letterInfo = this.jsonDataToModel(_letterInfo);
      this.itemInfo = this.jsonDataToModel(_itemInfo);
    });

    this.progressService.percent.subscribe(value => this.filledPercent = value);
  }

  private jsonDataToModel(info: IVideoJSONData) {
    return {
      text: info.text,
      trans: info.text_trans,
      poster: info.image.file,
      audio: info.image.audio,
      video: info.video,
    };
  }

  returnPoster(e: MouseEvent) {
    const elem = e.target as HTMLVideoElement;
    elem.src = elem.src;
  }

  playVideo(e: MouseEvent, audioRef: ElementRef<HTMLAudioElement>) {
    const elem = e.target as HTMLVideoElement;
    elem.play();
    audioRef.nativeElement.play();
    this.progressService.viewVideo(elem.src);
  }
}

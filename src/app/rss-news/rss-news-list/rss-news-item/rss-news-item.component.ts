import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RssNews} from '../../../model/rss-news-model';

@Component({
  selector: 'app-rss-news-item',
  templateUrl: './rss-news-item.component.html',
  styleUrls: ['./rss-news-item.component.css']
})
export class RssNewsItemComponent {
  @Input() rssNews: RssNews;
  @Output() newsSelected = new EventEmitter<boolean>();

  onUserInput(event): void {
    this.rssNews.title = event.target.value;
  }

  onNewsSelected(): void {
    this.rssNews.selected = !this.rssNews.selected;
  }

}

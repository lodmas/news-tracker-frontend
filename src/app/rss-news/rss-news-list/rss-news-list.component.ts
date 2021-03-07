import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RssNews} from '../../model/rss-news-model';
// import 'lodash';
import { random } from 'lodash';

// declare var _: any;

@Component({
  selector: 'app-rss-news-list',
  templateUrl: './rss-news-list.component.html',
  styleUrls: ['./rss-news-list.component.css']
})
export class RssNewsListComponent {
  selected = false;
  @Input() rssNewsList = [];
  newTitle: string;
  newDescription: string;
  newLink: string;
  @Output() newsAdded = new EventEmitter<RssNews>();

  onNewsSelected(event: boolean): void {
    this.selected = event;
  }

  onAddNews(): void {
    const newsToAdd = new RssNews(this.newTitle, this.newDescription, this.newLink);
    this.rssNewsList.push(newsToAdd);
    this.newsAdded.emit(newsToAdd);
    // const aNumber = _.random(1, 10);
    const aNumber = random(1, 10);
    console.log(aNumber);
  }
}

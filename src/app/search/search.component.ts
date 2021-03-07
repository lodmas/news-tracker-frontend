import {Component, Inject, Input, OnInit} from '@angular/core';
import {RssNews} from '../model/rss-news-model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() searchElement: string;
  @Input() rssNewsList: RssNews[];
  @Input() active = false;

  ngOnInit(): void {
  }

  onNewsWasAdded(newsAdded: RssNews): void {
    this.rssNewsList.push(newsAdded);
    console.log(this.rssNewsList);
  }

}

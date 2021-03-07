import {Injectable} from '@angular/core';
import {AbstractService} from './abstract.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RssNews} from '../model/rss-news-model';

@Injectable()
export class RssTrackerService extends AbstractService{
  FETCH_RSS_NEWS_BY_KEYWORD = '/news';

  constructor(private http: HttpClient) {
    super();
  }

  fetchRssNewsByKeyword(): Observable<Map<string, RssNews[]>> {
    return this.http.get<Map<string, RssNews[]>>
        (this.BASEURL + this.FETCH_RSS_NEWS_BY_KEYWORD,
        {headers: this.getHeaders()});
  }

}


import {Component, OnInit} from '@angular/core';
import {RssNews} from '../model/rss-news-model';
import {RssTrackerService} from '../services/rss-tracker.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  newsMap: Map<string, RssNews[]>;
  newsList: RssNews[];
  chosenKeyword = 'All';

  constructor(private rssTrackerService: RssTrackerService) {
  }

  ngOnInit(): void {
    // this.newsMap = new Map([
    //   ['Economia', [
    //     new RssNews('Title1', 'Description1', 'Link1'),
    //     new RssNews('Title2', 'Description2', 'Link2'),
    //     new RssNews('Title3', 'Description3', 'Link3'),
    //     new RssNews('Title4', 'Description4', 'Link4'),
    //     new RssNews('Title5', 'Description5', 'Link5'),
    //   ]],
    //   ['Europa', [
    //     new RssNews('Title10', 'Description10', 'Link10'),
    //     new RssNews('Title11', 'Description11', 'Link11'),
    //     new RssNews('Title12', 'Description12', 'Link12'),
    //     new RssNews('Title13', 'Description13', 'Link13'),
    //     new RssNews('Title14', 'Description14', 'Link14'),
    //   ]],
    //   ['Liberalismo', [
    //     new RssNews('Title20', 'Description20', 'Link20'),
    //     new RssNews('Title21', 'Description21', 'Link21'),
    //     new RssNews('Title22', 'Description22', 'Link22'),
    //     new RssNews('Title23', 'Description23', 'Link23'),
    //     new RssNews('Title24', 'Description24', 'Link24'),
    //   ]],
    // ]);

    this.newsMap = new Map([]);
    this.newsList = [];
    // this.newsMap.forEach(value => this.newsList.push(...value.values()));
  }

  // // contentChildren are set
  // ngAfterContentInit(): void {
  //   // get all active tabs
  //   const activeTabs = this.tabs.filter((tab) => tab.active);
  //
  //   // if there is no active tab set, activate the first
  //   if (activeTabs.length === 0) {
  //     this.selectTab(this.tabs.first);
  //   }
  // }

  // addSearchTab(searchComponent: SearchComponent): void {
  //   this.tabs.push(searchComponent);
  // }



  getNewsList(): RssNews[] {
      return this.newsList;
  }

  selectTab(): void {
    // deactivate all tabs
    // this.tabs.toArray().forEach(tab => tab.active = false);
    //
    // // activate the tab the user has clicked on.
    // searchComponent.active = true;
  }

  onChooseKeyword(key: string): void {
    this.chosenKeyword = key;
  }

  getSearchElement(): string {
    return this.chosenKeyword;
  }

  getNewsBySearchElement(): RssNews[] {
    if (this.chosenKeyword === 'All') {
      return this.newsList;
    } else if (this.newsMap[this.chosenKeyword] != null) {
      return this.newsMap[this.chosenKeyword];
    } else {
      return [];
    }
  }

  loadNews(): void {
    this.rssTrackerService.fetchRssNewsByKeyword()
      .subscribe(
        (news: Map<string, RssNews[]>) => {
          this.newsMap =  news;
          this.newsMap.forEach(value => this.newsList.push(...value.values()));
        }
      );
  }
}

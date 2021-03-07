import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RssNewsItemComponent} from './rss-news/rss-news-list/rss-news-item/rss-news-item.component';
import {FormsModule} from '@angular/forms';
import {RssNewsListComponent} from './rss-news/rss-news-list/rss-news-list.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { TabsComponent } from './tabs/tabs.component';
import { SearchComponent } from './search/search.component';
import {HttpClientModule} from '@angular/common/http';
import {RssTrackerService} from './services/rss-tracker.service';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        RssNewsListComponent,
        RssNewsItemComponent,
        TabsComponent,
        SearchComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    RssTrackerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

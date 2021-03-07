import {HttpHeaders} from '@angular/common/http';

export class AbstractService {
  PROTOCOL = 'http://';
  HOST = 'localhost';
  // HOST = '35.158.129.219';
  PORT = '8083';
  CONTEXT = '/rss-tracker';
  BASEURL = this.PROTOCOL + this.HOST + ':' + this.PORT + this.CONTEXT;

  protected getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    return headers;
  }
}

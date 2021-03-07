export class RssNews {
  public title: string;
  public description: string;
  public link: string;
  public selected = false;

  constructor(title: string, description: string, link: string) {
    this.title = title;
    this.description = description;
    this.link = link;
  }

}

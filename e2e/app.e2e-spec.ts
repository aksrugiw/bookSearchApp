import { BookGApiPage } from './app.po';

describe('book-g-api App', function() {
  let page: BookGApiPage;

  beforeEach(() => {
    page = new BookGApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

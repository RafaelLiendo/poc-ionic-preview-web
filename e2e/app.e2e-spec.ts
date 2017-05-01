import { PocIonicPreviewWebPage } from './app.po';

describe('poc-ionic-preview-web App', () => {
  let page: PocIonicPreviewWebPage;

  beforeEach(() => {
    page = new PocIonicPreviewWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

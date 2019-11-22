import { SephoraTestPage } from './app.po';

describe('sephora-test App', () => {
  let page: SephoraTestPage;

  beforeEach(() => {
    page = new SephoraTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

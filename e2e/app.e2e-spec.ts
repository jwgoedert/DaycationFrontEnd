import { Daycation1Page } from './app.po';

describe('daycation1 App', () => {
  let page: Daycation1Page;

  beforeEach(() => {
    page = new Daycation1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

import { NgBankDashboardPage } from './app.po';

describe('ng-bank-dashboard App', () => {
  let page: NgBankDashboardPage;

  beforeEach(() => {
    page = new NgBankDashboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

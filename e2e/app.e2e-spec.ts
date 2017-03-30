import { MattsServiceTrackerPage } from './app.po';

describe('matts-service-tracker App', () => {
  let page: MattsServiceTrackerPage;

  beforeEach(() => {
    page = new MattsServiceTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('aap works!');
  });
});

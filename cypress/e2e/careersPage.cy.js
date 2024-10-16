import HomePage from '../pages/HomePage';
import CareersPage from '../pages/CareersPage';
import { JOB_CATEGORIES, TEAMS, LOCATIONS } from '../fixtures/constants';

describe('Careers Page Tests', () => {
  const homePage = new HomePage();
  const careersPage = new CareersPage();

  beforeEach(() => {
    homePage.visit();
    cy.declineAllCookies();
    homePage.navigateToCareers();
  });

  it('Should assert that the team for Senior QA Position is EtonDigital', () => {
    careersPage.selectCategoryOrLocation(JOB_CATEGORIES.QA);
    careersPage.clickShowMoreIfVisible();
    careersPage.getTeamNameForSelectedPosition('Senior QA Developer/QA Team Lead').then((teamName) => {
      expect(teamName.trim()).to.equal(TEAMS.SENIOR_QA);
    });
  });

  it('Should save all titles for careers in Serbia to a text file', () => {
    careersPage.selectCategoryOrLocation(LOCATIONS.SERBIA);
    careersPage.clickShowMoreIfVisible();
    careersPage.savePositionsToFile('serbia_positions.txt');
  });
});

import loginPage from "./pages/loginPage";

describe('login page', () => {

  beforeEach(() => {
    loginPage.visit();
  });

  it('shoud allow a user to login with valid credentials', () => {

    cy.fixture('user').then((user) => {
      loginPage.login(user.valid_user.email, user.valid_user.password);
      loginPage.verifyHomepage();
    });

  });

  it('shoud allow a user to login with invalid credentials', () => {
      loginPage.login('practice@yopmail.com', 'practic');
      cy.get('[data-testid="login-submit"]').click();
      cy.get('[data-testid="alert-message"]').should('be.visible');
  });

  it('shoud display errors with empty or invalid credentials', () => {
      loginPage.login('practice@', ' ');
      cy.get('[data-testid="login-submit"]').click();
      cy.get(':nth-child(1) > .invalid-feedback').should('be.visible').and('contain', 'Email address is invalid');
      cy.get(':nth-child(2) > .invalid-feedback').should('be.visible').and('contain', 'Password should be between 6 and 30 characters');
  });

})
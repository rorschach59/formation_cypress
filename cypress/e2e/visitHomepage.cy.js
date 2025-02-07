

describe('homepage', () => {

  beforeEach(() => {
    cy.visit('/');
  });

context('Shoud display the correct title using different methods', () => {
  it('should display the correct title using contains', () => {
    cy.get('.fw-bold.lh-1').contains('Welcome to Notes App');
  });

  it('should display the correct title using should', () => {
    cy.get('.fw-bold.lh-1').should('contain', 'Welcome to Notes App');
  });
})

context.only('Navigation test', () => {
  it('should navigate to login page when clicking on login button', () => {
    cy.get('[data-testid="open-login-view"]').find('a').contains('Login').click();
    cy.url().should('include', '/login');
    cy.get('form').should('be.visible');
  });

it('should navigate to the create account page when clicking on create account button', () => {
    cy.get('[data-testid="open-register-view"]').click();
    cy.url().should('include', '/register');
    cy.get('form').should('be.visible');
});

})

})
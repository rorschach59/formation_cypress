const { expect } = require("chai");

describe('API get notes with spy and stub after login', () => {

    beforeEach(() => {
        cy.visit('/login');

        cy.intercept('GET', 'https://practice.expandtesting.com/notes/api/notes').as('allNotes');

        cy.fixture('user').then((user) => {
            cy.login(user.valid_user.email, user.valid_user.password);
            cy.get('[data-testid="home"]').should('contain', 'MyNotes');
        });
    });
    
    it('API get notes with spy after login', () => {
       cy.wait('@allNotes').then((interception) => {
            expect(interception.response.statusCode).to.eq(200);
            expect(interception.response.body.data).to.be.an('array');
       }); 
    });
    
});
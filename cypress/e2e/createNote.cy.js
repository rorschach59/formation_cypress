describe('Create a note and verify it exists', () => {

    beforeEach(() => {
        cy.fixture('user').then((user) => {
            cy.visit('/login');
            cy.login(user.valid_user.email, user.valid_user.password);
        });

        cy.get('[data-testid="add-new-note"]').click();
    });

    it('Creates a note in the Home category and checks its presence in Home and All tabs', () => {
        cy.get('[data-testid="note-category"]').select('Home');
        cy.get('[data-testid="note-completed"]').check();
        cy.get('[data-testid="note-title"]').type('Home Note Title');
        cy.get('[data-testid="note-description"]').type('This is a note for the Home category');
        cy.get('[data-testid="note-submit"]').click();

        cy.get('[data-testid="category-all"]').click();
        cy.contains('Home Note Title').should('exist');

        cy.get('[data-testid="category-home"]').click();
        cy.contains('Home Note Title').should('exist');
        cy.contains('This is a note for the Home category').should('exist');

        cy.get('[data-testid="toggle-note-switch"]').should('have.css', 'background-color', 'rgb(0, 0, 255)');

    });

});
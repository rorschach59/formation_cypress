class LoginPage {
    
    get emailInput()
    {
        return cy.get('[data-testid="login-email"]');
    }
    
    get passwordInput()
    {
        return cy.get('[data-testid="login-password"]');
    }
    
    get submitButton()
    {
        return cy.get('[data-testid="login-submit"]');
    }

    visit()
    {
        return cy.visit('/login');
    }

    login(email, password)
    {
        this.emailInput.type(email);

        if(password) {
            this.passwordInput.type(password);
        }

        this.submitButton.click();

    }

    verifyHomepage()
    {
        return cy.get('[data-testid="home"]').should('contain', 'MyNotes');
    }
}

export default new LoginPage();
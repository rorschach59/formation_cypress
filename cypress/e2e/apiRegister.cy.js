const { expect } = require("chai");


describe('API of account creation', () => {
    const apiUrl = 'https://practice.expandtesting.com/notes/api/users/register';

    it('should successfully create an account', () => {
        
        const uniqueEmail = 'testUser' + Date.now() + '@gmail.com';    

        cy.request({
            method: 'POST',
            url: apiUrl,
            body: {
                'email': uniqueEmail,
                'password': 'pass123',
                'confirm_password': 'pass123',
                'name': 'toto'
            }
        })
        .then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('message');
        });

    });

    it('should failed to create existing account', () => {
        cy.fixture('user').then((user) => {
            const existEmail = user.valid_user.email;

            cy.request({
                method: 'POST',
                url: apiUrl,
                body: {
                    'email': existEmail,
                    'password': 'pass123',
                    'confirm_password': 'pass123',
                    'name': 'toto'
                },
                failOnStatusCode: false
            })
            .then((response) => {
                expect(response.status).to.eq(409);
                expect(response.body).to.have.property('message', 'An account already exists with the same email address');
            });

        });
    })


});
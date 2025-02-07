const { expect } = require("chai");

describe('API login and retrieve notes', () => {

    let authToken;
    const apiUrl = 'https://practice.expandtesting.com/notes/api/users/login';

    it('should login via API and retrieve a token', () => {
        cy.fixture('user')
            .then((user) => {
                cy.request({
                    method: 'POST',
                    url: apiUrl,
                    body: {
                        'email': user.valid_user.email,
                        'password': user.valid_user.password 
                    },
                })
                .then((response) => {
                    expect(response.status).to.eq(200);
                    authToken = response.body.data.token;
                    expect(authToken).to.not.be.empty;
                });
        });
    });

    it('should retrieve all notes', () => {
        cy.request({
            method: 'GET',
            url: 'https://practice.expandtesting.com/notes/api/notes',
            headers: {
                'x-auth-token': authToken
            },
        })
        .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data).to.be.an('array');
        });
    });
});
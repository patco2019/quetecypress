let user = require('../fixtures/userData');
const firstName = user.firstName;
const lastName = user.lastName;
const email = user.email;
const pwd = user.password;


describe('Back Marcket', () => {
    it('Inscription réussie', () => {
      cy.visit('https://preprod.backmarket.fr/')
      cy.get('https://preprod.backmarket.fr/register').should('contain', 'register')
      cy.get('#firstName').type(firstName)
      cy.get('#lastName').type(lastName)
      cy.get('#signup-email').type(email)
      cy.get('#signup-password').type(pwd)
      cy.get()
    })
  })
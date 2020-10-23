/// <reference types="cypress" />

describe('My First Test', () => {
    it('Does not do much!', () => {
        cy.visit('http://localhost:3000');

        cy.get('#app > button').click()
        cy.wait(2000);
        cy.get('#message').contains("Hello, World!")
    })
})

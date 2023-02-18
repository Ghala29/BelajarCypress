Cypress.Commands.add('Login', () => {   
    cy.get('#email').type("ghalasudana24@gmail.com")
    cy.get('#password').type("Ghala2022")
    cy.get('#root > div > div > div > div.css-1w7v3tn > div > button').click()
    cy.contains("kasirAja")
})
describe("Visit: https://example.cypress.io", ()=>{
    it('should contain url/login', ()=>{
        cy.visit('https://example.cypress.io/')
        cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(3) > ul > li:nth-child(1) > a').click()
        cy.url().should('include', '/commands/actions')
        cy.get('.action-email').type('fake@email.com').should('have.value', 'fake@email.com')

    })
})
    //  it('user success login to kasir aja', ()=>{
    //     //Open Kasir aja login page 
    //     cy.visit('https://kasirdemo.belajarqa.com')
    //     cy.url().should('include', '/login')

    //     //Input Username and password
    //     cy.get('#email').type("ghalasudana24@gmail.com")
    //     cy.get('#password').type("Ghala2022")

    //     //Click login 
    //     cy.get('#root > div > div > div > div.css-1w7v3tn > div > button').click()
        
    //     //Assert dashboard after login
    //     cy.url().should('include','/dashboard')
    //     cy.contains("kasirAja")
    // })

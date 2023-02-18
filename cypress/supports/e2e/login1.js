describe("Open Kasir AJA URL", ()=>{
    it('should contain url/login', ()=>{
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.url().should('include', '/login')
    })
})
     it('user success login to kasir aja', ()=>{
        //Open Kasir aja login page 
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.url().should('include', '/login')

        //Input Username and password
        cy.get('#email').type("ghalasudana24@gmail.com")
        cy.get('#password').type("Ghala2022")

        //Click login 
        cy.get('#root > div > div > div > div.css-1w7v3tn > div > button').click()
        
        //Assert dashboard after login
        cy.url().should('include','/dashboard')
        cy.contains("kasirAja")
    })

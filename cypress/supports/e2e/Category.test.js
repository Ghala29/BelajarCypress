        //Import Login.JS
        import './Login'
        
        describe("Add Category", ()=>{
        it('Berhasil Add Category', ()=>{
        cy.Login()    
        //Click Category 
        cy.get('#root > div > div > div.css-tnxwfz > div > a:nth-child(6) > div > div > div').click()
        cy.url().should('include','/categories')
        cy.contains("dashboard / kategori")

        //Click Tambah 
        cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > a').click()
        cy.url().should('include','categories/create')
        cy.contains("dashboard / kategori / baru")

        //Isi Kategori 
        cy.get('#nama').type('Alat Rumah Tangga')
        cy.get('#deskripsi').type('Perlengkapan Alat Rumah Tangga')
        //Clik Simpan
        cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > button').click()
        //Notification Should Be visible
        cy.get('#chakra-toast-manager-top-right').should('be.visible')
    })
})
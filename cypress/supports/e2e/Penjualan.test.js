        //Import Login.JS
        import './Login'


        describe("Add Penjualan", ()=>{
        it('Berhasil Add Penjualan', ()=>{
        cy.Login()

         //Click Penjualan
         cy.get('#root > div > div > div.css-tnxwfz > div > a:nth-child(4) > div').click()
         cy.url().should('include','/sales')
         cy.contains("dashboard / penjualan")

         //click tambah 
         cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > a').click()
         cy.url().should('include','/sales/create')
         cy.contains("dashboard / penjualan / baru")

         //click produk 
         cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div > div.css-k008qs > div.css-1ba3qpq > div.css-1xhj18k > button').click()
         cy.contains('odol')
         .click({ force: true });

         //isi jumlah 
         cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div > div.css-k008qs > div.css-1ba3qpq > table > tbody > tr > td:nth-child(4) > input').clear()
         cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div > div.css-k008qs > div.css-1ba3qpq > table > tbody > tr > td:nth-child(4) > input').type('2')

         //input jumlah bayar 
         cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div > div.css-1em21z > div > div > div > input').type('30000')
        
         //klik bayar 
         cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div > div.css-1em21z > div > div > button').click()
        
         //assert contains 
         cy.contains('transaksi sukses')
         cy.contains('total')
         cy.contains('20.000')
         cy.contains('bayar')
         cy.contains('30.000')
         cy.contains('kembalian')
         cy.contains('10.000')
    })
})
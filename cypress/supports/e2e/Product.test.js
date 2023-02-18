         //Import Login.JS
         import './Login'
         describe("Add Product", ()=>{
         it('Berhasil Add Product', ()=>{
         cy.Login()

         //Click Product
         cy.get('#root > div > div > div.css-tnxwfz > div > a:nth-child(7) > div > div > div').click()
         cy.contains('dashboard / produk')
         cy.url().should('include', '/products')

         //click tambah
         cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > a').click()
         cy.contains('dashboard / produk / baru')
         cy.url().should('include', '/products/create')

         //Isi Product 
         cy.get('#kode').clear()
         cy.get('#kode').type('212')
         cy.get('#nama').type('odol')
         cy.get('#deskripsi').type('buat sikat gigi')
         cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > div:nth-child(4)').type("9000")
         cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > div:nth-child(5)').type("10000")
         cy.get('#stok').clear()
         cy.get('#stok').type('100')
         cy.get('#kategori').click()
         cy.contains('Alat Rumah Tangga')
         .click({ force: true });
         cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > button').click()
         cy.wait(500)
})
})
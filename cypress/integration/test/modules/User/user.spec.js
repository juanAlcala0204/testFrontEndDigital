describe('users', () => { 

    // 1. We need verify that the images element was created.
    it('Visit the User page', () => {
        cy.visit('http://localhost:3000/Users');
     })
    
     // 2. We need verify that fields was created.
     it('The table was created ', () => {
        cy.get('#tblUsers').get('div').should('have.class', 'tabulator')
    })

    // 2. We need verify that the request of user was success.
    it('Verify Request Get Users has data', () => {
        cy.intercept({
            method: 'GET',
            url: '/users',
          }).as('apiCheck')

          cy.wait('@apiCheck').then((interception) => {
            assert.isNotNull(interception.response.body, '1st API call has data')
          })
    })


});
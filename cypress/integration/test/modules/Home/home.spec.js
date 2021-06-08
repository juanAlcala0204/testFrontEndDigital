describe('Home', () => { 

    // 1. We need verify  the page load with correct form.
    it('Visit the Home page', () => {
        cy.visit('http://localhost:3000/');
     })

    // 2. We need verify that the images element was created.
     it('Contains Img', () => {
        cy.get('#blockImage')
        .get('img')
        .should('have.class', 'card-img-top')
     })

});
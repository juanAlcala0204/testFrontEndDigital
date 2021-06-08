describe('Post', () => { 

    // 1. We need verify that the images element was created.
    it('Visit the Home page', () => {
        cy.visit('http://localhost:3000/Posts');
     })
    
     // 2. We need verify that fields was created.
     it('has a title input field with placeholder', () => {
        cy.get('form').find('input#inpTitle').should('have.attr', 'placeholder', 'Escriba el título de la publicación.')
    })
    it('has a description input field with placeholder', () => {
        cy.get('form').find('input#inpDescription').should('have.attr', 'placeholder', 'Escriba la descripción de la publicación.')
    })

    // 3. We need test that the Validation of empty data is working
    it('Validation that need write data in the inputs.', () => {
        cy.get('#btnAddPost').click()

        cy.get('form').find('span').should('have.class', 'errorField', 'Este campo es requerido.')

    })


     // 4. Validate Add Post is success.
     it('validate function create data', () => {
        cy.get('#inpTitle')
            .type("Hola Publicación")
            .should('have.value', "Hola Publicación")
        
        cy.get('#inpDescription')
            .type("Description Test hello")
            .should('have.value', "Description Test hello")
        
        cy.get('#btnAddPost').click()

        cy.contains('Proceso Exitoso!')
    })



});
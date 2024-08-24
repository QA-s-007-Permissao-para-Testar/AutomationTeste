describe('Review de Produtos', () => {
    before(() => {
        
        cy.visit('https://automationexercise.com/')
        cy.get('a[href="/login"]').click()
        cy.get('[data-qa="login-email"]').type('fulano@fulano.com')
        cy.get('[data-qa="login-password"]').type('1234')
        cy.get('[data-qa="login-button"]').click()
    });

    it('Deve permitir ao usuário escrever e submeter um review', () => {

        cy.contains('Products').click();
        cy.get('a[href="/product_details/1"]').click(); 
        cy.url().should('include', '/product_details/1'); 
        cy.contains('Write Your Review').should('be.visible');

    
        cy.get('input#name').type('Avanti Atlantico'); 
        cy.get('input#email').type('fulano@fulano.com'); 
        cy.get('textarea#review').type('Ótimo produto, excelente qualidade!');

        cy.get('button#button-review').click();

        cy.contains('Thank you for your review').should('be.visible');
    });
});

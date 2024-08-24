/// <reference types="cypress" />

describe('CENÁRIO 04 - Produto: Detalhes do produto pagina Home', () => {

  before(() => {

    cy.visit('https://automationexercise.com/')
    cy.get('a[href="/login"]').click()
    cy.get('[data-qa="login-email"]').type('fulano@fulano.com')
    cy.get('[data-qa="login-password"]').type('1234')
    cy.get('[data-qa="login-button"]').click()

  })


  it('Deve exibir os detalhes do produto corretamente', () => {

    cy.get('a[href="/product_details/2"]').click();

    //verificar produto
    cy.url().should('include', '/product_details/2');
    cy.get('.product-information').should('contain.text', 'Men Tshirt');
    cy.get('span').should('contain.text', 'Rs. 400');
    cy.get('img[src="/get_product_picture/2"]').should('be.visible');

  });
});



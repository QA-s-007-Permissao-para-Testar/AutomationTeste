/// <reference types="cypress" />

describe('Adicionar Produto ao Carrinho - Página Home', () => {
    before(() => {
      cy.visit('https://automationexercise.com/');
      cy.get('a[href="/login"]').click();
      cy.get('[data-qa="login-email"]').type('fulano@fulano.com');
      cy.get('[data-qa="login-password"]').type('1234');
      cy.get('[data-qa="login-button"]').click();
    });
  
    it('Deve permitir ao usuário adicionar um produto ao carrinho', () => {

        cy.visit('https://automationexercise.com/');
  
      cy.get('a[data-product-id="1"]').first().should('be.visible').click()
      cy.get('.modal-title').should('contain.text', 'Added!')
      cy.get('a[href="/view_cart"]').first().click()

      // Verifica se o produto está no carrinho
      cy.get('img[src="get_product_picture/1"]').should('be.visible');

    });

  });
  
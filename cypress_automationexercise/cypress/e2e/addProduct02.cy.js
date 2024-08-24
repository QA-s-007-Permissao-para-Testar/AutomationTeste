/// <reference types="cypress" />

describe('CENÁRIO 04 - Produto: Adicionar Produto ao Carrinho na Página Home', () => {

    before(() => {
       cy.visit('https://automationexercise.com/')
       cy.get('a[href="/login"]').click()
  
       cy.get('[data-qa="login-email"]').type('fulano@fulano.com')
       cy.get('[data-qa="login-password"]').type('1234')
       cy.get('[data-qa="login-button"]').click()
    })
  
   it('Deve adicionar o produto "Blue Top" ao carrinho e verificar a quantidade correta', () => {
     cy.visit('https://automationexercise.com/')
  
     cy.get('a[href="/view_cart"]').first().click()
  
     cy.contains('Cart is empty!').then($emptyMessage => {
       if ($emptyMessage.length > 0) {
         // Carrinho está vazio, adicionar o produto
         cy.visit('https://automationexercise.com/')
         cy.get('a[data-product-id="1"]').first().should('be.visible').click()
         cy.get('.modal-title').should('contain.text', 'Added!')
         cy.get('a[href="/view_cart"]').first().click()
  
         cy.contains('Shopping Cart').should('be.visible')
         cy.contains('Blue Top').should('be.visible')
  
         // Verificar a quantidade do produto
         cy.get('tr').filter((index, element) => {
           return Cypress.$(element).text().includes('Blue Top')
         }).find('td.cart_quantity button').invoke('text').then(text => {
           const quantity = parseInt(text.trim(), 10) || 0
           cy.wrap(quantity).should('equal', 1)
         })
       } else {
         // Carrinho já tem o produto, verificar a quantidade
         cy.contains('Blue Top').parents('tr').find('td.cart_quantity button').invoke('text').then(initialQuantityText => {
           const initialQty = parseInt(initialQuantityText.trim(), 10) || 0
  
           cy.visit('https://automationexercise.com/')
           cy.get('a[data-product-id="1"]').first().should('be.visible').click()
           cy.get('.modal-title').should('contain.text', 'Added!')
           cy.get('a[href="/view_cart"]').first().click()
  
           cy.contains('Blue Top').parents('tr').find('td.cart_quantity button').invoke('text').then(newQuantityText => {
             const newQty = parseInt(newQuantityText.trim(), 10)
             cy.wrap(newQty).should('equal', initialQty + 1)
           })
         })
       }
     })
   })
})

// Obter Saldo //

Cypress.Commands.add('getBalance', () =>{

    cy.get('span[id="account-balance"]').should('be.visible')
    cy.log('Elemento Saldo Encontrado')

})
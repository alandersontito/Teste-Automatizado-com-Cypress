/// <reference types="cypress"/>


// Login - Path Happy

describe('Paybank - Path Happy', () => {
    it('Deve autenticar e logar o usuário corretamente', () => {

        cy.accessPage()
        cy.fillCPF()
        cy.fillPassword()
        // cy.Rcode2FA()                 // 2FA via REDIS
        cy.code2FA()              // 2FA via BD
        cy.getBalance()             // log
    })
})
    
// Login - CPF Incorreto

// describe('Paybank - Preenchendo com CPF Incorreto', () => {
//     it('Deve retornar ao usuário que o cpf foi preenchido incorretamente', () => {

//         cy.accessPage()
//         cy.fillCPFInc()
//         cy.invalidCPF() // log
//     })
// })

// // Login - Senha incorreta

// describe('Paybank - Preenchendo Senha incorreta', () => {
//     it('Deve retornar ao usuário a mensagem de acesso negado', () => {

//         cy.accessPage()
//         cy.fillCPF()
//         cy.fillPasswordInc()
//         cy.deniedAcess() // log
//     })
// })

// // Login - Código Incorreto

// describe('Paybank - Preenchendo Código Incorreto', () => {
//     it('Deve retornar ao usuário a mensagem de código inválido', () => {

//         cy.accessPage()
//         cy.fillCPF()
//         cy.fillPassword()
//         cy.codeInc()
//         cy.invalidCode() // log
//     })
// })

// // Login - Corrigir Senha

// describe('Paybank - Corrigindo a senha', () => {
//     it('Botão deve limpar a senha incorreta', () => {

//         cy.accessPage()
//         cy.fillCPF()
//         cy.fillPasswordInc()
//         cy.deniedAcess() // log
//         cy.clsButton()
//     })
// })
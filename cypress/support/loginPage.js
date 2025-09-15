// Massa de Testes //

const usuario = {
    cpf: '00000014141',
    senha: '147258'
}

const noUser = {
    cpfInc: '01472583690',
    senhaInc: '123456'
}

//Alert Acesso Negado - Senha // 

Cypress.Commands.add('deniedAcess', () => {

    cy.get('span[class="text-sm"]').should('be.visible','Acesso negado. Por favor, tente novamente.')
    cy.log('Acesso Negado')

})

//Alert CPF inválido - CPF // 

Cypress.Commands.add('invalidCPF', () => {

    cy.get('span[class="text-error text-sm mt-1 ml-1"]').should('be.visible')
    cy.log('CPF inválido')

})

//Alert Código Inválido - 2FA // 

Cypress.Commands.add('invalidCode', () => {

    cy.get('span[class="text-sm"]').should('be.visible')
    cy.log('Código inválido')

})

// Acesso a Página //

Cypress.Commands.add('accessPage', () =>{
    
    cy.visit('http://paybank-mf-auth:3000/')
    
})

// Preencher CPF Correta //

Cypress.Commands.add('fillCPF', () => {

    cy.get('input[placeholder="Digite seu CPF"]').type(usuario.cpf)
    cy.get('button[class="btn btn-primary w-full"]').click()

})

// Preencher CPF incorreto //

Cypress.Commands.add('fillCPFInc', () => {

    cy.get('input[placeholder="Digite seu CPF"]').type(noUser.cpfInc)
    cy.get('button[class="btn btn-primary w-full"]').click()

})

// Preencher Senha Correta//

Cypress.Commands.add('fillPassword',() =>{

    cy.get('button[class="btn btn-outline"]')
        for (const digito of usuario.senha) {
            if ('button[class="btn btn-outline"]') {
                cy.contains(digito) .click({multiple:true})
            } 
        }
        cy.get('button[class="btn btn-primary flex-1 "]') .click()

})

// Preencher Senha incorreta //

Cypress.Commands.add('fillPasswordInc', () => {

    cy.get('button[class="btn btn-outline"]')
        for (const digito of noUser.senhaInc) {
            if ('button[class="btn btn-outline"]') {
                cy.contains(digito) .click({multiple:true})
            } 
        }
        cy.get('button[class="btn btn-primary flex-1 "]') .click()

})

// Botão para corrigir senha //

Cypress.Commands.add('clsButton', () => {

    cy.get('button[class="btn btn-neutral w-1/4"]'). click()
    cy.get('div[class="grid grid-cols-5 gap-4"]'). should('be.visible')
    cy.log('Digite novamente')

})

// Código 2FA [PG4] //

// Cypress.Commands.add('code2FA',() =>{

//     cy.intercept('POST', '/api/login').as('codeRequest')
//     cy.wait('@codeRequest', { timeout: 4000 }).then((interception) => {
//     expect(interception.response.statusCode).to.eq(200)
//     cy.log('Resposta:', interception.response.body)
// })

//     cy.task("obtercodigo2FA").then((codigo) =>{
//     cy.log("Código:", codigo);
//     expect(codigo).to.not.be.null
    
//     cy.get('input[class="input input-bordered text-center text-2xl tracking-widest"]').type(codigo)
//     })
    
//     cy.get('button[class="btn btn-primary w-full "]') .click()

// })

// Código 2FA [REDIS] //

Cypress.Commands.add('Rcode2FA', () => {

    //Pegar código
    
    cy.task("get2FAJob").then((job) => {                                 // A const job vai aguardar o getJob
        
        expect(job).to.exist;                                         // A expectativa é que exista um job
        expect(job).to.have.property('code');                   // E que dentro desse job exista o campo code

        const codigo = job.code                              // define-se a constante codigo com os atributos de job.data.code
        cy.log(`Código do 2FA: ${codigo}`);                      // loga no console o código em questão
    
    //Limpar a fila

    cy.task("clear2FAJobs"); 

    // Inserir Código

    cy.get('input[class="input input-bordered text-center text-2xl tracking-widest"]').type(codigo)
    
    cy.get('button[class="btn btn-primary w-full "]') .click()
    
    });
});

// Código 2FA incorreto //

Cypress.Commands.add('codeInc',() =>{
    
    cy.get('input[class="input input-bordered text-center text-2xl tracking-widest"]').type(123456)
    cy.get('button[class="btn btn-primary w-full "]') .click()

})
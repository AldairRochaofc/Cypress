
// criar interação
// AQUI FICA AS MINHAS """AÇÕES""" SEPARADO DOS MEUS ELEMENTOS
// acoes
// acessar login
// preencher login
// tudo começa com a class
// Primeiro sempre vem o site, ou entao bota no beforeeach

const tags = require('./page').Element;
class Script {
    acessarLogin(){
        cy.visit('https://devfinance-agilizei.netlify.app/');

    }
    preencherLogin(){
        cy.contains(tags.criarConta).click();
        cy.get(tags.seuNome).type('Aldas')
        cy.get(tags.Valor).type('1000')
        cy.get(tags.Data).type('2004-04-29');
        cy.contains(tags.Finalizar).click();
        cy.get('[onclick="Transaction.remove(0)"]').click();
           
    }
}
export default new Script();



// Essa classe "Login" será exportada(export) e pode ser utilizada em outros arquivos(default new logon();)

// cy.get('#transaction > .button').click();
//         cy.get('button').click();
//         cy.get('#description').type('Carteira')
//         cy.get('#amount').type('10000')
//         cy.get('#date').type('2004-05-17')
//         cy.get('button').click()


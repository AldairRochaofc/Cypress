const el = require('./commands').Elements

class Calc{
    
    Site(){
        cy.visit('https://calculadora-digital.com.br/');
    }
    Somar(){
        cy.get(el.um).click()
        cy.get(el.mais).click()
        cy.get(el.quatro).click()
        cy.get(el.nove).click()
        cy.get(el.nove).click()
        cy.get(el.calcular).click()
      
    }

}
export default new Calc

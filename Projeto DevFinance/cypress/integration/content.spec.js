/// <reference types="cypress"/>

import Script from '../support/object'
describe('Aplicando Page Object', () => {
    it('Page Objects', () => {
        Script.acessarLogin();
        Script.preencherLogin();
        
    });
});
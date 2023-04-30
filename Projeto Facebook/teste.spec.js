context('AutoLogin Face', () => {
    // Aqui voce nomeia o nome do arquivo pra continuar

    it('Auto Login - Face Local', () => {
        // Aqui você especifica oque você está fazendo
        // it , especifica ser um teste
        // Cy visit ele recebe o diretório do arquivo
        cy.visit('http://127.0.0.1:5501/cypress/integration/index.html');

        // cyget type, tipografa o conteudo escrevendo oque estiver dentro de ('')
        cy.get('#iname').type('Aldair')
        cy.get('#isobre').type('Rocha')
        cy.get('#iemail').type('aldasrochateste@gmail.com')
        cy.get('#ipai').type('Almir')

        cy.get('#imae').type('Celina')
        cy.get('#icpf').type('444.444.444.44')
        cy.get('#itel').type('999999999')
        cy.get('#ifilm').type('Avengers');
        cy.get('#ipassatempo').type('Estudar')
        cy.get('#ibest').type('Jesus');
        cy.get('#idate').type('2004-05-17')
        cy.get('#ipassword').type('123456789')
        cy.get('button').click();
        cy.get('a').click();
        cy.get('#iemail').type('aldasrochateste@gmail.com');
        cy.get('#ipassword').type('123456789')
        cy.get('button').click();

    });
    
});
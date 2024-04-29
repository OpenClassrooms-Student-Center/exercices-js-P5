describe("Exercice 1", ()=>{
    beforeEach(() => {
        cy.visit("/Exercice1");
    })

    it("Should render the heading element", ()=>{
        cy.get('h1').contains('Mon premier Site Web', { matchCase: false })
       // cy.get('h1').should('contain.text', 'Mon premier Site Web', );
    })
    it("Should render the paragraph element", ()=>{
        cy.get('p').contains('Bienvenue sur mon site Web !', {matchCase: false});
    })
})

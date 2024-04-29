describe('Validations Exercice 3: ', () => {
    beforeEach(() => {
        cy.visit("/Exercice3");
    })
    it('Should have blue p', () => {
        cy.get('p').should('have.css', 'color', 'rgb(0, 0, 255)')
    })
    it('Should have Arial font', () => {
        cy.get('p').should('have.css', 'font-family').and('match', /Arial/)
    })
    it('Should have main displayed with flexbox', () => {
        cy.get('p').should('have.css', 'font-size', '16px')
    })
})

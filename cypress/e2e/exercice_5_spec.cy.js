describe('Validations Exercice 5: ', () => {
    beforeEach(() => {
        cy.visit("/Exercice5");
    })
    it('Have an anchor link that leads to Accueil', () => {
        cy.contains('a', 'Accueil', {matchCase: false}).should('have.attr', 'href', '#accueil')
    })
    it('Have an anchor link that leads to À propos', () => {
        cy.contains('a', 'À propos', {matchCase: false}).should('have.attr', 'href', '#a-propos').click()
    })
    it('Have an anchor link that leads to Services', () => {
        cy.contains('a', 'Services', {matchCase: false}).should('have.attr', 'href', '#services')
    })
    it('Have an anchor link that leads to Contact', () => {
        cy.contains('a', 'Contact', {matchCase: false}).should('have.attr', 'href', '#contact')
    })
})

describe('Validations Exercice 4: ', () => {
    beforeEach(() => {
        cy.visit("/Exercice4");
    })
    it('Each element muest have a background color', () => {
        cy.get('header').should('have.css', 'background-color', 'rgb(255, 204, 153)')
        cy.get('main').should('have.css', 'background-color', 'rgb(230, 242, 255)')
        cy.get('aside').should('have.css', 'background-color', 'rgb(179, 217, 255)')
        cy.get('footer').should('have.css', 'background-color', 'rgb(153, 204, 153)')
    })
    it('Should have Bold and centered h1', ()=>{
        cy.get('h1').should('exist')
            .and('have.css', 'font-weight', '700')
            .and('have.css', 'text-align', 'center')
    })
    it('Should have 20px margin on section', () => {
        cy.get('section').should('have.css', 'margin', '20px' )
    })
    it('Should have main displayed with flexbox', () => {
        cy.get('main').should('have.css', 'display', 'flex')
            .and('have.css', 'flex-direction', 'row')
    })
    it('Should have aside tag displayed on left with flex 1', () => {
        cy.get('aside').should('have.css', 'flex', '1 1 0%')
    })
    it('Should have section tag displayed on left with flex 3', () => {
        cy.get('section').should('have.css', 'flex', '3 1 0%')
    })
    it('Should have a Gray border of 1px', () => {
        cy.get('aside').should('have.css', 'border-style', 'solid')
            .and('have.css', 'border-color', 'rgb(204, 204, 204)')
            .and('have.css', 'border-width', '1px')
    })
    it('Should have a shadow on header and footer box shadow', () => {
        cy.get('header').should('exist').and('have.css', 'box-shadow').and('contain', 'rgba')
        cy.get('footer').should('exist').and('have.css', 'box-shadow').and('contain', 'rgba')
    })
})

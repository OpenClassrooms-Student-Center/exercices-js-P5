describe("Exercice 2", ()=>{
    beforeEach(() => {
        cy.visit("/Exercice2");
    })

    it("Should render the heading element", ()=>{
        cy.get('h1').should('exist');
    })
    it("Should render an image element", ()=>{
        cy.get('img').should('have.attr', 'src')
            .and('not.be.empty')
    })

    it("Should render a list with members of the band", ()=>{
        cy.get('ul').should('exist');
        cy.get('ul').should('not.be.empty');
        cy.get('li').should('exist');
        cy.get('li').should('not.be.empty');
    })
    it("Should render a link to a streaming platform", ()=>{
        cy.get('a').should('not.be.null');
        cy.get('a').should('have.attr', 'href')
            .and('match',/https?:\/\/(www.)?[a-zA-Z]+(\.[a-zA-Z]+)+(\/(\w|[-_%.#?=&+])+)+/g)

    })
    it("HTML Document Should have a title", ()=>{
        cy.title().should('have.length.greaterThan', 0);
    })

})

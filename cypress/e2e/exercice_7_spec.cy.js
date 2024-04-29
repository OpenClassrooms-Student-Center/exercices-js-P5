/* describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:8080/P8-Exercice7/')
    cy.get('#decimalInput').type('20')
    cy.contains('Convertir').click()
    cy.get('#binaryResult').should('contain.text', '10100')
    cy.get('p#binaryResult').should('have.css', 'font-size').should('contain', '12px')
  })
})
*/

describe('Validations Exercice 7: ', () => {
  beforeEach(() => {
    cy.visit("/Exercice7");
  })
  it('Normal display must be as defined on creating project', () => {
    cy.get('h1').should('have.css', 'font-size', '30px');
    cy.get('nav ul').should('have.css', 'display', 'flex')
    cy.get('nav ul').should('have.css', 'flex-direction', 'row')
    cy.get('nav ul li:first').should('have.css', 'margin-right', '20px')
    })
  it("Shows on responsive some changes", ()=>{
    cy.viewport(320, 900)
    cy.get('h1').should('have.css', 'font-size', '20px');
    cy.get('nav ul').should('have.css', 'display', 'flex')
    cy.get('nav ul').should('have.css', 'flex-direction', 'column')
    cy.get('nav ul li:first').should('have.css', 'margin-right', '0px')
  })
})


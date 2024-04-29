import printNumbers from "../../Exercice10";


describe('When I call printNumbers function with number 5', () => {
    const string = printNumbers(5)
    it('Returns a string', () => {
        expect(typeof(string)).to.eq('string')

    })
    it('Returns a string containing \'1 2 3 4 5\' ', ()=>{
        expect(string).to.contain('1 2 3 4 5');
    })
    it('Returns a \'1 2 3 4 5\' string', ()=>{
        expect(string).to.eq('1 2 3 4 5');
    })

})


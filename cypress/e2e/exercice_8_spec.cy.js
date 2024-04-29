import add from '../../Exercice8/script'

describe('Unit Test for Add', () => {
    it('Adding 2 + 3 should return 5', ()=>{
        expect(add(2,3)).to.eq(5)
    })
    it('Adding 0 + 3.5 should return 3.5', ()=>{
        expect(add(0,3.5)).to.eq(3.5)
    })
    it('Adding 0 + 0 should return 0', ()=>{
        expect(add(0,0)).to.eq(0)
    })
    it('Adding 1 + -5 should return -4', ()=>{
        expect(add(1,-5)).to.eq(-4)
    })
    it('Adding 1 + -5 should return -4', ()=>{
        expect(add(1,-5)).to.eq(-4)
    })

} )

describe('Bonus Unit Test for Add using string', () => {
    it("Adding adding '1' + -5 should return -4", ()=>{
        expect(add('1',-5)).to.eq(-4)
    })
    it("Adding '1.5' + '2.5' should return 4", ()=>{
        expect(add('1.5','2.5')).to.eq(4)
    })
})

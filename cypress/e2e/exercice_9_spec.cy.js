import somme from '../../Exercice8/script'
import checkAge from "../../Exercice9/script";

describe('Unit Test for checkAge', () => {
    it('Displays `Vous êtes mineur.` when age <18', ()=>{
        expect(checkAge(15)).to.eq(`Vous êtes mineur.`)
    })
    it('Displays `Vous êtes majeur.` when age >18 and <65', ()=>{
        expect(checkAge(18)).to.eq(`Vous êtes majeur.`)
        expect(checkAge(20)).to.eq(`Vous êtes majeur.`)
        expect(checkAge(64)).to.eq(`Vous êtes majeur.`)
    })
    it('Displays `Vous êtes senior.` when age >=65', ()=>{
        expect(checkAge(18)).not.to.eq(`Vous êtes senior.`)
        expect(checkAge(65)).to.eq(`Vous êtes senior.`)
        expect(checkAge(70)).to.eq(`Vous êtes senior.`)
    })


} )

const expect = chai.expect;

let testValue = 10;

describe('Week6_Functions', () => {
    describe('#getCardInfo', () => {
        it(`Card Value should equal testValue = ${testValue}`, () => {
            const testCard = new Card(9, "10 of Diamonds");
            expect(testCard.getCardValue()).to.be.equal(testValue);
        });

        // it('Test will pass if name is not a string', () => {
        //     const testPlayer2 = new Player("John");
        //     expect(testPlayer2.getPlayerName()).is.not.a('string');
        // })
    })
})
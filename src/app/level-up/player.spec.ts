import { Player } from './player';

describe('LevelUpComponent', () => {

    it('should gain 10 experience point each day', () =>{
        let player = new Player(1, 0);
        player.newDay();
        expect(player.experience).toBe(10);
    });

    it('should start with 0 in experience and level', () => {
        let player = new Player(0, 0);
        expect(player.level).toBe(0);
        expect(player.experience).toBe(0);
    });
    
    it('should win a level when experience equal 100', () => {
        let player = new Player(1, 90);
        player.newDay();
        expect(player.level).toBe(2);
        expect(player.experience).toBe(0);
    });

    it('should keep the same level', () => {
        let player = new Player(10, 50);
        player.newDay();
        expect(player.level).toBe(10);
    });

    it('max level should be 10', () => {
        let player = new Player(10, 50);
        player.newDay();
        expect(player.level).toBe(10);
    });

    it('should have a level strictly inferior to 11', () => {
        let player = new Player(10, 90);
        player.newDay();
        expect(player.level).toBe(10);
    });

    it('should never have initial experience very high', () => {
        let player = new Player(0, 150);
        expect(player.experience).toBe(150);
    });

    it('should never have negative experience', () =>{
        let player = new Player(1, -10);
        player.newDay();
        expect(player.experience).toBe(10);
    });

    it('should never have negative level', () =>{
        let player = new Player(-1, 50);
        player.newDay();
        expect(player.level).toBe(0);
    });

    it('experience and level should be a valid number', () => {
        let player = new Player(5, 80);
        expect(typeof player.level).toBe('number');
        expect(typeof player.experience).toBe('number');
    });

    describe('experience excess', () => {
        it('should keep the experience excess after level up', () => {
            let player = new Player(1, 95);
            player.newDay();
            expect(player.level).toBe(2);
            expect(player.experience).toBe(5);
        });
    });
})

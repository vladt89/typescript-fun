describe('Fun map tests', () => {
    it('should test that specific key exists', async () => {
        const map = new Map();
        map.set(1, 'one');
        map.set(2, 'two');
        map.set(3, 'three');
        // EXERCISE
        const doesMapHas2 = map.has(2);
        // VERIFY
        expect(doesMapHas2).toBeTruthy();
    });
    
});

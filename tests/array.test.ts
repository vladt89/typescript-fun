describe('Fun array tests', () => {
    it('should test pushToArray', async () => {
        // EXERCISE
        const result = pushToArray(["newItem", "additionalItem"]);
        // VERIFY
        expect(result.length).toEqual(3);
    });

    it('should test sumAmount', async () => {
        const items: Item[] = [
            { amount: 10 },
            { amount: 20 },
            { amount: 30 },
        ];
        // EXERCISE
        const sum = sumAmount(items);
        // VERIFY
        expect(sum).toEqual(60);
    });
});

const pushToArray = (additionalItems: string[]): string[] => {
    const strArray: string[] = [];
    strArray.push("funItem#1");
    strArray.push(...additionalItems);
    return strArray;
};

const sumAmount = (items: Item[]): number => {
    return items.reduce((accumulator, item) => accumulator + item.amount, 0);
}

interface Item {
    amount: number;
}

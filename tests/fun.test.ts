describe('Fun tests', () => {
  it('should test lambdaSum', async () => {
    // EXERCISE
    const result = lambdaSum(5, 6);
    // VERIFY
    expect(result).toEqual(11);
  });

  it('should test functionSum', async () => {
    // EXERCISE
    const result = functionSum(5, 6);
    // VERIFY
    expect(result).toEqual(11);
  });
});

const lambdaSum = (a: number, b: number): number => {
  return a + b;
};

function functionSum(a: number, b: number) {
  return a + b;
}

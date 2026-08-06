import { isAbove } from './_is_above';

describe('isAbove', () => {
  it('should return if the item is above or below', () => {
    expect(isAbove(0)).toBe(false);
    expect(isAbove(1)).toBe(true);
    expect(isAbove(2)).toBe(false);

    expect(isAbove(0, 'top')).toBe(true);
    expect(isAbove(1, 'top')).toBe(true);
    expect(isAbove(2, 'top')).toBe(true);

    expect(isAbove(0, 'bottom')).toBe(false);
    expect(isAbove(1, 'bottom')).toBe(false);
    expect(isAbove(2, 'bottom')).toBe(false);
  });

  it('should support function-based distribution', () => {
    const distributionFn = (data) => {
      // Place items with positive values above, negative below
      return data.value > 0;
    };

    const positiveData = { value: 100, key: 'item1' };
    const negativeData = { value: -50, key: 'item2' };
    const zeroData = { value: 0, key: 'item3' };

    expect(isAbove(0, distributionFn, positiveData)).toBe(true);
    expect(isAbove(1, distributionFn, negativeData)).toBe(false);
    expect(isAbove(2, distributionFn, zeroData)).toBe(false);
  });

  it('should pass data and index to custom distribution function', () => {
    const mockFn = jest.fn((data, index) => index % 2 === 0);

    const testData = { key: 'test', value: 42 };

    isAbove(0, mockFn, testData);
    expect(mockFn).toHaveBeenCalledWith(testData, 0);

    isAbove(5, mockFn, testData);
    expect(mockFn).toHaveBeenCalledWith(testData, 5);

    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it('should work with nested data values', () => {
    const distributionFn = (data) => {
      // Check if any value in the group has a positive amount
      return data.values && data.values.some((v) => v.amount > 0);
    };

    const positiveGroup = {
      key: '2023-01',
      values: [
        { text: 'Income', amount: 1000 },
        { text: 'Bonus', amount: 500 },
      ],
    };

    const negativeGroup = {
      key: '2023-02',
      values: [
        { text: 'Expense', amount: -200 },
        { text: 'Bill', amount: -150 },
      ],
    };

    const mixedGroup = {
      key: '2023-03',
      values: [
        { text: 'Income', amount: 500 },
        { text: 'Expense', amount: -300 },
      ],
    };

    expect(isAbove(0, distributionFn, positiveGroup)).toBe(true);
    expect(isAbove(1, distributionFn, negativeGroup)).toBe(false);
    expect(isAbove(2, distributionFn, mixedGroup)).toBe(true);
  });

  it('should support object-based distribution with field matching', () => {
    const distribution = {
      field: 'character',
      top: 'Gandalf',
      bottom: 'Frodo',
    };

    const gandalfData = {
      key: '2023-01',
      values: [{ text: 'Event 1', character: 'Gandalf' }],
    };

    const frodoData = {
      key: '2023-02',
      values: [{ text: 'Event 2', character: 'Frodo' }],
    };

    const otherData = {
      key: '2023-03',
      values: [{ text: 'Event 3', character: 'Aragorn' }],
    };

    expect(isAbove(0, distribution, gandalfData)).toBe(true);
    expect(isAbove(1, distribution, frodoData)).toBe(false);
    // Should fallback to alternating for unmatched values
    expect(isAbove(2, distribution, otherData)).toBe(false);
    expect(isAbove(3, distribution, otherData)).toBe(true);
  });

  it('should support object-based distribution with array of values', () => {
    const distribution = {
      field: 'type',
      top: ['income', 'bonus', 'refund'],
      bottom: ['expense', 'bill', 'tax'],
    };

    const incomeData = {
      key: '2023-01',
      values: [{ text: 'Salary', type: 'income' }],
    };

    const bonusData = {
      key: '2023-02',
      values: [{ text: 'Year-end bonus', type: 'bonus' }],
    };

    const expenseData = {
      key: '2023-03',
      values: [{ text: 'Rent', type: 'expense' }],
    };

    const billData = {
      key: '2023-04',
      values: [{ text: 'Electricity', type: 'bill' }],
    };

    expect(isAbove(0, distribution, incomeData)).toBe(true);
    expect(isAbove(1, distribution, bonusData)).toBe(true);
    expect(isAbove(2, distribution, expenseData)).toBe(false);
    expect(isAbove(3, distribution, billData)).toBe(false);
  });

  it('should support object-based distribution with multiple items in group', () => {
    const distribution = {
      field: 'category',
      top: 'positive',
      bottom: 'negative',
    };

    const mixedGroup = {
      key: '2023-01',
      values: [
        { text: 'Item 1', category: 'positive' },
        { text: 'Item 2', category: 'negative' },
      ],
    };

    // Should return true if ANY item matches top value
    expect(isAbove(0, distribution, mixedGroup)).toBe(true);
  });

  it('should handle object-based distribution with missing data gracefully', () => {
    const distribution = {
      field: 'character',
      top: 'Gandalf',
      bottom: 'Frodo',
    };

    const emptyData = { key: '2023-01', values: [] };
    const noValuesData = { key: '2023-02' };

    // Should fallback to alternating
    expect(isAbove(0, distribution, emptyData)).toBe(false);
    expect(isAbove(1, distribution, emptyData)).toBe(true);
    expect(isAbove(0, distribution, noValuesData)).toBe(false);
    expect(isAbove(1, distribution, noValuesData)).toBe(true);
  });
});

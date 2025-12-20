/**
 * @jest-environment jsdom
 */

import milestones from './main';

// Mock ResizeObserver
window.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe('milestones', () => {
  let container;

  beforeEach(() => {
    // Set up a DOM element as a render target
    container = document.createElement('div');
    container.id = 'container';
    document.body.appendChild(container);
  });

  afterEach(() => {
    // Clean up
    document.body.removeChild(container);
    container = null;
  });

  it('should return an API with all expected methods', () => {
    const chart = milestones('#container');

    // Test public API methods
    expect(typeof chart.aggregateBy).toBe('function');
    expect(typeof chart.mapping).toBe('function');
    expect(typeof chart.optimize).toBe('function');
    expect(typeof chart.orientation).toBe('function');
    expect(typeof chart.distribution).toBe('function');
    expect(typeof chart.parseTime).toBe('function');
    expect(typeof chart.labelFormat).toBe('function');
    expect(typeof chart.urlTarget).toBe('function');
    expect(typeof chart.useLabels).toBe('function');
    expect(typeof chart.range).toBe('function');
    expect(typeof chart.render).toBe('function');
    expect(typeof chart.renderCallback).toBe('function');
    expect(typeof chart.onEventClick).toBe('function');
    expect(typeof chart.onEventMouseLeave).toBe('function');
    expect(typeof chart.onEventMouseOver).toBe('function');
  });

  it('should create a basic visualization when render is called with data', () => {
    const chart = milestones('#container');

    // Create simple test data
    const data = [
      { text: 'Event 1', timestamp: '2023-01-01' },
      { text: 'Event 2', timestamp: '2023-06-01' },
      { text: 'Event 3', timestamp: '2023-12-01' },
    ];

    // Render the chart
    chart.render(data);

    // Assert that elements have been created in the DOM
    const timelineElement = document.querySelector('.milestones');
    expect(timelineElement).not.toBeNull();
  });

  it('should execute renderCallback when render is called', () => {
    const chart = milestones('#container');
    const mockCallback = jest.fn();

    // Set the render callback
    chart.renderCallback(mockCallback);

    // Create simple test data
    const data = [
      { text: 'Event 1', timestamp: '2023-01-01' },
      { text: 'Event 2', timestamp: '2023-06-01' },
    ];

    // Render the chart
    chart.render(data);

    // Verify callback was called
    expect(mockCallback).toHaveBeenCalled();
  });

  it('should properly configure and use mapping options', () => {
    const chart = milestones('#container');

    // Set custom mapping
    chart.mapping({
      text: 'title',
      timestamp: 'date',
    });

    // Create data with custom field names
    const data = [
      { title: 'Event 1', date: '2023-01-01' },
      { title: 'Event 2', date: '2023-06-01' },
    ];

    // Render should work with the custom mapping
    chart.render(data);

    // Check that the chart was rendered
    const timelineElement = document.querySelector('.milestones');
    expect(timelineElement).not.toBeNull();
  });

  it('should change orientation when orientation method is called', () => {
    const chart = milestones('#container');
    const spy = jest.spyOn(
      document.querySelector('#container'),
      'innerHTML',
      'set'
    );

    // Change orientation
    chart.orientation('vertical');

    // innerHTML should be set to empty to purge the DOM
    expect(spy).toHaveBeenCalledWith('');

    // Create simple test data
    const data = [
      { text: 'Event 1', timestamp: '2023-01-01' },
      { text: 'Event 2', timestamp: '2023-06-01' },
    ];

    // Render the chart
    chart.render(data);

    // Clean up spy
    spy.mockRestore();
  });

  it('should apply textStyle including font-size to text elements', () => {
    const chart = milestones('#container');

    // Create data with textStyle including font-size
    const data = [
      {
        text: 'Normal Text',
        timestamp: '2023-01-01',
      },
      {
        text: 'Large Text',
        timestamp: '2023-06-01',
        textStyle: { 'font-size': '20px', color: 'red' },
      },
      {
        text: 'Small Text',
        timestamp: '2023-12-01',
        textStyle: { 'font-size': '8px', 'font-weight': 'bold' },
      },
    ];

    // Render the chart
    chart.render(data);

    // Find text elements
    const textElements = document.querySelectorAll('.milestones-text-label');
    expect(textElements.length).toBe(3);

    // Check that the second element has the correct styles applied
    const largeTextElement = textElements[1];
    expect(largeTextElement.textContent).toBe('Large Text');
    expect(largeTextElement.style.fontSize).toBe('20px');
    expect(largeTextElement.style.color).toBe('red');

    // Check that the third element has the correct styles applied
    const smallTextElement = textElements[2];
    expect(smallTextElement.textContent).toBe('Small Text');
    expect(smallTextElement.style.fontSize).toBe('8px');
    expect(smallTextElement.style.fontWeight).toBe('bold');
  });

  it('should apply bulletStyle to bullet elements', () => {
    const chart = milestones('#container');

    // Create data with bulletStyle
    const data = [
      {
        text: 'Default Bullet',
        timestamp: '2023-01-01',
      },
      {
        text: 'Red Bullet',
        timestamp: '2023-06-01',
        bulletStyle: { 'background-color': 'red', 'border-color': 'darkred' },
      },
      {
        text: 'Large Blue Bullet',
        timestamp: '2023-12-01',
        bulletStyle: { 'background-color': 'blue', padding: '5px' },
      },
    ];

    // Render the chart
    chart.render(data);

    // Find bullet elements
    const bulletElements = document.querySelectorAll(
      '.milestones__group__bullet'
    );
    expect(bulletElements.length).toBe(3);

    // Check that the second bullet has the correct styles applied
    const redBullet = bulletElements[1];
    expect(redBullet.style.backgroundColor).toBe('red');
    expect(redBullet.style.borderColor).toBe('darkred');

    // Check that the third bullet has the correct styles applied
    const blueBullet = bulletElements[2];
    expect(blueBullet.style.backgroundColor).toBe('blue');
    expect(blueBullet.style.padding).toBe('5px');
  });

  it('should support object-based distribution with field matching', () => {
    const chart = milestones('#container');

    // Object-based distribution: Gandalf above, Frodo below
    chart.distribution({
      field: 'character',
      top: 'Gandalf',
      bottom: 'Frodo',
    });

    // Create character-based data
    const data = [
      { text: 'Event 1', timestamp: '2023-01-01', character: 'Gandalf' },
      { text: 'Event 2', timestamp: '2023-02-01', character: 'Frodo' },
      { text: 'Event 3', timestamp: '2023-03-01', character: 'Gandalf' },
      { text: 'Event 4', timestamp: '2023-04-01', character: 'Frodo' },
    ];

    // Map the character field
    chart.mapping({ character: 'character' });

    // Render the chart
    chart.render(data);

    // Verify that timeline was created
    const timelineElement = document.querySelector('.milestones');
    expect(timelineElement).not.toBeNull();
  });

  it('should support object-based distribution with array of values', () => {
    const chart = milestones('#container');

    // Object-based distribution: multiple positive/negative types
    chart.distribution({
      field: 'type',
      top: ['income', 'bonus', 'refund'],
      bottom: ['expense', 'bill', 'tax'],
    });

    // Create cash flow data
    const data = [
      { text: 'Salary', timestamp: '2023-01-01', type: 'income' },
      { text: 'Rent', timestamp: '2023-02-01', type: 'expense' },
      { text: 'Bonus', timestamp: '2023-03-01', type: 'bonus' },
      { text: 'Electricity', timestamp: '2023-04-01', type: 'bill' },
    ];

    // Map the type field
    chart.mapping({ type: 'type' });

    // Render the chart
    chart.render(data);

    // Verify that timeline was created
    const timelineElement = document.querySelector('.milestones');
    expect(timelineElement).not.toBeNull();
  });

  it('should support custom distribution function for advanced cases', () => {
    const chart = milestones('#container');

    // Function-based distribution for complex logic
    const cashFlowDistribution = (data) => {
      // data.values contains the grouped events
      if (data.values && data.values.length > 0) {
        // Get the first item's amount (they're grouped by timestamp)
        return data.values[0].amount > 0;
      }
      return false;
    };

    // Spy on the distribution function to verify it's called
    const distributionSpy = jest.fn(cashFlowDistribution);
    chart.distribution(distributionSpy);

    // Create cash flow data
    const data = [
      { text: 'Income', timestamp: '2023-01-01', amount: 1000 },
      { text: 'Expense', timestamp: '2023-02-01', amount: -500 },
      { text: 'Bonus', timestamp: '2023-03-01', amount: 2000 },
      { text: 'Bill', timestamp: '2023-04-01', amount: -300 },
    ];

    // Map the amount field
    chart.mapping({ amount: 'amount' });

    // Render the chart
    chart.render(data);

    // Verify distribution function was called
    expect(distributionSpy).toHaveBeenCalled();

    // Verify that timeline was created
    const timelineElement = document.querySelector('.milestones');
    expect(timelineElement).not.toBeNull();
  });

  it('should use custom distribution function with ordinal scale', () => {
    const chart = milestones('#container');

    // Custom distribution based on type field
    const typeDistribution = (data) => {
      if (data.values && data.values.length > 0) {
        return data.values[0].type === 'positive';
      }
      return false;
    };

    const distributionSpy = jest.fn(typeDistribution);

    chart.scaleType('ordinal');
    chart.distribution(distributionSpy);
    chart.mapping({ value: 'id', type: 'type' });

    // Create ordinal data
    const data = [
      { text: 'Item A', id: 'a', type: 'positive' },
      { text: 'Item B', id: 'b', type: 'negative' },
      { text: 'Item C', id: 'c', type: 'positive' },
      { text: 'Item D', id: 'd', type: 'negative' },
    ];

    // Render the chart
    chart.render(data);

    // Verify distribution function was called
    expect(distributionSpy).toHaveBeenCalled();

    // Verify that timeline was created
    const timelineElement = document.querySelector('.milestones');
    expect(timelineElement).not.toBeNull();
  });

  it('should allow switching between string and function distribution', () => {
    const chart = milestones('#container');

    const data = [
      { text: 'Event 1', timestamp: '2023-01-01' },
      { text: 'Event 2', timestamp: '2023-02-01' },
      { text: 'Event 3', timestamp: '2023-03-01' },
    ];

    // First, use string distribution
    chart.distribution('top');
    chart.render(data);

    let timelineElement = document.querySelector('.milestones');
    expect(timelineElement).not.toBeNull();

    // Switch to function distribution
    const customDistribution = jest.fn((data, index) => index === 1);
    chart.distribution(customDistribution);
    chart.render(data);

    // Verify function distribution was called
    expect(customDistribution).toHaveBeenCalled();

    // Switch back to string distribution
    chart.distribution('bottom');
    chart.render(data);

    timelineElement = document.querySelector('.milestones');
    expect(timelineElement).not.toBeNull();
  });
});

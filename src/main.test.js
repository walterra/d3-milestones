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
});

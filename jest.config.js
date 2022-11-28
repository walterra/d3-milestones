module.exports = {
  transform: {
    '^.+\\.js?$': require.resolve('babel-jest'),
  },
  transformIgnorePatterns: [
    '/node_modules/(?!d3|d3-array|internmap|delaunator|robust-predicates)',
  ],
};

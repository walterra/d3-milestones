export const DEFAULTS = {
  DISTRIBUTION: 'top-bottom',
  OPTIMIZE: false,
  ORIENTATION: 'horizontal',
  SCALE_TYPE: 'time',
  MAPPING: {
    category: undefined,
    entries: undefined,
    timestamp: 'timestamp', // Used only for time based scales
    value: 'value', // Used only for ordinal scale values
    text: 'text',
    url: 'url',
    id: 'id',
    textStyle: 'textStyle',
    titleStyle: 'titleStyle',
    categoryStyle: 'categoryStyle',
  },
  LABEL_FORMAT: '%Y-%m-%d %H:%M',
  USE_LABELS: true,
  AGGREGATE_BY: 'minute',
  AUTO_RESIZE: true,
  URL_TARGET: '_self',
};

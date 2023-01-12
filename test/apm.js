const apm =
  typeof APM_SERVER === 'string'
    ? elasticApm.init({
        serviceName: 'd3-milestones-karma-service',
        serverUrl: APM_SERVER,
        transactionSampleRate: 1,
        pageLoadTransactionName: 'd3-milestones-karma-page',
      })
    : undefined;

export function startTransaction(spanName) {
  let transaction = undefined;
  let span = undefined;

  if (apm) {
    transaction = apm.startTransaction('d3-milestones/karma', 'custom');
    transaction.addLabels({ 'd3-milestones-layout': APM_GIT_BRANCH });
    span = transaction.startSpan(spanName, 'render-chart');
    span.addLabels({ 'd3-milestones-layout': APM_GIT_BRANCH });
  }

  return {
    endTransaction: () => {
      if (transaction && span) {
        span.end();
        transaction.end();
      }
    },
  };
}

const apm = elasticApm.init({
  serviceName: 'd3-milestones-karma',
  serverUrl:
    'https://d845755efe5842ebabcc192482ef733d.apm.us-central1.gcp.cloud.es.io:443',
  transactionSampleRate: 1,
  pageLoadTransactionName: 'd3-milestones',
});

export { apm };

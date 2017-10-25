import tape from 'tape';

tape('simple tape test', t => {
  t.equal(1, 1, 'foo');
  t.end();
});

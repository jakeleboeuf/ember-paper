import { min } from 'ember-paper/validators/min';
import { module, test } from 'qunit';

module('Unit | Validator | min');

// - valid when `''`, `null` or `undefined`
// - valid when it is a number (`123` or `'123'`) and ` >= min`

test('numbers', function(assert) {
  assert.notOk(min(0, 1), 'zero lesser');
  assert.ok(min(0, -1), 'zero greater');
  assert.ok(min(123, 1), 'number greater');
  assert.notOk(min(-123, 1), 'number lesser');
});

test('strings', function(assert) {
  assert.ok(min('', 1), 'empty string');
  assert.ok(min('123', 1), 'numeric string greater');
  assert.notOk(min('0', 1), 'numeric string lesser');
  assert.ok(min('1', 1), 'numeric string equal');
  assert.notOk(min('aaa', 1), 'invalid string');
  assert.notOk(min('   ', 1), 'invalid string (spaces)');
});

test('falsy values', function(assert) {
  assert.ok(min(null, 1), 'null');
  assert.ok(min(undefined, 1), 'undefined');
  assert.ok(min(false, 1), 'false');
});
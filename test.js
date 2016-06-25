'use strict'

var test = require('tape')
var Events = require('geval/multiple')
var wait = require('./')

test('success', function (t) {
  t.plan(2)

  var poller = Events(['onData', 'onError'])
  poller.cancel = function () {
    t.ok('cancelled')
  }

  wait(poller, (data) => data.foo, function (err, data) {
    if (err) return t.end(err)
    t.deepEqual(data, {foo: 'bar'})
  })

  poller.onData({bar: 'baz'})
  poller.onData({foo: 'bar'})
})

test('success', function (t) {
  t.plan(2)

  var poller = Events(['onData', 'onError'])
  poller.cancel = function () {
    t.ok('cancelled')
  }

  wait(poller, Boolean, function (err, data) {
    t.equal(err.message, 'poll error')
  })

  poller.onError(new Error('poll error'))
})

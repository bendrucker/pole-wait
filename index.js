'use strict'

module.exports = wait

function wait (poller, fn, callback) {
  poller.onData(function (data) {
    if (!fn(data)) return
    poller.cancel()
    callback(null, data)
  })

  poller.onError(function (err) {
    poller.cancel()
    callback(err)
  })
}

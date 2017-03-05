'use strict'

/*
var aws = require('aws-sdk')
var s3 = new aws.S3()
var lang = 'en-US'
*/

module.exports.hello = (event, context, callback) => {
  event = JSON.parse(event)
  event.body = JSON.parse(event.body)
  event.body.fields = JSON.parse(event.body.fields)

  const response = {
    statusCode: 200,
    body: {
      message: 'Great success',
      fields: event.body.fields
    }
  }
  callback(null, response)

  /*
  event = JSON.parse(event)
  var fields = event.body.fields
  if (fields) {
    var name = fields.name[lang]
    if (name) {
      var param = {
        Bucket: 'twg-cfc2',
        Key: 'test-file',
        Body: 'test ' + name
      }

      s3.upload(param, function (err, data) {
        if (err) console.log(err, err.stack)
        else console.log(data)
        console.log('actually done!')
        success(callback)
      })
    } else {
      error(callback, event)
    }
  } else {
    error(callback, event)
  }
  */
}

/*
function success (callback) {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Great success'
    })
  }
  callback(null, response)
}

function error (callback, event) {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Oops something went wrong',
      input: event
    })
  }
  callback(null, response)
}
*/

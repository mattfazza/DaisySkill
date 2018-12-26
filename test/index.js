const context = require('aws-lambda-mock-context');
var expect = require('chai').expect;
var index = require('../src/index');

const ctx = context();

describe("Testing the Hello Intent", function () {
    
    var speechResponse = null;
    var speechError = null;

    before(function (done) {
        index.Handler({
            "session": {
                "sessionId": "SessionId.154291c5-a13f-4e7a-ab5a-24234adf",
                "application": {
                    "applicationId": "my_alexa_id"
            },
            "attributes": {},
            "user": {
                "userId": null
            },
            "new": true
            },
            "request": {
                "type": "IntentRequest",
                "requestId": "EdwRequestId.474c15c8-14d2-4a77-a4ce-154291c5",
                "timestamp": "2016-07-05T22:02:01Z",
                "intent": {
                    "name": "HelloIntent",
                    "slots": 
                    {"Word":
                        {
                            "name": "Word",
                            "value": "dog"
                        }
                    }
                },
                "locale": "en-US"
            },
            "version": "1.0"
        }, ctx);
        ctx.Promise.
        then(response => {speechResponse = response; console.log(speechResponse); done(); })
        .catch(error => {speechError = error; done(); })
         })

    describe("Is the response structurally correct", function () {
       it("should not have erroed", function () {
          expect(speechError).to.be.null;
       }); 
    });

})

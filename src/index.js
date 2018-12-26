"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Alexa = __importStar(require("alexa-sdk"));
var handlers = {
    "AboutIntent": function () {
        var self = this;
        var speechOutput = "This skill was written by Matt Fazza.";
        self.emit(":tellWithCard", speechOutput, "Matt's skill", speechOutput);
    },
    "HelloIntent": function () {
        var self = this;
        var intentRequest = self.event.request;
        var value = intentRequest.intent.slots.Word.value;
        var speechOutput = "";
        if (value.toLowerCase() == "dog") {
            speechOutput = "Hi princess Daisy";
        }
        else {
            speechOutput = "Sorry, you don't have a pet " + intentRequest.intent.slots.Word.value;
        }
        self.emit(":tellWithCard", speechOutput, "Matt's skill", speechOutput);
    }
};
var Handler = /** @class */ (function () {
    function Handler(event, context, callback) {
        var alexa = Alexa.handler(event, context);
        alexa.appId = "my_alexa_id";
        alexa.registerHandlers(handlers);
        alexa.execute();
    }
    return Handler;
}());
exports.Handler = Handler;

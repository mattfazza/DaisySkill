import * as Alexa from "alexa-sdk";

let handlers: Alexa.Handlers = {

    "AboutIntent": function () {
        let self: Alexa.Handler = this;
        let speechOutput = "This skill was written by Matt Fazza.";
        self.emit(":tellWithCard", speechOutput, "Matt's skill", speechOutput);
    },

    "HelloIntent": function () {
        let self: Alexa.Handler = this;
        let intentRequest = <Alexa.IntentRequest> self.event.request;
        let value = intentRequest.intent.slots.Word.value;
        let speechOutput = "";

        if (value.toLowerCase() == "dog"){
            speechOutput = "Hi princess Daisy";
        }else{
            speechOutput = "Sorry, you don't have a pet " + intentRequest.intent.slots.Word.value;
        }

        self.emit(":tellWithCard", speechOutput, "Matt's skill", speechOutput);



    }

}


export class Handler{

    constructor(event: Alexa.RequestBody, context: Alexa.Context, callback: Function){
        let alexa = Alexa.handler(event, context);
        alexa.appId = "my_alexa_id";
        alexa.registerHandlers(handlers);
        alexa.execute();
    }

}
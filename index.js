//"use strict";
var alexa = require('alexa-app');
var app = new alexa.app('Joker');
var weather = require('openweather-apis');

weather.setLang('en');

weather.setCity('Portland');
weather.setUnits('imperial');
weather.setAPPID('fc0494038d234a5c779a400630b716c2');


app.intent('Weather',
  {
    'slots':{

    },
    'utterances':[
      'What should I wear today?'
    ]
  },
  (request, response) => {
    weather.getTemperature(function(err, temp){
      console.log(temp);
      response.say("It's");
      response.say(temp.toString());
      response.say("degrees Fahrenheit.");
      response.say(function(){
        if(temp > 70) {
          return "No jacket is needed, but a shirt is a good idea!";
        } else if(temp < 40){
          return "Bundle up";
        } else{
          return "Get a hoodie.";
        }
      }());
      response.send();
    });
    return false;
  }
);

app.intent('Done',
  {
    'utterances': [
      "no",
      "no thankyou",
      "not now"
    ]
  },
  (request, response) => {
    response.say("O.K.  Goodbye");
  }
);

app.intent('AMAZON.HelpIntent',
  {
    'utterances':[
      "for help {customizing|setting up|getting started}"
    ]
  },
  (request, response) => {

  }
);

app.error = (exception, request, response) => {
    response.say("Sorry, something bad happened");
};

module.exports = app;

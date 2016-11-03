var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var expect = chai.expect;
var mockHelper = require("../helpers/MockHelper");
chai.config.includeStack = true;
var app = require("../../index");

describe("a request", function(){
  it.only("should tell us what to wear", function(done){
    var mockRequest = mockHelper.load("weather.json");
    app.request(mockRequest).then(function(response){
    console.log("no response", response);
    expect(response.response.outputSpeech.ssml).to.equal('<speak>It\'s 19.98 degrees Fahrenheit in Fairbanks. Bundle up!</speak>');
    done();
    });
  });
});

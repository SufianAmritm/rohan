const { Given, When, Then } = require('@cucumber/cucumber');

let serverRunning = false;
let requestEndpoint = "";
let responseStatus = null;
let responseData = null;

Given('the API server is running', function () {
    serverRunning = true; 
});


When('I send a GET request to {string}', function (endpoint) {
    if (serverRunning) {
        requestEndpoint = endpoint;

   
        if (endpoint === "/") {
            responseStatus = 200;
            responseData = "<h1>Hello I'm Awais</h1>";
        } else if (endpoint === "/users") {
            responseStatus = 200;
            responseData = [
                { id: 1, name: "user 1" },
                { id: 2, name: "user 2" }
            ];
        } else {
            responseStatus = 404;
            responseData = "Not Found";
        }
    }
});


Then('the response status should be {int}', function (statusCode) {
    if (responseStatus !== statusCode) {
        throw new Error(`Expected status ${statusCode} but got ${responseStatus}`);
    }
});


Then('the response should contain {string}', function (expectedText) {
    if (!responseData.includes(expectedText)) {
        throw new Error(`Expected response to contain "${expectedText}", but got "${responseData}"`);
    }
});


Then('the response should contain a list of users', function () {
    if (!Array.isArray(responseData) || responseData.length === 0) {
        throw new Error("Expected a list of users but got an empty or invalid response");
    }
});

"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var catURL = "https://api.thecatapi.com/v1/images/search";
axios_1["default"]
    .get(catURL, {
    params: {
        breed_ids: "siam"
    }
})
    .then(function (r) { return r.data; })
    .then(function (breeds) {
    console.log(breeds);
});
var theInput;
var thebutton;
theInput = document.querySelector("#userInput > input[type=text]");
thebutton = document.querySelector("#userInput > button");
thebutton === null || thebutton === void 0 ? void 0 : thebutton.addEventListener("click", function () {
    var _a;
    var inputLen = (_a = theInput === null || theInput === void 0 ? void 0 : theInput.value.length) !== null && _a !== void 0 ? _a : 0;
    if (inputLen > 0)
        console.log("You entered", theInput === null || theInput === void 0 ? void 0 : theInput.value);
    else
        console.log("Please enter some text");
});

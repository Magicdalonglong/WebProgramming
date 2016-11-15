// Remember, we're in a browser: prevent global variables from happening
// I am passing the jQuery variable into the IIFE so that
// I don't have to rely on global variable name changes in the future
(function ($, localStorage_new, location) {
    console.log('try locaiton');
    console.log(location)
;
     console.log('try localStorage_new');
     console.log(localStorage_new);
    if (!localStorage_new["my_first_object"]) {
        localStorage_new["my_first_object"] = JSON.stringify({message: "Hello, world!"});
    }

    if (!localStorage_new["my_first_boolean"]) {
        localStorage_new["my_first_boolean"] = JSON.stringify(true);
    }

    var localStorageTableBody = $("#localstorage-data tbody");
    var clearStorage = $("#clear-storage");

    var keyNameInput = $("#input_localstorage_new-key");
    var keyValueInput = $("#localstorage_new-value");
    var kvpForm = $("#localstorage_new-form");
    var formAlert = $("#form-alert");

    function resetTable() {
        localStorageTableBody.empty();

        // We use the localStorage_new.key(number) property to get the key name at index number
        for (var i = 0; i < localStorage_new.length; i++) {
            var currentKey = localStorage_new.key(i);
            var curentValue = localStorage_new[currentKey];

            var asJSON = JSON.parse(curentValue);
            var typeAfterParsing = typeof asJSON;

            var newHtmlString = "<tr><td>" + currentKey + "</td><td>" + curentValue + "</td><td>" + typeAfterParsing + "</td></tr>"
            localStorageTableBody.append(newHtmlString);
        }
    }

    clearStorage.click(function () {
        localStorage_new.clear();
        resetTable();
    });

    kvpForm.submit(function (event) {
        event.preventDefault();

        // reset the form
        formAlert.addClass('hidden');
        formAlert.text('');

        var keyStr = keyNameInput.val();
        var valStr = keyValueInput.val();

        if (!keyStr) {
            formAlert.text('You must provide a key name');
            formAlert.removeClass('hidden');
            return;
        }

        if (!keyValueInput) {
            formAlert.text('You must provide a key name');
            formAlert.removeClass('hidden');
            return;
        }

        // check if it's in the format of an object
        var jsonString = valStr;

        try {
            // this will throw when given a non JSON string
            JSON.parse(valStr);

            // if this succeeded, the user passed us something we could parse, and we don't have to encode it further
        } catch (e) {
            // this did not succeed, which means that the user passed us some sort of string
            jsonString = JSON.stringify(valStr);
        }

        localStorage_new[keyStr] = jsonString;

        keyNameInput.val('');
        keyValueInput.val('');

        resetTable();
    });

    // Now we setup our table
    resetTable();
})(jQuery, window.localStorage);
// jQuery is exported as $ and jQuery
// the location API is accessed via the window.location variable

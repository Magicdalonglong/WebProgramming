// Remember, we're in a browser: prevent global variables from happening
// I am passing the jQuery variable into the IIFE so that
// I don't have to rely on global variable name changes in the future
(function ($, location) {

    console.log('location is ');
    console.log(location);
    var resultTableBody = $("#location-data_diy tbody");

    for (var key in location) {
        // We can mix jQuery and DOM api calls fairly routinely
        var newRow = document.createElement("tr");

        // var propertyNameColumn = document.createElement("td");
        // propertyNameColumn.textContent = document.createTextNode(key).textContent;

        // var propertyTypeColumn = document.createElement("td");
        // propertyTypeColumn.textContent = document.createTextNode(typeof location[key]).textContent;

        // var propertyValueColumn = document.createElement("td");
        // propertyValueColumn.textContent = document.createTextNode(location[key]).textContent;

        var htmlstring = "<tr><td>" + key + 
        "</td><td>" + typeof location[key] + 
        "</td><td>" + location[key]+ "</td></tr>";

        console.log('using htmstring:');
        console.log(htmlstring);
        console.log("hellpo")
        // newRow.appendChild(propertyNameColumn);
        // newRow.appendChild(propertyTypeColumn);
        // newRow.appendChild(propertyValueColumn);

       // resultTableBody.append(newRow);
        resultTableBody.append(htmlstring);
    }

    $("#change-hash").click(function() {
        alert("normally, clicking a hash does not trigger a reload; we are reloading to show the hash field update")

        window.setTimeout(function() {
            location.reload();
        }, 500);
    });

})(jQuery, window.location);
// jQuery is exported as $ and jQuery
// the location API is accessed via the window.location variable

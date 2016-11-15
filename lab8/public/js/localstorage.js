// Remember, we're in a browser: prevent global variables from happening
// I am passing the jQuery variable into the IIFE so that
// I don't have to rely on global variable name changes in the future
(function($, localStorage, location) {
    //localStorage.clear();


    window.onhashchange = (function ()  {
        console.log('hash changed')
        localStorage["Local hash"] = location['hash'];
        /* body... */
    })


   
    if (!localStorage["Interval Times"]) {
        localStorage["Interval Times"] = 0
    }

    if (!localStorage["Submit Times"]) {
        localStorage["Submit Times"] = 0
    }

    if (!localStorage["Last Input"]) {
        localStorage["Last Input"]="";
    }

    localStorage["Local hash"] = location['hash'];
    

    var localStorageTableBody = $("#localstorage-data tbody");

    var input_localstorage = $("#input_localstorage");

    var formAlert = $("#form-alert");

    function resetTable() {
        localStorageTableBody.empty();
        var od = 0;

        for (var key in localStorage) {

            var htmlstring = "<tr class="+ (od%2? "\"success\"":"\"info\"") + "><td>" + key + "</td><td>" +  localStorage[key] + "</td></tr>";   
            localStorageTableBody.append(htmlstring);
            od++;
        }
    }
   

    $("#localstorage-form").submit(function(event) {
        event.preventDefault();
        // reset the form
        formAlert.addClass('hidden');
        formAlert.text('');

        var Input_str = input_localstorage.val();     

        if (!Input_str) {
            formAlert.text('You must provide a input');
            formAlert.removeClass('hidden');
            return;
        }  
     
        localStorage['Last Input'] = Input_str;
        localStorage["Submit Times"] ++;
        input_localstorage.val('');

        resetTable();
    });

    window.setInterval(function () {
        
        localStorage['Interval Times'] ++;
        resetTable();

        
    }, 1500);



    // Now we setup our table
    resetTable();
})(jQuery, window.localStorage, window.location);
// jQuery is exported as $ and jQuery
// the location API is accessed via the window.location variable
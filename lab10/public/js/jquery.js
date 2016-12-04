(function($) {
    // Let's start writing AJAX calls!


    var logoutbtn = $("#logout");
 
    logoutbtn.click(function () {
        console.log('logoutbtn clicked');
        window.location.href='/logout'
        /* body... */
    });



    // LoginForm = document.getElementById("Form");

    // var usernameele = $("#Username");
    // var passwordele = $("#Password");
    // var newName = usernameele.val();
    // var passWord = passwordele.val();


    // $("#test").click(function() {
    //     console.log('username is ');
    //     console.log(newName);
    //     console.log('passWord is');
    //      console.log(passWord);
    // });

    // if (false) {

        
    //     LoginForm.submit(function(event) {
    //         event.preventDefault();

    //         var newName = usernameele.val();
    //         var passWord = passwordele.val();

    //         if (newName && passWord) {
    //             var requestConfig = {
    //                 method: "POST",
    //                 url: "/login",
    //                 contentType: 'application/json',
    //                 data: JSON.stringify({
    //                     username: newName,
    //                     password: passWord
    //                 })
    //             };

    //             $.ajax(requestConfig).then(function(responseMessage) {
    //                 console.log(responseMessage);
    //                 if (responseMessage.status === "success") 
    //                     console.log('POST successed');
    //                 else
    //                     console.log('POST failed');
    //             //    newContent.html(responseMessage.message);
    //                 //                alert("Data Saved: " + msg);
    //             });
    //         }
    //     });
    // }

})(window.jQuery);
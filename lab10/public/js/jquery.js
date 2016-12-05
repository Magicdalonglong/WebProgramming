(function($) {
    // Let's start writing AJAX calls!

    var id = parseInt($("#iddiv").val());
    console.log('id is ' + id);
    console.log('typeof id is ' + typeof id);
    var logoutbtn = $("#logout");

    logoutbtn.click(function() {
        console.log('logoutbtn clicked');
        window.location.href = '/logout'
            /* body... */
    });

    let mainbody = document.getElementById("full");

    switch (id) {
        case 1:
            mainbody.style.backgroundImage = "url('http://images.amcnetworks.com/bbcamerica.com/wp-content/uploads/2013/06/Sherlock_Quiz_1600x720.jpg')";
            break;
        case 2:
            mainbody.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/en/c/c0/Liz_Lemon_promo_pic.jpg')";
            break;
        case 3:
            mainbody.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgTdCgm0oe8m8L_B2gcOq6X3scTkJ_gDXy0xHuBpkw-pFOyE6qgw')";
            break;
        case 4:
            mainbody.style.backgroundImage = "url('https://i.ytimg.com/vi/SqGv3TvXnAg/maxresdefault.jpg')";
            break;
        default:
            // statements_def
            break;
    }



})(window.jQuery);
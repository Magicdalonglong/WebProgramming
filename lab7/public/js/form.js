(function () {
    
    function Solution(text, string, number, distance) {
        console.log('solution in form.js');
        console.log('paramaters passed in is :')
        console.log(`${text} ${string} ${number} ${distance} `)


        if (typeof text !== "string") throw "typeof text !== string";
        if (text =="") throw "Must provide some text";

        if (typeof string !== "string") throw "Must provide a string";
        if (string =="") throw "Must provide a string";


        if (typeof number !== "number") throw "Must provide a number";
        if (isNaN(number)) throw "Must provide a number";
        if (typeof distance !== "number") throw "Must provide a number as distance";
        if (isNaN(distance)) throw "Must provide a number as distance";
        if (number <= 0) throw "Provid a positive number!";
        if (distance <= 0) throw "Provid a positive number as distance!";

        
        String.prototype.splice = function(idx, rem, str) {
            return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
        };
        let lenstr = string.length;
        for(var i = 0; i< number; i++){
            text = text.splice(distance*(i+1)+lenstr*i, 0, string);
        }
        return text

        
    }
    
    var staticForm = document.getElementById("static-form"); // if it is a static page

    console.log('going to determin staticForm');
    let mainbody = document.getElementById("mainbody");


    if (staticForm) {
        console.log('staticForm is true');
        mainbody.style.backgroundImage="url('http://i.imgbox.com/3uiQoRtg.png')"
        // We can store references to our elements; it's better to 
        // store them once rather than re-query the DOM traversal each time
        // that the event runs.
        var TextElement = document.getElementById("text_area");
        var StringElement = document.getElementById("string");
        var NumberElement = document.getElementById("number");
        var DistanceElement = document.getElementById("distance");


        var errorContainer = document.getElementById("error-container");
        var errorTextElement = errorContainer.getElementsByClassName("text-goes-here")[0];

        var resultContainer = document.getElementById("result-container");
        var resultTextElement = resultContainer.getElementsByClassName("text-goes-here")[0];

        // We can take advantage of functional scoping; our event listener has access to its outer functional scope
        // This means that these variables are accessible in our callback
        staticForm.addEventListener("submit", function (event) {
            event.preventDefault();

            try {
                // hide containers by default
                errorContainer.classList.add("hidden");
                resultContainer.classList.add("hidden");

                // Values come from inputs as strings, no matter what :(
                var text = TextElement.value;
                var string = StringElement.value;
                var number = parseInt(NumberElement.value);
                var distance = parseInt(DistanceElement.value);

         

                var result = Solution(text,string,number,distance);

                resultTextElement.textContent = "The result is: \n" + result;
                resultContainer.classList.remove("hidden");
            } catch (e) {
                var message = typeof e === "string" ? e : e.message;
                errorTextElement.textContent = e;
                errorContainer.classList.remove("hidden");
            }
        });
    }else {

        console.log('staticForm is FALSE')
    }
})();
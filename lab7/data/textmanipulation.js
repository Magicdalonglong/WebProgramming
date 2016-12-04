
 module.exports = function(text, string, number, distance){
        console.log('solution in data/textmanipulation.js ');
       
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
        return text  ;     
    } 


function sumOfSquares(num1, num2, num3){
    
    if(num1==undefined||num2==undefined||num3==undefined)
        throw ('intput is not valid');
    if(typeof num2!=="number"||typeof num2 !=="number" ||typeof num3 !=="number" )    
        throw "intput type wrong";    
    

    return num1*num1+num2*num2+num3*num3;
}

function sayHelloTo(firstName, lastName, title){

    
    if(typeof firstName!=="string"&&typeof lastName !=="string" &&typeof title !=="string" )    
        throw "intput type wrong";


    if(!firstName)throw "error";
    let res=firstName;
    if(lastName&&!title){
        if(typeof lastName !=="string")
            throw "input type error";
        res+=(" "+lastName+". I hope you are having a good day");
    
    }
       
    if(lastName&&title)
    {  
        if(typeof lastName !=="string"|typeof title !=="string")
            throw "input type error"; 
        res=title+" "+res+" "+lastName+"! Have a good evening";
    }
    res = "Hello, "+res+"!";
    console.log(res);
}
function cupsOfCoffee(howManyCups){


    if(howManyCups==undefined)
        throw "intput is not valid";
    if(typeof howManyCups!=="number")    
        throw "intput type wrong";
    if(howManyCups<=0)
        throw "Please input a positive number";
    while(howManyCups>0){
       console.log(howManyCups+" cups of coffee on the desk! "+(howManyCups--)+" cups of coffee!"); 
       if(howManyCups)console.log("Pick one up, drink the cup, "+howManyCups+" cups of coffee on the desk!\n");    
       else console.log("Pick it up, drink the cup, no more coffee left on the desk!");
    }
}
function occurrencesOfSubstring(fullString, substring){

    if(fullString==undefined||substring==undefined)
        throw ('intput is not valid');
    if(typeof fullString!=="string"||typeof substring !=="string" )
        throw "intput type wrong";  

    let len=substring.length;
    let size=fullString.length;
    let res=0;
    for(let i=0;i<=size-len;i++)
        if(fullString.substr(i,len)==substring)res++;
    return res;
    
}
function randomizeSentences(paragraph){
    if(paragraph==undefined)
        throw ('intput is not valid');
    if(typeof paragraph!=="string")
        throw "intput type wrong";  

    let j,i, x;
    let res=paragraph.split(",");
    let len=res.length;


    for (i = len; i; i--) {
        j = Math.floor(Math.random() * i);
        x = res[i - 1];
        res[i - 1] = res[j];
        res[j] = x;
    }
    let ret=""; 
    for(a in res)
        ret+=res[a];
    return ret;
}

//sayHelloTo(); // throws 
sayHelloTo("Lei");

sayHelloTo("Lei", "Duan"); //logs: Hello, Phil Barresi. I hope you are having a good day!

sayHelloTo("Lei", "Duan", "Mr.");  // logs: Hello, Mr. Phil Barresi! Have a good evening!

cupsOfCoffee(5)

console.log("\noccurrencesOfSubstring(\"hello world\"\", \"o\"): "+occurrencesOfSubstring("hello world", "o"));
console.log("\noccurrencesOfSubstring(\"Helllllllo, class!\", \"ll\"): "+occurrencesOfSubstring("Helllllllo, class!", "ll"));


var paragraph = "Hello, world! I am a paragraph. You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks -- no quotations.";

console.log('\n'+randomizeSentences(paragraph));
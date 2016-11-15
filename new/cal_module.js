console.log(exports===module.exports);

module.exports={ 
	
description:"this is a calculator from export module",
	
 div:(num1,num2)=>{

	if(num1==undefined||typeof num1 !=="number" )
	{
		throw "num1 is not a number";
	}
	if(num2==undefined||typeof num2 !=="number" )
	{
		throw "num2 is not a number";
	}
	if(num2==0){
		throw "num2 cannot be 0"
	}
	return num1/num2;
},
 mul :(num1,num2)=> {
	 if(num1==undefined||typeof num1 !=="number" )
	{
		throw "num1 is not a number";
	}
	if(num2==undefined||typeof num2 !=="number" )
	{
		throw "num2 is not a number";
	}
	return num1*num2;
},
 add: (num1,num2)=> {
	 if(num1==undefined||typeof num1 !=="number" )
	{
		throw "num1 is not a number";
	}
	if(num2==undefined||typeof num2 !=="number" )
	{
		throw "num2 is not a number";
	}
	return num1+num2;
},
 sub: (num1,num2)=> {
	 if(num1==undefined||typeof num1 !=="number" )
	{
		throw "num1 is not a number";
	}
	if(num2==undefined||typeof num2 !=="number" )
	{
		throw "num2 is not a number";
	}
	return num1-num2;
}
};


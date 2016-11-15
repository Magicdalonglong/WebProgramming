

module.exports={

	createMetrics : (text) => {
		let sen=0;
		for(i in text){
			if(text[i]=='.'||text[i]=='?'||text[i]=='!'||text[i]=='.')
				sen++;		
		};
		let ary = text.match(/\w+/g);
		
		let data = {};		
		ary.forEach( function(element, index) {
			if(data.hasOwnProperty(element.toLowerCase()))
				data[element.toLowerCase()]++;
			else 
				data[element.toLowerCase()]=1;

		});	

		let totalLetters=0,totalWords=0,uniqueWords=0,longWords=0;
		Object.keys(data).forEach(function (key) {
   			// do something with obj[key]
   			totalLetters+=(data[key]*key.length);
   			totalWords+=data[key];
   			uniqueWords++;
   			if(key.length>=6)
   				longWords++;
		});
		let averageWordLength = totalLetters / totalWords;
		let textComplexity = totalWords / sen + (longWords * 100)/totalWords;

		let res = {};
		res["totalLetters"]=totalLetters;
		res["totalWords"]=totalWords;
		res["uniqueWords"]=uniqueWords,
		res["longWords"]=longWords;
		res["averageWordLength"]=parseFloat(averageWordLength.toFixed(2));
		res["textComplexity"]=parseFloat(textComplexity.toFixed(2));		
		res["wordOccurrences"]=data;
		
	
		return res;

	}
}




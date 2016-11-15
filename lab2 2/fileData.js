


const fs=require('fs');


module.exports={

	getFileAsString:(path)=>{
		return new Promise((fulfill,reject)=>{
		
			if(!path) {
				reject("You did not provide a path");
				return;
			}

			fs.readFile(path,"utf-8",(err,data)=>{
					if(err) reject(err);
					fulfill(data);
				});

		});
	},
	getFileAsJSON:(path)=>{
		return new Promise((fulfill,reject)=>{
		
			if(!path) {
				reject("You did not provide a path");
				return;
			}

			fs.readFile(path,"utf-8",(err,data)=>{
				if(err) reject(err);
				try{
					let jsondata =  JSON.parse(data);
					fulfill(jsondata);	
				}catch(err){
					reject(err);
				}	
			});	

		});

	},
	saveStringToFile:(path,text)=>{
		return new Promise((fulfill, reject) => {
        if (!path) throw "No path provided";

        fs.writeFile(path, text, (err) => {
            if (err) {
                reject(err);
                return;
            }

            fulfill(true);
        });
    });

	},
	saveJSONToFile:(path,obj)=>{
		return new Promise((fulfill, reject) => {
        if (!path) throw "No path provided";

        fs.writeFile(path, JSON.stringify(obj, null, 4), (err, data) => {
            if (err) {
                reject(err);
                return;
            }

            fulfill(true);
        });
    });
	},

}



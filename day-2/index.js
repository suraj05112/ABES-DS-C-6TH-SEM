import fs from 'fs';
// const fs= require('fs');
// console.log(fs);
writefileSync();
const  writefileSync=(path,data)=>{
    try{
        fs.writeFileSync(path,data);
    console.log("data has been sucessfully");
    }catch(erro){
        console.log("unable to write");
    }
}
const readFileSync=(path,data)=>{
    try{
        fs.appendFileSync (path,data);
        
        const data=fs.readFileSync(path,"utf-8");
        console.log(data);
    }catch(error){
     console.log("unable to read data");
    }
}



import fs from "fs";
const readDirSync=(file)=>{
    try{
    const fileData=fs.readDirSync(file);
    console.log(fileData);
    }catch(error){
      console.log("unable to read dir")
    }

}
const makeDirSync=(file)=>{
   try{
     fs.makeDirSync(file);
    console.log("direcory hsa been successfully");
}catch(error){
    console.log("unable to the directory file");
}
   }
const removeDirSync=(file)=>{
    try{
        
    }catch(error){

    }
}
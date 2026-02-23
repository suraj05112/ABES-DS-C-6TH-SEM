import fs from "fs/promises";
export const writeFile=async(path,data)=>{
    let message="";
    let status=0
    try{
       await fs.writeFile(path.json.stringify(data,null,2));
        message="user has been register successfully";
        status=200;
    }catch(error){
        message="unable to register";
        status=500;

    }
    return{message,status}
}
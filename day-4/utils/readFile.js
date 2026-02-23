import fs from "fs/promises"
import { json } from "stream/consumers";
export const readFile=async(path)=>{
    try{
        const data=await fs.readFile(path,"utf-8");
        return json.parse(data);;
    }catch(error){
        console.log("unable to data")
    }
}
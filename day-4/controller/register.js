import {readFile} from "../utils/readFile;";
import { writeFile } from "../utils/writefile";

const register = async(users,userDetails)=>{
    const updatedata=[...users,userDetails];
    const response=await writeFile(File,updatedata)
}
const userRegister=async(userDetails)=>{
    const{name,email,password,gender}=userDetails;
    if(!name || !email || !password || !gender){
        console.log("aAll filed is requiere");
        return;
    }
    const users=await readFile(File);
    if(users.length==0){
        register(users,userDetails);
    }
    const existingfuser=users.find((u)=>u.email ===email);
    if(existingfuser){
        console.log("user is the all ready register");
        return;

    }
    register();
}
userRegister({
    "name": "Sela Devon",
  "email": "sdevon1@examiner.com",
  "password": "bH0\\%giktql4o",
  "gender": "Female"
})
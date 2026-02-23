// controller/login.js
import { readFile } from "../utils/readFile.js";

const File = "../users.json";

const userLogin = async (userDetails) => {
  const { email, password } = userDetails;

  const users = await readFile(File);

  if (!users || users.length === 0) {
    console.log("No users registered yet");
    return;
  }

  const user = users.find((u) => u.email === email);

  if (!user) {
    console.log("User is not registered");
    return;
  }

  if (user.password === password) {
    console.log("Login successful");
  } else {
    console.log("Incorrect password");
  }
};

// Example usage
userLogin({
  email: "twisdish0@parallels.com",
  password: "zX4\\PN*\\(>)fYbl",
});
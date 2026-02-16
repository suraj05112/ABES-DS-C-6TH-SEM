import fs from "fs/promises";

// const makeDir = async (path) => {
//   try {
//     await fs.mkdir(path);
//     console.log("Directory has been created successfully");
//   } catch (error) {
//     console.error("Error creating directory:", error.message);
//   }
// };
const removeDir = async (path) => {
  try {
    await fs.rm(path, { recursive: true, force: true });
    console.log("Directory removed successfully");
  } catch (error) {
    console.error("Error removing directory:", error.message);
  }
};

removeDir("./testFolder");


// makeDir("./testFolder");

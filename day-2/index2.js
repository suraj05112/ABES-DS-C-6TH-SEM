import fs from "fs/promises";

// WRITE
const writeFile = async (path, data) => {
  try {
    await fs.writeFile(path, data);
    console.log(" WRITE: Data has been written successfully");
  } catch (error) {
    console.log(" WRITE error");
  }
};

// APPEND
const appendFile = async (path, data) => {
  try {
    await fs.appendFile(path, data);
    console.log(" APPEnd Data added successfully");
  } catch (error) {
    console.log(" APPEND error");
  }
};

// READ
const readFile = async (path) => {
  try {
    const content = await fs.readFile(path, "utf-8");
    console.log(" READ File content ");
    console.log(content);
  } catch (error) {
    console.log(" READ error");
  }
};

// EXECUTION FLOW
(async () => {
  await writeFile(
    "./example.txt",
    "This data is written through async function\n"
  );

  await appendFile("./example.txt", "This line is appended later\n");

  await readFile("./example.txt");
})();

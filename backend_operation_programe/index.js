const { error } = require("console");
const express = require("express");
require("dotenv").config();
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT;
const app = express();
app.use(express.json());



const jsonFilePath = path.join(__dirname, "src", "db", "USER_DATA.json");
// Read data from the JSON file
const readData = () => {
  try {
    const data = fs.readFileSync(jsonFilePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading the file:", error);
    return [];
  }
};

// Write data to the JSON file
const writeData = (data) => {
  try {
    fs.writeFileSync(jsonFilePath, JSON.stringify(data, null, 2), "utf-8");
  } catch (error) {
    console.error("Error writing to the file:", error);
  }
};





// Route to get user by email
app.get("/api/users/:email", (req, res) => {
  const email = req.params.email;
  const users = readData(); // Always read the latest data
  const user = users.find((user) => user.email === email);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.json(user);
});





// POST route to add a new user
app.post("/api/users", (req, res) => {
  console.log("Request body:", req.body); // Log request body
  const { name, age, email, gender } = req.body; // Get the new user data from the request body

  if (!name || !age || !email || !gender) {
    return res.status(400).json({ status: "Error", message: "Missing required fields" });
  }

  const users = readData(); // Read the existing users
  const newUser = { name, age, email, gender };

  // Check if email already exists
  if (users.some((user) => user.email === email)) {
    return res.status(400).json({ status: "Error", message: "Email already exists" });
  }

  // Add the new user to the array
  users.push(newUser);

  // Write the updated users array to the file
  writeData(users);

  return res.status(201).json({ status: "User added successfully", newUser });
});


// Route to get all users
app.get("/api/users", (req, res) => {
  const users = readData(); // Always read the latest data
  return res.json(users);
});





// route to update the user details by email

app.put("/api/users/:email", (req, res) => {

    const email = req.params.email;
    const {name, age, gender} = req.body;


    //check the data is present or not for the update
    if(!name && !age && !gender ) {
        return res.status(400).json({status: "Error", message: "no data to update in it"});
    }



    const users = readData();
    const user = users.find((user) => user.email === email )

    if(!user){
        return res.status(400).json({status: "Error", message: "User is not exit"}) //check user is exit or not
    }

    //updaate the user details
    if(name) user.name = name;
    if(age) user.age = age;
    if(gender) user.gender = gender;

    writeData(users);


    return res.status(200).json({message: "user details is updated"});

    
})




// route for the delete the user

app.delete("/api/users/:email", (req, res) => {

    const email = req.params.email;

    const users = readData();
    
    const userIndex = users.findIndex((user) => user.email === email);

    if(userIndex === -1) {
        return res.status(400).json({status: "Error", message: "user is not exist"}) //check user is exist or not
    }

    users.splice(userIndex, 1); // delete the user 

    writeData(users);

    return res.status(200).json({ message: "user is deleted successfully"});



})



// Start the server
app.listen(PORT, () => {
  console.log(`This app is listening on port: ${PORT}`);
});


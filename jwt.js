// Import JWT library
const jwt = require("jsonwebtoken");

// Secret key (used to sign and verify)
const SECRET_KEY = "secret123";

// ---------------------
// STEP 1: Generate Token
// ---------------------
const user = { username: "admin" }; // sample user
const token = jwt.sign(user, SECRET_KEY, { expiresIn: "1h" });
console.log("✅ Generated Token:\n", token);

// ---------------------
// STEP 2: Verify Token
// ---------------------
try {
  const decoded = jwt.verify(token, SECRET_KEY);
  console.log("\n✅ Token is valid!");
  console.log("Decoded Data:", decoded);
} catch (err) {
  console.log("\n❌ Invalid Token:", err.message);
}


//after running the code
//verify from this 

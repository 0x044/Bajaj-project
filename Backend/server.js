const express = require("express");
const cors = require("cors");
const bfhlRoutes = require("./routes/bfhl");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/bfhl", bfhlRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger/swagger");

app.use(express.json());
app.use(cors());

app.use("/api/v1", routes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("*", (_, res) => {
  res.status(404).json({
    data: null,
    message: "Route not found",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});

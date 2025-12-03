const express = require("express");
const app = express();
const PORT = 3000;

// Pour lire le JSON dans les requêtes POST
app.use(express.json());

// Import des routes
const brandsRoutes = require("./routes/brands");
const carModelsRoutes = require("./routes/carModels");

// Utilisation des routes
app.use("/brands", brandsRoutes);
app.use("/models", carModelsRoutes);

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
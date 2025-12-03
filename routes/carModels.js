const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/carModels.json");

// GET - tous les modèles
router.get("/", (req, res) => {
  const models = JSON.parse(fs.readFileSync(filePath));
  res.json(models);
});

// GET - modèle par ID
router.get("/:id", (req, res) => {
  const models = JSON.parse(fs.readFileSync(filePath));
  const model = models.find(m => m.id == req.params.id);

  if (!model) return res.status(404).json({ error: "Model not found" });

  res.json(model);
});

// POST - ajouter un modèle
router.post("/", (req, res) => {
  const models = JSON.parse(fs.readFileSync(filePath));

  const { name, brandId } = req.body;

  // Validation du name
  if (!name || typeof name !== "string" || name.trim() === "") {
    return res.status(400).json({ error: "Le champ 'name' est requis et doit être une chaîne de caractères non vide." });
  }

  const newModel = {
    id: models.length ? models[models.length - 1].id + 1 : 1, // ID automatique
    name: name.trim(),
    brandId // ID de la marque fourni
  };

  models.push(newModel);
  fs.writeFileSync(filePath, JSON.stringify(models, null, 2));

  res.status(201).json(newModel);
});


// DELETE - supprimer un modèle
router.delete("/:id", (req, res) => {
  const models = JSON.parse(fs.readFileSync(filePath));
  const filtered = models.filter(m => m.id != req.params.id);

  fs.writeFileSync(filePath, JSON.stringify(filtered, null, 2));

  res.json({ message: "Model deleted" });
});

module.exports = router;
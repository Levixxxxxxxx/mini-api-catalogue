const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/brands.json");

// GET - toutes les marques
router.get("/", (req, res) => {
  const brands = JSON.parse(fs.readFileSync(filePath));
  res.json(brands);
});

// GET - marque par ID
router.get("/:id", (req, res) => {
  const brands = JSON.parse(fs.readFileSync(filePath));
  const brand = brands.find(b => b.id == req.params.id);

  if (!brand) return res.status(404).json({ error: "Brand not found" });

  res.json(brand);
});

// POST - ajouter une marque
router.post("/", (req, res) => {
  const brands = JSON.parse(fs.readFileSync(filePath));

  // Validation simple
  const { name } = req.body;
  if (!name || typeof name !== "string" || name.trim() === "") {
    return res.status(400).json({ error: "The 'name' field is required and must be a non-empty string" });
  }

  const newBrand = {
    id: brands.length ? brands[brands.length - 1].id + 1 : 1,
    name: name.trim() // on supprime les espaces avant/après
  };

  brands.push(newBrand);
  fs.writeFileSync(filePath, JSON.stringify(brands, null, 2));

  res.status(201).json(newBrand);
});


// DELETE - supprimer une marque
router.delete("/:id", (req, res) => {
  const brands = JSON.parse(fs.readFileSync(filePath));
  const filtered = brands.filter(b => b.id != req.params.id);

  fs.writeFileSync(filePath, JSON.stringify(filtered, null, 2));

  res.json({ message: "Brand deleted" });
});

module.exports = router;
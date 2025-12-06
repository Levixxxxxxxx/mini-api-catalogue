const API_BASE = 'http://localhost:3000'; // Change selon ton serveur

// Brands
export const getBrands = async () => {
  const res = await fetch(`${API_BASE}/brands`);
  return res.json();
};

export const getBrandById = async (id) => {
  const res = await fetch(`${API_BASE}/brands/${id}`);
  return res.json();
};

export const addBrand = async (brand) => {
  const res = await fetch(`${API_BASE}/brands`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(brand),
  });
  return res.json();
};

export const updateBrand = async (id, brand) => {
  const res = await fetch(`${API_BASE}/brands/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(brand),
  });
  return res.json();
};

export const deleteBrand = async (id) => {
  return fetch(`${API_BASE}/brands/${id}`, { method: 'DELETE' });
};

// Models
export const getModels = async () => {
  const res = await fetch(`${API_BASE}/models`);
  return res.json();
};

export const getModelById = async (id) => {
  const res = await fetch(`${API_BASE}/models/${id}`);
  return res.json();
};

export const addModel = async (model) => {
  const res = await fetch(`${API_BASE}/models`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(model),
  });
  return res.json();
};

export const updateModel = async (id, model) => {
  const res = await fetch(`${API_BASE}/models/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(model),
  });
  return res.json();
};

export const deleteModel = async (id) => {
  return fetch(`${API_BASE}/models/${id}`, { method: 'DELETE' });
};

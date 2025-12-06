import { useEffect, useState } from 'react';
import { getModels, getBrands, addModel, deleteModel } from '../api';

export default function Models() {
  const [models, setModels] = useState([]);
  const [brands, setBrands] = useState([]);
  const [name, setName] = useState('');
  const [brandId, setBrandId] = useState('');

  useEffect(() => {
    fetchModels();
    fetchBrands();
  }, []);

  const fetchModels = async () => {
    const data = await getModels();
    setModels(data);
  };

  const fetchBrands = async () => {
    const data = await getBrands();
    setBrands(data);
  };

  const handleAdd = async () => {
    if (!name || !brandId) return;
    await addModel({ name, brandId });
    setName('');
    setBrandId('');
    fetchModels();
  };

  const handleDelete = async (id) => {
    await deleteModel(id);
    fetchModels();
  };

  return (
    <div>
      <div className="mb-4 flex gap-2">
        <input className="border p-2 rounded" type="text" placeholder="Nom du modèle" value={name} onChange={(e) => setName(e.target.value)} />
        <select className="border p-2 rounded" value={brandId} onChange={(e) => setBrandId(e.target.value)}>
          <option value="">Sélectionner une marque</option>
          {brands.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
        </select>
        <button className="bg-green-500 text-white px-4 rounded" onClick={handleAdd}>Ajouter</button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {models.map(m => (
          <div key={m.id} className="bg-white p-4 rounded shadow flex justify-between items-center">
            <span>{m.name} ({brands.find(b => b.id === m.brandId)?.name})</span>
            <button className="bg-red-500 text-white px-2 rounded" onClick={() => handleDelete(m.id)}>Supprimer</button>
          </div>
        ))}
      </div>
    </div>
  );
}

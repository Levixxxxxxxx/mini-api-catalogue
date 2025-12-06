// import { useEffect, useState } from 'react';
// import { getBrands, deleteBrand, addBrand, updateBrand } from '../api';

// export default function Brands() {
//   const [brands, setBrands] = useState([]);
//   const [name, setName] = useState('');

//   useEffect(() => {
//     fetchBrands();
//   }, []);

//   const fetchBrands = async () => {
//     const data = await getBrands();
//     setBrands(data);
//   };

//   const handleAdd = async () => {
//     if (!name) return;
//     await addBrand({ name });
//     setName('');
//     fetchBrands();
//   };

//   const handleDelete = async (id) => {
//     await deleteBrand(id);
//     fetchBrands();
//   };

//   return (
//     <div>
//       <div className="mb-4 flex gap-2">
//         <input
//           className="border p-2 rounded"
//           type="text"
//           placeholder="Nom de la marque"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <button className="bg-green-500 text-white px-4 rounded" onClick={handleAdd}>Ajouter</button>
//       </div>
//       <div className="grid grid-cols-3 gap-4">
//         {brands.map((brand) => (
//           <div key={brand.id} className="bg-white p-4 rounded shadow flex justify-between items-center">
//             <span>{brand.name}</span>
//             <button className="bg-red-500 text-white px-2 rounded" onClick={() => handleDelete(brand.id)}>Supprimer</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



import { useEffect, useState } from "react";
import { getBrands, deleteBrand, addBrand, updateBrand } from "../api";

export default function Brands() {
  const [brands, setBrands] = useState([]);
  const [newName, setNewName] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");

useEffect(() => {
  getBrands().then((data) => console.log("API →", data));
  fetchBrands();
}, []);

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    const data = await getBrands();
    setBrands(data);
  };

  const handleAdd = async () => {
    if (!newName.trim()) return;
    await addBrand({ name: newName });
    setNewName("");
    fetchBrands();
  };

  const handleDelete = async (id) => {
    await deleteBrand(id);
    fetchBrands();
  };

  const handleEdit = (brand) => {
    setEditingId(brand.id);
    setEditValue(brand.name);
  };

  const handleSave = async (id) => {
    if (!editValue.trim()) return;

    await updateBrand(id, { name: editValue });
    setEditingId(null);
    setEditValue("");
    fetchBrands();
  };

  return (
    <div>
      {/* Ajouter une marque */}
      <div className="mb-4 flex gap-2">
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="Nom de la marque"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <button
          className="bg-green-500 text-white px-4 rounded"
          onClick={handleAdd}
        >
          Ajouter
        </button>
      </div>

      {/* Liste des marques */}
      <div className="grid grid-cols-3 gap-4">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="bg-white p-4 rounded shadow flex justify-between items-center"
          >
            {editingId === brand.id ? (
              <input
                className="border p-1 rounded"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
              />
            ) : (
              <span>{brand.name}</span>
            )}

            <div className="flex gap-2">
              {editingId === brand.id ? (
                <button
                  className="bg-blue-500 text-white px-2 rounded"
                  onClick={() => handleSave(brand.id)}
                >
                  Sauver
                </button>
              ) : (
                <button
                  className="bg-yellow-500 text-white px-2 rounded"
                  onClick={() => handleEdit(brand)}
                >
                  Modifier
                </button>
              )}

              <button
                className="bg-red-500 text-white px-2 rounded"
                onClick={() => handleDelete(brand.id)}
              >
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

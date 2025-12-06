import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Brands from './pages/Brands';
import Models from './pages/Models';

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="p-6 flex-1 overflow-auto bg-gray-100">
            <Routes>
              <Route path="/brands" element={<Brands />} />
              <Route path="/models" element={<Models />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import ProductCard from './component/ProductCard';
import Cancel from './pages/Cancel';
import Success from './pages/Success';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductCard />} />
      <Route path="/success" element={<Success />} />
      <Route path="/cancel" element={<Cancel />} />
    </Routes>
  );
};

export default App;

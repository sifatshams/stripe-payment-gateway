import { Route, Routes } from 'react-router-dom';
import ProductCard from './component/ProductCard';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductCard />} />
    </Routes>
  );
};

export default App;

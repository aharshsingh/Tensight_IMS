import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './page/Dashboard';
import Home from './page/Home';
import About from './page/About';
import AddProduct from './page/AddProduct';
import AddCategory from './page/AddCategory';
import AddStock from './page/AddStock';
import RiskProduct from './page/RiskProduct';

function App() {
  return (
    <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/dashboard" Component={Dashboard} />
              <Route path="/about" Component={About} />
              <Route path="/dashboard/addProduct" Component={AddProduct} />
              <Route path="/dashboard/addCategory" Component={AddCategory} />
              <Route path="/dashboard/addstock" Component={AddStock} />
              <Route path="/dashboard/riskproduct" Component={RiskProduct} />
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;

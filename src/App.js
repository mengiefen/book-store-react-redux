import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Books from './Pages/Books';
import Categories from './Pages/Categories';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;

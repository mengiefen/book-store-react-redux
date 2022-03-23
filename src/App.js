import './App.css';
import Book from './components/Book/Book';
import Form from './components/Form/Form';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Book />
      <Form />
    </div>
  );
}

export default App;

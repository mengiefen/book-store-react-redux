import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './Header/Header';
import Books from './Pages/Books';
import Categories from './Pages/Categories';

const theme = {
  colors: {
    lightPrimary: '#4386bf',
    primary: '#0290ff',
    textDarkColor: '#222',
    textMediumColor: '#555',
    textLightColor: '#777',
    backgroundColor: '#fff',
    darkBackgroundColor: '#e8e8e8',
    shadowColor: '#c8c8c8',
  },

  colors1: {
    lightPrimary: '#a86add',
    primary: '#8549a7',
    textDarkColor: '#222',
    textMediumColor: '#555',
    textLightColor: '#777',
    backgroundColor: '#fff',
    darkBackgroundColor: '#e8e8e8',
    shadowColor: '#c8c8c8',
  },

  devices: {
    mobile: '567px',
    note: '767px',
    tab: '1024px',
    desktop: '1280px',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;

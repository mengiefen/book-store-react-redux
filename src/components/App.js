import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './Header/Header';
import Books from './Pages/Books';
import Categories from './Pages/Categories';

const theme = {
  colors: {
    coolBlue: '#4386bf',
    blue: ' #0290ff',
    blackOne: '#121212',
    blacktwo: '#1e1e1e',
    warmGrey: '#888',
    light: '#fff',
    grey: '#e8e8e8',
    shadow: '#c8c8c8',
    dirtyWhite: '#fafafa',
  },

  colors1: {
    lightPrimary: '#a86add',
    primary: '#8549a7',
    blackTwo: '#121212',
    textMediumColor: '#555',
    textLightColor: '#777',
    backgroundColor: '#fff',
    grey: '#e8e8e8',
    shadowColor: '#c8c8c8',
  },

  colors2: {
    bubbleGumPink: '#ff5ab7',
    blackTwo: '#1e1e1e',
    black1: '#000',
    pinkishGrey: '#c4c4c4',
    blackOne: '#121212',
    greyBorder: ' #e8e8e8,',
    coolBlue: '#4386bf',
    pinkishGrey2: '#c7c7c7',
    paleGrey: '#f5f6fa',
    dirtyWhite: ' #fafafa',
    warmGrey: '#888',
    azure: ' #0290ff',
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

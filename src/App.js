import './App.css';

import Header from './components/Header';
import Sobre from './pages/Sobre';
import Footer from './components/Footer';
import Contato from './pages/Contato';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
          <Routes>
              <Route path='/' element={ <Sobre /> } />
              <Route path='/contato' element={ <Contato /> } />
          </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

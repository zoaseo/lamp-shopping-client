import './App.css';
import Footer from './include/Footer';
import Header from './include/Header';
import MainPage from './main';
import ProductPage from './product';
import { Routes, Route } from 'react-router-dom';
import UploadPage from './upload';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/product/:id" element={<ProductPage/>}/>
          <Route path="/upload" element={<UploadPage/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;

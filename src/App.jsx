
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/footer/Footer';
import { Nav } from './components/nav/Nav';
import Screen from './components/screen/Screen';

function App() {
  return (
    <div>
            <Nav />
        <Routes>
            <Route path="/:class" element={<Screen /> } />
        </Routes>
            <Screen />
            <Footer />
    </div>  
  );
}

export default App;

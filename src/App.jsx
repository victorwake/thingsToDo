
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Nav } from './components/nav/Nav';
import Screen from './components/screen/Screen';

function App() {
  return (
    <div>
            <Nav />
        <Routes>
            <Route path="/light:class" element={<Screen /> } />
        </Routes>
            <Screen />
    </div>  
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Layout from './components/Layout';
import Error from './components/Error';

import './App.css';
import Dragons from './components/Dragons';
import Missions from './components/Missions';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route index path='/rockets' element={<Home />} />
        <Route index path='/dragons' element={<Dragons />} />
        <Route index path='/missions' element={<Missions />} />
        <Route path='*' element={<Error />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;

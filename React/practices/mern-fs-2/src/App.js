import './App.css';
import { Home } from './Pages/Home';
import { Contact } from './Pages/Contact';
import {Error} from './Pages/Error';
import {  Link, Route, Routes, useRoutes } from 'react-router-dom';
import { DataRoutes } from './Routes/DataRoutes';

function App() {
  let Element = useRoutes([
    {path: '/', element: <Home />},
    {path: '/data/*', element: <DataRoutes />},
    {path: '/contact', element: <Contact />},
  ]);
  return(
    <>
      <nav>
        <ul>
          <li><Link style={{textDecoration: "none"}} to='/'>Home</Link></li>
          <li><Link to="/data">Data</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/data/*" element={<DataRoutes />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}



export default App;

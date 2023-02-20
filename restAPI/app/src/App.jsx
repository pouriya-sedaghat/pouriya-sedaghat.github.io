import { Routes, Route } from 'react-router-dom';
import Template from './container';
import Home from './pages/Home';
import Country from './pages/Country';
import NotFound from './pages/NotFound';
const App = () => {
  return (
    <>
      <Template>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Region:country' element={<Country />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Template>
    </>
  );
}
export default App;
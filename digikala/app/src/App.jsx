import { Routes, Route } from "react-router-dom";
import Template from './container/index';
import Home from './pages/Home';
import Login from './pages/Login';
import Accont from './pages/Accont';
const App = () => {
  return (
    <>
      <Template>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Accont:user_id' element={<Accont />} />
          <Route path='*' element={<h1 style={{ marginTop: '140px' }}>پیدا نشد !</h1>} />
        </Routes>
      </Template>
    </>
  );
}
export default App;
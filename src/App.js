
import './App.css';
import MoreDetails from './Component/MoreDetails';
import UserList from './Component/UserList';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    
  <div>
  <Routes>
    <Route path='/' element={<UserList/>}/>
    <Route path='/details/:id' element={<MoreDetails />}/>
  </Routes>



  </div>
  );
}

export default App;

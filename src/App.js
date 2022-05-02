import { Route,Routes } from 'react-router';
import './App.css';
import Firstpage from './Components/Firstpage';
import Secondpage from './Components/Secondpage';
import Verifying from './Components/Verifying';
import Registration from './Components/Registration';
import Companywelcome from './Components/Companywelcome';
function App() {
  return (
    <div>
    <Routes>
    <Route path="/welcomepage" element={<Firstpage/>}/>
    <Route path="/verification" element={<Secondpage/>}/>
    <Route path="/verifying" element={<Verifying/>}/>
    <Route path="/registration" element={<Registration/>}/>
    <Route path="/companywelcome" element={<Companywelcome/>}/>
    </Routes>
    </div>
  );
}

export default App;

import Navbar from './components/Navbar';
import Home from './pages/Home';
import {Routes , Route} from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <div>
    <AuthContextProvider>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </AuthContextProvider>
    </div>
  );
}

export default App;

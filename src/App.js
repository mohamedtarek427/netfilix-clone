import Navbar from './components/Navbar';
import Home from './pages/Home';
import {Routes , Route} from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { Account } from './pages/Account';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  return (
    <>
    <AuthContextProvider>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/account" element={
        <ProtectedRoute>
        <Account />
        </ProtectedRoute>
      } />
    </Routes>
    </AuthContextProvider>
    </>
  );
}

export default App;

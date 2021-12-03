import { useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import HomePage from './pages/Homepage';
import PostQuote from './pages/PostQuote';

function App() {
  const user = useSelector((state) => state.userData.data);

  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<HomePage />} />
      <Route
        path="/auth/login"
        element={user ? <Navigate to="/" /> : <Login />}
      />
      <Route
        path="/auth/register"
        element={user ? <Navigate to="/" /> : <Register />}
      />
      <Route
        path="/post-quote"
        element={user ? <PostQuote /> : <Navigate to="/" />}
      />
    </Routes>
  );
}

export default App;

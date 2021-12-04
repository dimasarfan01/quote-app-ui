import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { userDataListener } from './features/userData/userDataSlice';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import HomePage from './pages/Homepage';
import PostQuote from './pages/PostQuote';
import Profile from './pages/Profile';
import Tag from './pages/Tag';

function App() {
  const user = useSelector((state) => state.userData.data);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      dispatch(userDataListener());
    }
  }, [location.pathname]);

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
      <Route
        path="/profile"
        element={user ? <Profile /> : <Navigate to="/" />}
      />
      <Route path="/tag/:tagName" element={<Tag />} />
    </Routes>
  );
}

export default App;

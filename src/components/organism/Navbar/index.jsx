import { BsList } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import IconTitle from '../../atoms/IconTitle';
import NavList from './NavList';
import {
  BsFillPersonFill,
  BsPencilSquare,
  BsFillArrowLeftSquareFill,
} from 'react-icons/bs';
import { setDataUser } from '../../../features/userData/userDataSlice';
import Cookies from 'js-cookie';

function Navbar() {
  const user = useSelector((state) => state.userData.data);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    dispatch(setDataUser(null));
    Cookies.remove('token');
  };

  return (
    <nav className="navbar mb-2 shadow-md justify-between px-4">
      <IconTitle />
      {user ? (
        <div className="flex">
          <div className="dropdown dropdown-end">
            <div
              tabIndex="0"
              className="m-1 btn bg-white text-black rounded-full shadow-md hover:text-white p-3"
            >
              <BsList className="h-6 w-6" />
            </div>
            <ul
              tabIndex="0"
              className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 mt-4"
            >
              <NavList
                name="Profile"
                icon={<BsFillPersonFill />}
                link="/profile"
              />
              <NavList
                name="Post Quote"
                icon={<BsPencilSquare />}
                link="/post-quote"
              />
              <NavList
                noLink
                name="Logout"
                icon={<BsFillArrowLeftSquareFill />}
                onClick={handleLogout}
              />
            </ul>
          </div>
        </div>
      ) : (
        <Link to="/auth/login">
          <button className="btn">Login</button>
        </Link>
      )}
    </nav>
  );
}

export default Navbar;

import { Link } from 'react-router-dom';

function NavList(props) {
  const { name, icon, link, onClick, noLink } = props;

  if (noLink) {
    return (
      <li
        className="hover:bg-gray-200 rounded-xl flex items-center flex-row font-mono cursor-pointer"
        onClick={onClick}
      >
        <span>{icon}</span>
        <p>{name}</p>
      </li>
    );
  }

  return (
    <Link to={link}>
      <li className="hover:bg-gray-200 rounded-xl flex items-center flex-row font-mono">
        <span>{icon}</span>
        <p>{name}</p>
      </li>
    </Link>
  );
}

export default NavList;

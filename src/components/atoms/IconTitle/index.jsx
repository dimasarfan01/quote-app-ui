import { BsCardHeading } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function IconTitle() {
  return (
    <Link to="/">
      <div className="flex flex-row items-center space-x-2 hover:text-lg ease-in-out duration-500">
        <BsCardHeading className="h-8 w-8" />
        <h1>Quote-App</h1>
      </div>
    </Link>
  );
}

export default IconTitle;

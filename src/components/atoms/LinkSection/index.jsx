import { Link } from 'react-router-dom';
import cx from 'classnames';

function LinkSection(props) {
  const {
    name = '',
    link = '/',
    icon = null,
    roundedLeft = false,
    roundedRight = false,
  } = props;

  const classLink = cx({
    'bg-gray-500 py-2 px-4 text-white shadow-md flex items-center space-x-2 hover:bg-gray-700 ease-in-out duration-500': true,
    'rounded-r-md': roundedRight === true,
    'rounded-l-md': roundedLeft === true,
  });

  return (
    <Link to={link}>
      <div className={classLink}>
        <span>{icon}</span>
        <p>{name}</p>
      </div>
    </Link>
  );
}

export default LinkSection;

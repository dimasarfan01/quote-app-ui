import { BsFillCircleFill } from 'react-icons/bs';

function MockupWindow({ title, children }) {
  return (
    <div className="bg-white w-full rounded-lg shadow-md relative flex flex-col items-center">
      <h1 className="absolute top-3 text-white font-bold">{title}</h1>
      <div className="bg-gray-500 p-4 flex flex-row items-center space-x-2 w-full rounded-t-lg">
        <BsFillCircleFill className="text-gray-700" />
        <BsFillCircleFill className="text-gray-700" />
        <BsFillCircleFill />
      </div>
      {children}
    </div>
  );
}

export default MockupWindow;

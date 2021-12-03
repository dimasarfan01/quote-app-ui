import { useSelector } from 'react-redux';
import MockupWindow from '../../molecules/MockupWindow';

function RightSection() {
  const states = useSelector((state) => state.postQuote);
  const user = useSelector((state) => state.userData.data);

  return (
    <div className="flex-1 flex items-center flex-col">
      <div className="w-full p-5">
        <MockupWindow title="Preview">
          <div className="flex flex-col space-y-4 w-11/12 py-4">
            <div className="flex flex-col rounded-lg shadow-md">
              <div className="p-2">
                <p>{states.quote}</p>
              </div>
              <div className="bg-gray-700 py-2 rounded-b-lg shadow-md px-4">
                <div className="flex flex-row items-center space-x-2">
                  <span className="py-4 px-6 bg-gray-900 rounded-full font-bold capitalize text-white">
                    {user.name.slice(0, 1)}
                  </span>
                  <div className="flex flex-col text-white">
                    <p>{user.email}</p>
                    <p>{user.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MockupWindow>
      </div>
    </div>
  );
}

export default RightSection;

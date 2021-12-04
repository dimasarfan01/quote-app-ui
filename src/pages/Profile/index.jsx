import { useSelector } from 'react-redux';
import InputText from '../../components/atoms/InputText';
import Navbar from '../../components/organism/Navbar';

function Profile() {
  const user = useSelector((state) => state.userData.data);
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center mt-4">
        <div className="bg-white shadow px-2 py-4 rounded-lg w-full lg:w-96 space-y-4">
          <h1 className="text-center font-mono text-lg">Profile</h1>
          <InputText placeholder={user?.name} disabled={true} />
          <InputText placeholder={user?.email} disabled={true} />
          <InputText placeholder={user?.gender} disabled={true} />
        </div>
      </div>
    </div>
  );
}

export default Profile;

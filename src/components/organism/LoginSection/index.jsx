import { BsFillCircleFill, BsHouse, BsKey } from 'react-icons/bs';
import InputText from '../../atoms/InputText';
import LinkSection from '../../atoms/LinkSection';
import InputLoginData from './InputLoginData';

function LoginSection() {
  return (
    <div className="card shadow lg:w-auto w-11/12 relative flex flex-col items-center">
      <h1 className="absolute top-3 text-white font-bold">LOGIN</h1>
      <div className="bg-gray-500 p-4 flex flex-row items-center space-x-2 w-full">
        <BsFillCircleFill className="text-gray-700" />
        <BsFillCircleFill className="text-gray-700" />
        <BsFillCircleFill />
      </div>
      <div className="flex items-center mt-4 bg-gray-50 justify-between w-full">
        <LinkSection name="Home" icon={<BsHouse />} roundedRight link="/" />
        <LinkSection
          name="Register"
          icon={<BsKey />}
          roundedLeft
          link="/auth/register"
        />
      </div>
      <InputLoginData />
    </div>
  );
}

export default LoginSection;

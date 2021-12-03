import { useState } from 'react';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';

function InputText(props) {
  const { placeholder = '', isPassword = false, ...rest } = props;
  const [showPassword, setShowPassword] = useState(false);

  if (isPassword) {
    return (
      <div className="flex relative w-full items-center">
        <button
          className="absolute right-4 text-gray-500"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <BsFillEyeSlashFill className="h-6 w-6" />
          ) : (
            <BsFillEyeFill className="h-6 w-6" />
          )}
        </button>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          className="input input-bordered w-full"
          {...rest}
        />
      </div>
    );
  }

  return (
    <input
      type="text"
      placeholder={placeholder}
      className="input input-bordered w-full"
      {...rest}
    />
  );
}

export default InputText;

import { useState } from 'react';
import { toast } from 'react-toastify';
import InputText from '../../atoms/InputText';
import { checkExistedEmail, postSignUpUser } from '../../../services/auth';
import { useNavigate } from 'react-router-dom';

function InputRegisterData() {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    gender: 'Choose your Gender',
    buttonDisabled: false,
    buttonText: 'Submit',
  });
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setState({ ...state, buttonText: 'Processing...', buttonDisabled: true });
    const checkResult = await checkExistedEmail({
      email: state.email,
    });
    if (
      !state.name ||
      !state.email ||
      !state.password ||
      state.gender === 'Choose your Gender'
    ) {
      setState({ ...state, buttonText: 'Submit', buttonDisabled: false });
      toast.warning('please fill every form');
    } else if (checkResult.data === 1) {
      setState({ ...state, buttonText: 'Submit', buttonDisabled: false });
      toast.error('Email Already Existed');
    } else {
      const data = new FormData();
      data.append('email', state.email);
      data.append('password', state.password);
      data.append('name', state.name);
      data.append('gender', state.gender);
      const result = await postSignUpUser(data);
      if (result?.error) {
        setState({ ...state, buttonText: 'Submit', buttonDisabled: false });
        toast.error(result.message);
      } else {
        setState({ ...state, buttonText: 'Success', buttonDisabled: false });
        toast.success('Sign-up successful');
        navigate('/auth/login');
      }
    }
  };

  return (
    <div className="card-body w-full lg:w-28rem space-y-4">
      <InputText
        placeholder="Enter your name"
        value={state.name}
        onChange={(e) => setState({ ...state, name: e.target.value })}
      />
      <InputText
        placeholder="Enter your email"
        value={state.email}
        onChange={(e) => setState({ ...state, email: e.target.value })}
      />
      <InputText
        isPassword
        placeholder="Enter your password"
        value={state.password}
        onChange={(e) => setState({ ...state, password: e.target.value })}
      />
      <select
        className="select select-bordered w-full"
        value={state.gender}
        onChange={(e) => setState({ ...state, gender: e.target.value })}
      >
        <option disabled="disabled" value="Choose your Gender">
          Choose your Gender
        </option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <button
        className="btn"
        onClick={handleSubmit}
        disabled={state.buttonDisabled}
      >
        {state.buttonText}
      </button>
    </div>
  );
}

export default InputRegisterData;

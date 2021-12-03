import { useState } from 'react';
import InputText from '../../atoms/InputText';
import { useNavigate } from 'react-router-dom';
import { postSignInUser } from '../../../services/auth';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { setDataUser } from '../../../features/userData/userDataSlice';
import jwtDecode from 'jwt-decode';

function InputLoginData() {
  const [state, setState] = useState({
    email: '',
    password: '',
    buttonDisabled: false,
    buttonText: 'Submit',
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async () => {
    setState({ ...state, buttonText: 'Processing...', buttonDisabled: true });
    const data = {
      email: state.email,
      password: state.password,
    };
    if (!state.email || !state.password) {
      setState({ ...state, buttonText: 'Submit', buttonDisabled: false });
      toast.warning('Please fill every form');
    } else {
      const response = await postSignInUser(data);
      if (response.error) {
        setState({ ...state, buttonText: 'Submit', buttonDisabled: false });
        toast.error(response.message);
      } else {
        setState({ ...state, buttonText: 'Submit', buttonDisabled: false });
        toast.success('Sign-in berhasil');
        const token = response.data.token;
        const payload = jwtDecode(token);
        dispatch(setDataUser(payload.user));
        const tokenBase64 = window.btoa(token);
        Cookies.set('token', tokenBase64, { expires: 1 });
        navigate('/');
      }
    }
  };

  return (
    <div className="card-body w-full lg:w-28rem space-y-4">
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
      <button
        className="btn"
        disabled={state.buttonDisabled}
        onClick={handleSubmit}
      >
        {state.buttonText}
      </button>
    </div>
  );
}

export default InputLoginData;

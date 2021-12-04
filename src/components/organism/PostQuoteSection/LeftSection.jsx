import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { setQuote, setTags } from '../../../features/postQuote/postQuoteSlice';
import { postQuoteData } from '../../../services/quote';
import InputText from '../../atoms/InputText';
import MockupWindow from '../../molecules/MockupWindow';

function LeftSection() {
  const [state, setState] = useState({
    buttonText: 'Submit',
    buttonDisabled: false,
  });
  const states = useSelector((state) => state.postQuote);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setState({ buttonText: 'Processing...', buttonDisabled: true });
    if (states.quote === '' || states.tags[0].length === 0) {
      setState({ buttonText: 'Submit', buttonDisabled: false });
      toast.warning('Please fill every form');
    } else {
      const data = new FormData();
      data.append('quote', states.quote);
      for (let i = 0; i < states.tags.length; i++) {
        data.append('tags', states.tags[i]);
      }
      const result = await postQuoteData(data);
      if (result?.error) {
        setState({ buttonText: 'Submit', buttonDisabled: false });
        toast.error(result.message);
      } else {
        setState({ buttonText: 'Success', buttonDisabled: false });
        toast.success('Post Quote Successful');
        navigate('/');
        navigate(0);
      }
    }
  };

  return (
    <div className="flex-1 flex items-center flex-col w-full p-2">
      <div className="w-full flex flex-col items-center">
        <MockupWindow title="Post Quote">
          <div className="flex flex-col space-y-4 w-11/12 py-4">
            <div className="flex flex-col">
              <label className="label">
                <span className="label-text text-lg">Quote</span>
              </label>
              <InputText
                placeholder="Example: it is what it is"
                value={states.quote}
                onChange={(e) => dispatch(setQuote(e.target.value))}
              />
            </div>
            <div className="flex flex-col">
              <label className="label">
                <span className="label-text text-lg">
                  Tags(comma separated)
                </span>
              </label>
              <InputText
                placeholder="Example: inspirational,coding,virtue,life"
                value={states.tags}
                onChange={(e) => dispatch(setTags(e.target.value))}
              />
            </div>
            <button
              className="btn"
              onClick={handleSubmit}
              disabled={state.buttonDisabled}
            >
              {state.buttonText}
            </button>
          </div>
        </MockupWindow>
      </div>
    </div>
  );
}

export default LeftSection;

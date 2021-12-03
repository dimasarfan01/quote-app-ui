import { useDispatch, useSelector } from 'react-redux';
import { setQuote, setTags } from '../../../features/postQuote/postQuoteSlice';
import InputText from '../../atoms/InputText';
import MockupWindow from '../../molecules/MockupWindow';

function LeftSection() {
  const states = useSelector((state) => state.postQuote);
  const dispatch = useDispatch();
  return (
    <div className="flex-1 flex items-center flex-col">
      <div className="w-11/12 p-5">
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
            <button className="btn">Submit</button>
          </div>
        </MockupWindow>
      </div>
    </div>
  );
}

export default LeftSection;

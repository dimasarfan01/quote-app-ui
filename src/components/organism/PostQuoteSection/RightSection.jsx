import { useSelector } from 'react-redux';
import MockupWindow from '../../molecules/MockupWindow';
import { BsFillHandThumbsUpFill, BsCode, BsCodeSlash } from 'react-icons/bs';

function RightSection() {
  const states = useSelector((state) => state.postQuote);
  const user = useSelector((state) => state.userData.data);

  return (
    <div className="flex-1 flex items-center flex-col w-full p-2">
      <div className="w-full flex flex-col items-center">
        <MockupWindow title="Preview">
          <Wrapper>
            <div className="flex flex-col rounded-lg shadow-md">
              <Quote states={states} />
              <TagsQuote states={states} />
              <FooterQuote user={user} />
            </div>
          </Wrapper>
        </MockupWindow>
      </div>
    </div>
  );
}

function Wrapper({ children }) {
  return <div className="flex flex-col space-y-4 w-11/12 py-4">{children}</div>;
}

function Quote({ states }) {
  return (
    <div className="flex flex-col p-2 break-all">
      <BsCode className="h-8 w-8" />
      <p className="text-2xl self-center text-center">{states.quote}</p>
      <BsCodeSlash className="h-8 w-8 self-end" />
    </div>
  );
}

function TagsQuote({ states }) {
  return (
    <div className="grid grid-cols-5 gap-2 break-all p-2 bg-gray-100">
      {states.tags ? (
        states.tags.map((tag, index) => <p key={index + 1}>#{tag}</p>)
      ) : (
        <p>#</p>
      )}
    </div>
  );
}

function FooterQuote({ user }) {
  return (
    <div className="bg-gray-700 py-2 rounded-b-lg shadow-md px-4">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row space-x-2 items-center">
          <span className="px-6 py-4 bg-gray-900 rounded-full font-bold capitalize text-white">
            {user.name.slice(0, 1)}
          </span>
          <div className="flex flex-col text-white">
            <p>{user.email}</p>
            <p>{user.name}</p>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-2">
          <button className="btn rounded-full bg-gray-700 border-0 px-3">
            <BsFillHandThumbsUpFill className="h-6 w-6" />
          </button>
          <span className="text-white font-bold">1</span>
        </div>
      </div>
    </div>
  );
}

export default RightSection;

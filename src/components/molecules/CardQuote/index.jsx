import {
  BsCode,
  BsCodeSlash,
  BsFillHandThumbsUpFill,
  BsFillTrashFill,
  BsPencilSquare,
} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import {
  postLikeQuoteData,
  deleteQuoteData,
  editQuoteData,
} from '../../../services/quote';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import InputText from '../../atoms/InputText';
import { useState } from 'react';

function CardQuote({ data }) {
  const navigate = useNavigate();
  const user = useSelector((state) => state.userData.data);

  const [state, setState] = useState({
    quote: '',
    tags: '',
  });

  const handleLike = async (id) => {
    if (user) {
      const result = await postLikeQuoteData(id);
      if (result?.error) {
        toast.error(result.message);
      } else {
        navigate(0);
      }
    } else {
      toast.error('Only Login user can Like Quote');
      navigate('/auth/login');
    }
  };

  const handleDelete = async (id) => {
    const result = await deleteQuoteData(id);
    if (result?.error) {
      toast.error(result.message);
    } else {
      navigate(0);
    }
  };

  const handleEdit = async (id) => {
    let tagsArray = state.tags.split(',');
    const data = new FormData();
    data.append('quote', state.quote);
    for (let i = 0; i < tagsArray.length; i++) {
      data.append('tags', tagsArray[i]);
    }
    const result = await editQuoteData(id, data);
    if (result?.error) {
      toast.error(result.message);
    } else {
      navigate(0);
    }
  };

  return data.map((item) => (
    <div key={item._id} className="rounded-lg relative">
      {item.creator._id === user?.id && (
        <div className="absolute top-4 right-4 flex flex-row space-x-4">
          <button onClick={() => handleDelete(item._id)}>
            <BsFillTrashFill className="text-red-600" />
          </button>
          <ModalUpdate
            state={state}
            setState={setState}
            handleData={() =>
              setState({ quote: item.quote, tags: item.tags.join(',') })
            }
            handleEdit={() => handleEdit(item._id)}
          />
        </div>
      )}
      <Quote data={item} />
      <TagsQuote data={item} />
      <FooterQuote data={item} onClick={() => handleLike(item._id)} />
    </div>
  ));
}

function ModalUpdate({ state, setState, handleData, handleEdit }) {
  return (
    <>
      <label
        htmlFor="my-modal-2"
        className="cursor-pointer text-blue-500"
        onClick={handleData}
      >
        <BsPencilSquare />
      </label>
      <input type="checkbox" id="my-modal-2" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box space-y-2">
          <span>Quote</span>
          <InputText
            value={state.quote}
            onChange={(e) => setState({ ...state, quote: e.target.value })}
          />
          <span>Tags</span>
          <InputText
            value={state.tags}
            onChange={(e) => setState({ ...state, tags: e.target.value })}
          />
          <div className="modal-action">
            <label
              htmlFor="my-modal-2"
              className="btn btn-primary"
              onClick={handleEdit}
            >
              Edit
            </label>
            <label htmlFor="my-modal-2" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

function Quote({ data }) {
  return (
    <div className="flex flex-col p-2 break-all rounded-t-lg shadow">
      <BsCode className="h-8 w-8" />
      <p className="text-2xl self-center text-center">{data.quote}</p>
      <BsCodeSlash className="h-8 w-8 self-end" />
    </div>
  );
}

function TagsQuote({ data }) {
  return (
    <div className="grid grid-cols-3 gap-3 break-all p-2 bg-gray-100 shadow">
      {data.tags ? (
        data.tags.map((tag, index) => (
          <Link key={index} to={`/tag/${tag}`}>
            <p className="text-sm text-gray-500 hover:text-gray-700">#{tag}</p>
          </Link>
        ))
      ) : (
        <p>#</p>
      )}
    </div>
  );
}

function FooterQuote({ data, onClick }) {
  return (
    <div className="bg-gray-700 py-2 rounded-b-lg shadow px-4">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row space-x-2 items-center">
          <span className="lg:px-6 lg:py-4 px-5 py-3 bg-gray-900 rounded-full font-bold capitalize text-white">
            {data.creator.name.slice(0, 1)}
          </span>
          <div className="flex flex-col text-white text-xs lg:text-base">
            <p>{data.creator.email}</p>
            <p>{data.creator.name}</p>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-2">
          <button
            className="btn rounded-full bg-gray-700 border-0 px-3"
            onClick={onClick}
          >
            <BsFillHandThumbsUpFill className="h-6 w-6" />
          </button>
          <span className="text-white font-bold">{data.likes.length}</span>
        </div>
      </div>
    </div>
  );
}

export default CardQuote;

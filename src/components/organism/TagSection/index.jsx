import { useState } from 'react';
import { useParams } from 'react-router';
import { useGetQuoteDataByQueryQuery } from '../../../services/quote';
import Loading from '../../atoms/Loading';
import CardQuote from '../../molecules/CardQuote';
import SelectOption from '../../molecules/SelectOption';

function TagSection() {
  const [state, setState] = useState({
    page: 1,
    limit: 6,
  });
  const { tagName } = useParams();
  const { data: quoteData, isFetching } = useGetQuoteDataByQueryQuery({
    page: state.page,
    limit: state.limit,
    tag: tagName,
  });
  if (isFetching) return <Loading />;
  let totalPage = [];
  for (let index = 1; index <= quoteData.numberOfPages; index++) {
    totalPage.push(index);
  }

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 p-2">
        <CardQuote data={quoteData.data} />
      </div>
      <SelectOption state={state} setState={setState} totalPage={totalPage} />
    </div>
  );
}

export default TagSection;

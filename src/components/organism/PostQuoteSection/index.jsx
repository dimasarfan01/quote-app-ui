import LeftSection from './LeftSection';
import RightSection from './RightSection';

function PostQuoteSection() {
  return (
    <div className="flex flex-col lg:flex-row">
      <LeftSection />
      <RightSection />
    </div>
  );
}

export default PostQuoteSection;

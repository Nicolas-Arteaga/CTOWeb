const FeedbackCard = ({ content, name, title }) => (
  <div className="process-flow__item">
    <div className="flex flex-row items-center mb-4">
      <div className="process-flow__node" aria-hidden="true">
        <span className="process-flow__glyph" />
      </div>
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[18px] leading-[24px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[14px] leading-[20px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>

    <p className="font-poppins font-normal text-[16px] leading-[26px] text-dimWhite">
      {content}
    </p>
  </div>
);

export default FeedbackCard;

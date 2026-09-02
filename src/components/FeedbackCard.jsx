const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex flex-col px-8 py-8 rounded-[20px] max-w-[370px] md:mr-6 sm:mr-4 mr-0 my-4 feedback-card">
    <div className="flex flex-row items-center mb-4">
      <div className="w-[48px] h-[48px] rounded-full bg-dimBlue flex justify-center items-center">
        <img src={img} alt={name} className="w-[24px] h-[24px] object-contain" />
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

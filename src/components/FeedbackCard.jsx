const ProcessIcon = ({ step }) => {
  const common = { viewBox: "0 0 48 48", fill: "none", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };

  if (step === 1) return <svg {...common}><path d="m24 7 16 9-16 9L8 16l16-9Z" /><path d="m8 24 16 9 16-9M8 32l16 9 16-9" /></svg>;
  if (step === 2) return <svg {...common} viewBox="0 0 64 64" strokeWidth="2.5"><path d="M22 37c2-13 13-24 30-28-1 17-11 28-25 32l-5-4Z" /><circle cx="40" cy="21" r="5.3" /><path d="m23 31-12 3 8-11 7 4Z" /><path d="m30 41-2 13 12-10-4-7Z" /><path d="m20 42-9 8M24 46l-5 10M17 39l-10 3" /></svg>;
  return <svg {...common} viewBox="0 0 64 64" strokeWidth="2.35"><circle cx="16" cy="22" r="5.5" /><circle cx="48" cy="22" r="5.5" /><path d="M4 45c0-8 5-12 12-12 2.5 0 4.7.6 6.5 1.8M60 45c0-8-5-12-12-12-2.5 0-4.7.6-6.5 1.8" /><circle cx="32" cy="17" r="7" /><path d="M18 46c0-9 5-14 14-14s14 5 14 14" /></svg>;
};

const FeedbackCard = ({ content, name, title, index }) => (
  <article className={`process-flow__item process-flow__item--${index + 1}`}>
    <div className="process-flow__card">
      <span className="process-flow__node" aria-hidden="true">{index + 1}</span>
      <span className="process-flow__icon"><ProcessIcon step={index + 1} /></span>
      <h4 className="font-poppins font-semibold text-white text-[20px] leading-[25px]">{name}</h4>
      <p className="process-flow__title font-poppins font-normal">{title}</p>
      <span className="process-flow__rule" aria-hidden="true" />
      <p className="process-flow__copy font-poppins font-normal text-dimWhite">{content}</p>
    </div>
  </article>
);

export default FeedbackCard;

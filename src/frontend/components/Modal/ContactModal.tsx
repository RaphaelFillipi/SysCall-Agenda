export function ContactModal({ children, className, title }) {
  return (
    <div
      className={`absolute inset-0 flex items-center justify-center ${className}`}
    >
      <div
        className={`relative flex justify-center w-[340px] md:w-[380px] bg-white-primary p-5 rounded-[12px] shadow-box-card`}
      >
        <div className="px-5 pb-5 pt-8 border-gray-primary border-[1.5px] rounded-[12px] w-full">
          <h6 className="absolute top-2.5 left-8 px-1 bg-white-primary font-bold text-[14px] text-black">
            {title}
          </h6>
          {children}
        </div>
      </div>
    </div>
  );
}

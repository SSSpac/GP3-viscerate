const FrameWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative  border-1 border-extraground p-1 md:w-[75%] md:h-[80%] my-9">
      <img
        src="/icons/gem.png"
        alt="gem"
        width={20}
        className="absolute top-0 left-1/2 -translate-x-1/2  -translate-y-10"
      />
      {children}
      <img
        src="/icons/gem.png"
        alt="gem"
        width={20}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-10"
      />
    </div>
  );
};

export default FrameWrapper;

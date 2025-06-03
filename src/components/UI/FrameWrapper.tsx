const FrameWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative border-double border-4 border-extraground p-1 w-full h-full my-9">
      <img
        src="/images-game-desc/gem.png"
        alt="gem"
        width={20}
        className="absolute top-0 left-1/2 -translate-x-1/2  -translate-y-10"
      />
      {children}
      <img
        src="/images-game-desc/gem.png"
        alt="gem"
        width={20}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-10"
      />
    </div>
  );
};

export default FrameWrapper;

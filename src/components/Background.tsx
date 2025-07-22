const DarkVideoBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden dark:block hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-40"
      >
        <source src="bg1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default DarkVideoBackground;

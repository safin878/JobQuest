import banner from "../../assets/banner.png";
const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay  bg-opacity-60"></div>
      <div className="hero-content text-neutral-content border  mx-10">
        <div className="max-w-md ">
          <h1 className=" text-5xl font-bold">Hello there</h1>
          <p>Dive Into Job Hunting Mission</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

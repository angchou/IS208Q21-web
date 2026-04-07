import homepageLogo from "../assets/homepage_logo.jpg";

export default function Homepage() {
  return (
    <div className="w-full px-4 mb-20">
      <div className="mt-32 md:mt-60 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 max-w-2xl mx-auto">
        <div className="w-full max-w-xs md:max-w-md">
          <img
            src={homepageLogo}
            alt=""
            className="w-full h-auto object-cover animate-float hover:rotate-6 transition"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-orange-500 mb-5">
            404NotFound
          </h1>
          <p className="text-lg md:text-2xl font-semibold">
            Even when the <span className="text-orange-500">link</span> breaks,
          </p>
          <p className="text-lg md:text-2xl font-semibold">
            our <span className="text-orange-500">connection</span> doesn't.
          </p>
        </div>
      </div>
    </div>
  );
}

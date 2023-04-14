
export default function Welcome() {
  return (
    <>
      <div
        id="home"
        className="flex flex-col gradient-pink-green min-h-screen min-w-full shadow-lg shadow-amber-300"
      >
      <div className="gradient-white min-h-screen mt-1">
        <div className="flex flex-row mx-auto items-center max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl py-10 sm:py-20 md:pt-30 lg:py-40 justify-center">
        <img src="./vietWave.png" className="w-40 h-40"></img>
          <p className="text-center font-bold italic font-serif text-7xl text-black z-10">
          Xin Chào! {"\n"}
          </p>
        <img src="./cuteVietBoy.png" className="w-40 h-40"></img>

        </div>
        <p className="font-sans font-bold text-7xl text-black text-center">
            We are <span className="text-9xl">VLA</span>
        </p>
      <p className="font-sans text-4xl text-black text-center pt-6">Our mission is to teach Vietnamese and have fun while doing it!</p>
      </div>
      </div>
    </>
  );
}

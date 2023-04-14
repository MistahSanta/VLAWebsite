
export default function Welcome() {
  return (
    <>
      <div
        id="home"
        className="flex flex-col gradient-pink-green
        h-screen w-screen border-b-4 border-white"
      >
    
        <div className="container mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl py-10 sm:py-20 md:py-30 lg:py-40">
          <p className="text-center italic font-serif text-7xl text-black z-10">
            Welcome to {"\n"}
          </p>
          <p className="z-10 font-bold font-sans text-7xl text-black text-center">
            Vietnamese Language Association
          </p>


        </div>
      </div>
    </>
  );
}

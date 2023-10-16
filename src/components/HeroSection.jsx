

const HeroSection = () => {
  return (
    <section id="hero" className={`relative pt-[13rem] pb-[10rem]`}>
      <div className="container relative z-10 flex items-center flex-col i md:flex-row justify-between gap-8">
        <div className="flex flex-[70%] items-center gap-5">
            <span className="bg-white w-16 h-[.6px] block"></span>
            <h2 className="text-xl">Made with react</h2>
        </div>
        <div className="">
            <p className="text-4xl">Shopping Cart using <span className="text-gray-300">React Context</span></p>
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
    </section>
  )
}

export default HeroSection

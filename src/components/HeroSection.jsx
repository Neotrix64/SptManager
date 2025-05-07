function HeroSection(){
    return(
        <div className="flex items-center justify-center mt-36">
           <div className="flex flex-col w-full items-center">
           <p className="text-4xl text-white font-semibold tracking-widest mb-5">What are we gonna do today?</p>
           <input type="text" className="outline-0 bg-[#22262c] p-3 pl-5 rounded-full w-[45%] text-white/60 focus:text-white text-xl border-2 border-transparent focus:border-amber-50 ease-in-out duration-300 shadow-black drop-shadow-2xl" placeholder="Look for an artist to manage..." />
           </div>
        </div>
    );
}

export default HeroSection;
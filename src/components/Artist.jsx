function Artist() {
  return (
    <div className="artists flex gap-2 justify-center mt-10">
      <div className="card bg-[#22262c] size-44 w-80 rounded-xl border-2 border-transparent hover:border-white overflow-hidden ease-in-out duration-300 cursor-pointer">
        <div className="relative w-full h-1/2">
          {/* Banner */}
          <div className="absolute inset-0 z-10">
            <img
              src="https://thatsuburban.warnerrecords.com/dw/image/v2/BHCC_PRD/on/demandware.static/-/Sites-Warner_US_Gold-Library/default/dwaa0f1bf7/suburban-banner.jpg?sw=768&sm=fit"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Imagen */}
          <div className="absolute -bottom-5 ml-3 z-11">
            <img
              src="https://i0.wp.com/cadernopop.com.br/wp-content/uploads/2021/11/Sub-Urban.jpg?resize=1024%2C848"
              alt=""
              className="size-16 object-cover rounded-full shadow-black drop-shadow-xl"
            />
          </div>
          <p
            className="absolute transform left-20 text-white z-20 -bottom-0 font-semibold text-2xl"
            style={{ textShadow: "1px 1px 2px black" }}
          >
            Sub Urban
          </p>
        </div>
      </div>






        {/* Carta #2 */}

        <div className="card bg-[#22262c] size-44 w-80 rounded-xl border-2 border-transparent hover:border-white overflow-hidden ease-in-out duration-300 cursor-pointer">
        <div className="relative w-full h-1/2">
          {/* Banner */}
          <div className="absolute inset-0 z-10">
            <img
              src="https://media.pitchfork.com/photos/6740ba51d090b666ccdcf211/2:1/w_2560%2Cc_limit/Kendrick-Lamar.jpeg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Imagen */}
          <div className="absolute -bottom-5 ml-3 z-11">
            <img
              src="https://i.scdn.co/image/ab6761610000517439ba6dcd4355c03de0b50918"
              alt=""
              className="size-16 object-cover rounded-full shadow-black drop-shadow-xl"
            />
          </div>
          <p
            className="absolute transform left-20 text-white z-20 -bottom-0 font-semibold text-2xl"
            style={{ textShadow: "1px 1px 2px black" }}
          >
            Kendrick Lamar
          </p>
        </div>
      </div>


      {/* Carta #3 */}


      <div className="card bg-[#22262c] size-44 w-80 rounded-xl border-2 border-transparent hover:border-white overflow-hidden ease-in-out duration-300 cursor-pointer">
        <div className="relative w-full h-1/2">
          {/* Banner */}
          <div className="absolute inset-0 z-10">
            <img
              src="https://i.pinimg.com/736x/a7/df/3b/a7df3b291dc46b96a9cade8f999e5d6d.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Imagen */}
          <div className="absolute -bottom-5 ml-3 z-11">
            <img
              src="https://lastfm.freetls.fastly.net/i/u/ar0/39441dbdb12742e1d04f079c9b94c94c.jpg"
              alt=""
              className="size-16 object-cover rounded-full shadow-black drop-shadow-xl"
            />
          </div>
          <p
            className="absolute transform left-20 text-white z-20 -bottom-0 font-semibold text-2xl"
            style={{ textShadow: "1px 1px 2px black" }}
          >
            Billie Eillish
          </p>
        </div>
      </div>




    </div>
  );
}

export default Artist;

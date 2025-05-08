import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Artist({ searchInput }) {
  const [artistas, setArtistas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/Artist/")
      .then((response) => {
        setArtistas(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function handleNavigation(artistaName) {
    navigate("/" + artistaName);
  }

  return (
    <div className="artists flex flex-wrap gap-2 justify-center mt-10 mb-10">
      {artistas
        .filter((artista) =>
          searchInput
            ? artista.name.toLowerCase().includes(searchInput.toLowerCase())
            : true
        )
        .map((artista, index) => {
          return (
            <div
              key={index}
              onClick={() => handleNavigation(artista._id)}
              className="card bg-[#22262c] size-44 w-80 rounded-xl border-2 border-transparent hover:border-white overflow-hidden ease-in-out duration-300 cursor-pointer"
            >
              <div className="relative w-full h-1/2">
                <div className="absolute inset-0 z-10">
                  <img
                    src={artista.banner}
                    alt={artista.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute -bottom-5 transform left-1/2 -translate-x-1/2 z-11">
                  <img
                    src={artista.profilePicture}
                    alt={artista.name}
                    className="size-16 object-cover rounded-full shadow-black drop-shadow-xl"
                  />
                </div>
                <p
                  className="absolute transform left-1/2 -translate-x-1/2 text-center text-white z-20 -bottom-12 font-semibold text-2xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-ellipsis overflow-hidden"
                  style={{
                    textShadow: "1px 1px 2px black",
                    whiteSpace: "nowrap",
                  }}
                >
                  {artista.name}
                </p>
                <p className="absolute transform left-1/2 -translate-x-1/2 text-center text-white/40 z-20 -bottom-16 font-semibold text-md max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg overflow-hidden">
                  {new Intl.NumberFormat().format(artista.monthListeners)}
                </p>

                  {/* <div className="album absolute transform left-1/2 -translate-x-1/2 -bottom-20 size-10 bg-black z-30">a</div> */}

              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Artist;

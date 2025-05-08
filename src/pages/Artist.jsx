import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Artist() {
  const [artista, setArtista] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:3000/Artist/" + id)
      .then((response) => {
        setArtista(response.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="text-black p-10">
      <h1 className="text-3xl font-bold">{artista.name}</h1>
      <img src={artista.profilePicture} alt={artista.name} className="mt-4 w-32 h-32 rounded-full object-cover" />
      <p className="mt-4">{artista.description}</p>
    </div>
  );
}

export default Artist;

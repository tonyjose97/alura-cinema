import { useParams } from "react-router-dom";
import Banner from "../../Components/Banner";
import Titulo from "../../Components/Titulo";

import styles from "./player.module.css";
import NotFound from "../NotFound";
import { useState,useEffect } from "react";

function Player() {
  const [video,setVideo] = useState([])
  const parametros = useParams();
 
  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/tonyjose97/alura-cinema-api/videos?id=${parametros.id}`)
    .then(response =>response.json())
    .then(data=>setVideo(...data))
  }, [])
  
  //const video = videos.find((video) => video.id === Number(parametros.id));
  
  if(!video) return <NotFound/>
  return (
    <>
      <Banner img="player" color="#BF008A"></Banner>
      <div className={styles.contenedor}>
        <Titulo>
          <h2>Players</h2>
        </Titulo>
        <section className={styles.container}>
          <iframe
            width="100%"
            height="100%"
            src={video.link}
            title={video.titulo}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </section>
      </div>
    </>
  );
}

export default Player;

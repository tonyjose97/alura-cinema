import Banner from "../../Components/Banner";
import Titulo from "../../Components/Titulo";
import Card from "../../Components/Card";
import styles from "./index.module.css"
import { useEffect, useState } from "react";


const Inicio = () => {
  const [videos,setVideos] = useState([])

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/tonyjose97/alura-cinema-api/videos")
    .then((response)=>response.json())
    .then((data)=>setVideos(data))
  }, [])
  

  return (
    <>
      
      <Banner img="home" color="#154580" />
      <Titulo>
        <h1>Un lugar para guardar sus videos favoritos </h1>
      </Titulo>
      <section className={styles.container} >
        {
            videos.map(video=>{
                return<Card {...video} key={video.id}></Card>

            })
        }
      </section>
     
    </>
  );
};

export default Inicio;

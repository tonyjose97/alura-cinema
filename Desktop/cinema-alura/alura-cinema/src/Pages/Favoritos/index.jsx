import styles from "./favoritos.module.css";
import Banner from "../../Components/Banner";
import Titulo from "../../Components/Titulo";
import { useFavoritosContext } from "../../Context/Favoritos";
import Card from "../../Components/Card";

const Favoritos = () => {
  const { favorito } = useFavoritosContext();
  return (
    <>
      <Banner img="favoritos" color="#00BF63" />
      <div className={styles.contenedor}>
        <Titulo>
          <h2 className={styles.titulo}>Favoritos</h2>
        </Titulo>

        <section className={styles.container}>
          {favorito.map((fav) => {
            return <Card {...fav} key={fav.id} />;
          })}
        </section>
      </div>
    </>
  );
};

export default Favoritos;

import styles from "./banner.module.css";

const Banner = ({ img, color }) => {
  return (
    <div
      className={styles.capa}
      style={{ backgroundImage: `url("/img/banner-${img}.png")` }}
    >
      <div
        className={styles.gradient}
        style={{ backgroundColor: `${color}` }}
      ></div>
    </div>
  );
};

export default Banner;

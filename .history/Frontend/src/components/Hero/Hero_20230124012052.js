import styles from "./Hero.module.css";
import img from "./image.png";
const Hero = () => {
  return (
    <div className={`${styles.heroWrapper} center`}>
      <div className={`${styles.heroInner}`}>
        <h2 className={styles.headerText}>
          Learn modern art, become a better artisan
        </h2>
        <div className={styles.slogan}>
          <p>The best way to evolve your creations</p>
        </div>
        <div className={styles.inputLocation}>
          <i className="fas fa-map-marker-alt"> </i>
          <input type="text" placeholder="Enter your address" />
          <i className={`${styles.arrow} fas fa-arrow-right`}></i>
        </div>
      </div>
      <div className={styles.heroImage}>
        <img
          src={img}
          alt=""
        />
      </div>
    </div>
  );
};
export default Hero;

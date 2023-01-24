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
          <p>The best way to evolve your creations. \n Learn from the best instructors and artists.</p>
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

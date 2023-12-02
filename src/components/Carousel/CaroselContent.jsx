import styles from "./carosel.module.css";

const CaroselContent = ({ Src }) => {
  return (
    <div id={styles.carouselWrapper}>
      <div className="">
        <div id={styles.carouselImg}>
          <img src={Src} className="d-block w-100 h-100" alt="..." />
        </div>
      </div>
    </div>
  );
};

export default CaroselContent;

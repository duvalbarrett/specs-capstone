import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/homepage.module.css";

function Home() {
  return (
    <div className="home-container">
      <div className="topbanner"></div>
      <div className="ads-row-1">
        <img
          className={styles.ads1}
          src="https://c2.staticflickr.com/4/3665/9499415587_3da844cd18_b.jpg"
          alt=""
        />
      </div>
      <div className="ads-2-container">
        <div className="ad-text-3">
          <Link to="/phones">
            <img
              className={styles.ads2}
              img
              src="https://i.pinimg.com/originals/31/93/90/319390e08180abe1a8bf4a63a92524fc.jpg"
              alt=""
            />
          </Link>
        </div>

        <div className="ads-row-3">
          <Link to="/games">
            <img
              className={styles.ads3}
              src={require("../images/console.jpg")}
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
